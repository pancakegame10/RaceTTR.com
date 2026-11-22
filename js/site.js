// Shared navigation, page routing, form handling, and site interactions.
// Edit page content in pages/*.js instead.

let formType='general';
function render(){const hash=decodeURIComponent(location.hash.slice(1)||document.body.dataset.page||'home'),page=hash.split('?')[0];document.getElementById('app').innerHTML=(pages[page]||pages.home)();document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',(a.dataset.page || a.hash.slice(1))===page));document.getElementById('nav').classList.remove('open');window.scrollTo(0,0);if(page==='gallery'){document.querySelectorAll('[data-gallery-category]').forEach(b=>b.addEventListener('click',()=>{activeGalleryCategory=b.dataset.galleryCategory;render();}));document.querySelectorAll('[data-gallery-index]').forEach(b=>b.addEventListener('click',()=>{const p=galleryPhotos[Number(b.dataset.galleryIndex)];if(!p)return;const d=document.getElementById('galleryLightbox');d.querySelector('img').src=p.src;d.querySelector('img').alt=p.title;d.querySelector('figcaption').hidden=true;d.showModal()}));document.querySelectorAll('[data-media-type]').forEach(b=>b.addEventListener('click',()=>{activeMediaType=b.dataset.mediaType;render()}));document.querySelectorAll('[data-video-index]').forEach(b=>b.addEventListener('click',()=>playGalleryVideo(Number(b.dataset.videoIndex))))}if(page==='paddock'){document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');document.querySelectorAll('.post').forEach(p=>p.classList.toggle('hidden',b.dataset.filter!=='All'&&p.dataset.category!==b.dataset.filter))}))}}
document.getElementById('menu').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));window.addEventListener('hashchange',render);render();

document.addEventListener('click',e=>{const card=e.target.closest('[data-profile]');if(card)openProfile(card.dataset.profile);});
const profileDialog=document.getElementById('teamProfile');profileDialog.addEventListener('click',e=>{if(e.target===profileDialog)profileDialog.close();});
profileDialog.querySelector('.profile-close').addEventListener('click',()=>profileDialog.close());
profileDialog.querySelector('#profileAction').addEventListener('click',()=>profileDialog.close());
loadGallery();

// Expand beginner guides when printing, then restore the visitor's open/closed choices.
let _printClosedResources=[];
window.addEventListener('beforeprint',()=>{_printClosedResources=[...document.querySelectorAll('.resource-card:not([open])')];_printClosedResources.forEach(x=>x.open=true)});
window.addEventListener('afterprint',()=>{_printClosedResources.forEach(x=>x.open=false);_printClosedResources=[]});
