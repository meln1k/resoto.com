"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[687],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1002:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},c="Subqueries",l={unversionedId:"reference/cli/query/subqueries",id:"reference/cli/query/subqueries",title:"Subqueries",description:"While it is possible to query and retrieve a filtered part of the graph, it is sometimes helpful to retrieve structural graph data as part of the node.",source:"@site/docs/reference/cli/query/subqueries.md",sourceDirName:"reference/cli/query",slug:"/reference/cli/query/subqueries",permalink:"/docs/reference/cli/query/subqueries",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/reference/cli/query/subqueries.md",tags:[],version:"current",lastUpdatedBy:"Jay Wallace",lastUpdatedAt:1643133589,formattedLastUpdatedAt:"1/25/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"with Clause",permalink:"/docs/reference/cli/query/with-clause"},next:{title:"Aggregation",permalink:"/docs/reference/cli/query/aggregation"}},u=[],p={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"subqueries"},"Subqueries"),(0,i.kt)("p",null,"While it is possible to query and retrieve a filtered part of the graph, it is sometimes helpful to retrieve structural graph data as part of the node."),(0,i.kt)("p",null,"This approach merges multiple nodes in a graph into one node. This combined node can simplify processing the node."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Merge Example Diagram",src:n(8421).Z})),(0,i.kt)("p",null,"The merge node feature allows for subqueries, that are executed for every node in the result.\nThe result of the subquery is then merged with the node data."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Most cloud resources are maintained in an account. Accounts are modeled as ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/graph/node"},"nodes")," in Resoto."),(0,i.kt)("p",{parentName:"div"},"Resources reference the region node, while the region node references the account node. In order to retrieve the account, the graph has to be traversed inbound from the resource node until the account node is found. While this is possible, it might be more convenient to get the account information as part of the node!"),(0,i.kt)("p",{parentName:"div"},"In this example, we query nodes of kind ",(0,i.kt)("inlineCode",{parentName:"p"},"volume"),". For every element that is returned, a subquery is executed, which will traverse the graph inbound until it finds a node of kind ",(0,i.kt)("inlineCode",{parentName:"p"},"account"),"."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> query is(volume) { account: <-[0:]- is(account) } limit 1 | dump\nreported:\n    .\n    .\naccount:\n    reported:\n        .\n        .\n")),(0,i.kt)("p",{parentName:"div"},"The result of this subquery is merged with the volume node on root level under the name account."),(0,i.kt)("p",{parentName:"div"},"The complete information about the account is then available as part of the volume node:"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{alt:"Merge Example Diagram",src:n(9364).Z})))),(0,i.kt)("p",null,"A subquery is a complete, standalone query and can use the features of any other query."),(0,i.kt)("p",null,"The result of a subquery is merged with the original node under the given merge name."),(0,i.kt)("p",null,"If the merge name is a simple literal, zero or one result of the subquery is expected. This also means, that the graph traversal of the subquery stops, when the first matching element is found."),(0,i.kt)("p",null,"If the expected result of the subquery is a list, than the merge name has to be defined with square brackets."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The following query will traverse inbound on every element and collect all predecessors under the name ",(0,i.kt)("inlineCode",{parentName:"p"},"predecessors")," )."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"> query is(volume) { predecessors[]: <-- all } limit 1 | dump\nreported:\n    .\n    .\npredecessors:\n- reported:\n    .\n    .\n- reported:\n    .\n    .\n")))),(0,i.kt)("p",null,"It is also possible to define multiple merge queries in one query statement."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"> query is(volume) { account: <-[0:]- is(account), region: <-[0:]- is(region) } limit 1 | dump\nreported:\n    .\n    .\naccount:\n    reported:\n        .\n        .\nregion:\n    reported:\n        .\n        .\n")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{alt:"Merge Example Diagram",src:n(8421).Z})))),(0,i.kt)("p",null,"A subquery can even be defined using subqueries:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    query = <pre_filter> { <merge_name_1>: <query>, .., <merge_name_n>: <query> } <post_filter>\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Be aware that a subquery is executed for every node of the original query and might be expensive and time intensive to compute."))))}d.isMDXComponent=!0},8421:function(e,t,n){t.Z=n.p+"assets/images/merge_nodes-e9742bc2e78f948b53cef91db3c6c259.png"},9364:function(e,t,n){t.Z=n.p+"assets/images/merge_nodes_1-077ebf33217171dc9432ef2d0fdffef2.png"}}]);