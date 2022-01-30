"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[1797],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7974:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],c={},i="chunk",u={unversionedId:"reference/cli/chunk",id:"reference/cli/chunk",title:"chunk",description:'The chunk command groups elements from the input stream into "chunks" of a defined size.',source:"@site/docs/reference/cli/chunk.md",sourceDirName:"reference/cli",slug:"/reference/cli/chunk",permalink:"/docs/reference/cli/chunk",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/reference/cli/chunk.md",tags:[],version:"current",lastUpdatedBy:"TheCatLady",lastUpdatedAt:1643558220,formattedLastUpdatedAt:"1/30/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Command-Line Interface (CLI)",permalink:"/docs/reference/cli/"},next:{title:"clean",permalink:"/docs/reference/cli/clean"}},p=[{value:"Usage",id:"usage",children:[{value:"Parameters",id:"parameters",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"See Also",id:"see-also",children:[],level:2}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"chunk"},(0,l.kt)("inlineCode",{parentName:"h1"},"chunk")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"chunk"),' command groups elements from the input stream into "chunks" of a defined size.'),(0,l.kt)("p",null,"The final chunk may contain fewer elements than the defined chunk size."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chunk [size]\n")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"size")),(0,l.kt)("td",{parentName:"tr",align:null},"Desired number of elements per chunk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",role:"img","aria-label":"cross mark"},"\u274c")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100"))))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The result of the following command would be ",(0,l.kt)("inlineCode",{parentName:"p"},"[[1, 2], [3, 4], [5]]"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$> json [1,2,3,4,5] | chunk 2\n")),(0,l.kt)("p",null,"The next command would return ",(0,l.kt)("inlineCode",{parentName:"p"},"[[1, 2, 3, 4, 5]]"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$> json [1,2,3,4,5] | chunk\n")),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/reference/cli/flatten"},(0,l.kt)("inlineCode",{parentName:"a"},"flatten"))))}m.isMDXComponent=!0}}]);