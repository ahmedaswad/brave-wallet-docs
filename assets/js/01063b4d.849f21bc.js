"use strict";(self.webpackChunkbrave_wallet_docs=self.webpackChunkbrave_wallet_docs||[]).push([[630],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return u}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(i),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return i?n.createElement(h,o(o({ref:t},c),{},{components:i})):n.createElement(h,o({ref:t},c))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6883:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return u}});var n=i(7462),a=i(3366),r=(i(7294),i(3905)),o=["components"],l={sidebar_position:3},s="Restrictions for providers",p={unversionedId:"provider-availability",id:"provider-availability",title:"Restrictions for providers",description:"The provider objects (e.g. window.ethereum and window.braveSolana) are not provided in all contexts.",source:"@site/docs/provider-availability.md",sourceDirName:".",slug:"/provider-availability",permalink:"/provider-availability",editUrl:"https://github.com/brave/brave-wallet-docs/edit/main/docs/provider-availability.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Provider objects",permalink:"/provider-objects"},next:{title:"Default Wallet setting",permalink:"/default-wallet"}},c={},m=[{value:"Restrictions for insecure contexts",id:"restrictions-for-insecure-contexts",level:2},{value:"Restrictions in iframes",id:"restrictions-in-iframes",level:2},{value:"iOS",id:"ios",level:3},{value:"Example cases",id:"example-cases",level:2}],d={toc:m};function u(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"restrictions-for-providers"},"Restrictions for providers"),(0,r.kt)("p",null,"The provider objects (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"window.braveSolana"),") are not provided in all contexts."),(0,r.kt)("p",null,'Historically the web has had a notion of \u201cpowerful" APIs like geolocation and camera/microphone, which are subject to additional security restrictions. See for instance ',(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/secure-contexts/"},"https://www.w3.org/TR/secure-contexts/"),". "),(0,r.kt)("p",null,"Because they allow websites to request access to user funds, new web3 APIs like ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"window.braveSolana")," are subject to the same restrictions as other powerful APIs like ",(0,r.kt)("inlineCode",{parentName:"p"},"geolocation")," in Brave.\nAs a rule of thumb, if a context is not allowed to request access to geolocation, ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"window.braveSolana")," are ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," in the same contexts."),(0,r.kt)("p",null,"Provider objects are not accessible in private and Tor window."),(0,r.kt)("h2",{id:"restrictions-for-insecure-contexts"},"Restrictions for insecure contexts"),(0,r.kt)("p",null,'Only \u201csecure origins" as defined in ',(0,r.kt)("a",{parentName:"p",href:"https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features/#definitions"},"https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features/#definitions")," have access to ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"window.braveSolana"),".\nThis can be checked using ",(0,r.kt)("inlineCode",{parentName:"p"},"window.isSecureContext"),", including inside iframes.\nSecure contexts include sites that are served from HTTPS but also HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),"."),(0,r.kt)("h2",{id:"restrictions-in-iframes"},"Restrictions in iframes"),(0,r.kt)("p",null,"By default the provider objects are not exposed to 3p iframes.\nBrave exposes 2 new ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy"},"feature policies")," for Ethereum and Solana named ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"solana")," respectively."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"window.braveSolana")," are blocked in an iframe if ",(0,r.kt)("inlineCode",{parentName:"p"},"window.isSecureContext")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in that iframe."),(0,r.kt)("p",null,"In addition:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If the iframe is third party to the top-level origin, it will be blocked UNLESS the iframe has the ",(0,r.kt)("inlineCode",{parentName:"li"},'allow="{solana/ethereum}"'),' attribute (where \u201csolana" and \u201cethereum" values control the corresponding API permissions). '),(0,r.kt)("li",{parentName:"ol"},"If the iframe is first party to the top-level origin AND the ",(0,r.kt)("inlineCode",{parentName:"li"},"sandbox")," attribute is set on the iframe, it will be blocked UNLESS ",(0,r.kt)("inlineCode",{parentName:"li"},'sandbox="allow-same-origin"'),' is set. Note "allow-same-origin"` does nothing if the iframe is third-party.'),(0,r.kt)("li",{parentName:"ol"},"For security-conscious users, we add a setting to block window.{ethereum,solana} in ALL iframes, regardless of origin or attributes. This matches the default behavior on iOS.")),(0,r.kt)("h3",{id:"ios"},"iOS"),(0,r.kt)("p",null,"Currently on iOS, ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"window.braveSolana")," are both undefined in all iframes."),(0,r.kt)("h2",{id:"example-cases"},"Example cases"),(0,r.kt)("p",null,"In all these cases, the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"window.braveSolana")," request is coming from the innermost iframe."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"http://a.com")," -> blocked (insecure)"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"https://a.com")," -> allowed"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"https://a.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="http://a.com/">')," -> blocked (insecure/3p)"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"http://a.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="https://a.com/">')," -> blocked (insecure/3p) "),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"https://a.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="https://a.com">')," -> allowed"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"https://a.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="https://b.com">')," -> blocked (3p)"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"https://b.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="http://a.com/">')," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="https://b.com">')," -> blocked (insecure)"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"https://b.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="https://a.com">')," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="https://b.com">')," -> blocked (3p)"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"https://a.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="https://b.a.com">')," -> blocked (3p)"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"https://a.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="https://b.a.com" allow="ethereum">')," -> ethereum allowed, solana blocked"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"https://a.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="https://b.com" allow="ethereum">')," -> ethereum allowed, solana blocked"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"https://a.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="https://b.a.com" allow="ethereum; solana">')," -> ethereum allowed, solana allowed"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"https://a.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="https://a.com" sandbox>')," -> blocked (sandbox)"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"https://a.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="https://a.com" sandbox="allow-same-origin allow-scripts">')," -> allowed (but note this case is discouraged in ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox")," because it\u2019d allow the iframe to remove its own sandbox attribute)"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},'data://foo with <iframe src="data://bar">')," -> blocked (insecure)"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},'file://foo with <iframe src="file://bar">')," -> blocked (3p)"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"https://a.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="https://b.com" sandbox="allow-same-origin allow-scripts">')," -> blocked (3p)"),(0,r.kt)("li",{parentName:"ul"},"Top level ",(0,r.kt)("inlineCode",{parentName:"li"},"https://a.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},'<iframe src="https://b.com" sandbox="allow-scripts" allow="ethereum; solana">')," -> ethereum allowed, solana allowed")))}u.isMDXComponent=!0}}]);