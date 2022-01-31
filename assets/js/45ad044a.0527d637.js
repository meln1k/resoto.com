"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[5700],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6992:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),l=["components"],c={},i="count",u={unversionedId:"reference/cli/count",id:"reference/cli/count",title:"count",description:"The count command returns the number of elements or properties in the piped input.",source:"@site/docs/reference/cli/count.md",sourceDirName:"reference/cli",slug:"/reference/cli/count",permalink:"/docs/reference/cli/count",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/reference/cli/count.md",tags:[],version:"current",lastUpdatedBy:"TheCatLady",lastUpdatedAt:1643574146,formattedLastUpdatedAt:"1/30/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"clean",permalink:"/docs/reference/cli/clean"},next:{title:"dump",permalink:"/docs/reference/cli/dump"}},p=[{value:"Usage",id:"usage",children:[{value:"Parameters",id:"parameters",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2}],m={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"count"},(0,o.kt)("inlineCode",{parentName:"h1"},"count")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," command returns the number of elements or properties in the piped input."),(0,o.kt)("p",null,"When no argument is provided to the command, the total number of elements is returned."),(0,o.kt)("p",null,"When a property name is provided, the number of elements with the specified property is returned rather than the total number of input elements."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"count <property>\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required?"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"property")),(0,o.kt)("td",{parentName:"tr",align:null},"Name of property to count"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{parentName:"td",role:"img","aria-label":"cross mark"},"\u274c")),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"This command returns ",(0,o.kt)("inlineCode",{parentName:"p"},'[["total matched: 3", "total unmatched: 0"]]'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$> json [{"a": 1}, {"a": 2}, {"b": 3}] | count\n')),(0,o.kt)("p",null,"The next command would return ",(0,o.kt)("inlineCode",{parentName:"p"},'[["total matched: 2", "total unmatched: 1"]]'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$> json [{"a": 1}, {"a": 2}, {"b": 3}] | count a\n')),(0,o.kt)("p",null,"And this last command results in ",(0,o.kt)("inlineCode",{parentName:"p"},'[["total matched: 1", "total unmatched: 2"]]'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$> json [{"a": 1}, {"a": 2}, {"b": 3}] | count b\n')))}s.isMDXComponent=!0}}]);