!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired7c6=a),a.register("rAivX",(function(e,t){window.addEventListener("load",(function(){var e=document.querySelector(".loader");e.classList.add("loader-hidden"),e.addEventListener("transitionend",(function(){}))}))})),a.register("cmt8U",(function(e,t){var n=document.querySelector("body"),r=document.querySelector(".fa-regular"),i=document.querySelector("#toggle__checkbox"),a=document.querySelector(".footer");i.addEventListener("click",(function(){n.classList.toggle("dark__theme"),r.classList.toggle("fa-sun"),r.classList.toggle("fa-moon"),a.classList.toggle("dark__theme")}))})),a.register("fj1A3",(function(t,n){e(t.exports,"signUpModal",(function(){return f})),e(t.exports,"loginModal",(function(){return d}));var r=a("honhA"),i=document.querySelector(".auth-menu__signup-button"),o=document.querySelector(".auth-menu__login-button"),s=document.querySelector(".menu"),u=document.querySelector(".auth-menu"),c=document.querySelector(".auth-menu-logout"),l=document.querySelector(".auth-menu-logout__user-name"),h=document.querySelector(".auth-menu-open-btn"),f=document.querySelector(".singup-backdrop"),d=document.querySelector(".login-backdrop");function p(){s.classList.toggle("is-hidden")}function v(e){e.currentTarget===e.target&&(f.classList.add("is-hidden"),f.removeEventListener("click",v))}function y(e){"Escape"===e.code&&(f.classList.add("is-hidden"),window.removeEventListener("keydown",y))}function m(e){e.currentTarget===e.target&&(d.classList.add("is-hidden"),d.removeEventListener("click",m))}function g(e){"Escape"===e.code&&(d.classList.add("is-hidden"),window.removeEventListener("keydown",g))}h.addEventListener("click",(function(e){e.preventDefault(),s.classList.contains("is-hidden")?(p(),r.isLoggedIn?(c.classList.toggle("menu-is-hidden"),l.innerHTML=r.userName):u.classList.toggle("menu-is-hidden")):(r.isLoggedIn?(c.classList.toggle("menu-is-hidden"),l.innerHTML=r.userName):u.classList.toggle("menu-is-hidden"),setTimeout(p,300))})),i.addEventListener("click",(function(){u.classList.toggle("menu-is-hidden"),setTimeout(p,300),f.classList.remove("is-hidden"),f.addEventListener("click",v),window.addEventListener("keydown",y)})),o.addEventListener("click",(function(){u.classList.toggle("menu-is-hidden"),setTimeout(p,300),d.classList.remove("is-hidden"),d.addEventListener("click",m),window.addEventListener("keydown",g)}))})),a.register("honhA",(function(n,r){e(n.exports,"userName",(function(){return h})),e(n.exports,"isLoggedIn",(function(){return f}));var i=a("bpxeT"),o=a("2TvXO");a("fkNhc");var s=a("MjY8E");a("5PmyS");var u=a("8fRTn");a("gQOBw");var c=a("k0X64");a("6m2hf");var l,h,f,d,p=a("221Dt"),v=a("dmXA5"),y=a("kn1mL"),m=document.querySelector(".auth-menu-logout__logout-button"),g=(0,s.initializeApp)({apiKey:"AIzaSyDWPLJhw8gzRksSLpE290fp-GQpT7FpHaY",authDomain:"moviedreamteam-filmoteka.firebaseapp.com",projectId:"moviedreamteam-filmoteka",storageBucket:"moviedreamteam-filmoteka.appspot.com",messagingSenderId:"18944533513",appId:"1:18944533513:web:be1f6bf81a57a82ccc84d8",measurementId:"G-LPXTQ4NYCN"}),k=((0,u.getAnalytics)(g),(0,c.o)(g)),w=(0,p.getFirestore)(g),b=(d=t(i)(t(o).mark((function e(){var n,r,i;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.eInput.value,r=y.pInput.value,e.prev=2,e.next=5,(0,c.a8)(k,n,r);case 5:i=e.sent,console.log(i.user),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),y.loginError.style.display="block",e.t0.code==c.E.INVALID_PASSWORD?y.loginError.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>Wrong pasword. Try again':y.loginError.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>'.concat(e.t0.message),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,9]])}))),function(){return d.apply(this,arguments)});y.loginForm.addEventListener("submit",(function(e){e.preventDefault(),b()}));var x=function(){var e=t(i)(t(o).mark((function e(){var n,r,i,a,s;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.emailInput.value,r=v.passInput.value,i=v.userNameInput.value,e.prev=3,e.next=6,(0,c.a7)(k,n,r);case 6:return a=e.sent,console.log(a.user),e.next=10,(0,c.ah)(k.currentUser,{displayName:i});case 10:return s=(0,p.doc)(w,"users","".concat(a.user.uid)),e.next=13,(0,p.setDoc)(s,{watched:[],queue:[]});case 13:e.next=20;break;case 15:e.prev=15,e.t0=e.catch(3),v.singupError.style.display="block",v.singupError.innerHTML='<i class="bx bx-error-circle singup-error-icon"></i>'.concat(e.t0.message),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(){return e.apply(this,arguments)}}();v.singupForm.addEventListener("submit",(function(e){e.preventDefault(),x()}));var I=function(){var e=t(i)(t(o).mark((function e(){return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,c.w)(k,(function(e){e?(console.log(e),l=e.uid,h=e.displayName,f=!0):(console.log("sing out"),f=!1)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();I();var E=function(){var e=t(i)(t(o).mark((function e(){return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.z)(k);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();m.addEventListener("click",E);(function(){var e=t(i)(t(o).mark((function e(n){return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.updateDoc)((0,p.doc)(w,"users","".concat(l)),{watched:(0,p.arrayUnion)("".concat(n))});case 2:case"end":return e.stop()}}),e)})))})(),function(){var e=t(i)(t(o).mark((function e(n){return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.updateDoc)((0,p.doc)(w,"users","".concat(l)),{queue:(0,p.arrayUnion)("".concat(n))});case 2:case"end":return e.stop()}}),e)})))}(),function(){var e=t(i)(t(o).mark((function e(){var n;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.getDoc)((0,p.doc)(w,"users","".concat(l)));case 2:(n=e.sent).exists()?console.log("Document data:",n.data()):console.log("No such document!");case 4:case"end":return e.stop()}}),e)})))}()})),a.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,u,"next",e)}function u(e){n(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),a.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),o=new A(r||[]);return a._invoke=function(e,t,n){var r=h;return function(i,a){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw a;return D()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=_(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?p:f,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function y(){}function m(){}function g(){}var k={};u(k,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(C([])));b&&b!==n&&r.call(b,a)&&(k=b);var x=g.prototype=y.prototype=Object.create(k);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(h).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function _(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,_(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function C(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:D}}function D(){return{value:t,done:!0}}return m.prototype=g,u(x,"constructor",g),u(g,"constructor",m),m.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},I(E.prototype),u(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new E(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},I(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("fkNhc",(function(t,n){e(t.exports,"initializeApp",(function(){return a("MjY8E").initializeApp})),e(t.exports,"registerVersion",(function(){return a("MjY8E").registerVersion}));a("MjY8E");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,a("MjY8E").registerVersion)("firebase","9.19.1","app")})),a.register("MjY8E",(function(n,r){e(n.exports,"_registerComponent",(function(){return T})),e(n.exports,"_getProvider",(function(){return S})),e(n.exports,"_removeServiceInstance",(function(){return A})),e(n.exports,"SDK_VERSION",(function(){return O})),e(n.exports,"initializeApp",(function(){return R})),e(n.exports,"getApp",(function(){return L})),e(n.exports,"registerVersion",(function(){return P}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("hKHmD"),c=a("8nrFW"),l=a("2TvXO"),h=a("6ExWU"),f=a("kZfxc"),d=a("2xDiJ"),p=a("ajgRO"),v=(d=a("2xDiJ"),function(){"use strict";function e(n){t(o)(this,e),this.container=n}return t(s)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}());var y,m,g="@firebase/app",k="0.9.7",w=new(0,f.Logger)("@firebase/app"),b="[DEFAULT]",x=(y={},t(u)(y,g,"fire-core"),t(u)(y,"@firebase/app-compat","fire-core-compat"),t(u)(y,"@firebase/analytics","fire-analytics"),t(u)(y,"@firebase/analytics-compat","fire-analytics-compat"),t(u)(y,"@firebase/app-check","fire-app-check"),t(u)(y,"@firebase/app-check-compat","fire-app-check-compat"),t(u)(y,"@firebase/auth","fire-auth"),t(u)(y,"@firebase/auth-compat","fire-auth-compat"),t(u)(y,"@firebase/database","fire-rtdb"),t(u)(y,"@firebase/database-compat","fire-rtdb-compat"),t(u)(y,"@firebase/functions","fire-fn"),t(u)(y,"@firebase/functions-compat","fire-fn-compat"),t(u)(y,"@firebase/installations","fire-iid"),t(u)(y,"@firebase/installations-compat","fire-iid-compat"),t(u)(y,"@firebase/messaging","fire-fcm"),t(u)(y,"@firebase/messaging-compat","fire-fcm-compat"),t(u)(y,"@firebase/performance","fire-perf"),t(u)(y,"@firebase/performance-compat","fire-perf-compat"),t(u)(y,"@firebase/remote-config","fire-rc"),t(u)(y,"@firebase/remote-config-compat","fire-rc-compat"),t(u)(y,"@firebase/storage","fire-gcs"),t(u)(y,"@firebase/storage-compat","fire-gcs-compat"),t(u)(y,"@firebase/firestore","fire-fst"),t(u)(y,"@firebase/firestore-compat","fire-fst-compat"),t(u)(y,"fire-js","fire-js"),t(u)(y,"firebase","fire-js-all"),y),I=new Map,E=new Map;function _(e,t){try{e.container.addComponent(t)}catch(n){w.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function T(e){var t=e.name;if(E.has(t))return w.debug("There were multiple attempts to register component ".concat(t,".")),!1;E.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=I.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){_(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function S(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function A(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;S(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var C=(m={},t(u)(m,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),t(u)(m,"bad-app-name","Illegal App name: '{$appName}"),t(u)(m,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(u)(m,"app-deleted","Firebase App named '{$appName}' already deleted"),t(u)(m,"no-options","Need to provide options, when not being deployed to hosting via source."),t(u)(m,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(u)(m,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(u)(m,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),t(u)(m,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),t(u)(m,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),t(u)(m,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),m),D=new(0,d.ErrorFactory)("app","Firebase",C),N=function(){"use strict";function e(n,r,i){var a=this;t(o)(this,e),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,h.Component)("app",(function(){return a}),"PUBLIC"))}return t(s)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}]),e}(),O="9.19.1";function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:b,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw D.create("bad-app-name",{appName:String(a)});if(n||(n=(0,d.getDefaultAppConfig)()),!n)throw D.create("no-options");var o=I.get(a);if(o){if((0,d.deepEqual)(n,o.options)&&(0,d.deepEqual)(i,o.config))return o;throw D.create("duplicate-app",{appName:a})}var s=new(0,h.ComponentContainer)(a),u=!0,c=!1,l=void 0;try{for(var f,p=E.values()[Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var v=f.value;s.addComponent(v)}}catch(e){c=!0,l=e}finally{try{u||null==p.return||p.return()}finally{if(c)throw l}}var y=new N(n,i,s);return I.set(a,y),y}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=I.get(e);if(!t&&e===b)return R();if(!t)throw D.create("no-app",{appName:e});return t}function P(e,t,n){var r,i=null!==(r=x[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void w.warn(s.join(" "))}T(new(0,h.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var M="firebase-heartbeat-store",U=null;function F(){return U||(U=(0,p.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(M)}}).catch((function(e){throw D.create("idb-open",{originalErrorMessage:e.message})}))),U}function V(e){return j.apply(this,arguments)}function j(){return(j=t(i)(t(l).mark((function e(n){var r,i;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:return r=e.sent,e.abrupt("return",r.transaction(M).objectStore(M).get(z(n)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?w.warn(e.t0.message):(i=D.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),w.warn(i.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function B(e,t){return q.apply(this,arguments)}function q(){return(q=t(i)(t(l).mark((function e(n,r){var i,a,o,s;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:return i=e.sent,a=i.transaction(M,"readwrite"),o=a.objectStore(M),e.next=8,o.put(r,z(n));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?w.warn(e.t0.message):(s=D.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),w.warn(s.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function z(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K=function(){"use strict";function e(n){var r=this;t(o)(this,e),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Q(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return t(s)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r,i,a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=H(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r,i,a,o,s;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=H(),i=G(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),n)})))()}}]),e}();function H(){return(new Date).toISOString().substring(0,10)}function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),X(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),X(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var W,Q=function(){"use strict";function e(n){t(o)(this,e),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(s)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(i)(t(l).mark((function e(){return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,d.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,d.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,V(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),n)})))()}},{key:"overwrite",value:function(e){var n=this;return t(i)(t(l).mark((function r(){var i,a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,n.read();case 10:return a=t.sent,t.abrupt("return",B(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),r)})))()}},{key:"add",value:function(e){var n=this;return t(i)(t(l).mark((function r(){var i,a;return t(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",B(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t(c)(a.heartbeats).concat(t(c)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function X(e){return(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */W="",T(new(0,h.Component)("platform-logger",(function(e){return new v(e)}),"PRIVATE")),T(new(0,h.Component)("heartbeat",(function(e){return new K(e)}),"PRIVATE")),P(g,k,W),P(g,k,"esm2017"),P("fire-js","")})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||o.default(e)||i.default()};var n=s(a("kMC0W")),r=s(a("7AJDX")),i=s(a("8CtQK")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("6ExWU",(function(n,r){e(n.exports,"Component",(function(){return f})),e(n.exports,"ComponentContainer",(function(){return v}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("1t1Wn"),c=a("8nrFW"),l=a("2TvXO"),h=a("2xDiJ"),f=function(){"use strict";function e(n,r,i){t(o)(this,e),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(s)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),d="[DEFAULT]",p=function(){"use strict";function e(n,r){t(o)(this,e),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(s)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new(0,h.Deferred);if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:d})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=t(u)(a.value,2),c=s[0],l=s[1],h=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:h});l.resolve(f)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r;return t(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(e.instances.values()),n.next=3,Promise.all(t(c)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(c)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,c=void 0;try{for(var l,h=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var f=t(u)(l.value,2),d=f[0],p=f[1],v=this.normalizeInstanceIdentifier(d);i===v&&p.resolve(a)}}catch(e){s=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(s)throw c}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===d?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.component?this.component.multipleInstances?e:d:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var v=function(){"use strict";function e(n){t(o)(this,e),this.name=n,this.providers=new Map}return t(s)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new p(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}()})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||o.default(e,t)||i.default()};var n=s(a("8slrw")),r=s(a("7AJDX")),i=s(a("ifqQW")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("2xDiJ",(function(r,i){e(r.exports,"base64urlEncodeWithoutPadding",(function(){return m})),e(r.exports,"base64Decode",(function(){return g})),e(r.exports,"getDefaultEmulatorHost",(function(){return b})),e(r.exports,"getDefaultEmulatorHostnameAndPort",(function(){return x})),e(r.exports,"getDefaultAppConfig",(function(){return I})),e(r.exports,"getExperimentalSetting",(function(){return E})),e(r.exports,"Deferred",(function(){return _})),e(r.exports,"createMockUserToken",(function(){return T})),e(r.exports,"getUA",(function(){return S})),e(r.exports,"isMobileCordova",(function(){return A})),e(r.exports,"isBrowserExtension",(function(){return C})),e(r.exports,"isReactNative",(function(){return D})),e(r.exports,"isIE",(function(){return N})),e(r.exports,"isSafari",(function(){return O})),e(r.exports,"isIndexedDBAvailable",(function(){return R})),e(r.exports,"validateIndexedDBOpenable",(function(){return L})),e(r.exports,"areCookiesEnabled",(function(){return P})),e(r.exports,"FirebaseError",(function(){return M})),e(r.exports,"ErrorFactory",(function(){return U})),e(r.exports,"isEmpty",(function(){return j})),e(r.exports,"deepEqual",(function(){return B})),e(r.exports,"querystring",(function(){return z})),e(r.exports,"querystringDecode",(function(){return K})),e(r.exports,"extractQuerystring",(function(){return H})),e(r.exports,"createSubscribe",(function(){return G})),e(r.exports,"calculateBackoffMillis",(function(){return Y})),e(r.exports,"getModularInstance",(function(){return J}));var o=a("ds8z5"),s=a("8MBJY"),u=a("a2hTj"),c=a("eYQtU"),l=a("1t1Wn"),h=(a("8nrFW"),a("4c7YB")),f=a("2MbLg"),d=a("6qd2L"),p=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(p(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new y;var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},y=function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",e}return r}(t(h)(Error)),m=function(e){return function(e){var t=p(e);return v.encodeByteArray(t,!0)}(e).replace(/\./g,"")},g=function(e){try{return v.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var k=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},w=function(){try{return k()||function(){if(void 0!==d&&void 0!==d.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&g(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},b=function(e){var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},x=function(e){var t=b(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},I=function(){var e;return null===(e=w())||void 0===e?void 0:e.config},E=function(e){var t;return null===(t=w())||void 0===t?void 0:t["_".concat(e)]},_=function(){"use strict";function e(){var n=this;t(s)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return t(u)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[m(JSON.stringify({alg:"none",type:"JWT"})),m(JSON.stringify(a)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function A(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())}function C(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function D(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function N(){var e=S();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){return!function(){var e,t=null===(e=w())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function R(){try{return"object"==typeof indexedDB}catch(e){return!1}}function L(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function P(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M=function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(e,i,a){var u;return t(s)(this,r),(u=n.call(this,i)).code=e,u.customData=a,u.name="FirebaseError",Object.setPrototypeOf(t(o)(u),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(o)(u),U.prototype.create),u}return r}(t(h)(Error)),U=function(){"use strict";function e(n,r,i){t(s)(this,e),this.service=n,this.serviceName=r,this.errors=i}return t(u)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?F(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new M(a,u,i);return c}}]),e}();function F(e,t){return e.replace(V,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var V=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function B(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(q(l)&&q(h)){if(!B(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var f=!0,d=!1,p=void 0;try{for(var v,y=r[Symbol.iterator]();!(f=(v=y.next()).done);f=!0){var m=v.value;if(!n.includes(m))return!1}}catch(e){d=!0,p=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw p}}return!0}function q(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=t(l)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function K(e){var n={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=t(l)(e.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function H(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){var n=new W(e,t);return n.subscribe.bind(n)}var W=function(){"use strict";function e(n,r){var i=this;t(s)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return t(u)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Q),void 0===r.error&&(r.error=Q),void 0===r.complete&&(r.complete=Q);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function Q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var X=144e5;function Y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(X,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return e&&e._delegate?e._delegate:e}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n}})),a.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),a.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return u(e)};var n=s(a("ge8co")),r=s(a("cZGw3")),i=s(a("fVNic")),o=s(a("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!r.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return n.default(e,arguments,i.default(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o.default(a,e)},u(e)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,a=r.default(e);if(t){var o=r.default(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return i.default(this,n)}};var n=o(a("aTHs7")),r=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(a("ds8z5")),r=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u,c=[],l=!1,h=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),a.register("kZfxc",(function(n,r){e(n.exports,"LogLevel",(function(){return i})),e(n.exports,"Logger",(function(){return m})),e(n.exports,"setLogLevel",(function(){return g})),e(n.exports,"setUserLogHandler",(function(){return k}));var i,o,s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("8nrFW"),h=[];(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";var f,d={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},p=i.INFO,v=(f={},t(c)(f,i.DEBUG,"log"),t(c)(f,i.VERBOSE,"log"),t(c)(f,i.INFO,"info"),t(c)(f,i.WARN,"warn"),t(c)(f,i.ERROR,"error"),f),y=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<e.logLevel)){var s=(new Date).toISOString(),u=v[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(t(l)(i)))}},m=function(){"use strict";function e(n){t(s)(this,e),this.name=n,this._logLevel=p,this._logHandler=y,this._userLogHandler=null,h.push(this)}return t(u)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?d[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(t(l)(n))),this._logHandler.apply(this,[this,i.DEBUG].concat(t(l)(n)))}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(t(l)(n))),this._logHandler.apply(this,[this,i.VERBOSE].concat(t(l)(n)))}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(t(l)(n))),this._logHandler.apply(this,[this,i.INFO].concat(t(l)(n)))}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(t(l)(n))),this._logHandler.apply(this,[this,i.WARN].concat(t(l)(n)))}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(t(l)(n))),this._logHandler.apply(this,[this,i.ERROR].concat(t(l)(n)))}}]),e}();function g(e){h.forEach((function(t){t.setLogLevel(e)}))}function k(e,t){var n=!0,r=!1,a=void 0;try{for(var o,s=h[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value,c=null;t&&t.level&&(c=d[t.level]),u.userLogHandler=null===e?null:function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];var s=a.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=c?c:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:a,type:t.name})}}}catch(e){r=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}}})),a.register("ajgRO",(function(n,r){e(n.exports,"openDB",(function(){return l}));var i=a("bpxeT"),o=a("dDDEV"),s=a("8nrFW"),u=a("2TvXO"),c=a("kKOTz");c=a("kKOTz");function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=(0,c.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,c.w)(s.result),e.oldVersion,e.newVersion,(0,c.w)(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var h=["get","getKey","getAll","getAllKeys","count"],f=["put","add","delete","clear"],d=new Map;function p(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(d.get(n))return d.get(n);var r=n.replace(/FromIndex$/,""),a=n!==r,o=f.includes(r);if(r in(a?IDBIndex:IDBObjectStore).prototype&&(o||h.includes(r))){var c,l=(c=t(i)(t(u).mark((function e(n){var i,c,l,h,f,d,p=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=p.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=p[l];return f=this.transaction(n,o?"readwrite":"readonly"),d=f.store,a&&(d=d.index(c.shift())),e.next=7,Promise.all([(h=d)[r].apply(h,t(s)(c)),o&&f.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)});return d.set(n,l),l}}}(0,c.r)((function(e){return t(o)({},e,{get:function(t,n,r){return p(t,n)||e.get(t,n,r)},has:function(t,n){return!!p(t,n)||e.has(t,n)}})}))})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=a("hKHmD"))&&n.__esModule?n:{default:n}})),a.register("kKOTz",(function(n,r){e(n.exports,"w",(function(){return m})),e(n.exports,"r",(function(){return p}));var i,o,s=a("8nrFW");var u=new WeakMap,c=new WeakMap,l=new WeakMap,h=new WeakMap,f=new WeakMap;var d={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function p(e){d=e(d)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(g(this),n),m(u.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return m(e.apply(g(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,u=(o=e).call.apply(o,[g(this),n].concat(t(s)(i)));return l.set(u,n.sort?n.sort():[n]),m(u)}}function y(e){return"function"==typeof e?v(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));c.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,d):e);var t}function m(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(m(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&u.set(e,t)})).catch((function(){})),f.set(n,t),n;var t,n;if(h.has(e))return h.get(e);var r=y(e);return r!==e&&(h.set(e,r),f.set(r,e)),r}var g=function(e){return f.get(e)}})),a.register("5PmyS",(function(t,n){e(t.exports,"getAnalytics",(function(){return a("8fRTn").getAnalytics})),a("8fRTn")})),a.register("8fRTn",(function(n,r){e(n.exports,"getAnalytics",(function(){return ue}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("hKHmD"),c=a("1t1Wn"),l=a("2TvXO"),h=a("MjY8E"),f=a("kZfxc"),d=a("2xDiJ"),p=a("6ExWU");a("450b8");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var v,y="analytics",m=6e4,g="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",k="https://www.googletagmanager.com/gtag/js",w=new(0,f.Logger)("@firebase/analytics"),b=(v={},t(u)(v,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),t(u)(v,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),t(u)(v,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),t(u)(v,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),t(u)(v,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),t(u)(v,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),t(u)(v,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),t(u)(v,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),t(u)(v,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),t(u)(v,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),t(u)(v,"invalid-gtag-resource","Trusted Types detected an invalid gtag resource: {$gtagURL}."),v),x=new(0,d.ErrorFactory)("analytics","Analytics",b);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function I(e){if(!e.startsWith(k)){var t=x.create("invalid-gtag-resource",{gtagURL:e});return w.warn(t.message),""}return e}function E(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function _(e,t){var n=function(e,t){var n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:I}),r=document.createElement("script"),i="".concat(k,"?l=").concat(e,"&id=").concat(t);r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function T(e,t,n,r,i,a){return S.apply(this,arguments)}function S(){return(S=t(i)(t(l).mark((function e(n,r,i,a,o,s){var u,c,h;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=a[o],e.prev=1,!u){e.next=7;break}return e.next=5,r[u];case 5:e.next=14;break;case 7:return e.next=9,E(i);case 9:if(c=e.sent,!(h=c.find((function(e){return e.measurementId===o})))){e.next=14;break}return e.next=14,r[h.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),w.error(e.t0);case 19:n("config",o,s);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}function A(e,t,n,r,i){return C.apply(this,arguments)}function C(){return(C=t(i)(t(l).mark((function e(n,r,i,a,o){var s,u,c,h,f,d,p,v,y,m,g;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=[],!o||!o.send_to){e.next=38;break}return u=o.send_to,Array.isArray(u)||(u=[u]),e.next=7,E(i);case 7:c=e.sent,h=!0,f=!1,d=void 0,e.prev=9,p=u[Symbol.iterator]();case 11:if(h=(v=p.next()).done){e.next=24;break}if(y=v.value,m=c.find((function(e){return e.measurementId===y})),!(g=m&&r[m.appId])){e.next=19;break}s.push(g),e.next=21;break;case 19:return s=[],e.abrupt("break",24);case 21:h=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),f=!0,d=e.t0;case 30:e.prev=30,e.prev=31,h||null==p.return||p.return();case 33:if(e.prev=33,!f){e.next=36;break}throw d;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===s.length&&(s=Object.values(r)),e.next=41,Promise.all(s);case 41:n("event",a,o||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),w.error(e.t1);case 47:case"end":return e.stop()}}),e,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function D(e,n,r,a,o){var s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window[a].push(arguments)};return window[o]&&"function"==typeof window[o]&&(s=window[o]),window[o]=function(e,n,r,a){function o(){return(o=t(i)(t(l).mark((function i(o,s,u){return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"event"!==o){t.next=6;break}return t.next=4,A(e,n,r,s,u);case 4:t.next=12;break;case 6:if("config"!==o){t.next=11;break}return t.next=9,T(e,n,r,a,s,u);case 9:t.next=12;break;case 11:"consent"===o?e("consent","update",u):e("set",s);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),w.error(t.t0);case 17:case"end":return t.stop()}}),i,null,[[0,14]])})))).apply(this,arguments)}return function(e,t,n){return o.apply(this,arguments)}}(s,e,n,r),{gtagCore:s,wrappedGtag:window[o]}}function N(e){var t=window.document.getElementsByTagName("script"),n=!0,r=!1,i=void 0;try{for(var a,o=Object.values(t)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s.src&&s.src.includes(k)&&s.src.includes(e))return s}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O=function(){"use strict";function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;t(o)(this,e),this.throttleMetadata=n,this.intervalMillis=r}return t(s)(e,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),e}(),R=new O;function L(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function P(e){return M.apply(this,arguments)}function M(){return(M=t(i)(t(l).mark((function e(n){var r,i,a,o,s,u,c,h;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.appId,a=n.apiKey,o={method:"GET",headers:L(a)},s=g.replace("{app-id}",i),e.next=6,fetch(s,o);case 6:if(200===(u=e.sent).status||304===u.status){e.next=19;break}return c="",e.prev=9,e.next=12,u.json();case 12:h=e.sent,(null===(r=h.error)||void 0===r?void 0:r.message)&&(c=h.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw x.create("config-fetch-failed",{httpStatus:u.status,responseMessage:c});case 19:return e.abrupt("return",u.json());case 20:case"end":return e.stop()}}),e,null,[[9,16]])})))).apply(this,arguments)}function U(e){return F.apply(this,arguments)}function F(){return F=t(i)(t(l).mark((function e(n){var r,a,o,s,u,c,h,f,d=arguments;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=d.length>1&&void 0!==d[1]?d[1]:R,a=d.length>2?d[2]:void 0,o=n.options,s=o.appId,u=o.apiKey,c=o.measurementId,s){e.next=4;break}throw x.create("no-app-id");case 4:if(u){e.next=8;break}if(!c){e.next=7;break}return e.abrupt("return",{measurementId:c,appId:s});case 7:throw x.create("no-api-key");case 8:return h=r.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new H,setTimeout(t(i)(t(l).mark((function e(){return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.abort();case 1:case"end":return e.stop()}}),e)}))),void 0!==a?a:m),e.abrupt("return",V({appId:s,apiKey:u,measurementId:c},h,f,r));case 12:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function V(e,t,n){return j.apply(this,arguments)}function j(){return j=t(i)(t(l).mark((function e(n,r,i){var a,o,s,u,c,h,f,p,v,y,m=arguments;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.throttleEndTimeMillis,o=r.backoffCount,s=m.length>3&&void 0!==m[3]?m[3]:R,c=n.appId,h=n.measurementId,e.prev=3,e.next=6,B(i,a);case 6:e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(3),!h){e.next=13;break}return w.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(h)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null===e.t0||void 0===e.t0?void 0:e.t0.message,"]")),e.abrupt("return",{appId:c,measurementId:h});case 13:throw e.t0;case 14:return e.prev=14,e.next=17,P(n);case 17:return f=e.sent,s.deleteThrottleMetadata(c),e.abrupt("return",f);case 22:if(e.prev=22,e.t1=e.catch(14),q(p=e.t1)){e.next=33;break}if(s.deleteThrottleMetadata(c),!h){e.next=32;break}return w.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(h)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==p?void 0:p.message,"]")),e.abrupt("return",{appId:c,measurementId:h});case 32:throw e.t1;case 33:return v=503===Number(null===(u=null==p?void 0:p.customData)||void 0===u?void 0:u.httpStatus)?(0,d.calculateBackoffMillis)(o,s.intervalMillis,30):(0,d.calculateBackoffMillis)(o,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+v,backoffCount:o+1},s.setThrottleMetadata(c,y),w.debug("Calling attemptFetch again in ".concat(v," millis")),e.abrupt("return",V(n,y,i,s));case 38:case"end":return e.stop()}}),e,null,[[3,8],[14,22]])}))),j.apply(this,arguments)}function B(e,t){return new Promise((function(n,r){var i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener((function(){clearTimeout(a),r(x.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function q(e){if(!(e instanceof d.FirebaseError&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var z,K,H=function(){"use strict";function e(){t(o)(this,e),this.listeners=[]}return t(s)(e,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(){return(G=t(i)(t(l).mark((function e(n,r,i,a,o){var s,u;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!o.global){e.next=5;break}return n("event",i,a),e.abrupt("return");case 5:return e.next=7,r;case 7:s=e.sent,u=Object.assign(Object.assign({},a),{send_to:s}),n("event",i,u);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){K=e}function Q(e){z=e}function X(){return Y.apply(this,arguments)}function Y(){return(Y=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(i)(t(l).mark((function e(){return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,d.isIndexedDBAvailable)()){e.next=5;break}return w.warn(x.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,(0,d.validateIndexedDBOpenable)();case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(5),w.warn(x.create("indexeddb-unavailable",{errorInfo:null===e.t0||void 0===e.t0?void 0:e.t0.toString()}).message),e.abrupt("return",!1);case 14:return e.abrupt("return",!0);case 15:case"end":return e.stop()}}),e,null,[[5,10]])})))).apply(this,arguments)}function J(){return(J=t(i)(t(l).mark((function e(n,r,i,a,o,s,u){var h,f,d,p,v,y,m;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(f=U(n)).then((function(e){i[e.measurementId]=e.appId,n.options.measurementId&&e.measurementId!==n.options.measurementId&&w.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return w.error(e)})),r.push(f),d=X().then((function(e){return e?a.getId():void 0})),e.t0=t(c),e.next=8,Promise.all([f,d]);case 8:return e.t1=e.sent,p=(0,e.t0)(e.t1,2),v=p[0],y=p[1],N(s)||_(s,v.measurementId),K&&(o("consent","default",K),W(void 0)),o("js",new Date),(m=null!==(h=null==u?void 0:u.config)&&void 0!==h?h:{}).origin="firebase",m.update=!0,null!=y&&(m.firebase_id=y),o("config",v.measurementId,m),z&&(o("set",z),Q(void 0)),e.abrupt("return",v.measurementId);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $,Z,ee=function(){"use strict";function e(n){t(o)(this,e),this.app=n}return t(s)(e,[{key:"_delete",value:function(){return delete te[this.app.options.appId],Promise.resolve()}}]),e}(),te={},ne=[],re={},ie="dataLayer",ae="gtag",oe=!1;function se(e,t,n){!function(){var e=[];if((0,d.isBrowserExtension)()&&e.push("This is a browser extension environment."),(0,d.areCookiesEnabled)()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),n=x.create("invalid-analytics-context",{errorInfo:t});w.warn(n.message)}}();var r,i,a=e.options.appId;if(!a)throw x.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw x.create("no-api-key");w.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=te[a])throw x.create("already-exists",{id:a});if(!oe){r=ie,i=[],Array.isArray(window[r])?i=window[r]:window[r]=i;var o=D(te,ne,re,ie,ae),s=o.wrappedGtag,u=o.gtagCore;Z=s,$=u,oe=!0}return te[a]=function(e,t,n,r,i,a,o){return J.apply(this,arguments)}(e,ne,re,t,$,ie,n),new ee(e)}function ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,h.getApp)();e=(0,d.getModularInstance)(e);var t=(0,h._getProvider)(e,y);return t.isInitialized()?t.getImmediate():ce(e)}function ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,h._getProvider)(e,y);if(n.isInitialized()){var r=n.getImmediate();if((0,d.deepEqual)(t,n.getOptions()))return r;throw x.create("already-initialized")}var i=n.initialize({options:t});return i}function le(e,t,n,r){e=(0,d.getModularInstance)(e),function(e,t,n,r,i){return G.apply(this,arguments)}(Z,te[e.app.options.appId],t,n,r).catch((function(e){return w.error(e)}))}var he="@firebase/analytics",fe="0.9.5";(0,h._registerComponent)(new(0,p.Component)(y,(function(e,t){var n=t.options;return se(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),(0,h._registerComponent)(new(0,p.Component)("analytics-internal",(function(e){try{var t=e.getProvider(y).getImmediate();return{logEvent:function(e,n,r){return le(t,e,n,r)}}}catch(e){throw x.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),(0,h.registerVersion)(he,fe),(0,h.registerVersion)(he,fe,"esm2017")})),a.register("450b8",(function(e,n){var r,i=a("bpxeT"),o=a("hKHmD"),s=a("8nrFW"),u=a("2TvXO"),c=a("MjY8E"),l=a("6ExWU"),h=a("2xDiJ"),f=a("ajgRO"),d="@firebase/installations",p="0.6.4",v=1e4,y="w:".concat(p),m="FIS_v2",g=36e5,k=(r={},t(o)(r,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),t(o)(r,"not-registered","Firebase Installation is not registered."),t(o)(r,"installation-not-found","Firebase Installation not found."),t(o)(r,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),t(o)(r,"app-offline","Could not process request. Application offline."),t(o)(r,"delete-pending-registration","Can't delete installation while there is a pending registration request."),r),w=new(0,h.ErrorFactory)("installations","Installations",k);function b(e){return e instanceof h.FirebaseError&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function I(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function E(e,t){return _.apply(this,arguments)}function _(){return(_=t(i)(t(u).mark((function e(n,r){var i,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return i=e.sent,a=i.error,e.abrupt("return",w.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function S(e,t){var n=t.refreshToken,r=T(e);return r.append("Authorization",function(e){return"".concat(m," ").concat(e)}(n)),r}function A(e){return C.apply(this,arguments)}function C(){return(C=t(i)(t(u).mark((function e(n){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return N.apply(this,arguments)}function N(){return(N=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(i)(t(u).mark((function e(n,r){var i,a,o,s,c,l,h,f,d,p,v,g;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=r.fid,s=x(i),c=T(i),!(l=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,l.getHeartbeatsHeader();case 7:(h=e.sent)&&c.append("x-firebase-client",h);case 9:return f={fid:o,authVersion:m,appId:i.appId,sdkVersion:y},d={method:"POST",headers:c,body:JSON.stringify(f)},e.next=13,A((function(){return fetch(s,d)}));case 13:if(!(p=e.sent).ok){e.next=22;break}return e.next=17,p.json();case 17:return v=e.sent,g={fid:v.fid||o,registrationStatus:2,refreshToken:v.refreshToken,authToken:I(v.authToken)},e.abrupt("return",g);case 22:return e.next=24,E("Create Installation",p);case 24:throw e.sent;case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var R=/^[cdef][\w-]{21}$/;function L(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var n=function(e){return(n=e,btoa((r=String).fromCharCode.apply(r,t(s)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return R.test(n)?n:""}catch(e){return""}}function P(e){return"".concat(e.appName,"!").concat(e.appId)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M=new Map;function U(e,t){var n=P(e);F(n,t),function(e,t){var n=j();n&&n.postMessage({key:e,fid:t});B()}(n,t)}function F(e,t){var n=M.get(e);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}var V=null;function j(){return!V&&"BroadcastChannel"in self&&((V=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){F(e.data.key,e.data.fid)}),V}function B(){0===M.size&&V&&(V.close(),V=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q="firebase-installations-store",z=null;function K(){return z||(z=(0,f.openDB)("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(q)}})),z}function H(e,t){return G.apply(this,arguments)}function G(){return(G=t(i)(t(u).mark((function e(n,r){var i,a,o,s,c;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=P(n),e.next=3,K();case 3:return a=e.sent,o=a.transaction(q,"readwrite"),s=o.objectStore(q),e.next=8,s.get(i);case 8:return c=e.sent,e.next=11,s.put(r,i);case 11:return e.next=13,o.done;case 13:return c&&c.fid===r.fid||U(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return Q.apply(this,arguments)}function Q(){return(Q=t(i)(t(u).mark((function e(n){var r,i,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P(n),e.next=3,K();case 3:return i=e.sent,a=i.transaction(q,"readwrite"),e.next=7,a.objectStore(q).delete(r);case 7:return e.next=9,a.done;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e,t){return Y.apply(this,arguments)}function Y(){return(Y=t(i)(t(u).mark((function e(n,r){var i,a,o,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=P(n),e.next=3,K();case 3:return a=e.sent,o=a.transaction(q,"readwrite"),s=o.objectStore(q),e.next=8,s.get(i);case 8:if(c=e.sent,void 0!==(l=r(c))){e.next=15;break}return e.next=13,s.delete(i);case 13:e.next=17;break;case 15:return e.next=17,s.put(l,i);case 17:return e.next=19,o.done;case 19:return!l||c&&c.fid===l.fid||U(n,l.fid),e.abrupt("return",l);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e){return $.apply(this,arguments)}function $(){return($=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(i)(t(u).mark((function e(n){var r,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,X(n.appConfig,(function(e){var t=Z(e),i=ee(n,t);return r=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:i,registrationPromise:r});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){return ae(e||{fid:L(),registrationStatus:0})}function ee(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(w.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return te.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:ne(e)}:{installationEntry:t}}function te(){return(te=t(i)(t(u).mark((function e(n,r){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(n,r);case 3:return i=e.sent,e.abrupt("return",H(n.appConfig,i));case 7:if(e.prev=7,e.t0=e.catch(0),!b(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,W(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,H(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function ne(e){return re.apply(this,arguments)}function re(){return(re=t(i)(t(u).mark((function e(n){var r,i,a,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,O(100);case 6:return e.next=8,ie(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,J(n);case 14:if(i=e.sent,a=i.installationEntry,!(o=i.registrationPromise)){e.next=21;break}return e.abrupt("return",o);case 21:return e.abrupt("return",a);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e){return X(e,(function(e){if(!e)throw w.create("installation-not-found");return ae(e)}))}function ae(e){return 1===(t=e).registrationStatus&&t.registrationTime+v<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function oe(e,t){return se.apply(this,arguments)}function se(){return(se=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(i)(t(u).mark((function e(n,r){var i,a,o,s,c,l,h,f,d,p,v;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=ue(i,r),s=S(i,r),!(c=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(l=e.sent)&&s.append("x-firebase-client",l);case 9:return h={installation:{sdkVersion:y,appId:i.appId}},f={method:"POST",headers:s,body:JSON.stringify(h)},e.next=13,A((function(){return fetch(o,f)}));case 13:if(!(d=e.sent).ok){e.next=22;break}return e.next=17,d.json();case 17:return p=e.sent,v=I(p),e.abrupt("return",v);case 22:return e.next=24,E("Generate Auth Token",d);case 24:throw e.sent;case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e,t){var n=t.fid;return"".concat(x(e),"/").concat(n,"/authTokens:generate")}function ce(e){return le.apply(this,arguments)}function le(){return le=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(i)(t(u).mark((function e(n){var r,i,a,o,s=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],e.next=4,X(n.appConfig,(function(e){if(!ye(e))throw w.create("not-registered");var t=e.authToken;if(!r&&me(t))return e;if(1===t.requestStatus)return i=he(n,r),e;if(!navigator.onLine)throw w.create("app-offline");var a=ge(e);return i=pe(n,a),a}));case 4:if(a=e.sent,!i){e.next=11;break}return e.next=8,i;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.authToken;case 12:return o=e.t0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)}))),le.apply(this,arguments)}function he(e,t){return fe.apply(this,arguments)}function fe(){return(fe=t(i)(t(u).mark((function e(n,r){var i,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de(n.appConfig);case 2:i=e.sent;case 3:if(1!==i.authToken.requestStatus){e.next=11;break}return e.next=6,O(100);case 6:return e.next=8,de(n.appConfig);case 8:i=e.sent,e.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){e.next=16;break}return e.abrupt("return",ce(n,r));case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(e){return X(e,(function(e){if(!ye(e))throw w.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+v<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function pe(e,t){return ve.apply(this,arguments)}function ve(){return(ve=t(i)(t(u).mark((function e(n,r){var i,a,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe(n,r);case 3:return i=e.sent,a=Object.assign(Object.assign({},r),{authToken:i}),e.next=7,H(n.appConfig,a);case 7:return e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(0),!b(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,W(n.appConfig);case 15:e.next=20;break;case 17:return o=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,H(n.appConfig,o);case 20:throw e.t0;case 21:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function ye(e){return void 0!==e&&2===e.registrationStatus}function me(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+g}(e)}function ge(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ke(){return(ke=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(i)(t(u).mark((function e(n){var r,i,a,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,J(r);case 3:return i=e.sent,a=i.installationEntry,(o=i.registrationPromise)?o.catch(console.error):ce(r).catch(console.error),e.abrupt("return",a.fid);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(){return we=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(i)(t(u).mark((function e(n){var r,i,a,o=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],i=n,e.next=4,be(i);case 4:return e.next=6,ce(i,r);case 6:return a=e.sent,e.abrupt("return",a.token);case 8:case"end":return e.stop()}}),e)}))),we.apply(this,arguments)}function be(e){return xe.apply(this,arguments)}function xe(){return(xe=t(i)(t(u).mark((function e(n){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ie(e){return w.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee="installations",_e=function(e){var t=e.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw Ie("App Configuration");if(!e.name)throw Ie("App Name");var t=!0,n=!1,r=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(!e.options[o])throw Ie(o)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:(0,c._getProvider)(t,"heartbeat"),_delete:function(){return Promise.resolve()}}},Te=function(e){var t=e.getProvider("app").getImmediate(),n=(0,c._getProvider)(t,Ee).getImmediate(),r={getId:function(){return function(e){return ke.apply(this,arguments)}(n)},getToken:function(e){return function(e){return we.apply(this,arguments)}(n,e)}};return r};(0,c._registerComponent)(new(0,l.Component)(Ee,_e,"PUBLIC")),(0,c._registerComponent)(new(0,l.Component)("installations-internal",Te,"PRIVATE")),(0,c.registerVersion)(d,p),(0,c.registerVersion)(d,p,"esm2017")})),a.register("gQOBw",(function(t,n){e(t.exports,"getAuth",(function(){return a("k0X64").o})),e(t.exports,"signInWithEmailAndPassword",(function(){return a("k0X64").a8})),e(t.exports,"AuthErrorCodes",(function(){return a("k0X64").E})),e(t.exports,"createUserWithEmailAndPassword",(function(){return a("k0X64").a7})),e(t.exports,"updateProfile",(function(){return a("k0X64").ah})),e(t.exports,"onAuthStateChanged",(function(){return a("k0X64").w})),e(t.exports,"signOut",(function(){return a("k0X64").z})),a("eMcUM")})),a.register("eMcUM",(function(t,n){e(t.exports,"AuthErrorCodes",(function(){return a("k0X64").E})),e(t.exports,"createUserWithEmailAndPassword",(function(){return a("k0X64").a7})),e(t.exports,"getAuth",(function(){return a("k0X64").o})),e(t.exports,"onAuthStateChanged",(function(){return a("k0X64").w})),e(t.exports,"signInWithEmailAndPassword",(function(){return a("k0X64").a8})),e(t.exports,"signOut",(function(){return a("k0X64").z})),e(t.exports,"updateProfile",(function(){return a("k0X64").ah})),a("2xDiJ"),a("MjY8E"),a("kZfxc"),a("6ExWU");a("k0X64")})),a.register("k0X64",(function(n,r){e(n.exports,"E",(function(){return _})),e(n.exports,"a7",(function(){return Ft})),e(n.exports,"a8",(function(){return jt})),e(n.exports,"ah",(function(){return zt})),e(n.exports,"w",(function(){return Wt})),e(n.exports,"z",(function(){return Qt})),e(n.exports,"o",(function(){return Br}));var i=a("ds8z5"),o=a("bpxeT"),s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("jh8P3"),h=a("fVNic"),f=a("eYQtU"),d=a("1t1Wn"),p=a("8nrFW"),v=a("2MbLg"),y=a("2TvXO"),m=a("2xDiJ"),g=a("MjY8E"),k=a("kZfxc"),w=a("4tSb9"),b=a("6ExWU");function x(){return t(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var I=x,E=new(0,m.ErrorFactory)("auth","Firebase",x()),_={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},T=new(0,k.Logger)("@firebase/auth");function S(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;T.logLevel<=k.LogLevel.ERROR&&(a=T).error.apply(a,["Auth (".concat(g.SDK_VERSION,"): ").concat(e)].concat(t(p)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw N.apply(void 0,[e].concat(t(p)(r)))}function C(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return N.apply(void 0,[e].concat(t(p)(r)))}function D(e,n,r){var i=Object.assign(Object.assign({},I()),t(c)({},n,r));return new(0,m.ErrorFactory)("auth","Firebase",i).create(n,{appName:e.name})}function N(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=r[0],u=t(p)(r.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(t(p)(u)))}return(a=E).create.apply(a,[e].concat(t(p)(r)))}function O(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!e)throw N.apply(void 0,[n].concat(t(p)(i)))}function R(e){var t="INTERNAL ASSERTION FAILED: "+e;throw S(t),new Error(t)}function L(e,t){e||R(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P=new Map;function M(e){L(e instanceof Function,"Expected a class definition");var t=P.get(e);return t?(L(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,P.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){var n=(0,g._getProvider)(e,"auth");if(n.isInitialized()){var r=n.getImmediate(),i=n.getOptions();if((0,m.deepEqual)(i,null!=t?t:{}))return r;A(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function V(){return"http:"===j()||"https:"===j()}function j(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var B=function(){"use strict";function e(n,r){t(s)(this,e),this.shortDelay=n,this.longDelay=r,L(r>n,"Short delay should be less than long delay!"),this.isMobile=(0,m.isMobileCordova)()||(0,m.isReactNative)()}return t(u)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(V()||(0,m.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){L(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z,K=function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void R("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void R("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void R("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),H=(z={},t(c)(z,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t(c)(z,"MISSING_CUSTOM_TOKEN","internal-error"),t(c)(z,"INVALID_IDENTIFIER","invalid-email"),t(c)(z,"MISSING_CONTINUE_URI","internal-error"),t(c)(z,"INVALID_PASSWORD","wrong-password"),t(c)(z,"MISSING_PASSWORD","missing-password"),t(c)(z,"EMAIL_EXISTS","email-already-in-use"),t(c)(z,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t(c)(z,"INVALID_IDP_RESPONSE","invalid-credential"),t(c)(z,"INVALID_PENDING_TOKEN","invalid-credential"),t(c)(z,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t(c)(z,"MISSING_REQ_TYPE","internal-error"),t(c)(z,"EMAIL_NOT_FOUND","user-not-found"),t(c)(z,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t(c)(z,"EXPIRED_OOB_CODE","expired-action-code"),t(c)(z,"INVALID_OOB_CODE","invalid-action-code"),t(c)(z,"MISSING_OOB_CODE","internal-error"),t(c)(z,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t(c)(z,"INVALID_ID_TOKEN","invalid-user-token"),t(c)(z,"TOKEN_EXPIRED","user-token-expired"),t(c)(z,"USER_NOT_FOUND","user-token-expired"),t(c)(z,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t(c)(z,"INVALID_CODE","invalid-verification-code"),t(c)(z,"INVALID_SESSION_INFO","invalid-verification-id"),t(c)(z,"INVALID_TEMPORARY_PROOF","invalid-credential"),t(c)(z,"MISSING_SESSION_INFO","missing-verification-id"),t(c)(z,"SESSION_EXPIRED","code-expired"),t(c)(z,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t(c)(z,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t(c)(z,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t(c)(z,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t(c)(z,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t(c)(z,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t(c)(z,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t(c)(z,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t(c)(z,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t(c)(z,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t(c)(z,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),z),G=new B(3e4,6e4);function W(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Q(e,t,n,r){return X.apply(this,arguments)}function X(){return X=t(o)(t(y).mark((function e(n,r,i,a){var s,u=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},e.abrupt("return",Y(n,s,t(o)(t(y).mark((function e(){var o,s,u,c;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=(0,m.querystring)(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",K.fetch()(ee(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),X.apply(this,arguments)}function Y(e,t,n){return J.apply(this,arguments)}function J(){return(J=t(o)(t(y).mark((function e(n,r,i){var a,o,s,u,c,l,h,f,p;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},H),r),e.prev=2,o=new te(n),e.next=6,Promise.race([i(),o.promise]);case 6:return s=e.sent,o.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw ne(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=t(d)(c.split(" : "),2),h=l[0],f=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==h){e.next=23;break}throw ne(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==h){e.next=27;break}throw ne(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==h){e.next=29;break}throw ne(n,"user-disabled",u);case 29:if(p=a[h]||h.toLowerCase().replace(/[_\s]+/g,"-"),!f){e.next=34;break}throw D(n,p,f);case 34:A(n,p);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof m.FirebaseError)){e.next=41;break}throw e.t0;case 41:A(n,"network-request-failed",{message:String(e.t0)});case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function $(e,t,n,r){return Z.apply(this,arguments)}function Z(){return Z=t(o)(t(y).mark((function e(n,r,i,a){var o,s,u=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,Q(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&A(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}function ee(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?q(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var te=function(){"use strict";function e(n){var r=this;t(s)(this,e),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(C(n.auth,"network-request-failed"))}),G.get())}))}return t(u)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function ne(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=C(e,t,r);return i.customData._tokenResponse=n,i}function re(e,t){return ie.apply(this,arguments)}function ie(){return(ie=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e,t){return oe.apply(this,arguments)}function oe(){return(oe=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return ue=t(o)(t(y).mark((function e(n){var r,i,a,o,s,u,c=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=(0,m.getModularInstance)(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,O((o=le(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:se(ce(o.auth_time)),issuedAtTime:se(ce(o.iat)),expirationTime:se(ce(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),ue.apply(this,arguments)}function ce(e){return 1e3*Number(e)}function le(e){var n=t(d)(e.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return S("JWT malformed, contained fewer than 3 sections"),null;try{var o=(0,m.base64Decode)(i);return o?JSON.parse(o):(S("Failed to decode base64 JWT payload"),null)}catch(e){return S("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function he(e,t){return fe.apply(this,arguments)}function fe(){return fe=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){var i=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof m.FirebaseError&&de(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),fe.apply(this,arguments)}function de(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe=function(){"use strict";function e(n){t(s)(this,e),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(u)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(e),r=this;this.timerId=setTimeout(t(o)(t(y).mark((function e(){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),n)}}},{key:"iteration",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),n,null,[[0,5]])})))()}}]),e}(),ve=function(){"use strict";function e(n,r){t(s)(this,e),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return t(u)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=se(this.lastLoginAt),this.creationTime=se(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e){return me.apply(this,arguments)}function me(){return(me=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n){var r,i,a,o,s,u,c,l,h,f,d;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,he(n,ae(i,{idToken:a}));case 7:O(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?we(s.providerUserInfo):[],c=ke(n.providerData,u),l=n.isAnonymous,h=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),f=!!l&&h,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ve(s.createdAt,s.lastLoginAt),isAnonymous:f},Object.assign(n,d);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(){return(ge=t(o)(t(y).mark((function e(n){var r;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,m.getModularInstance)(n),e.next=3,ye(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ke(e,n){var r=e.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return t(p)(r).concat(t(p)(n))}function we(e){return e.map((function(e){var t=e.providerId,n=(0,w.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function be(e,t){return xe.apply(this,arguments)}function xe(){return(xe=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){var i;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(n,{},t(o)(t(y).mark((function e(){var i,a,o,s,u,c;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,m.querystring)({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,u=ee(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",K.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie=function(){"use strict";function e(){t(s)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(u)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){O(e.idToken,"internal-error"),O(void 0!==e.idToken,"internal-error"),O(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,O(n=le(t),"internal-error"),O(void 0!==n.exp,"internal-error"),O(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(y).mark((function i(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(O(!r.accessToken||r.refreshToken,e,"user-token-expired"),n||!r.accessToken||r.isExpired){t.next=3;break}return t.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){t.next=7;break}return t.next=6,r.refresh(e,r.refreshToken);case 6:return t.abrupt("return",r.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){var a,o,s,u;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,be(e,n);case 2:a=t.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return R("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new e;return r&&(O("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(O("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(O("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t){O("string"==typeof e||void 0===e,"internal-error",{appName:t})}var _e=function(){"use strict";function e(n){t(s)(this,e);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=(0,w.__rest)(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pe(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?t(p)(o.providerData):[],this.metadata=new ve(o.createdAt||void 0,o.lastLoginAt||void 0)}return t(u)(e,[{key:"getIdToken",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,he(n,n.stsTokenManager.getToken(n.auth,e));case 2:if(O(i=t.sent,n.auth,"internal-error"),n.accessToken===i){t.next=9;break}return n.accessToken=i,t.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ue.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ge.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){var n=new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}},{key:"_onReload",value:function(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(y).mark((function i(){var a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),a=!0),!n){t.next=5;break}return t.next=5,ye(r);case 5:return t.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,he(e,re(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,o,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,p=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,w=n.emailVerified,b=n.isAnonymous,x=n.providerData,I=n.stsTokenManager;O(k&&I,t,"internal-error");var E=Ie.fromJSON(this.name,I);O("string"==typeof k,t,"internal-error"),Ee(h,t.name),Ee(f,t.name),O("boolean"==typeof w,t,"internal-error"),O("boolean"==typeof b,t,"internal-error"),Ee(d,t.name),Ee(p,t.name),Ee(v,t.name),Ee(y,t.name),Ee(m,t.name),Ee(g,t.name);var _=new e({uid:k,auth:t,email:f,emailVerified:w,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:E,createdAt:m,lastLoginAt:g});return x&&Array.isArray(x)&&(_.providerData=x.map((function(e){return Object.assign({},e)}))),y&&(_._redirectEventId=y),_}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(o)(t(y).mark((function a(){var o,s;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=new Ie).updateFromServerResponse(r),s=new e({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),t.next=5,ye(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),a)})))()}}]),e}(),Te=function(){"use strict";function e(){t(s)(this,e),this.type="NONE",this.storage={}}return t(u)(e,[{key:"_isAvailable",value:function(){return t(o)(t(y).mark((function e(){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.storage[e]=n;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete n.storage[e];case 1:case"end":return t.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Te.type="NONE";var Se=Te;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Ce=function(){"use strict";function e(n,r,i){t(s)(this,e),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=Ae(this.userKey,o.apiKey,u),this.fullPersistenceKey=Ae("persistence",o.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(u)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?_e._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.getCurrentUser();case 4:return i=t.sent,t.next=7,n.removeCurrentUser();case 7:if(n.persistence=e,!i){t.next=10;break}return t.abrupt("return",n.setCurrentUser(i));case 10:case"end":return t.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(o)(t(y).mark((function a(){var s,u,c,l,h,f,d,p,v,m,g,k,w;return t(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new e(M(Se),n,i));case 2:return a.next=4,Promise.all(r.map(function(){var e=t(o)(t(y).mark((function e(n){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),u=s[0]||M(Se),c=Ae(i,n.config.apiKey,n.name),l=null,h=!0,f=!1,d=void 0,a.prev=9,p=r[Symbol.iterator]();case 11:if(h=(v=p.next()).done){a.next=29;break}return m=v.value,a.prev=13,a.next=16,m._get(c);case 16:if(!(g=a.sent)){a.next=22;break}return k=_e._fromJSON(n,g),m!==u&&(l=k),u=m,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:h=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),f=!0,d=a.t1;case 35:a.prev=35,a.prev=36,h||null==p.return||p.return();case 38:if(a.prev=38,!f){a.next=41;break}throw d;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(w=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&w.length){a.next=46;break}return a.abrupt("return",new e(u,n,i));case 46:if(u=w[0],!l){a.next=50;break}return a.next=50,u._set(c,l.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var e=t(o)(t(y).mark((function e(n){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===u){e.next=8;break}return e.prev=1,e.next=4,n._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(u,n,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Le(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ne(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Me(t))return"Blackberry";if(Ue(t))return"Webos";if(Oe(t))return"Safari";if((t.includes("chrome/")||Re(t))&&!t.includes("edge/"))return"Chrome";if(Pe(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/firefox\//i.test(e)}function Oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/crios\//i.test(e)}function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/iemobile/i.test(e)}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/android/i.test(e)}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/blackberry/i.test(e)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/webos/i.test(e)}function Fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ve(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return Fe(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function je(){return(0,m.isIE)()&&10===document.documentMode}function Be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return Fe(e)||Pe(e)||Ue(e)||Me(e)||/windows phone/i.test(e)||Le(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qe(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=De((0,m.getUA)());break;case"Worker":t="".concat(De((0,m.getUA)()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(g.SDK_VERSION,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.queue=[]}return t(u)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a,o,s,u,c,l,h,f,d,p,v,m;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.auth.currentUser!==e){t.next=2;break}return t.abrupt("return");case 2:i=[],t.prev=3,a=!0,o=!1,s=void 0,t.prev=5,u=n.queue[Symbol.iterator]();case 7:if(a=(c=u.next()).done){t.next=15;break}return l=c.value,t.next=11,l(e);case 11:l.onAbort&&i.push(l.onAbort);case 12:a=!0,t.next=7;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),o=!0,s=t.t0;case 21:t.prev=21,t.prev=22,a||null==u.return||u.return();case 24:if(t.prev=24,!o){t.next=27;break}throw s;case 27:return t.finish(24);case 28:return t.finish(21);case 29:t.next=52;break;case 31:for(t.prev=31,t.t1=t.catch(3),i.reverse(),h=!0,f=!1,d=void 0,t.prev=35,p=i[Symbol.iterator]();!(h=(v=p.next()).done);h=!0){m=v.value;try{m()}catch(e){}}t.next=43;break;case 39:t.prev=39,t.t2=t.catch(35),f=!0,d=t.t2;case 43:t.prev=43,t.prev=44,h||null==p.return||p.return();case 46:if(t.prev=46,!f){t.next=49;break}throw d;case 49:return t.finish(46);case 50:return t.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===t.t1||void 0===t.t1?void 0:t.t1.message});case 52:case"end":return t.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),e}(),Ke=function(){"use strict";function e(n,r,i){t(s)(this,e),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ge(this),this.idTokenSubscription=new Ge(this),this.beforeStateQueue=new ze(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=E,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return t(u)(e,[{key:"_initializeWithPersistence",value:function(e,n){n&&(this._popupRedirectResolver=M(n));var r=this;return this._initializationPromise=this.queue(t(o)(t(y).mark((function i(){var a,o;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Ce.create(r,e);case 5:if(r.persistenceManager=t.sent,!r._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,r._popupRedirectResolver._initialize(r);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){t.next=21;break}return t.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a,o,s,u,c,l;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=t.sent,o=a,s=!1,!e||!n.config.authDomain){t.next=15;break}return t.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,t.next=13,n.tryRedirectSignIn(e);case 13:l=t.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){t.next=17;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,n.beforeStateQueue.runMiddleware(o);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(t.t0)}));case 28:if(!o){t.next=32;break}return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return t.abrupt("return",n.directlySetCurrentUser(null));case 33:return O(n._popupRedirectResolver,n,"argument-error"),t.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){t.next=38;break}return t.abrupt("return",n.directlySetCurrentUser(o));case 38:return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return t.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,n._popupRedirectResolver._completeRedirectFn(n,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,n._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ye(e);case 3:t.next=9;break;case 5:if(t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)){t.next=9;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 9:return t.abrupt("return",n.directlySetCurrentUser(e));case 10:case"end":return t.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?(0,m.getModularInstance)(e):null)&&O(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),t.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return t.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(y).mark((function i(){return t(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&O(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),n)})))()}},{key:"setPersistence",value:function(e){var n=this;return this.queue(t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.assertedPersistence.setPersistence(M(e));case 2:case"end":return t.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,m.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){var a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=t.sent,t.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.redirectPersistenceManager){t.next=9;break}return O(i=e&&M(e)||n._popupRedirectResolver,n,"argument-error"),t.next=5,Ce.create(n,[M(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=t.sent,t.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=t.sent;case 9:return t.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return t.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a;return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(t(o)(t(y).mark((function e(){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.currentUser&&n.currentUser!==e&&n._currentUser._stopProactiveRefresh(),e&&n.isProactiveRefreshEnabled&&e._startProactiveRefresh(),n.currentUser=e,!e){t.next=8;break}return t.next=6,n.assertedPersistence.setCurrentUser(e);case 6:t.next=10;break;case 8:return t.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return t.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qe(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r,i,a;return t(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t(c)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),n.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){return(0,m.getModularInstance)(e)}var Ge=function(){"use strict";function e(n){var r=this;t(s)(this,e),this.auth=n,this.observer=null,this.addObserver=(0,m.createSubscribe)((function(e){return r.observer=e}))}return t(u)(e,[{key:"next",get:function(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function We(e,n,r){var i=He(e);O(i._canInitEmulator,i,"emulator-config-failed"),O(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=Qe(n),s=function(e){var n=Qe(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:Xe(i.substr(o.length+1))}}var s=t(d)(i.split(":"),2);return{host:s[0],port:Xe(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Qe(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Xe(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Ye=function(){"use strict";function e(n,r){t(s)(this,e),this.providerId=n,this.signInMethod=r}return t(u)(e,[{key:"toJSON",value:function(){return R("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return R("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return R("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return R("not implemented")}}]),e}();function Je(e,t){return $e.apply(this,arguments)}function $e(){return($e=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ze(e,t){return et.apply(this,arguments)}function et(){return(et=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(n,"POST","/v1/accounts:signInWithPassword",W(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function tt(e,t){return nt.apply(this,arguments)}function nt(){return(nt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(n,"POST","/v1/accounts:signInWithEmailLink",W(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function rt(e,t){return it.apply(this,arguments)}function it(){return(it=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(n,"POST","/v1/accounts:signInWithEmailLink",W(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(s)(this,r),(o=n.call(this,"password",a))._email=e,o._password=i,o._tenantId=u,o}return t(u)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=n.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Ze(e,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return t.abrupt("return",tt(e,{email:n._email,oobCode:n._password}));case 5:A(e,"internal-error");case 6:case"end":return t.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Je(e,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",rt(e,{idToken:n,email:r._email,oobCode:r._password}));case 5:A(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Ye);function ot(e,t){return st.apply(this,arguments)}function st(){return(st=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(n,"POST","/v1/accounts:signInWithIdp",W(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(u)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return ot(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,ot(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,ot(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,m.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):A("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=(0,w.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(Ye);function ct(e,t){return lt.apply(this,arguments)}function lt(){return(lt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(n,"POST","/v1/accounts:sendVerificationCode",W(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ht(){return(ht=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(n,"POST","/v1/accounts:signInWithPhoneNumber",W(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ft(){return(ft=t(o)(t(y).mark((function e(n,r){var i;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(n,"POST","/v1/accounts:signInWithPhoneNumber",W(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw ne(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var dt=t(c)({},"USER_NOT_FOUND","user-not-found");function pt(){return(pt=t(o)(t(y).mark((function e(n,r){var i;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",$(n,"POST","/v1/accounts:signInWithPhoneNumber",W(n,i),dt));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"phone","phone")).params=e,i}return t(u)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return ht.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return ft.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return pt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(Ye);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt=function(){"use strict";function e(n){var r,i,a,o,u,c;t(s)(this,e);var l=(0,m.querystringDecode)((0,m.extractQuerystring)(n)),h=null!==(r=l.apiKey)&&void 0!==r?r:null,f=null!==(i=l.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);O(h&&f&&d,"argument-error"),this.apiKey=h,this.operation=d,this.code=f,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return t(u)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=(0,m.querystringDecode)((0,m.extractQuerystring)(e)).link,n=t?(0,m.querystringDecode)((0,m.extractQuerystring)(t)).deep_link_id:null,r=(0,m.querystringDecode)((0,m.extractQuerystring)(e)).deep_link_id;return(r?(0,m.querystringDecode)((0,m.extractQuerystring)(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var mt=function(){"use strict";function e(){t(s)(this,e),this.providerId=e.PROVIDER_ID}return t(u)(e,null,[{key:"credential",value:function(e,t){return at._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=yt.parseLink(t);return O(n,"argument-error"),at._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();mt.PROVIDER_ID="password",mt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",mt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gt=function(){"use strict";function e(n){t(s)(this,e),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return t(u)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),kt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(u)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t(p)(this.scopes)}}]),r}(gt),wt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,"facebook.com")}return t(u)(r,null,[{key:"credential",value:function(e){return ut._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(kt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.FACEBOOK_SIGN_IN_METHOD="facebook.com",wt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){var e;return t(s)(this,r),(e=n.call(this,"google.com")).addScope("profile"),e}return t(u)(r,null,[{key:"credential",value:function(e,t){return ut._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(kt);bt.GOOGLE_SIGN_IN_METHOD="google.com",bt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,"github.com")}return t(u)(r,null,[{key:"credential",value:function(e){return ut._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(kt);xt.GITHUB_SIGN_IN_METHOD="github.com",xt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var It=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,"twitter.com")}return t(u)(r,null,[{key:"credential",value:function(e,t){return ut._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(kt);function Et(e,t){return _t.apply(this,arguments)}function _t(){return(_t=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(n,"POST","/v1/accounts:signUp",W(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.TWITTER_SIGN_IN_METHOD="twitter.com",It.PROVIDER_ID="twitter.com";var Tt=function(){"use strict";function e(n){t(s)(this,e),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return t(u)(e,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(o)(t(y).mark((function o(){var s,u,c;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_e._fromIdTokenResponse(n,i,a);case 2:return s=t.sent,u=St(i),c=new e({user:s,providerId:u,_tokenResponse:i,operationType:r}),t.abrupt("return",c);case 6:case"end":return t.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,i){return t(o)(t(y).mark((function a(){var o;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=St(i),t.abrupt("return",new e({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return t.stop()}}),a)})))()}}]),e}();function St(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var At=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,a,o,u){var c,l;return t(s)(this,r),(c=n.call(this,a.code,a.message)).operationType=o,c.user=u,Object.setPrototypeOf(t(i)(c),r.prototype),c.customData={appName:e.name,tenantId:null!==(l=e.tenantId)&&void 0!==l?l:void 0,_serverResponse:a.customData._serverResponse,operationType:o},c}return t(u)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(m.FirebaseError);function Ct(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw At._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e,t){return Nt.apply(this,arguments)}function Nt(){return Nt=t(o)(t(y).mark((function e(n,r){var i,a,o=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=he,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Tt._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),e)}))),Nt.apply(this,arguments)}function Ot(e,t){return Rt.apply(this,arguments)}function Rt(){return Rt=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){var i,a,o,s,u,c,l=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=n.auth,o="reauthenticate",e.prev=3,e.next=6,he(n,Ct(a,o,r,n),i);case 6:return O((s=e.sent).idToken,a,"internal-error"),O(u=le(s.idToken),a,"internal-error"),c=u.sub,O(n.uid===c,a,"user-mismatch"),e.abrupt("return",Tt._forOperation(n,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&A(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),Rt.apply(this,arguments)}function Lt(e,t){return Pt.apply(this,arguments)}function Pt(){return Pt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){var i,a,o,s,u=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,Ct(n,a,r);case 4:return o=e.sent,e.next=7,Tt._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),Pt.apply(this,arguments)}function Mt(e,t){return Ut.apply(this,arguments)}function Ut(){return(Ut=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Lt(He(n),r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ft(e,t,n){return Vt.apply(this,arguments)}function Vt(){return(Vt=t(o)(t(y).mark((function e(n,r,i){var a,o,s;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=He(n),e.next=3,Et(a,{returnSecureToken:!0,email:r,password:i});case 3:return o=e.sent,e.next=6,Tt._fromIdTokenResponse(a,"signIn",o);case 6:return s=e.sent,e.next=9,a._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jt(e,t,n){return Mt((0,m.getModularInstance)(e),mt.credential(t,n))}function Bt(e,t){return qt.apply(this,arguments)}function qt(){return(qt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function zt(e,t){return Kt.apply(this,arguments)}function Kt(){return(Kt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){var i,a,o,s,u,c,l;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.displayName,a=r.photoURL,void 0!==i||void 0!==a){e.next=3;break}return e.abrupt("return");case 3:return o=(0,m.getModularInstance)(n),e.next=6,o.getIdToken();case 6:return s=e.sent,u={idToken:s,displayName:i,photoUrl:a,returnSecureToken:!0},e.next=10,he(o,Bt(o.auth,u));case 10:return c=e.sent,o.displayName=c.displayName||null,o.photoURL=c.photoUrl||null,(l=o.providerData.find((function(e){return"password"===e.providerId})))&&(l.displayName=o.displayName,l.photoURL=o.photoURL),e.next=17,o._updateTokensIfNecessary(c);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ht(e,t,n,r){return(0,m.getModularInstance)(e).onIdTokenChanged(t,n,r)}function Gt(e,t,n){return(0,m.getModularInstance)(e).beforeAuthStateChanged(t,n)}function Wt(e,t,n,r){return(0,m.getModularInstance)(e).onAuthStateChanged(t,n,r)}function Qt(e){return(0,m.getModularInstance)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(e,t){return Q(e,"POST","/v2/accounts/mfaEnrollment:start",W(e,t))}function Yt(e,t){return Q(e,"POST","/v2/accounts/mfaEnrollment:finalize",W(e,t))}new WeakMap;var Jt="__sak",$t=function(){"use strict";function e(n,r){t(s)(this,e),this.storageRetriever=n,this.type=r}return t(u)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Jt,"1"),this.storage.removeItem(Jt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){var e,i;return t(s)(this,r),(e=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Oe(i=(0,m.getUA)())||Fe(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Be(),e._shouldAllowMigration=!0,e}return t(u)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);je()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,n){var i=this,a=this;return t(o)(t(y).mark((function o(){return t(y).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(l)(t(h)(r.prototype),"_set",i).call(a,e,n);case 2:a.localCache[e]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var n=this,i=this;return t(o)(t(y).mark((function a(){var o;return t(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(l)(t(h)(r.prototype),"_get",n).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var n=this,i=this;return t(o)(t(y).mark((function a(){return t(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(l)(t(h)(r.prototype),"_remove",n).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),r}($t);Zt.type="LOCAL";var en=Zt,tn=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(u)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}($t);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.type="SESSION";var nn=tn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e){return Promise.all(e.map((n=t(o)(t(y).mark((function e(n){var r;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var an=function(){"use strict";function e(n){t(s)(this,e),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(u)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a,s,u,c,l,h,f;return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=e).data,s=a.eventId,u=a.eventType,c=a.data,null==(l=n.handlersMap[u])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),h=Array.from(l).map(function(){var e=t(o)(t(y).mark((function e(n){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,c));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,rn(h);case 9:f=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:f});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function on(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.receivers=[];var sn=function(){"use strict";function e(n){t(s)(this,e),this.target=n,this.handlers=new Set}return t(u)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(o)(t(y).mark((function a(){var o,s,u;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,a){var c=on("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(e){var n=e;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:e,eventId:c,data:n},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return t.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cn(){return void 0!==un().WorkerGlobalScope&&"function"==typeof un().importScripts}function ln(){return hn.apply(this,arguments)}function hn(){return(hn=t(o)(t(y).mark((function e(){var n;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fn="firebaseLocalStorageDb",dn="firebaseLocalStorage",pn="fbase_key",vn=function(){"use strict";function e(n){t(s)(this,e),this.request=n}return t(u)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function yn(e,t){return e.transaction([dn],t?"readwrite":"readonly").objectStore(dn)}function mn(){var e=indexedDB.deleteDatabase(fn);return new vn(e).toPromise()}function gn(){var e=indexedDB.open(fn,1);return new Promise((function(n,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(dn,{keyPath:pn})}catch(e){r(e)}})),e.addEventListener("success",t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(dn)){t.next=12;break}return i.close(),t.next=5,mn();case 5:return t.t0=n,t.next=8,gn();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:n(i);case 13:case"end":return t.stop()}}),r)}))))}))}function kn(e,t,n){return wn.apply(this,arguments)}function wn(){return(wn=t(o)(t(y).mark((function e(n,r,i){var a,o;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=yn(n,!0).put((a={},t(c)(a,pn,r),t(c)(a,"value",i),a)),e.abrupt("return",new vn(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function bn(e,t){return xn.apply(this,arguments)}function xn(){return(xn=t(o)(t(y).mark((function e(n,r){var i,a;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=yn(n,!1).get(r),e.next=3,new vn(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function In(e,t){var n=yn(e,!0).delete(t);return new vn(n).toPromise()}var En=function(){"use strict";function e(){t(s)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(u)(e,[{key:"_openDb",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,gn();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),n)})))()}},{key:"_withRetries",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,n._openDb();case 5:return a=t.sent,t.next=8,e(a);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",cn()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.receiver=an._getInstance(cn()?self:null),e.receiver._subscribe("keyChanged",function(){var n=t(o)(t(y).mark((function n(r,i){var a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r,i,a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,ln();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new sn(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,n.sender._send("keyChanged",{key:e},n.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(o)(t(y).mark((function e(){var n;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,gn();case 5:return n=e.sent,e.next=8,kn(n,Jt,"1");case 8:return e.next=10,In(n,Jt);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,n.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){return t(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(t(o)(t(y).mark((function i(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return kn(t,e,n)}));case 2:return r.localCache[e]=n,t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return bn(t,e)}));case 2:return i=t.sent,n.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return In(t,e)}));case 2:return delete n.localCache[e],t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r,i,a,o,s,u,c,l,h,f,d,p,v,m,g,k,w;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=yn(e,!1).getAll();return new vn(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,t.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)h=l.value,f=h.fbase_key,d=h.value,a.add(f),JSON.stringify(e.localCache[f])!==JSON.stringify(d)&&(e.notifyListeners(f,d),i.push(f));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,o||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(p=!0,v=!1,m=void 0,t.prev=27,g=Object.keys(e.localCache)[Symbol.iterator]();!(p=(k=g.next()).done);p=!0)w=k.value,e.localCache[w]&&!a.has(w)&&(e.notifyListeners(w,null),i.push(w));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),v=!0,m=t.t1;case 35:t.prev=35,t.prev=36,p||null==g.return||g.return();case 38:if(t.prev=38,!v){t.next=41;break}throw m;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();En.type="LOCAL";var _n=En;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(e,t){return Q(e,"POST","/v2/accounts/mfaSignIn:start",W(e,t))}function Sn(e,t){return Q(e,"POST","/v2/accounts/mfaSignIn:finalize",W(e,t))}function An(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=C("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function Cn(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Cn("rcb"),new B(3e4,6e4);var Dn="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(e,t,n){return On.apply(this,arguments)}function On(){return(On=t(o)(t(y).mark((function e(n,r,i){var a,o,s,u,c,l,h,f;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,O("string"==typeof o,n,"argument-error"),O(i.type===Dn,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return O("enroll"===u.type,n,"internal-error"),e.next=15,Xt(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return O("signin"===u.type,n,"internal-error"),O(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Tn(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return h=e.sent,e.abrupt("return",h.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,ct(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return f=e.sent.sessionInfo,e.abrupt("return",f);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rn=function(){"use strict";function e(n){t(s)(this,e),this.providerId=e.PROVIDER_ID,this.auth=He(n)}return t(u)(e,[{key:"verifyPhoneNumber",value:function(e,t){return Nn(this.auth,e,(0,m.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return vt._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?vt._fromTokenResponse(n,r):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ln(e,t){return t?M(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn.PROVIDER_ID="phone",Rn.PHONE_SIGN_IN_METHOD="phone";var Pn=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"custom","custom")).params=e,i}return t(u)(r,[{key:"_getIdTokenResponse",value:function(e){return ot(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return ot(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return ot(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Ye);function Mn(e){return Lt(e.auth,new Pn(e),e.bypassAuthState)}function Un(e){var t=e.auth,n=e.user;return O(n,t,"internal-error"),Ot(n,new Pn(e),e.bypassAuthState)}function Fn(e){return Vn.apply(this,arguments)}function Vn(){return(Vn=t(o)(t(y).mark((function e(n){var r,i;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,O(i=n.user,r,"internal-error"),e.abrupt("return",Dt(i,new Pn(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jn=function(){"use strict";function e(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(s)(this,e),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return t(u)(e,[{key:"execute",value:function(){var e,n=this;return new Promise((e=t(o)(t(y).mark((function e(r,i){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a,o,s,u,c,l;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,s=e.tenantId,u=e.error,c=e.type,!u){t.next=4;break}return n.reject(u),t.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},t.prev=5,t.t0=n,t.next=9,n.getIdpTask(c)(l);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),n.reject(t.t2);case 16:case"end":return t.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mn;case"linkViaPopup":case"linkViaRedirect":return Fn;case"reauthViaPopup":case"reauthViaRedirect":return Un;default:A(this.auth,"internal-error")}}},{key:"resolve",value:function(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),Bn=new B(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qn=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,a,o,u,c){var l;return t(s)(this,r),(l=n.call(this,e,a,u,c)).provider=o,l.authWindow=null,l.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=t(i)(l),l}return t(u)(r,[{key:"executeNotNull",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return O(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L(1===e.filter.length,"Popup operations only handle one event"),r=on(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(C(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(C(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(C(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Bn.get())};t()}}]),r}(jn);qn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zn=new Map,Kn=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(s)(this,r),(a=n.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return t(u)(r,[{key:"execute",value:function(){var e=this,n=this;return t(o)(t(y).mark((function i(){var a,o;return t(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=zn.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Hn(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t(l)(t(h)(r.prototype),"execute",e).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:zn.set(n.auth._key(),a);case 21:return n.bypassAuthState||zn.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var n=this,i=this,a=function(){return t(l)(t(h)(r.prototype),"onAuthEvent",n)};return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){return t(o)(t(y).mark((function e(){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(jn);function Hn(e,t){return Gn.apply(this,arguments)}function Gn(){return(Gn=t(o)(t(y).mark((function e(n,r){var i,a,o;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Xn(r),a=Qn(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Wn(e,t){zn.set(e._key(),t)}function Qn(e){return M(e._redirectPersistence)}function Xn(e){return Ae("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e,t){return Jn.apply(this,arguments)}function Jn(){return Jn=t(o)(t(y).mark((function e(n,r){var i,a,o,s,u,c=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=He(n),o=Ln(a,r),s=new Kn(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),Jn.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var $n=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(u)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return er(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!er(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(C(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zn(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Zn(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Zn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function er(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function tr(e){return nr.apply(this,arguments)}function nr(){return nr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n){var r,i=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Q(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),nr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ir=/^https?/;function ar(){return(ar=t(o)(t(y).mark((function e(n){var r,i,a,o,s,u,c;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,tr(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!or(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:A(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function or(e){var t=F(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!ir.test(r))return!1;if(rr.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sr=new B(3e4,6e4);function ur(){var e=un().___jsl,n=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t(p)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var cr=null;function lr(e){return cr=cr||function(e){return new Promise((function(t,n){var r,i,a;function o(){ur(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){ur(),n(C(e,"network-request-failed"))},timeout:sr.get()})}if(null===(i=null===(r=un().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=un().gapi)||void 0===a?void 0:a.load)){var s=Cn("iframefcb");return un()[s]=function(){gapi.load?o():n(C(e,"network-request-failed"))},An("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw cr=null,e}))}(e),cr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hr=new B(5e3,15e3),fr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pr(e){var t=e.config;O(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?q(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:g.SDK_VERSION},i=dr.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat((0,m.querystring)(r).slice(1))}function vr(e){return yr.apply(this,arguments)}function yr(){return yr=t(o)(t(y).mark((function e(n){var r,i;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,lr(n);case 2:return r=e.sent,O(i=un().gapi,n,"internal-error"),e.abrupt("return",r.open({where:document.body,url:pr(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fr,dontclear:!0},(function(e){return new Promise((r=t(o)(t(y).mark((function r(i,a){var o,s,u;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=function(){un().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:o=C(n,"network-request-failed"),s=un().setTimeout((function(){a(o)}),hr.get()),e.ping(u).then(u,(function(){a(o)}));case 7:case"end":return t.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),yr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gr="_blank",kr="http://localhost",wr=function(){"use strict";function e(n){t(s)(this,e),this.window=n,this.associatedEvent=null}return t(u)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function br(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},mr),{width:i.toString(),height:a.toString(),top:o,left:s}),l=(0,m.getUA)().toLowerCase();r&&(u=Re(l)?gr:r),Ne(l)&&(n=n||kr,c.scrollbars="yes");var h=Object.entries(c).reduce((function(e,n){var r=t(d)(n,2),i=r[0],a=r[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(Ve(l)&&"_self"!==u)return xr(n||"",u),new wr(null);var f=window.open(n||"",u,h);O(f,e,"popup-blocked");try{f.focus()}catch(e){}return new wr(f)}function xr(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ir="__/auth/handler",Er="emulator/auth/handler";function _r(e,n,r,i,a,o){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:g.SDK_VERSION,eventId:a};if(n instanceof gt){n.setDefaultLanguage(e.languageCode),s.providerId=n.providerId||"",(0,m.isEmpty)(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,f=Object.entries(o||{})[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var p=t(d)(h.value,2),v=p[0],y=p[1];s[v]=y}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(n instanceof kt){var k=n.getScopes().filter((function(e){return""!==e}));k.length>0&&(s.scopes=k.join(","))}e.tenantId&&(s.tid=e.tenantId);var w,b,x=s,I=!0,E=!1,_=void 0;try{for(var T,S=Object.keys(x)[Symbol.iterator]();!(I=(T=S.next()).done);I=!0){var A=T.value;void 0===x[A]&&delete x[A]}}catch(e){E=!0,_=e}finally{try{I||null==S.return||S.return()}finally{if(E)throw _}}return"".concat((w=e,b=w.config,b.emulator?q(b,Er):"https://".concat(b.authDomain,"/").concat(Ir)),"?").concat((0,m.querystring)(x).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Tr="webStorageSupport",Sr=function(){"use strict";function e(){t(s)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nn,this._completeRedirectFn=Yn,this._overrideRedirectResult=Wn}return t(u)(e,[{key:"_openPopup",value:function(e,n,r,i){var a=this;return t(o)(t(y).mark((function o(){var s,u;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L(null===(s=a.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=_r(e,n,r,F(),i),t.abrupt("return",br(e,u,on()));case 4:case"end":return t.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,n,r,i){var a=this;return t(o)(t(y).mark((function o(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a._originValidation(e);case 2:return o=_r(e,n,r,F(),i),un().location.href=o,t.abrupt("return",new Promise((function(){})));case 4:case"end":return t.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(L(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,vr(e);case 2:return i=t.sent,a=new $n(e),i.register("authEvent",(function(t){return O(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[e._key()]={manager:a},n.iframes[e._key()]=i,t.abrupt("return",a);case 8:case"end":return t.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Tr,{type:Tr},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),A(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return ar.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Be()||Oe()||Fe()}}]),e}(),Ar=Sr,Cr=function(){"use strict";function e(n){t(s)(this,e),this.factorId=n}return t(u)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return R("unexpected MultiFactorSessionType")}}}]),e}(),Dr=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"phone")).credential=e,i}return t(u)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Q(e,"POST","/v2/accounts/mfaEnrollment:finalize",W(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Q(e,"POST","/v2/accounts/mfaSignIn:finalize",W(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(Cr);(function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"assertion",value:function(e){return Dr._fromCredential(e)}}]),e}()).FACTOR_ID="phone",(function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"assertionForEnrollment",value:function(e,t){return Nr._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return Nr._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(e){return t(o)(t(y).mark((function n(){var r,i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(void 0!==(r=e).auth,"internal-error"),t.next=4,n=r.auth,a={idToken:r.credential,totpEnrollmentInfo:{}},Q(n,"POST","/v2/accounts/mfaEnrollment:start",W(n,a));case 4:return i=t.sent,t.abrupt("return",Or._fromStartTotpMfaEnrollmentResponse(i,r.auth));case 6:case"end":return t.stop()}var n,a}),n)})))()}}]),e}()).FACTOR_ID="totp";var Nr=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i,a){var o;return t(s)(this,r),(o=n.call(this,"totp")).otp=e,o.enrollmentId=i,o.secret=a,o}return t(u)(r,[{key:"_finalizeEnroll",value:function(e,n,r){var i=this;return t(o)(t(y).mark((function a(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(void 0!==i.secret,e,"argument-error"),t.abrupt("return",Yt(e,{idToken:n,displayName:r,totpVerificationInfo:i.secret._makeTotpVerificationInfo(i.otp)}));case 2:case"end":return t.stop()}}),a)})))()}},{key:"_finalizeSignIn",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){var a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(void 0!==r.enrollmentId&&void 0!==r.otp,e,"argument-error"),a={verificationCode:r.otp},t.abrupt("return",Sn(e,{mfaPendingCredential:n,mfaEnrollmentId:r.enrollmentId,totpVerificationInfo:a}));case 3:case"end":return t.stop()}}),i)})))()}}],[{key:"_fromSecret",value:function(e,t){return new r(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new r(t,e)}}]),r}(Cr),Or=function(){"use strict";function e(n,r,i,a,o,u,c){t(s)(this,e),this.sessionInfo=u,this.auth=c,this.secretKey=n,this.hashingAlgorithm=r,this.codeLength=i,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=o}return t(u)(e,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var n,r=!1;return(Rr(e)||Rr(t))&&(r=!0),r&&(Rr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Rr(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(t,n){return new e(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,n)}}]),e}();function Rr(e){return void 0===e||0===(null==e?void 0:e.length)}var Lr="@firebase/auth",Pr="0.22.0",Mr=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.internalListeners=new Map}return t(u)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.assertAuthConfigured(),t.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,n.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ur,Fr=(0,m.getExperimentalSetting)("authIdTokenMaxAge")||300,Vr=null,jr=function(e){return n=t(o)(t(y).mark((function n(r){var i,a,o;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r,!t.t0){t.next=5;break}return t.next=4,r.getIdTokenResult();case 4:t.t0=t.sent;case 5:if(i=t.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>Fr)){t.next=9;break}return t.abrupt("return");case 9:if(o=null==i?void 0:i.token,Vr!==o){t.next=12;break}return t.abrupt("return");case 12:return Vr=o,t.next=15,fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return t.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};function Br(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getApp)(),t=(0,g._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();var n=U(e,{popupRedirectResolver:Ar,persistence:[_n,en,nn]}),r=(0,m.getExperimentalSetting)("authTokenSyncURL");if(r){var i=jr(r);Gt(n,i,(function(){return i(n.currentUser)})),Ht(n,(function(e){return i(e)}))}var a=(0,m.getDefaultEmulatorHost)("auth");return a&&We(n,"http://".concat(a)),n}Ur="Browser",(0,g._registerComponent)(new(0,b.Component)("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){O(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),O(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:Ur,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qe(Ur)},i=new Ke(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(M);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),(0,g._registerComponent)(new(0,b.Component)("auth-internal",(function(e){var t=He(e.getProvider("auth").getImmediate());return new Mr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,g.registerVersion)(Lr,Pr,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ur)),(0,g.registerVersion)(Lr,Pr,"esm2017")})),a.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return i(e,t,n)};var n,r=(n=a("2mz0K"))&&n.__esModule?n:{default:n};function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=r.default(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(n||e):a.value}})(e,t,n)}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}})),a.register("4tSb9",(function(t,n){e(t.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),a.register("6m2hf",(function(t,n){e(t.exports,"getFirestore",(function(){return a("221Dt").getFirestore})),e(t.exports,"doc",(function(){return a("221Dt").doc})),e(t.exports,"setDoc",(function(){return a("221Dt").setDoc})),e(t.exports,"updateDoc",(function(){return a("221Dt").updateDoc})),e(t.exports,"arrayUnion",(function(){return a("221Dt").arrayUnion})),e(t.exports,"getDoc",(function(){return a("221Dt").getDoc})),a("221Dt")})),a.register("221Dt",(function(n,r){e(n.exports,"doc",(function(){return Zo})),e(n.exports,"getFirestore",(function(){return ns})),e(n.exports,"getDoc",(function(){return Vs})),e(n.exports,"setDoc",(function(){return Bs})),e(n.exports,"updateDoc",(function(){return qs})),e(n.exports,"arrayUnion",(function(){return Hs}));var i=a("bpxeT"),o=a("8MBJY"),s=a("ge8co"),u=a("a2hTj"),c=a("jh8P3"),l=a("fVNic"),h=a("eYQtU"),f=a("jmhxu"),d=a("1t1Wn"),p=a("8nrFW"),v=(a("l5bVx"),a("4c7YB")),y=a("2MbLg"),m=a("2TvXO"),g=a("MjY8E"),k=a("6ExWU"),w=a("kZfxc"),b=a("2xDiJ"),x=a("6RwJk"),I=(a("6qd2L"),"@firebase/firestore"),E=function(){"use strict";function e(n){t(o)(this,e),this.uid=n}return t(u)(e,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),e}();E.UNAUTHENTICATED=new E(null),E.GOOGLE_CREDENTIALS=new E("google-credentials-uid"),E.FIRST_PARTY=new E("first-party-uid"),E.MOCK_USER=new E("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _="9.19.0",T=new(0,w.Logger)("@firebase/firestore");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return T.logLevel}function A(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=w.LogLevel.DEBUG){var a,o=r.map(N);(a=T).debug.apply(a,["Firestore (".concat(_,"): ").concat(e)].concat(t(p)(o)))}}function C(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=w.LogLevel.ERROR){var a,o=r.map(N);(a=T).error.apply(a,["Firestore (".concat(_,"): ").concat(e)].concat(t(p)(o)))}}function D(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=w.LogLevel.WARN){var a,o=r.map(N);(a=T).warn.apply(a,["Firestore (".concat(_,"): ").concat(e)].concat(t(p)(o)))}}function N(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(_,") INTERNAL ASSERTION FAILED: ")+e;throw C(t),new Error(t)}function R(e,t){e||O()}function L(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},M=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this,e,i)).code=e,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},t(f)(a)}return r}(b.FirebaseError),U=function e(){"use strict";var n=this;t(o)(this,e),this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))},F=function e(n,r){"use strict";t(o)(this,e),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},V=function(){"use strict";function e(){t(o)(this,e)}return t(u)(e,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(E.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),e}(),j=function(){"use strict";function e(n){t(o)(this,e),this.token=n,this.changeListener=null}return t(u)(e,[{key:"getToken",value:function(){return Promise.resolve(this.token)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){var n=this;this.changeListener=t,e.enqueueRetryable((function(){return t(n.token.user)}))}},{key:"shutdown",value:function(){this.changeListener=null}}]),e}(),B=function(){"use strict";function e(n){t(o)(this,e),this.t=n,this.currentUser=E.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}return t(u)(e,[{key:"start",value:function(e,n){var r=this,a=this.i,o=function(e){return r.i!==a?(a=r.i,n(e)):Promise.resolve()},s=new U;this.o=function(){var t=r;r.i++,r.currentUser=r.u(),s.resolve(),s=new U,e.enqueueRetryable((function(){return o(t.currentUser)}))};var u=function(){var n=s,a=r;e.enqueueRetryable(t(i)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.promise;case 2:return e.next=4,o(a.currentUser);case 4:case"end":return e.stop()}}),e)}))))},c=function(e){A("FirebaseAuthCredentialsProvider","Auth detected"),r.auth=e,r.auth.addAuthTokenListener(r.o),u()};this.t.onInit((function(e){return c(e)})),setTimeout((function(){if(!r.auth){var e=r.t.getImmediate({optional:!0});e?c(e):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new U)}}),0),u()}},{key:"getToken",value:function(){var e=this,t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((function(n){return e.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),e.getToken()):n?(R("string"==typeof n.accessToken),new F(n.accessToken,e.currentUser)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.auth&&this.auth.removeAuthTokenListener(this.o)}},{key:"u",value:function(){var e=this.auth&&this.auth.getUid();return R(null===e||"string"==typeof e),new E(e)}}]),e}(),q=function(){"use strict";function e(n,r,i){t(o)(this,e),this.h=n,this.l=r,this.m=i,this.type="FirstParty",this.user=E.FIRST_PARTY,this.g=new Map}return t(u)(e,[{key:"p",value:function(){return this.m?this.m():null}},{key:"headers",get:function(){this.g.set("X-Goog-AuthUser",this.h);var e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}]),e}(),z=function(){"use strict";function e(n,r,i){t(o)(this,e),this.h=n,this.l=r,this.m=i}return t(u)(e,[{key:"getToken",value:function(){return Promise.resolve(new q(this.h,this.l,this.m))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(E.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),e}(),K=function e(n){"use strict";t(o)(this,e),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},H=function(){"use strict";function e(n){t(o)(this,e),this.I=n,this.forceRefresh=!1,this.appCheck=null,this.T=null}return t(u)(e,[{key:"start",value:function(e,t){var n=this;this.o=function(r){e.enqueueRetryable((function(){return function(e){null!=e.error&&A("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));var r=e.token!==n.T;return n.T=e.token,A("FirebaseAppCheckTokenProvider","Received ".concat(r?"new":"existing"," token.")),r?t(e.token):Promise.resolve()}(r)}))};var r=function(e){A("FirebaseAppCheckTokenProvider","AppCheck detected"),n.appCheck=e,n.appCheck.addTokenListener(n.o)};this.I.onInit((function(e){return r(e)})),setTimeout((function(){if(!n.appCheck){var e=n.I.getImmediate({optional:!0});e?r(e):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}},{key:"getToken",value:function(){var e=this,t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((function(t){return t?(R("string"==typeof t.token),e.T=t.token,new K(t.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(e){var t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(var r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W=function(){"use strict";function e(){t(o)(this,e)}return t(u)(e,null,[{key:"A",value:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";n.length<20;)for(var r=G(40),i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length));return n}}]),e}();function Q(e,t){return e<t?-1:e>t?1:0}function X(e,t,n){return e.length===t.length&&e.every((function(e,r){return n(e,t[r])}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Y=function(){"use strict";function e(n,r){if(t(o)(this,e),this.seconds=n,this.nanoseconds=r,r<0)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(n<-62135596800)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n)}return t(u)(e,[{key:"toDate",value:function(){return new Date(this.toMillis())}},{key:"toMillis",value:function(){return 1e3*this.seconds+this.nanoseconds/1e6}},{key:"_compareTo",value:function(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}},{key:"isEqual",value:function(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}},{key:"toString",value:function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}},{key:"toJSON",value:function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}},{key:"valueOf",value:function(){var e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}],[{key:"now",value:function(){return e.fromMillis(Date.now())}},{key:"fromDate",value:function(t){return e.fromMillis(t.getTime())}},{key:"fromMillis",value:function(t){var n=Math.floor(t/1e3);return new e(n,Math.floor(1e6*(t-1e3*n)))}}]),e}(),J=function(){"use strict";function e(n){t(o)(this,e),this.timestamp=n}return t(u)(e,[{key:"compareTo",value:function(e){return this.timestamp._compareTo(e.timestamp)}},{key:"isEqual",value:function(e){return this.timestamp.isEqual(e.timestamp)}},{key:"toMicroseconds",value:function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}},{key:"toString",value:function(){return"SnapshotVersion("+this.timestamp.toString()+")"}},{key:"toTimestamp",value:function(){return this.timestamp}}],[{key:"fromTimestamp",value:function(t){return new e(t)}},{key:"min",value:function(){return new e(new Y(0,0))}},{key:"max",value:function(){return new e(new Y(253402300799,999999999))}}]),e}(),$=function(){"use strict";function e(n,r,i){t(o)(this,e),void 0===r?r=0:r>n.length&&O(),void 0===i?i=n.length-r:i>n.length-r&&O(),this.segments=n,this.offset=r,this.len=i}return t(u)(e,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(t){return 0===e.comparator(this,t)}},{key:"child",value:function(t){var n=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach((function(e){n.push(e)})):n.push(t),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(e){return this.segments[this.offset+e]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(e){if(e.length<this.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"isImmediateParentOf",value:function(e){if(this.length+1!==e.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"forEach",value:function(e){for(var t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=e.get(r),a=t.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}]),e}(),Z=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var a=[],o=!0,s=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h,f=c.value;if(f.indexOf("//")>=0)throw new M(P.INVALID_ARGUMENT,"Invalid segment (".concat(f,"). Paths must not contain // in them."));(h=a).push.apply(h,t(p)(f.split("/").filter((function(e){return e.length>0}))))}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}($),ee=/^[_a-zA-Z][_a-zA-Z0-9]*$/,te=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().map((function(e){return e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e})).join(".")}},{key:"toString",value:function(){return this.canonicalString()}},{key:"isKeyField",value:function(){return 1===this.length&&"__name__"===this.get(0)}}],[{key:"isValidIdentifier",value:function(e){return ee.test(e)}},{key:"keyField",value:function(){return new r(["__name__"])}},{key:"fromServerFormat",value:function(e){for(var t=[],n="",i=0,a=function(){if(0===n.length)throw new M(P.INVALID_ARGUMENT,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},o=!1;i<e.length;){var s=e[i];if("\\"===s){if(i+1===e.length)throw new M(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);var u=e[i+1];if("\\"!==u&&"."!==u&&"`"!==u)throw new M(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else"`"===s?(o=!o,i++):"."!==s||o?(n+=s,i++):(a(),i++)}if(a(),o)throw new M(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new r(t)}},{key:"emptyPath",value:function(){return new r([])}}]),r}($),ne=function(){"use strict";function e(n){t(o)(this,e),this.path=n}return t(u)(e,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(e){return null!==e&&0===Z.comparator(this.path,e.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(t){return new e(Z.fromString(t))}},{key:"fromName",value:function(t){return new e(Z.fromString(t).popFirst(5))}},{key:"empty",value:function(){return new e(Z.emptyPath())}},{key:"comparator",value:function(e,t){return Z.comparator(e.path,t.path)}},{key:"isDocumentKey",value:function(e){return e.length%2==0}},{key:"fromSegments",value:function(t){return new e(new Z(t.slice()))}}]),e}(),re=function e(n,r,i,a){"use strict";t(o)(this,e),this.indexId=n,this.collectionGroup=r,this.fields=i,this.indexState=a};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */re.UNKNOWN_ID=-1;function ie(e,t){var n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=J.fromTimestamp(1e9===r?new Y(n+1,0):new Y(n,r));return new oe(i,ne.empty(),t)}function ae(e){return new oe(e.readTime,e.key,-1)}var oe=function(){"use strict";function e(n,r,i){t(o)(this,e),this.readTime=n,this.documentKey=r,this.largestBatchId=i}return t(u)(e,null,[{key:"min",value:function(){return new e(J.min(),ne.empty(),-1)}},{key:"max",value:function(){return new e(J.max(),ne.empty(),-1)}}]),e}();function se(e,t){var n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=ne.comparator(e.documentKey,t.documentKey))?n:Q(e.largestBatchId,t.largestBatchId)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",ce=function(){"use strict";function e(){t(o)(this,e),this.onCommittedListeners=[]}return t(u)(e,[{key:"addOnCommittedListener",value:function(e){this.onCommittedListeners.push(e)}},{key:"raiseOnCommittedEvent",value:function(){this.onCommittedListeners.forEach((function(e){return e()}))}}]),e}();function le(e){return he.apply(this,arguments)}function he(){return(he=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(i)(t(m).mark((function e(n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.code===P.FAILED_PRECONDITION&&n.message===ue){e.next=2;break}throw n;case 2:A("LocalStore","Unexpectedly lost primary lease");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe=function(){"use strict";function e(n){var r=this;t(o)(this,e),this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,n((function(e){r.isDone=!0,r.result=e,r.nextCallback&&r.nextCallback(e)}),(function(e){r.isDone=!0,r.error=e,r.catchCallback&&r.catchCallback(e)}))}return t(u)(e,[{key:"catch",value:function(e){return this.next(void 0,e)}},{key:"next",value:function(t,n){var r=this;return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new e((function(e,i){var a=r;r.nextCallback=function(n){a.wrapSuccess(t,n).next(e,i)},r.catchCallback=function(t){a.wrapFailure(n,t).next(e,i)}}))}},{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.next(t,n)}))}},{key:"wrapUserFunction",value:function(t){try{var n=t();return n instanceof e?n:e.resolve(n)}catch(t){return e.reject(t)}}},{key:"wrapSuccess",value:function(t,n){return t?this.wrapUserFunction((function(){return t(n)})):e.resolve(n)}},{key:"wrapFailure",value:function(t,n){return t?this.wrapUserFunction((function(){return t(n)})):e.reject(n)}}],[{key:"resolve",value:function(t){return new e((function(e,n){e(t)}))}},{key:"reject",value:function(t){return new e((function(e,n){n(t)}))}},{key:"waitFor",value:function(t){return new e((function(e,n){var r=0,i=0,a=!1;t.forEach((function(t){++r,t.next((function(){++i,a&&i===r&&e()}),(function(e){return n(e)}))})),a=!0,i===r&&e()}))}},{key:"or",value:function(t){var n=e.resolve(!1),r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=r.value;n=n.next((function(t){return t?e.resolve(t):i()}))},u=t[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n}},{key:"forEach",value:function(e,t){var n=this,r=[];return e.forEach((function(e,i){r.push(t.call(n,e,i))})),this.waitFor(r)}},{key:"mapArray",value:function(t,n){return new e((function(e,r){for(var i=function(i){var u=i;n(t[u]).next((function(t){o[u]=t,++s===a&&e(o)}),(function(e){return r(e)}))},a=t.length,o=new Array(a),s=0,u=0;u<a;u++)i(u)}))}},{key:"doWhile",value:function(t,n){return new e((function(e,r){var i=function(){!0===t()?n().next((function(){i()}),r):e()};i()}))}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){return"IndexedDbTransactionError"===e.name}var pe=function(){"use strict";function e(n,r){var i=this;t(o)(this,e),this.previousValue=n,r&&(r.sequenceNumberHandler=function(e){return i.ot(e)},this.ut=function(e){return r.writeSequenceNumber(e)})}return t(u)(e,[{key:"ot",value:function(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}},{key:"next",value:function(){var e=++this.previousValue;return this.ut&&this.ut(e),e}}]),e}();function ve(e){return null==e}function ye(e){return 0===e&&1/e==-1/0}function me(e){return"number"==typeof e&&Number.isInteger(e)&&!ye(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe.ct=-1;var ge=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ke=(t(p)(ge).concat(["documentOverlays"]),["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"]),we=ke;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */t(p)(we).concat(["indexConfiguration","indexState","indexEntries"]);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function be(e){var t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function xe(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ie(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee=function(){"use strict";function e(n,r){t(o)(this,e),this.comparator=n,this.root=r||Te.EMPTY}return t(u)(e,[{key:"insert",value:function(t,n){return new e(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Te.BLACK,null,null))}},{key:"remove",value:function(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Te.BLACK,null,null))}},{key:"get",value:function(e){for(var t=this.root;!t.isEmpty();){var n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}},{key:"indexOf",value:function(e){for(var t=0,n=this.root;!n.isEmpty();){var r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root.inorderTraversal(e)}},{key:"forEach",value:function(e){this.inorderTraversal((function(t,n){return e(t,n),!1}))}},{key:"toString",value:function(){var e=[];return this.inorderTraversal((function(t,n){return e.push("".concat(t,":").concat(n)),!1})),"{".concat(e.join(", "),"}")}},{key:"reverseTraversal",value:function(e){return this.root.reverseTraversal(e)}},{key:"getIterator",value:function(){return new _e(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(e){return new _e(this.root,e,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new _e(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(e){return new _e(this.root,e,this.comparator,!0)}}]),e}(),_e=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.isReverse=a,this.nodeStack=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,r&&a&&(s*=-1),s<0)n=this.isReverse?n.left:n.right;else{if(0===s){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return t(u)(e,[{key:"getNext",value:function(){var e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}]),e}(),Te=function(){"use strict";function e(n,r,i,a,s){t(o)(this,e),this.key=n,this.value=r,this.color=null!=i?i:e.RED,this.left=null!=a?a:e.EMPTY,this.right=null!=s?s:e.EMPTY,this.size=this.left.size+1+this.right.size}return t(u)(e,[{key:"copy",value:function(t,n,r,i,a){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return e.EMPTY;var t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(t,n){var r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(t,i.key)){if(i.right.isEmpty())return e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight",value:function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw O();if(this.right.isRed())throw O();var e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}]),e}();Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1,Te.EMPTY=new(function(){"use strict";function e(){t(o)(this,e),this.size=0}return t(u)(e,[{key:"key",get:function(){throw O()}},{key:"value",get:function(){throw O()}},{key:"color",get:function(){throw O()}},{key:"left",get:function(){throw O()}},{key:"right",get:function(){throw O()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Te(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),e}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Se=function(){"use strict";function e(n){t(o)(this,e),this.comparator=n,this.data=new Ee(this.comparator)}return t(u)(e,[{key:"has",value:function(e){return null!==this.data.get(e)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(e){return this.data.indexOf(e)}},{key:"forEach",value:function(e){this.data.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"forEachInRange",value:function(e,t){for(var n=this.data.getIteratorFrom(e[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}},{key:"forEachWhile",value:function(e,t){var n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(e){var t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}},{key:"getIterator",value:function(){return new Ae(this.data.getIterator())}},{key:"getIteratorFrom",value:function(e){return new Ae(this.data.getIteratorFrom(e))}},{key:"add",value:function(e){return this.copy(this.data.remove(e).insert(e,!0))}},{key:"delete",value:function(e){return this.has(e)?this.copy(this.data.remove(e)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(e){var t=this;return t.size<e.size&&(t=e,e=this),e.forEach((function(e){t=t.add(e)})),t}},{key:"isEqual",value:function(t){if(!(t instanceof e))return!1;if(this.size!==t.size)return!1;for(var n=this.data.getIterator(),r=t.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var e=[];return this.forEach((function(t){e.push(t)})),e}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){return e.push(t)})),"SortedSet("+e.toString()+")"}},{key:"copy",value:function(t){var n=new e(this.comparator);return n.data=t,n}}]),e}(),Ae=function(){"use strict";function e(n){t(o)(this,e),this.iter=n}return t(u)(e,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ce=function(){"use strict";function e(n){t(o)(this,e),this.fields=n,n.sort(te.comparator)}return t(u)(e,[{key:"unionWith",value:function(t){var n=new Se(te.comparator),r=!0,i=!1,a=void 0;try{for(var o,s=this.fields[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n.add(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var c=!0,l=!1,h=void 0;try{for(var f,d=t[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var p=f.value;n=n.add(p)}}catch(e){l=!0,h=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw h}}return new e(n.toArray())}},{key:"covers",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.fields[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.isPrefixOf(e))return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"isEqual",value:function(e){return X(this.fields,e.fields,(function(e,t){return e.isEqual(t)}))}}],[{key:"empty",value:function(){return new e([])}}]),e}(),De=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(){var e;return t(o)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="Base64DecodeError",t(f)(e)}return r}(t(v)(Error));
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne=Symbol.iterator,Oe=function(){"use strict";function e(n){t(o)(this,e),this.binaryString=n}return t(u)(e,[{key:Ne,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return Q(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(t){return new e(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new De("Invalid base64 string: "+e):e}}(t))}},{key:"fromUint8Array",value:function(t){return new e(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(t))}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe.EMPTY_BYTE_STRING=new Oe("");var Re=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Le(e){if(R(!!e),"string"==typeof e){var t=0,n=Re.exec(e);if(R(!!n),n[1]){var r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}var i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Pe(e.seconds),nanos:Pe(e.nanos)}}function Pe(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Me(e){return"string"==typeof e?Oe.fromBase64String(e):Oe.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Fe(e){var t=e.mapValue.fields.__previous_value__;return Ue(t)?Fe(t):t}function Ve(e){var t=Le(e.mapValue.fields.__local_write_time__.timestampValue);return new Y(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je=function e(n,r,i,a,s,u,c,l){"use strict";t(o)(this,e),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=s,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.useFetchStreams=l},Be=function(){"use strict";function e(n,r){t(o)(this,e),this.projectId=n,this.database=r||"(default)"}return t(u)(e,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}}],[{key:"empty",value:function(){return new e("","")}}]),e}(),qe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ze(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ue(e)?4:nt(e)?9007199254740991:10:O()}function Ke(e,t){if(e===t)return!0;var n,r=ze(e);if(r!==ze(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ve(e).isEqual(Ve(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;var n=Le(e.timestampValue),r=Le(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return n=t,Me(e.bytesValue).isEqual(Me(n.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Pe(e.geoPointValue.latitude)===Pe(t.geoPointValue.latitude)&&Pe(e.geoPointValue.longitude)===Pe(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Pe(e.integerValue)===Pe(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){var n=Pe(e.doubleValue),r=Pe(t.doubleValue);return n===r?ye(n)===ye(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return X(e.arrayValue.values||[],t.arrayValue.values||[],Ke);case 10:return function(e,t){var n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(be(n)!==be(r))return!1;for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Ke(n[i],r[i])))return!1;return!0}(e,t);default:return O()}}function He(e,t){return void 0!==(e.values||[]).find((function(e){return Ke(e,t)}))}function Ge(e,t){if(e===t)return 0;var n,r,i,a,o=ze(e),s=ze(t);if(o!==s)return Q(o,s);switch(o){case 0:case 9007199254740991:return 0;case 1:return Q(e.booleanValue,t.booleanValue);case 2:return r=t,i=Pe((n=e).integerValue||n.doubleValue),a=Pe(r.integerValue||r.doubleValue),i<a?-1:i>a?1:i===a?0:isNaN(i)?isNaN(a)?0:-1:1;case 3:return We(e.timestampValue,t.timestampValue);case 4:return We(Ve(e),Ve(t));case 5:return Q(e.stringValue,t.stringValue);case 6:return function(e,t){var n=Me(e),r=Me(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){for(var n=e.split("/"),r=t.split("/"),i=0;i<n.length&&i<r.length;i++){var a=Q(n[i],r[i]);if(0!==a)return a}return Q(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){var n=Q(Pe(e.latitude),Pe(t.latitude));return 0!==n?n:Q(Pe(e.longitude),Pe(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){for(var n=e.values||[],r=t.values||[],i=0;i<n.length&&i<r.length;++i){var a=Ge(n[i],r[i]);if(a)return a}return Q(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===qe.mapValue&&t===qe.mapValue)return 0;if(e===qe.mapValue)return 1;if(t===qe.mapValue)return-1;var n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(var o=0;o<r.length&&o<a.length;++o){var s=Q(r[o],a[o]);if(0!==s)return s;var u=Ge(n[r[o]],i[a[o]]);if(0!==u)return u}return Q(r.length,a.length)}(e.mapValue,t.mapValue);default:throw O()}}function We(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Q(e,t);var n=Le(e),r=Le(t),i=Q(n.seconds,r.seconds);return 0!==i?i:Q(n.nanos,r.nanos)}function Qe(e){return Xe(e)}function Xe(e){var t,n,r,i;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(r=e.timestampValue,i=Le(r),"time(".concat(i.seconds,",").concat(i.nanos,")")):"stringValue"in e?e.stringValue:"bytesValue"in e?Me(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ne.fromName(n).toString()):"geoPointValue"in e?"geo(".concat((t=e.geoPointValue).latitude,",").concat(t.longitude,")"):"arrayValue"in e?function(e){var t="[",n=!0,r=!0,i=!1,a=void 0;try{for(var o,s=(e.values||[])[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n?n=!1:t+=",",t+=Xe(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t+"]"}(e.arrayValue):"mapValue"in e?function(e){var t=Object.keys(e.fields||{}).sort(),n="{",r=!0,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r?r=!1:n+=",",n+="".concat(c,":").concat(Xe(e.fields[c]))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return n+"}"}(e.mapValue):O()}function Ye(e){return!!e&&"integerValue"in e}function Je(e){return!!e&&"arrayValue"in e}function $e(e){return!!e&&"nullValue"in e}function Ze(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function et(e){return!!e&&"mapValue"in e}function tt(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){var t={mapValue:{fields:{}}};return xe(e.mapValue.fields,(function(e,n){return t.mapValue.fields[e]=tt(n)})),t}if(e.arrayValue){for(var n={arrayValue:{values:[]}},r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=tt(e.arrayValue.values[r]);return n}return Object.assign({},e)}function nt(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var rt=function(){"use strict";function e(n){t(o)(this,e),this.value=n}return t(u)(e,[{key:"field",value:function(e){if(e.isEmpty())return this.value;for(var t=this.value,n=0;n<e.length-1;++n)if(!et(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}},{key:"set",value:function(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tt(t)}},{key:"setAll",value:function(e){var t=this,n=te.emptyPath(),r={},i=[];e.forEach((function(e,a){if(!n.isImmediateParentOf(a)){var o=t.getFieldsMap(n);t.applyChanges(o,r,i),r={},i=[],n=a.popLast()}e?r[a.lastSegment()]=tt(e):i.push(a.lastSegment())}));var a=this.getFieldsMap(n);this.applyChanges(a,r,i)}},{key:"delete",value:function(e){var t=this.field(e.popLast());et(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}},{key:"isEqual",value:function(e){return Ke(this.value,e.value)}},{key:"getFieldsMap",value:function(e){var t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(var n=0;n<e.length;++n){var r=t.mapValue.fields[e.get(n)];et(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}},{key:"applyChanges",value:function(e,t,n){xe(t,(function(t,n){return e[t]=n}));var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;delete e[u]}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"clone",value:function(){return new e(tt(this.value))}}],[{key:"empty",value:function(){return new e({mapValue:{}})}}]),e}();function it(e){var t=[];return xe(e.fields,(function(e,n){var r=new te([e]);if(et(n)){var i=it(n.mapValue).fields,a=!0,o=!1,s=void 0;if(0===i.length)t.push(r);else try{for(var u,c=i[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.push(r.child(l))}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}}else t.push(r)})),new Ce(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var at=function(){"use strict";function e(n,r,i,a,s,u,c){t(o)(this,e),this.key=n,this.documentType=r,this.version=i,this.readTime=a,this.createTime=s,this.data=u,this.documentState=c}return t(u)(e,[{key:"convertToFoundDocument",value:function(e,t){return!this.createTime.isEqual(J.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}},{key:"convertToNoDocument",value:function(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}},{key:"convertToUnknownDocument",value:function(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}},{key:"setHasCommittedMutations",value:function(){return this.documentState=2,this}},{key:"setHasLocalMutations",value:function(){return this.documentState=1,this.version=J.min(),this}},{key:"setReadTime",value:function(e){return this.readTime=e,this}},{key:"hasLocalMutations",get:function(){return 1===this.documentState}},{key:"hasCommittedMutations",get:function(){return 2===this.documentState}},{key:"hasPendingWrites",get:function(){return this.hasLocalMutations||this.hasCommittedMutations}},{key:"isValidDocument",value:function(){return 0!==this.documentType}},{key:"isFoundDocument",value:function(){return 1===this.documentType}},{key:"isNoDocument",value:function(){return 2===this.documentType}},{key:"isUnknownDocument",value:function(){return 3===this.documentType}},{key:"isEqual",value:function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}},{key:"mutableCopy",value:function(){return new e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}},{key:"toString",value:function(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}],[{key:"newInvalidDocument",value:function(t){return new e(t,0,J.min(),J.min(),J.min(),rt.empty(),0)}},{key:"newFoundDocument",value:function(t,n,r,i){return new e(t,1,n,J.min(),r,i,0)}},{key:"newNoDocument",value:function(t,n){return new e(t,2,n,J.min(),J.min(),rt.empty(),0)}},{key:"newUnknownDocument",value:function(t,n){return new e(t,3,n,J.min(),J.min(),rt.empty(),2)}}]),e}(),ot=function e(n,r){"use strict";t(o)(this,e),this.position=n,this.inclusive=r};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(e,t,n){for(var r=0,i=0;i<e.position.length;i++){var a=t[i],o=e.position[i];if(r=a.field.isKeyField()?ne.comparator(ne.fromName(o.referenceValue),n.key):Ge(o,n.data.field(a.field)),"desc"===a.dir&&(r*=-1),0!==r)break}return r}function ut(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(var n=0;n<e.position.length;n++)if(!Ke(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct=function e(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";t(o)(this,e),this.field=n,this.dir=r};function lt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht=function e(){"use strict";t(o)(this,e)},ft=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a){var s;return t(o)(this,r),(s=n.call(this)).field=e,s.op=i,s.value=a,t(f)(s)}return t(u)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ge(t,this.value)):null!==t&&ze(this.value)===ze(t)&&this.matchesComparison(Ge(t,this.value))}},{key:"matchesComparison",value:function(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return O()}}},{key:"isInequality",value:function(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}},{key:"getFlattenedFilters",value:function(){return[this]}},{key:"getFilters",value:function(){return[this]}},{key:"getFirstInequalityField",value:function(){return this.isInequality()?this.field:null}}],[{key:"create",value:function(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new wt(e,t,n):"array-contains"===t?new Et(e,n):"in"===t?new _t(e,n):"not-in"===t?new Tt(e,n):"array-contains-any"===t?new St(e,n):new r(e,t,n)}},{key:"createKeyFieldInFilter",value:function(e,t,n){return"in"===t?new bt(e,n):new xt(e,n)}}]),r}(ht),dt=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).filters=e,a.op=i,a.ht=null,t(f)(a)}return t(u)(r,[{key:"matches",value:function(e){return pt(this)?void 0===this.filters.find((function(t){return!t.matches(e)})):void 0!==this.filters.find((function(t){return t.matches(e)}))}},{key:"getFlattenedFilters",value:function(){return null!==this.ht||(this.ht=this.filters.reduce((function(e,t){return e.concat(t.getFlattenedFilters())}),[])),this.ht}},{key:"getFilters",value:function(){return Object.assign([],this.filters)}},{key:"getFirstInequalityField",value:function(){var e=this.lt((function(e){return e.isInequality()}));return null!==e?e.field:null}},{key:"lt",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.getFlattenedFilters()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(e(o))return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}}],[{key:"create",value:function(e,t){return new r(e,t)}}]),r}(ht);function pt(e){return"and"===e.op}function vt(e){return yt(e)&&pt(e)}function yt(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value instanceof dt)return!1}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!0}function mt(e){if(e instanceof ft)return e.field.canonicalString()+e.op.toString()+Qe(e.value);if(vt(e))return e.filters.map((function(e){return mt(e)})).join(",");var t=e.filters.map((function(e){return mt(e)})).join(",");return"".concat(e.op,"(").concat(t,")")}function gt(e,t){return e instanceof ft?(n=e,(r=t)instanceof ft&&n.op===r.op&&n.field.isEqual(r.field)&&Ke(n.value,r.value)):e instanceof dt?function(e,t){return t instanceof dt&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((function(e,n,r){return e&&gt(n,t.filters[r])}),!0)}(e,t):void O();var n,r}function kt(e){return e instanceof ft?"".concat((t=e).field.canonicalString()," ").concat(t.op," ").concat(Qe(t.value)):e instanceof dt?function(e){return e.op.toString()+" {"+e.getFilters().map(kt).join(" ,")+"}"}(e):"Filter";var t}var wt=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a){var s;return t(o)(this,r),(s=n.call(this,e,i,a)).key=ne.fromName(a.referenceValue),t(f)(s)}return t(u)(r,[{key:"matches",value:function(e){var t=ne.comparator(e.key,this.key);return this.matchesComparison(t)}}]),r}(ft),bt=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this,e,"in",i)).keys=It("in",i),t(f)(a)}return t(u)(r,[{key:"matches",value:function(e){return this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(ft),xt=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this,e,"not-in",i)).keys=It("not-in",i),t(f)(a)}return t(u)(r,[{key:"matches",value:function(e){return!this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(ft);function It(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((function(e){return ne.fromName(e.referenceValue)}))}var Et=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){return t(o)(this,r),n.call(this,e,"array-contains",i)}return t(u)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return Je(t)&&He(t.arrayValue,this.value)}}]),r}(ft),_t=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){return t(o)(this,r),n.call(this,e,"in",i)}return t(u)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return null!==t&&He(this.value.arrayValue,t)}}]),r}(ft),Tt=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){return t(o)(this,r),n.call(this,e,"not-in",i)}return t(u)(r,[{key:"matches",value:function(e){if(He(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;var t=e.data.field(this.field);return null!==t&&!He(this.value.arrayValue,t)}}]),r}(ft),St=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){return t(o)(this,r),n.call(this,e,"array-contains-any",i)}return t(u)(r,[{key:"matches",value:function(e){var t=this,n=e.data.field(this.field);return!(!Je(n)||!n.arrayValue.values)&&n.arrayValue.values.some((function(e){return He(t.value.arrayValue,e)}))}}]),r}(ft),At=function e(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;t(o)(this,e),this.path=n,this.collectionGroup=r,this.orderBy=i,this.filters=a,this.limit=s,this.startAt=u,this.endAt=c,this.ft=null};function Ct(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new At(e,t,n,r,i,a,o)}function Dt(e){var t=L(e);if(null===t.ft){var n=t.path.canonicalString();null!==t.collectionGroup&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((function(e){return mt(e)})).join(","),n+="|ob:",n+=t.orderBy.map((function(e){return(t=e).field.canonicalString()+t.dir;var t})).join(","),ve(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Qe(e)})).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Qe(e)})).join(",")),t.ft=n}return t.ft}function Nt(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(var n=0;n<e.orderBy.length;n++)if(!lt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(var r=0;r<e.filters.length;r++)if(!gt(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ut(e.startAt,t.startAt)&&ut(e.endAt,t.endAt)}function Ot(e){return ne.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rt=function e(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;t(o)(this,e),this.path=n,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=a,this.limit=s,this.limitType=u,this.startAt=c,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt};function Lt(e,t,n,r,i,a,o,s){return new Rt(e,t,n,r,i,a,o,s)}function Pt(e){return new Rt(e)}function Mt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ut(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ft(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value.getFirstInequalityField();if(null!==o)return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}function Vt(e){return null!==e.collectionGroup}function jt(e){var t=L(e);if(null===t.dt){t.dt=[];var n=Ft(t),r=Ut(t);if(null!==n&&null===r)n.isKeyField()||t.dt.push(new ct(n)),t.dt.push(new ct(te.keyField(),"asc"));else{var i=!1,a=!0,o=!1,s=void 0;try{for(var u,c=t.explicitOrderBy[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.dt.push(l),l.field.isKeyField()&&(i=!0)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}if(!i){var h=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new ct(te.keyField(),h))}}}return t.dt}function Bt(e){var t=L(e);if(!t.wt)if("F"===t.limitType)t.wt=Ct(t.path,t.collectionGroup,jt(t),t.filters,t.limit,t.startAt,t.endAt);else{var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=jt(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c="desc"===u.dir?"asc":"desc";n.push(new ct(u.field,c))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var l=t.endAt?new ot(t.endAt.position,t.endAt.inclusive):null,h=t.startAt?new ot(t.startAt.position,t.startAt.inclusive):null;t.wt=Ct(t.path,t.collectionGroup,n,t.filters,t.limit,l,h)}return t.wt}function qt(e,t,n){return new Rt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function zt(e,t){return Nt(Bt(e),Bt(t))&&e.limitType===t.limitType}function Kt(e){return"".concat(Dt(Bt(e)),"|lt:").concat(e.limitType)}function Ht(e){return"Query(target=".concat((t=Bt(e),n=t.path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=", filters: [".concat(t.filters.map((function(e){return kt(e)})).join(", "),"]")),ve(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=", orderBy: [".concat(t.orderBy.map((function(e){return"".concat((t=e).field.canonicalString()," (").concat(t.dir,")");var t})).join(", "),"]")),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Qe(e)})).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Qe(e)})).join(",")),"Target(".concat(n,")")),"; limitType=").concat(e.limitType,")");var t,n}function Gt(e,t){return t.isFoundDocument()&&(i=e,o=(a=t).key.path,null!==i.collectionGroup?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):ne.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o))&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=jt(e)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(!s.field.isKeyField()&&null===t.data.field(s.field))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=e.filters[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){if(!a.value.matches(t))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){var r=st(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,jt(n),r)||n.endAt&&!function(e,t,n){var r=st(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,jt(n),r)));var n,r,i,a,o}function Wt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Qt(e){return function(t,n){var r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=jt(e)[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=Xt(c,t,n);if(0!==l)return l;r=r||c.field.isKeyField()}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return 0}}function Xt(e,t,n){var r,i,a,o,s=e.field.isKeyField()?ne.comparator(t.key,n.key):(r=e.field,i=n,a=t.data.field(r),o=i.data.field(r),null!==a&&null!==o?Ge(a,o):O());switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return O()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt=function(){"use strict";function e(n,r){t(o)(this,e),this.mapKeyFn=n,this.equalsFn=r,this.inner={},this.innerSize=0}return t(u)(e,[{key:"get",value:function(e){var n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=t(d)(s.value,2),l=c[0],h=c[1];if(this.equalsFn(l,e))return h}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}}},{key:"has",value:function(e){return void 0!==this.get(e)}},{key:"set",value:function(e,t){var n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(var i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}},{key:"delete",value:function(e){var t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(var r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}},{key:"forEach",value:function(e){xe(this.inner,(function(n,r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=t(d)(s.value,2),l=c[0],h=c[1];e(l,h)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}))}},{key:"isEmpty",value:function(){return Ie(this.inner)}},{key:"size",value:function(){return this.innerSize}}]),e}(),Jt=new Ee(ne.comparator);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return Jt}var Zt=new Ee(ne.comparator);function en(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Zt,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.insert(c.key,c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}function tn(e){var t=Zt;return e.forEach((function(e,n){return t=t.insert(e,n.overlayedDocument)})),t}function nn(){return an()}function rn(){return an()}function an(){return new Yt((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)}))}var on=new Ee(ne.comparator),sn=new Se(ne.comparator);function un(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=sn,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.add(c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var cn=new Se(Q);function ln(){return cn}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ye(t)?"-0":t}}function fn(e){return{integerValue:""+e}}function dn(e,t){return me(t)?fn(t):hn(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pn=function e(){"use strict";t(o)(this,e),this._=void 0};function vn(e,t,n){return e instanceof gn?(i=t,a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:(r=n).seconds,nanos:r.nanoseconds}}}},i&&(a.fields.__previous_value__=i),{mapValue:a}):e instanceof kn?wn(e,t):e instanceof bn?xn(e,t):function(e,t){var n=mn(e,t),r=En(n)+En(e._t);return Ye(n)&&Ye(e._t)?fn(r):hn(e.serializer,r)}(e,t);var r,i,a}function yn(e,t,n){return e instanceof kn?wn(e,t):e instanceof bn?xn(e,t):n}function mn(e,t){var n,r;return e instanceof In?Ye(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}var gn=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return r}(pn),kn=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).elements=e,t(f)(i)}return r}(pn);function wn(e,t){var n=_n(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n.some((function(e){return Ke(e,r)}))||n.push(r)},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var bn=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).elements=e,t(f)(i)}return r}(pn);function xn(e,t){var n=_n(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n=n.filter((function(e){return!Ke(e,r)}))},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var In=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).serializer=e,a._t=i,t(f)(a)}return r}(pn);function En(e){return Pe(e.integerValue||e.doubleValue)}function _n(e){return Je(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn=function e(n,r){"use strict";t(o)(this,e),this.field=n,this.transform=r};var Sn=function e(n,r){"use strict";t(o)(this,e),this.version=n,this.transformResults=r},An=function(){"use strict";function e(n,r){t(o)(this,e),this.updateTime=n,this.exists=r}return t(u)(e,[{key:"isNone",get:function(){return void 0===this.updateTime&&void 0===this.exists}},{key:"isEqual",value:function(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}],[{key:"none",value:function(){return new e}},{key:"exists",value:function(t){return new e(void 0,t)}},{key:"updateTime",value:function(t){return new e(t)}}]),e}();function Cn(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}var Dn=function e(){"use strict";t(o)(this,e)};function Nn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new zn(e.key,An.none()):new Mn(e.key,e.data,An.none());var n=e.data,r=rt.empty(),i=new Se(te.comparator),a=!0,o=!1,s=void 0;try{for(var u,c=t.fields[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;if(!i.has(l)){var h=n.field(l);null===h&&l.length>1&&(l=l.popLast(),h=n.field(l)),null===h?r.delete(l):r.set(l,h),i=i.add(l)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new Un(e.key,r,new Ce(i.toArray()),An.none())}function On(e,t,n){var r,i,a,o,s;e instanceof Mn?(i=t,a=n,o=(r=e).value.clone(),s=Vn(r.fieldTransforms,i,a.transformResults),o.setAll(s),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()):e instanceof Un?function(e,t,n){if(Cn(e.precondition,t)){var r=Vn(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Fn(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}else t.convertToUnknownDocument(n.version)}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Rn(e,t,n,r){return e instanceof Mn?function(e,t,n,r){if(!Cn(e.precondition,t))return n;var i=e.value.clone(),a=jn(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Un?function(e,t,n,r){if(!Cn(e.precondition,t))return n;var i=jn(e.fieldTransforms,r,t),a=t.data;return a.setAll(Fn(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((function(e){return e.field})))}(e,t,n,r):(i=t,a=n,Cn(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a);var i,a}function Ln(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.fieldTransforms[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c=t.data.field(u.field),l=mn(u.transform,c||null);null!=l&&(null===n&&(n=rt.empty()),n.set(u.field,l))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n||null}function Pn(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&X(n,r,(function(e,t){return function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof kn&&r instanceof kn||n instanceof bn&&r instanceof bn?X(n.elements,r.elements,Ke):n instanceof In&&r instanceof In?Ke(n._t,r._t):n instanceof gn&&r instanceof gn);var n,r}(e,t)}))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}var Mn=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a){var s,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return t(o)(this,r),(s=n.call(this)).key=e,s.value=i,s.precondition=a,s.fieldTransforms=u,s.type=0,t(f)(s)}return t(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Dn),Un=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a,s){var u,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return t(o)(this,r),(u=n.call(this)).key=e,u.data=i,u.fieldMask=a,u.precondition=s,u.fieldTransforms=c,u.type=1,t(f)(u)}return t(u)(r,[{key:"getFieldMask",value:function(){return this.fieldMask}}]),r}(Dn);function Fn(e){var t=new Map;return e.fieldMask.fields.forEach((function(n){if(!n.isEmpty()){var r=e.data.field(n);t.set(n,r)}})),t}function Vn(e,t,n){var r=new Map;R(e.length===n.length);for(var i=0;i<n.length;i++){var a=e[i],o=a.transform,s=t.data.field(a.field);r.set(a.field,yn(o,s,n[i]))}return r}function jn(e,t,n){var r=new Map,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.transform,h=n.data.field(c.field);r.set(c.field,vn(l,h,t))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var Bn,qn,zn=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).key=e,a.precondition=i,a.type=2,a.fieldTransforms=[],t(f)(a)}return t(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Dn),Kn=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).key=e,a.precondition=i,a.type=3,a.fieldTransforms=[],t(f)(a)}return t(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Dn),Hn=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.batchId=n,this.localWriteTime=r,this.baseMutations=i,this.mutations=a}return t(u)(e,[{key:"applyToRemoteDocument",value:function(e,t){for(var n=t.mutationResults,r=0;r<this.mutations.length;r++){var i=this.mutations[r];i.key.isEqual(e.key)&&On(i,e,n[r])}}},{key:"applyToLocalView",value:function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=this.baseMutations[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.key.isEqual(e.key)&&(t=Rn(s,e,t,this.localWriteTime))}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}var u=!0,c=!1,l=void 0;try{for(var h,f=this.mutations[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=h.value;d.key.isEqual(e.key)&&(t=Rn(d,e,t,this.localWriteTime))}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}return t}},{key:"applyToLocalDocumentSet",value:function(e,t){var n=this,r=rn();return this.mutations.forEach((function(i){var a=e.get(i.key),o=a.overlayedDocument,s=n.applyToLocalView(o,a.mutatedFields),u=Nn(o,s=t.has(i.key)?null:s);null!==u&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())})),r}},{key:"keys",value:function(){return this.mutations.reduce((function(e,t){return e.add(t.key)}),un())}},{key:"isEqual",value:function(e){return this.batchId===e.batchId&&X(this.mutations,e.mutations,(function(e,t){return Pn(e,t)}))&&X(this.baseMutations,e.baseMutations,(function(e,t){return Pn(e,t)}))}}]),e}(),Gn=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.batch=n,this.commitVersion=r,this.mutationResults=i,this.docVersions=a}return t(u)(e,null,[{key:"from",value:function(t,n,r){R(t.mutations.length===r.length);for(var i=on,a=t.mutations,o=0;o<a.length;o++)i=i.insert(a[o].key,r[o].version);return new e(t,n,r,i)}}]),e}(),Wn=function(){"use strict";function e(n,r){t(o)(this,e),this.largestBatchId=n,this.mutation=r}return t(u)(e,[{key:"getKey",value:function(){return this.mutation.key}},{key:"isEqual",value:function(e){return null!==e&&this.mutation===e.mutation}},{key:"toString",value:function(){return"Overlay{\n      largestBatchId: ".concat(this.largestBatchId,",\n      mutation: ").concat(this.mutation.toString(),"\n    }")}}]),e}(),Qn=function e(n){"use strict";t(o)(this,e),this.count=n};function Xn(e){switch(e){default:return O();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Yn(e){if(void 0===e)return C("GRPC error has no .code"),P.UNKNOWN;switch(e){case Bn.OK:return P.OK;case Bn.CANCELLED:return P.CANCELLED;case Bn.UNKNOWN:return P.UNKNOWN;case Bn.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Bn.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Bn.INTERNAL:return P.INTERNAL;case Bn.UNAVAILABLE:return P.UNAVAILABLE;case Bn.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Bn.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Bn.NOT_FOUND:return P.NOT_FOUND;case Bn.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Bn.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Bn.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Bn.ABORTED:return P.ABORTED;case Bn.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Bn.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Bn.DATA_LOSS:return P.DATA_LOSS;default:return O()}}(qn=Bn||(Bn={}))[qn.OK=0]="OK",qn[qn.CANCELLED=1]="CANCELLED",qn[qn.UNKNOWN=2]="UNKNOWN",qn[qn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qn[qn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qn[qn.NOT_FOUND=5]="NOT_FOUND",qn[qn.ALREADY_EXISTS=6]="ALREADY_EXISTS",qn[qn.PERMISSION_DENIED=7]="PERMISSION_DENIED",qn[qn.UNAUTHENTICATED=16]="UNAUTHENTICATED",qn[qn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qn[qn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qn[qn.ABORTED=10]="ABORTED",qn[qn.OUT_OF_RANGE=11]="OUT_OF_RANGE",qn[qn.UNIMPLEMENTED=12]="UNIMPLEMENTED",qn[qn.INTERNAL=13]="INTERNAL",qn[qn.UNAVAILABLE=14]="UNAVAILABLE",qn[qn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jn=function(){"use strict";function e(){t(o)(this,e),this.onExistenceFilterMismatchCallbacks=new Map}return t(u)(e,[{key:"onExistenceFilterMismatch",value:function(e){var t=this,n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),function(){return t.onExistenceFilterMismatchCallbacks.delete(n)}}},{key:"notifyOnExistenceFilterMismatch",value:function(e){this.onExistenceFilterMismatchCallbacks.forEach((function(t){return t(e)}))}}],[{key:"instance",get:function(){return $n}},{key:"getOrCreateInstance",value:function(){return null===$n&&($n=new e),$n}}]),e}(),$n=null,Zn=function(){"use strict";function e(n,r,i,a,s){t(o)(this,e),this.snapshotVersion=n,this.targetChanges=r,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=s}return t(u)(e,null,[{key:"createSynthesizedRemoteEventForCurrentChange",value:function(t,n,r){var i=new Map;return i.set(t,er.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new e(J.min(),i,ln(),$t(),un())}}]),e}(),er=function(){"use strict";function e(n,r,i,a,s){t(o)(this,e),this.resumeToken=n,this.current=r,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=s}return t(u)(e,null,[{key:"createSynthesizedTargetChangeForCurrentChange",value:function(t,n,r){return new e(r,n,un(),un(),un())}}]),e}(),tr=function e(n,r,i,a){"use strict";t(o)(this,e),this.It=n,this.removedTargetIds=r,this.key=i,this.Tt=a},nr=function e(n,r){"use strict";t(o)(this,e),this.targetId=n,this.Et=r},rr=function e(n,r){"use strict";var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Oe.EMPTY_BYTE_STRING,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;t(o)(this,e),this.state=n,this.targetIds=r,this.resumeToken=i,this.cause=a},ir=function(){"use strict";function e(){t(o)(this,e),this.At=0,this.Rt=sr(),this.vt=Oe.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}return t(u)(e,[{key:"current",get:function(){return this.bt}},{key:"resumeToken",get:function(){return this.vt}},{key:"Vt",get:function(){return 0!==this.At}},{key:"St",get:function(){return this.Pt}},{key:"Dt",value:function(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}},{key:"Ct",value:function(){var e=un(),t=un(),n=un();return this.Rt.forEach((function(r,i){switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:O()}})),new er(this.vt,this.bt,e,t,n)}},{key:"xt",value:function(){this.Pt=!1,this.Rt=sr()}},{key:"Nt",value:function(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}},{key:"kt",value:function(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}},{key:"Ot",value:function(){this.At+=1}},{key:"$t",value:function(){this.At-=1}},{key:"Mt",value:function(){this.Pt=!0,this.bt=!0}}]),e}(),ar=function(){"use strict";function e(n){t(o)(this,e),this.Ft=n,this.Bt=new Map,this.Lt=$t(),this.qt=or(),this.Ut=new Se(Q)}return t(u)(e,[{key:"Kt",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.It[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;e.Tt&&e.Tt.isFoundDocument()?this.Gt(o,e.Tt):this.Qt(o,e.key,e.Tt)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}var s=!0,u=!1,c=void 0;try{for(var l,h=e.removedTargetIds[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;this.Qt(f,e.key,e.Tt)}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}}},{key:"zt",value:function(e){var t=this;this.forEachTarget(e,(function(n){var r=t.jt(n);switch(e.state){case 0:t.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||t.removeTarget(n);break;case 3:t.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:t.Wt(n)&&(t.Ht(n),r.Dt(e.resumeToken));break;default:O()}}))}},{key:"forEachTarget",value:function(e,t){var n=this;e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((function(e,r){n.Wt(r)&&t(r)}))}},{key:"Jt",value:function(e){var t,n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){var a=i.target;if(Ot(a))if(0===r){var o=new ne(a.path);this.Qt(n,o,at.newNoDocument(o,J.min()))}else R(1===r);else{var s=this.Zt(n);s!==r&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(t=Jn.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:s,existenceFilterCount:e.Et.count}))}}}},{key:"Xt",value:function(e){var t=this,n=new Map;this.Bt.forEach((function(r,i){var a=t.Yt(i);if(a){if(r.current&&Ot(a.target)){var o=new ne(a.target.path);null!==t.Lt.get(o)||t.te(i,o)||t.Qt(i,o,at.newNoDocument(o,e))}r.St&&(n.set(i,r.Ct()),r.xt())}}));var r=un();this.qt.forEach((function(e,n){var i=t,a=!0;n.forEachWhile((function(e){var t=i.Yt(e);return!t||2===t.purpose||(a=!1,!1)})),a&&(r=r.add(e))})),this.Lt.forEach((function(t,n){return n.setReadTime(e)}));var i=new Zn(e,n,this.Ut,this.Lt,r);return this.Lt=$t(),this.qt=or(),this.Ut=new Se(Q),i}},{key:"Gt",value:function(e,t){if(this.Wt(e)){var n=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}}},{key:"Qt",value:function(e,t,n){if(this.Wt(e)){var r=this.jt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}}},{key:"removeTarget",value:function(e){this.Bt.delete(e)}},{key:"Zt",value:function(e){var t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}},{key:"Ot",value:function(e){this.jt(e).Ot()}},{key:"jt",value:function(e){var t=this.Bt.get(e);return t||(t=new ir,this.Bt.set(e,t)),t}},{key:"ee",value:function(e){var t=this.qt.get(e);return t||(t=new Se(Q),this.qt=this.qt.insert(e,t)),t}},{key:"Wt",value:function(e){var t=null!==this.Yt(e);return t||A("WatchChangeAggregator","Detected inactive target",e),t}},{key:"Yt",value:function(e){var t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}},{key:"Ht",value:function(e){var t=this;this.Bt.set(e,new ir),this.Ft.getRemoteKeysForTarget(e).forEach((function(n){t.Qt(e,n,null)}))}},{key:"te",value:function(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}]),e}();function or(){return new Ee(ne.comparator)}function sr(){return new Ee(ne.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ur={asc:"ASCENDING",desc:"DESCENDING"},cr={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lr={and:"AND",or:"OR"},hr=function e(n,r){"use strict";t(o)(this,e),this.databaseId=n,this.useProto3Json=r};function fr(e,t){return e.useProto3Json?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function dr(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function pr(e,t){return fr(e,t.toTimestamp())}function vr(e){return R(!!e),J.fromTimestamp((t=Le(e),new Y(t.seconds,t.nanos)));var t}function yr(e,t){return(n=e,new Z(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function mr(e){var t=Z.fromString(e);return R(Pr(t)),t}function gr(e,t){return yr(e.databaseId,t.path)}function kr(e,t){var n=mr(t);if(n.get(1)!==e.databaseId.projectId)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ne(Ir(n))}function wr(e,t){return yr(e.databaseId,t)}function br(e){var t=mr(e);return 4===t.length?Z.emptyPath():Ir(t)}function xr(e){return new Z(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ir(e){return R(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Er(e,t,n){return{name:gr(e,t),fields:n.value.mapValue.fields}}function _r(e,t){var n,r,i;if(t instanceof Mn)n={update:Er(e,t.key,t.value)};else if(t instanceof zn)n={delete:gr(e,t.key)};else if(t instanceof Un)n={update:Er(e,t.key,t.data),updateMask:(r=t.fieldMask,i=[],r.fields.forEach((function(e){return i.push(e.canonicalString())})),{fieldPaths:i})};else{if(!(t instanceof Kn))return O();n={verify:gr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((function(e){return function(e,t){var n=t.transform;if(n instanceof gn)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof kn)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof bn)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof In)return{fieldPath:t.field.canonicalString(),increment:n._t};throw O()}(0,e)}))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:pr(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:O()}(e,t.precondition)),n}function Tr(e,t){return{documents:[wr(e,t.path)]}}function Sr(e,t){var n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=wr(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=wr(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);var i=function(e){if(0!==e.length)return Lr(dt.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);var a=function(e){if(0!==e.length)return e.map((function(e){return{field:Or((t=e).field),direction:Dr(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);var o,s,u,c=(o=e,s=t.limit,o.useProto3Json||ve(s)?s:{value:s});return null!==c&&(n.structuredQuery.limit=c),t.startAt&&(n.structuredQuery.startAt={before:(u=t.startAt).inclusive,values:u.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Ar(e){var t=br(e.parent),n=e.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){R(1===r);var a=n.from[0];a.allDescendants?i=a.collectionId:t=t.child(a.collectionId)}var o,s,u=[];n.where&&(o=n.where,u=(s=Cr(o))instanceof dt&&vt(s)?s.getFilters():[s]);var c=[];n.orderBy&&(c=n.orderBy.map((function(e){return new ct(Rr((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));var l=null;n.limit&&(l=function(e){var t;return ve(t="object"==typeof e?e.value:e)?null:t}(n.limit));var h=null;n.startAt&&(h=function(e){var t=!!e.before,n=e.values||[];return new ot(n,t)}(n.startAt));var f=null;return n.endAt&&(f=function(e){var t=!e.before,n=e.values||[];return new ot(n,t)}(n.endAt)),Lt(t,i,c,u,l,"F",h,f)}function Cr(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":var t=Rr(e.unaryFilter.field);return ft.create(t,"==",{doubleValue:NaN});case"IS_NULL":var n=Rr(e.unaryFilter.field);return ft.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":var r=Rr(e.unaryFilter.field);return ft.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":var i=Rr(e.unaryFilter.field);return ft.create(i,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(e):void 0!==e.fieldFilter?(n=e,ft.create(Rr(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,dt.create(t.compositeFilter.filters.map((function(e){return Cr(e)})),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return O()}}(t.compositeFilter.op))):O();var t,n}function Dr(e){return ur[e]}function Nr(e){return cr[e]}function Or(e){return{fieldPath:e.canonicalString()}}function Rr(e){return te.fromServerFormat(e.fieldPath)}function Lr(e){return e instanceof ft?function(e){if("=="===e.op){if(Ze(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NAN"}};if($e(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ze(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NOT_NAN"}};if($e(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Or(e.field),op:Nr(e.op),value:e.value}}}(e):e instanceof dt?(r=(t=e).getFilters().map((function(e){return Lr(e)})),1===r.length?r[0]:{compositeFilter:{op:(n=t.op,lr[n]),filters:r}}):O();var t,n,r}function Pr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mr=function(){"use strict";function e(n,r,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:J.min(),u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:J.min(),c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:Oe.EMPTY_BYTE_STRING;t(o)(this,e),this.target=n,this.targetId=r,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c}return t(u)(e,[{key:"withSequenceNumber",value:function(t){return new e(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}},{key:"withResumeToken",value:function(t,n){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}},{key:"withLastLimboFreeSnapshotVersion",value:function(t){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}]),e}(),Ur=function e(n){"use strict";t(o)(this,e),this.se=n};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){var t=Ar({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?qt(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vr=function(){"use strict";function e(){t(o)(this,e)}return t(u)(e,[{key:"oe",value:function(e,t){this.ue(e,t),t.ce()}},{key:"ue",value:function(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(Pe(e.integerValue));else if("doubleValue"in e){var n=Pe(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),ye(n)?t.he(0):t.he(n))}else if("timestampValue"in e){var r=e.timestampValue;this.ae(t,20),"string"==typeof r?t.le(r):(t.le("".concat(r.seconds||"")),t.he(r.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(Me(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){var i=e.geoPointValue;this.ae(t,45),t.he(i.latitude||0),t.he(i.longitude||0)}else"mapValue"in e?nt(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):O()}},{key:"fe",value:function(e,t){this.ae(t,25),this.ye(e,t)}},{key:"ye",value:function(e,t){t.le(e)}},{key:"me",value:function(e,t){var n=e.fields||{};this.ae(t,55);var r=!0,i=!1,a=void 0;try{for(var o,s=Object.keys(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.fe(u,t),this.ue(n[u],t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"ge",value:function(e,t){var n=e.values||[];this.ae(t,50);var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.ue(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"_e",value:function(e,t){var n=this;this.ae(t,37),ne.fromName(e).path.forEach((function(e){n.ae(t,60),n.ye(e,t)}))}},{key:"ae",value:function(e,t){e.he(t)}},{key:"de",value:function(e){e.he(2)}}]),e}();Vr.pe=new Vr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jr=function(){"use strict";function e(){t(o)(this,e),this.He=new Br}return t(u)(e,[{key:"addToCollectionParentIndex",value:function(e,t){return this.He.add(t),fe.resolve()}},{key:"getCollectionParents",value:function(e,t){return fe.resolve(this.He.getEntries(t))}},{key:"addFieldIndex",value:function(e,t){return fe.resolve()}},{key:"deleteFieldIndex",value:function(e,t){return fe.resolve()}},{key:"getDocumentsMatchingTarget",value:function(e,t){return fe.resolve(null)}},{key:"getIndexType",value:function(e,t){return fe.resolve(0)}},{key:"getFieldIndexes",value:function(e,t){return fe.resolve([])}},{key:"getNextCollectionGroupToUpdate",value:function(e){return fe.resolve(null)}},{key:"getMinOffset",value:function(e,t){return fe.resolve(oe.min())}},{key:"getMinOffsetFromCollectionGroup",value:function(e,t){return fe.resolve(oe.min())}},{key:"updateCollectionGroup",value:function(e,t,n){return fe.resolve()}},{key:"updateIndexEntries",value:function(e,t){return fe.resolve()}}]),e}(),Br=function(){"use strict";function e(){t(o)(this,e),this.index={}}return t(u)(e,[{key:"add",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Se(Z.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}},{key:"has",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}},{key:"getEntries",value:function(e){return(this.index[e]||new Se(Z.comparator)).toArray()}}]),e}();new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var qr=function(){"use strict";function e(n,r,i){t(o)(this,e),this.cacheSizeCollectionThreshold=n,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=i}return t(u)(e,null,[{key:"withCacheSize",value:function(t){return new e(t,e.DEFAULT_COLLECTION_PERCENTILE,e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qr.DEFAULT_COLLECTION_PERCENTILE=10,qr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qr.DEFAULT=new qr(41943040,qr.DEFAULT_COLLECTION_PERCENTILE,qr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qr.DISABLED=new qr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zr=function(){"use strict";function e(n){t(o)(this,e),this.Rn=n}return t(u)(e,[{key:"next",value:function(){return this.Rn+=2,this.Rn}}],[{key:"vn",value:function(){return new e(0)}},{key:"bn",value:function(){return new e(-1)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Kr=function(){"use strict";function e(){t(o)(this,e),this.changes=new Yt((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)})),this.changesApplied=!1}return t(u)(e,[{key:"addEntry",value:function(e){this.assertNotApplied(),this.changes.set(e.key,e)}},{key:"removeEntry",value:function(e,t){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(t))}},{key:"getEntry",value:function(e,t){this.assertNotApplied();var n=this.changes.get(t);return void 0!==n?fe.resolve(n):this.getFromCache(e,t)}},{key:"getEntries",value:function(e,t){return this.getAllFromCache(e,t)}},{key:"apply",value:function(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}},{key:"assertNotApplied",value:function(){}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hr=function e(n,r){"use strict";t(o)(this,e),this.overlayedDocument=n,this.mutatedFields=r},Gr=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.remoteDocumentCache=n,this.mutationQueue=r,this.documentOverlayCache=i,this.indexManager=a}return t(u)(e,[{key:"getDocument",value:function(e,t){var n=this,r=null;return this.documentOverlayCache.getOverlay(e,t).next((function(i){return r=i,n.remoteDocumentCache.getEntry(e,t)})).next((function(e){return null!==r&&Rn(r.mutation,e,Ce.empty(),Y.now()),e}))}},{key:"getDocuments",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.getLocalViewOfDocuments(e,t,un()).next((function(){return t}))}))}},{key:"getLocalViewOfDocuments",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:un(),r=this,i=nn();return this.populateOverlays(e,i,t).next((function(){return r.computeViews(e,t,i,n).next((function(e){var t=en();return e.forEach((function(e,n){t=t.insert(e,n.overlayedDocument)})),t}))}))}},{key:"getOverlayedDocuments",value:function(e,t){var n=this,r=nn();return this.populateOverlays(e,r,t).next((function(){return n.computeViews(e,t,r,un())}))}},{key:"populateOverlays",value:function(e,t,n){var r=[];return n.forEach((function(e){t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((function(e){e.forEach((function(e,n){t.set(e,n)}))}))}},{key:"computeViews",value:function(e,t,n,r){var i=$t(),a=an(),o=an();return t.forEach((function(e,t){var o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Un)?i=i.insert(t.key,t):void 0!==o?(a.set(t.key,o.mutation.getFieldMask()),Rn(o.mutation,t,o.mutation.getFieldMask(),Y.now())):a.set(t.key,Ce.empty())})),this.recalculateAndSaveOverlays(e,i).next((function(e){return e.forEach((function(e,t){return a.set(e,t)})),t.forEach((function(e,t){var n;return o.set(e,new Hr(t,null!==(n=a.get(e))&&void 0!==n?n:null))})),o}))}},{key:"recalculateAndSaveOverlays",value:function(e,t){var n=this,r=an(),i=new Ee((function(e,t){return e-t})),a=un();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((function(e){var n=!0,a=!1,o=void 0;try{for(var s,u=function(e,n){var a=n.value;a.keys().forEach((function(e){var n=t.get(e);if(null!==n){var o=r.get(e)||Ce.empty();o=a.applyToLocalView(n,o),r.set(e,o);var s=(i.get(a.batchId)||un()).add(e);i=i.insert(a.batchId,s)}}))},c=e[Symbol.iterator]();!(n=(s=c.next()).done);n=!0)u(0,s)}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}})).next((function(){for(var o=[],s=i.getReverseIterator();s.hasNext();){var u=s.getNext(),c=u.key,l=u.value,h=rn();l.forEach((function(e){if(!a.has(e)){var n=Nn(t.get(e),r.get(e));null!==n&&h.set(e,n),a=a.add(e)}})),o.push(n.documentOverlayCache.saveOverlays(e,c,h))}return fe.waitFor(o)})).next((function(){return r}))}},{key:"recalculateAndSaveOverlaysForDocumentKeys",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.recalculateAndSaveOverlays(e,t)}))}},{key:"getDocumentsMatchingQuery",value:function(e,t,n){return r=t,ne.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Vt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var r}},{key:"getNextDocuments",value:function(e,t,n,r){var i=this;return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((function(a){var o=i,s=r-a.size>0?i.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-a.size):fe.resolve(nn()),u=-1,c=a;return s.next((function(t){return fe.forEach(t,(function(t,n){return u<n.largestBatchId&&(u=n.largestBatchId),a.get(t)?fe.resolve():o.remoteDocumentCache.getEntry(e,t).next((function(e){c=c.insert(t,e)}))})).next((function(){return o.populateOverlays(e,t,a)})).next((function(){return o.computeViews(e,c,t,un())})).next((function(e){return{batchId:u,changes:tn(e)}}))}))}))}},{key:"getDocumentsMatchingDocumentQuery",value:function(e,t){return this.getDocument(e,new ne(t)).next((function(e){var t=en();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}},{key:"getDocumentsMatchingCollectionGroupQuery",value:function(e,t,n){var r=this,i=t.collectionGroup,a=en();return this.indexManager.getCollectionParents(e,i).next((function(o){return fe.forEach(o,(function(o){var s,u,c=(s=t,u=o.child(i),new Rt(u,null,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt));return r.getDocumentsMatchingCollectionQuery(e,c,n).next((function(e){e.forEach((function(e,t){a=a.insert(e,t)}))}))})).next((function(){return a}))}))}},{key:"getDocumentsMatchingCollectionQuery",value:function(e,t,n){var r,i=this;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((function(a){return r=a,i.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)})).next((function(e){r.forEach((function(t,n){var r=n.getKey();null===e.get(r)&&(e=e.insert(r,at.newInvalidDocument(r)))}));var n=en();return e.forEach((function(e,i){var a=r.get(e);void 0!==a&&Rn(a.mutation,i,Ce.empty(),Y.now()),Gt(t,i)&&(n=n.insert(e,i))})),n}))}}]),e}(),Wr=function(){"use strict";function e(n){t(o)(this,e),this.serializer=n,this.Zn=new Map,this.Xn=new Map}return t(u)(e,[{key:"getBundleMetadata",value:function(e,t){return fe.resolve(this.Zn.get(t))}},{key:"saveBundleMetadata",value:function(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:vr(n.createTime)}),fe.resolve()}},{key:"getNamedQuery",value:function(e,t){return fe.resolve(this.Xn.get(t))}},{key:"saveNamedQuery",value:function(e,t){return this.Xn.set(t.name,{name:(n=t).name,query:Fr(n.bundledQuery),readTime:vr(n.readTime)}),fe.resolve();var n}}]),e}(),Qr=function(){"use strict";function e(){t(o)(this,e),this.overlays=new Ee(ne.comparator),this.ts=new Map}return t(u)(e,[{key:"getOverlay",value:function(e,t){return fe.resolve(this.overlays.get(t))}},{key:"getOverlays",value:function(e,t){var n=this,r=nn();return fe.forEach(t,(function(t){return n.getOverlay(e,t).next((function(e){null!==e&&r.set(t,e)}))})).next((function(){return r}))}},{key:"saveOverlays",value:function(e,t,n){var r=this;return n.forEach((function(n,i){r.re(e,t,i)})),fe.resolve()}},{key:"removeOverlaysForBatchId",value:function(e,t,n){var r=this,i=this.ts.get(n);return void 0!==i&&(i.forEach((function(e){return r.overlays=r.overlays.remove(e)})),this.ts.delete(n)),fe.resolve()}},{key:"getOverlaysForCollection",value:function(e,t,n){for(var r=nn(),i=t.length+1,a=new ne(t.child("")),o=this.overlays.getIteratorFrom(a);o.hasNext();){var s=o.getNext().value,u=s.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&s.largestBatchId>n&&r.set(s.getKey(),s)}return fe.resolve(r)}},{key:"getOverlaysForCollectionGroup",value:function(e,t,n,r){for(var i=new Ee((function(e,t){return e-t})),a=this.overlays.getIterator();a.hasNext();){var o=a.getNext().value;if(o.getKey().getCollectionGroup()===t&&o.largestBatchId>n){var s=i.get(o.largestBatchId);null===s&&(s=nn(),i=i.insert(o.largestBatchId,s)),s.set(o.getKey(),o)}}for(var u=nn(),c=i.getIterator();c.hasNext()&&(c.getNext().value.forEach((function(e,t){return u.set(e,t)})),!(u.size()>=r)););return fe.resolve(u)}},{key:"re",value:function(e,t,n){var r=this.overlays.get(n.key);if(null!==r){var i=this.ts.get(r.largestBatchId).delete(n.key);this.ts.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new Wn(t,n));var a=this.ts.get(t);void 0===a&&(a=un(),this.ts.set(t,a)),this.ts.set(t,a.add(n.key))}}]),e}(),Xr=function(){"use strict";function e(){t(o)(this,e),this.es=new Se(Yr.ns),this.ss=new Se(Yr.rs)}return t(u)(e,[{key:"isEmpty",value:function(){return this.es.isEmpty()}},{key:"addReference",value:function(e,t){var n=new Yr(e,t);this.es=this.es.add(n),this.ss=this.ss.add(n)}},{key:"os",value:function(e,t){var n=this;e.forEach((function(e){return n.addReference(e,t)}))}},{key:"removeReference",value:function(e,t){this.us(new Yr(e,t))}},{key:"cs",value:function(e,t){var n=this;e.forEach((function(e){return n.removeReference(e,t)}))}},{key:"hs",value:function(e){var t=this,n=new ne(new Z([])),r=new Yr(n,e),i=new Yr(n,e+1),a=[];return this.ss.forEachInRange([r,i],(function(e){t.us(e),a.push(e.key)})),a}},{key:"ls",value:function(){var e=this;this.es.forEach((function(t){return e.us(t)}))}},{key:"us",value:function(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}},{key:"fs",value:function(e){var t=new ne(new Z([])),n=new Yr(t,e),r=new Yr(t,e+1),i=un();return this.ss.forEachInRange([n,r],(function(e){i=i.add(e.key)})),i}},{key:"containsKey",value:function(e){var t=new Yr(e,0),n=this.es.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}]),e}(),Yr=function(){"use strict";function e(n,r){t(o)(this,e),this.key=n,this.ds=r}return t(u)(e,null,[{key:"ns",value:function(e,t){return ne.comparator(e.key,t.key)||Q(e.ds,t.ds)}},{key:"rs",value:function(e,t){return Q(e.ds,t.ds)||ne.comparator(e.key,t.key)}}]),e}(),Jr=function(){"use strict";function e(n,r){t(o)(this,e),this.indexManager=n,this.referenceDelegate=r,this.mutationQueue=[],this.ws=1,this._s=new Se(Yr.ns)}return t(u)(e,[{key:"checkEmpty",value:function(e){return fe.resolve(0===this.mutationQueue.length)}},{key:"addMutationBatch",value:function(e,t,n,r){var i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];var a=new Hn(i,t,n,r);this.mutationQueue.push(a);var o=!0,s=!1,u=void 0;try{for(var c,l=r[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value;this._s=this._s.add(new Yr(h.key,i)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast())}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return fe.resolve(a)}},{key:"lookupMutationBatch",value:function(e,t){return fe.resolve(this.gs(t))}},{key:"getNextMutationBatchAfterBatchId",value:function(e,t){var n=t+1,r=this.ys(n),i=r<0?0:r;return fe.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}},{key:"getHighestUnacknowledgedBatchId",value:function(){return fe.resolve(0===this.mutationQueue.length?-1:this.ws-1)}},{key:"getAllMutationBatches",value:function(e){return fe.resolve(this.mutationQueue.slice())}},{key:"getAllMutationBatchesAffectingDocumentKey",value:function(e,t){var n=this,r=new Yr(t,0),i=new Yr(t,Number.POSITIVE_INFINITY),a=[];return this._s.forEachInRange([r,i],(function(e){var t=n.gs(e.ds);a.push(t)})),fe.resolve(a)}},{key:"getAllMutationBatchesAffectingDocumentKeys",value:function(e,t){var n=this,r=new Se(Q);return t.forEach((function(e){var t=new Yr(e,0),i=new Yr(e,Number.POSITIVE_INFINITY);n._s.forEachInRange([t,i],(function(e){r=r.add(e.ds)}))})),fe.resolve(this.ps(r))}},{key:"getAllMutationBatchesAffectingQuery",value:function(e,t){var n=t.path,r=n.length+1,i=n;ne.isDocumentKey(i)||(i=i.child(""));var a=new Yr(new ne(i),0),o=new Se(Q);return this._s.forEachWhile((function(e){var t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ds)),!0)}),a),fe.resolve(this.ps(o))}},{key:"ps",value:function(e){var t=this,n=[];return e.forEach((function(e){var r=t.gs(e);null!==r&&n.push(r)})),n}},{key:"removeMutationBatch",value:function(e,t){var n=this;R(0===this.Is(t.batchId,"removed")),this.mutationQueue.shift();var r=this._s;return fe.forEach(t.mutations,(function(i){var a=new Yr(i.key,t.batchId);return r=r.delete(a),n.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((function(){n._s=r}))}},{key:"En",value:function(e){}},{key:"containsKey",value:function(e,t){var n=new Yr(t,0),r=this._s.firstAfterOrEqual(n);return fe.resolve(t.isEqual(r&&r.key))}},{key:"performConsistencyCheck",value:function(e){return this.mutationQueue.length,fe.resolve()}},{key:"Is",value:function(e,t){return this.ys(e)}},{key:"ys",value:function(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}},{key:"gs",value:function(e){var t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}]),e}(),$r=function(){"use strict";function e(n){t(o)(this,e),this.Ts=n,this.docs=new Ee(ne.comparator),this.size=0}return t(u)(e,[{key:"setIndexManager",value:function(e){this.indexManager=e}},{key:"addEntry",value:function(e,t){var n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.Ts(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}},{key:"removeEntry",value:function(e){var t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}},{key:"getEntry",value:function(e,t){var n=this.docs.get(t);return fe.resolve(n?n.document.mutableCopy():at.newInvalidDocument(t))}},{key:"getEntries",value:function(e,t){var n=this,r=$t();return t.forEach((function(e){var t=n.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():at.newInvalidDocument(e))})),fe.resolve(r)}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){for(var i=$t(),a=t.path,o=new ne(a.child("")),s=this.docs.getIteratorFrom(o);s.hasNext();){var u=s.getNext(),c=u.key,l=u.value.document;if(!a.isPrefixOf(c.path))break;c.path.length>a.length+1||se(ae(l),n)<=0||(r.has(l.key)||Gt(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return fe.resolve(i)}},{key:"getAllFromCollectionGroup",value:function(e,t,n,r){O()}},{key:"Es",value:function(e,t){return fe.forEach(this.docs,(function(e){return t(e)}))}},{key:"newChangeBuffer",value:function(e){return new Zr(this)}},{key:"getSize",value:function(e){return fe.resolve(this.size)}}]),e}(),Zr=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).Jn=e,t(f)(i)}return t(u)(r,[{key:"applyChanges",value:function(e){var t=this,n=[];return this.changes.forEach((function(r,i){i.isValidDocument()?n.push(t.Jn.addEntry(e,i)):t.Jn.removeEntry(r)})),fe.waitFor(n)}},{key:"getFromCache",value:function(e,t){return this.Jn.getEntry(e,t)}},{key:"getAllFromCache",value:function(e,t){return this.Jn.getEntries(e,t)}}]),r}(Kr),ei=function(){"use strict";function e(n){t(o)(this,e),this.persistence=n,this.As=new Yt((function(e){return Dt(e)}),Nt),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Xr,this.targetCount=0,this.bs=zr.vn()}return t(u)(e,[{key:"forEachTarget",value:function(e,t){return this.As.forEach((function(e,n){return t(n)})),fe.resolve()}},{key:"getLastRemoteSnapshotVersion",value:function(e){return fe.resolve(this.lastRemoteSnapshotVersion)}},{key:"getHighestSequenceNumber",value:function(e){return fe.resolve(this.Rs)}},{key:"allocateTargetId",value:function(e){return this.highestTargetId=this.bs.next(),fe.resolve(this.highestTargetId)}},{key:"setTargetsMetadata",value:function(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Rs&&(this.Rs=t),fe.resolve()}},{key:"Sn",value:function(e){this.As.set(e.target,e);var t=e.targetId;t>this.highestTargetId&&(this.bs=new zr(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}},{key:"addTargetData",value:function(e,t){return this.Sn(t),this.targetCount+=1,fe.resolve()}},{key:"updateTargetData",value:function(e,t){return this.Sn(t),fe.resolve()}},{key:"removeTargetData",value:function(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,fe.resolve()}},{key:"removeTargets",value:function(e,t,n){var r=this,i=0,a=[];return this.As.forEach((function(o,s){s.sequenceNumber<=t&&null===n.get(s.targetId)&&(r.As.delete(o),a.push(r.removeMatchingKeysForTargetId(e,s.targetId)),i++)})),fe.waitFor(a).next((function(){return i}))}},{key:"getTargetCount",value:function(e){return fe.resolve(this.targetCount)}},{key:"getTargetData",value:function(e,t){var n=this.As.get(t)||null;return fe.resolve(n)}},{key:"addMatchingKeys",value:function(e,t,n){return this.vs.os(t,n),fe.resolve()}},{key:"removeMatchingKeys",value:function(e,t,n){this.vs.cs(t,n);var r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((function(t){i.push(r.markPotentiallyOrphaned(e,t))})),fe.waitFor(i)}},{key:"removeMatchingKeysForTargetId",value:function(e,t){return this.vs.hs(t),fe.resolve()}},{key:"getMatchingKeysForTargetId",value:function(e,t){var n=this.vs.fs(t);return fe.resolve(n)}},{key:"containsKey",value:function(e,t){return fe.resolve(this.vs.containsKey(t))}}]),e}(),ti=function(){"use strict";function e(n,r){var i=this;t(o)(this,e),this.Ps={},this.overlays={},this.Vs=new pe(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=n(this),this.Ds=new ei(this),this.indexManager=new jr,this.remoteDocumentCache=new $r((function(e){return i.referenceDelegate.Cs(e)})),this.serializer=new Ur(r),this.xs=new Wr(this.serializer)}return t(u)(e,[{key:"start",value:function(){return Promise.resolve()}},{key:"shutdown",value:function(){return this.Ss=!1,Promise.resolve()}},{key:"started",get:function(){return this.Ss}},{key:"setDatabaseDeletedListener",value:function(){}},{key:"setNetworkEnabled",value:function(){}},{key:"getIndexManager",value:function(e){return this.indexManager}},{key:"getDocumentOverlayCache",value:function(e){var t=this.overlays[e.toKey()];return t||(t=new Qr,this.overlays[e.toKey()]=t),t}},{key:"getMutationQueue",value:function(e,t){var n=this.Ps[e.toKey()];return n||(n=new Jr(t,this.referenceDelegate),this.Ps[e.toKey()]=n),n}},{key:"getTargetCache",value:function(){return this.Ds}},{key:"getRemoteDocumentCache",value:function(){return this.remoteDocumentCache}},{key:"getBundleCache",value:function(){return this.xs}},{key:"runTransaction",value:function(e,t,n){var r=this;A("MemoryPersistence","Starting transaction:",e);var i=new ni(this.Vs.next());return this.referenceDelegate.Ns(),n(i).next((function(e){return r.referenceDelegate.ks(i).next((function(){return e}))})).toPromise().then((function(e){return i.raiseOnCommittedEvent(),e}))}},{key:"Os",value:function(e,t){return fe.or(Object.values(this.Ps).map((function(n){return function(){return n.containsKey(e,t)}})))}}]),e}(),ni=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).currentSequenceNumber=e,t(f)(i)}return r}(ce),ri=function(){"use strict";function e(n){t(o)(this,e),this.persistence=n,this.$s=new Xr,this.Ms=null}return t(u)(e,[{key:"Bs",get:function(){if(this.Ms)return this.Ms;throw O()}},{key:"addReference",value:function(e,t,n){return this.$s.addReference(n,t),this.Bs.delete(n.toString()),fe.resolve()}},{key:"removeReference",value:function(e,t,n){return this.$s.removeReference(n,t),this.Bs.add(n.toString()),fe.resolve()}},{key:"markPotentiallyOrphaned",value:function(e,t){return this.Bs.add(t.toString()),fe.resolve()}},{key:"removeTarget",value:function(e,t){var n=this;this.$s.hs(t.targetId).forEach((function(e){return n.Bs.add(e.toString())}));var r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((function(e){var t=n;e.forEach((function(e){return t.Bs.add(e.toString())}))})).next((function(){return r.removeTargetData(e,t)}))}},{key:"Ns",value:function(){this.Ms=new Set}},{key:"ks",value:function(e){var t=this,n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return fe.forEach(this.Bs,(function(r){var i=ne.fromPath(r);return t.Ls(e,i).next((function(e){e||n.removeEntry(i,J.min())}))})).next((function(){return t.Ms=null,n.apply(e)}))}},{key:"updateLimboDocument",value:function(e,t){var n=this;return this.Ls(e,t).next((function(e){e?n.Bs.delete(t.toString()):n.Bs.add(t.toString())}))}},{key:"Cs",value:function(e){return 0}},{key:"Ls",value:function(e,t){var n=this;return fe.or([function(){return fe.resolve(n.$s.containsKey(t))},function(){return n.persistence.getTargetCache().containsKey(e,t)},function(){return n.persistence.Os(e,t)}])}}],[{key:"Fs",value:function(t){return new e(t)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ii=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.targetId=n,this.fromCache=r,this.Vi=i,this.Si=a}return t(u)(e,null,[{key:"Di",value:function(t,n){var r=un(),i=un(),a=!0,o=!1,s=void 0;try{for(var u,c=n.docChanges[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:i=i.add(l.doc.key)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new e(t,n.fromCache,r,i)}}]),e}(),ai=function(){"use strict";function e(){t(o)(this,e),this.Ci=!1}return t(u)(e,[{key:"initialize",value:function(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){var i=this;return this.Ni(e,t).next((function(a){return a||i.ki(e,t,r,n)})).next((function(n){return n||i.Oi(e,t)}))}},{key:"Ni",value:function(e,n){var r=this;if(Mt(n))return fe.resolve(null);var i=Bt(n);return this.indexManager.getIndexType(e,i).next((function(a){return 0===a?null:(null!==n.limit&&1===a&&(n=qt(n,null,"F"),i=Bt(n)),r.indexManager.getDocumentsMatchingTarget(e,i).next((function(a){var o=r,s=un.apply(void 0,t(p)(a));return r.xi.getDocuments(e,s).next((function(t){return o.indexManager.getMinOffset(e,i).next((function(r){var i=o.$i(n,t);return o.Mi(n,i,s,r.readTime)?o.Ni(e,qt(n,null,"F")):o.Fi(e,i,n,r)}))}))})))}))}},{key:"ki",value:function(e,t,n,r){var i=this;return Mt(t)||r.isEqual(J.min())?this.Oi(e,t):this.xi.getDocuments(e,n).next((function(a){var o=i.$i(t,a);return i.Mi(t,o,n,r)?i.Oi(e,t):(S()<=w.LogLevel.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ht(t)),i.Fi(e,o,t,ie(r,-1)))}))}},{key:"$i",value:function(e,t){var n=new Se(Qt(e));return t.forEach((function(t,r){Gt(e,r)&&(n=n.add(r))})),n}},{key:"Mi",value:function(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;var i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}},{key:"Oi",value:function(e,t){return S()<=w.LogLevel.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",Ht(t)),this.xi.getDocumentsMatchingQuery(e,t,oe.min())}},{key:"Fi",value:function(e,t,n,r){return this.xi.getDocumentsMatchingQuery(e,n,r).next((function(e){return t.forEach((function(t){e=e.insert(t.key,t)})),e}))}}]),e}(),oi=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.persistence=n,this.Bi=r,this.serializer=a,this.Li=new Ee(Q),this.qi=new Yt((function(e){return Dt(e)}),Nt),this.Ui=new Map,this.Ki=n.getRemoteDocumentCache(),this.Ds=n.getTargetCache(),this.xs=n.getBundleCache(),this.Gi(i)}return t(u)(e,[{key:"Gi",value:function(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gr(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}},{key:"collectGarbage",value:function(e){var t=this;return this.persistence.runTransaction("Collect garbage","readwrite-primary",(function(n){return e.collect(n,t.Li)}))}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e,t,n,r){return new oi(e,t,n,r)}function ui(e,t){return ci.apply(this,arguments)}function ci(){return(ci=t(i)(t(m).mark((function e(n,r){var i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=L(n),e.next=3,i.persistence.runTransaction("Handle user change","readonly",(function(e){var t;return i.mutationQueue.getAllMutationBatches(e).next((function(n){return t=n,i.Gi(r),i.mutationQueue.getAllMutationBatches(e)})).next((function(n){var r=[],a=[],o=un(),s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;r.push(f.batchId);var d=!0,p=!1,v=void 0;try{for(var y,m=f.mutations[Symbol.iterator]();!(d=(y=m.next()).done);d=!0){var g=y.value;o=o.add(g.key)}}catch(e){p=!0,v=e}finally{try{d||null==m.return||m.return()}finally{if(p)throw v}}}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}var k=!0,w=!1,b=void 0;try{for(var x,I=n[Symbol.iterator]();!(k=(x=I.next()).done);k=!0){var E=x.value;a.push(E.batchId);var _=!0,T=!1,S=void 0;try{for(var A,C=E.mutations[Symbol.iterator]();!(_=(A=C.next()).done);_=!0){var D=A.value;o=o.add(D.key)}}catch(e){T=!0,S=e}finally{try{_||null==C.return||C.return()}finally{if(T)throw S}}}}catch(e){w=!0,b=e}finally{try{k||null==I.return||I.return()}finally{if(w)throw b}}return i.localDocuments.getDocuments(e,o).next((function(e){return{Qi:e,removedBatchIds:r,addedBatchIds:a}}))}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function li(e,t){var n=L(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(function(e){var r,i,a,o,s,u,c,l=t.batch.keys(),h=n.Ki.newChangeBuffer({trackRemovals:!0});return(r=n,i=e,a=t,o=h,s=a.batch,u=s.keys(),c=fe.resolve(),u.forEach((function(e){c=c.next((function(){return o.getEntry(i,e)})).next((function(t){var n=a.docVersions.get(e);R(null!==n),t.version.compareTo(n)<0&&(s.applyToRemoteDocument(t,a),t.isValidDocument()&&(t.setReadTime(a.commitVersion),o.addEntry(t)))}))})),c.next((function(){return r.mutationQueue.removeMutationBatch(i,s)}))).next((function(){return h.apply(e)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,l,t.batch.batchId)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){for(var t=un(),n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))})).next((function(){return n.localDocuments.getDocuments(e,l)}))}))}function hi(e){var t=L(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(function(e){return t.Ds.getLastRemoteSnapshotVersion(e)}))}function fi(e,t){var n=L(e),r=t.snapshotVersion,i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(function(e){var a=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;var o=[];t.targetChanges.forEach((function(a,s){var u=i.get(s);if(u){o.push(n.Ds.removeMatchingKeys(e,a.removedDocuments,s).next((function(){return n.Ds.addMatchingKeys(e,a.addedDocuments,s)})));var c,l,h,f=u.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(s)?f=f.withResumeToken(Oe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):a.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(a.resumeToken,r)),i=i.insert(s,f),l=f,h=a,(0===(c=u).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.Ds.updateTargetData(e,f))}}));var s=$t(),u=un();if(t.documentUpdates.forEach((function(r){t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(di(e,a,t.documentUpdates).next((function(e){s=e.zi,u=e.ji}))),!r.isEqual(J.min())){var c=n.Ds.getLastRemoteSnapshotVersion(e).next((function(t){return n.Ds.setTargetsMetadata(e,e.currentSequenceNumber,r)}));o.push(c)}return fe.waitFor(o).next((function(){return a.apply(e)})).next((function(){return n.localDocuments.getLocalViewOfDocuments(e,s,u)})).next((function(){return s}))})).then((function(e){return n.Li=i,e}))}function di(e,t,n){var r=un(),i=un();return n.forEach((function(e){return r=r.add(e)})),t.getEntries(e,r).next((function(e){var r=$t();return n.forEach((function(n,a){var o=e.get(n);a.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),a.isNoDocument()&&a.version.isEqual(J.min())?(t.removeEntry(n,a.readTime),r=r.insert(n,a)):!o.isValidDocument()||a.version.compareTo(o.version)>0||0===a.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(a),r=r.insert(n,a)):A("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",a.version)})),{zi:r,ji:i}}))}function pi(e,t){var n=L(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(function(e){return void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)}))}function vi(e,t){var n=L(e);return n.persistence.runTransaction("Allocate target","readwrite",(function(e){var r;return n.Ds.getTargetData(e,t).next((function(i){return i?(r=i,fe.resolve(r)):n.Ds.allocateTargetId(e).next((function(i){return r=new Mr(t,i,0,e.currentSequenceNumber),n.Ds.addTargetData(e,r).next((function(){return r}))}))}))})).then((function(e){var r=n.Li.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}function yi(e,t,n){return mi.apply(this,arguments)}function mi(){return(mi=t(i)(t(m).mark((function e(n,r,i){var a,o,s;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=L(n),o=a.Li.get(r),s=i?"readwrite":"readwrite-primary",e.prev=1,e.t0=i,e.t0){e.next=6;break}return e.next=6,a.persistence.runTransaction("Release target",s,(function(e){return a.persistence.referenceDelegate.removeTarget(e,o)}));case 6:e.next=13;break;case 8:if(e.prev=8,e.t1=e.catch(1),de(e.t1)){e.next=12;break}throw e.t1;case 12:A("LocalStore","Failed to update sequence numbers for target ".concat(r,": ").concat(e.t1));case 13:a.Li=a.Li.remove(r),a.qi.delete(o.target);case 14:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function gi(e,t,n){var r=L(e),i=J.min(),a=un();return r.persistence.runTransaction("Execute query","readonly",(function(e){return(o=r,s=e,u=Bt(t),c=L(o),l=c.qi.get(u),void 0!==l?fe.resolve(c.Li.get(l)):c.Ds.getTargetData(s,u)).next((function(t){if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(e,t.targetId).next((function(e){a=e}))})).next((function(){return r.Bi.getDocumentsMatchingQuery(e,t,n?i:J.min(),n?a:un())})).next((function(e){return ki(r,Wt(t),e),{documents:e,Wi:a}}));var o,s,u,c,l}))}function ki(e,t,n){var r=e.Ui.get(t)||J.min();n.forEach((function(e,t){t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ui.set(t,r)}var wi=function(){"use strict";function e(){t(o)(this,e),this.activeTargetIds=ln()}return t(u)(e,[{key:"tr",value:function(e){this.activeTargetIds=this.activeTargetIds.add(e)}},{key:"er",value:function(e){this.activeTargetIds=this.activeTargetIds.delete(e)}},{key:"Xi",value:function(){var e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}]),e}(),bi=function(){"use strict";function e(){t(o)(this,e),this.Br=new wi,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}return t(u)(e,[{key:"addPendingMutation",value:function(e){}},{key:"updateMutationState",value:function(e,t,n){}},{key:"addLocalQueryTarget",value:function(e){return this.Br.tr(e),this.Lr[e]||"not-current"}},{key:"updateQueryState",value:function(e,t,n){this.Lr[e]=t}},{key:"removeLocalQueryTarget",value:function(e){this.Br.er(e)}},{key:"isLocalQueryTarget",value:function(e){return this.Br.activeTargetIds.has(e)}},{key:"clearQueryState",value:function(e){delete this.Lr[e]}},{key:"getAllActiveQueryTargets",value:function(){return this.Br.activeTargetIds}},{key:"isActiveQueryTarget",value:function(e){return this.Br.activeTargetIds.has(e)}},{key:"start",value:function(){return this.Br=new wi,Promise.resolve()}},{key:"handleUserChange",value:function(e,t,n){}},{key:"setOnlineState",value:function(e){}},{key:"shutdown",value:function(){}},{key:"writeSequenceNumber",value:function(e){}},{key:"notifyBundleLoaded",value:function(e){}}]),e}(),xi=function(){"use strict";function e(){t(o)(this,e)}return t(u)(e,[{key:"qr",value:function(e){}},{key:"shutdown",value:function(){}}]),e}(),Ii=function(){"use strict";function e(){var n=this;t(o)(this,e),this.Ur=function(){return n.Kr()},this.Gr=function(){return n.Qr()},this.zr=[],this.jr()}return t(u)(e,[{key:"qr",value:function(e){this.zr.push(e)}},{key:"shutdown",value:function(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}},{key:"jr",value:function(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}},{key:"Kr",value:function(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.zr[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(0)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"Qr",value:function(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.zr[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(1)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}}],[{key:"D",value:function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}]),e}(),Ei=null;function _i(){return null===Ei?Ei=268435456+Math.round(2147483648*Math.random()):Ei++,"0x"+Ei.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var Ti={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},Si=function(){"use strict";function e(n){t(o)(this,e),this.Wr=n.Wr,this.Hr=n.Hr}return t(u)(e,[{key:"Jr",value:function(e){this.Yr=e}},{key:"Zr",value:function(e){this.Xr=e}},{key:"onMessage",value:function(e){this.eo=e}},{key:"close",value:function(){this.Hr()}},{key:"send",value:function(e){this.Wr(e)}},{key:"no",value:function(){this.Yr()}},{key:"so",value:function(e){this.Xr(e)}},{key:"io",value:function(e){this.eo(e)}}]),e}(),Ai="WebChannelConnection",Ci=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this,e)).forceLongPolling=e.forceLongPolling,i.autoDetectLongPolling=e.autoDetectLongPolling,i.useFetchStreams=e.useFetchStreams,t(f)(i)}return t(u)(r,[{key:"lo",value:function(e,t,n,r){var i=_i();return new Promise((function(a,o){var s=new(0,x.XhrIo);s.setWithCredentials(!0),s.listenOnce(x.EventType.COMPLETE,(function(){try{switch(s.getLastErrorCode()){case x.ErrorCode.NO_ERROR:var t=s.getResponseJson();A(Ai,"XHR for RPC '".concat(e,"' ").concat(i," received:"),JSON.stringify(t)),a(t);break;case x.ErrorCode.TIMEOUT:A(Ai,"RPC '".concat(e,"' ").concat(i," timed out")),o(new M(P.DEADLINE_EXCEEDED,"Request time out"));break;case x.ErrorCode.HTTP_ERROR:var n=s.getStatus();if(A(Ai,"RPC '".concat(e,"' ").concat(i," failed with status:"),n,"response text:",s.getResponseText()),n>0){var r=s.getResponseJson();Array.isArray(r)&&(r=r[0]);var u=null==r?void 0:r.error;if(u&&u.status&&u.message){var c=(l=u.status,h=l.toLowerCase().replace(/_/g,"-"),Object.values(P).indexOf(h)>=0?h:P.UNKNOWN);o(new M(c,u.message))}else o(new M(P.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new M(P.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{A(Ai,"RPC '".concat(e,"' ").concat(i," completed."))}var l,h}));var u=JSON.stringify(r);A(Ai,"RPC '".concat(e,"' ").concat(i," sending request:"),r),s.send(t,"POST",u,n,15)}))}},{key:"wo",value:function(e,t,n){var r=_i(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,x.createWebChannelTransport)(),o=(0,x.getStatEventTarget)(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/".concat(this.databaseId.projectId,"/databases/").concat(this.databaseId.database)},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new(0,x.FetchXmlHttpFactory)({})),this.ho(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;var u=i.join("");A(Ai,"Creating RPC '".concat(e,"' stream ").concat(r,": ").concat(u),s);var c=a.createWebChannel(u,s),l=!1,h=!1,f=new Si({Wr:function(t){h?A(Ai,"Not sending because RPC '".concat(e,"' stream ").concat(r," is closed:"),t):(l||(A(Ai,"Opening RPC '".concat(e,"' stream ").concat(r," transport.")),c.open(),l=!0),A(Ai,"RPC '".concat(e,"' stream ").concat(r," sending:"),t),c.send(t))},Hr:function(){return c.close()}}),d=function(e,t,n){e.listen(t,(function(e){try{n(e)}catch(e){setTimeout((function(){throw e}),0)}}))};return d(c,x.WebChannel.EventType.OPEN,(function(){h||A(Ai,"RPC '".concat(e,"' stream ").concat(r," transport opened."))})),d(c,x.WebChannel.EventType.CLOSE,(function(){h||(h=!0,A(Ai,"RPC '".concat(e,"' stream ").concat(r," transport closed")),f.so())})),d(c,x.WebChannel.EventType.ERROR,(function(t){h||(h=!0,D(Ai,"RPC '".concat(e,"' stream ").concat(r," transport errored:"),t),f.so(new M(P.UNAVAILABLE,"The operation could not be completed")))})),d(c,x.WebChannel.EventType.MESSAGE,(function(t){var n;if(!h){var i=t.data[0];R(!!i);var a=i,o=a.error||(null===(n=a[0])||void 0===n?void 0:n.error);if(o){A(Ai,"RPC '".concat(e,"' stream ").concat(r," received error:"),o);var s=o.status,u=function(e){var t=Bn[e];if(void 0!==t)return Yn(t)}(s),l=o.message;void 0===u&&(u=P.INTERNAL,l="Unknown error status: "+s+" with message "+o.message),h=!0,f.so(new M(u,l)),c.close()}else A(Ai,"RPC '".concat(e,"' stream ").concat(r," received:"),i),f.io(i)}})),d(o,x.Event.STAT_EVENT,(function(t){t.stat===x.Stat.PROXY?A(Ai,"RPC '".concat(e,"' stream ").concat(r," detected buffering proxy")):t.stat===x.Stat.NOPROXY&&A(Ai,"RPC '".concat(e,"' stream ").concat(r," detected no buffering proxy"))})),setTimeout((function(){f.no()}),0),f}}]),r}(function(){"use strict";function e(n){t(o)(this,e),this.databaseInfo=n,this.databaseId=n.databaseId;var r=n.ssl?"https":"http";this.ro=r+"://"+n.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}return t(u)(e,[{key:"uo",get:function(){return!1}},{key:"co",value:function(e,t,n,r,i){var a=_i(),o=this.ao(e,t);A("RestConnection","Sending RPC '".concat(e,"' ").concat(a,":"),o,n);var s={};return this.ho(s,r,i),this.lo(e,o,s,n).then((function(t){return A("RestConnection","Received RPC '".concat(e,"' ").concat(a,": "),t),t}),(function(t){throw D("RestConnection","RPC '".concat(e,"' ").concat(a," failed with error: "),t,"url: ",o,"request:",n),t}))}},{key:"fo",value:function(e,t,n,r,i,a){return this.co(e,t,n,r,i)}},{key:"ho",value:function(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+_,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((function(t,n){return e[n]=t})),n&&n.headers.forEach((function(t,n){return e[n]=t}))}},{key:"ao",value:function(e,t){var n=Ti[e];return"".concat(this.ro,"/v1/").concat(t,":").concat(n)}}]),e}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e){return new hr(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oi=function(){"use strict";function e(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;t(o)(this,e),this.Ws=n,this.timerId=r,this._o=i,this.mo=a,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}return t(u)(e,[{key:"reset",value:function(){this.po=0}},{key:"Eo",value:function(){this.po=this.yo}},{key:"Ao",value:function(e){var t=this;this.cancel();var n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&A("ExponentialBackoff","Backing off for ".concat(i," ms (base delay: ").concat(this.po," ms, delay with jitter: ").concat(n," ms, last attempt: ").concat(r," ms ago)")),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,(function(){return t.To=Date.now(),e()})),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}},{key:"vo",value:function(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}},{key:"cancel",value:function(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}},{key:"Ro",value:function(){return(Math.random()-.5)*this.po}}]),e}(),Ri=function(){"use strict";function e(n,r,i,a,s,u,c,l){t(o)(this,e),this.Ws=n,this.bo=i,this.Po=a,this.connection=s,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Oi(n,r)}return t(u)(e,[{key:"xo",value:function(){return 1===this.state||5===this.state||this.No()}},{key:"No",value:function(){return 2===this.state||3===this.state}},{key:"start",value:function(){4!==this.state?this.auth():this.ko()}},{key:"stop",value:function(){var e=this;return t(i)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=e.xo(),!t.t0){t.next=4;break}return t.next=4,e.close(0);case 4:case"end":return t.stop()}}),n)})))()}},{key:"Oo",value:function(){this.state=0,this.Co.reset()}},{key:"$o",value:function(){var e=this;this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(function(){return e.Mo()})))}},{key:"Fo",value:function(e){this.Bo(),this.stream.send(e)}},{key:"Mo",value:function(){var e=this;return t(i)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.No()){t.next=2;break}return t.abrupt("return",e.close(0));case 2:case"end":return t.stop()}}),n)})))()}},{key:"Bo",value:function(){this.So&&(this.So.cancel(),this.So=null)}},{key:"Lo",value:function(){this.Do&&(this.Do.cancel(),this.Do=null)}},{key:"close",value:function(e,n){var r=this;return t(i)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.Bo(),r.Lo(),r.Co.cancel(),r.Vo++,4!==e?r.Co.reset():n&&n.code===P.RESOURCE_EXHAUSTED?(C(n.toString()),C("Using maximum backoff delay to prevent overloading the backend."),r.Co.Eo()):n&&n.code===P.UNAUTHENTICATED&&3!==r.state&&(r.authCredentialsProvider.invalidateToken(),r.appCheckCredentialsProvider.invalidateToken()),null!==r.stream&&(r.qo(),r.stream.close(),r.stream=null),r.state=e,t.next=9,r.listener.Zr(n);case 9:case"end":return t.stop()}}),i)})))()}},{key:"qo",value:function(){}},{key:"auth",value:function(){var e=this;this.state=1;var n=this.Uo(this.Vo),r=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((function(n){var i=t(d)(n,2),a=i[0],o=i[1];e.Vo===r&&e.Ko(a,o)}),(function(t){var r=e;n((function(){var e=new M(P.UNKNOWN,"Fetching auth token failed: "+t.message);return r.Go(e)}))}))}},{key:"Ko",value:function(e,t){var n=this,r=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr((function(){var e=n;r((function(){return e.state=2,e.Do=e.Ws.enqueueAfterDelay(e.Po,1e4,(function(){return e.No()&&(e.state=3),Promise.resolve()})),e.listener.Jr()}))})),this.stream.Zr((function(e){var t=n;r((function(){return t.Go(e)}))})),this.stream.onMessage((function(e){var t=n;r((function(){return t.onMessage(e)}))}))}},{key:"ko",value:function(){var e=this;this.state=5,this.Co.Ao(t(i)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.state=0,e.start();case 1:case"end":return t.stop()}}),n)}))))}},{key:"Go",value:function(e){return A("PersistentStream","close with error: ".concat(e)),this.stream=null,this.close(4,e)}},{key:"Uo",value:function(e){var t=this;return function(n){var r=t;t.Ws.enqueueAndForget((function(){return r.Vo===e?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())}))}}}]),e}(),Li=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a,s,u,c){var l;return t(o)(this,r),(l=n.call(this,e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,s,c)).serializer=u,t(f)(l)}return t(u)(r,[{key:"Qo",value:function(e,t){return this.connection.wo("Listen",e,t)}},{key:"onMessage",value:function(e){this.Co.reset();var t=function(e,t){var n,r;if("targetChange"in t){t.targetChange;var i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:O(),a=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(R(void 0===t||"string"==typeof t),Oe.fromBase64String(t||"")):(R(void 0===t||t instanceof Uint8Array),Oe.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,u=s&&function(e){var t=void 0===e.code?P.UNKNOWN:Yn(e.code);return new M(t,e.message||"")}(s);n=new rr(i,a,o,u||null)}else if("documentChange"in t){t.documentChange;var c=t.documentChange;c.document,c.document.name,c.document.updateTime;var l=kr(e,c.document.name),h=vr(c.document.updateTime),f=c.document.createTime?vr(c.document.createTime):J.min(),d=new rt({mapValue:{fields:c.document.fields}}),p=at.newFoundDocument(l,h,f,d),v=c.targetIds||[],y=c.removedTargetIds||[];n=new tr(v,y,p.key,p)}else if("documentDelete"in t){t.documentDelete;var m=t.documentDelete;m.document;var g=kr(e,m.document),k=m.readTime?vr(m.readTime):J.min(),w=at.newNoDocument(g,k),b=m.removedTargetIds||[];n=new tr([],b,w.key,w)}else if("documentRemove"in t){t.documentRemove;var x=t.documentRemove;x.document;var I=kr(e,x.document),E=x.removedTargetIds||[];n=new tr([],E,I,null)}else{if(!("filter"in t))return O();t.filter;var _=t.filter;_.targetId;var T=_.count||0,S=new Qn(T),A=_.targetId;n=new nr(A,S)}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return J.min();var t=e.targetChange;return t.targetIds&&t.targetIds.length?J.min():t.readTime?vr(t.readTime):J.min()}(e);return this.listener.zo(t,n)}},{key:"jo",value:function(e){var t,n,r,i,a={};a.database=xr(this.serializer),a.addTarget=(t=this.serializer,i=(n=e).target,(r=Ot(i)?{documents:Tr(t,i)}:{query:Sr(t,i)}).targetId=n.targetId,n.resumeToken.approximateByteSize()>0?r.resumeToken=dr(t,n.resumeToken):n.snapshotVersion.compareTo(J.min())>0&&(r.readTime=fr(t,n.snapshotVersion.toTimestamp())),r);var o=function(e,t){var n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);o&&(a.labels=o),this.Fo(a)}},{key:"Wo",value:function(e){var t={};t.database=xr(this.serializer),t.removeTarget=e,this.Fo(t)}}]),r}(Ri),Pi=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a,s,u,c){var l;return t(o)(this,r),(l=n.call(this,e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,s,c)).serializer=u,l.Ho=!1,t(f)(l)}return t(u)(r,[{key:"Jo",get:function(){return this.Ho}},{key:"start",value:function(){this.Ho=!1,this.lastStreamToken=void 0,t(c)(t(l)(r.prototype),"start",this).call(this)}},{key:"qo",value:function(){this.Ho&&this.Yo([])}},{key:"Qo",value:function(e,t){return this.connection.wo("Write",e,t)}},{key:"onMessage",value:function(e){if(R(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();var t=(r=e.writeResults,i=e.commitTime,r&&r.length>0?(R(void 0!==i),r.map((function(e){return n=i,(r=(t=e).updateTime?vr(t.updateTime):vr(n)).isEqual(J.min())&&(r=vr(n)),new Sn(r,t.transformResults||[]);var t,n,r}))):[]),n=vr(e.commitTime);return this.listener.Zo(n,t)}var r,i;return R(!e.writeResults||0===e.writeResults.length),this.Ho=!0,this.listener.Xo()}},{key:"tu",value:function(){var e={};e.database=xr(this.serializer),this.Fo(e)}},{key:"Yo",value:function(e){var t=this,n={streamToken:this.lastStreamToken,writes:e.map((function(e){return _r(t.serializer,e)}))};this.Fo(n)}}]),r}(Ri),Mi=function(e){"use strict";t(h)(r,(function e(){t(o)(this,e)}));var n=t(y)(r);function r(e,i,a,s){var u;return t(o)(this,r),(u=n.call(this)).authCredentials=e,u.appCheckCredentials=i,u.connection=a,u.serializer=s,u.eu=!1,t(f)(u)}return t(u)(r,[{key:"nu",value:function(){if(this.eu)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"co",value:function(e,n,r){var i=this;return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var o=t(d)(a,2),s=o[0],u=o[1];return i.connection.co(e,n,r,s,u)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===P.UNAUTHENTICATED&&(i.authCredentials.invalidateToken(),i.appCheckCredentials.invalidateToken()),e):new M(P.UNKNOWN,e.toString())}))}},{key:"fo",value:function(e,n,r,i){var a=this;return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(o){var s=t(d)(o,2),u=s[0],c=s[1];return a.connection.fo(e,n,r,u,c,i)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===P.UNAUTHENTICATED&&(a.authCredentials.invalidateToken(),a.appCheckCredentials.invalidateToken()),e):new M(P.UNKNOWN,e.toString())}))}},{key:"terminate",value:function(){this.eu=!0}}]),r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ui=function(){"use strict";function e(n,r){t(o)(this,e),this.asyncQueue=n,this.onlineStateHandler=r,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}return t(u)(e,[{key:"ou",value:function(){var e=this;0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(function(){return e.iu=null,e.cu("Backend didn't respond within 10 seconds."),e.uu("Offline"),Promise.resolve()})))}},{key:"au",value:function(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu("Connection failed 1 times. Most recent error: ".concat(e.toString())),this.uu("Offline")))}},{key:"set",value:function(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}},{key:"uu",value:function(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}},{key:"cu",value:function(e){var t="Could not reach Cloud Firestore backend. ".concat(e,"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");this.ru?(C(t),this.ru=!1):A("OnlineStateTracker",t)}},{key:"hu",value:function(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}]),e}(),Fi=function e(n,r,a,s,u){"use strict";var c=this;t(o)(this,e),this.localStore=n,this.datastore=r,this.asyncQueue=a,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=u,this._u.qr((function(e){var n=c;a.enqueueAndForget(t(i)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=Xi(n),!e.t0){e.next=5;break}return A("RemoteStore","Restarting streams for network reachability change."),e.next=5,function(){var e=t(i)(t(m).mark((function e(n){var r;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=L(n)).du.add(4),e.next=4,Bi(r);case 4:return r.mu.set("Unknown"),r.du.delete(4),e.next=8,Vi(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(n);case 5:case"end":return e.stop()}}),e)}))))})),this.mu=new Ui(a,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e){return ji.apply(this,arguments)}function ji(){return(ji=t(i)(t(m).mark((function e(n){var r,i,a,o,s,u;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!0,i=!1,a=void 0,!Xi(n)){e.next=25;break}e.prev=2,o=n.wu[Symbol.iterator]();case 4:if(r=(s=o.next()).done){e.next=11;break}return u=s.value,e.next=8,u(!0);case 8:r=!0,e.next=4;break;case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),i=!0,a=e.t0;case 17:e.prev=17,e.prev=18,r||null==o.return||o.return();case 20:if(e.prev=20,!i){e.next=23;break}throw a;case 23:return e.finish(20);case 24:return e.finish(17);case 25:case"end":return e.stop()}}),e,null,[[2,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function Bi(e){return qi.apply(this,arguments)}function qi(){return(qi=t(i)(t(m).mark((function e(n){var r,i,a,o,s,u;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,i=!1,a=void 0,e.prev=1,o=n.wu[Symbol.iterator]();case 3:if(r=(s=o.next()).done){e.next=10;break}return u=s.value,e.next=7,u(!1);case 7:r=!0,e.next=3;break;case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),i=!0,a=e.t0;case 16:e.prev=16,e.prev=17,r||null==o.return||o.return();case 19:if(e.prev=19,!i){e.next=22;break}throw a;case 22:return e.finish(19);case 23:return e.finish(16);case 24:case"end":return e.stop()}}),e,null,[[1,12,16,24],[17,,19,23]])})))).apply(this,arguments)}function zi(e,t){var n=L(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),Qi(n)?Wi(n):Ea(n).No()&&Hi(n,t))}function Ki(e,t){var n=L(e),r=Ea(n);n.fu.delete(t),r.No()&&Gi(n,t),0===n.fu.size&&(r.No()?r.$o():Xi(n)&&n.mu.set("Unknown"))}function Hi(e,t){e.gu.Ot(t.targetId),Ea(e).jo(t)}function Gi(e,t){e.gu.Ot(t),Ea(e).Wo(t)}function Wi(e){e.gu=new ar({getRemoteKeysForTarget:function(t){return e.remoteSyncer.getRemoteKeysForTarget(t)},ne:function(t){return e.fu.get(t)||null}}),Ea(e).start(),e.mu.ou()}function Qi(e){return Xi(e)&&!Ea(e).xo()&&e.fu.size>0}function Xi(e){return 0===L(e).du.size}function Yi(e){e.gu=void 0}function Ji(e){return $i.apply(this,arguments)}function $i(){return($i=t(i)(t(m).mark((function e(n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.fu.forEach((function(e,t){Hi(n,e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Zi(e,t){return ea.apply(this,arguments)}function ea(){return(ea=t(i)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Yi(n),Qi(n)?(n.mu.au(r),Wi(n)):n.mu.set("Unknown");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ta(e,t,n){return na.apply(this,arguments)}function na(){return na=t(i)(t(m).mark((function e(n,r,a){var o;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.mu.set("Online"),!(r instanceof rr&&2===r.state&&r.cause)){e.next=13;break}return e.prev=1,e.next=4,function(){var e=t(i)(t(m).mark((function e(n,r){var i,a,o,s,u,c,l;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.cause,a=!0,o=!1,s=void 0,e.prev=2,u=r.targetIds[Symbol.iterator]();case 4:if(a=(c=u.next()).done){e.next=15;break}if(l=c.value,e.t0=n.fu.has(l),!e.t0){e.next=12;break}return e.next=10,n.remoteSyncer.rejectListen(l,i);case 10:n.fu.delete(l),n.gu.removeTarget(l);case 12:a=!0,e.next=4;break;case 15:e.next=21;break;case 17:e.prev=17,e.t1=e.catch(2),o=!0,s=e.t1;case 21:e.prev=21,e.prev=22,a||null==u.return||u.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:case"end":return e.stop()}}),e,null,[[2,17,21,29],[22,,24,28]])})));return function(t,n){return e.apply(this,arguments)}}()(n,r);case 4:e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(1),A("RemoteStore","Failed to remove targets %s: %s ",r.targetIds.join(","),e.t0),e.next=11,ra(n,e.t0);case 11:case 22:e.next=29;break;case 13:if(r instanceof tr?n.gu.Kt(r):r instanceof nr?n.gu.Jt(r):n.gu.zt(r),a.isEqual(J.min())){e.next=29;break}return e.prev=14,e.next=17,hi(n.localStore);case 17:if(o=e.sent,e.t1=a.compareTo(o)>=0,!e.t1){e.next=22;break}return e.next=22,function(e,t){var n=e.gu.Xt(t);return n.targetChanges.forEach((function(n,r){if(n.resumeToken.approximateByteSize()>0){var i=e.fu.get(r);i&&e.fu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((function(t){var n=e.fu.get(t);if(n){e.fu.set(t,n.withResumeToken(Oe.EMPTY_BYTE_STRING,n.snapshotVersion)),Gi(e,t);var r=new Mr(n.target,t,1,n.sequenceNumber);Hi(e,r)}})),e.remoteSyncer.applyRemoteEvent(n)}(n,a);case 24:return e.prev=24,e.t2=e.catch(14),A("RemoteStore","Failed to raise snapshot:",e.t2),e.next=29,ra(n,e.t2);case 29:case"end":return e.stop()}}),e,null,[[1,6],[14,24]])}))),na.apply(this,arguments)}function ra(e,t,n){return ia.apply(this,arguments)}function ia(){return(ia=t(i)(t(m).mark((function e(n,r,a){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(de(r)){e.next=2;break}throw r;case 2:return n.du.add(1),e.next=5,Bi(n);case 5:n.mu.set("Offline"),a||(a=function(){return hi(n.localStore)}),n.asyncQueue.enqueueRetryable(t(i)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A("RemoteStore","Retrying IndexedDB access"),e.next=3,a();case 3:return n.du.delete(1),e.next=6,Vi(n);case 6:case"end":return e.stop()}}),e)}))));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function aa(e,t){return t().catch((function(n){return ra(e,n,t)}))}function oa(e){return sa.apply(this,arguments)}function sa(){return(sa=t(i)(t(m).mark((function e(n){var r,i,a,o;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=L(n),i=_a(r),a=r.lu.length>0?r.lu[r.lu.length-1].batchId:-1;case 2:if(!ua(r)){e.next=19;break}return e.prev=3,e.next=6,pi(r.localStore,a);case 6:if(null!==(o=e.sent)){e.next=10;break}return 0===r.lu.length&&i.$o(),e.abrupt("break",19);case 10:a=o.batchId,ca(r,o),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(3),e.next=17,ra(r,e.t0);case 17:e.next=2;break;case 19:la(r)&&ha(r);case 20:case"end":return e.stop()}}),e,null,[[3,13]])})))).apply(this,arguments)}function ua(e){return Xi(e)&&e.lu.length<10}function ca(e,t){e.lu.push(t);var n=_a(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function la(e){return Xi(e)&&!_a(e).xo()&&e.lu.length>0}function ha(e){_a(e).start()}function fa(e){return da.apply(this,arguments)}function da(){return(da=t(i)(t(m).mark((function e(n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_a(n).tu();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pa(e){return va.apply(this,arguments)}function va(){return(va=t(i)(t(m).mark((function e(n){var r,i,a,o,s,u,c;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=_a(n),i=!0,a=!1,o=void 0,e.prev=2,s=n.lu[Symbol.iterator]();!(i=(u=s.next()).done);i=!0)c=u.value,r.Yo(c.mutations);e.next=10;break;case 6:e.prev=6,e.t0=e.catch(2),a=!0,o=e.t0;case 10:e.prev=10,e.prev=11,i||null==s.return||s.return();case 13:if(e.prev=13,!a){e.next=16;break}throw o;case 16:return e.finish(13);case 17:return e.finish(10);case 18:case"end":return e.stop()}}),e,null,[[2,6,10,18],[11,,13,17]])})))).apply(this,arguments)}function ya(e,t,n){return ma.apply(this,arguments)}function ma(){return(ma=t(i)(t(m).mark((function e(n,r,i){var a,o;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.lu.shift(),o=Gn.from(a,r,i),e.next=3,aa(n,(function(){return n.remoteSyncer.applySuccessfulWrite(o)}));case 3:return e.next=5,oa(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ga(e,t){return ka.apply(this,arguments)}function ka(){return ka=t(i)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r&&_a(n).Jo,!e.t0){e.next=4;break}return e.next=4,function(){var e=t(i)(t(m).mark((function e(n,r){var i,a;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Xn(a=r.code)||a===P.ABORTED){e.next=7;break}return i=n.lu.shift(),_a(n).Oo(),e.next=5,aa(n,(function(){return n.remoteSyncer.rejectFailedWrite(i.batchId,r)}));case 5:return e.next=7,oa(n);case 7:case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()(n,r);case 4:la(n)&&ha(n);case 5:case"end":return e.stop()}}),e)}))),ka.apply(this,arguments)}function wa(e,t){return ba.apply(this,arguments)}function ba(){return(ba=t(i)(t(m).mark((function e(n,r){var i,a;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=L(n)).asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials"),a=Xi(i),i.du.add(3),e.next=6,Bi(i);case 6:return a&&i.mu.set("Unknown"),e.next=9,i.remoteSyncer.handleCredentialChange(r);case 9:return i.du.delete(3),e.next=12,Vi(i);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xa(e,t){return Ia.apply(this,arguments)}function Ia(){return(Ia=t(i)(t(m).mark((function e(n,r){var i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=L(n),!r){e.next=7;break}return i.du.delete(2),e.next=5,Vi(i);case 5:e.next=13;break;case 7:if(e.t0=r,e.t0){e.next=13;break}return i.du.add(2),e.next=12,Bi(i);case 12:i.mu.set("Unknown");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ea(e){return e.yu||(e.yu=(r=e.datastore,a=e.asyncQueue,o={Jr:Ji.bind(null,e),Zr:Zi.bind(null,e),zo:ta.bind(null,e)},(s=L(r)).nu(),new Li(a,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)),e.wu.push((n=t(i)(t(m).mark((function n(r){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=4;break}e.yu.Oo(),Qi(e)?Wi(e):e.mu.set("Unknown"),t.next=7;break;case 4:return t.next=6,e.yu.stop();case 6:Yi(e);case 7:case"end":return t.stop()}}),n)}))),function(e){return n.apply(this,arguments)}))),e.yu;var n,r,a,o,s}function _a(e){return e.pu||(e.pu=(r=e.datastore,a=e.asyncQueue,o={Jr:fa.bind(null,e),Zr:ga.bind(null,e),Xo:pa.bind(null,e),Zo:ya.bind(null,e)},(s=L(r)).nu(),new Pi(a,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)),e.wu.push((n=t(i)(t(m).mark((function n(r){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=6;break}return e.pu.Oo(),t.next=4,oa(e);case 4:t.next=9;break;case 6:return t.next=8,e.pu.stop();case 8:e.lu.length>0&&(A("RemoteStore","Stopping write stream with ".concat(e.lu.length," pending writes")),e.lu=[]);case 9:case"end":return t.stop()}}),n)}))),function(e){return n.apply(this,arguments)}))),e.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;var n,r,a,o,s}var Ta=function(){"use strict";function e(n,r,i,a,s){t(o)(this,e),this.asyncQueue=n,this.timerId=r,this.targetTimeMs=i,this.op=a,this.removalCallback=s,this.deferred=new U,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((function(e){}))}return t(u)(e,[{key:"start",value:function(e){var t=this;this.timerHandle=setTimeout((function(){return t.handleDelayElapsed()}),e)}},{key:"skipDelay",value:function(){return this.handleDelayElapsed()}},{key:"cancel",value:function(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new M(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}},{key:"handleDelayElapsed",value:function(){var e=this;this.asyncQueue.enqueueAndForget((function(){return null!==e.timerHandle?(e.clearTimeout(),e.op().then((function(t){return e.deferred.resolve(t)}))):Promise.resolve()}))}},{key:"clearTimeout",value:function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}],[{key:"createAndSchedule",value:function(t,n,r,i,a){var o=new e(t,n,Date.now()+r,i,a);return o.start(r),o}}]),e}();function Sa(e,t){if(C("AsyncQueue","".concat(t,": ").concat(e)),de(e))return new M(P.UNAVAILABLE,"".concat(t,": ").concat(e));throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Aa=function(){"use strict";function e(n){t(o)(this,e),this.comparator=n?function(e,t){return n(e,t)||ne.comparator(e.key,t.key)}:function(e,t){return ne.comparator(e.key,t.key)},this.keyedMap=en(),this.sortedSet=new Ee(this.comparator)}return t(u)(e,[{key:"has",value:function(e){return null!=this.keyedMap.get(e)}},{key:"get",value:function(e){return this.keyedMap.get(e)}},{key:"first",value:function(){return this.sortedSet.minKey()}},{key:"last",value:function(){return this.sortedSet.maxKey()}},{key:"isEmpty",value:function(){return this.sortedSet.isEmpty()}},{key:"indexOf",value:function(e){var t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}},{key:"size",get:function(){return this.sortedSet.size}},{key:"forEach",value:function(e){this.sortedSet.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"add",value:function(e){var t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}},{key:"delete",value:function(e){var t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}},{key:"isEqual",value:function(t){if(!(t instanceof e))return!1;if(this.size!==t.size)return!1;for(var n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}},{key:"copy",value:function(t,n){var r=new e;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}],[{key:"emptySet",value:function(t){return new e(t.comparator)}}]),e}(),Ca=function(){"use strict";function e(){t(o)(this,e),this.Iu=new Ee(ne.comparator)}return t(u)(e,[{key:"track",value:function(e){var t=e.doc.key,n=this.Iu.get(t);n?0!==e.type&&3===n.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==n.type?this.Iu=this.Iu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Iu=this.Iu.remove(t):1===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):O():this.Iu=this.Iu.insert(t,e)}},{key:"Tu",value:function(){var e=[];return this.Iu.inorderTraversal((function(t,n){e.push(n)})),e}}]),e}(),Da=function(){"use strict";function e(n,r,i,a,s,u,c,l,h){t(o)(this,e),this.query=n,this.docs=r,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=s,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}return t(u)(e,[{key:"hasPendingWrites",get:function(){return!this.mutatedKeys.isEmpty()}},{key:"isEqual",value:function(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;var t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(var r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}],[{key:"fromInitialDocuments",value:function(t,n,r,i,a){var o=[];return n.forEach((function(e){o.push({type:0,doc:e})})),new e(t,n,Aa.emptySet(n),o,r,i,!0,!1,a)}}]),e}(),Na=function e(){"use strict";t(o)(this,e),this.Eu=void 0,this.listeners=[]},Oa=function e(){"use strict";t(o)(this,e),this.queries=new Yt((function(e){return Kt(e)}),zt),this.onlineState="Unknown",this.Au=new Set};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(e,t){return La.apply(this,arguments)}function La(){return(La=t(i)(t(m).mark((function e(n,r){var i,a,o,s,u;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=L(n),a=r.query,o=!1,(s=i.queries.get(a))||(o=!0,s=new Na),!o){e.next=13;break}return e.prev=3,e.next=6,i.onListen(a);case 6:s.Eu=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),u=Sa(e.t0,"Initialization of query '".concat(Ht(r.query),"' failed")),e.abrupt("return",void r.onError(u));case 13:i.queries.set(a,s),s.listeners.push(r),r.Ru(i.onlineState),s.Eu&&r.vu(s.Eu)&&Va(i);case 14:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}function Pa(e,t){return Ma.apply(this,arguments)}function Ma(){return(Ma=t(i)(t(m).mark((function e(n,r){var i,a,o,s,u;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=L(n),a=r.query,o=!1,(s=i.queries.get(a))&&(u=s.listeners.indexOf(r))>=0&&(s.listeners.splice(u,1),o=0===s.listeners.length),!o){e.next=6;break}return e.abrupt("return",(i.queries.delete(a),i.onUnlisten(a)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ua(e,t){var n=L(e),r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.query,h=n.queries.get(l);if(h){var f=!0,d=!1,p=void 0;try{for(var v,y=h.listeners[Symbol.iterator]();!(f=(v=y.next()).done);f=!0){v.value.vu(c)&&(r=!0)}}catch(e){d=!0,p=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw p}}h.Eu=c}}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}r&&Va(n)}function Fa(e,t,n){var r=L(e),i=r.queries.get(t),a=!0,o=!1,s=void 0;if(i)try{for(var u,c=i.listeners[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){u.value.onError(n)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}r.queries.delete(t)}function Va(e){e.Au.forEach((function(e){e.next()}))}var ja=function(){"use strict";function e(n,r,i){t(o)(this,e),this.query=n,this.bu=r,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}return t(u)(e,[{key:"vu",value:function(e){if(!this.options.includeMetadataChanges){var t=[],n=!0,r=!1,i=void 0;try{for(var a,o=e.docChanges[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;3!==s.type&&t.push(s)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}e=new Da(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}var u=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),u=!0):this.Du(e,this.onlineState)&&(this.Cu(e),u=!0),this.Vu=e,u}},{key:"onError",value:function(e){this.bu.error(e)}},{key:"Ru",value:function(e){this.onlineState=e;var t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}},{key:"Du",value:function(e,t){if(!e.fromCache)return!0;var n="Offline"!==t;return(!this.options.xu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}},{key:"Su",value:function(e){if(e.docChanges.length>0)return!0;var t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}},{key:"Cu",value:function(e){e=Da.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ba=function e(n){"use strict";t(o)(this,e),this.key=n},qa=function e(n){"use strict";t(o)(this,e),this.key=n},za=function(){"use strict";function e(n,r){t(o)(this,e),this.query=n,this.Lu=r,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=un(),this.mutatedKeys=un(),this.Ku=Qt(n),this.Gu=new Aa(this.Ku)}return t(u)(e,[{key:"Qu",get:function(){return this.Lu}},{key:"zu",value:function(e,t){var n=this,r=t?t.ju:new Ca,i=t?t.Gu:this.Gu,a=t?t.mutatedKeys:this.mutatedKeys,o=i,s=!1,u="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((function(e,t){var l=i.get(e),h=Gt(n.query,t)?t:null,f=!!l&&n.mutatedKeys.has(l.key),d=!!h&&(h.hasLocalMutations||n.mutatedKeys.has(h.key)&&h.hasCommittedMutations),p=!1;l&&h?l.data.isEqual(h.data)?f!==d&&(r.track({type:3,doc:h}),p=!0):n.Wu(l,h)||(r.track({type:2,doc:h}),p=!0,(u&&n.Ku(h,u)>0||c&&n.Ku(h,c)<0)&&(s=!0)):!l&&h?(r.track({type:0,doc:h}),p=!0):l&&!h&&(r.track({type:1,doc:l}),p=!0,(u||c)&&(s=!0)),p&&(h?(o=o.add(h),a=d?a.add(e):a.delete(e)):(o=o.delete(e),a=a.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){var l="F"===this.query.limitType?o.last():o.first();o=o.delete(l.key),a=a.delete(l.key),r.track({type:1,doc:l})}return{Gu:o,ju:r,Mi:s,mutatedKeys:a}}},{key:"Wu",value:function(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}},{key:"applyChanges",value:function(e,t,n){var r=this,i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;var a=e.ju.Tu();a.sort((function(e,t){return n=e.type,i=t.type,(a=function(e){switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}})(n)-a(i)||r.Ku(e.doc,t.doc);var n,i,a})),this.Hu(n);var o=t?this.Ju():[],s=0===this.Uu.size&&this.current?1:0,u=s!==this.qu;return this.qu=s,0!==a.length||u?{snapshot:new Da(this.query,e.Gu,i,a,e.mutatedKeys,0===s,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}},{key:"Ru",value:function(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Ca,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}},{key:"Zu",value:function(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}},{key:"Hu",value:function(e){var t=this;e&&(e.addedDocuments.forEach((function(e){return t.Lu=t.Lu.add(e)})),e.modifiedDocuments.forEach((function(e){})),e.removedDocuments.forEach((function(e){return t.Lu=t.Lu.delete(e)})),this.current=e.current)}},{key:"Ju",value:function(){var e=this;if(!this.current)return[];var t=this.Uu;this.Uu=un(),this.Gu.forEach((function(t){e.Zu(t.key)&&(e.Uu=e.Uu.add(t.key))}));var n=[];return t.forEach((function(t){e.Uu.has(t)||n.push(new qa(t))})),this.Uu.forEach((function(e){t.has(e)||n.push(new Ba(e))})),n}},{key:"Xu",value:function(e){this.Lu=e.Wi,this.Uu=un();var t=this.zu(e.documents);return this.applyChanges(t,!0)}},{key:"tc",value:function(){return Da.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}]),e}(),Ka=function e(n,r,i){"use strict";t(o)(this,e),this.query=n,this.targetId=r,this.view=i},Ha=function e(n){"use strict";t(o)(this,e),this.key=n,this.ec=!1},Ga=function(){"use strict";function e(n,r,i,a,s,u){t(o)(this,e),this.localStore=n,this.remoteStore=r,this.eventManager=i,this.sharedClientState=a,this.currentUser=s,this.maxConcurrentLimboResolutions=u,this.nc={},this.sc=new Yt((function(e){return Kt(e)}),zt),this.ic=new Map,this.rc=new Set,this.oc=new Ee(ne.comparator),this.uc=new Map,this.cc=new Xr,this.ac={},this.hc=new Map,this.lc=zr.bn(),this.onlineState="Unknown",this.fc=void 0}return t(u)(e,[{key:"isPrimaryClient",get:function(){return!0===this.fc}}]),e}();function Wa(e,t){return Qa.apply(this,arguments)}function Qa(){return(Qa=t(i)(t(m).mark((function e(n,r){var i,a,o,s,u,c;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Io(n),!(s=i.sc.get(r))){e.next=7;break}a=s.targetId,i.sharedClientState.addLocalQueryTarget(a),o=s.view.tc(),e.next=16;break;case 7:return e.next=9,vi(i.localStore,Bt(r));case 9:return u=e.sent,i.isPrimaryClient&&zi(i.remoteStore,u),c=i.sharedClientState.addLocalQueryTarget(u.targetId),a=u.targetId,e.next=15,Xa(i,r,a,"current"===c,u.resumeToken);case 15:o=e.sent;case 16:return e.abrupt("return",o);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xa(e,t,n,r,i){return Ya.apply(this,arguments)}function Ya(){return Ya=t(i)(t(m).mark((function e(n,r,a,o,s){var u,c,l,h,f,d;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dc=function(e,r,a){return(o=t(i)(t(m).mark((function e(n,r,i,a){var o,s,u;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.view.zu(i),e.t0=o.Mi,!e.t0){e.next=6;break}return e.next=5,gi(n.localStore,r.query,!1).then((function(e){var t=e.documents;return r.view.zu(t,o)}));case 5:o=e.sent;case 6:return s=a&&a.targetChanges.get(r.targetId),u=r.view.applyChanges(o,n.isPrimaryClient,s),e.abrupt("return",(vo(n,r.targetId,u.Yu),u.snapshot));case 8:case"end":return e.stop()}}),e)}))),function(e,t,n,r){return o.apply(this,arguments)})(n,e,r,a);var o},e.next=3,gi(n.localStore,r,!0);case 3:return u=e.sent,c=new za(r,u.Wi),l=c.zu(u.documents),h=er.createSynthesizedTargetChangeForCurrentChange(a,o&&"Offline"!==n.onlineState,s),f=c.applyChanges(l,n.isPrimaryClient,h),vo(n,a,f.Yu),d=new Ka(r,a,c),e.abrupt("return",(n.sc.set(r,d),n.ic.has(a)?n.ic.get(a).push(r):n.ic.set(a,[r]),f.snapshot));case 11:case"end":return e.stop()}}),e)}))),Ya.apply(this,arguments)}function Ja(e,t){return $a.apply(this,arguments)}function $a(){return($a=t(i)(t(m).mark((function e(n,r){var i,a,o;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=L(n),a=i.sc.get(r),!((o=i.ic.get(a.targetId)).length>1)){e.next=3;break}return e.abrupt("return",(i.ic.set(a.targetId,o.filter((function(e){return!zt(e,r)}))),void i.sc.delete(r)));case 3:if(!i.isPrimaryClient){e.next=11;break}if(i.sharedClientState.removeLocalQueryTarget(a.targetId),e.t0=i.sharedClientState.isActiveQueryTarget(a.targetId),e.t0){e.next=9;break}return e.next=9,yi(i.localStore,a.targetId,!1).then((function(){i.sharedClientState.clearQueryState(a.targetId),Ki(i.remoteStore,a.targetId),fo(i,a.targetId)})).catch(le);case 9:e.next=14;break;case 11:return fo(i,a.targetId),e.next=14,yi(i.localStore,a.targetId,!0);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Za(e,t,n){return eo.apply(this,arguments)}function eo(){return(eo=t(i)(t(m).mark((function e(n,r,i){var a,o,s;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Eo(n),e.prev=1,e.next=4,function(e,t){var n,r,i=L(e),a=Y.now(),o=t.reduce((function(e,t){return e.add(t.key)}),un());return i.persistence.runTransaction("Locally write mutations","readwrite",(function(e){var s=$t(),u=un();return i.Ki.getEntries(e,o).next((function(e){(s=e).forEach((function(e,t){t.isValidDocument()||(u=u.add(e))}))})).next((function(){return i.localDocuments.getOverlayedDocuments(e,s)})).next((function(r){n=r;var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value,d=Ln(f,n.get(f.key).overlayedDocument);null!=d&&o.push(new Un(f.key,d,it(d.value.mapValue),An.exists(!0)))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return i.mutationQueue.addMutationBatch(e,a,o,t)})).next((function(t){r=t;var a=t.applyToLocalDocumentSet(n,u);return i.documentOverlayCache.saveOverlays(e,t.batchId,a)}))})).then((function(){return{batchId:r.batchId,changes:tn(n)}}))}(a.localStore,r);case 4:return o=e.sent,a.sharedClientState.addPendingMutation(o.batchId),t=a,u=o.batchId,c=i,l=void 0,(l=t.ac[t.currentUser.toKey()])||(l=new Ee(Q)),l=l.insert(u,c),t.ac[t.currentUser.toKey()]=l,e.next=9,go(a,o.changes);case 9:return e.next=11,oa(a.remoteStore);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),s=Sa(e.t0,"Failed to persist write"),i.reject(s);case 17:case"end":return e.stop()}var t,u,c,l}),e,null,[[1,13]])})))).apply(this,arguments)}function to(e,t){return no.apply(this,arguments)}function no(){return(no=t(i)(t(m).mark((function e(n,r){var i,a;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=L(n),e.prev=1,e.next=4,fi(i.localStore,r);case 4:return a=e.sent,r.targetChanges.forEach((function(e,t){var n=i.uc.get(t);n&&(R(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?n.ec=!0:e.modifiedDocuments.size>0?R(n.ec):e.removedDocuments.size>0&&(R(n.ec),n.ec=!1))})),e.next=8,go(i,a,r);case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,le(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function ro(e,t,n){var r=L(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){var i=[];r.sc.forEach((function(e,n){var r=n.view.Ru(t);r.snapshot&&i.push(r.snapshot)})),function(e,t){var n=L(e);n.onlineState=t;var r=!1;n.queries.forEach((function(e,n){var i=!0,a=!1,o=void 0;try{for(var s,u=n.listeners[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){s.value.Ru(t)&&(r=!0)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}})),r&&Va(n)}(r.eventManager,t),i.length&&r.nc.zo(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}function io(e,t,n){return ao.apply(this,arguments)}function ao(){return(ao=t(i)(t(m).mark((function e(n,r,i){var a,o,s,u,c,l;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=L(n)).sharedClientState.updateQueryState(r,"rejected",i),o=a.uc.get(r),!(s=o&&o.key)){e.next=14;break}return u=(u=new Ee(ne.comparator)).insert(s,at.newNoDocument(s,J.min())),c=un().add(s),l=new Zn(J.min(),new Map,new Se(Q),u,c),e.next=9,to(a,l);case 9:a.oc=a.oc.remove(s),a.uc.delete(r),mo(a),e.next=16;break;case 14:return e.next=16,yi(a.localStore,r,!1).then((function(){return fo(a,r,i)})).catch(le);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oo(e,t){return so.apply(this,arguments)}function so(){return(so=t(i)(t(m).mark((function e(n,r){var i,a,o;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=L(n),a=r.batch.batchId,e.prev=1,e.next=4,li(i.localStore,r);case 4:return o=e.sent,ho(i,a,null),lo(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),e.next=10,go(i,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,le(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function uo(e,t,n){return co.apply(this,arguments)}function co(){return(co=t(i)(t(m).mark((function e(n,r,i){var a,o;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=L(n),e.prev=1,e.next=4,function(e,t){var n=L(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(function(e){var r;return n.mutationQueue.lookupMutationBatch(e,t).next((function(t){return R(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)})).next((function(){return n.localDocuments.getDocuments(e,r)}))}))}(a.localStore,r);case 4:return o=e.sent,ho(a,r,i),lo(a,r),a.sharedClientState.updateMutationState(r,"rejected",i),e.next=10,go(a,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,le(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function lo(e,t){(e.hc.get(t)||[]).forEach((function(e){e.resolve()})),e.hc.delete(t)}function ho(e,t,n){var r=L(e),i=r.ac[r.currentUser.toKey()];if(i){var a=i.get(t);a&&(n?a.reject(n):a.resolve(),i=i.remove(t)),r.ac[r.currentUser.toKey()]=i}}function fo(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.sharedClientState.removeLocalQueryTarget(t);var r=!0,i=!1,a=void 0;try{for(var o,s=e.ic.get(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;e.sc.delete(u),n&&e.nc.wc(u,n)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach((function(t){e.cc.containsKey(t)||po(e,t)}))}function po(e,t){e.rc.delete(t.path.canonicalString());var n=e.oc.get(t);null!==n&&(Ki(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),mo(e))}function vo(e,t,n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;u instanceof Ba?(e.cc.addReference(u.key,t),yo(e,u)):u instanceof qa?(A("SyncEngine","Document no longer in limbo: "+u.key),e.cc.removeReference(u.key,t),e.cc.containsKey(u.key)||po(e,u.key)):O()}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}function yo(e,t){var n=t.key,r=n.path.canonicalString();e.oc.get(n)||e.rc.has(r)||(A("SyncEngine","New document in limbo: "+n),e.rc.add(r),mo(e))}function mo(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){var t=e.rc.values().next().value;e.rc.delete(t);var n=new ne(Z.fromString(t)),r=e.lc.next();e.uc.set(r,new Ha(n)),e.oc=e.oc.insert(n,r),zi(e.remoteStore,new Mr(Bt(Pt(n.path)),r,2,pe.ct))}}function go(e,t,n){return ko.apply(this,arguments)}function ko(){return ko=t(i)(t(m).mark((function e(n,r,a){var o,s,u,c;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=L(n),s=[],u=[],c=[],e.t0=o.sc.isEmpty(),e.t0){e.next=9;break}return o.sc.forEach((function(e,t){c.push(o.dc(t,r,a).then((function(e){if((e||a)&&o.isPrimaryClient&&o.sharedClientState.updateQueryState(t.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);var n=ii.Di(t.targetId,e);u.push(n)}})))})),e.next=6,Promise.all(c);case 6:return o.nc.zo(s),e.next=9,function(){var e=t(i)(t(m).mark((function e(n,r){var i,a,o,s,u,c,l,h,f,d,p;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=L(n),e.prev=1,e.next=4,i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(function(e){return fe.forEach(r,(function(t){return fe.forEach(t.Vi,(function(n){return i.persistence.referenceDelegate.addReference(e,t.targetId,n)})).next((function(){return fe.forEach(t.Si,(function(n){return i.persistence.referenceDelegate.removeReference(e,t.targetId,n)}))}))}))}));case 4:e.next=11;break;case 6:if(e.prev=6,e.t0=e.catch(1),de(e.t0)){e.next=10;break}throw e.t0;case 10:A("LocalStore","Failed to update sequence numbers: "+e.t0);case 11:for(a=!0,o=!1,s=void 0,e.prev=12,u=r[Symbol.iterator]();!(a=(c=u.next()).done);a=!0)l=c.value,h=l.targetId,l.fromCache||(f=i.Li.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d),i.Li=i.Li.insert(h,p));e.next=20;break;case 16:e.prev=16,e.t1=e.catch(12),o=!0,s=e.t1;case 20:e.prev=20,e.prev=21,a||null==u.return||u.return();case 23:if(e.prev=23,!o){e.next=26;break}throw s;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}}),e,null,[[1,6],[12,16,20,28],[21,,23,27]])})));return function(t,n){return e.apply(this,arguments)}}()(o.localStore,u);case 9:case"end":return e.stop()}}),e)}))),ko.apply(this,arguments)}function wo(e,t){return bo.apply(this,arguments)}function bo(){return(bo=t(i)(t(m).mark((function e(n,r){var i,a;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=L(n)).currentUser.isEqual(r)){e.next=11;break}return A("SyncEngine","User change. New user:",r.toKey()),e.next=5,ui(i.localStore,r);case 5:return a=e.sent,i.currentUser=r,(t=i).hc.forEach((function(e){e.forEach((function(e){e.reject(new M(P.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.hc.clear(),i.sharedClientState.handleUserChange(r,a.removedBatchIds,a.addedBatchIds),e.next=11,go(i,a.Qi);case 11:case"end":return e.stop()}var t}),e)})))).apply(this,arguments)}function xo(e,t){var n=L(e),r=n.uc.get(t);if(r&&r.ec)return un().add(r.key);var i=un(),a=n.ic.get(t);if(!a)return i;var o=!0,s=!1,u=void 0;try{for(var c,l=a[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value,f=n.sc.get(h);i=i.unionWith(f.view.Qu)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return i}function Io(e){var t=L(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=to.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xo.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=io.bind(null,t),t.nc.zo=Ua.bind(null,t.eventManager),t.nc.wc=Fa.bind(null,t.eventManager),t}function Eo(e){var t=L(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=oo.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=uo.bind(null,t),t}var _o=function(){"use strict";function e(){t(o)(this,e),this.synchronizeTabs=!1}return t(u)(e,[{key:"initialize",value:function(e){var n=this;return t(i)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.serializer=Ni(e.databaseInfo.databaseId),n.sharedClientState=n.createSharedClientState(e),n.persistence=n.createPersistence(e),t.next=5,n.persistence.start();case 5:n.localStore=n.createLocalStore(e),n.gcScheduler=n.createGarbageCollectionScheduler(e,n.localStore),n.indexBackfillerScheduler=n.createIndexBackfillerScheduler(e,n.localStore);case 8:case"end":return t.stop()}}),r)})))()}},{key:"createGarbageCollectionScheduler",value:function(e,t){return null}},{key:"createIndexBackfillerScheduler",value:function(e,t){return null}},{key:"createLocalStore",value:function(e){return si(this.persistence,new ai,e.initialUser,this.serializer)}},{key:"createPersistence",value:function(e){return new ti(ri.Fs,this.serializer)}},{key:"createSharedClientState",value:function(e){return new bi}},{key:"terminate",value:function(){var e=this;return t(i)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.gcScheduler&&e.gcScheduler.stop(),t.next=3,e.sharedClientState.shutdown();case 3:return t.next=5,e.persistence.shutdown();case 5:case"end":return t.stop()}}),n)})))()}}]),e}(),To=function(){"use strict";function e(){t(o)(this,e)}return t(u)(e,[{key:"initialize",value:function(e,n){var r=this;return t(i)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r.localStore,t.t0){t.next=12;break}return r.localStore=e.localStore,r.sharedClientState=e.sharedClientState,r.datastore=r.createDatastore(n),r.remoteStore=r.createRemoteStore(n),r.eventManager=r.createEventManager(n),r.syncEngine=r.createSyncEngine(n,!e.synchronizeTabs),r.sharedClientState.onlineStateHandler=function(e){return ro(r.syncEngine,e,1)},r.remoteStore.remoteSyncer.handleCredentialChange=wo.bind(null,r.syncEngine),t.next=12,xa(r.remoteStore,r.syncEngine.isPrimaryClient);case 12:case"end":return t.stop()}}),i)})))()}},{key:"createEventManager",value:function(e){return new Oa}},{key:"createDatastore",value:function(e){var t,n,r,i=Ni(e.databaseInfo.databaseId),a=(t=e.databaseInfo,new Ci(t));return n=e.authCredentials,r=e.appCheckCredentials,new Mi(n,r,a,i)}},{key:"createRemoteStore",value:function(e){var t,n,r,i,a,o=this;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=function(e){return ro(o.syncEngine,e,0)},a=Ii.D()?new Ii:new xi,new Fi(t,n,r,i,a)}},{key:"createSyncEngine",value:function(e,t){return n=this.localStore,r=this.remoteStore,i=this.eventManager,a=this.sharedClientState,o=e.initialUser,s=e.maxConcurrentLimboResolutions,u=t,c=new Ga(n,r,i,a,o,s),u&&(c.fc=!0),c;var n,r,i,a,o,s,u,c}},{key:"terminate",value:function(){return(e=t(i)(t(m).mark((function e(n){var r;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=L(n),A("RemoteStore","RemoteStore shutting down."),r.du.add(5),e.next=5,Bi(r);case 5:r._u.shutdown(),r.mu.set("Unknown");case 7:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})(this.remoteStore);var e}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var So=function(){"use strict";function e(n){t(o)(this,e),this.observer=n,this.muted=!1}return t(u)(e,[{key:"next",value:function(e){this.observer.next&&this.gc(this.observer.next,e)}},{key:"error",value:function(e){this.observer.error?this.gc(this.observer.error,e):C("Uncaught Error in snapshot listener:",e.toString())}},{key:"yc",value:function(){this.muted=!0}},{key:"gc",value:function(e,t){var n=this;this.muted||setTimeout((function(){n.muted||e(t)}),0)}}]),e}(),Ao=function(){"use strict";function e(n,r,a,s){var u=this;t(o)(this,e);var c,l=this;this.authCredentials=n,this.appCheckCredentials=r,this.asyncQueue=a,this.databaseInfo=s,this.user=E.UNAUTHENTICATED,this.clientId=W.A(),this.authCredentialListener=function(){return Promise.resolve()},this.appCheckCredentialListener=function(){return Promise.resolve()},this.authCredentials.start(a,(c=t(i)(t(m).mark((function e(n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A("FirestoreClient","Received user=",n.uid),e.next=3,l.authCredentialListener(n);case 3:l.user=n;case 4:case"end":return e.stop()}}),e)}))),function(e){return c.apply(this,arguments)})),this.appCheckCredentials.start(a,(function(e){return A("FirestoreClient","Received new app check token=",e),u.appCheckCredentialListener(e,u.user)}))}return t(u)(e,[{key:"getConfiguration",value:function(){var e=this;return t(i)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{asyncQueue:e.asyncQueue,databaseInfo:e.databaseInfo,clientId:e.clientId,authCredentials:e.authCredentials,appCheckCredentials:e.appCheckCredentials,initialUser:e.user,maxConcurrentLimboResolutions:100});case 1:case"end":return t.stop()}}),n)})))()}},{key:"setCredentialChangeListener",value:function(e){this.authCredentialListener=e}},{key:"setAppCheckTokenChangeListener",value:function(e){this.appCheckCredentialListener=e}},{key:"verifyNotTerminated",value:function(){if(this.asyncQueue.isShuttingDown)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"terminate",value:function(){this.asyncQueue.enterRestrictedMode();var e=new U,n=this;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(t(i)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,t.t0=n._onlineComponents,!t.t0){t.next=5;break}return t.next=5,n._onlineComponents.terminate();case 5:if(t.t1=n._offlineComponents,!t.t1){t.next=9;break}return t.next=9,n._offlineComponents.terminate();case 9:n.authCredentials.shutdown(),n.appCheckCredentials.shutdown(),e.resolve(),t.next=18;break;case 14:t.prev=14,t.t2=t.catch(0),i=Sa(t.t2,"Failed to shutdown persistence"),e.reject(i);case 18:case"end":return t.stop()}}),r,null,[[0,14]])})))),e.promise}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(e,t){return Do.apply(this,arguments)}function Do(){return Do=t(i)(t(m).mark((function e(n,r){var a,o;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider"),e.next=3,n.getConfiguration();case 3:return a=e.sent,e.next=6,r.initialize(a);case 6:o=a.initialUser,n.setCredentialChangeListener(function(){var e=t(i)(t(m).mark((function e(n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=o.isEqual(n),e.t0){e.next=5;break}return e.next=4,ui(r.localStore,n);case 4:o=n;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.persistence.setDatabaseDeletedListener((function(){return n.terminate()})),n._offlineComponents=r;case 8:case"end":return e.stop()}}),e)}))),Do.apply(this,arguments)}function No(e,t){return Oo.apply(this,arguments)}function Oo(){return(Oo=t(i)(t(m).mark((function e(n,r){var i,a;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.asyncQueue.verifyOperationInProgress(),e.next=3,Lo(n);case 3:return i=e.sent,A("FirestoreClient","Initializing OnlineComponentProvider"),e.next=7,n.getConfiguration();case 7:return a=e.sent,e.next=10,r.initialize(i,a);case 10:n.setCredentialChangeListener((function(e){return wa(r.remoteStore,e)})),n.setAppCheckTokenChangeListener((function(e,t){return wa(r.remoteStore,t)})),n._onlineComponents=r;case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ro(e){return"FirebaseError"===e.name?e.code===P.FAILED_PRECONDITION||e.code===P.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}function Lo(e){return Po.apply(this,arguments)}function Po(){return(Po=t(i)(t(m).mark((function e(n){var r;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n._offlineComponents){e.next=21;break}if(!n._uninitializedComponentsProvider){e.next=18;break}return A("FirestoreClient","Using user provided OfflineComponentProvider"),e.prev=3,e.next=6,Co(n,n._uninitializedComponentsProvider._offline);case 6:e.next=16;break;case 8:if(e.prev=8,e.t0=e.catch(3),Ro(r=e.t0)){e.next=13;break}throw r;case 13:return D("Error using user provided cache. Falling back to memory cache: "+r),e.next=16,Co(n,new _o);case 16:e.next=21;break;case 18:return A("FirestoreClient","Using default OfflineComponentProvider"),e.next=21,Co(n,new _o);case 21:return e.abrupt("return",n._offlineComponents);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})))).apply(this,arguments)}function Mo(e){return Uo.apply(this,arguments)}function Uo(){return(Uo=t(i)(t(m).mark((function e(n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n._onlineComponents,e.t0){e.next=11;break}if(!n._uninitializedComponentsProvider){e.next=8;break}return A("FirestoreClient","Using user provided OnlineComponentProvider"),e.next=6,No(n,n._uninitializedComponentsProvider._online);case 6:e.next=11;break;case 8:return A("FirestoreClient","Using default OnlineComponentProvider"),e.next=11,No(n,new To);case 11:return e.abrupt("return",(e.t0,n._onlineComponents));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fo(e){return Mo(e).then((function(e){return e.syncEngine}))}function Vo(e){return jo.apply(this,arguments)}function jo(){return(jo=t(i)(t(m).mark((function e(n){var r,i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Mo(n);case 2:return r=e.sent,i=r.eventManager,e.abrupt("return",(i.onListen=Wa.bind(null,r.syncEngine),i.onUnlisten=Ja.bind(null,r.syncEngine),i));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Bo(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=new U;return e.asyncQueue.enqueueAndForget(t(i)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=function(e,t,n,r,i){var a=new So({next:function(a){t.enqueueAndForget((function(){return Pa(e,o)}));var s=a.docs.has(n);!s&&a.fromCache?i.reject(new M(P.UNAVAILABLE,"Failed to get document because the client is offline.")):s&&a.fromCache&&r&&"server"===r.source?i.reject(new M(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:function(e){return i.reject(e)}}),o=new ja(Pt(n.path),a,{includeMetadataChanges:!0,xu:!0});return Ra(e,o)},t.next=3,Vo(e);case 3:return t.t1=t.sent,t.t2=e.asyncQueue,t.t3=n,t.t4=r,t.t5=a,t.abrupt("return",(0,t.t0)(t.t1,t.t2,t.t3,t.t4,t.t5));case 9:case"end":return t.stop()}}),i)})))),a.promise}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var qo=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(e,t,n){if(!n)throw new M(P.INVALID_ARGUMENT,"Function ".concat(e,"() cannot be called with an empty ").concat(t,"."))}function Ko(e){if(!ne.isDocumentKey(e))throw new M(P.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function Ho(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";var t=(n=e).constructor?n.constructor.name:null;return t?"a custom ".concat(t," object"):"an object"}var n;return"function"==typeof e?"a function":O()}function Go(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new M(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=Ho(e);throw new M(P.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(n))}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wo=function(){"use strict";function e(n){var r;if(t(o)(this,e),void 0===n.host){if(void 0!==n.ssl)throw new M(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,this.cache=n.localCache,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new M(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new M(P.INVALID_ARGUMENT,"".concat(e," and ").concat(n," cannot be used together."))}("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling)}return t(u)(e,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),e}(),Qo=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wo({}),this._settingsFrozen=!1}return t(u)(e,[{key:"app",get:function(){if(!this._app)throw new M(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new M(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wo(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new V;switch(e.type){case"firstParty":return new z(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new M(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=qo.get(e))&&(A("ComponentProvider","Removing Datastore"),qo.delete(e),t.terminate()),Promise.resolve();var e,t}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=(e=Go(e,Qo))._getSettings();if("firestore.googleapis.com"!==a.host&&a.host!==t&&D("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},a),{host:"".concat(t,":").concat(n),ssl:!1})),i.mockUserToken){var o,s;if("string"==typeof i.mockUserToken)o=i.mockUserToken,s=E.MOCK_USER;else{o=(0,b.createMockUserToken)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);var u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new M(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");s=new E(u)}e._authCredentials=new j(new F(o,s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yo=function(){"use strict";function e(n,r,i){t(o)(this,e),this.converter=r,this._key=i,this.type="document",this.firestore=n}return t(u)(e,[{key:"_path",get:function(){return this._key.path}},{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"path",get:function(){return this._key.path.canonicalString()}},{key:"parent",get:function(){return new $o(this.firestore,this.converter,this._key.path.popLast())}},{key:"withConverter",value:function(t){return new e(this.firestore,t,this._key)}}]),e}(),Jo=function(){"use strict";function e(n,r,i){t(o)(this,e),this.converter=r,this._query=i,this.type="query",this.firestore=n}return t(u)(e,[{key:"withConverter",value:function(t){return new e(this.firestore,t,this._query)}}]),e}(),$o=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a){var s;return t(o)(this,r),(s=n.call(this,e,i,Pt(a)))._path=a,s.type="collection",t(f)(s)}return t(u)(r,[{key:"id",get:function(){return this._query.path.lastSegment()}},{key:"path",get:function(){return this._query.path.canonicalString()}},{key:"parent",get:function(){var e=this._path.popLast();return e.isEmpty()?null:new Yo(this.firestore,null,new ne(e))}},{key:"withConverter",value:function(e){return new r(this.firestore,e,this._path)}}]),r}(Jo);function Zo(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(e=(0,b.getModularInstance)(e),1===arguments.length&&(n=W.A()),zo("doc","path",n),e instanceof Qo){var o,s=(o=Z).fromString.apply(o,[n].concat(t(p)(i)));return Ko(s),new Yo(e,null,new ne(s))}var u;if(!(e instanceof Yo||e instanceof $o))throw new M(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=e._path.child((u=Z).fromString.apply(u,[n].concat(t(p)(i))));return Ko(c),new Yo(e.firestore,e instanceof $o?e.converter:null,new ne(c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var es=function(){"use strict";function e(){var n=this;t(o)(this,e),this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Oi(this,"async_queue_retry"),this.qc=function(){var e=Di();e&&A("AsyncQueue","Visibility state changed to "+e.visibilityState),n.Co.vo()};var r=Di();r&&"function"==typeof r.addEventListener&&r.addEventListener("visibilitychange",this.qc)}return t(u)(e,[{key:"isShuttingDown",get:function(){return this.Oc}},{key:"enqueueAndForget",value:function(e){this.enqueue(e)}},{key:"enqueueAndForgetEvenWhileRestricted",value:function(e){this.Uc(),this.Kc(e)}},{key:"enterRestrictedMode",value:function(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;var t=Di();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}},{key:"enqueue",value:function(e){var t=this;if(this.Uc(),this.Oc)return new Promise((function(){}));var n=new U;return this.Kc((function(){return t.Oc&&t.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)})).then((function(){return n.promise}))}},{key:"enqueueRetryable",value:function(e){var t=this;this.enqueueAndForget((function(){return t.kc.push(e),t.Gc()}))}},{key:"Gc",value:function(){var e=this;return t(i)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===e.kc.length){t.next=14;break}return t.prev=1,t.next=4,e.kc[0]();case 4:e.kc.shift(),e.Co.reset(),t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(1),de(t.t0)){t.next=12;break}throw t.t0;case 12:A("AsyncQueue","Operation failed with retryable error: "+t.t0);case 13:e.kc.length>0&&e.Co.Ao((function(){return e.Gc()}));case 14:case"end":return t.stop()}}),n,null,[[1,8]])})))()}},{key:"Kc",value:function(e){var t=this,n=this.Nc.then((function(){return t.Fc=!0,e().catch((function(e){var n,r;throw t.Mc=e,t.Fc=!1,C("INTERNAL UNHANDLED ERROR: ",(r=(n=e).message||"",n.stack&&(r=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),r)),e})).then((function(e){return t.Fc=!1,e}))}));return this.Nc=n,n}},{key:"enqueueAfterDelay",value:function(e,t,n){var r=this;this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);var i=Ta.createAndSchedule(this,e,t,n,(function(e){return r.Qc(e)}));return this.$c.push(i),i}},{key:"Uc",value:function(){this.Mc&&O()}},{key:"verifyOperationInProgress",value:function(){}},{key:"zc",value:function(){var e=this;return t(i)(t(m).mark((function n(){var r;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case 1:return r=e.Nc,t.next=4,r;case 4:if(r!==e.Nc){t.next=1;break}case 5:case"end":return t.stop()}}),n)})))()}},{key:"jc",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.$c[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.timerId===e)return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"Wc",value:function(e){var t=this;return this.zc().then((function(){t.$c.sort((function(e,t){return e.targetTimeMs-t.targetTimeMs}));var n=!0,r=!1,i=void 0;try{for(var a,o=t.$c[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s.skipDelay(),"all"!==e&&s.timerId===e)break}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t.zc()}))}},{key:"Hc",value:function(e){this.Lc.push(e)}},{key:"Qc",value:function(e){var t=this.$c.indexOf(e);this.$c.splice(t,1)}}]),e}();var ts=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a,s){var u;return t(o)(this,r),(u=n.call(this,e,i,a,s)).type="firestore",u._queue=new es,u._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]",t(f)(u)}return t(u)(r,[{key:"_terminate",value:function(){return this._firestoreClient||is(this),this._firestoreClient.terminate()}}]),r}(Qo);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(e,n){var r="object"==typeof e?e:(0,g.getApp)(),i="string"==typeof e?e:n||"(default)",a=(0,g._getProvider)(r,"firestore").getImmediate({identifier:i});if(!a._initialized){var o=(0,b.getDefaultEmulatorHostnameAndPort)("firestore");o&&Xo.apply(void 0,[a].concat(t(p)(o)))}return a}function rs(e){return e._firestoreClient||is(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function is(e){var t,n,r,i,a,o,s,u=e._freezeSettings(),c=(i=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new je(i,a,o,(s=u).host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams));e._firestoreClient=new Ao(e._authCredentials,e._appCheckCredentials,e._queue,c),(null===(n=u.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=u.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:u.cache.kind,_offline:u.cache._offlineComponentProvider,_online:u.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var as=function(){"use strict";function e(n){t(o)(this,e),this._byteString=n}return t(u)(e,[{key:"toBase64",value:function(){return this._byteString.toBase64()}},{key:"toUint8Array",value:function(){return this._byteString.toUint8Array()}},{key:"toString",value:function(){return"Bytes(base64: "+this.toBase64()+")"}},{key:"isEqual",value:function(e){return this._byteString.isEqual(e._byteString)}}],[{key:"fromBase64String",value:function(t){try{return new e(Oe.fromBase64String(t))}catch(e){throw new M(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}},{key:"fromUint8Array",value:function(t){return new e(Oe.fromUint8Array(t))}}]),e}(),os=function(){"use strict";function e(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];t(o)(this,e);for(var a=0;a<r.length;++a)if(0===r[a].length)throw new M(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(r)}return t(u)(e,[{key:"isEqual",value:function(e){return this._internalPath.isEqual(e._internalPath)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ss=function e(n){"use strict";t(o)(this,e),this._methodName=n},us=function(){"use strict";function e(n,r){if(t(o)(this,e),!isFinite(n)||n<-90||n>90)throw new M(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(r)||r<-180||r>180)throw new M(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=n,this._long=r}return t(u)(e,[{key:"latitude",get:function(){return this._lat}},{key:"longitude",get:function(){return this._long}},{key:"isEqual",value:function(e){return this._lat===e._lat&&this._long===e._long}},{key:"toJSON",value:function(){return{latitude:this._lat,longitude:this._long}}},{key:"_compareTo",value:function(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}]),e}(),cs=/^__.*__$/,ls=function(){"use strict";function e(n,r,i){t(o)(this,e),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return t(u)(e,[{key:"toMutation",value:function(e,t){return null!==this.fieldMask?new Un(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mn(e,this.data,t,this.fieldTransforms)}}]),e}(),hs=function(){"use strict";function e(n,r,i){t(o)(this,e),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return t(u)(e,[{key:"toMutation",value:function(e,t){return new Un(e,this.data,this.fieldMask,t,this.fieldTransforms)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}var ds=function(){"use strict";function e(n,r,i,a,s,u){t(o)(this,e),this.settings=n,this.databaseId=r,this.serializer=i,this.ignoreUndefinedProperties=a,void 0===s&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=u||[]}return t(u)(e,[{key:"path",get:function(){return this.settings.path}},{key:"Yc",get:function(){return this.settings.Yc}},{key:"Zc",value:function(t){return new e(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}},{key:"Xc",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.ea(e),r}},{key:"na",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.Jc(),r}},{key:"sa",value:function(e){return this.Zc({path:void 0,ta:!0})}},{key:"ia",value:function(e){return Cs(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}},{key:"contains",value:function(e){return void 0!==this.fieldMask.find((function(t){return e.isPrefixOf(t)}))||void 0!==this.fieldTransforms.find((function(t){return e.isPrefixOf(t.field)}))}},{key:"Jc",value:function(){if(this.path)for(var e=0;e<this.path.length;e++)this.ea(this.path.get(e))}},{key:"ea",value:function(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(fs(this.Yc)&&cs.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}]),e}(),ps=function(){"use strict";function e(n,r,i){t(o)(this,e),this.databaseId=n,this.ignoreUndefinedProperties=r,this.serializer=i||Ni(n)}return t(u)(e,[{key:"ua",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new ds({Yc:e,methodName:t,oa:n,path:te.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}]),e}();function vs(e){var t=e._freezeSettings(),n=Ni(e._databaseId);return new ps(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ys(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=e.ua(a.merge||a.mergeFields?2:0,t,n,i);_s("Data must be an object, but it was:",o,r);var s,u,c=Is(r,o);if(a.merge)s=new Ce(o.fieldMask),u=o.fieldTransforms;else if(a.mergeFields){var l=[],h=!0,f=!1,d=void 0;try{for(var p,v=a.mergeFields[Symbol.iterator]();!(h=(p=v.next()).done);h=!0){var y=p.value,m=Ts(t,y,n);if(!o.contains(m))throw new M(P.INVALID_ARGUMENT,"Field '".concat(m,"' is specified in your field mask but missing from your input data."));Ds(l,m)||l.push(m)}}catch(e){f=!0,d=e}finally{try{h||null==v.return||v.return()}finally{if(f)throw d}}s=new Ce(l),u=o.fieldTransforms.filter((function(e){return s.covers(e.field)}))}else s=null,u=o.fieldTransforms;return new ls(new rt(c),s,u)}var ms=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"_toFieldTransform",value:function(e){if(2!==e.Yc)throw 1===e.Yc?e.ia("".concat(this._methodName,"() can only appear at the top level of your update data")):e.ia("".concat(this._methodName,"() cannot be used with set() unless you pass {merge:true}"));return e.fieldMask.push(e.path),null}},{key:"isEqual",value:function(e){return e instanceof r}}]),r}(ss);function gs(e,t,n){return new ds({Yc:3,oa:t.settings.oa,methodName:e._methodName,ta:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}var ks=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this,e)).ca=i,t(f)(a)}return t(u)(r,[{key:"_toFieldTransform",value:function(e){var t=gs(this,e,!0),n=this.ca.map((function(e){return xs(e,t)})),r=new kn(n);return new Tn(e.path,r)}},{key:"isEqual",value:function(e){return this===e}}]),r}(ss);function ws(e,t,n,r){var i=e.ua(1,t,n);_s("Data must be an object, but it was:",i,r);var a=[],o=rt.empty();xe(r,(function(e,r){var s=As(t,e,n);r=(0,b.getModularInstance)(r);var u=i.na(s);if(r instanceof ms)a.push(s);else{var c=xs(r,u);null!=c&&(a.push(s),o.set(s,c))}}));var s=new Ce(a);return new hs(o,s,i.fieldTransforms)}function bs(e,t,n,r,i,a){var o=e.ua(1,t,n),s=[Ts(t,r,n)],u=[i];if(a.length%2!=0)throw new M(P.INVALID_ARGUMENT,"Function ".concat(t,"() needs to be called with an even number of arguments that alternate between field names and values."));for(var c=0;c<a.length;c+=2)s.push(Ts(t,a[c])),u.push(a[c+1]);for(var l=[],h=rt.empty(),f=s.length-1;f>=0;--f)if(!Ds(l,s[f])){var d=s[f],p=u[f];p=(0,b.getModularInstance)(p);var v=o.na(d);if(p instanceof ms)l.push(d);else{var y=xs(p,v);null!=y&&(l.push(d),h.set(d,y))}}var m=new Ce(l);return new hs(h,m,o.fieldTransforms)}function xs(e,t){if(Es(e=(0,b.getModularInstance)(e)))return _s("Unsupported field value:",t,e),Is(e,t);if(e instanceof ss)return function(e,t){if(!fs(t.Yc))throw t.ia("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t.ia("".concat(e._methodName,"() is not currently supported inside arrays"));var n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&4!==t.Yc)throw t.ia("Nested arrays are not supported");return function(e,t){var n=[],r=0,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=xs(s.value,t.sa(r));null==c&&(c={nullValue:"NULL_VALUE"}),n.push(c),r++}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,b.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return dn(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){var n=Y.fromDate(e);return{timestampValue:fr(t.serializer,n)}}if(e instanceof Y){var r=new Y(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:fr(t.serializer,r)}}if(e instanceof us)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof as)return{bytesValue:dr(t.serializer,e._byteString)};if(e instanceof Yo){var i=t.databaseId,a=e.firestore._databaseId;if(!a.isEqual(i))throw t.ia("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(i.projectId,"/").concat(i.database));return{referenceValue:yr(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia("Unsupported field value: ".concat(Ho(e)))}(e,t)}function Is(e,t){var n={};return Ie(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xe(e,(function(e,r){var i=xs(r,t.Xc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Es(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Y||e instanceof us||e instanceof as||e instanceof Yo||e instanceof ss)}function _s(e,t,n){if(!Es(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){var r=Ho(n);throw"an object"===r?t.ia(e+" a custom object"):t.ia(e+" "+r)}var i}function Ts(e,t,n){if((t=(0,b.getModularInstance)(t))instanceof os)return t._internalPath;if("string"==typeof t)return As(e,t);throw Cs("Field path arguments must be of type string or ",e,!1,void 0,n)}var Ss=new RegExp("[~\\*/\\[\\]]");function As(e,n,r){if(n.search(Ss)>=0)throw Cs("Invalid field path (".concat(n,"). Paths must not contain '~', '*', '/', '[', or ']'"),e,!1,void 0,r);try{return t(s)(os,t(p)(n.split(".")))._internalPath}catch(t){throw Cs("Invalid field path (".concat(n,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),e,!1,void 0,r)}}function Cs(e,t,n,r,i){var a=r&&!r.isEmpty(),o=void 0!==i,s="Function ".concat(t,"() called with invalid data");n&&(s+=" (via `toFirestore()`)"),s+=". ";var u="";return(a||o)&&(u+=" (found",a&&(u+=" in field ".concat(r)),o&&(u+=" in document ".concat(i)),u+=")"),new M(P.INVALID_ARGUMENT,s+e+u)}function Ds(e,t){return e.some((function(e){return e.isEqual(t)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ns=function(){"use strict";function e(n,r,i,a,s){t(o)(this,e),this._firestore=n,this._userDataWriter=r,this._key=i,this._document=a,this._converter=s}return t(u)(e,[{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"ref",get:function(){return new Yo(this._firestore,this._converter,this._key)}},{key:"exists",value:function(){return null!==this._document}},{key:"data",value:function(){if(this._document){if(this._converter){var e=new Os(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}},{key:"get",value:function(e){if(this._document){var t=this._document.data.field(Rs("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}]),e}(),Os=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"data",value:function(){return t(c)(t(l)(r.prototype),"data",this).call(this)}}]),r}(Ns);function Rs(e,t){return"string"==typeof t?As(e,t):t instanceof os?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ls=function(){"use strict";function e(){t(o)(this,e)}return t(u)(e,[{key:"convertValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(ze(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Me(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw O()}}},{key:"convertObject",value:function(e,t){var n=this,r={};return xe(e.fields,(function(e,i){r[e]=n.convertValue(i,t)})),r}},{key:"convertGeoPoint",value:function(e){return new us(Pe(e.latitude),Pe(e.longitude))}},{key:"convertArray",value:function(e,t){var n=this;return(e.values||[]).map((function(e){return n.convertValue(e,t)}))}},{key:"convertServerTimestamp",value:function(e,t){switch(t){case"previous":var n=Fe(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ve(e));default:return null}}},{key:"convertTimestamp",value:function(e){var t=Le(e);return new Y(t.seconds,t.nanos)}},{key:"convertDocumentKey",value:function(e,t){var n=Z.fromString(e);R(Pr(n));var r=new Be(n.get(1),n.get(3)),i=new ne(n.popFirst(5));return r.isEqual(t)||C("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId,"/").concat(t.database,") instead.")),i}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ms=function(){"use strict";function e(n,r){t(o)(this,e),this.hasPendingWrites=n,this.fromCache=r}return t(u)(e,[{key:"isEqual",value:function(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}]),e}(),Us=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e,i,a,s,u,c){var l;return t(o)(this,r),(l=n.call(this,e,i,a,s,c))._firestore=e,l._firestoreImpl=e,l.metadata=u,t(f)(l)}return t(u)(r,[{key:"exists",value:function(){return t(c)(t(l)(r.prototype),"exists",this).call(this)}},{key:"data",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._document){if(this._converter){var t=new Fs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._document){var n=this._document.data.field(Rs("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}]),r}(Ns),Fs=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"data",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(c)(t(l)(r.prototype),"data",this).call(this,e)}}]),r}(Us);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vs(e){e=Go(e,Yo);var t=Go(e.firestore,ts);return Bo(rs(t),e._key).then((function(n){return Ks(t,e,n)}))}var js=function(e){"use strict";t(h)(r,e);var n=t(y)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).firestore=e,t(f)(i)}return t(u)(r,[{key:"convertBytes",value:function(e){return new as(e)}},{key:"convertReference",value:function(e){var t=this.convertDocumentKey(e,this.firestore._databaseId);return new Yo(this.firestore,null,t)}}]),r}(Ls);function Bs(e,t,n){e=Go(e,Yo);var r=Go(e.firestore,ts),i=Ps(e.converter,t,n);return zs(r,[ys(vs(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,An.none())])}function qs(e,t,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),a=3;a<r;a++)i[a-3]=arguments[a];e=Go(e,Yo);var o=Go(e.firestore,ts),s=vs(o);return zs(o,[("string"==typeof(t=(0,b.getModularInstance)(t))||t instanceof os?bs(s,"updateDoc",e._key,t,n,i):ws(s,"updateDoc",e._key,t)).toMutation(e._key,An.exists(!0))])}function zs(e,n){return r=rs(e),a=n,o=new U,r.asyncQueue.enqueueAndForget(t(i)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Za,e.next=3,Fo(r);case 3:return e.t1=e.sent,e.t2=a,e.t3=o,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),e)})))),o.promise;var r,a,o}function Ks(e,t,n){var r=n.docs.get(t._key),i=new js(e);return new Us(e,i,t._key,r,new Ms(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new ks("arrayUnion",t)}!function(e){var t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t=g.SDK_VERSION,_=t,(0,g._registerComponent)(new(0,k.Component)("firestore",(function(e,t){var r=t.instanceIdentifier,i=t.options,a=e.getProvider("app").getImmediate(),o=new ts(new B(e.getProvider("auth-internal")),new H(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new M(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Be(e.options.projectId,t)}(a,r),a);return i=Object.assign({useFetchStreams:n},i),o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),(0,g.registerVersion)(I,"3.10.0",e),(0,g.registerVersion)(I,"3.10.0","esm2017")}()})),a.register("6RwJk",(function(r,i){e(r.exports,"createWebChannelTransport",(function(){return lr})),e(r.exports,"getStatEventTarget",(function(){return hr})),e(r.exports,"ErrorCode",(function(){return fr})),e(r.exports,"EventType",(function(){return dr})),e(r.exports,"Event",(function(){return pr})),e(r.exports,"Stat",(function(){return vr})),e(r.exports,"FetchXmlHttpFactory",(function(){return yr})),e(r.exports,"WebChannel",(function(){return mr})),e(r.exports,"XhrIo",(function(){return gr}));var o,s=a("8MBJY"),u=a("a2hTj"),c=a("jh8P3"),l=a("fVNic"),h=a("eYQtU"),f=a("1t1Wn"),d=a("l5bVx"),p=a("2MbLg"),v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},y={},m=m||{},g=v||self;function k(){}function w(e){var n=void 0===e?"undefined":t(d)(e);return"array"==(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null")||"object"==n&&"number"==typeof e.length}function b(e){var n=void 0===e?"undefined":t(d)(e);return"object"==n&&null!=e||"function"==n}var x="closure_uid_"+(1e9*Math.random()>>>0),I=0;function E(e,t,n){return e.call.apply(e.bind,arguments)}function _(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function T(e,t,n){return(T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?E:_).apply(null,arguments)}function S(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function A(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}function C(){this.s=this.s,this.o=this.o}C.prototype.s=!1,C.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,x)&&e[x]||(e[x]=++I))},C.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var D=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function N(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function O(e,t){for(var n=1;n<arguments.length;n++){var r=arguments[n];if(w(r)){var i=e.length||0,a=r.length||0;e.length=i+a;for(var o=0;o<a;o++)e[i+o]=r[o]}else e.push(r)}}function R(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{g.addEventListener("test",k,t),g.removeEventListener("test",k,t)}catch(e){}return e}();function P(e){return/^[\s\xa0]*$/.test(e)}var M=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function U(e,t){return e<t?-1:e>t?1:0}function F(){var e=g.navigator;return e&&(e=e.userAgent)?e:""}function V(e){return-1!=F().indexOf(e)}function j(e){return j[" "](e),e}j[" "]=k;var B,q,z=V("Opera"),K=V("Trident")||V("MSIE"),H=V("Edge"),G=H||K,W=V("Gecko")&&!(-1!=F().toLowerCase().indexOf("webkit")&&!V("Edge"))&&!(V("Trident")||V("MSIE"))&&!V("Edge"),Q=-1!=F().toLowerCase().indexOf("webkit")&&!V("Edge");function X(){var e=g.document;return e?e.documentMode:void 0}e:{var Y="",J=(q=F(),W?/rv:([^\);]+)(\)|;)/.exec(q):H?/Edge\/([\d\.]+)/.exec(q):K?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(q):Q?/WebKit\/(\S+)/.exec(q):z?/(?:Version)[ \/]?(\S+)/.exec(q):void 0);if(J&&(Y=J?J[1]:""),K){var $=X();if(null!=$&&$>parseFloat(Y)){B=String($);break e}}B=Y}var Z,ee={};function te(){return function(e){var t=ee;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){for(var e=0,t=M(String(B)).split("."),n=M("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var a=t[i]||"",o=n[i]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==a[0].length&&0==o[0].length)break;e=U(0==a[1].length?0:parseInt(a[1],10),0==o[1].length?0:parseInt(o[1],10))||U(0==a[2].length,0==o[2].length)||U(a[2],o[2]),a=a[3],o=o[3]}while(0==e)}return 0<=e}))}if(g.document&&K){var ne=X();Z=ne||(parseInt(B,10)||void 0)}else Z=void 0;var re=Z;function ie(e,t){if(R.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(W){e:{try{j(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:ae[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ie.X.h.call(this)}}A(ie,R);var ae={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),se=0;function ue(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++se,this.ba=this.ea=!1}function ce(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function le(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function he(e){var t={};for(var n in e)t[n]=e[n];return t}var fe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function de(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var a=0;a<fe.length;a++)n=fe[a],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function pe(e){this.src=e,this.g={},this.h=0}function ve(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],a=D(i,t);(r=0<=a)&&Array.prototype.splice.call(i,a,1),r&&(ce(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ye(e,t,n,r){for(var i=0;i<e.length;++i){var a=e[i];if(!a.ba&&a.listener==t&&a.capture==!!n&&a.ha==r)return i}return-1}pe.prototype.add=function(e,t,n,r,i){var a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);var o=ye(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new ue(t,this.src,a,!!r,i)).ea=n,e.push(t)),t};var me="closure_lm_"+(1e6*Math.random()|0),ge={};function ke(e,t,n,r,i){if(r&&r.once)return be(e,t,n,r,i);if(Array.isArray(t)){for(var a=0;a<t.length;a++)ke(e,t[a],n,r,i);return null}return n=Ae(n),e&&e[oe]?e.N(t,n,b(r)?!!r.capture:!!r,i):we(e,t,n,!1,r,i)}function we(e,t,n,r,i,a){if(!t)throw Error("Invalid event type");var o=b(i)?!!i.capture:!!i,s=Te(e);if(s||(e[me]=s=new pe(e)),(n=s.add(t,n,r,o,a)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=_e;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)L||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ee(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function be(e,t,n,r,i){if(Array.isArray(t)){for(var a=0;a<t.length;a++)be(e,t[a],n,r,i);return null}return n=Ae(n),e&&e[oe]?e.O(t,n,b(r)?!!r.capture:!!r,i):we(e,t,n,!0,r,i)}function xe(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)xe(e,t[a],n,r,i);else r=b(r)?!!r.capture:!!r,n=Ae(n),e&&e[oe]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=ye(a=e.g[t],n,r,i))&&(ce(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete e.g[t],e.h--)))):e&&(e=Te(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ye(t,n,r,i)),(n=-1<e?t[e]:null)&&Ie(n))}function Ie(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[oe])ve(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ee(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Te(t))?(ve(n,e),0==n.h&&(n.src=null,t[me]=null)):ce(e)}}}function Ee(e){return e in ge?ge[e]:ge[e]="on"+e}function _e(e,t){if(e.ba)e=!0;else{t=new ie(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Ie(e),e=n.call(r,t)}return e}function Te(e){return(e=e[me])instanceof pe?e:null}var Se="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ae(e){return"function"==typeof e?e:(e[Se]||(e[Se]=function(t){return e.handleEvent(t)}),e[Se])}function Ce(){C.call(this),this.i=new pe(this),this.P=this,this.I=null}function De(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new R(t,e);else if(t instanceof R)t.target=t.target||e;else{var i=t;de(t=new R(r,e),i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var o=t.g=n[a];i=Ne(o,r,!0,t)&&i}if(i=Ne(o=t.g=e,r,!0,t)&&i,i=Ne(o,r,!1,t)&&i,n)for(a=0;a<n.length;a++)i=Ne(o=t.g=n[a],r,!1,t)&&i}function Ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,a=0;a<t.length;++a){var o=t[a];if(o&&!o.ba&&o.capture==n){var s=o.listener,u=o.ha||o.src;o.ea&&ve(e.i,o),i=!1!==s.call(u,r)&&i}}return i&&!r.defaultPrevented}A(Ce,C),Ce.prototype[oe]=!0,Ce.prototype.removeEventListener=function(e,t,n,r){xe(this,e,t,n,r)},Ce.prototype.M=function(){if(Ce.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ce(n[r]);delete t.g[e],t.h--}}this.I=null},Ce.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ce.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Oe=g.JSON.stringify;function Re(){var e=Be,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Le,Pe=function(){"use strict";function e(){t(s)(this,e),this.h=this.g=null}return t(u)(e,[{key:"add",value:function(e,t){var n=Me.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}]),e}(),Me=new(function(){"use strict";function e(n,r){t(s)(this,e),this.i=n,this.j=r,this.h=0,this.g=null}return t(u)(e,[{key:"get",value:function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}]),e}())((function(){return new Ue}),(function(e){return e.reset()})),Ue=function(){"use strict";function e(){t(s)(this,e),this.next=this.g=this.h=null}return t(u)(e,[{key:"set",value:function(e,t){this.h=e,this.g=t,this.next=null}},{key:"reset",value:function(){this.next=this.g=this.h=null}}]),e}();function Fe(e){g.setTimeout((function(){throw e}),0)}function Ve(e,t){Le||function(){var e=g.Promise.resolve(void 0);Le=function(){e.then(qe)}}(),je||(Le(),je=!0),Be.add(e,t)}var je=!1,Be=new Pe;function qe(){for(var e;e=Re();){try{e.h.call(e.g)}catch(e){Fe(e)}var t=Me;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}je=!1}function ze(e,t){Ce.call(this),this.h=e||1,this.g=t||g,this.j=T(this.lb,this),this.l=Date.now()}function Ke(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function He(e,t,n){if("function"==typeof e)n&&(e=T(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=T(e.handleEvent,e)}return 2147483647<Number(t)?-1:g.setTimeout(e,t||0)}function Ge(e){e.g=He((function(){e.g=null,e.i&&(e.i=!1,Ge(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}A(ze,Ce),(o=ze.prototype).ca=!1,o.R=null,o.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),De(this,"tick"),this.ca&&(Ke(this),this.start()))}},o.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},o.M=function(){ze.X.M.call(this),Ke(this),delete this.g};var We=function(e){"use strict";t(h)(r,e);var n=t(p)(r);function r(e,i){var a;return t(s)(this,r),(a=n.call(this)).m=e,a.j=i,a.h=null,a.i=!1,a.g=null,a}return t(u)(r,[{key:"l",value:function(e){this.h=arguments,this.g?this.i=!0:Ge(this)}},{key:"M",value:function(){t(c)(t(l)(r.prototype),"M",this).call(this),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}]),r}(C);function Qe(e){C.call(this),this.h=e,this.g={}}A(Qe,C);var Xe=[];function Ye(e,t,n,r){Array.isArray(n)||(n&&(Xe[0]=n.toString()),n=Xe);for(var i=0;i<n.length;i++){var a=ke(t,n[i],r||e.handleEvent,!1,e.h||e);if(!a)break;e.g[a.key]=a}}function Je(e){le(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ie(e)}),e),e.g={}}function $e(){this.g=!0}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if("noop"!=a&&"stop"!=a&&"close"!=a)for(var o=1;o<i.length;o++)i[o]=""}}}return Oe(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Qe.prototype.M=function(){Qe.X.M.call(this),Je(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},$e.prototype.Aa=function(){this.g=!1},$e.prototype.info=function(){};var et={},tt=null;function nt(){return tt=tt||new Ce}function rt(e){R.call(this,et.Pa,e)}function it(e){var t=nt();De(t,new rt(t))}function at(e,t){R.call(this,et.STAT_EVENT,e),this.stat=t}function ot(e){var t=nt();De(t,new at(t,e))}function st(e,t){R.call(this,et.Qa,e),this.size=t}function ut(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return g.setTimeout((function(){e()}),t)}et.Pa="serverreachability",A(rt,R),et.STAT_EVENT="statevent",A(at,R),et.Qa="timingevent",A(st,R);var ct={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},lt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ht(){}function ft(e){return e.h||(e.h=e.i())}function dt(){}ht.prototype.h=null;var pt,vt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function yt(){R.call(this,"d")}function mt(){R.call(this,"c")}function gt(){}function kt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Qe(this),this.O=bt,e=G?125:void 0,this.T=new ze(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}A(yt,R),A(mt,R),A(gt,ht),gt.prototype.g=function(){return new XMLHttpRequest},gt.prototype.i=function(){return{}},pt=new gt;var bt=45e3,xt={},It={};function Et(e,t,n){e.K=1,e.v=zt(Ft(t)),e.s=n,e.P=!0,_t(e,null)}function _t(e,t){e.F=Date.now(),Ct(e),e.A=Ft(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),nn(n.i,"t",r),e.C=0,n=e.l.H,e.h=new wt,e.g=rr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new We(T(e.La,e,e.g),e.N)),Ye(e.S,e.g,"readystatechange",e.ib),t=e.H?he(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),it(),function(e,t,n,r,i,a){e.info((function(){if(e.g)if(a)for(var o="",s=a.split("&"),u=0;u<s.length;u++){var c=s[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function Tt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function St(e,t,n){for(var r,i=!0;!e.I&&e.C<n.length;){if((r=At(e,n))==It){4==t&&(e.o=4,ot(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==xt){e.o=4,ot(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),Lt(e,r)}Tt(e)&&r!=It&&r!=xt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ot(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xn(t),t.K=!0,ot(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Rt(e),Ot(e))}function At(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?It:(n=Number(t.substring(n,r)),isNaN(n)?xt:(r+=1)+n>t.length?It:(t=t.substr(r,n),e.C=r+n,t))}function Ct(e){e.V=Date.now()+e.O,Dt(e,e.O)}function Dt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ut(T(e.gb,e),t)}function Nt(e){e.B&&(g.clearTimeout(e.B),e.B=null)}function Ot(e){0==e.l.G||e.I||$n(e.l,e)}function Rt(e){Nt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ke(e.T),Je(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Lt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||ln(n.h,e)))if(!e.J&&ln(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(a){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Jn(n),Bn(n)}Qn(n),ot(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ut(T(n.cb,n),6e3));if(1>=cn(n.h)&&n.ja){try{n.ja()}catch(a){}n.ja=void 0}}else er(n,11)}else if((e.J||n.g==e)&&Jn(n),!P(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){var a=i[t];if(n.T=a[0],a=a[1],2==n.G)if("c"==a[0]){n.I=a[1],n.ka=a[2];var o=a[3];null!=o&&(n.ma=o,n.j.info("VER="+n.ma));var s=a[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));var u=a[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;var c=e.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.h;h.g||-1==l.indexOf("spdy")&&-1==l.indexOf("quic")&&-1==l.indexOf("h2")||(h.j=h.l,h.g=new Set,h.h&&(hn(h,h.h),h.h=null))}if(r.D){var f=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.za=f,qt(r.F,r.D,f))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var d=e;if((r=n).sa=nr(r,r.H?r.ka:null,r.V),d.J){fn(r.h,d);var p=d,v=r.J;v&&p.setTimeout(v),p.B&&(Nt(p),Ct(p)),r.g=d}else Wn(r);0<n.i.length&&zn(n)}else"stop"!=a[0]&&"close"!=a[0]||er(n,7);else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?er(n,7):jn(n):"noop"!=a[0]&&n.l&&n.l.wa(a),n.A=0)}it()}catch(a){}}function Pt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(w(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(w(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(var r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(w(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}(o=kt.prototype).setTimeout=function(e){this.O=e},o.ib=function(e){e=e.target;var t=this.L;t&&3==Ln(e)?t.l():this.La(e)},o.La=function(e){try{if(e==this.g)e:{var t=Ln(this.g),n=this.g.Ea();this.g.aa();if(!(3>t)&&(3!=t||G||this.g&&(this.h.h||this.g.fa()||Pn(this.g)))){this.I||4!=t||7==n||it(),Nt(this);var r=this.g.aa();this.Y=r;t:if(Tt(this)){var i=Pn(this.g);e="";var a=i.length,o=4==Ln(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Rt(this),Ot(this);var s="";break t}this.h.i=new g.TextDecoder}for(n=0;n<a;n++)this.h.h=!0,e+=this.h.i.decode(i[n],{stream:o&&n==a-1});i.splice(0,a),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==r,function(e,t,n,r,i,a,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+a+" "+o}))}(this.j,this.u,this.A,this.m,this.U,t,r),this.i){if(this.Z&&!this.J){t:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(u)){var l=u;break t}}l=null}if(!(r=l)){this.i=!1,this.o=3,ot(12),Rt(this),Ot(this);break e}Ze(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lt(this,r)}this.P?(St(this,t,s),G&&this.i&&3==t&&(Ye(this.S,this.T,"tick",this.hb),this.T.start())):(Ze(this.j,this.m,s,null),Lt(this,s)),4==t&&Rt(this),this.i&&!this.I&&(4==t?$n(this.l,this):(this.i=!1,Ct(this)))}else 400==r&&0<s.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),Rt(this),Ot(this)}}}catch(t){}},o.hb=function(){if(this.g){var e=Ln(this.g),t=this.g.fa();this.C<t.length&&(Nt(this),St(this,e,t),this.i&&4!=e&&Ct(this))}},o.cancel=function(){this.I=!0,Rt(this)},o.gb=function(){this.B=null;var e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(it(),ot(17)),Rt(this),this.o=2,Ot(this)):Dt(this,this.V-e)};var Mt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ut(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ut){this.h=void 0!==t?t:e.h,Vt(this,e.j),this.s=e.s,this.g=e.g,jt(this,e.m),this.l=e.l,t=e.i;var n=new $t;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Bt(this,n),this.o=e.o}else e&&(n=String(e).match(Mt))?(this.h=!!t,Vt(this,n[1]||"",!0),this.s=Kt(n[2]||""),this.g=Kt(n[3]||"",!0),jt(this,n[4]),this.l=Kt(n[5]||"",!0),Bt(this,n[6]||"",!0),this.o=Kt(n[7]||"")):(this.h=!!t,this.i=new $t(null,this.h))}function Ft(e){return new Ut(e)}function Vt(e,t,n){e.j=n?Kt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function jt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Bt(e,t,n){t instanceof $t?(e.i=t,function(e,t){t&&!e.j&&(Zt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(en(this,t),nn(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Ht(t,Yt)),e.i=new $t(t,e.h))}function qt(e,t,n){e.i.set(t,n)}function zt(e){return qt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ht(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Gt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Gt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ht(t,Wt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ht(t,Wt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ht(n,"/"==n.charAt(0)?Xt:Qt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ht(n,Jt)),e.join("")};var Wt=/[#\/\?@]/g,Qt=/[#\?:]/g,Xt=/[#\?]/g,Yt=/[#\?@]/g,Jt=/#/g;function $t(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Zt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var a=e[n].substring(0,r);i=e[n].substring(r+1)}else a=e[n];t(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function en(e,t){Zt(e),t=rn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tn(e,t){return Zt(e),t=rn(e,t),e.g.has(t)}function nn(e,t,n){en(e,t),0<n.length&&(e.i=null,e.g.set(rn(e,t),N(n)),e.h+=n.length)}function rn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(o=$t.prototype).add=function(e,t){Zt(this),this.i=null,e=rn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},o.forEach=function(e,t){Zt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},o.oa=function(){Zt(this);for(var e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[],r=0;r<t.length;r++)for(var i=e[r],a=0;a<i.length;a++)n.push(t[r]);return n},o.W=function(e){Zt(this);var t=[];if("string"==typeof e)tn(this,e)&&(t=t.concat(this.g.get(rn(this,e))));else{e=Array.from(this.g.values());for(var n=0;n<e.length;n++)t=t.concat(e[n])}return t},o.set=function(e,t){return Zt(this),this.i=null,tn(this,e=rn(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},o.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},o.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=Array.from(this.g.keys()),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r)),a=this.W(r);for(r=0;r<a.length;r++){var o=i;""!==a[r]&&(o+="="+encodeURIComponent(String(a[r]))),e.push(o)}}return this.i=e.join("&")};var an=function e(n,r){"use strict";t(s)(this,e),this.h=n,this.g=r};function on(e){this.l=e||sn,g.PerformanceNavigationTiming?e=0<(e=g.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(g.g&&g.g.Ga&&g.g.Ga()&&g.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sn=10;function un(e){return!!e.h||!!e.g&&e.g.size>=e.j}function cn(e){return e.h?1:e.g?e.g.size:0}function ln(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function hn(e,t){e.g?e.g.add(t):e.h=t}function fn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function dn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){var t=e.i,n=!0,r=!1,i=void 0;try{for(var a,o=e.g.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;t=t.concat(s.D)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}return N(e.i)}function pn(){}function vn(){this.g=new pn}function yn(e,t,n){var r=n||"";try{Pt(e,(function(e,n){var i=e;b(e)&&(i=Oe(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function mn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function gn(e){this.l=e.ac||null,this.j=e.jb||!1}function kn(e,t){Ce.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=wn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}on.prototype.cancel=function(){if(this.i=dn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){var e=!0,t=!1,n=void 0;try{for(var r,i=this.g.values()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){r.value.cancel()}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}this.g.clear()}},pn.prototype.stringify=function(e){return g.JSON.stringify(e,void 0)},pn.prototype.parse=function(e){return g.JSON.parse(e,void 0)},A(gn,ht),gn.prototype.g=function(){return new kn(this.l,this.j)},gn.prototype.i=function(e){return function(){return e}}({}),A(kn,Ce);var wn=0;function bn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function xn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,In(e)}function In(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(o=kn.prototype).open=function(e,t){if(this.readyState!=wn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,In(this)},o.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||g).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},o.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((function(){})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xn(this)),this.readyState=wn},o.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==g.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},o.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xn(this):In(this),3==this.readyState&&bn(this)}},o.Va=function(e){this.g&&(this.response=this.responseText=e,xn(this))},o.Ua=function(e){this.g&&(this.response=e,xn(this))},o.ga=function(){this.g&&xn(this)},o.setRequestHeader=function(e,t){this.v.append(e,t)},o.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},o.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var En=g.JSON.parse;function _n(e){Ce.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Tn,this.K=this.L=!1}A(_n,Ce);var Tn="",Sn=/^https?$/i,An=["POST","PUT"];function Cn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Dn(e),On(e)}function Dn(e){e.D||(e.D=!0,De(e,"complete"),De(e,"error"))}function Nn(e){if(e.h&&void 0!==m&&(!e.C[1]||4!=Ln(e)||2!=e.aa()))if(e.v&&4==Ln(e))He(e.Ha,0,e);else if(De(e,"readystatechange"),4==Ln(e)){e.h=!1;try{var t,n=e.aa();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var a=String(e.H).match(Mt)[1]||null;if(!a&&g.self&&g.self.location){var o=g.self.location.protocol;a=o.substr(0,o.length-1)}i=!Sn.test(a?a.toLowerCase():"")}t=i}if(t)De(e,"complete"),De(e,"success");else{e.m=6;try{var s=2<Ln(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.aa()+"]",Dn(e)}}finally{On(e)}}}function On(e,t){if(e.g){Rn(e);var n=e.g,r=e.C[0]?k:null;e.g=null,e.C=null,t||De(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Rn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(g.clearTimeout(e.A),e.A=null)}function Ln(e){return e.g?e.g.readyState:0}function Pn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Tn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Mn(e){var t="";return le(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Un(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Mn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):qt(e,t,n))}function Fn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Vn(e){this.Ca=0,this.i=[],this.j=new $e,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Fn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Fn("baseRetryDelayMs",5e3,e),this.bb=Fn("retryDelaySeedMs",1e4,e),this.$a=Fn("forwardChannelMaxRetries",2,e),this.ta=Fn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new on(e&&e.concurrentRequestLimit),this.Fa=new vn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function jn(e){if(qn(e),3==e.G){var t=e.U++,n=Ft(e.F);qt(n,"SID",e.I),qt(n,"RID",t),qt(n,"TYPE","terminate"),Hn(e,n),(t=new kt(e,e.j,t,void 0)).K=2,t.v=zt(Ft(n)),n=!1,g.navigator&&g.navigator.sendBeacon&&(n=g.navigator.sendBeacon(t.v.toString(),"")),!n&&g.Image&&((new Image).src=t.v,n=!0),n||(t.g=rr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Ct(t)}tr(e)}function Bn(e){e.g&&(Xn(e),e.g.cancel(),e.g=null)}function qn(e){Bn(e),e.u&&(g.clearTimeout(e.u),e.u=null),Jn(e),e.h.cancel(),e.m&&("number"==typeof e.m&&g.clearTimeout(e.m),e.m=null)}function zn(e){un(e.h)||e.m||(e.m=!0,Ve(e.Ja,e),e.C=0)}function Kn(e,t){var n;n=t?t.m:e.U++;var r=Ft(e.F);qt(r,"SID",e.I),qt(r,"RID",n),qt(r,"AID",e.T),Hn(e,r),e.o&&e.s&&Un(r,e.o,e.s),n=new kt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Gn(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),hn(e.h,n),Et(n,r,t)}function Hn(e,t){e.ia&&le(e.ia,(function(e,n){qt(t,n,e)})),e.l&&Pt({},(function(e,n){qt(t,n,e)}))}function Gn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?T(e.l.Ra,e.l,e):null;e:for(var i=e.i,a=-1;;){var o=["count="+n];-1==a?0<n?(a=i[0].h,o.push("ofs="+a)):a=0:o.push("ofs="+a);for(var s=!0,u=0;u<n;u++){var c=i[u].h,l=i[u].g;if(0>(c-=a))a=Math.max(0,i[u].h-100),s=!1;else try{yn(l,o,"req"+c+"_")}catch(e){r&&r(l)}}if(s){r=o.join("&");break e}}return e=e.i.splice(0,n),t.D=e,r}function Wn(e){e.g||e.u||(e.Z=1,Ve(e.Ia,e),e.A=0)}function Qn(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ut(T(e.Ia,e),Zn(e,e.A)),e.A++,!0)}function Xn(e){null!=e.B&&(g.clearTimeout(e.B),e.B=null)}function Yn(e){e.g=new kt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Ft(e.sa);qt(t,"RID","rpc"),qt(t,"SID",e.I),qt(t,"CI",e.L?"0":"1"),qt(t,"AID",e.T),qt(t,"TYPE","xmlhttp"),Hn(e,t),e.o&&e.s&&Un(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=zt(Ft(t)),n.s=null,n.P=!0,_t(n,e)}function Jn(e){null!=e.v&&(g.clearTimeout(e.v),e.v=null)}function $n(e,t){var n=null;if(e.g==t){Jn(e),Xn(e),e.g=null;var r=2}else{if(!ln(e.h,t))return;n=t.D,fn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;De(r=nt(),new st(r,n)),zn(e)}else Wn(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(cn(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=ut(T(e.Ja,e,t),Zn(e,e.C)),e.C++,0)))}(e,t)||2==r&&Qn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:er(e,5);break;case 4:er(e,10);break;case 3:er(e,6);break;default:er(e,2)}}function Zn(e,t){var n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function er(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=T(e.kb,e);n||(n=new Ut("//www.google.com/images/cleardot.gif"),g.location&&"http"==g.location.protocol||Vt(n,"https"),zt(n)),function(e,t){var n=new $e;if(g.Image){var r=new Image;r.onload=S(mn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=S(mn,n,r,"TestLoadImage: error",!1,t),r.onabort=S(mn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=S(mn,n,r,"TestLoadImage: timeout",!1,t),g.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else ot(2);e.G=0,e.l&&e.l.va(t),tr(e),qn(e)}function tr(e){if(e.G=0,e.la=[],e.l){var t=dn(e.h);0==t.length&&0==e.i.length||(O(e.la,t),O(e.la,e.i),e.h.i.length=0,N(e.i),e.i.length=0),e.l.ua()}}function nr(e,t,n){var r=n instanceof Ut?Ft(n):new Ut(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),jt(r,r.m);else{var i=g.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var a=new Ut(null,void 0);r&&Vt(a,r),t&&(a.g=t),i&&jt(a,i),n&&(a.l=n),r=a}return n=e.D,t=e.za,n&&t&&qt(r,n,t),qt(r,"VER",e.ma),Hn(e,r),r}function rr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new _n(new gn({jb:!0})):new _n(e.ra)).Ka(e.H),t}function ir(){}function ar(){if(K&&!(10<=Number(re)))throw Error("Environmental error: no available transport.")}function or(e,t){Ce.call(this),this.g=new Vn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!P(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!P(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new cr(this)}function sr(e){yt.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ur(){mt.call(this),this.status=1}function cr(e){this.g=e}(o=_n.prototype).Ka=function(e){this.L=e},o.da=function(e,n,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);n=n?n.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():pt.g(),this.C=this.u?ft(this.u):ft(pt),this.g.onreadystatechange=T(this.Ha,this);try{this.F=!0,this.g.open(n,String(e),!0),this.F=!1}catch(e){return void Cn(this,e)}if(e=r||"",r=new Map(this.headers),i){var a=!0,o=!1,s=void 0;if(Object.getPrototypeOf(i)===Object.prototype)for(var u in i)r.set(u,i[u]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));try{for(var c,l=i.keys()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=c.value;r.set(h,i.get(h))}}catch(e){o=!0,s=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw s}}}}i=Array.from(r.keys()).find((function(e){return"content-type"==e.toLowerCase()})),u=g.FormData&&e instanceof g.FormData,!(0<=D(An,n))||i||u||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");var d=!0,p=!1,v=void 0;try{for(var y,m=r[Symbol.iterator]();!(d=(y=m.next()).done);d=!0){var k=t(f)(y.value,2),w=k[0],b=k[1];this.g.setRequestHeader(w,b)}}catch(e){p=!0,v=e}finally{try{d||null==m.return||m.return()}finally{if(p)throw v}}this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Rn(this),0<this.B&&((this.K=function(e){return K&&te()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=T(this.qa,this)):this.A=He(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Cn(this,e)}},o.qa=function(){void 0!==m&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))},o.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,De(this,"complete"),De(this,"abort"),On(this))},o.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),On(this,!0)),_n.X.M.call(this)},o.Ha=function(){this.s||(this.F||this.v||this.l?Nn(this):this.fb())},o.fb=function(){Nn(this)},o.aa=function(){try{return 2<Ln(this)?this.g.status:-1}catch(e){return-1}},o.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},o.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),En(t)}},o.Ea=function(){return this.m},o.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(o=Vn.prototype).ma=8,o.G=1,o.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;var t=new kt(this,this.j,e,void 0),n=this.s;if(this.S&&(n?de(n=he(n),this.S):n=this.S),null!==this.o||this.N||(t.H=n,n=null),this.O)e:{for(var r=0,i=0;i<this.i.length;i++){var a=this.i[i];if(void 0===(a="__data__"in a.g&&"string"==typeof(a=a.g.__data__)?a.length:void 0))break;if(4096<(r+=a)){r=i;break e}if(4096===r||i===this.i.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=Gn(this,t,r),qt(i=Ft(this.F),"RID",e),qt(i,"CVER",22),this.D&&qt(i,"X-HTTP-Session-Id",this.D),Hn(this,i),n&&(this.N?r="headers="+encodeURIComponent(String(Mn(n)))+"&"+r:this.o&&Un(i,this.o,n)),hn(this.h,t),this.Ya&&qt(i,"TYPE","init"),this.O?(qt(i,"$req",r),qt(i,"SID","null"),t.Z=!0,Et(t,i,null)):Et(t,i,r),this.G=2}}else 3==this.G&&(e?Kn(this,e):0==this.i.length||un(this.h)||Kn(this))},o.Ia=function(){if(this.u=null,Yn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ut(T(this.eb,this),e)}},o.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ot(10),Bn(this),Yn(this))},o.cb=function(){null!=this.v&&(this.v=null,Bn(this),Qn(this),ot(19))},o.kb=function(e){e?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))},(o=ir.prototype).xa=function(){},o.wa=function(){},o.va=function(){},o.ua=function(){},o.Ra=function(){},ar.prototype.g=function(e,t){return new or(e,t)},A(or,Ce),or.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;ot(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=nr(e,null,e.V),zn(e)},or.prototype.close=function(){jn(this.g)},or.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Oe(e),e=n);t.i.push(new an(t.ab++,e)),3==t.G&&zn(t)},or.prototype.M=function(){this.g.l=null,delete this.j,jn(this.g),delete this.g,or.X.M.call(this)},A(sr,yt),A(ur,mt),A(cr,ir),cr.prototype.xa=function(){De(this.g,"a")},cr.prototype.wa=function(e){De(this.g,new sr(e))},cr.prototype.va=function(e){De(this.g,new ur)},cr.prototype.ua=function(){De(this.g,"b")},ar.prototype.createWebChannel=ar.prototype.g,or.prototype.send=or.prototype.u,or.prototype.open=or.prototype.m,or.prototype.close=or.prototype.close,ct.NO_ERROR=0,ct.TIMEOUT=8,ct.HTTP_ERROR=6,lt.COMPLETE="complete",dt.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",Ce.prototype.listen=Ce.prototype.N,_n.prototype.listenOnce=_n.prototype.O,_n.prototype.getLastError=_n.prototype.Oa,_n.prototype.getLastErrorCode=_n.prototype.Ea,_n.prototype.getStatus=_n.prototype.aa,_n.prototype.getResponseJson=_n.prototype.Sa,_n.prototype.getResponseText=_n.prototype.fa,_n.prototype.send=_n.prototype.da,_n.prototype.setWithCredentials=_n.prototype.Ka;var lr=y.createWebChannelTransport=function(){return new ar},hr=y.getStatEventTarget=function(){return nt()},fr=y.ErrorCode=ct,dr=y.EventType=lt,pr=y.Event=et,vr=y.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},yr=y.FetchXmlHttpFactory=gn,mr=y.WebChannel=dt,gr=y.XhrIo=_n})),a.register("dmXA5",(function(t,n){e(t.exports,"singupForm",(function(){return i})),e(t.exports,"emailInput",(function(){return s})),e(t.exports,"userNameInput",(function(){return c})),e(t.exports,"passInput",(function(){return h})),e(t.exports,"singupError",(function(){return p}));var r=a("fj1A3"),i=document.querySelector(".singup-form"),o=i.querySelector(".email-field"),s=document.querySelector(".email"),u=i.querySelector(".user-name-field"),c=document.querySelector(".user-name"),l=i.querySelector(".create-password"),h=document.querySelector(".password"),f=i.querySelector(".confirm-password"),d=document.querySelector(".cPassword"),p=document.querySelector(".singup-info-error");function v(){if(!s.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))return o.classList.add("invalid");o.classList.remove("invalid")}function y(){var e=c.value.length;if(!(4<=e&&e<=20))return u.classList.add("invalid");u.classList.remove("invalid")}function m(){if(!h.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))return l.classList.add("invalid");l.classList.remove("invalid")}function g(){if(h.value!==d.value||""===d.value)return f.classList.add("invalid");f.classList.remove("invalid")}document.querySelectorAll(".show-hide").forEach((function(e){e.addEventListener("click",(function(){var t=e.parentElement.querySelector("input");if("password"===t.type)return e.classList.replace("bx-hide","bx-show"),t.type="text";e.classList.replace("bx-show","bx-hide"),t.type="password"}))})),i.addEventListener("submit",(function(e){e.preventDefault(),v(),m(),g(),y(),s.addEventListener("keyup",v),h.addEventListener("keyup",m),d.addEventListener("keyup",g),c.addEventListener("keyup",y),o.classList.contains("invalid")||l.classList.contains("invalid")||f.classList.contains("invalid")||u.classList.contains("invalid")||r.signUpModal.classList.add("is-hidden")}))})),a.register("kn1mL",(function(t,n){e(t.exports,"loginForm",(function(){return i})),e(t.exports,"eInput",(function(){return s})),e(t.exports,"pInput",(function(){return c})),e(t.exports,"loginError",(function(){return l}));var r=a("fj1A3"),i=document.querySelector(".login-form"),o=i.querySelector(".email"),s=o.querySelector("input"),u=i.querySelector(".password"),c=u.querySelector("input"),l=document.querySelector(".login-info-error");i.addEventListener("submit",(function(e){function t(){if(s.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))o.classList.remove("error"),o.classList.add("valid");else{o.classList.add("error"),o.classList.remove("valid");var e=o.querySelector(".error-txt");""!=s.value?e.innerText="Enter a valid email address":e.innerText="Email can't be blank"}}function n(){""==c.value?(u.classList.add("error"),u.classList.remove("valid")):(u.classList.remove("error"),u.classList.add("valid"))}e.preventDefault(),""==s.value?o.classList.add("shake","error"):t(),""==c.value?u.classList.add("shake","error"):n(),setTimeout((function(){o.classList.remove("shake"),u.classList.remove("shake")}),500),s.addEventListener("keyup",t),c.addEventListener("keyup",n),o.classList.contains("error")||u.classList.contains("error")||r.loginModal.classList.add("is-hidden")}))}))}();
//# sourceMappingURL=library.33ca21b6.js.map
