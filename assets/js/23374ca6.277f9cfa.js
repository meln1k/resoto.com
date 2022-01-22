"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[8421],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6527:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,sidebar_label:"Introduction",title:"Documentation"},s="Introduction",c={unversionedId:"README",id:"README",title:"Documentation",description:"Welcome to the Resoto documentation!",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/README.md",tags:[],version:"current",lastUpdatedBy:"TheCatLady",lastUpdatedAt:1642810816,formattedLastUpdatedAt:"1/22/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction",title:"Documentation"},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/getting-started"}},u=[{value:"What Is Resoto?",id:"what-is-resoto",children:[],level:2},{value:"Why Resoto?",id:"why-resoto",children:[],level:2},{value:"Supported Cloud Providers and Integrations",id:"supported-cloud-providers-and-integrations",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Welcome to the Resoto documentation!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Hello World in Resoto \ud83d\udc4b\ud83c\udf0e"',title:'"Hello',World:!0,in:!0,Resoto:!0,'\ud83d\udc4b\ud83c\udf0e"':!0},"query is(resource) | count\ntotal matched: 459241\ntotal unmatched: 0\n")),(0,a.kt)("h2",{id:"what-is-resoto"},"What Is Resoto?"),(0,a.kt)("p",null,"Resoto indexes resources, captures dependencies and maps out your infrastructure in an understandable graph. The graph contains metrics for each resource."),(0,a.kt)("p",null,"Developers and SREs can ",(0,a.kt)("strong",{parentName:"p"},"search the graph with a query language"),", and create ",(0,a.kt)("strong",{parentName:"p"},"alerting and clean-up workflows"),"."),(0,a.kt)("p",null,"Metrics can be aggregated and exported to a time series database like Prometheus."),(0,a.kt)("h2",{id:"why-resoto"},"Why Resoto?"),(0,a.kt)("p",null,"Have you ever..."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"had a standstill in your CI pipeline because a broken job leaked cloud resources and triggered a quota limit?"),(0,a.kt)("li",{parentName:"ul"},"wanted to find all expired certificates?"),(0,a.kt)("li",{parentName:"ul"},"had to change the tags of thousands of EC2 instances?"),(0,a.kt)("li",{parentName:"ul"},"needed to delete all unused EBS volumes with no I/O in the past month?"),(0,a.kt)("li",{parentName:"ul"},"wished for an aggregate view of resource usage across all cloud services?"),(0,a.kt)("li",{parentName:"ul"},"tediously created a report of the cost of a project across different accounts or cloud services?"),(0,a.kt)("li",{parentName:"ul"},"manually cleaned up orphaned load balancers that had no active backends?"),(0,a.kt)("li",{parentName:"ul"},"wanted to automate any of the above?")),(0,a.kt)("p",null,"If you answered yes to any of the above, then Resoto was built to make your life easier!"),(0,a.kt)("h2",{id:"supported-cloud-providers-and-integrations"},"Supported Cloud Providers and Integrations"),(0,a.kt)("p",null,"Resoto collects data using simple plugins written in Python."),(0,a.kt)("p",null,"Support for the following is currently included out-of-the-box in Resoto:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com"},"Amazon Web Services (AWS)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com"},"Google Cloud Platform (GCP)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.vmware.com/products/vsphere.html"},"VMware Vsphere")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.onelogin.com"},"OneLogin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io"},"Kubernetes (K8s)"))),(0,a.kt)("p",null,"In addition to the above collector plugins, a ",(0,a.kt)("a",{parentName:"p",href:"https://slack.com"},"Slack")," plugin is also included for notification of resource cleanups."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is possible to write your own collector plugins! Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/someengineering/cloudkeeper/tree/main/plugins/example_collector"},"example plugin in our GitHub repository"),", and feel free to reach out on ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/someengineering"},"Discord")," if we can be of any assistance."))))}d.isMDXComponent=!0}}]);