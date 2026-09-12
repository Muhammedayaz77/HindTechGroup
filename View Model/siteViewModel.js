import{$,$$,getTheme,setTheme,revealOnScroll}from'../Helper/siteHelper.js';

export class SiteViewModel{
 init(){setTheme(getTheme());this.theme();this.menu();this.year();this.forms();revealOnScroll()}
 theme(){const b=$('#themeToggle');if(!b)return;const u=()=>{const d=document.documentElement.dataset.theme==='dark';b.textContent=d?'☀':'◐';b.setAttribute('aria-label',d?'Switch to light theme':'Switch to dark theme')};b.addEventListener('click',()=>{setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');u()});u()}
 menu(){const b=$('#menuToggle'),n=$('#mainNav');if(!b||!n)return;b.addEventListener('click',()=>{const o=n.classList.toggle('is-open');b.setAttribute('aria-expanded',String(o))});$$('#mainNav a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('is-open')))}
 year(){const y=$('#year');if(y)y.textContent=new Date().getFullYear()}
 forms(){$$('form[data-demo-form]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();if(!f.checkValidity()){f.reportValidity();return}const data=new FormData(f);const subject=encodeURIComponent(data.get('subject')||'Website enquiry');const body=encodeURIComponent('Name: '+data.get('name')+'\nEmail: '+data.get('email')+'\n\n'+data.get('message'));window.location.href='mailto:hindtechgroup@gmail.com?subject='+subject+'&body='+body}))}
}
document.addEventListener('DOMContentLoaded',()=>new SiteViewModel().init());