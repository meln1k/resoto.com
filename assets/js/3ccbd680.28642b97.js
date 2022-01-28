"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[321],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3939:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s="Pruning Resources",c={unversionedId:"getting-started/pruning-resources",id:"getting-started/pruning-resources",title:"Pruning Resources",description:"Please act with caution when selecting and filtering resources for cleanup.",source:"@site/docs/getting-started/pruning-resources.md",sourceDirName:"getting-started",slug:"/getting-started/pruning-resources",permalink:"/docs/getting-started/pruning-resources",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/getting-started/pruning-resources.md",tags:[],version:"current",lastUpdatedBy:"TheCatLady",lastUpdatedAt:1643410040,formattedLastUpdatedAt:"1/28/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Installing with Kubernetes",permalink:"/docs/getting-started/installing-with-kubernetes"},next:{title:"Concepts",permalink:"/docs/concepts"}},u=[{value:"Mark Resources for Deletion",id:"mark-resources-for-deletion",children:[],level:2},{value:"Prune Resources Marked for Deletion",id:"prune-resources-marked-for-deletion",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pruning-resources"},"Pruning Resources"),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please act with caution when selecting and filtering resources for cleanup."),(0,a.kt)("p",{parentName:"div"},"If you run ",(0,a.kt)("inlineCode",{parentName:"p"},"query is(aws_ec2_volume) | clean"),", it marks ",(0,a.kt)("em",{parentName:"p"},"all")," ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_ec2_volume")," resources in your cloud for deletion."))),(0,a.kt)("p",null,"By default, ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/components/worker"},(0,a.kt)("inlineCode",{parentName:"a"},"resotoworker"))," will ",(0,a.kt)("em",{parentName:"p"},"not")," delete resources marked for deletion. Resources marked with ",(0,a.kt)("inlineCode",{parentName:"p"},"| clean")," will stay this way without deleting them."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/components/worker"},(0,a.kt)("inlineCode",{parentName:"a"},"resotoworker"))," will only delete marked resources when started with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--cleanup")," command. When started in this way, marked resources will be cleaned every full hour via a ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/automation/workflow"},"workflow"),"."),(0,a.kt)("p",null,"You can provide ",(0,a.kt)("inlineCode",{parentName:"p"},"--cleanup-dry-run")," at ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/components/worker"},(0,a.kt)("inlineCode",{parentName:"a"},"resotoworker"))," startup to output the resources that would be deleted (without actually performing the deletion)."),(0,a.kt)("p",null,"When doing a resource cleanup selection for the first time, it is good practice to confirm the list of selected resources for plausibility using something like ",(0,a.kt)("inlineCode",{parentName:"p"},"desired clean = true | count"),"."),(0,a.kt)("p",null,"To quickly undo marking all ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_ec2_volumes")," for cleanup, use ",(0,a.kt)("inlineCode",{parentName:"p"},"query is(aws_ec2_volume) | set_desired clean=false"),"."),(0,a.kt)("p",null,"To remove clean markers from all resources, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"desired clean=true | set_desired clean=false"),"."),(0,a.kt)("p",null,"Deletion of resources via Resoto is done in two phases."),(0,a.kt)("h2",{id:"mark-resources-for-deletion"},"Mark Resources for Deletion"),(0,a.kt)("p",null,"Marking ressources for deletion is very easy. Just pipe your matched ressources to the ",(0,a.kt)("inlineCode",{parentName:"p"},"clean")," command."),(0,a.kt)("p",null,"This will add ",(0,a.kt)("inlineCode",{parentName:"p"},"desired.clean = true")," to all matched ressources."),(0,a.kt)("p",null,"Optionally, you can provide a reason for marking the matched ressources for the next cleanup run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",30:!0,className:"language-bash",metastring:'title="Mark all unused EBS volume older than 30 days that had no IO in the past 7d"',title:'"Mark',all:!0,unused:!0,EBS:!0,volume:!0,older:!0,than:!0,days:!0,that:!0,had:!0,no:!0,IO:!0,in:!0,the:!0,past:!0,'7d"':!0},'$> query is(volume) and ctime < -30d and atime < -7d and mtime < -7d and volume_status = available | clean "older than 30d with more then 7d of not beeing used"\n')),(0,a.kt)("h2",{id:"prune-resources-marked-for-deletion"},"Prune Resources Marked for Deletion"),(0,a.kt)("p",null,"Resources in Resoto will only be deleted if you started a ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/components/worker"},(0,a.kt)("inlineCode",{parentName:"a"},"resotoworker"))," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--cleanup")," parameter. If done so, there will be an automatic cleanup every full hour. Otherwise, the ",(0,a.kt)("inlineCode",{parentName:"p"},"cleanup")," will only be simulated without actually being deleted."),(0,a.kt)("p",null,"Instant cleanup can alternatively be triggered via starting the corresponding ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/automation/workflow"},"workflow"),"."))}p.isMDXComponent=!0}}]);