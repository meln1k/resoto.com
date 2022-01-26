"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[9572],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8087:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={},l="query",s={unversionedId:"reference/cli/query/README",id:"reference/cli/query/README",title:"query",description:"The query command allows you to define a search query to filter available nodes.",source:"@site/docs/reference/cli/query/README.md",sourceDirName:"reference/cli/query",slug:"/reference/cli/query/",permalink:"/docs/reference/cli/query/",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/reference/cli/query/README.md",tags:[],version:"current",lastUpdatedAt:1643164883,formattedLastUpdatedAt:"1/26/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"tag",permalink:"/docs/reference/cli/tag"},next:{title:"Basic Queries",permalink:"/docs/reference/cli/query/basic-queries"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"query"},(0,o.kt)("inlineCode",{parentName:"h1"},"query")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," command allows you to define a search query to filter available nodes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Find accounts across all cloud providers"',title:'"Find',accounts:!0,across:!0,all:!0,cloud:!0,'providers"':!0},"query is(account)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Find all AWS accounts"',title:'"Find',all:!0,AWS:!0,'accounts"':!0},"query is(aws_account)\n")),(0,o.kt)("p",null,"Multiple criteria can be combined with ",(0,o.kt)("inlineCode",{parentName:"p"},"and")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"or"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",2:!0,className:"language-bash",metastring:'title="Find all AWS accounts more than 2 weeks old"',title:'"Find',all:!0,AWS:!0,accounts:!0,more:!0,than:!0,weeks:!0,'old"':!0},"query is(aws_account) and age>2w\n")),(0,o.kt)("p",null,"Precedence is defined using parentheses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",2:!0,10:!0,className:"language-bash",metastring:'title="Find all AWS accounts that are either older than 2 weeks or have more than 10 users"',title:'"Find',all:!0,AWS:!0,accounts:!0,that:!0,are:!0,either:!0,older:!0,than:!0,weeks:!0,or:!0,have:!0,more:!0,'users"':!0},"query is(aws_account) and (age>2w or users<10)\n")),(0,o.kt)("p",null,"By default, all resources that satisfy the defined criteria will be returned. However, it is possible to limit the number of results by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"limit"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",2:!0,3:!0,10:!0,className:"language-bash",metastring:'title="Find 3 AWS accounts that are are either older than 2 weeks or have more than 10 users"',title:'"Find',AWS:!0,accounts:!0,that:!0,are:!0,either:!0,older:!0,than:!0,weeks:!0,or:!0,have:!0,more:!0,'users"':!0},"query is(aws_account) and (age>2w or users>10) limit 3\n")),(0,o.kt)("p",null,"It is also possible to define the sort order using ",(0,o.kt)("inlineCode",{parentName:"p"},"sort"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",2:!0,3:!0,className:"language-bash",metastring:'title="Find the 3 AWS accounts that are more than 2 weeks old with the greatest number of users"',title:'"Find',the:!0,AWS:!0,accounts:!0,that:!0,are:!0,more:!0,than:!0,weeks:!0,old:!0,with:!0,greatest:!0,number:!0,of:!0,'users"':!0},"query is(aws_account) and age>2w sort users desc limit 3\n")))}d.isMDXComponent=!0}}]);