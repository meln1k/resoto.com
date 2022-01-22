"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[8416],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7006:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="v2.0.0a9",p={permalink:"/news/2021/12/09/v2.0.0a9",source:"@site/news/2021-12-09-v2.0.0a9.md",title:"v2.0.0a9",description:"We are very happy to announce that we are now another small step closer to a stable 2.0 release!",date:"2021-12-09T00:00:00.000Z",formattedDate:"December 9, 2021",tags:[],readingTime:2.075,truncated:!1,authors:[],prevItem:{title:"v2.0.0a10",permalink:"/news/2022/01/18/v2.0.0a10"},nextItem:{title:"v2.0.0a3",permalink:"/news/2021/10/04/v2.0.0a3"}},u={authorsImageUrls:[]},c=[{value:"The UI is now shipped as part of every release",id:"the-ui-is-now-shipped-as-part-of-every-release",children:[],level:2},{value:"We now have a helm chart",id:"we-now-have-a-helm-chart",children:[],level:2},{value:"All cleanup plugins are now available",id:"all-cleanup-plugins-are-now-available",children:[],level:2},{value:"Analytics sensors were added",id:"analytics-sensors-were-added",children:[],level:2},{value:"Query language improvements",id:"query-language-improvements",children:[],level:2},{value:"Other improvements",id:"other-improvements",children:[],level:2}],h={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are very happy to announce that we are now another small step closer to a stable 2.0 release!"),(0,o.kt)("p",null,"Here are some highlights from this release:"),(0,o.kt)("h2",{id:"the-ui-is-now-shipped-as-part-of-every-release"},"The UI is now shipped as part of every release"),(0,o.kt)("p",null,"This is the first version that ships with our gorgeous UI."),(0,o.kt)("p",null,"Please try it out by downloading the latest version and navigating to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://path.to.cloudkeeper:8900/ui")," in your browser."),(0,o.kt)("p",null,"The main graph view has been upgraded from 2D to 3D, and shows Treemap charts (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto/pull/457"},"#457"),")!"),(0,o.kt)("h2",{id:"we-now-have-a-helm-chart"},"We now have a helm chart"),(0,o.kt)("p",null,"Thanks to a contribution from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yuval-k"},"@yuval-k"),", we now have a Helm chart (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto/pull/428"},"#428"),")!"),(0,o.kt)("p",null,"With this chart, it is easier to deploy Cloudkeeper in Kubernetes."),(0,o.kt)("p",null,"Try it out yourself by following the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.some.engineering/getting_started/setup_kubernetes.html"},"Kubernetes setup tutorial in our documentation"),"."),(0,o.kt)("h2",{id:"all-cleanup-plugins-are-now-available"},"All cleanup plugins are now available"),(0,o.kt)("p",null,"We needed to migrate all cleanup plugins to the 2.0 infrastructure."),(0,o.kt)("p",null,"With this release, all cleanup plugins have been ported (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto/pull/422"},"#422"),") and (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto/pull/439"},"#439"),")."),(0,o.kt)("h2",{id:"analytics-sensors-were-added"},"Analytics sensors were added"),(0,o.kt)("p",null,"We believe that it is important to know how Cloudkeeper is used, and thus how we can improve."),(0,o.kt)("p",null,"As such, we have added analytics to our codebase."),(0,o.kt)("p",null,"The data that is anonymized and purely focused on providing product insights."),(0,o.kt)("p",null,"It is possible to opt out of sending this data by specifying the command line flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--analytics-opt-out"),"."),(0,o.kt)("h2",{id:"query-language-improvements"},"Query language improvements"),(0,o.kt)("p",null,"There are several significant improvements in this area."),(0,o.kt)("p",null,"It is now possible to define sub-queries (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto/pull/412"},"#412"),") which allow merging nodes with other nodes in the graph."),(0,o.kt)("p",null,"Additionally, the first step toward a full-featured query template engine has been implemented in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto/pull/431"},"#431"),"."),(0,o.kt)("p",null,"This feature allows defining queries as a template and reusing those templates in other queries, greatly simplifying more complex queries."),(0,o.kt)("h2",{id:"other-improvements"},"Other improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[ckcore]")," In the CLI the default output style is now the list style. Every node is printed as one line. To show all available data as yaml node, we introduced the dump command. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/425"},"#425"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[plugin/gcp]")," only collect referenced type and service resources, so the graph only contains used resources. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/430"},"#430"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[ckcore]")," Add support for array modifiers ",(0,o.kt)("inlineCode",{parentName:"li"},"all, any, none"),". Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"reported.array all > 3"),", which selects all nodes where the property ",(0,o.kt)("inlineCode",{parentName:"li"},"reported.array")," points to an array of integers and all integers in that array are bigger than 3. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/427"},"#427"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[ckcore]")," arangodb 3.8.2 or later is now the minimum required version to run resoto. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/445"},"#445"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[ckcore]")," ",(0,o.kt)("inlineCode",{parentName:"li"},"tag")," command can be backgrounded. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/437"},"#437"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[ckcore]")," ",(0,o.kt)("inlineCode",{parentName:"li"},"is()")," now also supports multiple kinds, with an or meaning. Example `is(volume, instance) (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/pull/432"},"#432"),")")))}m.isMDXComponent=!0}}]);