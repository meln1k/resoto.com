"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[8421],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65978:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"overview",title:"Documentation"},s="Overview",c={unversionedId:"overview",id:"overview",title:"Documentation",description:"Welcome to the Resoto documentation!",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/README.md",tags:[],version:"current",lastUpdatedAt:1643897817,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"overview",title:"Documentation"},sidebar:"sidebar",next:{title:"Getting Started",permalink:"/docs/getting-started"}},p=[{value:"What Is Resoto?",id:"what-is-resoto",children:[],level:2},{value:"Why Resoto?",id:"why-resoto",children:[],level:2},{value:"Supported Cloud Providers and Integrations",id:"supported-cloud-providers-and-integrations",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Welcome to the Resoto documentation!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Hello World in Resoto \ud83d\udc4b\ud83c\udf0e"',title:'"Hello',World:!0,in:!0,Resoto:!0,'\ud83d\udc4b\ud83c\udf0e"':!0},"$> query is(resource) | count\n// highlight-start\ntotal matched: 459241\ntotal unmatched: 0\n// highlight-end\n")),(0,o.kt)("p",null,"To help you find the information you need, the documentation is structured as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/getting-started"},"Getting Started"))," walks you through how to install and use Resoto, step by step. ",(0,o.kt)("em",{parentName:"li"},"Start here if you're new to Resoto.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/concepts"},"Concepts"))," describe key topics and ideas, and provide an overview of how Resoto works and its ",(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/components/"},"components"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/reference"},"Reference"))," is a manual describing the ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/cli/"},"command-line interface (CLI)")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/data-models/"},"data models"),". It is assumed that you have a basic understanding of important concepts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/contributing"},"Contributing"))," lists instructions and guidelines for contributing to Resoto.")),(0,o.kt)("h2",{id:"what-is-resoto"},"What Is Resoto?"),(0,o.kt)("p",null,"Resoto indexes resources, captures dependencies, and maps out your infrastructure in an understandable ",(0,o.kt)("a",{parentName:"p",href:"./concepts/graph"},"graph"),". The graph contains metrics for each ",(0,o.kt)("a",{parentName:"p",href:"./reference/data-models"},"resource"),"."),(0,o.kt)("p",null,"Developers and SREs can search the graph with a ",(0,o.kt)("a",{parentName:"p",href:"./reference/cli/query"},"query language"),", and create alerting and cleanup ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/automation/workflow"},"workflows"),"."),(0,o.kt)("p",null,"Metrics can be aggregated and exported to a time-series database such as ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io"},"Prometheus"),"."),(0,o.kt)("h2",{id:"why-resoto"},"Why Resoto?"),(0,o.kt)("p",null,"Have you ever\u2026"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"had a standstill in your CI pipeline because a broken job leaked cloud resources and triggered a ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/cli/query/examples#quota"},"quota limit"),"?"),(0,o.kt)("li",{parentName:"ul"},"wanted to find all expired ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/cli/query/examples#certificate"},"certificates"),"?"),(0,o.kt)("li",{parentName:"ul"},"had to change the ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/cli/tag"},"tags")," of thousands of EC2 instances?"),(0,o.kt)("li",{parentName:"ul"},"needed to delete all unused EBS ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/cli/query/examples#volume"},"volumes")," with no I/O in the past month?"),(0,o.kt)("li",{parentName:"ul"},"wished for an ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/cli/query/aggregation"},"aggregate")," view of resource usage across all cloud services?"),(0,o.kt)("li",{parentName:"ul"},"tediously created a report of the cost of a project across different accounts or cloud services?"),(0,o.kt)("li",{parentName:"ul"},"manually cleaned up orphaned ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/cli/query/examples#aws_alb"},"load balancers")," that had no active backends?"),(0,o.kt)("li",{parentName:"ul"},"wanted to ",(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/automation/workflow"},"automate")," any of the above?")),(0,o.kt)("p",null,"If you answered ",(0,o.kt)("strong",{parentName:"p"},"yes")," to any of the above, then Resoto was built to make ",(0,o.kt)("em",{parentName:"p"},"your")," life easier!"),(0,o.kt)("h2",{id:"supported-cloud-providers-and-integrations"},"Supported Cloud Providers and Integrations"),(0,o.kt)("p",null,"Resoto collects data using simple plugins written in ",(0,o.kt)("a",{parentName:"p",href:"https://www.python.org"},"Python"),"."),(0,o.kt)("p",null,"Support for the following is currently included out-of-the-box in Resoto:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com"},"Amazon Web Services (AWS)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com"},"Google Cloud Platform (GCP)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.vmware.com/products/vsphere.html"},"VMware Vsphere")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.onelogin.com"},"OneLogin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io"},"Kubernetes (K8s)"))),(0,o.kt)("p",null,"In addition to the above collector plugins, a ",(0,o.kt)("a",{parentName:"p",href:"https://slack.com"},"Slack")," plugin is also included for notification of resource cleanups."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is possible to write your own collector plugins! Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto/tree/main/plugins/example_collector"},"example plugin in our GitHub repository"),", and feel free to reach out on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/someengineering"},"Discord")," if we can be of any assistance."))))}d.isMDXComponent=!0}}]);