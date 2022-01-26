"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[3089],{8665:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(3366),n=a(7294),l=a(6010),i=a(3390),s=a(9960),o="sidebar_a9qW",c="sidebarItemTitle_uKok",m="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",g="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",p=a(5999);function v(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var h=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,r.Z)(e,h),c=t&&t.items.length>0;return n.createElement(i.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},c&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},2754:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=a(7294),n=a(2263),l=a(8665),i=a(8561),s=a(5999),o=a(1750);var c=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(o.Z,{permalink:a,title:r.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(o.Z,{permalink:n,title:r.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))},m=a(9548);var u=function(e){var t=e.metadata,a=e.items,s=e.sidebar,o=(0,n.Z)().siteConfig.title,u=t.blogDescription,g=t.blogTitle,d="/"===t.permalink?o:g;return r.createElement(l.Z,{title:d,description:u,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:s},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(c,{metadata:t}))}},8561:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(7294),n=a(6010),l=a(3905),i=a(5999),s=a(9960),o=a(4996),c=a(9548),m=a(8780),u=a(7440),g=a(6753),d="blogPostTitle_rzP5",p="blogPostData_Zg1s",v="blogPostDetailsFull_h6_j",h=a(62),E="image_o0gy";var f=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:E,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},b="authorCol_FlmR",_="imageOnlyAuthorRow_trpF",Z="imageOnlyAuthorCol_S2np";function N(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?_:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?Z:b),key:t},r.createElement(f,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var k=function(e){var t,a,E,f=(E=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return E(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,o.C)().withBaseUrl,_=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,w=e.truncated,T=e.isBlogPostPage,y=void 0!==T&&T,x=P.date,C=P.formattedDate,L=P.permalink,I=P.tags,R=P.readingTime,M=P.title,D=P.editUrl,U=P.authors,A=null!=(t=k.image)?t:Z.image,B=!y&&w,S=I.length>0,F=y?"h1":"h2";return r.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(F,{className:d,itemProp:"headline"},y?M:r.createElement(s.Z,{itemProp:"url",to:L},M)),r.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:x,itemProp:"datePublished"},C),void 0!==R&&r.createElement(r.Fragment,null," \xb7 ",f(R))),r.createElement(N,{authors:U,assets:k})),A&&r.createElement("meta",{itemProp:"image",content:b(A,{absolute:!0})}),r.createElement("div",{id:y?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:u.Z},_)),(S||w)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[v]=y,a))},S&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":B})},r.createElement(h.Z,{tags:I})),y&&D&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:D})),B&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":S})},r.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+M},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(7294),n=a(5999),l=a(7462),i=a(3366),s=a(6010),o="iconEdit_dcUD",c=["className"];var m=function(e){var t=e.className,a=(0,i.Z)(e,c);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(9548);function g(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(m,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:function(e,t,a){var r=a(7294),n=a(9960);t.Z=function(e){var t=e.permalink,a=e.title,l=e.subLabel;return r.createElement(n.Z,{className:"pagination-nav__link",to:t},l&&r.createElement("div",{className:"pagination-nav__sublabel"},l),r.createElement("div",{className:"pagination-nav__label"},a))}},7774:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(6010),l=a(9960),i="tag_hD8n",s="tagRegular_D6E_",o="tagWithCount_i0QQ";var c=function(e){var t,a=e.permalink,c=e.name,m=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[s]=!m,t[o]=m,t))},c,m&&r.createElement("span",null,m))}},62:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(6010),l=a(5999),i=a(7774),s="tags_XVD_",o="tag_JSN8";function c(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:o},r.createElement(i.Z,{name:t,permalink:a}))}))))}},7236:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(5861),n=a(7757),l=a.n(n),i=a(1736),s=a(7294),o=a(303);function c(e){var t=e.children,a=e.className,n=e.metastring,c=e.title,m=(0,s.useState)(null),u=m[0],g=m[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=g,e.next=3,(0,o.H)("someengineering","resoto");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),s.createElement(i.Z,{className:a,metastring:n,title:c},t.toString().replace(/{{latestTag}}/g,u))}},303:function(e,t,a){a.d(t,{p:function(){return s},H:function(){return o}});var r=a(5861),n=a(7757),l=a.n(n),i=a(1522),s=function(){var e=(0,r.Z)(l().mark((function e(t,a){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new i.v).request("/repos/"+t+"/"+a);case 3:return r=e.sent,e.abrupt("return",r.data.stargazers_count);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(l().mark((function e(t,a){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new i.v).request("/repos/"+t+"/"+a+"/tags?per_page=1");case 3:return r=e.sent,e.abrupt("return",r.data[0].name);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()}}]);