"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[9514,4608],{5642:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),r=n(3905),l=n(6291),o=n(4823),c=n(6010),i=n(3616),s=n(3783),u=n(5537),d=n(7462);var m=function(e){return a.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(5999),b=n(3366),f=n(9960),h=n(3919),v=n(541),E="menuLinkText_OKON",g="hasHref_TwRn",k=n(2389),_=["items"],C=["item"],Z=["item","onItemClick","activePath","level"],N=["item","onItemClick","activePath","level"],S=(0,a.memo)((function(e){var t=e.items,n=(0,b.Z)(e,_);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(T,(0,d.Z)({key:t,item:e},n))})))}));function T(e){var t=e.item,n=(0,b.Z)(e,C);return"category"===t.type?0===t.items.length?null:a.createElement(I,(0,d.Z)({item:t},n)):a.createElement(w,(0,d.Z)({item:t},n))}function I(e){var t,n=e.item,r=e.onItemClick,l=e.activePath,o=e.level,s=(0,b.Z)(e,Z),u=n.items,m=n.label,h=n.collapsible,v=n.className,_=n.href,C=function(e){var t=(0,k.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0}),[e,t])}(n),N=(0,i._F)(n,l),T=(0,i.uR)({initialState:function(){return!!h&&(!N&&n.collapsed)}}),I=T.collapsed,w=T.setCollapsed,y=T.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:N,collapsed:I,setCollapsed:w}),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":I},v)},a.createElement("div",{className:"menu__list-item-collapsible"},a.createElement(f.Z,(0,d.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":h&&!_,"menu__link--active":N},t[E]=!h,t[g]=!!C,t)),onClick:h?function(e){null==r||r(n),_?w(!1):(e.preventDefault(),y())}:function(){null==r||r(n)},href:h?null!=C?C:"#":C},s),m),_&&h&&a.createElement("button",{"aria-label":(0,p.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:m}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),y()}})),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},a.createElement(S,{items:u,tabIndex:I?-1:0,onItemClick:r,activePath:l,level:o+1})))}function w(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,o=(0,b.Z)(e,N),s=t.href,u=t.label,m=t.className,p=(0,i._F)(t,r);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:u},a.createElement(f.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,h.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},o),(0,h.Z)(s)?u:a.createElement("span",null,u,a.createElement(v.Z,null))))}var y="sidebar_a3j0",M="sidebarWithHideableNavbar_VlPv",x="sidebarHidden_OqfG",A="sidebarLogo_hmkv",F="menu_cyFh",L="menuWithAnnouncementBar_+O1J",B="collapseSidebarButton_eoK2",P="collapseSidebarButtonIcon_e+kA";function H(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",B),onClick:t},a.createElement(m,{className:P}))}function R(e){var t,n,r=e.path,l=e.sidebar,o=e.onCollapse,s=e.isHidden,d=function(){var e=(0,i.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,i.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,i.LU)(),p=m.navbar.hideOnScroll,b=m.hideableSidebar;return a.createElement("div",{className:(0,c.Z)(y,(t={},t[M]=p,t[x]=s,t))},p&&a.createElement(u.Z,{tabIndex:-1,className:A}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",F,(n={},n[L]=d,n))},a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(S,{items:l,activePath:r,level:1}))),b&&a.createElement(H,{onClick:o}))}var D=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(S,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function W(e){return a.createElement(i.Cv,{component:D,props:e})}var q=a.memo(R),z=a.memo(W);function O(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(q,e),r&&a.createElement(z,e))}var Y=n(7440),K=n(4608),U="backToTopButton_i9tI",V="backToTopButtonShow_wCmF";function j(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var G=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useRef)(!1),o=j(),s=o.smoothScrollTop,u=o.cancelScrollToTop;return(0,i.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(l.current)l.current=!1;else{var o=n<a;if(o||u(),n<300)r(!1);else if(o){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&r(!0)}else r(!1)}})),(0,i.SL)((function(e){e.location.hash&&(l.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,U,(e={},e[V]=n,e)),type:"button",onClick:function(){return s()}})},J=n(6775),Q={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"},X=n(2859);function $(e){var t,n,l,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,b=e.sidebarName,f=(0,i.Vq)(),h=u.pluginId,v=u.version,E=(0,a.useState)(!1),g=E[0],k=E[1],_=(0,a.useState)(!1),C=_[0],Z=_[1],N=(0,a.useCallback)((function(){C&&Z(!1),k((function(e){return!e}))}),[C]);return a.createElement(o.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:v,tag:(0,i.os)(h,v)}},a.createElement("div",{className:Q.docPage},a.createElement(G,null),f&&a.createElement("aside",{className:(0,c.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&g&&Z(!0)}},a.createElement(O,{key:b,sidebar:f,path:s.path,onCollapse:N,isHidden:C}),C&&a.createElement("div",{className:Q.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(m,{className:Q.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(Q.docMainContainer,(n={},n[Q.docMainContainerEnhanced]=g||!f,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(l={},l[Q.docItemWrapperEnhanced]=g,l))},a.createElement(r.Zo,{components:Y.Z},d)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,J.LX)(r.pathname,e)}));if(!o)return a.createElement(K.default,null);var c=o.sidebar,s=c?n.docsSidebars[c]:null;return a.createElement(a.Fragment,null,a.createElement(X.Z,null,a.createElement("html",{className:n.className})),a.createElement(i.qu,{version:n},a.createElement(i.bT,{sidebar:s},a.createElement($,{currentDocRoute:o,versionMetadata:n,sidebarName:c},(0,l.Z)(t,{versionMetadata:n})))))}},4608:function(e,t,n){n.r(t);var a=n(7294),r=n(4823),l=n(5999);t.default=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},7236:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(5861),r=n(7757),l=n.n(r),o=n(9055),c=n(7294),i=n(303);function s(e){var t=e.children,n=e.className,r=e.metastring,s=e.title,u=(0,c.useState)(null),d=u[0],m=u[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,(0,i.H)("someengineering","resoto");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),c.createElement(o.Z,{className:n,metastring:r,title:s},t.toString().replace(/{{latestTag}}/g,d))}},303:function(e,t,n){n.d(t,{p:function(){return c},H:function(){return i}});var a=n(5861),r=n(7757),l=n.n(r),o=n(1522),c=function(){var e=(0,a.Z)(l().mark((function e(t,n){var a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new o.v).request("/repos/"+t+"/"+n);case 3:return a=e.sent,e.abrupt("return",a.data.stargazers_count);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)(l().mark((function e(t,n){var a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new o.v).request("/repos/"+t+"/"+n+"/tags?per_page=1");case 3:return a=e.sent,e.abrupt("return",a.data[0].name);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()}}]);