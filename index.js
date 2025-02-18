import{S as c,a as n,i as u}from"./assets/vendor-BDaiwwc1.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function m(t){return`<li class="gallery-item">
          <a href="${t.largeImageURL}" class="gallery-link">
          <img src="${t.webformatURL}" alt="${t.tags}" class="" />
          </a>
          <ul class="img-text-list">
            <li class="img-text-item">
              <p class="img-text-category">Likes</p>
              <p class="img-text-value">${t.likes}</p>
            </li>
            <li class="img-text-item">
              <p class="img-text-category">Views</p>
              <p class="img-text-value">${t.views}</p>
            </li>
            <li class="img-text-item">
              <p class="img-text-category">Comments</p>
              <p class="img-text-value">${t.comments}</p>
            </li>
            <li class="img-text-item">
              <p class="img-text-category">Downloads</p>
              <p class="img-text-value">${t.downloads}</p>
            </li>
          </ul>
        </li>`}const p=new c(".gallery a",{captionsData:"alt",captionDelay:250});function f(t){const s=t.map(m).join("");return a.gallery.innerHTML=s,p.refresh(),s}n.defaults.baseURL="https://pixabay.com";function g(t){t.preventDefault();const s=a.searchInput.value.trim();s&&(a.gallery.innerHTML='<span class="loader"></span>',a.form.reset(),n.get("/api/",{params:{key:"48862080-31d0d2e2035ba3e1d36ba0d4d",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(l=>{const i=l.data.hits;if(i.length===0)throw new Error;f(i)}).catch(l=>{a.gallery.innerHTML="",u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}))}const a={searchBtn:document.querySelector(".js-search-btn"),searchInput:document.querySelector(".js-search-field"),form:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery")};a.form.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
