(() => {
  'use strict';

  const slides = [...document.querySelectorAll('.slide')];
  const nextButton = document.getElementById('nextButton');
  const backButton = document.getElementById('backButton');
  const replayButton = document.getElementById('replayButton');
  const playPauseButton = document.getElementById('playPauseButton');
  const fullscreenButton = document.getElementById('fullscreenButton');
  const restartButton = document.getElementById('restartButton');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  const slideDots = document.getElementById('slideDots');
  const gateHint = document.getElementById('gateHint');
  const presentation = document.getElementById('presentation');

  let current = 0;
  let mediaPaused = false;
  const watchedOnce = slides.map(() => false);
  const videoBySlide = slides.map(slide => slide.querySelector('video'));

  slides.forEach((slide, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'slide-dot';
    dot.setAttribute('aria-label', `Go to ${slide.dataset.label}`);
    dot.addEventListener('click', () => showSlide(index));
    slideDots.appendChild(dot);

    const video = videoBySlide[index];
    if (video) {
      video.addEventListener('timeupdate', () => {
        if (!watchedOnce[index] && video.duration && video.currentTime >= Math.max(0.5, video.duration - 0.35)) {
          watchedOnce[index] = true;
          updateControls();
        }
      });
    }
  });

  function activeVideos() {
    return [...slides[current].querySelectorAll('video')];
  }

  function currentVideo() {
    return videoBySlide[current];
  }

  function currentRequiresWatch() {
    return !!currentVideo() && !watchedOnce[current];
  }

  function pauseAllMedia() {
    document.querySelectorAll('video').forEach(video => video.pause());
  }

  function playActiveMedia(reset = false) {
    const videos = activeVideos();
    if (!videos.length || mediaPaused) return;
    videos.forEach(video => {
      if (reset) video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(() => {});
    });
  }

  function updateMediaControls() {
    const hasMedia = activeVideos().length > 0;
    replayButton.style.visibility = hasMedia ? 'visible' : 'hidden';
    playPauseButton.style.visibility = hasMedia ? 'visible' : 'hidden';
    playPauseButton.classList.toggle('is-paused', mediaPaused);
    playPauseButton.setAttribute('aria-label', mediaPaused ? 'Play loop' : 'Pause loop');
  }

  function updateGateHint(gated) {
    if (!gateHint) return;
    if (gated) {
      gateHint.textContent = 'Watch the first playthrough to unlock Next.';
      gateHint.classList.add('is-active');
      gateHint.classList.remove('is-complete');
    } else if (currentVideo() && watchedOnce[current]) {
      gateHint.textContent = 'First playthrough complete. You can continue.';
      gateHint.classList.add('is-complete');
      gateHint.classList.remove('is-active');
    } else {
      gateHint.textContent = '';
      gateHint.classList.remove('is-active', 'is-complete');
    }
  }

  function updateControls() {
    backButton.disabled = current === 0;
    const last = current === slides.length - 1;
    const gated = currentRequiresWatch();
    const intro = current === 0;
    nextButton.style.visibility = (last || intro) ? 'hidden' : 'visible';
    nextButton.disabled = !last && gated;
    nextButton.classList.toggle('is-gated', gated);
    progressFill.style.width = `${(current / (slides.length - 1)) * 100}%`;
    progressText.textContent = slides[current].dataset.label;
    [...slideDots.children].forEach((dot, index) => {
      const locked = index > current + 1 || (index > current && gated);
      dot.classList.toggle('active', index === current);
      dot.disabled = locked;
      dot.classList.toggle('is-locked', locked);
    });
    updateMediaControls();
    updateGateHint(gated);
  }

  function showSlide(index) {
    const next = Math.max(0, Math.min(slides.length - 1, index));
    if (next === current || next > current + 1) return;
    if (next > current && currentRequiresWatch()) {
      updateControls();
      return;
    }

    const oldSlide = slides[current];
    const direction = next > current ? 'forward' : 'back';
    pauseAllMedia();
    oldSlide.classList.remove('active');
    oldSlide.classList.toggle('exiting-left', direction === 'forward');

    current = next;
    mediaPaused = false;
    const newSlide = slides[current];
    newSlide.classList.remove('exiting-left');
    newSlide.classList.add('active');
    updateControls();
    requestAnimationFrame(() => playActiveMedia(true));

    if (current === slides.length - 1) {
      window.parent.postMessage({ type: 'complete' }, '*');
    }
    reportHeight();
  }

  function next() { showSlide(current + 1); }
  function back() { showSlide(current - 1); }

  nextButton.addEventListener('click', next);
  backButton.addEventListener('click', back);
  document.querySelectorAll('[data-next]').forEach(button => button.addEventListener('click', next));
  restartButton?.addEventListener('click', () => showSlide(0));

  playPauseButton.addEventListener('click', () => {
    const videos = activeVideos();
    if (!videos.length) return;
    mediaPaused = !mediaPaused;
    if (mediaPaused) videos.forEach(video => video.pause());
    else playActiveMedia(false);
    updateMediaControls();
  });

  replayButton.addEventListener('click', () => {
    mediaPaused = false;
    activeVideos().forEach(video => {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(() => {});
    });
    updateMediaControls();
    updateGateHint(currentRequiresWatch());
  });

  fullscreenButton.addEventListener('click', async () => {
    try {
      if (!document.fullscreenElement) await presentation.requestFullscreen();
      else await document.exitFullscreen();
    } catch (error) {
      console.warn('Full-screen mode was not available.', error);
    }
  });

  document.addEventListener('keydown', event => {
    const tag = event.target?.tagName?.toLowerCase();
    if (['input', 'textarea', 'select', 'button'].includes(tag)) return;
    if (['ArrowRight', 'PageDown'].includes(event.key)) {
      event.preventDefault();
      next();
    }
    if (['ArrowLeft', 'PageUp'].includes(event.key)) {
      event.preventDefault();
      back();
    }
    if (event.key.toLowerCase() === 'r') replayButton.click();
    if (event.key.toLowerCase() === 'f') fullscreenButton.click();
    if (event.key === ' ') {
      event.preventDefault();
      playPauseButton.click();
    }
  });

  document.addEventListener('fullscreenchange', () => {
    fullscreenButton.setAttribute('aria-label', document.fullscreenElement ? 'Exit full screen' : 'Open full screen');
  });

  function reportHeight() {
    const height = Math.ceil(document.documentElement.scrollHeight);
    window.parent.postMessage({ type: 'resize', height }, '*');
  }

  if ('ResizeObserver' in window) {
    new ResizeObserver(reportHeight).observe(document.body);
  }
  window.addEventListener('load', reportHeight);
  window.addEventListener('resize', reportHeight);

  updateControls();
  playActiveMedia(false);
  reportHeight();
})();
