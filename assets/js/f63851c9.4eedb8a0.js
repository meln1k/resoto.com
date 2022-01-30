"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[5393],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5395:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s="list",p={unversionedId:"reference/cli/list",id:"reference/cli/list",title:"list",description:"The list command transforms inputted JSON objects into strings.",source:"@site/docs/reference/cli/list.md",sourceDirName:"reference/cli",slug:"/reference/cli/list",permalink:"/docs/reference/cli/list",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/reference/cli/list.md",tags:[],version:"current",lastUpdatedBy:"TheCatLady",lastUpdatedAt:1643558220,formattedLastUpdatedAt:"1/30/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"jq",permalink:"/docs/reference/cli/jq"},next:{title:"tag",permalink:"/docs/reference/cli/tag"}},d=[{value:"Usage",id:"usage",children:[{value:"Parameters",id:"parameters",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"See Also",id:"see-also",children:[],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"list"},(0,i.kt)("inlineCode",{parentName:"h1"},"list")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," command transforms inputted JSON objects into ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"s."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"list [properties]\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required?"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"properties")),(0,i.kt)("td",{parentName:"tr",align:null},"Names of properties to show"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{parentName:"td",role:"img","aria-label":"cross mark"},"\u274c")),(0,i.kt)("td",{parentName:"tr",align:null},"See note")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If no properties are provided, a predefined list of properties will be shown:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reported.kind")," as ",(0,i.kt)("inlineCode",{parentName:"li"},"kind")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reported.id")," as ",(0,i.kt)("inlineCode",{parentName:"li"},"id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reported.name")," as ",(0,i.kt)("inlineCode",{parentName:"li"},"name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reported.age")," as ",(0,i.kt)("inlineCode",{parentName:"li"},"age")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ancestors.cloud.reported.name")," as ",(0,i.kt)("inlineCode",{parentName:"li"},"cloud")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ancestors.account.reported.name")," as ",(0,i.kt)("inlineCode",{parentName:"li"},"account")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ancestors.region.reported.name")," as ",(0,i.kt)("inlineCode",{parentName:"li"},"region")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ancestors.zone.reported.name")," as ",(0,i.kt)("inlineCode",{parentName:"li"},"zone"))),(0,i.kt)("p",{parentName:"div"},"If properties are provided, it will override the defaults and only show the defined properties. Property paths can be absolute (i.e., include a section name, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"reported"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"desired"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),"). If the section is not defined, the ",(0,i.kt)("inlineCode",{parentName:"p"},"reported")," section is assumed."),(0,i.kt)("p",{parentName:"div"},"The defined property path will be searched for within every element in the JSON input. If the value is defined, it will be a part of the list. Undefined values are filtered out and will not be printed."),(0,i.kt)("p",{parentName:"div"},"The property name can be defined via an ",(0,i.kt)("inlineCode",{parentName:"p"},"as")," clause. ",(0,i.kt)("inlineCode",{parentName:"p"},"reported.kind as kind")," would look up the path ",(0,i.kt)("inlineCode",{parentName:"p"},"reported.kind")," and if the value is defined write ",(0,i.kt)("inlineCode",{parentName:"p"},"kind={value}"),"."),(0,i.kt)("p",{parentName:"div"},"If no ",(0,i.kt)("inlineCode",{parentName:"p"},"as")," clause is defined, the name of the last element of the property path is taken. In the example above, we could write ",(0,i.kt)("inlineCode",{parentName:"p"},"reported.kind")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"reported.kind as kind"),"; both would have the same result."),(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"as")," clause is important if the last part of the property path is not a unique property name."))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$> query is(aws_ec2_instance) limit 3 | list\n// highlight-start\nkind=aws_ec2_instance, id=1, name=sun, ctime=2020-09-10T13:24:45Z, cloud=aws, account=prod, region=us-west-2\nkind=aws_ec2_instance, id=2, name=moon, ctime=2021-09-21T01:08:11Z, cloud=aws, account=dev, region=us-west-2\nkind=aws_ec2_instance, id=3, name=star, ctime=2021-09-25T23:28:40Z, cloud=aws, account=int, region=us-east-1\n// highlight-end\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$> query is(aws_ec2_instance) limit 3 | list reported.name\n// highlight-start\nname=sun\nname=moon\nname=star\n// highlight-end\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Section name is missing, reported is used automatically"',title:'"Section',name:!0,is:!0,"missing,":!0,reported:!0,used:!0,'automatically"':!0},"$> query is(aws_ec2_instance) limit 3 | list kind, name\n// highlight-start\nkind=aws_ec2_instance, name=sun\nkind=aws_ec2_instance, name=moon\nkind=aws_ec2_instance, name=star\n// highlight-end\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$> query is(aws_ec2_instance) limit 3 | list kind as a, name as b\n// highlight-start\na=aws_ec2_instance, b=sun\na=aws_ec2_instance, b=moon\na=aws_ec2_instance, b=star\n// highlight-end\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$> query is(aws_ec2_instance) limit 3 | list kind as a, name as b, does_not_exist\n// highlight-start\na=aws_ec2_instance, b=sun\na=aws_ec2_instance, b=moon\na=aws_ec2_instance, b=star\n// highlight-end\n")),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/cli/dump"},(0,i.kt)("inlineCode",{parentName:"a"},"dump")),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/cli/format"},(0,i.kt)("inlineCode",{parentName:"a"},"format")),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/cli/jq"},(0,i.kt)("inlineCode",{parentName:"a"},"jq"))))}m.isMDXComponent=!0}}]);