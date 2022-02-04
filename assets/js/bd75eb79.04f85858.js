"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[9482],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=m(n),u=r,d=g["".concat(l,".").concat(u)]||g[u]||p[u]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},68198:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},assets:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={},l="v2.0.0a13",m={permalink:"/news/2022/01/28/v2.0.0a13",source:"@site/news/2022-01-28-v2.0.0a13.md",title:"v2.0.0a13",description:"Starting with this release, Resoto ships with separate Docker images for each of its components:",date:"2022-01-28T00:00:00.000Z",formattedDate:"January 28, 2022",tags:[],readingTime:1.455,truncated:!1,authors:[],frontMatter:{},prevItem:{title:"v2.0.0a14",permalink:"/news/2022/02/01/v2.0.0a14"},nextItem:{title:"v2.0.0a11",permalink:"/news/2022/01/21/v2.0.0a11"}},c={authorsImageUrls:[]},p=[{value:"What&#39;s Changed",id:"whats-changed",children:[{value:"Features",id:"features",children:[],level:3},{value:"Fixes",id:"fixes",children:[],level:3},{value:"Chores",id:"chores",children:[],level:3}],level:2},{value:"Docker Images",id:"docker-images",children:[],level:2}],g={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Starting with this release, Resoto ships with separate Docker images for each of its ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/components"},"components"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"somecr.io/someengineering/resotocore")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"somecr.io/someengineering/resotoworker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"somecr.io/someengineering/resotoshell")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"somecr.io/someengineering/resotometrics"))),(0,o.kt)("p",null,"These images allow for greater flexibility in deploying Resoto, and also make it possible to update individual components independently."),(0,o.kt)("p",null,"However, ",(0,o.kt)("inlineCode",{parentName:"p"},"somecr.io/someengineering/resoto")," (which packages all dependencies into a single image) is still available."),(0,o.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/70ae7cc9"},(0,o.kt)("inlineCode",{parentName:"a"},"70ae7cc9"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"docker")," Split of Docker images (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/551"},"#551"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/774d2c60"},(0,o.kt)("inlineCode",{parentName:"a"},"774d2c60"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"docker")," Build and push images to Docker Hub (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/475"},"#475"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/6e2a68f3"},(0,o.kt)("inlineCode",{parentName:"a"},"6e2a68f3"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resotocore")," Enable global search (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/591"},"#591"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/270fedbd"},(0,o.kt)("inlineCode",{parentName:"a"},"270fedbd"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resotocore")," Create user/database with default setup (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/568"},"#568"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/4dc167d9"},(0,o.kt)("inlineCode",{parentName:"a"},"4dc167d9"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resotocore")," Add system info (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/561"},"#561"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/8932d66c"},(0,o.kt)("inlineCode",{parentName:"a"},"8932d66c"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resotocore")," allow to set the default edge_type via the env (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/583"},"#583"),")")),(0,o.kt)("h3",{id:"fixes"},"Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/a0e60516"},(0,o.kt)("inlineCode",{parentName:"a"},"a0e60516"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resotocore")," Automatic merge queries also for aggregation variables and functions (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/590"},"#590"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/5993df69"},(0,o.kt)("inlineCode",{parentName:"a"},"5993df69"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resotocore")," tag command uses the ancestors data structure (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/579"},"#579"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/04fe5ce4"},(0,o.kt)("inlineCode",{parentName:"a"},"04fe5ce4"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resotocore")," Define configfile parameter explicitly (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/578"},"#578"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/3e9d2c54"},(0,o.kt)("inlineCode",{parentName:"a"},"3e9d2c54"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resotocore")," MergeTerm and NotTerm need to change variables (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/549"},"#549"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/d3464ac8"},(0,o.kt)("inlineCode",{parentName:"a"},"d3464ac8"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resotocore")," Unify output for boolean properties (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/552"},"#552"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/8eabbcad"},(0,o.kt)("inlineCode",{parentName:"a"},"8eabbcad"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resotocore")," Fix preliminary hangup of workers (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/577"},"#577"),")")),(0,o.kt)("h3",{id:"chores"},"Chores"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/924d2912"},(0,o.kt)("inlineCode",{parentName:"a"},"924d2912"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resotolib")," Update metrics queries to use new ancestors section (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/596"},"#596"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/f5963c7f"},(0,o.kt)("inlineCode",{parentName:"a"},"f5963c7f"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resotocore")," Rename edge type dependency to default (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/585"},"#585"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/d4e96089"},(0,o.kt)("inlineCode",{parentName:"a"},"d4e96089"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resotocore")," graph update expect the replace flag in the metadata section (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/582"},"#582"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/4320a935"},(0,o.kt)("inlineCode",{parentName:"a"},"4320a935"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resotocore")," Remove section aware query API (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/564"},"#564"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/ba05ba5d"},(0,o.kt)("inlineCode",{parentName:"a"},"ba05ba5d"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resoto-ui")," Move UI to dedicated repo (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/563"},"#563"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/commit/79a4181c"},(0,o.kt)("inlineCode",{parentName:"a"},"79a4181c"))," ",(0,o.kt)("span",{class:"badge badge--secondary"},"resotocore")," Use proper time units (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/559"},"#559"),")")),(0,o.kt)("h2",{id:"docker-images"},"Docker Images"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"somecr.io/someengineering/resoto:2.0.0a13")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"somecr.io/someengineering/resotocore:2.0.0a13")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"somecr.io/someengineering/resotoworker:2.0.0a13")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"somecr.io/someengineering/resotoshell:2.0.0a13")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"somecr.io/someengineering/resotometrics:2.0.0a13"))))}u.isMDXComponent=!0}}]);