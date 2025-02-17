import{a as n,i as c}from"./assets/vendor-4yCzdkXl.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function u(t){return`<li class="gallery-item">
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
        </li>`}function m(t){i.gallery.innerHTML="<p>Loading images, please wait...</p>";const s=t.map(u).join("");return i.gallery.innerHTML=s,s}n.defaults.baseURL="https://pixabay.com";function p(t){t.preventDefault();const s=i.searchInput.value.trim();s&&(i.form.reset(),n.get("/api/",{params:{key:"48862080-31d0d2e2035ba3e1d36ba0d4d",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>{const a=o.data.hits;if(a.length===0)throw new Error;m(a)}).catch(o=>{i.gallery.innerHTML="",c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}))}const i={searchBtn:document.querySelector(".js-search-btn"),searchInput:document.querySelector(".js-search-field"),form:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery")};i.form.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
