"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[1258],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},38568:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={},c="jq",s={unversionedId:"reference/cli/jq",id:"reference/cli/jq",title:"jq",description:"The jq command filters and processes JSON input.",source:"@site/docs/reference/cli/jq.md",sourceDirName:"reference/cli",slug:"/reference/cli/jq",permalink:"/docs/reference/cli/jq",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/reference/cli/jq.md",tags:[],version:"current",lastUpdatedAt:1643939456,formattedLastUpdatedAt:"2/4/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"http",permalink:"/docs/reference/cli/http"},next:{title:"list",permalink:"/docs/reference/cli/list"}},p=[{value:"Usage",id:"usage",children:[{value:"Parameters",id:"parameters",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"See Also",id:"see-also",children:[],level:2}],d={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jq"},(0,i.kt)("inlineCode",{parentName:"h1"},"jq")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"jq")," command filters and processes JSON input."),(0,i.kt)("p",null,"This command uses the well-known ",(0,i.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq"},(0,i.kt)("inlineCode",{parentName:"a"},"jq")," JSON processor")," to manipulate incoming JSON. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/manual"},(0,i.kt)("inlineCode",{parentName:"a"},"jq")," manual")," for details."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"jq <filter>\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required?"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"filter")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://stedolan.github.io/jq/manual#Basicfilters"},(0,i.kt)("inlineCode",{parentName:"a"},"jq")," filter")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{parentName:"td",role:"img","aria-label":"check mark"},"\u2714\ufe0f")),(0,i.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Query all AWS EC2 instances and select the reported.id"',title:'"Query',all:!0,AWS:!0,EC2:!0,instances:!0,and:!0,select:!0,the:!0,'reported.id"':!0},'$> query is(aws_ec2_instance) | jq \'.reported.id\'\n// highlight-next-line\n["id-1", "id-2"]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Query all AWS EC2 instances and select the reported.id as id and the revision as rev"',title:'"Query',all:!0,AWS:!0,EC2:!0,instances:!0,and:!0,select:!0,the:!0,"reported.id":!0,as:!0,id:!0,revision:!0,'rev"':!0},'$> query is(aws_ec2_instance) | jq \'. | {id: .reported.id, rev:.revision}\'\n// highlight-next-line\n[{"id": "id-1", "rev": "1"}, {"id": "id-2", "rev": "5"}]\n')),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/cli/dump"},(0,i.kt)("inlineCode",{parentName:"a"},"dump")),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/cli/format"},(0,i.kt)("inlineCode",{parentName:"a"},"format")),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/cli/list"},(0,i.kt)("inlineCode",{parentName:"a"},"list"))))}u.isMDXComponent=!0}}]);