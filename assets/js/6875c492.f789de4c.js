"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[8610],{3074:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(3366),n=a(7294),l=a(6010),s=a(8458),i=a(3699),c="sidebar_a9qW",o="sidebarItemTitle_uKok",m="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",g="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",p=a(7325);function h(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var v=["sidebar","toc","children"];var f=function(e){var t=e.sidebar,a=e.toc,i=e.children,c=(0,r.Z)(e,v),o=t&&t.items.length>0;return n.createElement(s.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},5191:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(7294),n=a(6010),l=a(4137),s=a(7325),i=a(3699),c=a(9524),o=a(9623),m=a(3905),u=a(7136),g=a(34),d="blogPostTitle_rzP5",p="blogPostData_Zg1s",h="blogPostDetailsFull_h6_j",v=a(5907),f="image_o0gy";var E=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,s=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:f,src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},b="authorCol_FlmR",Z="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function _(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?Z:"row")},t.map((function(e,t){var s;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?N:b),key:t},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(s=a.authorsImageUrls[t])?s:e.imageURL})}))})))}var k=function(e){var t,a,f,E=(f=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return f(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,c.C)().withBaseUrl,Z=e.children,N=e.frontMatter,k=e.assets,P=e.metadata,w=e.truncated,T=e.isBlogPostPage,y=void 0!==T&&T,x=P.date,C=P.formattedDate,I=P.permalink,L=P.tags,M=P.readingTime,R=P.title,U=P.editUrl,D=P.authors,A=null!=(t=k.image)?t:N.image,B=!y&&w,S=L.length>0,z=y?"h1":"h2";return r.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(z,{className:d,itemProp:"headline"},y?R:r.createElement(i.Z,{itemProp:"url",to:I},R)),r.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:x,itemProp:"datePublished"},C),void 0!==M&&r.createElement(r.Fragment,null," \xb7 ",E(M))),r.createElement(_,{authors:D,assets:k})),A&&r.createElement("meta",{itemProp:"image",content:b(A,{absolute:!0})}),r.createElement("div",{id:y?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:u.Z},Z)),(S||w)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[h]=y,a))},S&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":B})},r.createElement(v.Z,{tags:L})),y&&U&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:U})),B&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":S})},r.createElement(i.Z,{to:P.permalink,"aria-label":"Read more about "+R},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},3866:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(7294),n=a(3699),l=a(3074),s=a(5191),i=a(7325),c=a(9623);function o(e){var t,a=e.metadata,o=e.items,m=e.sidebar,u=a.allTagsPath,g=a.name,d=a.count,p=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(d),tagName:g});return r.createElement(l.Z,{title:h,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:m},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(n.Z,{href:u},r.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},34:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(7294),n=a(7325),l=a(7462),s=a(3366),i=a(6010),c="iconEdit_dcUD",o=["className"];var m=function(e){var t=e.className,a=(0,s.Z)(e,o);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(c,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(9623);function g(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(m,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6363:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(6010),l=a(3699),s="tag_hD8n",i="tagRegular_D6E_",c="tagWithCount_i0QQ";var o=function(e){var t,a=e.permalink,o=e.name,m=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(s,(t={},t[i]=!m,t[c]=m,t))},o,m&&r.createElement("span",null,m))}},5907:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(6010),l=a(7325),s=a(6363),i="tags_XVD_",c="tag_JSN8";function o(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(i,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:c},r.createElement(s.Z,{name:t,permalink:a}))}))))}},5954:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(5861),n=a(7757),l=a.n(n),s=a(2380),i=a(7294),c=a(6740);function o(e){var t=e.children,a=e.className,n=e.metastring,o=e.title,m=(0,i.useState)(null),u=m[0],g=m[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=g,e.next=3,(0,c.H)("someengineering","resoto");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),i.createElement(s.Z,{className:a,metastring:n,title:o},t.toString().replace(/{{latestTag}}/g,u))}},6740:function(e,t,a){a.d(t,{p:function(){return i},H:function(){return c}});var r=a(5861),n=a(7757),l=a.n(n),s=a(1522),i=function(){var e=(0,r.Z)(l().mark((function e(t,a){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new s.v).request("/repos/"+t+"/"+a);case 3:return r=e.sent,e.abrupt("return",r.data.stargazers_count);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(l().mark((function e(t,a){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new s.v).request("/repos/"+t+"/"+a+"/tags?per_page=1");case 3:return r=e.sent,e.abrupt("return",r.data[0].name);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()}}]);