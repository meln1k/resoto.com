"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[3946],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8290:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={},c="Examples",l={unversionedId:"reference/cli/query/examples",id:"reference/cli/query/examples",title:"Examples",description:"The following are some common queries for Resoto, organized by kind.",source:"@site/docs/reference/cli/query/examples.md",sourceDirName:"reference/cli/query",slug:"/reference/cli/query/examples",permalink:"/docs/reference/cli/query/examples",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/reference/cli/query/examples.md",tags:[],version:"current",lastUpdatedBy:"imgbot[bot]",lastUpdatedAt:1642880460,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aggregation",permalink:"/docs/reference/cli/query/aggregation"},next:{title:"Resources",permalink:"/docs/reference/resources"}},u=[{value:"<code>aws_alb</code>",id:"aws_alb",children:[],level:2},{value:"<code>aws_iam_access_key</code>",id:"aws_iam_access_key",children:[],level:2},{value:"<code>certificate</code>",id:"certificate",children:[],level:2},{value:"<code>quota</code>",id:"quota",children:[],level:2},{value:"<code>volume</code>",id:"volume",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"examples"},"Examples"),(0,i.kt)("p",null,"The following are some common queries for Resoto, organized by ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/graph/node#kind"},"kind"),"."),(0,i.kt)("p",null,"Do you need help writing a query? Join us on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/someengineering"},"Discord")," and we'll do our best to help!"),(0,i.kt)("p",null,"Have you written a query others may find useful? Contributions to this page are welcome!"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All queries listed here are safe to use, as they will ",(0,i.kt)("em",{parentName:"p"},"NOT")," modify your resources."))),(0,i.kt)("h2",{id:"aws_alb"},(0,i.kt)("inlineCode",{parentName:"h2"},"aws_alb")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Orphaned Load Balancers that have no active backend"',title:'"Orphaned',Load:!0,Balancers:!0,that:!0,have:!0,no:!0,active:!0,'backend"':!0},"query is(aws_alb) and age > 7d and backends==[] with(empty, <-- is(aws_alb_target_group) and target_type = instance and age > 7d with(empty, <-- is(aws_ec2_instance) and instance_status != terminated)) <-[0:1]- is(aws_alb_target_group) or is(aws_alb)\n")),(0,i.kt)("h2",{id:"aws_iam_access_key"},(0,i.kt)("inlineCode",{parentName:"h2"},"aws_iam_access_key")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Ensure there is only one active access key available for any single IAM user"',title:'"Ensure',there:!0,is:!0,only:!0,one:!0,active:!0,access:!0,key:!0,available:!0,for:!0,any:!0,single:!0,IAM:!0,'user"':!0},'query is(access_key) access_key_status = "Active" | aggregate user_name as user : sum(1) as number_of_keys\n')),(0,i.kt)("h2",{id:"certificate"},(0,i.kt)("inlineCode",{parentName:"h2"},"certificate")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Find expired ssl certificates currently in use"',title:'"Find',expired:!0,ssl:!0,certificates:!0,currently:!0,in:!0,'use"':!0},"query is(certificate) and expires < @NOW@ <--\n")),(0,i.kt)("h2",{id:"quota"},(0,i.kt)("inlineCode",{parentName:"h2"},"quota")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Find current quota consumption to prevent service interruptions"',title:'"Find',current:!0,quota:!0,consumption:!0,to:!0,prevent:!0,service:!0,'interruptions"':!0},"query is(quota) and usage > 0\n")),(0,i.kt)("h2",{id:"volume"},(0,i.kt)("inlineCode",{parentName:"h2"},"volume")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",7:!0,30:!0,className:"language-bash",metastring:'title="Find unused AWS volumes older than 30 days with no IO in the past 7 days"',title:'"Find',unused:!0,AWS:!0,volumes:!0,older:!0,than:!0,days:!0,with:!0,no:!0,IO:!0,in:!0,the:!0,past:!0,'days"':!0},"query is(aws_ec2_volume) and age > 30d and last_access > 7d and last_update > 7d and volume_status = available\n")))}p.isMDXComponent=!0}}]);