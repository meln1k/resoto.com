"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[9514,4608],{6756:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),r=n(3905),o=n(6291),l=n(474),c=n(6010),i=n(9548),s=n(5537),u=n(7462);var d=function(e){return a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},m=n(5999),p=n(3366),b=n(9960),f=n(3919),v=n(541),h="menuLinkText_QVir",E="hasHref_VCh3",g=n(2389),k=["item"],_=["item","onItemClick","activePath","level","index"],C=["item","onItemClick","activePath","level","index"];function S(e){var t=e.item,n=(0,p.Z)(e,k);return"category"===t.type?0===t.items.length?null:a.createElement(Z,(0,u.Z)({item:t},n)):a.createElement(N,(0,u.Z)({item:t},n))}function Z(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,l=e.level,s=e.index,d=(0,p.Z)(e,_),f=n.items,v=n.label,k=n.collapsible,C=n.className,S=n.href,Z=function(e){var t=(0,g.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0}),[e,t])}(n),N=(0,i._F)(n,o),I=(0,i.uR)({initialState:function(){return!!k&&(!N&&n.collapsed)}}),T=I.collapsed,M=I.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n,r])}({isActive:N,collapsed:T,setCollapsed:M});var w=(0,i.fP)(),y=w.expandedItem,A=w.setExpandedItem;function L(e){void 0===e&&(e=!T),A(e?null:s),M(e)}var P=(0,i.LU)().autoCollapseSidebarCategories;return(0,a.useEffect)((function(){k&&y&&y!==s&&P&&M(!0)}),[k,y,s,M,P]),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":T},C)},a.createElement("div",{className:"menu__list-item-collapsible"},a.createElement(b.Z,(0,u.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":k&&!S,"menu__link--active":N},t[h]=!k,t[E]=!!Z,t)),onClick:k?function(e){null==r||r(n),S?L(!1):(e.preventDefault(),L())}:function(){null==r||r(n)},"aria-current":N?"page":void 0,href:k?null!=Z?Z:"#":Z},d),v),S&&k&&a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:v}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),L()}})),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:T},a.createElement(x,{items:f,tabIndex:T?-1:0,onItemClick:r,activePath:o,level:l+1})))}function N(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,l=(e.index,(0,p.Z)(e,C)),s=t.href,d=t.label,m=t.className,h=(0,i._F)(t,r);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:d},a.createElement(b.Z,(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":h}),"aria-current":h?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},l),(0,f.Z)(s)?d:a.createElement("span",null,d,a.createElement(v.Z,null))))}var I=["items"];function T(e){var t=e.items,n=(0,p.Z)(e,I);return a.createElement(i.D_,null,t.map((function(e,t){return a.createElement(S,(0,u.Z)({key:t,item:e,index:t},n))})))}var x=(0,a.memo)(T),M="sidebar_CW9Y",w="sidebarWithHideableNavbar_FoYL",y="sidebarHidden_D64r",A="sidebarLogo_FJUI",L="menu_SkdO",P="menuWithAnnouncementBar_x19h",F="collapseSidebarButton_cwdi",B="collapseSidebarButtonIcon_xORG";function D(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",F),onClick:t},a.createElement(d,{className:B}))}function H(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,u=e.isHidden,d=function(){var e=(0,i.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,i.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,i.LU)(),p=m.navbar.hideOnScroll,b=m.hideableSidebar;return a.createElement("div",{className:(0,c.Z)(M,(t={},t[w]=p,t[y]=u,t))},p&&a.createElement(s.Z,{tabIndex:-1,className:A}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",L,(n={},n[P]=d,n))},a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(x,{items:o,activePath:r,level:1}))),b&&a.createElement(D,{onClick:l}))}var R=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(x,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function W(e){return a.createElement(i.Cv,{component:R,props:e})}var q=a.memo(H),Y=a.memo(W);function z(e){var t=(0,i.iP)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(q,e),r&&a.createElement(Y,e))}var U=n(7440),V=n(4608),O="backToTopButton_RiI4",G="backToTopButtonShow_ssHd";function K(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var X=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],o=(0,a.useRef)(!1),l=K(),s=l.smoothScrollTop,u=l.cancelScrollToTop;return(0,i.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(o.current)o.current=!1;else{var l=n<a;if(l||u(),n<300)r(!1);else if(l){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&r(!0)}else r(!1)}})),(0,i.SL)((function(e){e.location.hash&&(o.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,O,(e={},e[G]=n,e)),type:"button",onClick:function(){return s()}})},J=n(6775),Q={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"},j=n(2859);function $(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,p=e.children,b=e.sidebarName,f=(0,i.Vq)(),v=u.pluginId,h=u.version,E=(0,a.useState)(!1),g=E[0],k=E[1],_=(0,a.useState)(!1),C=_[0],S=_[1],Z=(0,a.useCallback)((function(){C&&S(!1),k((function(e){return!e}))}),[C]);return a.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:h,tag:(0,i.os)(v,h)}},a.createElement("div",{className:Q.docPage},a.createElement(X,null),f&&a.createElement("aside",{className:(0,c.Z)(i.kM.docs.docSidebarContainer,Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&g&&S(!0)}},a.createElement(z,{key:b,sidebar:f,path:s.path,onCollapse:Z,isHidden:C}),C&&a.createElement("div",{className:Q.collapsedDocSidebar,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:Z,onClick:Z},a.createElement(d,{className:Q.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(Q.docMainContainer,(n={},n[Q.docMainContainerEnhanced]=g||!f,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(o={},o[Q.docItemWrapperEnhanced]=g,o))},a.createElement(r.Zo,{components:U.Z},p)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,J.LX)(r.pathname,e)}));if(!l)return a.createElement(V.default,null);var c=l.sidebar,s=c?n.docsSidebars[c]:null;return a.createElement(a.Fragment,null,a.createElement(j.Z,null,a.createElement("html",{className:n.className})),a.createElement(i.qu,{version:n},a.createElement(i.bT,{sidebar:s},a.createElement($,{currentDocRoute:l,versionMetadata:n,sidebarName:c},(0,o.Z)(t,{versionMetadata:n})))))}},4608:function(e,t,n){n.r(t);var a=n(7294),r=n(474),o=n(5999);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},7236:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(5861),r=n(7757),o=n.n(r),l=n(1736),c=n(7294),i=n(303);function s(e){var t=e.children,n=e.className,r=e.metastring,s=e.title,u=(0,c.useState)(null),d=u[0],m=u[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,(0,i.H)("someengineering","resoto");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),c.createElement(l.Z,{className:n,metastring:r,title:s},t.toString().replace(/{{latestTag}}/g,d))}},303:function(e,t,n){n.d(t,{p:function(){return c},H:function(){return i}});var a=n(5861),r=n(7757),o=n.n(r),l=n(1522),c=function(){var e=(0,a.Z)(o().mark((function e(t,n){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new l.v).request("/repos/"+t+"/"+n);case 3:return a=e.sent,e.abrupt("return",a.data.stargazers_count);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)(o().mark((function e(t,n){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new l.v).request("/repos/"+t+"/"+n+"/tags?per_page=1");case 3:return a=e.sent,e.abrupt("return",a.data[0].name);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()}}]);