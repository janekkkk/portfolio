(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(8237)}])},2809:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:function(){return Footer}});var jsx_runtime=__webpack_require__(5893),react=__webpack_require__(7294),esm=__webpack_require__(24),axios=__webpack_require__(196),buffer=__webpack_require__(1876),process=__webpack_require__(3454);let CLIENT_ID=process.env.SPOTIFY_CLIENT_ID||"13bd4106d0974c38b7c9263dccf7841d",CLIENT_SECRET=process.env.SPOTIFY_CLIENT_SECRET||"61257a7c736b4dec8c6fa15c695d3ce5",REFRESH_TOKEN=process.env.REFRESH_TOKEN||"AQAiRr1Thu4iYnJt0IayIsd7xITt5W0qPy5vy7eTZ-_YhrNhVRQa48ti_Gn_LpTU1O2DGCCgqMqHimO06jJMkTuk2ZusHyE1sZiOAw3Un5Jk14-VO8IXPIF98G4oc9SG1uA",basic=buffer.Buffer.from("".concat(CLIENT_ID,":").concat(CLIENT_SECRET)).toString("base64");class SpotifyService{static async fetchAccessToken(){return axios.ZP.post("https://accounts.spotify.com/api/token",null,{params:{grant_type:"refresh_token",refresh_token:REFRESH_TOKEN},headers:{Authorization:"Basic ".concat(basic),"Content-Type":"application/x-www-form-urlencoded"}}).then(response=>response.data.access_token)}static async fetchNowPlaying(){let accessToken=await SpotifyService.fetchAccessToken();try{return axios.ZP.get("https://api.spotify.com/v1/me/player/currently-playing",{headers:{Authorization:"Bearer ".concat(accessToken),"Content-Type":"application/json"}}).then(response=>response.data)}catch(e){}}}let spotifyAtom=(0,esm.cn)({is_playing:!1,item:{name:"Not playing",artists:[{name:"Spotify"}]}}),useSpotify=()=>{let[spotify,setSpotify]=(0,esm.KO)(spotifyAtom);return(0,react.useEffect)(()=>{SpotifyService.fetchNowPlaying().then(setSpotify)},[]),{spotify}},CurrentlyPlaying=()=>{let{spotify}=useSpotify();return spotify?(0,jsx_runtime.jsxs)("a",{href:"https://open.spotify.com/user/1141254664?si=7ffb0c596c384ccf",target:"_blank",className:"inline-flex flex-row w-full max-w-full truncate items-center justify-center hover:cursor-pointer",rel:"noreferrer",children:[(0,jsx_runtime.jsx)("svg",{className:"h-4 w-4 inline mr-2",viewBox:"0 0 168 168",children:(0,jsx_runtime.jsx)("path",{fill:"#1ED760",d:"M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"})}),(0,jsx_runtime.jsx)("p",{className:"text-gray-800 dark:text-gray-200 font-medium",children:spotify.item.name}),(0,jsx_runtime.jsx)("span",{className:"mx-2 text-gray-500 dark:text-gray-300",children:" – "}),(0,jsx_runtime.jsx)("p",{className:"text-gray-500 dark:text-gray-300 max-w-max truncate",children:spotify.item.artists[0].name})]}):null},navigation=[{name:"LinkedIn",href:"https://www.linkedin.com/in/janek-ozga-8753a276/",icon:props=>(0,jsx_runtime.jsx)("svg",{fill:"currentColor",viewBox:"0 0 24 24",...props,children:(0,jsx_runtime.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})},{name:"Instagram",href:"https://www.instagram.com/janekdoingthings/",icon:props=>(0,jsx_runtime.jsx)("svg",{fill:"currentColor",viewBox:"0 0 24 24",...props,children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})})},{name:"Twitter",href:"https://twitter.com/janekofoz",icon:props=>(0,jsx_runtime.jsx)("svg",{fill:"currentColor",viewBox:"0 0 24 24",...props,children:(0,jsx_runtime.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})},{name:"GitHub",href:"https://github.com/janekkkk/",icon:props=>(0,jsx_runtime.jsx)("svg",{fill:"currentColor",viewBox:"0 0 24 24",...props,children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})}],Footer=()=>(0,jsx_runtime.jsx)("footer",{className:"bg-white w-full",children:(0,jsx_runtime.jsxs)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8",children:[(0,jsx_runtime.jsx)("div",{className:"flex justify-center space-x-6 md:order-2",children:navigation.map(item=>(0,jsx_runtime.jsxs)("a",{href:item.href,target:"_blank",className:"text-gray-400 hover:text-gray-500",rel:"noreferrer",children:[(0,jsx_runtime.jsx)("span",{className:"sr-only",children:item.name}),(0,jsx_runtime.jsx)(item.icon,{className:"h-6 w-6","aria-hidden":"true"})]},item.name))}),(0,jsx_runtime.jsx)("div",{className:"mt-8 md:mt-0 md:order-1 mr-2",children:(0,jsx_runtime.jsx)(CurrentlyPlaying,{})})]})})},2741:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{fz:function(){return getDefaultPageURL},vu:function(){return addCommentInSource},xB:function(){return defaultLayoutMetaData}});let defaultLayoutMetaData={title:"Janek Ozga",description:"I'm a frontend developer, tree planter, and a fun guy to hang around with. I like to build things.",siteURL:"https://janekozga.nl",ogImageURL:"/og.png",twitterHandle:"@janekofoz",siteName:"Janekozga.nl"},getDefaultPageURL=pathName=>"/"===pathName?defaultLayoutMetaData.siteURL:defaultLayoutMetaData.siteURL+pathName,addCommentInSource=()=>{{let comment=document.createComment("\n\n\uD83D\uDC4B Checking out the source? \uD83D\uDC68‍\uD83D\uDCBB Cool! \uD83D\uDE0E It might be easier to read on GitHub though \uD83D\uDE09 -> https://github.com/janekkkk/portfolio \n\n");document.appendChild(comment)}}},2059:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{J:function(){return useCoreState}});var jotai__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24);let isInitializedAtom=(0,jotai__WEBPACK_IMPORTED_MODULE_0__.cn)(!1),useCoreState=()=>{let[isInitialized,setIsInitialized]=(0,jotai__WEBPACK_IMPORTED_MODULE_0__.KO)(isInitializedAtom);return{isAppInitialized:isInitialized,setIsAppInitialized:setIsInitialized}}},8237:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Index:function(){return Index},__N_SSG:function(){return __N_SSG},default:function(){return pages}});var jsx_runtime=__webpack_require__(5893),react=__webpack_require__(7294);let posts=[{title:"Prettier Linting",href:"https://medium.com/@janekkkk/prettier-linting-c2aa755e583b",category:{name:"Blog",href:"https://medium.com/@janekkkk/prettier-linting-c2aa755e583b"},description:"Recently I’ve been getting into code quality tools as I’ve just started my graduation internship project. I wanted to save my findings for future reference but also share it with my new colleagues and the rest of the world.",date:"29 Nov, 2017",datetime:"2017-11-29",imageUrl:"https://miro.medium.com/max/2000/1*n_AHPX0MrFPveTqDft9VpQ.jpeg",readingTime:"4 min",author:{name:"Janek Ozga",href:"https://medium.com/@janekkkk",imageUrl:"https://miro.medium.com/fit/c/64/64/0*xVkUc83eWIWGw4uA.jpg"}},{title:"Indebuurt: Milieubewust shoppen met Browsy: ‘Voor elke aankoop plant je gratis een boom’ (Dutch)",href:"https://indebuurt.nl/nijmegen/bedrijvigheid/ondernemer-uitgelicht/milieubewust-shoppen-met-browsy~99157/",category:{name:"Article",href:"https://indebuurt.nl/nijmegen/bedrijvigheid/ondernemer-uitgelicht/milieubewust-shoppen-met-browsy~99157/"},description:"We kopen steeds meer online. Echt goed voor het milieu is dat niet, en daarom ontwikkelden Janek Ozga (29) en Christian Bleeker (29) met hun onderneming Browsy een app waarmee je voor elke aankoop een boom plant. Zonder daar zelf voor te betalen! “In een ideale wereld zou ons bedrijf niet eens hoeven bestaan,” vertelt Janek.",date:"06 Mar, 2020",datetime:"2020-03-06",imageUrl:"https://media.indebuurt.nl/nijmegen/2020/02/05223159/browsy-1.jpg",readingTime:"8 min",author:{name:"Sophie van den Boogaard",href:"https://indebuurt.nl/nijmegen/author/sophie/",imageUrl:"https://media.indebuurt.nl/nijmegen/2017/02/06052452/sophie-300x300.jpg"}},{title:"Trouw: Kunnen we de planeet herbebossen met \xe9\xe9n muisklik? (Dutch)",href:"https://www.trouw.nl/nieuws/kunnen-we-de-planeet-herbebossen-met-een-muisklik~b806cc49/",category:{name:"Article",href:"https://www.trouw.nl/nieuws/kunnen-we-de-planeet-herbebossen-met-een-muisklik~b806cc49/"},description:"Niet praten maar planten, is het motto van Browsy. Met een online aankoop steun je herbebossingsprojecten zonder dat het iets (extra’s) kost.",date:"06 Mar, 2020",datetime:"2020-03-06",imageUrl:"https://images0.persgroep.net/rcs/XqaQoqujGRpQBWDkNysOkFi49-o/diocontent/150940153/_fitwidth/1240?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.9&desiredformat=webp",readingTime:"6 min",author:{name:"Robin van Wechem",href:"https://www.trouw.nl/auteur/Robin%20van%20Wechem",imageUrl:"https://images.ctfassets.net/4ueclhpepsww/2nU5eeLoXO4mGCAg6YuGQM/9600e76ac157788427a95e0efd6f78d4/171031_RobinVanWechem_Fotografie_1_kleur.jpg?w=820"}}];var index_modern=__webpack_require__(6870);let Posts=param=>{let{className=""}=param;return(0,jsx_runtime.jsxs)("div",{className:"".concat(className," block"),children:[(0,jsx_runtime.jsx)("h2",{className:"block text-2xl md:text-4xl",children:"On the web"}),(0,jsx_runtime.jsx)("div",{className:"mt-6 max-w-lg mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none",children:posts.map(post=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-col rounded-lg shadow-lg overflow-hidden",children:[(0,jsx_runtime.jsx)("div",{className:"flex-shrink-0",children:(0,jsx_runtime.jsx)("img",{loading:"lazy",className:"h-48 w-full object-cover",src:post.imageUrl,alt:""})}),(0,jsx_runtime.jsxs)("div",{className:"flex-1 bg-white p-6 flex flex-col justify-between",children:[(0,jsx_runtime.jsxs)("div",{className:"flex-1",children:[(0,jsx_runtime.jsx)("p",{className:"text-sm font-medium text-indigo-600",children:(0,jsx_runtime.jsx)("a",{href:post.category.href,children:post.category.name})}),(0,jsx_runtime.jsxs)("a",{href:post.href,className:"block mt-2",children:[(0,jsx_runtime.jsx)("div",{className:"text-xl font-semibold text-gray-900",children:(0,jsx_runtime.jsx)(index_modern.Z,{text:post.title,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"})}),(0,jsx_runtime.jsx)("div",{className:"mt-3 text-base text-gray-500",children:(0,jsx_runtime.jsx)(index_modern.Z,{text:post.description,maxLine:"6",ellipsis:"...",trimRight:!0,basedOn:"letters"})})]})]}),(0,jsx_runtime.jsxs)("div",{className:"mt-6 flex items-center",children:[(0,jsx_runtime.jsx)("div",{className:"flex-shrink-0",children:(0,jsx_runtime.jsxs)("a",{href:post.author.href,children:[(0,jsx_runtime.jsx)("span",{className:"sr-only",children:post.author.name}),(0,jsx_runtime.jsx)("img",{loading:"lazy",className:"h-10 w-10 rounded-full",src:post.author.imageUrl,alt:"Portrait photo of Janek"})]})}),(0,jsx_runtime.jsxs)("div",{className:"ml-3",children:[(0,jsx_runtime.jsx)("p",{className:"text-sm font-medium text-gray-900",children:(0,jsx_runtime.jsx)("a",{href:post.author.href,children:post.author.name})}),(0,jsx_runtime.jsxs)("div",{className:"flex space-x-1 text-sm text-gray-500",children:[(0,jsx_runtime.jsx)("time",{dateTime:post.datetime,children:post.date}),(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",children:"\xb7"}),(0,jsx_runtime.jsxs)("span",{children:[post.readingTime," read"]})]})]})]})]})]},post.title))})]})};var grapheme_splitter=__webpack_require__(323),grapheme_splitter_default=__webpack_require__.n(grapheme_splitter),dist_react=__webpack_require__(5459),dist_react_default=__webpack_require__.n(dist_react);let AboutMe=param=>{let{className=""}=param,[mounted,setMounted]=(0,react.useState)(!1);(0,react.useEffect)(()=>setMounted(!0),[]);let stringSplitter=text=>{let splitter=new(grapheme_splitter_default());return splitter.splitGraphemes(text)};return mounted?(0,jsx_runtime.jsxs)("div",{className:className,children:[(0,jsx_runtime.jsx)("h1",{className:"mt-8 font-bold text-3xl md:text-6xl tracking-normal mb-4 text-black",children:"Hey there — I'm Janek."}),(0,jsx_runtime.jsx)("div",{className:"max-w-xl mt-5 text-xl mb-16",children:(0,jsx_runtime.jsx)(dist_react_default(),{options:{autoStart:!0,loop:!0,wrapperClassName:"text-2xl md:text-3xl",cursorClassName:"text-2xl md:text-3xl",delay:100,stringSplitter,strings:["Frontend developer \uD83D\uDC68‍\uD83D\uDCBB","Tree planter \uD83C\uDF31\uD83C\uDF33","Dutch \uD83C\uDDF3\uD83C\uDDF1 European \uD83C\uDDEA\uD83C\uDDFA","Avid hiker and runner \uD83C\uDFC3‍\uD83D\uDCA8","Tinkerer \uD83E\uDE9B‍\uD83D\uDCBB","Lover of peanut butter \uD83E\uDD5C","DevOps enthusiast \uD83E\uDD16","PC gamer \uD83C\uDFAE","CSS fan \uD83C\uDFA8","Permaculture gardener \uD83C\uDF31","DJ  \uD83C\uDFB6","Fermenter \uD83C\uDF7A","Cook \uD83E\uDD57\uD83E\uDD58\uD83C\uDF72","Petter of cats \uD83D\uDC31","Software engineer \uD83D\uDC68‍\uD83D\uDCBB","Music lover \uD83C\uDFB5"]}})})]}):null};var footer_component=__webpack_require__(2809),router=__webpack_require__(1163),next_seo_module=__webpack_require__(2962),layout_service=__webpack_require__(2741),esm=__webpack_require__(5678),useCoreState_hook=__webpack_require__(2059);let DefaultLayout=param=>{let{children}=param,pathName=(0,router.useRouter)().pathname,pageURL=(0,layout_service.fz)(pathName),{isAppInitialized,setIsAppInitialized}=(0,useCoreState_hook.J)();return(0,esm.qR)(()=>{isAppInitialized||((0,layout_service.vu)(),setIsAppInitialized(!0))}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(next_seo_module.PB,{title:layout_service.xB.title,description:layout_service.xB.description,canonical:pageURL,openGraph:{type:"website",locale:"en_US",url:pageURL,title:layout_service.xB.title,description:layout_service.xB.description,images:[{url:layout_service.xB.ogImageURL,width:1200,height:630,alt:"Janekozga.nl - personal site / portfolio"}],site_name:layout_service.xB.siteName},twitter:{handle:layout_service.xB.twitterHandle,site:layout_service.xB.twitterHandle,cardType:"summary_large_image"},additionalMetaTags:[{property:"author",content:layout_service.xB.title}],additionalLinkTags:[{rel:"icon",href:"/favicon.ico"},{rel:"manifest",href:"/site.webmanifest"}]}),(0,jsx_runtime.jsx)("div",{className:"flex flex-col justify-center items-start max-w-4xl mx-auto min-h-screen py-2",children:(0,jsx_runtime.jsxs)("div",{className:"px-8",children:[(0,jsx_runtime.jsx)("main",{className:"flex flex-col w-full flex-1",children:children}),(0,jsx_runtime.jsx)(footer_component.$,{})]})})]})},TimelineItem=param=>{let{timeline,timelineItem,index}=param;return(0,jsx_runtime.jsxs)("div",{className:"relative",children:[index!==timeline.length-1?(0,jsx_runtime.jsx)("span",{className:"absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200","aria-hidden":"true"}):null,(0,jsx_runtime.jsxs)("div",{className:"relative flex space-x-3",children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("span",{className:"".concat(timelineItem.iconBackground," h-8 w-8 rounded-full flex items-center justify-center\n                         ring-8 ring-white"),children:(0,jsx_runtime.jsx)(timelineItem.icon,{className:"h-5 w-5 text-white","aria-hidden":"true"})})}),(0,jsx_runtime.jsxs)("div",{className:"min-w-0 flex-1 pt-1.5 flex justify-between space-x-4",children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("p",{className:"text-sm text-gray-500",children:[timelineItem.content," ",timelineItem.href?(0,jsx_runtime.jsx)("a",{href:timelineItem.href,target:"_blank",className:"font-medium text-gray-900",rel:"noreferrer",children:timelineItem.target}):(0,jsx_runtime.jsx)("span",{className:"font-medium text-gray-900",children:timelineItem.target}),timelineItem.postfix?" ".concat(timelineItem.postfix):""]})}),(0,jsx_runtime.jsx)("div",{className:"text-right text-sm whitespace-nowrap text-gray-500",children:(0,jsx_runtime.jsx)("time",{dateTime:timelineItem.datetime,children:timelineItem.date})})]})]})]})};var BriefcaseIcon=__webpack_require__(6786),CodeIcon=__webpack_require__(3659),UserIcon=__webpack_require__(364),GlobeIcon=__webpack_require__(3716),OfficeBuildingIcon=__webpack_require__(9855);let timeline2022=[{content:"Started a new job with",target:"Kate Innovations",postfix:"as a frontend lead",href:"https://kateinnovations.com/",date:"February",icon:BriefcaseIcon.Z,iconBackground:"bg-kate"}],timeline2021=[{content:"Started building this",target:"portfolio",href:"https://github.com/janekkkk/portfolio",date:"August",icon:CodeIcon.Z,iconBackground:"bg-blue-500"},{content:"Helping improving the DAMP web app for",target:"Ohra/Nationale Nederlanden",postfix:"for Luminis",href:"https://www.ohra.nl/",date:"January",icon:BriefcaseIcon.Z,iconBackground:"bg-luminis"}],timeline2020=[{content:"Started learning",target:"React",date:"December",icon:CodeIcon.Z,iconBackground:"bg-blue-500"},{content:"Started",target:"living together",date:"September",icon:UserIcon.Z,iconBackground:"bg-gray-400",emoji:"\uD83D\uDD11️"},{content:"Helped improving the Magister.me web app for",target:"Iddink",postfix:"for Luminis",date:"February",href:"https://www.iddinkgroup.com/",icon:BriefcaseIcon.Z,iconBackground:"bg-luminis"},{content:"Created the new web app for",target:"Link",postfix:"for Luminis",date:"January",href:"https://www.linknederland.nl/",icon:BriefcaseIcon.Z,iconBackground:"bg-luminis"}],timeline2019=[{content:"Helped improving the hybrid app for",target:"Remeha/BDR",postfix:"for Luminis",href:"https://www.bdrthermeagroup.com/",date:"October",icon:BriefcaseIcon.Z,iconBackground:"bg-luminis"},{content:"Created the new hybrid app for",target:"Jifeline",postfix:"for Luminis",href:"https://www.jifeline.com/",date:"January",icon:BriefcaseIcon.Z,iconBackground:"bg-luminis"}],timeline2018=[{content:"Started my own company",target:"Browsy",href:"https://www.browsy.nl/",date:"September",icon:GlobeIcon.Z,iconBackground:"bg-green-500"},{content:"Helped building the Omons platform for",target:"Omons/Alliander",postfix:"for Luminis",href:"https://www.luminis.eu/nl/cases/omons/",date:"July",icon:BriefcaseIcon.Z,iconBackground:"bg-luminis"},{content:"Created the HIMMS conference website for",target:"Healthcare Information and Management Systems Society",postfix:"for Luminis",href:"https://www.himss.org/",date:"June",icon:BriefcaseIcon.Z,iconBackground:"bg-luminis"},{content:"Started my software engineer/consultant career at",target:"Luminis",href:"https://www.luminis.eu/",date:"June",icon:BriefcaseIcon.Z,iconBackground:"bg-luminis"},{content:"Finished my bachelor degree at",target:"HAN University of Applied Sciences",href:"https://www.han.nl/",date:"May",icon:OfficeBuildingIcon.Z,iconBackground:"bg-han"}];var classnames=__webpack_require__(4184),classnames_default=__webpack_require__.n(classnames);let Timeline=param=>{let{className=""}=param,[isHidden,setIsHidden]=(0,react.useState)(!0),toggle=()=>{setIsHidden(!isHidden),window.location="".concat((""+window.location).replace(/#[A-Za-z0-9_]*$/,""),"#timeline")};return(0,jsx_runtime.jsxs)("div",{className:className,id:"timeline",children:[(0,jsx_runtime.jsx)("h2",{className:"block text-2xl md:text-4xl",children:"Timeline"}),(0,jsx_runtime.jsxs)("div",{className:"mt-5 block",children:[(0,jsx_runtime.jsx)("h3",{className:"block",children:"2022"}),(0,jsx_runtime.jsx)("ul",{className:"block",children:timeline2022.map((timelineItem,index)=>(0,jsx_runtime.jsx)("li",{className:"pb-8 last:pb-0",children:(0,jsx_runtime.jsx)(TimelineItem,{timeline:timeline2021,timelineItem:timelineItem,index:index})},index+timelineItem.date))})]}),(0,jsx_runtime.jsx)("hr",{className:"border border-gray-200 dark:border-gray-600 w-full my-8"}),(0,jsx_runtime.jsxs)("div",{className:"mt-5 block",children:[(0,jsx_runtime.jsx)("h3",{className:"block",children:"2021"}),(0,jsx_runtime.jsx)("ul",{className:"block",children:timeline2021.map((timelineItem,index)=>(0,jsx_runtime.jsx)("li",{className:"pb-8 last:pb-0",children:(0,jsx_runtime.jsx)(TimelineItem,{timeline:timeline2021,timelineItem:timelineItem,index:index})},index+timelineItem.date))})]}),(0,jsx_runtime.jsx)("hr",{className:"border border-gray-200 dark:border-gray-600 w-full my-8"}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{className:"block",children:"2020"}),(0,jsx_runtime.jsx)("ul",{children:timeline2020.map((timelineItem,index)=>(0,jsx_runtime.jsx)("li",{className:"pb-8 last:pb-0",children:(0,jsx_runtime.jsx)(TimelineItem,{timeline:timeline2020,timelineItem:timelineItem,index:index})},index+timelineItem.date))})]}),(0,jsx_runtime.jsx)("div",{className:"mt-4 "+classnames_default()({hidden:!isHidden}),onClick:()=>toggle(),children:(0,jsx_runtime.jsx)("p",{className:"hover:cursor-pointer",children:"Show all timelines →"})}),(0,jsx_runtime.jsxs)("div",{className:classnames_default()({hidden:isHidden}),children:[(0,jsx_runtime.jsx)("hr",{className:"border border-gray-200 dark:border-gray-600 w-full my-8"}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{className:"block",children:"2019"}),(0,jsx_runtime.jsx)("ul",{children:timeline2019.map((timelineItem,index)=>(0,jsx_runtime.jsx)("li",{className:"pb-8 last:pb-0",children:(0,jsx_runtime.jsx)(TimelineItem,{timeline:timeline2019,timelineItem:timelineItem,index:index})},index+timelineItem.date))})]}),(0,jsx_runtime.jsx)("hr",{className:"border border-gray-200 dark:border-gray-600 w-full my-8"}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{className:"block",children:"2018"}),(0,jsx_runtime.jsx)("ul",{children:timeline2018.map((timelineItem,index)=>(0,jsx_runtime.jsx)("li",{className:"pb-8 last:pb-0",children:(0,jsx_runtime.jsx)(TimelineItem,{timeline:timeline2018,timelineItem:timelineItem,index:index})},index+timelineItem.date))})]}),(0,jsx_runtime.jsx)("div",{className:"mt-4 "+classnames_default()({hidden:isHidden}),onClick:()=>toggle(),children:(0,jsx_runtime.jsx)("p",{className:"hover:cursor-pointer",children:"Hide timelines ←"})})]})]})},Contact=param=>{let{className}=param;return(0,jsx_runtime.jsxs)("div",{className:"".concat(className," block"),children:[(0,jsx_runtime.jsx)("h2",{className:"block text-2xl md:text-4xl",children:"First things first"}),(0,jsx_runtime.jsxs)("p",{children:["You can"," ",(0,jsx_runtime.jsx)("a",{href:"/CV.pdf",target:"_blank",children:"download my CV"})," ","or contact me at ",(0,jsx_runtime.jsx)("a",{href:"mailto:iam@janekozga.nl",children:"iam@janekozga.nl"}),"."]})]})};var next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link);let Blogs=param=>{let{className="",posts}=param,[mounted,setMounted]=(0,react.useState)(!1);return((0,react.useEffect)(()=>setMounted(!0),[]),mounted)?(0,jsx_runtime.jsxs)("div",{className:"".concat(className," block"),children:[(0,jsx_runtime.jsx)("h2",{className:"block text-2xl md:text-4xl",children:"Blog"}),(0,jsx_runtime.jsx)("div",{className:"mt-6 max-w-lg mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none",children:posts.map(param=>{let{slug,frontmatter}=param;return(0,jsx_runtime.jsx)("div",{className:"flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer h-full",children:(0,jsx_runtime.jsxs)(link_default(),{href:"/blog/".concat(slug),as:"/blog/".concat(slug),className:"h-full flex flex-col",children:[(0,jsx_runtime.jsx)("div",{className:"flex-shrink-0",children:(0,jsx_runtime.jsx)("img",{loading:"lazy",className:"h-48 w-full object-cover",src:"/".concat(frontmatter.socialImage),alt:frontmatter.title})}),(0,jsx_runtime.jsxs)("div",{className:"flex-1 bg-white p-6 flex flex-col justify-between",children:[(0,jsx_runtime.jsxs)("div",{className:"flex-1",children:[(0,jsx_runtime.jsx)("p",{className:"text-sm font-medium text-indigo-600",children:frontmatter.tags.map(tag=>(0,jsx_runtime.jsxs)("span",{children:[tag," "]},tag))}),(0,jsx_runtime.jsxs)("a",{className:"flex flex-col mt-2",children:[(0,jsx_runtime.jsx)("div",{className:"text-xl font-semibold text-gray-900",children:(0,jsx_runtime.jsx)(index_modern.Z,{text:frontmatter.title,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"})}),(0,jsx_runtime.jsx)("div",{className:"mt-3 text-base text-gray-500 min-h-max",children:(0,jsx_runtime.jsx)(index_modern.Z,{text:frontmatter.metaDesc,maxLine:"6",ellipsis:"...",trimRight:!0,basedOn:"letters"})})]})]}),(0,jsx_runtime.jsxs)("div",{className:"mt-6 flex items-center",children:[(0,jsx_runtime.jsxs)("div",{className:"flex-shrink-0",children:[(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Janek Ozga"}),(0,jsx_runtime.jsx)("img",{loading:"lazy",className:"h-10 w-10 rounded-full",src:"/images/janek-cropped.jpg",alt:"Portrait photo of Janek"})]}),(0,jsx_runtime.jsxs)("div",{className:"ml-3",children:[(0,jsx_runtime.jsx)("p",{className:"text-sm font-medium text-gray-900",children:"Janek Ozga"}),(0,jsx_runtime.jsxs)("div",{className:"flex space-x-1 text-sm text-gray-500",children:[(0,jsx_runtime.jsx)("time",{dateTime:frontmatter.date,children:frontmatter.date}),(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",children:"\xb7"}),(0,jsx_runtime.jsxs)("span",{children:[frontmatter.readingTime," read"]})]})]})]})]})]})},slug)})})]}):null};var PageTransition=__webpack_require__(1210),__N_SSG=!0;let Index=param=>{let{posts}=param;return(0,jsx_runtime.jsx)(PageTransition.n,{children:(0,jsx_runtime.jsxs)(DefaultLayout,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(AboutMe,{className:"mt-8 md:mt-12 mb-0"})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Contact,{className:"mt-8 md:mt-12 mb-0"})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Timeline,{className:"mt-8 md:mt-12 mb-0"})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Blogs,{className:"mt-8 md:mt-12 mb-0",posts:Array.from(posts)})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Posts,{className:"mt-12 md:mt-14"})})]})})};var pages=Index},1210:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{n:function(){return PageTransition}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1163),framer_motion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3302),framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3779),_core_useCoreState_hook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2059);let PageTransition=param=>{let{children}=param,{asPath,pathname}=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),shouldReduceMotion=(0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.J)(),{isAppInitialized}=(0,_core_useCoreState_hook__WEBPACK_IMPORTED_MODULE_2__.J)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.E.div,{variants:shouldReduceMotion?null:{hidden:{opacity:0,x:isAppInitialized?"/"===pathname?200:-200:0,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:-100}},initial:"hidden",animate:"enter",exit:"exit",transition:{type:"linear"},children:children},asPath)}}},function(__webpack_require__){__webpack_require__.O(0,[108,342,774,888,179],function(){return __webpack_require__(__webpack_require__.s=8312)}),_N_E=__webpack_require__.O()}]);