export const $ = (selector, root = document) => root.querySelector(selector);
export const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
export const getTheme = () => localStorage.getItem('htg-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
export const setTheme = theme => { document.documentElement.dataset.theme = theme; localStorage.setItem('htg-theme', theme); };
export const revealOnScroll = () => {
  const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }), {threshold:.12});
  $$('.reveal').forEach(el => observer.observe(el));
};
