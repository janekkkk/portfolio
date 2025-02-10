(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{9810:(t,e,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return s(5341)}])},7195:(t,e,s)=>{"use strict";s.d(e,{z:()=>r});let i=(0,s(9641).v)(t=>({isAppInitialized:!1,isDarkModeEnabled:!1,actions:{setIsAppInitialized:()=>t(()=>({isAppInitialized:!0})),toggleDarkMode:e=>t(t=>({isDarkModeEnabled:void 0===e?!t.isDarkModeEnabled:e}))}})),r=()=>({...i(t=>t)})},9731:(t,e,s)=>{"use strict";s.d(e,{YB:()=>r,lc:()=>i,ny:()=>n});let i={title:"Janek Ozga",description:"Welcome to my portfolio! I'm a frontend developer who loves crafting web experiences, exploring tech, and sharing my journey. Check out my projects, blog posts on coding, and experiments with fermenting, plant care, cooking and other interests.",siteURL:"https://janekozga.nl",ogImageURL:"/og.png",twitterHandle:"@janekofoz",siteName:"Janekozga.nl"},r=t=>"/"===t?i.siteURL:i.siteURL+t,n=()=>{{let t=document.createComment("\n\n\uD83D\uDC4B Checking out the source? \uD83D\uDC68‍\uD83D\uDCBB Cool! \uD83D\uDE0E It might be easier to read on GitHub though \uD83D\uDE09 -> https://github.com/janekkkk/portfolio \n\n");document.appendChild(t)}}},2441:(t,e,s)=>{"use strict";s.d(e,{A:()=>n});var i=s(758);let r=function(t){(0,i.useEffect)(t,[])},n=function(t){r(function(){t()})}},5341:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>J,isProd:()=>z});var i=s(6070),r=s(758);s(6409),s(3950);var n="undefined"==typeof window||"Deno"in globalThis;function a(){}function o(t,e){return"function"==typeof t?t(e):t}function u(t,e){let{type:s="all",exact:i,fetchStatus:r,predicate:n,queryKey:a,stale:o}=t;if(a){if(i){if(e.queryHash!==c(a,e.options))return!1}else if(!d(e.queryKey,a))return!1}if("all"!==s){let t=e.isActive();if("active"===s&&!t||"inactive"===s&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&(!r||r===e.state.fetchStatus)&&(!n||!!n(e))}function h(t,e){let{exact:s,status:i,predicate:r,mutationKey:n}=t;if(n){if(!e.options.mutationKey)return!1;if(s){if(l(e.options.mutationKey)!==l(n))return!1}else if(!d(e.options.mutationKey,n))return!1}return(!i||e.state.status===i)&&(!r||!!r(e))}function c(t,e){return(e?.queryKeyHashFn||l)(t)}function l(t){return JSON.stringify(t,(t,e)=>p(e)?Object.keys(e).sort().reduce((t,s)=>(t[s]=e[s],t),{}):e)}function d(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(s=>!d(t[s],e[s]))}function f(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function p(t){if(!y(t))return!1;let e=t.constructor;if(void 0===e)return!0;let s=e.prototype;return!!(y(s)&&s.hasOwnProperty("isPrototypeOf"))&&Object.getPrototypeOf(t)===Object.prototype}function y(t){return"[object Object]"===Object.prototype.toString.call(t)}function m(t,e,s=0){let i=[...t,e];return s&&i.length>s?i.slice(1):i}function v(t,e,s=0){let i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var g=Symbol();function b(t,e){return!t.queryFn&&e?.initialPromise?()=>e.initialPromise:t.queryFn&&t.queryFn!==g?t.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))}var w=function(){let t=[],e=0,s=t=>{t()},i=t=>{t()},r=t=>setTimeout(t,0),n=i=>{e?t.push(i):r(()=>{s(i)})},a=()=>{let e=t;t=[],e.length&&r(()=>{i(()=>{e.forEach(t=>{s(t)})})})};return{batch:t=>{let s;e++;try{s=t()}finally{--e||a()}return s},batchCalls:t=>(...e)=>{n(()=>{t(...e)})},schedule:n,setNotifyFunction:t=>{s=t},setBatchNotifyFunction:t=>{i=t},setScheduler:t=>{r=t}}}(),C=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},O=new class extends C{#t;#e;#s;constructor(){super(),this.#s=t=>{if(!n&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#t!==t&&(this.#t=t,this.onFocus())}onFocus(){let t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}},q=new class extends C{#i=!0;#e;#s;constructor(){super(),this.#s=t=>{if(!n&&window.addEventListener){let e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#i!==t&&(this.#i=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#i}};function S(t){return Math.min(1e3*2**t,3e4)}function P(t){return(t??"online")!=="online"||q.isOnline()}var F=class extends Error{constructor(t){super("CancelledError"),this.revert=t?.revert,this.silent=t?.silent}};function D(t){return t instanceof F}function E(t){let e,s=!1,i=0,r=!1,a=function(){let t,e;let s=new Promise((s,i)=>{t=s,e=i});function i(t){Object.assign(s,t),delete s.resolve,delete s.reject}return s.status="pending",s.catch(()=>{}),s.resolve=e=>{i({status:"fulfilled",value:e}),t(e)},s.reject=t=>{i({status:"rejected",reason:t}),e(t)},s}(),o=()=>O.isFocused()&&("always"===t.networkMode||q.isOnline())&&t.canRun(),u=()=>P(t.networkMode)&&t.canRun(),h=s=>{r||(r=!0,t.onSuccess?.(s),e?.(),a.resolve(s))},c=s=>{r||(r=!0,t.onError?.(s),e?.(),a.reject(s))},l=()=>new Promise(s=>{e=t=>{(r||o())&&s(t)},t.onPause?.()}).then(()=>{e=void 0,r||t.onContinue?.()}),d=()=>{let e;if(r)return;let a=0===i?t.initialPromise:void 0;try{e=a??t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(h).catch(e=>{if(r)return;let a=t.retry??(n?0:3),u=t.retryDelay??S,h="function"==typeof u?u(i,e):u,f=!0===a||"number"==typeof a&&i<a||"function"==typeof a&&a(i,e);if(s||!f){c(e);return}i++,t.onFail?.(i,e),new Promise(t=>{setTimeout(t,h)}).then(()=>o()?void 0:l()).then(()=>{s?c(e):d()})})};return{promise:a,cancel:e=>{r||(c(new F(e)),t.abort?.())},continue:()=>(e?.(),a),cancelRetry:()=>{s=!0},continueRetry:()=>{s=!1},canStart:u,start:()=>(u()?d():l().then(d),a)}}var A=class{#r;destroy(){this.clearGcTimeout()}scheduleGc(){var t;this.clearGcTimeout(),"number"==typeof(t=this.gcTime)&&t>=0&&t!==1/0&&(this.#r=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(n?1/0:3e5))}clearGcTimeout(){this.#r&&(clearTimeout(this.#r),this.#r=void 0)}},M=class extends A{#n;#a;#o;#u;#h;#c;constructor(t){super(),this.#c=!1,this.#h=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#o=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#n=function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,i=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=t.state??this.#n,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#u?.promise}setOptions(t){this.options={...this.#h,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#o.remove(this)}setData(t,e){var s,i;let r=(s=this.state.data,"function"==typeof(i=this.options).structuralSharing?i.structuralSharing(s,t):!1!==i.structuralSharing?function t(e,s){if(e===s)return e;let i=f(e)&&f(s);if(i||p(e)&&p(s)){let r=i?e:Object.keys(e),n=r.length,a=i?s:Object.keys(s),o=a.length,u=i?[]:{},h=0;for(let n=0;n<o;n++){let o=i?n:a[n];(!i&&r.includes(o)||i)&&void 0===e[o]&&void 0===s[o]?(u[o]=void 0,h++):(u[o]=t(e[o],s[o]),u[o]===e[o]&&void 0!==e[o]&&h++)}return n===o&&h===n?e:u}return s}(s,t):t);return this.#l({data:r,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),r}setState(t,e){this.#l({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#u?.promise;return this.#u?.cancel(t),e?e.then(a).catch(a):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#n)}isActive(){return this.observers.some(t=>{var e;return!1!==("function"==typeof(e=t.options.enabled)?e(this):e)})}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===g||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!Math.max(this.state.dataUpdatedAt+(t||0)-Date.now(),0)}onFocus(){let t=this.observers.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#u?.continue()}onOnline(){let t=this.observers.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#u?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#o.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#u&&(this.#c?this.#u.cancel({revert:!0}):this.#u.cancelRetry()),this.scheduleGc()),this.#o.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#l({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#u)return this.#u.continueRetry(),this.#u.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let s=new AbortController,i=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#c=!0,s.signal)})},r={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{let t=b(this.options,e),s={queryKey:this.queryKey,meta:this.meta};return(i(s),this.#c=!1,this.options.persister)?this.options.persister(t,s,this):t(s)}};i(r),this.options.behavior?.onFetch(r,this),this.#a=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==r.fetchOptions?.meta)&&this.#l({type:"fetch",meta:r.fetchOptions?.meta});let n=t=>{D(t)&&t.silent||this.#l({type:"error",error:t}),D(t)||(this.#o.config.onError?.(t,this),this.#o.config.onSettled?.(this.state.data,t,this)),this.scheduleGc()};return this.#u=E({initialPromise:e?.initialPromise,fn:r.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0===t){n(Error(`${this.queryHash} data is undefined`));return}try{this.setData(t)}catch(t){n(t);return}this.#o.config.onSuccess?.(t,this),this.#o.config.onSettled?.(t,this.state.error,this),this.scheduleGc()},onError:n,onFail:(t,e)=>{this.#l({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:r.options.retry,retryDelay:r.options.retryDelay,networkMode:r.options.networkMode,canRun:()=>!0}),this.#u.start()}#l(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":var s;return{...e,...(s=e.data,{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:P(this.options.networkMode)?"fetching":"paused",...void 0===s&&{error:null,status:"pending"}}),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=t.error;if(D(i)&&i.revert&&this.#a)return{...this.#a,fetchStatus:"idle"};return{...e,error:i,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),w.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),this.#o.notify({query:this,type:"updated",action:t})})}},k=class extends C{constructor(t={}){super(),this.config=t,this.#d=new Map}#d;build(t,e,s){let i=e.queryKey,r=e.queryHash??c(i,e),n=this.get(r);return n||(n=new M({cache:this,queryKey:i,queryHash:r,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(n)),n}add(t){this.#d.has(t.queryHash)||(this.#d.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#d.get(t.queryHash);e&&(t.destroy(),e===t&&this.#d.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){w.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#d.get(t)}getAll(){return[...this.#d.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>u(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>u(t,e)):e}notify(t){w.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){w.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){w.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Q=class extends A{#f;#p;#u;constructor(t){super(),this.mutationId=t.mutationId,this.#p=t.mutationCache,this.#f=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#f.includes(t)||(this.#f.push(t),this.clearGcTimeout(),this.#p.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#f=this.#f.filter(e=>e!==t),this.scheduleGc(),this.#p.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#f.length||("pending"===this.state.status?this.scheduleGc():this.#p.remove(this))}continue(){return this.#u?.continue()??this.execute(this.state.variables)}async execute(t){this.#u=E({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#l({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#p.canRun(this)});let e="pending"===this.state.status,s=!this.#u.canStart();try{if(!e){this.#l({type:"pending",variables:t,isPaused:s}),await this.#p.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#l({type:"pending",context:e,variables:t,isPaused:s})}let i=await this.#u.start();return await this.#p.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#p.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#l({type:"success",data:i}),i}catch(e){try{throw await this.#p.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#p.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#l({type:"error",error:e})}}finally{this.#p.runNext(this)}}#l(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),w.batch(()=>{this.#f.forEach(e=>{e.onMutationUpdate(t)}),this.#p.notify({mutation:this,type:"updated",action:t})})}},R=class extends C{constructor(t={}){super(),this.config=t,this.#y=new Set,this.#m=new Map,this.#v=0}#y;#m;#v;build(t,e,s){let i=new Q({mutationCache:this,mutationId:++this.#v,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){this.#y.add(t);let e=j(t);if("string"==typeof e){let s=this.#m.get(e);s?s.push(t):this.#m.set(e,[t])}this.notify({type:"added",mutation:t})}remove(t){if(this.#y.delete(t)){let e=j(t);if("string"==typeof e){let s=this.#m.get(e);if(s){if(s.length>1){let e=s.indexOf(t);-1!==e&&s.splice(e,1)}else s[0]===t&&this.#m.delete(e)}}}this.notify({type:"removed",mutation:t})}canRun(t){let e=j(t);if("string"!=typeof e)return!0;{let s=this.#m.get(e),i=s?.find(t=>"pending"===t.state.status);return!i||i===t}}runNext(t){let e=j(t);if("string"!=typeof e)return Promise.resolve();{let s=this.#m.get(e)?.find(e=>e!==t&&e.state.isPaused);return s?.continue()??Promise.resolve()}}clear(){w.batch(()=>{this.#y.forEach(t=>{this.notify({type:"removed",mutation:t})}),this.#y.clear(),this.#m.clear()})}getAll(){return Array.from(this.#y)}find(t){let e={exact:!0,...t};return this.getAll().find(t=>h(e,t))}findAll(t={}){return this.getAll().filter(e=>h(t,e))}notify(t){w.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return w.batch(()=>Promise.all(t.map(t=>t.continue().catch(a))))}};function j(t){return t.options.scope?.id}function x(t){return{onFetch:(e,s)=>{let i=e.options,r=e.fetchOptions?.meta?.fetchMore?.direction,n=e.state.data?.pages||[],a=e.state.data?.pageParams||[],o={pages:[],pageParams:[]},u=0,h=async()=>{let s=!1,h=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?s=!0:e.signal.addEventListener("abort",()=>{s=!0}),e.signal)})},c=b(e.options,e.fetchOptions),l=async(t,i,r)=>{if(s)return Promise.reject();if(null==i&&t.pages.length)return Promise.resolve(t);let n={queryKey:e.queryKey,pageParam:i,direction:r?"backward":"forward",meta:e.options.meta};h(n);let a=await c(n),{maxPages:o}=e.options,u=r?v:m;return{pages:u(t.pages,a,o),pageParams:u(t.pageParams,i,o)}};if(r&&n.length){let t="backward"===r,e={pages:n,pageParams:a},s=(t?function(t,{pages:e,pageParams:s}){return e.length>0?t.getPreviousPageParam?.(e[0],e,s[0],s):void 0}:T)(i,e);o=await l(e,s,t)}else{let e=t??n.length;do{let t=0===u?a[0]??i.initialPageParam:T(i,o);if(u>0&&null==t)break;o=await l(o,t),u++}while(u<e)}return o};e.options.persister?e.fetchFn=()=>e.options.persister?.(h,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s):e.fetchFn=h}}}function T(t,{pages:e,pageParams:s}){let i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,s[i],s):void 0}var I=class{#g;#p;#h;#b;#w;#C;#O;#q;constructor(t={}){this.#g=t.queryCache||new k,this.#p=t.mutationCache||new R,this.#h=t.defaultOptions||{},this.#b=new Map,this.#w=new Map,this.#C=0}mount(){this.#C++,1===this.#C&&(this.#O=O.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#g.onFocus())}),this.#q=q.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#g.onOnline())}))}unmount(){this.#C--,0===this.#C&&(this.#O?.(),this.#O=void 0,this.#q?.(),this.#q=void 0)}isFetching(t){return this.#g.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#p.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#g.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.defaultQueryOptions(t),s=this.#g.build(this,e),i=s.state.data;return void 0===i?this.fetchQuery(t):(t.revalidateIfStale&&s.isStaleByTime(o(e.staleTime,s))&&this.prefetchQuery(e),Promise.resolve(i))}getQueriesData(t){return this.#g.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let i=this.defaultQueryOptions({queryKey:t}),r=this.#g.get(i.queryHash),n=r?.state.data,a="function"==typeof e?e(n):e;if(void 0!==a)return this.#g.build(this,i).setData(a,{...s,manual:!0})}setQueriesData(t,e,s){return w.batch(()=>this.#g.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#g.get(e.queryHash)?.state}removeQueries(t){let e=this.#g;w.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#g,i={type:"active",...t};return w.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t,e={}){let s={revert:!0,...e};return Promise.all(w.batch(()=>this.#g.findAll(t).map(t=>t.cancel(s)))).then(a).catch(a)}invalidateQueries(t,e={}){return w.batch(()=>{if(this.#g.findAll(t).forEach(t=>{t.invalidate()}),t?.refetchType==="none")return Promise.resolve();let s={...t,type:t?.refetchType??t?.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t,e={}){let s={...e,cancelRefetch:e.cancelRefetch??!0};return Promise.all(w.batch(()=>this.#g.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(a)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(a)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#g.build(this,e);return s.isStaleByTime(o(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(a).catch(a)}fetchInfiniteQuery(t){return t.behavior=x(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(a).catch(a)}ensureInfiniteQueryData(t){return t.behavior=x(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return q.isOnline()?this.#p.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#g}getMutationCache(){return this.#p}getDefaultOptions(){return this.#h}setDefaultOptions(t){this.#h=t}setQueryDefaults(t,e){this.#b.set(l(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#b.values()],s={};return e.forEach(e=>{d(t,e.queryKey)&&Object.assign(s,e.defaultOptions)}),s}setMutationDefaults(t,e){this.#w.set(l(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#w.values()],s={};return e.forEach(e=>{d(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#h.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=c(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===g&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#h.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#g.clear(),this.#p.clear()}},U=r.createContext(void 0),K=({client:t,children:e})=>(r.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),(0,i.jsx)(U.Provider,{value:t,children:e})),L=s(2441),H=s(7195),G=s(9731);let _=()=>{var t;return null!==(t=window)&&void 0!==t&&!!t.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches},N=t=>{var e;(null===(e=window)||void 0===e?void 0:e.matchMedia)&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>t(_()))},z=!0,B=new I,J=t=>{let{Component:e,pageProps:s}=t,{actions:r}=(0,H.z)();return(0,L.A)(()=>{r.setIsAppInitialized(),(0,G.ny)(),r.toggleDarkMode(_()),N(r.toggleDarkMode)}),(0,i.jsx)(K,{client:B,children:(0,i.jsx)(e,{...s})})}},3950:()=>{},6409:()=>{},9641:(t,e,s)=>{"use strict";s.d(e,{v:()=>u});var i=s(758);let r=t=>{let e;let s=new Set,i=(t,i)=>{let r="function"==typeof t?t(e):t;if(!Object.is(r,e)){let t=e;e=(null!=i?i:"object"!=typeof r||null===r)?r:Object.assign({},e,r),s.forEach(s=>s(e,t))}},r=()=>e,n={setState:i,getState:r,getInitialState:()=>a,subscribe:t=>(s.add(t),()=>s.delete(t))},a=e=t(i,r,n);return n},n=t=>t?r(t):r,a=t=>t,o=t=>{let e=n(t),s=t=>(function(t,e=a){let s=i.useSyncExternalStore(t.subscribe,()=>e(t.getState()),()=>e(t.getInitialState()));return i.useDebugValue(s),s})(e,t);return Object.assign(s,e),s},u=t=>t?o(t):o}},t=>{var e=e=>t(t.s=e);t.O(0,[593,792],()=>(e(9810),e(1784))),_N_E=t.O()}]);