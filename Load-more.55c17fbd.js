function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o);var s=o("313MV"),r=o("eWCmQ"),a=o("fZKcF");const l=document.querySelector("#search-form"),d=document.querySelector(".gallery"),c=document.querySelector(".load-more"),f=document.querySelector(".gallery__text");let u="",h=1,m=0;function g(e){const t=e.map((({id:e,largeImageURL:t,webformatURL:n,tags:i,likes:o,views:s,comments:r,downloads:a})=>`\n                <a class="gallery__link" href="${t}">\n                    <div class="photo-card" id="${e}">\n                    <img src="${n}" alt="${i}" loading="lazy" />\n                    <div class="info">\n                        <p class="info-item">\n                            <b>Likes</b> ${o}\n                        </p>\n                        <p class="info-item">\n                            <b>Views</b> ${s}\n                        </p>\n                        <p class="info-item">\n                            <b>Comments</b> ${r}\n                        </p>\n                        <p class="info-item">\n                            <b>Downloads</b> ${a}\n                        </p>\n                    </div>\n                </div>\n                </a>\n      `)).join("");d.insertAdjacentHTML("beforeend",t)}l.addEventListener("submit",(async function(t){if(t.preventDefault(),h=1,u=t.currentTarget.searchQuery.value.trim(),d.innerHTML="",c.classList.add("is-hidden"),f.classList.add("is-hidden"),""===u)return void e(r).Notify.failure("This field cannot be empty!");try{const t=(await(0,s.fetchImg)(u,h,40)).data;if(m=t.hits.length,0===t.totalHits)e(r).Notify.failure("No images were found for this request, try something else.");else{g(t.hits),function(t){e(r).Notify.success(`Hooray! We found ${t.totalHits} images.`)}(t);new(e(a))(".gallery a").refresh()}t.totalHits>40&&c.classList.remove("is-hidden"),window.scrollBy({top:0,behavior:"smooth"})}catch(t){e(r).Notify.failure("Ooops...Something goes wrong")}})),c.addEventListener("click",(async function(){h+=1;try{const t=(await(0,s.fetchImg)(u,h,40)).data,n=t.totalHits;m+=t.hits.length,g(t.hits);new(e(a))(".gallery a").refresh();m===n&&(c.classList.add("is-hidden"),f.classList.remove("is-hidden")),function(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:2*e,behavior:"smooth"})}()}catch(t){e(r).Notify.failure("Ooops...Something goes wrong")}}));
//# sourceMappingURL=Load-more.55c17fbd.js.map
