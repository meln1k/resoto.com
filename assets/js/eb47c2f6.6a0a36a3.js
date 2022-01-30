"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[1007],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9204:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},c="tail",u={unversionedId:"reference/cli/tail",id:"reference/cli/tail",title:"tail",description:"The tail command returns the last n elements of the input stream. The beginning of the stream is consumed but discarded.",source:"@site/docs/reference/cli/tail.md",sourceDirName:"reference/cli",slug:"/reference/cli/tail",permalink:"/docs/reference/cli/tail",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/reference/cli/tail.md",tags:[],version:"current",lastUpdatedBy:"TheCatLady",lastUpdatedAt:1643558220,formattedLastUpdatedAt:"1/30/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"tag",permalink:"/docs/reference/cli/tag"},next:{title:"query",permalink:"/docs/reference/cli/query/"}},p=[{value:"Usage",id:"usage",children:[{value:"Parameters",id:"parameters",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"See Also",id:"see-also",children:[],level:2}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tail"},(0,l.kt)("inlineCode",{parentName:"h1"},"tail")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"tail")," command returns the last ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," elements of the input stream. The beginning of the stream is consumed but discarded."),(0,l.kt)("p",null,"The command returns 100 elements by default if the number of elements is not specified."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tail [n]\n")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"n")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of elements to return"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",role:"img","aria-label":"cross mark"},"\u274c")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100"))))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"This command has a result of ",(0,l.kt)("inlineCode",{parentName:"p"},"[4, 5]"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$> json [1,2,3,4,5] | tail 2\n")),(0,l.kt)("p",null,"The next command returns ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 2, 3, 4, 5]"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$> json [1,2,3,4,5] | tail\n")),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/reference/cli/head"},(0,l.kt)("inlineCode",{parentName:"a"},"head"))))}m.isMDXComponent=!0}}]);