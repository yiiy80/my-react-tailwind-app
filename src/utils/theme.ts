export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'site-theme';

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'light') {
    root.classList.add('theme-light');
  } else {
    root.classList.remove('theme-light');
  }
}

export function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (e) {
    // ignore
  }
}

export function getSavedTheme(): Theme | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'light' || v === 'dark') return v;
  } catch (e) {
    // ignore
  }
  return null;
}

export function detectPreferredTheme(): Theme {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

export function initTheme() {
  const saved = getSavedTheme();
  const theme = saved ?? detectPreferredTheme();
  applyTheme(theme);
  return theme;
}

export function toggleTheme(current?: Theme): Theme {
  const next: Theme = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
  saveTheme(next);
  return next;
}

export default {
  initTheme,
  toggleTheme,
  applyTheme,
  getSavedTheme,
  detectPreferredTheme,
};
