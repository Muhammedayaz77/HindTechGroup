import { $, $$, getTheme, setTheme, revealOnScroll } from '../Helper/siteHelper.js';

export class SiteViewModel {
  init() {
    setTheme(getTheme());
    this.theme();
    this.menu();
    this.year();
    this.forms();
    revealOnScroll();
  }
  theme() {
    const b = $('#themeToggle'); if (!b) return;
    const update = () => { const dark = document.documentElement.dataset.theme === 'dark'; b.textContent = dark ? '☀' : '◐'; b.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme'); };
    b.addEventListener('click', () => { setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'); update(); });
    update();
  }
  menu() {
    const b=$('#menuToggle'), n=$('#mainNav'); if(!b||!n) return;
    b.addEventListener('click',()=>{const open=n.classList.toggle('is-open');b.setAttribute('aria-expanded',String(open));});
    $$('#mainNav a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('is-open')));
  }
  year(){const y=$('#year');if(y)y.textContent=new Date().getFullYear();}
  forms(){
    $$('form[data-demo-form]').forEach(f=>f.addEventListener('submit',e=>{
      e.preventDefault(); if(!f.checkValidity()){f.reportValidity();return;}
      const s=f.querySelector('.formStatus'); if(s)s.textContent='Thanks — your message is ready for HindTechGroup.'; f.reset();
    }));
  }
}
document.addEventListener('DOMContentLoaded',()=>new SiteViewModel().init());
