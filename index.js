import{a as c,i as n}from"./assets/vendor-4yCzdkXl.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function u(t){return`<li class="gallery-item">
          <img src="${t.webformatURL}" alt="${t.tags}" class="" />
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
        </li>`}function m(t){const s=t.map(u).join("");return a.gallery.innerHTML=s,s}c.defaults.baseURL="https://pixabay.com";function p(t){t.preventDefault();const s=a.searchInput.value.trim();s&&(a.form.reset(),c.get("/api/",{params:{key:"48862080-31d0d2e2035ba3e1d36ba0d4d",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>{const o=i.data.hits;o.length===0&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(o)}).catch(i=>{console.log(i)}))}const a={searchBtn:document.querySelector(".js-search-btn"),searchInput:document.querySelector(".js-search-field"),form:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery")};a.form.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
