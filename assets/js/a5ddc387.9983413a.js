"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[5953],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6253:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(4137)),i=["components"],o={},p="http",s={unversionedId:"reference/cli/http",id:"reference/cli/http",title:"http",description:"The http command sends objects in a payload to the defined HTTP(S) endpoint.",source:"@site/docs/reference/cli/http.md",sourceDirName:"reference/cli",slug:"/reference/cli/http",permalink:"/docs/reference/cli/http",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/reference/cli/http.md",tags:[],version:"current",lastUpdatedBy:"TheCatLady",lastUpdatedAt:1643574146,formattedLastUpdatedAt:"1/30/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"help",permalink:"/docs/reference/cli/help"},next:{title:"jq",permalink:"/docs/reference/cli/jq"}},d=[{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Aliases",id:"aliases",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"http"},(0,l.kt)("inlineCode",{parentName:"h1"},"http")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"http")," command sends objects in a payload to the defined HTTP(S) endpoint."),(0,l.kt)("p",null,"The shape and format of the object can be adjusted with commands such as ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/cli/list"},(0,l.kt)("inlineCode",{parentName:"a"},"list")),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/cli/format"},(0,l.kt)("inlineCode",{parentName:"a"},"format")),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/cli/jq"},(0,l.kt)("inlineCode",{parentName:"a"},"jq")),", etc."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/cli/chunk"},(0,l.kt)("inlineCode",{parentName:"a"},"chunk"))," command to send chunks of objects:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",3:!0,10:!0,className:"language-bash",metastring:'title="Perform up to 3 requests, where every request will contain up to 10 elements"',title:'"Perform',up:!0,to:!0,"requests,":!0,where:!0,every:!0,request:!0,will:!0,contain:!0,'elements"':!0},"$> query is(volume) limit 30 | chunk 10 | http test.foo.org\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"http [--compress] [--timeout <seconds>] [--no-ssl-verify] [--no-body] [--nr-of-retries <num>] <http_method> <url> <headers> <query_params>\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--compress")),(0,l.kt)("td",{parentName:"tr",align:null},"Enable compression of the request body")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--timeout <seconds>")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum timeout in seconds; aborts request if timeout is exceeded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--no-ssl-verify")),(0,l.kt)("td",{parentName:"tr",align:null},"Disable SSL certificate verification")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--no-body")),(0,l.kt)("td",{parentName:"tr",align:null},"Send with empty request body")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--nr-of-retries")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of retries for unsuccessful requests (non-2XX HTTP status codes) ","*")))),(0,l.kt)("p",null,"*"," By default, requests are retried three times. There is an exponential backoff between retries."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http_method")),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP request method (",(0,l.kt)("inlineCode",{parentName:"td"},"GET"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"PUT"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"POST"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"DELETE"),", or ",(0,l.kt)("inlineCode",{parentName:"td"},"PATCH"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",role:"img","aria-label":"cross mark"},"\u274c")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"POST"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"url")),(0,l.kt)("td",{parentName:"tr",align:null},"URL endpoint to which the request should be sent ","*"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",role:"img","aria-label":"check mark"},"\u2714\ufe0f")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers")),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP request headers (e.g., ",(0,l.kt)("inlineCode",{parentName:"td"},'HeaderA:value1 HeaderB:value2 "HeaderC:value with whitespace"'),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",role:"img","aria-label":"cross mark"},"\u274c")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"query_params")),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP request query parameters (e.g., ",(0,l.kt)("inlineCode",{parentName:"td"},'param1==value2 param2==value2 "param3==value with whitespace"'),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",role:"img","aria-label":"cross mark"},"\u274c")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,l.kt)("p",null,"*"," If a URL scheme is not present, it will be determined by whether or not the ",(0,l.kt)("inlineCode",{parentName:"p"},"http")," command or the ",(0,l.kt)("inlineCode",{parentName:"p"},"https")," command alias was used. Additionally, ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost")," can be omitted from ",(0,l.kt)("inlineCode",{parentName:"p"},"url")," (e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},":8080/call/me"),")."),(0,l.kt)("h3",{id:"aliases"},"Aliases"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https"))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$> query is(volume) and reported.volume_encrypted==false | https my.node.org/handle_unencrypted\n// highlight-next-line\n3 requests with status 200 sent.\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$> query is(volume) | chunk 50 | https --compress my.node.org/handle\n// highlight-next-line\n2 requests with status 200 sent.\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$> query is(volume) | chunk 50 | https my.node.org/handle "greeting:hello from resotocore" type==volume\n// highlight-next-line\n2 requests with status 200 sent.\n')))}u.isMDXComponent=!0}}]);