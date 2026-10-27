#!/usr/bin/env python3
"""Mirror the portfolio's already-public Netlify files into this GitHub repo.

The manifest records paths from the packaged, publicly adapted portfolio,
not private source archives. Aborts before modifying the site on any
missing/invalid file.
"""
import base64
import concurrent.futures
import hashlib
import pathlib
import shutil
import urllib.error
import urllib.parse
import urllib.request
import zlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
BASE = "https://portafoliofabianvillarreala.netlify.app/"
MANIFEST = ROOT / "scripts" / "portfolio-paths.b64"
STAGING = ROOT / ".portfolio-staging"
KEEP = {".git", ".github", "scripts", ".portfolio-staging"}

def one(path):
    relative = pathlib.PurePosixPath(path)
    if relative.is_absolute() or ".." in relative.parts:
        raise ValueError("Unsafe manifest path: " + path)
    url = urllib.parse.urljoin(BASE, urllib.parse.quote(path))
    request = urllib.request.Request(url, headers={"User-Agent": "Portfolio-GitHub-Sync/1.0"})
    with urllib.request.urlopen(request, timeout=45) as response:
        body = response.read()
        mime = response.headers.get("Content-Type", "").lower()
        if response.status != 200 or not body:
            raise ValueError("Missing / empty public file: " + path)
        if ("text/html" in mime and pathlib.PurePosixPath(path).suffix.lower()
            in {".png", ".jpg", ".jpeg", ".gif", ".webp", ".mp3", ".mp4", ".svg", ".woff", ".woff2"}):
            raise ValueError("Media served as HTML, likely missing: " + path)
    dest = STAGING / path
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(body)
    return (path, len(body))

def main():
    paths = zlib.decompress(base64.b64decode(MANIFEST.read_text().strip())).decode().splitlines()
    paths = list(dict.fromkeys(paths))
    expected = {f"activities/{i:02d}/index.html" for i in range(1, 19)}
    if not expected.issubset(set(paths)) or "index.html" not in paths or len(paths) < 500:
        raise ValueError("Portfolio manifest incomplete")
    if STAGING.exists():
        shutil.rmtree(STAGING)
    STAGING.mkdir()
    failures = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        futures = {pool.submit(one, path): path for path in paths}
        for future in concurrent.futures.as_completed(futures):
            try:
                future.result()
            except Exception as exc:
                failures.append((futures[future], str(exc)))
    if failures:
        for path, error in failures[:25]:
            print("FAILED", path, error)
        raise RuntimeError(f"{len(failures)} required public files unavailable; preserving repository")
    print(f"Downloaded {len(paths)} verified public files")
    for item in ROOT.iterdir():
        if item.name in KEEP:
            continue
        if item.is_dir():
            shutil.rmtree(item)
        else:
            item.unlink()
    for item in list(STAGING.iterdir()):
        shutil.move(str(item), str(ROOT / item.name))
    STAGING.rmdir()
    (ROOT / ".nojekyll").write_text("\n")
    print("Portfolio staged successfully: homepage, all 18 activities, media and styles")

if __name__ == "__main__":
    main()
