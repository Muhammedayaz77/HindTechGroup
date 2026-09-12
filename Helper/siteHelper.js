const EMAIL=atob('aGluZHRlY2hncm91cEBnbWFpbC5jb20');
export const $=(s,r=document)=>r.querySelector(s);
export const $$=(s,r=document)=>[...r.querySelectorAll(s)];
export const getTheme=()=>localStorage.getItem('htg-theme')||(window.matchMedia?.('(prefers-color-scheme: dark)').matches?'dark':'light');
export const setTheme=t=>{document.documentElement.dataset.theme=t;localStorage.setItem('htg-theme',t)};
export const openEmail=(subject='',body='')=>{const q=new URLSearchParams();if(subject)q.set('subject',subject);if(body)q.set('body',body);window.location.href='mailto:'+EMAIL+(q.toString()?'?'+q.toString():'')};
export const revealOnScroll=()=>{const items=$$('.reveal');if(!('IntersectionObserver'in window)){items.forEach(e=>e.classList.add('is-visible'));return}const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');o.unobserve(e.target)}}),{threshold:.12});items.forEach(e=>o.observe(e))};