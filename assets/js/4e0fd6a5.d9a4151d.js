"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[969],{3905:function(e,o,t){t.d(o,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function c(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),l=function(e){var o=r.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},p=function(e){var o=l(e.components);return r.createElement(i.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(t),m=n,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||c;return t?r.createElement(f,s(s({ref:o},p),{},{components:t})):r.createElement(f,s({ref:o},p))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var c=t.length,s=new Array(c);s[0]=d;var a={};for(var i in o)hasOwnProperty.call(o,i)&&(a[i]=o[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var l=2;l<c;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6637:function(e,o,t){t.r(o),t.d(o,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(7462),n=t(3366),c=(t(7294),t(3905)),s=["components"],a={slug:"resotoworker",sidebar_label:"Resoto Worker (resotoworker)",sidebar_position:2},i="Resoto Worker (`resotoworker`)",l={unversionedId:"concepts/components/resotoworker",id:"concepts/components/resotoworker",title:"Resoto Worker (`resotoworker`)",description:"resotoworker does all of the collection and cleanup work in Resoto. It is connected to resotocore over a websocket connection and waits for instructions. By default, it subscribes to the collect and cleanup actions as well as tag tasks.",source:"@site/docs/concepts/components/resotoworker.md",sourceDirName:"concepts/components",slug:"/concepts/components/resotoworker",permalink:"/docs/concepts/components/resotoworker",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/concepts/components/resotoworker.md",tags:[],version:"current",lastUpdatedBy:"imgbot[bot]",lastUpdatedAt:1642880460,formattedLastUpdatedAt:"1/22/2022",sidebarPosition:2,frontMatter:{slug:"resotoworker",sidebar_label:"Resoto Worker (resotoworker)",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Resoto Core (resotocore)",permalink:"/docs/concepts/components/resotocore"},next:{title:"Resoto Library (resotolib)",permalink:"/docs/concepts/components/resotolib"}},p=[],u={toc:p};function d(e){var o=e.components,t=(0,n.Z)(e,s);return(0,c.kt)("wrapper",(0,r.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"resoto-worker-resotoworker"},"Resoto Worker (",(0,c.kt)("inlineCode",{parentName:"h1"},"resotoworker"),")"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"resotoworker")," does all of the collection and cleanup work in Resoto. It is connected to ",(0,c.kt)("a",{parentName:"p",href:"/docs/concepts/components/resotocore"},(0,c.kt)("inlineCode",{parentName:"a"},"resotocore"))," over a websocket connection and waits for instructions. By default, it subscribes to the ",(0,c.kt)("inlineCode",{parentName:"p"},"collect")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"cleanup")," actions as well as ",(0,c.kt)("inlineCode",{parentName:"p"},"tag")," tasks."),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"resotoworker")," loads collector plugins like AWS, GCP, Slack, Onelogin, etc. Only those plugins have knowledge about how to communicate with each cloud, how to collect resources, and how to clean them up."),(0,c.kt)("p",null,"There can be one or more instances of ",(0,c.kt)("inlineCode",{parentName:"p"},"resotoworker")," in a Resoto deployment. A single ",(0,c.kt)("inlineCode",{parentName:"p"},"resotoworker")," can collect many clouds, or you could have multiple ",(0,c.kt)("inlineCode",{parentName:"p"},"resotoworker"),"s each collecting one cloud or account."),(0,c.kt)("p",null,"Once ",(0,c.kt)("inlineCode",{parentName:"p"},"resotoworker")," is started, you do not need to interact with it at all. It will simply wait for work and do its job."))}d.isMDXComponent=!0}}]);