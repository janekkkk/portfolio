(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{2881:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return a(4368)}])},2365:(e,t,a)=>{"use strict";a.d(t,{$:()=>m});var s=a(2676);a(5271);var n=a(7259);class i{async fetchAccessToken(){return n.Z.post(this.TOKEN_ENDPOINT,null,{params:{client_id:this.CLIENT_ID,client_secret:this.CLIENT_SECRET,grant_type:"refresh_token",refresh_token:this.REFRESH_TOKEN},headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>e.data)}async fetchNowPlaying(){try{let e=await this.fetchAccessToken();return n.Z.get(this.NOW_PLAYING_ENDPOINT,{headers:{Authorization:"Bearer ".concat(e.access_token),"Content-Type":"application/json"}}).then(e=>e.data)}catch(e){}}constructor(){this.CLIENT_ID="13bd4106d0974c38b7c9263dccf7841d",this.CLIENT_SECRET="decd6ce558ef4602951159c4d9e72a51",this.REFRESH_TOKEN="AQCrHjkuJvsrrDWMAdQEzMeOUJ0Bue2qHKyrZs_gT6OVjbSEgepjBfPowYDzZHfCsuwHMAknKKVpSupHKon3n2YfRtXf2fHNAh2ORN4OxB6Dgm-pGy3IsBhWk7KtlmBdLsE",this.NOW_PLAYING_ENDPOINT="https://api.spotify.com/v1/me/player/currently-playing",this.TOKEN_ENDPOINT="https://accounts.spotify.com/api/token"}}let r=new i;var l=a(7016);let c=(0,a(8100).U)(e=>({currentlyPlaying:{is_playing:!1,item:{name:"Not playing",artists:[{name:"Spotify"}]}},actions:{setCurrentlyPlaying:t=>e(()=>({currentlyPlaying:t}))}})),o=()=>{let{actions:e,currentlyPlaying:t}=c(e=>e);return(0,l.Z)(async()=>{try{let t=await r.fetchNowPlaying();t&&e.setCurrentlyPlaying(t)}catch(e){console.error({error:e})}}),{currentlyPlaying:t}},d=()=>{let{currentlyPlaying:e}=o();return e?(0,s.jsxs)("a",{href:"https://open.spotify.com/user/1141254664?si=7ffb0c596c384ccf",target:"_blank",className:"inline-flex flex-row w-full max-w-full truncate items-center justify-center hover:cursor-pointer",rel:"noreferrer",children:[(0,s.jsx)("svg",{className:"h-4 w-4 inline mr-2",viewBox:"0 0 168 168",children:(0,s.jsx)("path",{fill:"#1ED760",d:"M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"})}),(0,s.jsx)("p",{className:"text-gray-800 font-medium",children:e.item.name}),(0,s.jsx)("span",{className:"mx-2 text-gray-500",children:" – "}),(0,s.jsx)("p",{className:"text-gray-500 max-w-max truncate",children:e.item.artists[0].name})]}):null},h=[{name:"LinkedIn",href:"https://www.linkedin.com/in/janek-ozga-8753a276/",icon:e=>(0,s.jsx)("svg",{fill:"currentColor",viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})},{name:"Instagram",href:"https://www.instagram.com/janekdoingthings/",icon:e=>(0,s.jsx)("svg",{fill:"currentColor",viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})})},{name:"Twitter",href:"https://twitter.com/janekofoz",icon:e=>(0,s.jsx)("svg",{fill:"currentColor",viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})},{name:"GitHub",href:"https://github.com/janekkkk/",icon:e=>(0,s.jsx)("svg",{fill:"currentColor",viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})}],m=()=>(0,s.jsx)("footer",{className:"w-full",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8",children:[(0,s.jsx)("div",{className:"flex justify-center space-x-6 md:order-2",children:h.map(e=>(0,s.jsxs)("a",{href:e.href,target:"_blank",className:"text-gray-400 hover:text-gray-500",rel:"noreferrer",children:[(0,s.jsx)("span",{className:"sr-only",children:e.name}),(0,s.jsx)(e.icon,{className:"h-6 w-6","aria-hidden":"true"})]},e.name))}),(0,s.jsx)("div",{className:"mt-8 md:mt-0 md:order-1 mr-2",children:(0,s.jsx)(d,{})})]})})},5923:(e,t,a)=>{"use strict";a.d(t,{fz:()=>n,vu:()=>i,xB:()=>s});let s={title:"Janek Ozga",description:"I'm a frontend developer, tree planter, and a fun guy to hang around with. I like to build things.",siteURL:"https://janekozga.nl",ogImageURL:"/og.png",twitterHandle:"@janekofoz",siteName:"Janekozga.nl"},n=e=>"/"===e?s.siteURL:s.siteURL+e,i=()=>{{let e=document.createComment("\n\n\uD83D\uDC4B Checking out the source? \uD83D\uDC68‍\uD83D\uDCBB Cool! \uD83D\uDE0E It might be easier to read on GitHub though \uD83D\uDE09 -> https://github.com/janekkkk/portfolio \n\n");document.appendChild(e)}}},9286:(e,t,a)=>{"use strict";a.d(t,{J:()=>n});let s=(0,a(8100).U)(e=>({isInitialized:!1,actions:{setIsInitialized:()=>e(()=>({isInitialized:!0}))}})),n=()=>{let{isInitialized:e,actions:t}=s(e=>e);return{isAppInitialized:e,setIsAppInitialized:t.setIsInitialized}}},9196:(e,t,a)=>{"use strict";a.d(t,{e:()=>c});var s=a(2676),n=a(7544),i=a(7016),r=a(5271);let l=()=>{var e;return null!==(e=window)&&void 0!==e&&!!e.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches},c=()=>{let[e,t]=(0,n.Z)(!1),a=()=>{var e;(null===(e=window)||void 0===e?void 0:e.matchMedia)&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>t(l()))};(0,i.Z)(()=>{t(l()),a()});let c=()=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")};return(0,r.useEffect)(()=>{c()},[e]),(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{onClick:t,type:"button",className:"dark:hidden block font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800","data-hs-theme-click-value":"dark",children:(0,s.jsx)("span",{className:"group inline-flex shrink-0 justify-center items-center size-9",children:(0,s.jsx)("svg",{className:"shrink-0 size-5",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:(0,s.jsx)("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"})})})}),(0,s.jsx)("button",{type:"button",onClick:t,className:"dark:block hidden font-medium text-gray-900 rounded-full hover:bg-gray-400 focus:outline-none focus:bg-gray-500 dark:text-black dark:hover:bg-neutral-400 dark:focus:bg-neutral-800","data-hs-theme-click-value":"light",children:(0,s.jsx)("span",{className:"group inline-flex shrink-0 justify-center items-center size-9",children:(0,s.jsxs)("svg",{className:"shrink-0 size-5",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"4"}),(0,s.jsx)("path",{d:"M12 2v2"}),(0,s.jsx)("path",{d:"M12 20v2"}),(0,s.jsx)("path",{d:"m4.93 4.93 1.41 1.41"}),(0,s.jsx)("path",{d:"m17.66 17.66 1.41 1.41"}),(0,s.jsx)("path",{d:"M2 12h2"}),(0,s.jsx)("path",{d:"M20 12h2"}),(0,s.jsx)("path",{d:"m6.34 17.66-1.41 1.41"}),(0,s.jsx)("path",{d:"m19.07 4.93-1.41 1.41"})]})})})]})}},4368:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>j,default:()=>v});var s=a(2676),n=a(6153),i=a(5271),r=a(1671),l=a(4169),c=a(5923),o=a(4453),d=a(2365),h=a(9286),m=a(7016),u=a(9196);let x=e=>{let{children:t}=e,a=(0,r.useRouter)(),n=a.pathname,i=(0,c.fz)(n),{isAppInitialized:x,setIsAppInitialized:p}=(0,h.J)();return(0,m.Z)(()=>{x||((0,c.vu)(),p())}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.PB,{title:c.xB.title,description:c.xB.description,canonical:i,openGraph:{type:"website",locale:"en_US",url:i,title:c.xB.title,description:c.xB.description,images:[{url:c.xB.ogImageURL,width:1200,height:630,alt:"Janekozga.nl - personal site / portfolio"}],siteName:c.xB.siteName},twitter:{handle:c.xB.twitterHandle,site:c.xB.twitterHandle,cardType:"summary_large_image"},additionalMetaTags:[{property:"author",content:c.xB.title}],additionalLinkTags:[{rel:"icon",href:"/favicon.ico"},{rel:"manifest",href:"/site.webmanifest"}]}),(0,s.jsx)("div",{className:"absolute top-4 right-4",children:(0,s.jsx)(u.e,{})}),(0,s.jsxs)("div",{className:"flex flex-col justify-top items-center max-w-4xl mx-auto min-h-screen py-2 blog",children:[(0,s.jsx)("div",{className:"px-8 mb-6 flex ",children:(0,s.jsxs)("button",{type:"button",onClick:()=>a.back(),className:"flex items-center text-xl",children:[(0,s.jsx)(o.YwC,{}),(0,s.jsx)("span",{className:"ml-2",children:"Go back"})]})}),(0,s.jsxs)("div",{className:"px-4 sm:px-8 md:px-4",children:[(0,s.jsx)("main",{className:"flex flex-col w-full flex-1",children:(0,s.jsx)("article",{className:"prose",children:t})}),(0,s.jsx)(d.$,{})]})]})]})};var p=a(2119),f=a(4362),g=a.n(f),j=!0;let v=e=>{let{frontmatter:t,content:a}=e,[r,l]=(0,i.useState)(!1);return((0,m.Z)(()=>{l(!0)}),r)?(0,s.jsx)(p.n,{children:(0,s.jsx)(x,{children:(0,s.jsxs)("div",{className:"mx-auto",children:[(0,s.jsx)("h1",{children:t.title}),(0,s.jsx)(g(),{width:0,height:0,loading:"lazy",className:"h-48 w-full object-cover",src:"/".concat(t.socialImage),alt:t.title}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,n.Z)().render(a)}})]})})}):null}},2119:(e,t,a)=>{"use strict";a.d(t,{n:()=>c});var s=a(2676),n=a(1671),i=a(8883),r=a(9925),l=a(9286);let c=e=>{let{children:t}=e,{asPath:a,pathname:c}=(0,n.useRouter)(),o=(0,i.J)(),{isAppInitialized:d}=(0,l.J)();return(0,s.jsx)(r.E.div,{variants:o?null:{hidden:{opacity:0,x:d?"/"===c?200:-200:0,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:-100}},initial:"hidden",animate:"enter",exit:"exit",transition:{type:"linear"},children:t},a)}}},e=>{var t=t=>e(e.s=t);e.O(0,[965,843,906,888,774,179],()=>t(2881)),_N_E=e.O()}]);