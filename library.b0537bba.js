!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o),o("rAivX"),o("cmt8U");var i={};i=function e(n,t,r){function o(a,c){if(!t[a]){if(!n[a]){var s=void 0;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=t[a]={exports:{}};n[a][0].call(u.exports,(function(e){return o(n[a][1][e]||e)}),u,u.exports,e,n,t,r)}return t[a].exports}for(var i=void 0,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var r=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},o=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=i,t.create=function(e,n){var t=function(e,n){var t=r('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=t.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var a=o(i,"IMG"),c=o(i,"VIDEO"),s=o(i,"IFRAME");return!0===a&&t.classList.add("basicLightbox--img"),!0===c&&t.classList.add("basicLightbox--video"),!0===s&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(n)),a=function(e){return!1!==n.onClose(c)&&function(e,n){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),n()}),410),!0}(t,(function(){if("function"==typeof e)return e(c)}))};!0===n.closable&&t.addEventListener("click",(function(e){e.target===t&&a()}));var c={element:function(){return t},visible:function(){return i(t)},show:function(e){return!1!==n.onShow(c)&&function(e,n){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),n()}))}),10),!0}(t,(function(){if("function"==typeof e)return e(c)}))},close:a};return c}},{}]},{},[1])(1);var a=document.querySelector(".footer__font");a.addEventListener("click",(function(e){e.preventDefault();var n=i.create('\n  <iframe src="https://player.vimeo.com/video/820849980?h=af82c37f95&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="filmoteka"></iframe>\n  ',{onClose:function(e){a.removeEventListener("keydown",t)}});n.show();var t=function(e){"Escape"===e.code&&n.close()};a.addEventListener("keydown",t)}));var c=document.querySelector(".films-cards-set"),s=(document.querySelector("#wrongSearch"),function(e){var n=e.map((function(e){var n;return n=null===e.poster_path?"https://www.more-kino.info/drama/hide-2/hide-2.jpg":"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),'\n        <div class="film-card">\n        <a href=https://image.tmdb.org/t/p/original/'.concat(e.poster_path,'>\n        <img class="film-img" src="').concat(n,'" alt="').concat(e.title,'" loading="lazy" /> \n        <div class="info">\n        <p class="info-title">').concat(e.original_title,'</p>\n        <p class="info-text">').concat(e.genres.name," | ").concat(e.release_date,' <span class="info-rating">').concat(e.vote_average,"</span></p>\n        </div>\n        </a>\n        </div>\n        ")})).join(" ");c.insertAdjacentHTML("beforeend",n)}),l=o("bpxeT"),u=o("2TvXO"),f=o("dIxxU"),d="https://api.themoviedb.org/3/",p="b118f38ec77100db6763b4cc83604589";function m(e){return h.apply(this,arguments)}function h(){return h=e(l)(e(u).mark((function n(t){var r,o;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.map(function(){var n=e(l)(e(u).mark((function n(t){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.default.get("".concat(d,"/movie/").concat(t,"?api_key=").concat(p,"&language=en-US")).then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),n.next=3,Promise.all(r);case 3:return o=n.sent,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)}))),h.apply(this,arguments)}var v=document.querySelector(".films-cards-set");array=["868759","868759","868759","868759"],window.onload=function(){m(array).then((function(e){v.insertAdjacentHTML("beforeend",s(e))}))},o("fj1A3"),o("honhA"),o("dmXA5"),o("kn1mL")}();
//# sourceMappingURL=library.b0537bba.js.map
