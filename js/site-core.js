// Shared site data, helper functions, media gallery, and partners.
// EDIT PRICES HERE when Troy Toney Racing finalizes service rates.
// Example: change 'To be announced' to '$75 / hour'.
const serviceRates = [
  {name:'Driver development & coaching', rate:'To be announced', note:'Individual or group coaching details available by inquiry.'},
  {name:'Race-day support', rate:'To be announced', note:'Race-weekend assistance tailored to the event.'},
  {name:'Team participation', rate:'To be announced', note:'Participation arrangements depend on the program and availability.'},
  {name:'New driver & parent guidance', rate:'To be announced', note:'Getting-started guidance for drivers and families.'},
  {name:'Kart setup & technical support', rate:'To be announced', note:'Equipment assessment, preparation and setup support.'},
  {name:'Arrive & drive / team kart opportunities', rate:'To be announced', note:'By inquiry; kart, schedule and driver suitability determine availability. No seat is guaranteed.'}
];
const servicePricingCards = () => serviceRates.map((item) => `<article class="service-price-card"><div class="service-price-top"><span class="service-price-label">SERVICE PRICING</span><span class="service-price-status">AVAILABLE · BY INQUIRY</span></div><h3>${item.name}</h3><div class="service-price-value">${item.rate}</div><p>${item.note}</p><a class="service-price-link" href="#contact?type=services">Ask about this service</a></article>`).join('');

