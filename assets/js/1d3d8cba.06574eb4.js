"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[4622],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(h,s(s({ref:t},l),{},{components:o})):n.createElement(h,s({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<a;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2247:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),s=["components"],c={slug:"resotocore",sidebar_label:"Resoto Core (resotocore)",sidebar_position:1},i="Resoto Core (`resotocore`)",p={unversionedId:"concepts/components/resotocore",id:"concepts/components/resotocore",title:"Resoto Core (`resotocore`)",description:"The Resoto graph platform resotocore is the persistence and query backend of Resoto. It maintains the graph of resources and provides APIs to update and access them.",source:"@site/docs/concepts/components/resotocore.md",sourceDirName:"concepts/components",slug:"/concepts/components/resotocore",permalink:"/docs/concepts/components/resotocore",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/concepts/components/resotocore.md",tags:[],version:"current",lastUpdatedAt:1643164883,formattedLastUpdatedAt:"1/26/2022",sidebarPosition:1,frontMatter:{slug:"resotocore",sidebar_label:"Resoto Core (resotocore)",sidebar_position:1},sidebar:"sidebar",previous:{title:"Components",permalink:"/docs/concepts/components/"},next:{title:"Resoto Worker (resotoworker)",permalink:"/docs/concepts/components/resotoworker"}},l=[{value:"API",id:"api",children:[{value:"Evaluate",id:"evaluate",children:[],level:3}],level:2},{value:"Execute",id:"execute",children:[],level:2}],u={toc:l};function d(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resoto-core-resotocore"},"Resoto Core (",(0,a.kt)("inlineCode",{parentName:"h1"},"resotocore"),")"),(0,a.kt)("p",null,"The Resoto graph platform ",(0,a.kt)("inlineCode",{parentName:"p"},"resotocore")," is the persistence and query backend of Resoto. It maintains the graph of resources and provides APIs to update and access them."),(0,a.kt)("p",null,"Within ",(0,a.kt)("inlineCode",{parentName:"p"},"resotocore"),", there are workflows consisting of steps that result in actions like ",(0,a.kt)("inlineCode",{parentName:"p"},"collect"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cleanup")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"generate_metrics"),". These actions are received by components like ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/components/resotoworker"},(0,a.kt)("inlineCode",{parentName:"a"},"resotoworker"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/components/resotometrics"},(0,a.kt)("inlineCode",{parentName:"a"},"resotometrics")),"."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"resotocore")," API is exposed at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://<resoto-address>:8900/api-doc"),". You can also access it at ",(0,a.kt)("a",{parentName:"p",href:"https://resoto.com/docs/reference/resotocore-api"},(0,a.kt)("inlineCode",{parentName:"a"},"https://resoto.com/docs/reference/resotocore-api")),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"resotocore")," has two API endpoints to connect to for CLI purposes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/cli/evaluate")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/cli/execute"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cli/evaluate")," functinality is used internally on every ",(0,a.kt)("inlineCode",{parentName:"p"},"/cli/execute")," before the command executes."),(0,a.kt)("p",null,"Below is a simulation of sending a ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/components/resh"},(0,a.kt)("inlineCode",{parentName:"a"},"resh"))," query to the CLI API."),(0,a.kt)("p",null,"We will evaluate the query before executing it for demonstration. We also introduce this query with a typo to show the response if not successful."),(0,a.kt)("h3",{id:"evaluate"},"Evaluate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Correct"',title:'"Correct"'},'$ echo \'query is("resource") limit 1\' | http :8900/cli/evaluate\nHTTP/1.1 200 OK\nContent-Length: 47\nContent-Type: application/json; charset=utf-8\nDate: Wed, 06 Oct 2021 15:13:08 GMT\nServer: Python/3.9 aiohttp/3.7.4.post0\n\n[\n    {\n        "execute_query": "is(\\"resource\\") limit 1"\n    }\n]\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Typo"',title:'"Typo"'},"$ echo 'graph=resoto query is(\"resource\") limit1' | http :8900/cli/evaluate\nHTTP/1.1 400 Bad Request\nContent-Length: 151\nContent-Type: text/plain; charset=utf-8\nDate: Wed, 06 Oct 2021 15:13:33 GMT\nServer: Python/3.9 aiohttp/3.7.4.post0\n\nError: ParseError\nMessage: expected one of '!=', '!~', '<', '<=', '=', '==', '=~', '>', '>=', '[A-Za-z][A-Za-z0-9_]*', '`', 'in', 'not in', '~' at 0:21\n")),(0,a.kt)("h2",{id:"execute"},"Execute"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Correct"',title:'"Correct"'},'$ echo \'graph=resoto query is("resource") limit 1\' | http :8900/cli/execute\nHTTP/1.1 200 OK\nContent-Type: application/json\nDate: Wed, 06 Oct 2021 15:08:10 GMT\nServer: Python/3.9 aiohttp/3.7.4.post0\nTransfer-Encoding: chunked\n\n[\n    {\n        "id": "06ee67f7c54124c019b80a7f53fa59b231b374fe61f94b91e0c26729440d095c",\n        "kinds": [\n            "base_cloud",\n            "cloud",\n            "resource"\n        ],\n        "metadata": {\n            "python_type": "resoto.baseresources.Cloud"\n        },\n        "reported": {\n            "ctime": "2021-09-25T23:49:38Z",\n            "id": "gcp",\n            "kind": "cloud",\n            "name": "gcp",\n            "tags": {}\n        },\n        "revision": "_d_7eKMa---",\n        "type": "node"\n    }\n]\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Typo"',title:'"Typo"'},"$ echo 'graph=resoto query is(\"resource\") limit1' | http :8900/cli/execute\nHTTP/1.1 400 Bad Request\nContent-Length: 151\nContent-Type: text/plain; charset=utf-8\nDate: Wed, 06 Oct 2021 15:26:54 GMT\nServer: Python/3.9 aiohttp/3.7.4.post0\n\nError: ParseError\nMessage: expected one of '!=', '!~', '<', '<=', '=', '==', '=~', '>', '>=', '[A-Za-z][A-Za-z0-9_]*', '`', 'in', 'not in', '~' at 0:21\n")),(0,a.kt)("h1",{id:"more-api-endpoints"},"More API Endpoints"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"resotocore")," is the central hub for everything Resoto does.\nYou can explore additional ",(0,a.kt)("inlineCode",{parentName:"p"},"resotocore")," API endpoints at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://<resoto-address>:8900/")," or ",(0,a.kt)("a",{parentName:"p",href:"https://resoto.com/docs/reference/resotocore-api"},(0,a.kt)("inlineCode",{parentName:"a"},"https://resoto.com/docs/reference/resotocore-api")),"."))}d.isMDXComponent=!0}}]);