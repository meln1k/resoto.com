(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[9096],{57942:function(e,t,n){e.exports={src:{srcSet:n.p+"assets/ideal-img/component_diagram.b602992.1368.png 1368w",images:[{path:n.p+"assets/ideal-img/component_diagram.b602992.1368.png",width:1368,height:636}],src:n.p+"assets/ideal-img/component_diagram.b602992.1368.png",toString:function(){return n.p+"assets/ideal-img/component_diagram.b602992.1368.png"},placeholder:void 0,width:1368,height:636},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAr0lEQVQImQGkAFv/ANPk1QDazegA5MT4MtnA7M3avu/O2r/u0dzD77X/wP8C2dTkANjf3gAA1tneJ9nc3yuptrslm4S/SIRSuJWIWbqApqW+N62ywRzX294e2dzgGgDGzNFbwcfNdpmmrz5ofocyTV9te05hbltbc30sxs3TjNba3v/X29/cAMjO1Gu+xcuV////BwAkMADHzdOWz9TZZKWytwDZ3eEy0dbagtDV2miXJWZ2h4PtHQAAAABJRU5ErkJggg==",palette:null}},30241:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var o=n(67294),r=n(83699),i=n(26782),a=n(86010),c="cardContainer_woeA",s="cardContainerLink_iOSj",m="cardTitle_pNjP",p="cardDescription_qC_k",l=n(2735);function d(e){var t=e.href,n=e.children,i=(0,a.Z)("card margin-bottom--lg padding--lg",c,t&&s);return t?o.createElement(r.Z,{href:t,className:i},n):o.createElement("div",{className:i},n)}function u(e){var t=e.href,n=e.icon,r=e.title,i=e.description;return o.createElement(d,{href:t},o.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:r},n," ",r),o.createElement("div",{className:(0,a.Z)("text--truncate",p),title:i},i))}function g(e){var t=e.item,n=(0,i.Wl)(t);return o.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.items.length+" items"})}function A(e){var t,n=e.item,r=(0,l.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=n.docId)?t:void 0);return o.createElement(u,{href:n.href,icon:r,title:n.label,description:null==a?void 0:a.description})}function h(e){var t=e.item;switch(t.type){case"link":return o.createElement(A,{item:t});case"category":return o.createElement(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function f(e){var t=e.items;return o.createElement("div",{className:"row"},t.map((function(e,t){return o.createElement("article",{key:t,className:"col col--6"},o.createElement(h,{item:e}))})))}},62853:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return A}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=n(26782),c=n(30241),s=n(15944),m=["components"],p={},l="Components",d={unversionedId:"concepts/components/README",id:"concepts/components/README",title:"Components",description:"- Resoto Core maintains the directed multigraph.",source:"@site/docs/concepts/components/README.md",sourceDirName:"concepts/components",slug:"/concepts/components/",permalink:"/docs/concepts/components/",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/concepts/components/README.md",tags:[],version:"current",lastUpdatedAt:1643900228,formattedLastUpdatedAt:"2/3/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Workflow",permalink:"/docs/concepts/automation/workflow"},next:{title:"Resoto Core",permalink:"/docs/concepts/components/core"}},u=[],g={toc:u};function A(e){var t=e.components,p=(0,r.Z)(e,m);return(0,i.kt)("wrapper",(0,o.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"components"},"Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concepts/components/core"},"Resoto Core")," maintains the ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Multigraph#Directed_multigraph_(edges_with_own_identity)"},"directed multigraph"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concepts/components/worker"},"Resoto Worker")," loads ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/tree/main/plugins"},"plugins")," to perform collect and cleanup operations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concepts/components/shell"},"Resoto Shell")," allows for interactions with ",(0,i.kt)("inlineCode",{parentName:"li"},"resotocore"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concepts/components/metrics"},"Resoto Metrics")," is a ",(0,i.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/instrumenting/exporters"},"Prometheus exporter"),".")),(0,i.kt)(s.Z,{img:n(57942),alt:"Resoto Component Diagram",mdxType:"Image"}),(0,i.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}A.isMDXComponent=!0}}]);