const link=(hash,label,alt=false)=>`<a class="btn ${alt?'alt':''}" href="#${hash}">${label}</a>`;
const hero=(eyebrow,title,desc,actions='')=>`<div class="hero"><div class="wrap"><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p class="lead">${desc}</p><div class="buttons">${actions}</div></div></div>`;
const card=(tag,title,desc,extra='',red=false)=>`<article class="card ${red?'red':''}"><div class="kicker">${tag}</div><h3>${title}</h3><p>${desc}</p>${extra}</article>`;
const teamProfiles={
 '10':{ photoSrc: "assets/drivers/nic-bailey.jpg", careerStats: {"Wins": 0, "Podiums": 3, "Championships": 0},name:'Nic Bailey',role:'Team driver',className:'LO206 Masters',status:'Team driver',bio:"Nic Bailey has been chasing tenths in 206 Masters for three years now, and he'll be the first to admit the learning curve doesn't stop. Every race weekend is a mix of small wins, bigger lessons, and the occasional reminder that karting keeps everyone humble. He's all in on getting better lap by lap — and having a good time doing it.",photo:'Photo coming soon',action:'Sponsor this driver',actionUrl:'#contact?type=sponsor&driver=10'},
 '713':{ photoSrc: "assets/drivers/connor-dunk.jpg", careerStats: {"Race starts": 8, "Wins": 0, "Podiums": 0, "Championships": 0},name:'Connor Dunk',role:'Team driver',className:'LO206 Senior',status:'Full rookie season · 2027',bio:"Connor Dunk is the newest face in the 206 Senior class, and he knows it — every race weekend is another lesson, and he's soaking up every bit of it. What stands out most is how well he listens: to his coaches, his data, his own mistakes. Still early in the learning curve, but the kind of rookie who's going to move up it fast.",photo:'Photo coming soon',action:'Ask about driver sponsorship',actionUrl:'#contact?type=sponsor'},
 '24': { photoSrc: "assets/drivers/troy-toney.jpg", careerStats: {"Race starts": 61, "Wins": 15, "Podiums": 37, "Championships": 2},
   name: 'Troy Toney', role: 'Team driver', className: 'LO206 Masters',
   status: 'Team driver', bio: "Five years in, Troy Toney is still the first one at the track and the last one to leave. A SIRA 2024 Series champion, he's backed up the trophy case with the same work that built it — clean setups, honest feedback, and a program worth trusting. He built Troy Toney Racing not just to race, but to give other drivers that same shot: the kind where a mistake gets a debrief instead of a lecture, and every driver on the roster knows someone's got their back. Ask anyone on the team and they'll tell you: Troy's as much a mentor as he is a fierce competitor, and he wouldn't have it any other way.",
   photo: 'Photo coming soon'
 },
 '808': { photoSrc: "assets/drivers/jiju-sivakumar.jpg", careerStats: {"Race starts": 47, "Wins": 15, "Podiums": 35, "Championships": 2},
   name: 'Jiju Sivakumar', role: 'Team driver', className: 'KA100 and LO206 Senior',
   status: 'Team driver', bio: "Jiju Sivakumar ran a half season last year, and it was enough to put him on top — he took the SIRA 2025 LO206 Juniors Championship before even racing a full year. Now he's taking on his first full season in both 206 Junior and KA Junior. Balancing two classes is no small task, but it suits him — Jiju races with a passion that's obvious from the moment he's on track, backed by a smart, calculated approach and a level of ambition that makes it clear he's just getting started.",
   photo: 'Photo coming soon'
 },
 '900': { photoSrc: "assets/drivers/colten-kelly.jpg", careerStats: {"Wins": 0, "Podiums": 7, "Championships": 0},
   name: 'Colten Kelly', role: 'Team driver', className: 'LO206 Senior',
   status: 'Team driver', bio: "Colten Kelly is two and a half years into karting and now in his second full season of 206 Senior — and the results are showing it. He finished runner-up in the championship his first full season, then came back and took the points lead in his second. His driving style is built on smarts first, reading the race and picking his moments — but every weekend, he's bringing a little more aggression to back it up.",
   photo: 'Photo coming soon'
 }
};
const teamCard=(num,name,detail)=>`<button type="button" class="team-card" data-profile="${num}" aria-haspopup="dialog" aria-label="View profile for kart ${num}"><span class="team-number">#${num}</span><span class="kicker">TTR TEAM DRIVER</span><span class="team-name">${name}</span><span class="team-detail">${detail}</span><span class="team-link">VIEW PROFILE</span></button>`;
function openProfile(num) {
  const profile = teamProfiles[num];
  const dialog = document.getElementById('teamProfile');
  if (!profile || !dialog) return;
  const fields = { Number: '#' + num, Name: profile.name, Role: profile.role,
    Class: profile.className, Status: profile.status, Bio: profile.bio, Photo: profile.photo };
  for (const [key, value] of Object.entries(fields)) {
    document.getElementById('profile' + key).textContent = value;
  }
  if (profile.photoSrc) {
    const photo = document.createElement('img');
    photo.src = profile.photoSrc;
    photo.alt = profile.name;
    document.getElementById('profilePhoto').replaceChildren(photo);
  }
  const stats = document.getElementById('profileStats');
  stats.replaceChildren();
  for (const label of ['Race starts', 'Wins', 'Podiums', 'Championships']) {
    const row = document.createElement('div');
    const title = document.createElement('dt');
    const total = document.createElement('dd');
    title.textContent = label;
    total.textContent = profile.careerStats?.[label] ?? 'Pending';
    row.append(title, total);
    stats.append(row);
  }
  document.getElementById('profileAction').href = '#contact?type=sponsor&driver=' + encodeURIComponent(num);
  dialog.showModal();
}
// Gallery keeps the existing category filtering and photo viewer.
// MP4 files are indexed by GitHub Actions; YouTube entries live in videos.json.
let galleryPhotos=[];
let galleryVideos=[];
let activeGalleryCategory='All Photos';
let activeMediaType='all';
const galleryCategories=['All Photos','Race Weekends','Behind the Scenes','Team Events','Driver Development'];
const mediaTypes=[['all','All Media'],['photos','Photos'],['videos','Videos']];
const galleryEscape=(value)=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
function youtubeId(value){
  if(typeof value!=='string')return null;
  try {const u=new URL(value);const h=u.hostname.toLowerCase().replace(/^www\./,'');let id=null;
    if(h==='youtu.be')id=u.pathname.slice(1).split('/')[0];
    else if(h==='youtube.com'||h==='m.youtube.com'||h==='youtube-nocookie.com')id=u.pathname.startsWith('/shorts/')||u.pathname.startsWith('/embed/')?u.pathname.split('/')[2]:u.pathname==='/watch'?u.searchParams.get('v'):null;
    return /^[a-zA-Z0-9_-]{11}$/.test(id||'')?id:null;
  }catch{return null;}
}
async function loadGallery(){
  try {
    const [photosResponse,videosResponse]=await Promise.all([fetch('gallery.json?updated='+Date.now(),{cache:'no-store'}),fetch('videos.json?updated='+Date.now(),{cache:'no-store'})]);
    if(photosResponse.ok){const photos=await photosResponse.json();galleryPhotos=Array.isArray(photos)?photos.filter(p=>typeof p.src==='string'&&p.src.startsWith('assets/gallery/')&&typeof p.title==='string'):[];}
    // Shuffle once after loading so filters preserve the same mixed order.
    for (let i = galleryPhotos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [galleryPhotos[i], galleryPhotos[j]] = [galleryPhotos[j], galleryPhotos[i]];
    }
    if(videosResponse.ok){const videos=await videosResponse.json();galleryVideos=Array.isArray(videos)?videos.filter(v=>v&&typeof v.title==='string'&&['youtube','mp4'].includes(v.type)&&(v.type==='youtube'?!!youtubeId(v.url):typeof v.src==='string'&&v.src.startsWith('assets/gallery/')&&/\.mp4$/i.test(v.src))):[];}
  }catch(error){console.info('Gallery media will appear when published.',error.message);}
  if((location.hash.slice(1)||document.body.dataset.page||'home').split('?')[0]==='gallery')render();
}
const galleryPage = () => {
  const tiles = galleryPhotos.map((photo, index) => `
    <button type="button" class="photo-card" data-gallery-index="${index}" aria-label="View ${galleryEscape(photo.title)}">
      <div class="gallery-thumb"><img src="${galleryEscape(photo.src)}" alt="" loading="lazy"></div>
    </button>`).join('');
  return `<section class="section-dark"><div class="wrap">
    <h1>Gallery</h1>
    ${tiles ? `<div class="team-photo-grid">${tiles}</div>` : '<p>Race photos will appear here.</p>'}
  </div></section>`;
};
function playGalleryVideo(index){
  const v=galleryVideos[index],d=document.getElementById('galleryVideoDialog');if(!v||!d)return;
  const frame=d.querySelector('.gallery-video-content');frame.replaceChildren();
  if(v.type==='youtube'){
    const id=youtubeId(v.url);if(!id)return;
    const iframe=document.createElement('iframe');iframe.src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;iframe.title=v.title;iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';frame.append(iframe);
  }else{
    const video=document.createElement('video');video.src=v.src;video.controls=true;video.autoplay=true;video.playsInline=true;video.preload='metadata';frame.append(video);
  }
  d.querySelector('.gallery-video-title').textContent=v.title;d.showModal();
}
// Current partners: reorder entries to change display order; set featured:true for optional priority styling.
const currentPartners = [];
function currentPartnerCards(){return currentPartners.map(p=>`<a class="partner-card${p.featured?' partner-featured':''}" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${p.name} on Facebook"><span class="partner-logo"><img src="${p.logo}" alt="${p.name} logo" loading="lazy"></span><strong>${p.name}</strong><span class="partner-visit">Visit partner</span></a>`).join('');}


const pages = {};
