"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[8506],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),o=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=o(t.components);return a.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),N=o(n),s=r,c=N["".concat(m,".").concat(s)]||N[s]||k[s]||l;return n?a.createElement(c,i(i({ref:e},p),{},{components:n})):a.createElement(c,i({ref:e},p))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},5360:function(t,e,n){n.d(e,{Z:function(){return h}});var a=n(7294),r=n(9960),l=n(3616),i=n(6010),d="cardContainer_w8bb",m="cardContainerLink_AhGd",o="cardTitle_t-cI",p="cardDescription_aEbl",k=n(3919);function N(t){var e=t.href,n=t.children,l=(0,i.Z)("card margin-bottom--lg padding--lg",d,e&&m);return e?a.createElement(r.Z,{href:e,className:l},n):a.createElement("div",{className:l},n)}function s(t){var e=t.href,n=t.icon,r=t.title,l=t.description;return a.createElement(N,{href:e},a.createElement("h2",{className:(0,i.Z)("text--truncate",o),title:r},n," ",r),a.createElement("div",{className:(0,i.Z)("text--truncate",p),title:l},l))}function c(t){var e=t.item,n=(0,l.Wl)(e);return a.createElement(s,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.items.length+" items"})}function u(t){var e,n=t.item,r=(0,k.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,l.xz)(null!=(e=n.docId)?e:void 0);return a.createElement(s,{href:n.href,icon:r,title:n.label,description:null==i?void 0:i.description})}function g(t){var e=t.item;switch(e.type){case"link":return a.createElement(u,{item:e});case"category":return a.createElement(c,{item:e});default:throw new Error("unknown item type "+JSON.stringify(e))}}function h(t){var e=t.items;return a.createElement("div",{className:"row"},e.map((function(t,e){return a.createElement("article",{key:e,className:"col col--6"},a.createElement(g,{item:t}))})))}},6481:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return k},toc:function(){return N},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(3616),d=n(5360),m=["components"],o={},p="Command-Line Interface (CLI)",k={unversionedId:"reference/cli/README",id:"reference/cli/README",title:"Command-Line Interface (CLI)",description:"The resh CLI supports various commands that help you accessing the graph database.",source:"@site/docs/reference/cli/README.md",sourceDirName:"reference/cli",slug:"/reference/cli/",permalink:"/docs/reference/cli/",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/reference/cli/README.md",tags:[],version:"current",lastUpdatedBy:"Jay Wallace",lastUpdatedAt:1643133589,formattedLastUpdatedAt:"1/25/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Permissions",permalink:"/docs/reference/permissions"},next:{title:"tag",permalink:"/docs/reference/cli/tag"}},N=[{value:"Commands",id:"commands",children:[{value:"Command Aliases",id:"command-aliases",children:[],level:3}],level:2},{value:"Placeholder Strings",id:"placeholder-strings",children:[],level:2}],s={toc:N};function c(t){var e=t.components,n=(0,r.Z)(t,m);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"command-line-interface-cli"},"Command-Line Interface (CLI)"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/docs/concepts/components/resh"},(0,l.kt)("inlineCode",{parentName:"a"},"resh"))," CLI supports various commands that help you accessing the graph database."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can pipe commands using ",(0,l.kt)("inlineCode",{parentName:"p"},"|")," and chain multiple commands using ",(0,l.kt)("inlineCode",{parentName:"p"},";"),"."))),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aggregate")),(0,l.kt)("td",{parentName:"tr",align:null},"Aggregate this query by the provided specification")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ancestors")),(0,l.kt)("td",{parentName:"tr",align:null},"Select all ancestors of this node in the graph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"chunk")),(0,l.kt)("td",{parentName:"tr",align:null},"Chunk incoming elements in batches.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clean")),(0,l.kt)("td",{parentName:"tr",align:null},"Mark all incoming database objects for cleaning.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"count")),(0,l.kt)("td",{parentName:"tr",align:null},"Count incoming elements or sum defined property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"descendants")),(0,l.kt)("td",{parentName:"tr",align:null},"Select all descendants of this node in the graph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dump")),(0,l.kt)("td",{parentName:"tr",align:null},"Dump all properties of incoming objects.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"echo")),(0,l.kt)("td",{parentName:"tr",align:null},"Send the provided message to downstream")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"env")),(0,l.kt)("td",{parentName:"tr",align:null},"Retrieve the environment and pass it to the output stream.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flatten")),(0,l.kt)("td",{parentName:"tr",align:null},"Take incoming batches of elements and flattens them to a stream of single elements.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format")),(0,l.kt)("td",{parentName:"tr",align:null},"Transform incoming objects as string with a defined format.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"head")),(0,l.kt)("td",{parentName:"tr",align:null},"Return ",(0,l.kt)("inlineCode",{parentName:"td"},"n")," first elements of the stream.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"help")),(0,l.kt)("td",{parentName:"tr",align:null},"Shows available commands, as well as help for any specific command.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http")),(0,l.kt)("td",{parentName:"tr",align:null},"Perform HTTP request with incoming data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"jobs")),(0,l.kt)("td",{parentName:"tr",align:null},"Manage all jobs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"jq")),(0,l.kt)("td",{parentName:"tr",align:null},"Filter and process JSON.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"json")),(0,l.kt)("td",{parentName:"tr",align:null},"Parse JSON and pass parsed objects to the output stream.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kind")),(0,l.kt)("td",{parentName:"tr",align:null},"Retrieves information about the graph data kinds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list")),(0,l.kt)("td",{parentName:"tr",align:null},"Transform incoming objects as string with defined properties.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"predecessors")),(0,l.kt)("td",{parentName:"tr",align:null},"Select all predecessors of this node in the graph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"protect")),(0,l.kt)("td",{parentName:"tr",align:null},"Mark all incoming database objects as protected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/reference/cli/query/"},(0,l.kt)("inlineCode",{parentName:"a"},"query"))),(0,l.kt)("td",{parentName:"tr",align:null},"Query the graph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"set_desired")),(0,l.kt)("td",{parentName:"tr",align:null},"Allows to set arbitrary properties as desired for all incoming database objects.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"set_metadata")),(0,l.kt)("td",{parentName:"tr",align:null},"Allows to set arbitrary properties as metadata for all incoming database objects.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sleep")),(0,l.kt)("td",{parentName:"tr",align:null},"Suspend execution for an interval of time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"start_task")),(0,l.kt)("td",{parentName:"tr",align:null},"Start a task with the given name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"successors")),(0,l.kt)("td",{parentName:"tr",align:null},"Select all successor of this node in the graph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"system")),(0,l.kt)("td",{parentName:"tr",align:null},"Access and manage system wide properties.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/reference/cli/tag"},(0,l.kt)("inlineCode",{parentName:"a"},"tag"))),(0,l.kt)("td",{parentName:"tr",align:null},"Update a tag with provided value or delete a tag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tail")),(0,l.kt)("td",{parentName:"tr",align:null},"Return ",(0,l.kt)("inlineCode",{parentName:"td"},"n")," last elements of the stream.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"templates")),(0,l.kt)("td",{parentName:"tr",align:null},"Access the query template library.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uniq")),(0,l.kt)("td",{parentName:"tr",align:null},"Remove all duplicated objects from the stream.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"write")),(0,l.kt)("td",{parentName:"tr",align:null},"Writes the incoming stream of data to a file in the defined format.")))),(0,l.kt)(d.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}),(0,l.kt)("h3",{id:"command-aliases"},"Command Aliases"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Alias"),(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"match")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"query")),(0,l.kt)("td",{parentName:"tr",align:null},"Query the graph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"start_workflow")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"start_task")),(0,l.kt)("td",{parentName:"tr",align:null},"Start a task with the given name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http")),(0,l.kt)("td",{parentName:"tr",align:null},"Perform HTTP request with incoming data.")))),(0,l.kt)("h2",{id:"placeholder-strings"},"Placeholder Strings"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@UTC@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2022-01-21T03:58:19Z"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@NOW@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2022-01-21T03:58:19Z"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@TODAY@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2022-01-21"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@TOMORROW@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2022-01-22"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@YESTERDAY@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2022-01-20"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@YEAR@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2022"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@MONTH@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@DAY@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"21"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@TIME@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"03:58:19"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@HOUR@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@MINUTE@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"58"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@SECOND@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"19"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@TZ_OFFSET@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"+0000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@TZ@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UTC"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@MONDAY@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2022-01-24"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@TUESDAY@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2022-01-25"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@WEDNESDAY@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2022-01-26"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@THURSDAY@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2022-01-27"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@FRIDAY@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2022-01-21"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@SATURDAY@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2022-01-22"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@SUNDAY@")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2022-01-23"))))))}c.isMDXComponent=!0}}]);