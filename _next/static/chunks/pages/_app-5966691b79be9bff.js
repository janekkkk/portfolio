(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8510)}])},8510:function(t,e,n){"use strict";n.r(e);var i=n(1799),r=n(5893),u=(n(7294),n(1836),n(8767)),o=new u.QueryClient;e.default=function(t){var e=t.Component,n=t.pageProps;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u.QueryClientProvider,{client:o,children:(0,r.jsx)(e,(0,i.Z)({},n))})})}},1836:function(){},6747:function(t,e,n){"use strict";n.d(e,{QueryClient:function(){return i.S}});var i=n(1705),r=n(6755);n.o(r,"QueryClientProvider")&&n.d(e,{QueryClientProvider:function(){return r.QueryClientProvider}})},1909:function(t,e,n){"use strict";n.d(e,{E:function(){return u},j:function(){return r}});var i=console;function r(){return i}function u(t){i=t}},101:function(t,e,n){"use strict";n.d(e,{V:function(){return u}});var i=n(2288),r=function(){function t(){this.queue=[],this.transactions=0,this.notifyFn=function(t){t()},this.batchNotifyFn=function(t){t()}}var e=t.prototype;return e.batch=function(t){var e;this.transactions++;try{e=t()}finally{this.transactions--,this.transactions||this.flush()}return e},e.schedule=function(t){var e=this;this.transactions?this.queue.push(t):(0,i.A4)((function(){e.notifyFn(t)}))},e.batchCalls=function(t){var e=this;return function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];e.schedule((function(){t.apply(void 0,i)}))}},e.flush=function(){var t=this,e=this.queue;this.queue=[],e.length&&(0,i.A4)((function(){t.batchNotifyFn((function(){e.forEach((function(e){t.notifyFn(e)}))}))}))},e.setNotifyFunction=function(t){this.notifyFn=t},e.setBatchNotifyFunction=function(t){this.batchNotifyFn=t},t}(),u=new r},1705:function(t,e,n){"use strict";n.d(e,{S:function(){return q}});var i=n(7462),r=n(2288);function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,u(t,e)}var s=n(101),a=n(1909),c=function(){function t(){this.listeners=[]}var e=t.prototype;return e.subscribe=function(t){var e=this,n=t||function(){};return this.listeners.push(n),this.onSubscribe(),function(){e.listeners=e.listeners.filter((function(t){return t!==n})),e.onUnsubscribe()}},e.hasListeners=function(){return this.listeners.length>0},e.onSubscribe=function(){},e.onUnsubscribe=function(){},t}(),f=new(function(t){function e(){var e;return(e=t.call(this)||this).setup=function(t){var e;if(!r.sk&&(null==(e=window)?void 0:e.addEventListener)){var n=function(){return t()};return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),function(){window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}},e}o(e,t);var n=e.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){var t;this.hasListeners()||(null==(t=this.cleanup)||t.call(this),this.cleanup=void 0)},n.setEventListener=function(t){var e,n=this;this.setup=t,null==(e=this.cleanup)||e.call(this),this.cleanup=t((function(t){"boolean"===typeof t?n.setFocused(t):n.onFocus()}))},n.setFocused=function(t){this.focused=t,t&&this.onFocus()},n.onFocus=function(){this.listeners.forEach((function(t){t()}))},n.isFocused=function(){return"boolean"===typeof this.focused?this.focused:"undefined"===typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)},e}(c)),l=new(function(t){function e(){var e;return(e=t.call(this)||this).setup=function(t){var e;if(!r.sk&&(null==(e=window)?void 0:e.addEventListener)){var n=function(){return t()};return window.addEventListener("online",n,!1),window.addEventListener("offline",n,!1),function(){window.removeEventListener("online",n),window.removeEventListener("offline",n)}}},e}o(e,t);var n=e.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){var t;this.hasListeners()||(null==(t=this.cleanup)||t.call(this),this.cleanup=void 0)},n.setEventListener=function(t){var e,n=this;this.setup=t,null==(e=this.cleanup)||e.call(this),this.cleanup=t((function(t){"boolean"===typeof t?n.setOnline(t):n.onOnline()}))},n.setOnline=function(t){this.online=t,t&&this.onOnline()},n.onOnline=function(){this.listeners.forEach((function(t){t()}))},n.isOnline=function(){return"boolean"===typeof this.online?this.online:"undefined"===typeof navigator||"undefined"===typeof navigator.onLine||navigator.onLine},e}(c));function h(t){return Math.min(1e3*Math.pow(2,t),3e4)}function d(t){return"function"===typeof(null==t?void 0:t.cancel)}var v=function(t){this.revert=null==t?void 0:t.revert,this.silent=null==t?void 0:t.silent};function y(t){return t instanceof v}var p=function(t){var e,n,i,u,o=this,s=!1;this.abort=t.abort,this.cancel=function(t){return null==e?void 0:e(t)},this.cancelRetry=function(){s=!0},this.continueRetry=function(){s=!1},this.continue=function(){return null==n?void 0:n()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise((function(t,e){i=t,u=e}));var a=function(e){o.isResolved||(o.isResolved=!0,null==t.onSuccess||t.onSuccess(e),null==n||n(),i(e))},c=function(e){o.isResolved||(o.isResolved=!0,null==t.onError||t.onError(e),null==n||n(),u(e))};!function i(){if(!o.isResolved){var u;try{u=t.fn()}catch(y){u=Promise.reject(y)}e=function(t){if(!o.isResolved&&(c(new v(t)),null==o.abort||o.abort(),d(u)))try{u.cancel()}catch(e){}},o.isTransportCancelable=d(u),Promise.resolve(u).then(a).catch((function(e){var u,a;if(!o.isResolved){var d=null!=(u=t.retry)?u:3,v=null!=(a=t.retryDelay)?a:h,y="function"===typeof v?v(o.failureCount,e):v,p=!0===d||"number"===typeof d&&o.failureCount<d||"function"===typeof d&&d(o.failureCount,e);!s&&p?(o.failureCount++,null==t.onFail||t.onFail(o.failureCount,e),(0,r.Gh)(y).then((function(){if(!f.isFocused()||!l.isOnline())return new Promise((function(e){n=e,o.isPaused=!0,null==t.onPause||t.onPause()})).then((function(){n=void 0,o.isPaused=!1,null==t.onContinue||t.onContinue()}))})).then((function(){s?c(e):i()}))):c(e)}}))}}()},m=function(){function t(t){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=t.meta,this.scheduleGc()}var e=t.prototype;return e.setOptions=function(t){var e;this.options=(0,i.Z)({},this.defaultOptions,t),this.meta=null==t?void 0:t.meta,this.cacheTime=Math.max(this.cacheTime||0,null!=(e=this.options.cacheTime)?e:3e5)},e.setDefaultOptions=function(t){this.defaultOptions=t},e.scheduleGc=function(){var t=this;this.clearGcTimeout(),(0,r.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout((function(){t.optionalRemove()}),this.cacheTime))},e.clearGcTimeout=function(){clearTimeout(this.gcTimeout),this.gcTimeout=void 0},e.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},e.setData=function(t,e){var n,i,u=this.state.data,o=(0,r.SE)(t,u);return(null==(n=(i=this.options).isDataEqual)?void 0:n.call(i,u,o))?o=u:!1!==this.options.structuralSharing&&(o=(0,r.Q$)(u,o)),this.dispatch({data:o,type:"success",dataUpdatedAt:null==e?void 0:e.updatedAt}),o},e.setState=function(t,e){this.dispatch({type:"setState",state:t,setStateOptions:e})},e.cancel=function(t){var e,n=this.promise;return null==(e=this.retryer)||e.cancel(t),n?n.then(r.ZT).catch(r.ZT):Promise.resolve()},e.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},e.reset=function(){this.destroy(),this.setState(this.initialState)},e.isActive=function(){return this.observers.some((function(t){return!1!==t.options.enabled}))},e.isFetching=function(){return this.state.isFetching},e.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some((function(t){return t.getCurrentResult().isStale}))},e.isStaleByTime=function(t){return void 0===t&&(t=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,r.Kp)(this.state.dataUpdatedAt,t)},e.onFocus=function(){var t,e=this.observers.find((function(t){return t.shouldFetchOnWindowFocus()}));e&&e.refetch(),null==(t=this.retryer)||t.continue()},e.onOnline=function(){var t,e=this.observers.find((function(t){return t.shouldFetchOnReconnect()}));e&&e.refetch(),null==(t=this.retryer)||t.continue()},e.addObserver=function(t){-1===this.observers.indexOf(t)&&(this.observers.push(t),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))},e.removeObserver=function(t){-1!==this.observers.indexOf(t)&&(this.observers=this.observers.filter((function(e){return e!==t})),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:t}))},e.getObserversCount=function(){return this.observers.length},e.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},e.fetch=function(t,e){var n,i,u,o=this;if(this.state.isFetching)if(this.state.dataUpdatedAt&&(null==e?void 0:e.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var s;return null==(s=this.retryer)||s.continueRetry(),this.promise}if(t&&this.setOptions(t),!this.options.queryFn){var c=this.observers.find((function(t){return t.options.queryFn}));c&&this.setOptions(c.options)}var f=(0,r.mc)(this.queryKey),l=(0,r.G9)(),h={queryKey:f,pageParam:void 0,meta:this.meta};Object.defineProperty(h,"signal",{enumerable:!0,get:function(){if(l)return o.abortSignalConsumed=!0,l.signal}});var d,v,m={fetchOptions:e,options:this.options,queryKey:f,state:this.state,fetchFn:function(){return o.options.queryFn?(o.abortSignalConsumed=!1,o.options.queryFn(h)):Promise.reject("Missing queryFn")},meta:this.meta};(null==(n=this.options.behavior)?void 0:n.onFetch)&&(null==(d=this.options.behavior)||d.onFetch(m));(this.revertState=this.state,this.state.isFetching&&this.state.fetchMeta===(null==(i=m.fetchOptions)?void 0:i.meta))||this.dispatch({type:"fetch",meta:null==(v=m.fetchOptions)?void 0:v.meta});return this.retryer=new p({fn:m.fetchFn,abort:null==l||null==(u=l.abort)?void 0:u.bind(l),onSuccess:function(t){o.setData(t),null==o.cache.config.onSuccess||o.cache.config.onSuccess(t,o),0===o.cacheTime&&o.optionalRemove()},onError:function(t){y(t)&&t.silent||o.dispatch({type:"error",error:t}),y(t)||(null==o.cache.config.onError||o.cache.config.onError(t,o),(0,a.j)().error(t)),0===o.cacheTime&&o.optionalRemove()},onFail:function(){o.dispatch({type:"failed"})},onPause:function(){o.dispatch({type:"pause"})},onContinue:function(){o.dispatch({type:"continue"})},retry:m.options.retry,retryDelay:m.options.retryDelay}),this.promise=this.retryer.promise,this.promise},e.dispatch=function(t){var e=this;this.state=this.reducer(this.state,t),s.V.batch((function(){e.observers.forEach((function(e){e.onQueryUpdate(t)})),e.cache.notify({query:e,type:"queryUpdated",action:t})}))},e.getDefaultState=function(t){var e="function"===typeof t.initialData?t.initialData():t.initialData,n="undefined"!==typeof t.initialData?"function"===typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0,i="undefined"!==typeof e;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?null!=n?n:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:i?"success":"idle"}},e.reducer=function(t,e){var n,r;switch(e.type){case"failed":return(0,i.Z)({},t,{fetchFailureCount:t.fetchFailureCount+1});case"pause":return(0,i.Z)({},t,{isPaused:!0});case"continue":return(0,i.Z)({},t,{isPaused:!1});case"fetch":return(0,i.Z)({},t,{fetchFailureCount:0,fetchMeta:null!=(n=e.meta)?n:null,isFetching:!0,isPaused:!1},!t.dataUpdatedAt&&{error:null,status:"loading"});case"success":return(0,i.Z)({},t,{data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:null!=(r=e.dataUpdatedAt)?r:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var u=e.error;return y(u)&&u.revert&&this.revertState?(0,i.Z)({},this.revertState):(0,i.Z)({},t,{error:u,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return(0,i.Z)({},t,{isInvalidated:!0});case"setState":return(0,i.Z)({},t,e.state);default:return t}},t}(),b=function(t){function e(e){var n;return(n=t.call(this)||this).config=e||{},n.queries=[],n.queriesMap={},n}o(e,t);var n=e.prototype;return n.build=function(t,e,n){var i,u=e.queryKey,o=null!=(i=e.queryHash)?i:(0,r.Rm)(u,e),s=this.get(o);return s||(s=new m({cache:this,queryKey:u,queryHash:o,options:t.defaultQueryOptions(e),state:n,defaultOptions:t.getQueryDefaults(u),meta:e.meta}),this.add(s)),s},n.add=function(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"queryAdded",query:t}))},n.remove=function(t){var e=this.queriesMap[t.queryHash];e&&(t.destroy(),this.queries=this.queries.filter((function(e){return e!==t})),e===t&&delete this.queriesMap[t.queryHash],this.notify({type:"queryRemoved",query:t}))},n.clear=function(){var t=this;s.V.batch((function(){t.queries.forEach((function(e){t.remove(e)}))}))},n.get=function(t){return this.queriesMap[t]},n.getAll=function(){return this.queries},n.find=function(t,e){var n=(0,r.I6)(t,e)[0];return"undefined"===typeof n.exact&&(n.exact=!0),this.queries.find((function(t){return(0,r._x)(n,t)}))},n.findAll=function(t,e){var n=(0,r.I6)(t,e)[0];return Object.keys(n).length>0?this.queries.filter((function(t){return(0,r._x)(n,t)})):this.queries},n.notify=function(t){var e=this;s.V.batch((function(){e.listeners.forEach((function(e){e(t)}))}))},n.onFocus=function(){var t=this;s.V.batch((function(){t.queries.forEach((function(t){t.onFocus()}))}))},n.onOnline=function(){var t=this;s.V.batch((function(){t.queries.forEach((function(t){t.onOnline()}))}))},e}(c),g=function(){function t(t){this.options=(0,i.Z)({},t.defaultOptions,t.options),this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.observers=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0},this.meta=t.meta}var e=t.prototype;return e.setState=function(t){this.dispatch({type:"setState",state:t})},e.addObserver=function(t){-1===this.observers.indexOf(t)&&this.observers.push(t)},e.removeObserver=function(t){this.observers=this.observers.filter((function(e){return e!==t}))},e.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(r.ZT).catch(r.ZT)):Promise.resolve()},e.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},e.execute=function(){var t,e=this,n="loading"===this.state.status,i=Promise.resolve();return n||(this.dispatch({type:"loading",variables:this.options.variables}),i=i.then((function(){null==e.mutationCache.config.onMutate||e.mutationCache.config.onMutate(e.state.variables,e)})).then((function(){return null==e.options.onMutate?void 0:e.options.onMutate(e.state.variables)})).then((function(t){t!==e.state.context&&e.dispatch({type:"loading",context:t,variables:e.state.variables})}))),i.then((function(){return e.executeMutation()})).then((function(n){t=n,null==e.mutationCache.config.onSuccess||e.mutationCache.config.onSuccess(t,e.state.variables,e.state.context,e)})).then((function(){return null==e.options.onSuccess?void 0:e.options.onSuccess(t,e.state.variables,e.state.context)})).then((function(){return null==e.options.onSettled?void 0:e.options.onSettled(t,null,e.state.variables,e.state.context)})).then((function(){return e.dispatch({type:"success",data:t}),t})).catch((function(t){return null==e.mutationCache.config.onError||e.mutationCache.config.onError(t,e.state.variables,e.state.context,e),(0,a.j)().error(t),Promise.resolve().then((function(){return null==e.options.onError?void 0:e.options.onError(t,e.state.variables,e.state.context)})).then((function(){return null==e.options.onSettled?void 0:e.options.onSettled(void 0,t,e.state.variables,e.state.context)})).then((function(){throw e.dispatch({type:"error",error:t}),t}))}))},e.executeMutation=function(){var t,e=this;return this.retryer=new p({fn:function(){return e.options.mutationFn?e.options.mutationFn(e.state.variables):Promise.reject("No mutationFn found")},onFail:function(){e.dispatch({type:"failed"})},onPause:function(){e.dispatch({type:"pause"})},onContinue:function(){e.dispatch({type:"continue"})},retry:null!=(t=this.options.retry)?t:0,retryDelay:this.options.retryDelay}),this.retryer.promise},e.dispatch=function(t){var e=this;this.state=function(t,e){switch(e.type){case"failed":return(0,i.Z)({},t,{failureCount:t.failureCount+1});case"pause":return(0,i.Z)({},t,{isPaused:!0});case"continue":return(0,i.Z)({},t,{isPaused:!1});case"loading":return(0,i.Z)({},t,{context:e.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:e.variables});case"success":return(0,i.Z)({},t,{data:e.data,error:null,status:"success",isPaused:!1});case"error":return(0,i.Z)({},t,{data:void 0,error:e.error,failureCount:t.failureCount+1,isPaused:!1,status:"error"});case"setState":return(0,i.Z)({},t,e.state);default:return t}}(this.state,t),s.V.batch((function(){e.observers.forEach((function(e){e.onMutationUpdate(t)})),e.mutationCache.notify(e)}))},t}();var C=function(t){function e(e){var n;return(n=t.call(this)||this).config=e||{},n.mutations=[],n.mutationId=0,n}o(e,t);var n=e.prototype;return n.build=function(t,e,n){var i=new g({mutationCache:this,mutationId:++this.mutationId,options:t.defaultMutationOptions(e),state:n,defaultOptions:e.mutationKey?t.getMutationDefaults(e.mutationKey):void 0,meta:e.meta});return this.add(i),i},n.add=function(t){this.mutations.push(t),this.notify(t)},n.remove=function(t){this.mutations=this.mutations.filter((function(e){return e!==t})),t.cancel(),this.notify(t)},n.clear=function(){var t=this;s.V.batch((function(){t.mutations.forEach((function(e){t.remove(e)}))}))},n.getAll=function(){return this.mutations},n.find=function(t){return"undefined"===typeof t.exact&&(t.exact=!0),this.mutations.find((function(e){return(0,r.X7)(t,e)}))},n.findAll=function(t){return this.mutations.filter((function(e){return(0,r.X7)(t,e)}))},n.notify=function(t){var e=this;s.V.batch((function(){e.listeners.forEach((function(e){e(t)}))}))},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var t=this.mutations.filter((function(t){return t.state.isPaused}));return s.V.batch((function(){return t.reduce((function(t,e){return t.then((function(){return e.continue().catch(r.ZT)}))}),Promise.resolve())}))},e}(c);function O(t,e){return null==t.getNextPageParam?void 0:t.getNextPageParam(e[e.length-1],e)}function P(t,e){return null==t.getPreviousPageParam?void 0:t.getPreviousPageParam(e[0],e)}var q=function(){function t(t){void 0===t&&(t={}),this.queryCache=t.queryCache||new b,this.mutationCache=t.mutationCache||new C,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var e=t.prototype;return e.mount=function(){var t=this;this.unsubscribeFocus=f.subscribe((function(){f.isFocused()&&l.isOnline()&&(t.mutationCache.onFocus(),t.queryCache.onFocus())})),this.unsubscribeOnline=l.subscribe((function(){f.isFocused()&&l.isOnline()&&(t.mutationCache.onOnline(),t.queryCache.onOnline())}))},e.unmount=function(){var t,e;null==(t=this.unsubscribeFocus)||t.call(this),null==(e=this.unsubscribeOnline)||e.call(this)},e.isFetching=function(t,e){var n=(0,r.I6)(t,e)[0];return n.fetching=!0,this.queryCache.findAll(n).length},e.isMutating=function(t){return this.mutationCache.findAll((0,i.Z)({},t,{fetching:!0})).length},e.getQueryData=function(t,e){var n;return null==(n=this.queryCache.find(t,e))?void 0:n.state.data},e.getQueriesData=function(t){return this.getQueryCache().findAll(t).map((function(t){return[t.queryKey,t.state.data]}))},e.setQueryData=function(t,e,n){var i=(0,r._v)(t),u=this.defaultQueryOptions(i);return this.queryCache.build(this,u).setData(e,n)},e.setQueriesData=function(t,e,n){var i=this;return s.V.batch((function(){return i.getQueryCache().findAll(t).map((function(t){var r=t.queryKey;return[r,i.setQueryData(r,e,n)]}))}))},e.getQueryState=function(t,e){var n;return null==(n=this.queryCache.find(t,e))?void 0:n.state},e.removeQueries=function(t,e){var n=(0,r.I6)(t,e)[0],i=this.queryCache;s.V.batch((function(){i.findAll(n).forEach((function(t){i.remove(t)}))}))},e.resetQueries=function(t,e,n){var u=this,o=(0,r.I6)(t,e,n),a=o[0],c=o[1],f=this.queryCache,l=(0,i.Z)({},a,{active:!0});return s.V.batch((function(){return f.findAll(a).forEach((function(t){t.reset()})),u.refetchQueries(l,c)}))},e.cancelQueries=function(t,e,n){var i=this,u=(0,r.I6)(t,e,n),o=u[0],a=u[1],c=void 0===a?{}:a;"undefined"===typeof c.revert&&(c.revert=!0);var f=s.V.batch((function(){return i.queryCache.findAll(o).map((function(t){return t.cancel(c)}))}));return Promise.all(f).then(r.ZT).catch(r.ZT)},e.invalidateQueries=function(t,e,n){var u,o,a,c=this,f=(0,r.I6)(t,e,n),l=f[0],h=f[1],d=(0,i.Z)({},l,{active:null==(u=null!=(o=l.refetchActive)?o:l.active)||u,inactive:null!=(a=l.refetchInactive)&&a});return s.V.batch((function(){return c.queryCache.findAll(l).forEach((function(t){t.invalidate()})),c.refetchQueries(d,h)}))},e.refetchQueries=function(t,e,n){var u=this,o=(0,r.I6)(t,e,n),a=o[0],c=o[1],f=s.V.batch((function(){return u.queryCache.findAll(a).map((function(t){return t.fetch(void 0,(0,i.Z)({},c,{meta:{refetchPage:null==a?void 0:a.refetchPage}}))}))})),l=Promise.all(f).then(r.ZT);return(null==c?void 0:c.throwOnError)||(l=l.catch(r.ZT)),l},e.fetchQuery=function(t,e,n){var i=(0,r._v)(t,e,n),u=this.defaultQueryOptions(i);"undefined"===typeof u.retry&&(u.retry=!1);var o=this.queryCache.build(this,u);return o.isStaleByTime(u.staleTime)?o.fetch(u):Promise.resolve(o.state.data)},e.prefetchQuery=function(t,e,n){return this.fetchQuery(t,e,n).then(r.ZT).catch(r.ZT)},e.fetchInfiniteQuery=function(t,e,n){var i=(0,r._v)(t,e,n);return i.behavior={onFetch:function(t){t.fetchFn=function(){var e,n,i,u,o,s,a,c=null==(e=t.fetchOptions)||null==(n=e.meta)?void 0:n.refetchPage,f=null==(i=t.fetchOptions)||null==(u=i.meta)?void 0:u.fetchMore,l=null==f?void 0:f.pageParam,h="forward"===(null==f?void 0:f.direction),v="backward"===(null==f?void 0:f.direction),y=(null==(o=t.state.data)?void 0:o.pages)||[],p=(null==(s=t.state.data)?void 0:s.pageParams)||[],m=(0,r.G9)(),b=null==m?void 0:m.signal,g=p,C=!1,q=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},F=function(t,e,n,i){return g=i?[e].concat(g):[].concat(g,[e]),i?[n].concat(t):[].concat(t,[n])},w=function(e,n,i,r){if(C)return Promise.reject("Cancelled");if("undefined"===typeof i&&!n&&e.length)return Promise.resolve(e);var u={queryKey:t.queryKey,signal:b,pageParam:i,meta:t.meta},o=q(u),s=Promise.resolve(o).then((function(t){return F(e,i,t,r)}));return d(o)&&(s.cancel=o.cancel),s};if(y.length)if(h){var S="undefined"!==typeof l,Q=S?l:O(t.options,y);a=w(y,S,Q)}else if(v){var E="undefined"!==typeof l,A=E?l:P(t.options,y);a=w(y,E,A,!0)}else!function(){g=[];var e="undefined"===typeof t.options.getNextPageParam,n=!c||!y[0]||c(y[0],0,y);a=n?w([],e,p[0]):Promise.resolve(F([],p[0],y[0]));for(var i=function(n){a=a.then((function(i){if(!c||!y[n]||c(y[n],n,y)){var r=e?p[n]:O(t.options,i);return w(i,e,r)}return Promise.resolve(F(i,p[n],y[n]))}))},r=1;r<y.length;r++)i(r)}();else a=w([]);var D=a.then((function(t){return{pages:t,pageParams:g}}));return D.cancel=function(){C=!0,null==m||m.abort(),d(a)&&a.cancel()},D}}},this.fetchQuery(i)},e.prefetchInfiniteQuery=function(t,e,n){return this.fetchInfiniteQuery(t,e,n).then(r.ZT).catch(r.ZT)},e.cancelMutations=function(){var t=this,e=s.V.batch((function(){return t.mutationCache.getAll().map((function(t){return t.cancel()}))}));return Promise.all(e).then(r.ZT).catch(r.ZT)},e.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},e.executeMutation=function(t){return this.mutationCache.build(this,t).execute()},e.getQueryCache=function(){return this.queryCache},e.getMutationCache=function(){return this.mutationCache},e.getDefaultOptions=function(){return this.defaultOptions},e.setDefaultOptions=function(t){this.defaultOptions=t},e.setQueryDefaults=function(t,e){var n=this.queryDefaults.find((function(e){return(0,r.yF)(t)===(0,r.yF)(e.queryKey)}));n?n.defaultOptions=e:this.queryDefaults.push({queryKey:t,defaultOptions:e})},e.getQueryDefaults=function(t){var e;return t?null==(e=this.queryDefaults.find((function(e){return(0,r.to)(t,e.queryKey)})))?void 0:e.defaultOptions:void 0},e.setMutationDefaults=function(t,e){var n=this.mutationDefaults.find((function(e){return(0,r.yF)(t)===(0,r.yF)(e.mutationKey)}));n?n.defaultOptions=e:this.mutationDefaults.push({mutationKey:t,defaultOptions:e})},e.getMutationDefaults=function(t){var e;return t?null==(e=this.mutationDefaults.find((function(e){return(0,r.to)(t,e.mutationKey)})))?void 0:e.defaultOptions:void 0},e.defaultQueryOptions=function(t){if(null==t?void 0:t._defaulted)return t;var e=(0,i.Z)({},this.defaultOptions.queries,this.getQueryDefaults(null==t?void 0:t.queryKey),t,{_defaulted:!0});return!e.queryHash&&e.queryKey&&(e.queryHash=(0,r.Rm)(e.queryKey,e)),e},e.defaultQueryObserverOptions=function(t){return this.defaultQueryOptions(t)},e.defaultMutationOptions=function(t){return(null==t?void 0:t._defaulted)?t:(0,i.Z)({},this.defaultOptions.mutations,this.getMutationDefaults(null==t?void 0:t.mutationKey),t,{_defaulted:!0})},e.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},t}()},6755:function(){},2288:function(t,e,n){"use strict";n.d(e,{A4:function(){return q},G9:function(){return F},Gh:function(){return P},I6:function(){return l},Kp:function(){return c},PN:function(){return s},Q$:function(){return b},Rm:function(){return v},SE:function(){return o},X7:function(){return d},ZT:function(){return u},_v:function(){return f},_x:function(){return h},mc:function(){return a},sk:function(){return r},to:function(){return p},yF:function(){return y}});var i=n(7462),r="undefined"===typeof window;function u(){}function o(t,e){return"function"===typeof t?t(e):t}function s(t){return"number"===typeof t&&t>=0&&t!==1/0}function a(t){return Array.isArray(t)?t:[t]}function c(t,e){return Math.max(t+(e||0)-Date.now(),0)}function f(t,e,n){return O(t)?"function"===typeof e?(0,i.Z)({},n,{queryKey:t,queryFn:e}):(0,i.Z)({},e,{queryKey:t}):t}function l(t,e,n){return O(t)?[(0,i.Z)({},e,{queryKey:t}),n]:[t||{},e]}function h(t,e){var n=t.active,i=t.exact,r=t.fetching,u=t.inactive,o=t.predicate,s=t.queryKey,a=t.stale;if(O(s))if(i){if(e.queryHash!==v(s,e.options))return!1}else if(!p(e.queryKey,s))return!1;var c=function(t,e){return!0===t&&!0===e||null==t&&null==e?"all":!1===t&&!1===e?"none":(null!=t?t:!e)?"active":"inactive"}(n,u);if("none"===c)return!1;if("all"!==c){var f=e.isActive();if("active"===c&&!f)return!1;if("inactive"===c&&f)return!1}return("boolean"!==typeof a||e.isStale()===a)&&(("boolean"!==typeof r||e.isFetching()===r)&&!(o&&!o(e)))}function d(t,e){var n=t.exact,i=t.fetching,r=t.predicate,u=t.mutationKey;if(O(u)){if(!e.options.mutationKey)return!1;if(n){if(y(e.options.mutationKey)!==y(u))return!1}else if(!p(e.options.mutationKey,u))return!1}return("boolean"!==typeof i||"loading"===e.state.status===i)&&!(r&&!r(e))}function v(t,e){return((null==e?void 0:e.queryKeyHashFn)||y)(t)}function y(t){var e,n=a(t);return e=n,JSON.stringify(e,(function(t,e){return g(e)?Object.keys(e).sort().reduce((function(t,n){return t[n]=e[n],t}),{}):e}))}function p(t,e){return m(a(t),a(e))}function m(t,e){return t===e||typeof t===typeof e&&(!(!t||!e||"object"!==typeof t||"object"!==typeof e)&&!Object.keys(e).some((function(n){return!m(t[n],e[n])})))}function b(t,e){if(t===e)return t;var n=Array.isArray(t)&&Array.isArray(e);if(n||g(t)&&g(e)){for(var i=n?t.length:Object.keys(t).length,r=n?e:Object.keys(e),u=r.length,o=n?[]:{},s=0,a=0;a<u;a++){var c=n?a:r[a];o[c]=b(t[c],e[c]),o[c]===t[c]&&s++}return i===u&&s===i?t:o}return e}function g(t){if(!C(t))return!1;var e=t.constructor;if("undefined"===typeof e)return!0;var n=e.prototype;return!!C(n)&&!!n.hasOwnProperty("isPrototypeOf")}function C(t){return"[object Object]"===Object.prototype.toString.call(t)}function O(t){return"string"===typeof t||Array.isArray(t)}function P(t){return new Promise((function(e){setTimeout(e,t)}))}function q(t){Promise.resolve().then(t).catch((function(t){return setTimeout((function(){throw t}))}))}function F(){if("function"===typeof AbortController)return new AbortController}},8767:function(t,e,n){"use strict";n.d(e,{QueryClient:function(){return i.QueryClient},QueryClientProvider:function(){return r.QueryClientProvider}});var i=n(6747);n.o(i,"QueryClientProvider")&&n.d(e,{QueryClientProvider:function(){return i.QueryClientProvider}});var r=n(1373)},1373:function(t,e,n){"use strict";n.d(e,{QueryClientProvider:function(){return l}});var i=n(101),r=n(3935).unstable_batchedUpdates;i.V.setBatchNotifyFunction(r);var u=n(1909),o=console;(0,u.E)(o);var s=n(7294),a=s.createContext(void 0),c=s.createContext(!1);function f(t){return t&&"undefined"!==typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=a),window.ReactQueryClientContext):a}var l=function(t){var e=t.client,n=t.contextSharing,i=void 0!==n&&n,r=t.children;s.useEffect((function(){return e.mount(),function(){e.unmount()}}),[e]);var u=f(i);return s.createElement(c.Provider,{value:i},s.createElement(u.Provider,{value:e},r))}},7462:function(t,e,n){"use strict";function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},i.apply(this,arguments)}n.d(e,{Z:function(){return i}})},1799:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){i(t,e,n[e])}))}return t}n.d(e,{Z:function(){return r}})}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(1118),e(387)}));var n=t.O();_N_E=n}]);