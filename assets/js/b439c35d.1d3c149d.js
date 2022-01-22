"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[8027],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,u=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5644:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return h}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={},l="Release Notes 2.0.0a10 (Jan 18th, 2022)",p={permalink:"/news/2022/01/18/v2.0.0a10",source:"@site/news/2022-01-18-v2.0.0a10.md",title:"Release Notes 2.0.0a10 (Jan 18th, 2022)",description:"This release is exciting since it is the first one featuring our new product name, Resoto.",date:"2022-01-18T00:00:00.000Z",formattedDate:"January 18, 2022",tags:[],readingTime:4.345,truncated:!1,authors:[],nextItem:{title:"v2.0.0a9",permalink:"/news/2021/12/09/v2.0.0a9"}},m={authorsImageUrls:[]},d=[{value:"Query and CLI Interpretation Relative to the Reported Section",id:"query-and-cli-interpretation-relative-to-the-reported-section",children:[],level:2},{value:"Ancestor merges are now happening automagically",id:"ancestor-merges-are-now-happening-automagically",children:[],level:2},{value:"More Powerful Formats",id:"more-powerful-formats",children:[],level:2},{value:"Improved Jobs Command",id:"improved-jobs-command",children:[],level:2},{value:"<code>http</code> Command",id:"http-command",children:[],level:2},{value:"Query Cost Analysis",id:"query-cost-analysis",children:[],level:2},{value:"Other improvements",id:"other-improvements",children:[],level:2}],c={toc:d};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This release is exciting since it is the first one featuring our new product name, ",(0,r.kt)("em",{parentName:"p"},"Resoto"),"."),(0,r.kt)("p",null,"Cloudkeeper is no more, along with all ",(0,r.kt)("inlineCode",{parentName:"p"},"ck")," naming."),(0,r.kt)("p",null,"The components that make up Resoto are now called Resoto Core (",(0,r.kt)("inlineCode",{parentName:"p"},"resotocore"),"), Resoto Shell (",(0,r.kt)("inlineCode",{parentName:"p"},"resh"),"), Resoto Worker (",(0,r.kt)("inlineCode",{parentName:"p"},"resotoworker"),"), and Resoto Metrics (",(0,r.kt)("inlineCode",{parentName:"p"},"resotometrics"),")."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Docker image name has also changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"somecr.io/someengineering/resoto"),"."))),(0,r.kt)("p",null,"Besides the naming change, a lot of features have been implemented. Here is a summary of the most important ones:"),(0,r.kt)("h2",{id:"query-and-cli-interpretation-relative-to-the-reported-section"},"Query and CLI Interpretation Relative to the Reported Section"),(0,r.kt)("p",null,"Resoto has the concept of a property path. A deeply nested json object can be navigated by defining a path to it."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"reported.name")," means the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," property inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"reported")," object."))),(0,r.kt)("p",null,"Until now, we interpreted all paths from the object root. But while this might be the natural approach, we realized that most of the properties to deal with are in the reported section."),(0,r.kt)("p",null,"To make query and commands most effective, Resoto will now interpret any path relative to the reported section."),(0,r.kt)("p",null,"A property path can be prefixed with a ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," to mark it as an absolute path. This allows accessing properties not in the reported section."),(0,r.kt)("p",null,"The described behavior is used in queries and all other commands you use on the command line."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A volume (e.g. an ",(0,r.kt)("a",{parentName:"p",href:"https://resoto.com/docs/reference/resources/aws#aws_ec2_volume"},"aws_ec2_volume"),") has a ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"volume_size")," property in the reported section, that can be accessed directly."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$> query is(volume) and name=~pvc | list name, volume_size\n")),(0,r.kt)("p",{parentName:"div"},"An absolute path is now required to access properties not in the reported section.\nAssuming we want to query data in the metadata section, the path has to be prefixed with a ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$> query is(volume) and /metadata.cleaned==false | list /metadata.protected\n")))),(0,r.kt)("p",null,"This new way of path resolution allowed us to remove several CLI commands like ",(0,r.kt)("inlineCode",{parentName:"p"},"reported"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"desired")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),"."),(0,r.kt)("h2",{id:"ancestor-merges-are-now-happening-automagically"},"Ancestor merges are now happening automagically"),(0,r.kt)("p",null,"References to ancestors are available in their section ",(0,r.kt)("inlineCode",{parentName:"p"},"/ancestors"),"."),(0,r.kt)("p",null,"As with previous versions, id and name of cloud, account, region and zone are added and displayed automatically for every resource. It is now possible to use any other property besides id and name."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$> query is(volume) and /ancestors.region.metadata.intent=test\n")))),(0,r.kt)("h2",{id:"more-powerful-formats"},"More Powerful Formats"),(0,r.kt)("p",null,"The format CLI command now understands some predefined formats, that can be enabled via command line flags."),(0,r.kt)("p",null,"The following formats are available out of the box:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--graphml")," ",(0,r.kt)("a",{parentName:"li",href:"http://graphml.graphdrawing.org"},"graphml")," is a widely used format to export graph data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--cytoscape")," ",(0,r.kt)("a",{parentName:"li",href:"https://js.cytoscape.org"},"cytoscape")," vendor specific format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--dot")," export the data in ",(0,r.kt)("a",{parentName:"li",href:"https://graphviz.org"},"graphviz")," dot format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--json")," creates a JSON string for any node in the system put into a json array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--ndjson")," new line delimited JSON, so every node is a one line JSON document."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--text")," creates a text representation of every node.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Here, we export the whole graph including all edges to a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"graph.json"),":"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$> query --include-edges is(graph_root) -[0:]->  | format --json | write graph.json\n")),(0,r.kt)("p",{parentName:"div"},"And here, we export a query result in dot format."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$> query --include-edges is(aws_ec2_instance) <-[0:1]- | format --dot | write edges.dot\n")))),(0,r.kt)("p",null,"If you have ",(0,r.kt)("a",{parentName:"p",href:"https://graphviz.org"},"graphviz")," installed, you can turn this file into a diagram using this command: ",(0,r.kt)("inlineCode",{parentName:"p"},"shell> sfdp -Tpng -o edges.png edges.dot"),"."),(0,r.kt)("h2",{id:"improved-jobs-command"},"Improved Jobs Command"),(0,r.kt)("p",null,"There is now a single command to create, manipulate and test jobs using the ",(0,r.kt)("inlineCode",{parentName:"p"},"jobs")," command."),(0,r.kt)("p",null,"Please see the help page of jobs ",(0,r.kt)("inlineCode",{parentName:"p"},"$> help jobs")," to get more details."),(0,r.kt)("p",null,"We removed ",(0,r.kt)("inlineCode",{parentName:"p"},"add_job"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"delete_job")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tasks")," command."),(0,r.kt)("h2",{id:"http-command"},(0,r.kt)("inlineCode",{parentName:"h2"},"http")," Command"),(0,r.kt)("p",null,"We introduced an ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"https")," command in the CLI that allows to do a REST call to other systems in case of predefined scenarios in Resoto."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Assume we want to call an internal gatekeeper in case we find compute instances that are tagged with ",(0,r.kt)("inlineCode",{parentName:"p"},"load-test")," and are older than 24 hours."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$> query is(instance) and tags.intent="load-test" and age>24h | chunk 100 | format --json |  http gatekeeper/handle_expired\n')),(0,r.kt)("p",{parentName:"div"},"The results of this query are chunked, every chunk of 100 elements is json formatted and sent to the gatekeeper."),(0,r.kt)("p",{parentName:"div"},"It would be possible to make this a recurrent task by creating a job."))),(0,r.kt)("h2",{id:"query-cost-analysis"},"Query Cost Analysis"),(0,r.kt)("p",null,"Writing queries can be a complex task.\nTo give some guidance related to query runtime performance, we introduced the option to analyze a query.\nThe query command now has an ",(0,r.kt)("inlineCode",{parentName:"p"},"--explain")," flag, that gives insights into the query performance."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We use the previous query as example to show a possible result. (Please note that the runtime characteristics are highly dependent on the underlying graph data.)"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$> query --explain is(instance) and tags.intent="load-test" and age>24h\navailable_nr_items: 142670\nestimated_cost: 4891\nestimated_nr_items: 4641\nfull_collection_scan: false\nrating: simple\n')))),(0,r.kt)("p",null,"The final rating is the most interesting one, where Resoto defines a query as simple, complex or bad. A query that is considered simple should be fast and resource friendly."),(0,r.kt)("h2",{id:"other-improvements"},"Other improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resoto is now using ",(0,r.kt)("a",{parentName:"li",href:"https://app.codecov.io/gh/someengineering/resoto"},"Codecov")," for coverage reports."),(0,r.kt)("li",{parentName:"ul"},"This release ships with APIs and functionality to get a complete TLS secured setup.\nThis is still work in progress so all communication is plain http.\nWe will have a complete secure setup when the final 2.0 release is shipped.")))}h.isMDXComponent=!0}}]);