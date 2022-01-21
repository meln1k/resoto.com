"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[9412],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(p,".").concat(f)]||u[f]||l[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4596:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_label:"Node",sidebar_position:1},p="Graph Node",s={unversionedId:"concepts/graph/node",id:"concepts/graph/node",title:"Graph Node",description:"A graph node is a JSON document with a well-defined structure and the following top-level properties:",source:"@site/docs/concepts/graph/node.md",sourceDirName:"concepts/graph",slug:"/concepts/graph/node",permalink:"/docs/concepts/graph/node",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/concepts/graph/node.md",tags:[],version:"current",lastUpdatedBy:"TheCatLady",lastUpdatedAt:1642805704,formattedLastUpdatedAt:"1/21/2022",sidebarPosition:1,frontMatter:{sidebar_label:"Node",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Graph",permalink:"/docs/concepts/graph/"},next:{title:"Edge",permalink:"/docs/concepts/graph/edge"}},d=[{value:"Kind",id:"kind",children:[],level:2}],l={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"graph-node"},"Graph Node"),(0,a.kt)("p",null,"A graph node is a JSON document with a well-defined structure and the following top-level properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "xxx",\n  "reported": { ... },\n  "desired": { ... },\n  "metadata": { ... }\n}\n')),(0,a.kt)("p",null,"Each graph node always has an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," that is a unique ID created by Resoto."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"reported")," section contains data reported from the specific cloud provider. The content and schema of the ",(0,a.kt)("inlineCode",{parentName:"p"},"reported")," section is defined by the cloud provider and described formally in the :ref:",(0,a.kt)("inlineCode",{parentName:"p"},"model"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"desired")," section can be manipulated by users and tools to mark and trigger an intended change on the specific resource. Cleaning up a resource, for example, is done by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"clean=true")," in the desired section."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata")," section contains additional data about the resource. This data is not from the cloud provider, but added by the Resoto toolchain."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ancestors")," section contains information about specific ancestors of a node. It makes it very easy to see something like provider, account, region and zone of a resource."),(0,a.kt)("h2",{id:"kind"},"Kind"),(0,a.kt)("p",null,"Every node has a kind, which describes the structure of this node."),(0,a.kt)("p",null,"The model supports inheritance: every specific type is also an instance of every more general type of this specific type."),(0,a.kt)("p",null,"Take a graph node with a type of ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_ec2_instance")," as an example. This type is subtype of the types: ",(0,a.kt)("inlineCode",{parentName:"p"},"instance"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_resource")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"resource"),"."))}u.isMDXComponent=!0}}]);