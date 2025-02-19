import{S as n,a as c,i as m}from"./assets/vendor-BDaiwwc1.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function u(t){return`<li class="gallery-item">
          <div class="img-wrapper">
          <a href="${t.largeImageURL}" class="gallery-link">
          <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img" />
          </a>
          </div>
          <ul class="img-text-list">
            <li class="img-text-item first-category">
              <p class="img-text-category">Likes</p>
              <p class="img-text-value">${t.likes}</p>
            </li>
            <li class="img-text-item second-category">
              <p class="img-text-category">Views</p>
              <p class="img-text-value">${t.views}</p>
            </li>
            <li class="img-text-item third-category">
              <p class="img-text-category">Comments</p>
              <p class="img-text-value">${t.comments}</p>
            </li>
            <li class="img-text-item">
              <p class="img-text-category">Downloads</p>
              <p class="img-text-value">${t.downloads}</p>
            </li>
          </ul>
        </li>`}const p=new n(".gallery a",{captionsData:"alt",captionDelay:250});function g(t){const s=t.map(u).join("");return a.gallery.innerHTML=s,p.refresh(),s}c.defaults.baseURL="https://pixabay.com";function f(t){t.preventDefault();const s=a.searchInput.value.trim();s&&(a.gallery.innerHTML='<span class="loader"></span>',a.form.reset(),c.get("/api/",{params:{key:"48862080-31d0d2e2035ba3e1d36ba0d4d",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>{const i=o.data.hits;if(i.length===0)throw new Error;g(i)}).catch(o=>{a.gallery.innerHTML="",m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",maxWidth:"432px",iconUrl:"/img/icon.svg"})}))}const a={searchBtn:document.querySelector(".js-search-btn"),searchInput:document.querySelector(".js-search-field"),form:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery")};a.form.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
