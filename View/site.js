import'../View Model/siteViewModel.js';import{renderBusinesses,renderServices}from'./app.js';
function init(){renderBusinesses();renderServices()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();