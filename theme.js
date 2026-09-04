(function () {
  const storageKey = 'portfolio-theme';
  const root = document.documentElement;
  const systemDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  let saved = null;
  try { saved = localStorage.getItem(storageKey); } catch (_) {}
  let theme = saved === 'light' || saved === 'dark' ? saved : (systemDark ? 'dark' : 'light');

  function labels(next) {
    const spanish = root.lang === 'es';
    return spanish
      ? (next === 'dark' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro')
      : (next === 'dark' ? 'Switch to dark mode' : 'Switch to light mode');
  }

  function announce() {
    document.querySelectorAll('iframe').forEach(frame => {
      try { frame.contentWindow.postMessage({ type: 'portfolio-theme', theme }, '*'); } catch (_) {}
    });
  }

  function apply(next, persist) {
    theme = next;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    const button = document.querySelector('.theme-toggle');
    if (button) {
      const action = labels(theme === 'light' ? 'dark' : 'light');
      button.setAttribute('aria-label', action);
      button.title = action;
      button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }
    if (persist) {
      try { localStorage.setItem(storageKey, theme); } catch (_) {}
    }
    announce();
  }

  apply(theme, false);
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    apply(theme, false);
    button?.addEventListener('click', () => apply(theme === 'light' ? 'dark' : 'light', true));
    document.querySelectorAll('iframe').forEach(frame => frame.addEventListener('load', announce));
  });
})();
