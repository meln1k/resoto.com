"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[9817],{241:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(7294),i=n(3699),r=n(9623),l=n(6010),s="cardContainer_woeA",o="cardContainerLink_iOSj",c="cardTitle_pNjP",m="cardDescription_qC_k",u=n(2735);function d(e){var t=e.href,n=e.children,r=(0,l.Z)("card margin-bottom--lg padding--lg",s,t&&o);return t?a.createElement(i.Z,{href:t,className:r},n):a.createElement("div",{className:r},n)}function v(e){var t=e.href,n=e.icon,i=e.title,r=e.description;return a.createElement(d,{href:t},a.createElement("h2",{className:(0,l.Z)("text--truncate",c),title:i},n," ",i),a.createElement("div",{className:(0,l.Z)("text--truncate",m),title:r},r))}function h(e){var t=e.item,n=(0,r.Wl)(t);return a.createElement(v,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.items.length+" items"})}function g(e){var t,n=e.item,i=(0,u.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,r.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(v,{href:n.href,icon:i,title:n.label,description:null==l?void 0:l.description})}function f(e){var t=e.item;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function E(e){var t=e.items;return a.createElement("div",{className:"row"},t.map((function(e,t){return a.createElement("article",{key:t,className:"col col--6"},a.createElement(f,{item:e}))})))}},9197:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(7294),i=n(9623),r=n(241),l=n(1404),s=n(4175),o=n(3757),c=n(8620),m=n(8032),u=n(9524),d="generatedIndexPage_vzzw",v="title_qBh7";function h(e){var t=e.categoryGeneratedIndex,n=(0,i.jA)();return a.createElement(a.Fragment,null,a.createElement(s.Z,{title:t.title,description:t.description,keywords:t.keywords,image:(0,u.Z)(t.image)}),a.createElement("div",{className:d},a.createElement(o.Z,null),a.createElement(c.Z,null),a.createElement("header",null,a.createElement(m.Z,{as:"h1",className:v},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("main",{className:"margin-top--lg"},a.createElement(r.Z,{items:n.items})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(l.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}},1404:function(e,t,n){var a=n(7462),i=n(7294),r=n(7325),l=n(8115);t.Z=function(e){var t=e.previous,n=e.next;return i.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},i.createElement("div",{className:"pagination-nav__item"},t&&i.createElement(l.Z,(0,a.Z)({},t,{subLabel:i.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),i.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&i.createElement(l.Z,(0,a.Z)({},n,{subLabel:i.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},8620:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),i=n(9623),r=n(6010);function l(e){var t=e.className,n=(0,i.E6)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,i.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",n.label):null}},3757:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7294),i=n(9962),r=n(3699),l=n(7325),s=n(6070),o=n(9623),c=n(6010);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function u(e){var t=m[e.versionMetadata.banner];return a.createElement(t,e)}function d(e){var t=e.versionLabel,n=e.to,i=e.onClick;return a.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(r.Z,{to:n,onClick:i},a.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,n=e.className,r=e.versionMetadata,l=(0,i.Z)().siteConfig.title,m=(0,s.useActivePlugin)({failfast:!0}).pluginId,v=(0,o.J)(m).savePreferredVersionName,h=(0,s.useDocVersionSuggestions)(m),g=h.latestDocSuggestion,f=h.latestVersionSuggestion,E=null!=g?g:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,c.Z)(n,o.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(u,{siteTitle:l,versionMetadata:r})),a.createElement("div",{className:"margin-top--md"},a.createElement(d,{versionLabel:f.label,to:E.path,onClick:function(){return v(f.name)}})))}function h(e){var t=e.className,n=(0,o.E6)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}},8032:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),i=n(3366),r=n(7294),l=n(6010),s=n(7325),o=n(9623),c="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ",u=["as","id"],d=["as"];function v(e){var t,n=e.as,d=e.id,v=(0,i.Z)(e,u),h=(0,o.LU)().navbar.hideOnScroll;return d?r.createElement(n,(0,a.Z)({},v,{className:(0,l.Z)("anchor",(t={},t[m]=h,t[c]=!h,t)),id:d}),v.children,r.createElement("a",{className:"hash-link",href:"#"+d,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(n,v)}function h(e){var t=e.as,n=(0,i.Z)(e,d);return"h1"===t?r.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):r.createElement(v,(0,a.Z)({as:t},n))}},8115:function(e,t,n){var a=n(7294),i=n(3699);t.Z=function(e){var t=e.permalink,n=e.title,r=e.subLabel;return a.createElement(i.Z,{className:"pagination-nav__link",to:t},r&&a.createElement("div",{className:"pagination-nav__sublabel"},r),a.createElement("div",{className:"pagination-nav__label"},n))}}}]);