var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("9ZgJb"),r("iFGks");var o={};o=function e(t,n,r){function o(a,c){if(!n[a]){if(!t[a]){var l=void 0;if(!c&&l)return l(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var d=n[a]={exports:{}};t[a][0].call(d.exports,(function(e){return o(t[a][1][e]||e)}),d,d.exports,e,t,n,r)}return n[a].exports}for(var i=void 0,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=i,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var a=o(i,"IMG"),c=o(i,"VIDEO"),l=o(i,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),a=function(e){return!1!==t.onClose(c)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(c)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&a()}));var c={element:function(){return n},visible:function(){return i(n)},show:function(e){return!1!==t.onShow(c)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(c)}))},close:a};return c}},{}]},{},[1])(1);const i=document.querySelector(".footer__font");i.addEventListener("click",(function(e){e.preventDefault();const t=o.create('\n  <iframe src="https://player.vimeo.com/video/820849980?h=af82c37f95&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="filmoteka"></iframe>\n  ',{onClose:e=>{i.removeEventListener("keydown",n)}});t.show();const n=e=>{"Escape"===e.code&&t.close()};i.addEventListener("keydown",n)}));document.querySelector(".films-cards-set"),document.querySelector("#wrongSearch");const a=e=>e.map((e=>{let t;return t=null===e.poster_path?"https://www.more-kino.info/drama/hide-2/hide-2.jpg":`https://image.tmdb.org/t/p/w500/${e.poster_path}`,`\n        <div class="film-card">\n        <img class="film-img" src="${t}" alt="${e.title}" loading="lazy" /> \n        <div class="info">\n        <p class="info-title">${e.original_title}</p>\n        <p class="info-text">${e.genres.map((e=>e.name)).join(" , ")} | ${e.release_date.substring(0,4)} <span class="info-rating">${e.vote_average}</span></p>\n        </div>\n        </div>\n        `})).join(" ");var c=r("2shzp");async function l(e){const t=e.map((async e=>await c.default.get(`https://api.themoviedb.org/3//movie/${e}?api_key=b118f38ec77100db6763b4cc83604589&language=en-US`).then((e=>e.data)).catch((e=>console.log(e)))));return await Promise.all(t)}var s=r("h2oT2"),d=r("lvwZ3"),u=(s=r("h2oT2"),r("376YF")),f=(r("376YF"),r("2KbIb"));u=r("376YF");const h=document.querySelector(".films-cards-set");let m;document.querySelector("[data-watched]").addEventListener("click",(()=>{s.isLoggedIn?(0,s.getUserLibrary)().then((e=>{m=e,h.innerHTML="",l(m.watched).then((e=>{h.insertAdjacentHTML("beforeend",a(e));document.querySelectorAll(".film-card").forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.dataset.id;(0,u.fetchMovieById)(t).then((e=>e.data)).then((e=>{u.movieModal.innerHTML=(0,f.renderMarkup)(e),(0,u.toggleModal)(),(0,s.addLisenersToButtons)()})).catch((e=>{throw new Error(e)}))}))}))}))})):((0,d.getGuestLibrary)(),h.innerHTML="",l(d.guestLibrary.watched).then((e=>{h.insertAdjacentHTML("beforeend",a(e));document.querySelectorAll(".film-card").forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.dataset.id;(0,u.fetchMovieById)(t).then((e=>e.data)).then((e=>{u.movieModal.innerHTML=(0,f.renderMarkup)(e),(0,u.toggleModal)(),(0,s.addLisenersToButtons)()})).catch((e=>{throw new Error(e)}))}))}))})))}));document.querySelector("[data-queue]").addEventListener("click",(()=>{s.isLoggedIn?(0,s.getUserLibrary)().then((e=>{m=e,h.innerHTML="",l(m.queue).then((e=>{h.insertAdjacentHTML("beforeend",a(e));document.querySelectorAll(".film-card").forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.dataset.id;(0,u.fetchMovieById)(t).then((e=>e.data)).then((e=>{u.movieModal.innerHTML=(0,f.renderMarkup)(e),(0,u.toggleModal)(),(0,s.addLisenersToButtons)()})).catch((e=>{throw new Error(e)}))}))}))}))})):((0,d.getGuestLibrary)(),h.innerHTML="",l(d.guestLibrary.queue).then((e=>{h.insertAdjacentHTML("beforeend",a(e));document.querySelectorAll(".film-card").forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.dataset.id;(0,u.fetchMovieById)(t).then((e=>e.data)).then((e=>{u.movieModal.innerHTML=(0,f.renderMarkup)(e),(0,u.toggleModal)(),(0,s.addLisenersToButtons)()})).catch((e=>{throw new Error(e)}))}))}))})))})),r("376YF"),r("6lbiw"),r("gghTW"),r("h2oT2"),r("kskxa"),r("19SXr");
//# sourceMappingURL=library.811ff38c.js.map
