"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[810],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,h=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8495:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],s={sidebar_position:1},o="Basic Queries",d={unversionedId:"reference/cli/query/basic-queries",id:"reference/cli/query/basic-queries",title:"Basic Queries",description:"Selecting Nodes by ID",source:"@site/docs/reference/cli/query/basic-queries.md",sourceDirName:"reference/cli/query",slug:"/reference/cli/query/basic-queries",permalink:"/docs/reference/cli/query/basic-queries",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/reference/cli/query/basic-queries.md",tags:[],version:"current",lastUpdatedBy:"imgbot[bot]",lastUpdatedAt:1642880460,formattedLastUpdatedAt:"1/22/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"query",permalink:"/docs/reference/cli/query/"},next:{title:"with Clause",permalink:"/docs/reference/cli/query/with-clause"}},p=[{value:"Selecting Nodes by ID",id:"selecting-nodes-by-id",children:[],level:2},{value:"Selecting Nodes by Kind",id:"selecting-nodes-by-kind",children:[],level:2},{value:"Selecting Nodes by Predicate",id:"selecting-nodes-by-predicate",children:[{value:"<code>property_path</code>",id:"property_path",children:[{value:"Array Elements",id:"array-elements",children:[],level:4}],level:3},{value:"<code>operation</code>",id:"operation",children:[],level:3},{value:"<code>value</code>",id:"value",children:[],level:3},{value:"Arrays",id:"arrays",children:[],level:3}],level:2},{value:"Selecting Nodes by Traversal",id:"selecting-nodes-by-traversal",children:[{value:"Outbound Traversal",id:"outbound-traversal",children:[],level:3},{value:"Inbound Traversal",id:"inbound-traversal",children:[],level:3},{value:"Including the Current Node",id:"including-the-current-node",children:[],level:3},{value:"Traversal by Depth",id:"traversal-by-depth",children:[{value:"Range",id:"range",children:[],level:4},{value:"One-Sided Range",id:"one-sided-range",children:[],level:4},{value:"Bi-Directional",id:"bi-directional",children:[],level:4},{value:"Abbreviations",id:"abbreviations",children:[],level:4},{value:"Traversal Selection Commands",id:"traversal-selection-commands",children:[],level:4}],level:3}],level:2},{value:"Combining Selections",id:"combining-selections",children:[],level:2}],c={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-queries"},"Basic Queries"),(0,i.kt)("h2",{id:"selecting-nodes-by-id"},"Selecting Nodes by ID"),(0,i.kt)("p",null,"Nodes can be selected by their id via the ",(0,i.kt)("inlineCode",{parentName:"p"},"id(xyz)")," function. This function can be used globally no matter which section is used."),(0,i.kt)("h2",{id:"selecting-nodes-by-kind"},"Selecting Nodes by ",(0,i.kt)("a",{parentName:"h2",href:"/docs/concepts/graph/node#kind"},"Kind")),(0,i.kt)("p",null,"In order to select nodes by a specific type, the query language supports the ",(0,i.kt)("inlineCode",{parentName:"p"},"is(kind)")," function. The term ",(0,i.kt)("inlineCode",{parentName:"p"},"is(instance)")," would select the EC2 instance above, but also all other instances, e.g. Google Cloud instances."),(0,i.kt)("p",null,"The term ",(0,i.kt)("inlineCode",{parentName:"p"},"is(aws_ec2_instance)")," would select only EC2 instances from AWS."),(0,i.kt)("h2",{id:"selecting-nodes-by-predicate"},"Selecting Nodes by Predicate"),(0,i.kt)("p",null,"In order to filter for specific attributes of a node, it is possible to define predicates.\nA predicate always has the syntax: ",(0,i.kt)("inlineCode",{parentName:"p"},"<property_path> <operation> <value>")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"answer!=42"),")."),(0,i.kt)("h3",{id:"property_path"},(0,i.kt)("inlineCode",{parentName:"h3"},"property_path")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"property_path")," is the path to the property in the JSON structure."),(0,i.kt)("p",null,"A nested attribute is accessed via the dot (",(0,i.kt)("inlineCode",{parentName:"p"},"."),"). A nested property could be accessed via ",(0,i.kt)("inlineCode",{parentName:"p"},"some.deeply.nested.property"),"."),(0,i.kt)("p",null,"Since most of the properties in question are defined in the reported section, the CLI interprets all defined property paths relative to the reported section by default (behaviour can be configured and adjusted). Thus, the path to property ",(0,i.kt)("inlineCode",{parentName:"p"},"reported.name")," can simply be written as ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,i.kt)("p",null,"If all relative paths are interpreted relative to ",(0,i.kt)("inlineCode",{parentName:"p"},"reported"),", we need a way to target properties not in the reported section. This is possible by using the root syntax via the ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," (slash)."),(0,i.kt)("p",null,"A property path that starts with a slash is always interpreted absolute."),(0,i.kt)("p",null,"In order to access properties outside of the reported section, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Find nodes where reported.cpu_count is greater than 3, and desired.clean is true"',title:'"Find',nodes:!0,where:!0,"reported.cpu_count":!0,is:!0,greater:!0,than:!0,"3,":!0,and:!0,"desired.clean":!0,'true"':!0},"cpu_count>3 and /desired.clean==true\n")),(0,i.kt)("p",null,"The section that is used to interpret the property paths is defined by the environment parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"section"),". As stated earlier, this variable defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"reported"),"."),(0,i.kt)("p",null,"Since the CLI allows to define environment variables as part of the CLI command, this behaviour can be adjusted easily:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$> section=reported query cpu_count>3 and /desired.clean==true\n")),(0,i.kt)("p",null,"is semantically the same as this query, which interprets all paths from the root"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$> section=/ query reported.cpu_count>3 and desired.clean==true\n")),(0,i.kt)("p",null,"is semantically the same as this query, which interprets all paths relative to the desired section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$> section=desired query /reported.cpu_count>3 and clean==true\n")),(0,i.kt)("p",null,"The examples above only illustrate the mechanics of property paths. We suggest to keep the default, as the examples below assume the default setting."),(0,i.kt)("h4",{id:"array-elements"},"Array Elements"),(0,i.kt)("p",null,"A property inside an array is accessed via ",(0,i.kt)("inlineCode",{parentName:"p"},"[position]"),". So to access the first element of an array we can write ",(0,i.kt)("inlineCode",{parentName:"p"},"[0]"),"."),(0,i.kt)("p",null,"If the position is not known or does not matter we can write ",(0,i.kt)("inlineCode",{parentName:"p"},"[*]"),"."),(0,i.kt)("h3",{id:"operation"},(0,i.kt)("inlineCode",{parentName:"h3"},"operation")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"operation")," is one of the following options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Operation"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"=")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"==")),(0,i.kt)("td",{parentName:"tr",align:null},"Property is equal to the provided value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"!=")),(0,i.kt)("td",{parentName:"tr",align:null},"Property is not equal to the provided value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<=")),(0,i.kt)("td",{parentName:"tr",align:null},"Property is less than or equal to the provided value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},">=")),(0,i.kt)("td",{parentName:"tr",align:null},"Property is greater than or equal to the provided value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},">")),(0,i.kt)("td",{parentName:"tr",align:null},"Property is greater than the provided value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<")),(0,i.kt)("td",{parentName:"tr",align:null},"Property is less than the provided value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"~")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"=~")),(0,i.kt)("td",{parentName:"tr",align:null},"Property conforms to the given regexp. Only applicable to strings.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"!~")),(0,i.kt)("td",{parentName:"tr",align:null},"Property is not conform to the given regexp. Only applicable to strings.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"in")),(0,i.kt)("td",{parentName:"tr",align:null},"Property is one of the following values. The value has to be an array.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"not in")),(0,i.kt)("td",{parentName:"tr",align:null},"Property is not one of the following values. The value has to be an array.")))),(0,i.kt)("h3",{id:"value"},(0,i.kt)("inlineCode",{parentName:"h3"},"value")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," can be any JSON literal or JSON conform value."),(0,i.kt)("p",null,"A JSON conform value is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"string: Examples: ",(0,i.kt)("inlineCode",{parentName:"li"},'"hello world"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"test"'),". Note: the query parser is gracious with quotes.\nIf there are no white space and no special characters, it is possible to omit quotes.\nIn case you see parse errors, try adding quotes to your strings."),(0,i.kt)("li",{parentName:"ul"},"number: Integers and float numbers can be expressed. Examples: ",(0,i.kt)("inlineCode",{parentName:"li"},"23"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"12.123"),".\nThe model itself clearly defines if a number is ",(0,i.kt)("inlineCode",{parentName:"li"},"int32"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"int64"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"double"),".\nFrom the query point of view, all numbers are treated the same way."),(0,i.kt)("li",{parentName:"ul"},"boolean: Examples: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"array: Examples: ",(0,i.kt)("inlineCode",{parentName:"li"},'[1, true, "test"]')),(0,i.kt)("li",{parentName:"ul"},"json object: Examples: ",(0,i.kt)("inlineCode",{parentName:"li"},'{"a": 1, "b": 2}')),(0,i.kt)("li",{parentName:"ul"},"null: ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"\nThis can be useful to query for properties that are unset or do not exist.")),(0,i.kt)("h3",{id:"arrays"},"Arrays"),(0,i.kt)("p",null,"If the filtered property is an array, it is also possible to define a criteria based on elements of the array using one of the operator modifier: ",(0,i.kt)("inlineCode",{parentName:"p"},"all"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," in front of the operation."),(0,i.kt)("p",null,"Let us assume following document: ",(0,i.kt)("inlineCode",{parentName:"p"},'{"reported": { "test": [1, 2, 3, 4]}}'),", we could define a query like ",(0,i.kt)("inlineCode",{parentName:"p"},"test all >= 1")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"test any > 2")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"test none > 100"),", which would match the document."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example predicates")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Select nodes with names exactly matching "sunset""',title:'"Select',nodes:!0,with:!0,names:!0,exactly:!0,matching:!0,'"sunset""':!0},'name == "sunset"\n')),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Same as previous; parentheses are optional if the string is not a number and does not contain special characters"',title:'"Same',as:!0,"previous;":!0,parentheses:!0,are:!0,optional:!0,if:!0,the:!0,string:!0,is:!0,not:!0,a:!0,number:!0,and:!0,does:!0,contain:!0,special:!0,'characters"':!0},"name == sunset\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",2:!0,className:"language-bash",metastring:'title="Select nodes with more than 2 instance_cores"',title:'"Select',nodes:!0,with:!0,more:!0,than:!0,'instance_cores"':!0},"instance_cores > 2\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Select nodes where the name matches the regular expression sun.*"',title:'"Select',nodes:!0,where:!0,the:!0,name:!0,matches:!0,regular:!0,expression:!0,'sun.*"':!0},'`name =~ "sun.*"`\n')),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Select nodes where the name is either "sunset" or "sunrise""',title:'"Select',nodes:!0,where:!0,the:!0,name:!0,is:!0,either:!0,'"sunset"':!0,or:!0,'"sunrise""':!0},'`name in ["sunset", "sunrise"]`\n')))),(0,i.kt)("h2",{id:"selecting-nodes-by-traversal"},"Selecting Nodes by Traversal"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<--")," traverses the graph inbound, ",(0,i.kt)("inlineCode",{parentName:"p"},"--\x3e")," traverses the graph outbound."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Traversal Selectors Diagram",src:a(3777).Z})),(0,i.kt)("h3",{id:"outbound-traversal"},"Outbound Traversal"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--\x3e")," traverses the graph outbound to the next level."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Select AWS accounts and traverse the graph outbound"',title:'"Select',AWS:!0,accounts:!0,and:!0,traverse:!0,the:!0,graph:!0,'outbound"':!0},"query is(aws_account) --\x3e\n")),(0,i.kt)("p",{parentName:"div"},"This query would return a list of all matching regions."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{alt:"Outbound Traversal Example Query Diagram",src:a(1892).Z})))),(0,i.kt)("h3",{id:"inbound-traversal"},"Inbound Traversal"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<--")," traverses the graph inbound to the next level."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Select AWS EC2 instances, traverse the graph inbound, and filter to only return the aws_regions"',title:'"Select',AWS:!0,EC2:!0,"instances,":!0,traverse:!0,the:!0,graph:!0,"inbound,":!0,and:!0,filter:!0,to:!0,only:!0,return:!0,'aws_regions"':!0},"query is(aws_ec2_instance) <-- is(aws_region)\n")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{alt:"Inbound Traversal Example Query Diagram",src:a(4931).Z})))),(0,i.kt)("h3",{id:"including-the-current-node"},"Including the Current Node"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-[0:1]->")," traverses the graph outbound, starting from the current node ",(0,i.kt)("strong",{parentName:"p"},"(0)")," until the next level ",(0,i.kt)("strong",{parentName:"p"},"(1)"),". The result will contain the current node plus all nodes one level outbound. The same applies for inbound with this statement ",(0,i.kt)("inlineCode",{parentName:"p"},"<-[0:1]-"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Return all resources "under" an aws_region together with the matching aws_region"',title:'"Return',all:!0,resources:!0,'"under"':!0,an:!0,aws_region:!0,together:!0,with:!0,the:!0,matching:!0,'aws_region"':!0},"query is(aws_region) -[0:1]->`\n")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{alt:"Example Query Diagram",src:a(7396).Z})))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Return all aws_regions with name global, together with all accounts"',title:'"Return',all:!0,aws_regions:!0,with:!0,name:!0,"global,":!0,together:!0,'accounts"':!0},"query is(aws_region) and name==global <-[0:1]-\n")))),(0,i.kt)("h3",{id:"traversal-by-depth"},"Traversal by Depth"),(0,i.kt)("h4",{id:"range"},"Range"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-[start:until]->")," traverses the graph outbound starting from a user defined depth to a user defined depth.\nThe graph will be traversed from the current node according to this specification. All matching nodes will be returned.\nThe same applies for inbound traversals with ",(0,i.kt)("inlineCode",{parentName:"p"},"<-[start:until]-"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Traversal by Depth Diagram",src:a(9306).Z})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'The following query answers the question, "Which instance profile is used for ec2 instances connected to an alb target group?"'),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",2:!0,className:"language-bash",metastring:'title="Select aws_alb_target_groups, traverse 2 levels inbound, and filter for aws_iam_instance_profiles"',title:'"Select',"aws_alb_target_groups,":!0,traverse:!0,levels:!0,"inbound,":!0,and:!0,filter:!0,for:!0,'aws_iam_instance_profiles"':!0},"query is(aws_alb_target_groups) <-[2:2]- is(aws_iam_instance_profile)\n")))),(0,i.kt)("h4",{id:"one-sided-range"},"One-Sided Range"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-[start:]->")," traverses the graph outbound starting from a user defined depth to the leafs of the graph.\nThe graph will be traversed from the current node according to this specification. All matching nodes will be returned.\nThe same applies for inbound traversals with ",(0,i.kt)("inlineCode",{parentName:"p"},"<-[start:]-"),"."),(0,i.kt)("p",null,".. admonition:: Example"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"query is(aws_account) and name==sunshine -[0:]->")),(0,i.kt)("p",null,"This query will select the aws account with name ",(0,i.kt)("inlineCode",{parentName:"p"},"sunshine")," and then select all nodes outbound to this node.\nThis will select everything Resoto knows about nodes in this account."),(0,i.kt)("h4",{id:"bi-directional"},"Bi-Directional"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<-[start:until]->")," traverses the graph inbound and outbound starting from a user defined depth to a user defined depth.\nThe graph will be traversed from the current node according to this specification. All matching nodes will be returned."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Select nodes with the name sunset connected on any depth to the AWS account"',title:'"Select',nodes:!0,with:!0,the:!0,name:!0,sunset:!0,connected:!0,on:!0,any:!0,depth:!0,to:!0,AWS:!0,'account"':!0},'query name="sunset" and is(aws_account) <-[0:]->\n')))),(0,i.kt)("h4",{id:"abbreviations"},"Abbreviations"),(0,i.kt)("p",null,"There are abbreviations for the most common traversal selectors."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Abbreviated Selector"),(0,i.kt)("th",{parentName:"tr",align:null},"Unabbreviated Selector"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--\x3e")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-[1:1]->"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<--")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<-[1:1]-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<--\x3e")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<-[1:1]->"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<-[x]-")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<-[x:x]-"))))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Examples")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Abbreviated"),(0,i.kt)("th",{parentName:"tr",align:null},"Unabbreviated"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"query is(aws_account) --\x3e")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"query is(aws_account) -[1:1]->"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"query is(aws_region) <--\x3e")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"query is(aws_region) <-[1:1]->"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<-[x]-")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<-[x:x]-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"query is(aws_region) <-[3]->")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"query is(aws_region) <-[3:3]->"))))))),(0,i.kt)("h4",{id:"traversal-selection-commands"},"Traversal Selection Commands"),(0,i.kt)("p",null,"There are also commands doing a traversal selection that you can chain using a pipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Traversal Selector"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"predecessors")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<--")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"<-[1:1]-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"successors")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--\x3e")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"-[1:1]->"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ancestors")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<-[1:]-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"descendants")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-[1:]->"))))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Examples")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Piped Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Equivalent Query"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"query is(aws_region) ","|"," predecessors")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"query is(aws_region) <--"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"query is(aws_region) ","|"," successors")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"query is(aws_region) --\x3e"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"query is(aws_region) ","|"," ancestors")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"query is(aws_region) <-[1:]-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"query is(aws_region) ","|"," descendants")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"query is(aws_region) -[1:]->"))))))),(0,i.kt)("h2",{id:"combining-selections"},"Combining Selections"),(0,i.kt)("p",null,"All listed selections can be combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"and")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"or")," clauses."),(0,i.kt)("p",null,"In order to define precedence, simply enclose terms with brackets."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Examples")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Select nodes where reported.name is either sunrise or sunset"',title:'"Select',nodes:!0,where:!0,"reported.name":!0,is:!0,either:!0,sunrise:!0,or:!0,'sunset"':!0},"query name == sunset or name == sunrise\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Select aws_ec2_instance nodes where reported.name is sunrise"',title:'"Select',aws_ec2_instance:!0,nodes:!0,where:!0,"reported.name":!0,is:!0,'sunrise"':!0},"query is(aws_ec2_instance) and name==sunrise\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",2:!0,className:"language-bash",metastring:'title="Select aws_ec2_instance nodes of specific type or more than 2 cores"',title:'"Select',aws_ec2_instance:!0,nodes:!0,of:!0,specific:!0,type:!0,or:!0,more:!0,than:!0,'cores"':!0},'query is(aws_ec2_instance) and (instance_type=="m5a.large" or instance_cores>2)\n')))))}m.isMDXComponent=!0},7396:function(e,t,a){t.Z=a.p+"assets/images/graph_query_01-c74c8b167cedd9bf935c30e0185b5f13.png"},4931:function(e,t,a){t.Z=a.p+"assets/images/graph_query_inbound_example-c28a3814b54ecd1497eb1c8ccedf4829.png"},3777:function(e,t,a){t.Z=a.p+"assets/images/graph_query_inout-0793f6123394de2c444b320f823cebfd.png"},1892:function(e,t,a){t.Z=a.p+"assets/images/graph_query_outbound_example-5f51321c68b3d8326017d03783a20dca.png"},9306:function(e,t,a){t.Z=a.p+"assets/images/graph_query_startuntil-8951d8402bc72ca9b11838f9de2d4562.png"}}]);