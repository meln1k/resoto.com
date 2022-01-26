"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[3645],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||s;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5236:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={sidebar_position:4},l="Aggregation",u={unversionedId:"reference/cli/query/aggregation",id:"reference/cli/query/aggregation",title:"Aggregation",description:"There are several situations where specific data is not too relevant but needs lifting to a higher level. That is where aggregation comes into play.",source:"@site/docs/reference/cli/query/aggregation.md",sourceDirName:"reference/cli/query",slug:"/reference/cli/query/aggregation",permalink:"/docs/reference/cli/query/aggregation",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/reference/cli/query/aggregation.md",tags:[],version:"current",lastUpdatedAt:1643164883,formattedLastUpdatedAt:"1/26/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Subqueries",permalink:"/docs/reference/cli/query/subqueries"},next:{title:"Examples",permalink:"/docs/reference/cli/query/examples"}},p=[{value:"Syntax",id:"syntax",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"aggregation"},"Aggregation"),(0,s.kt)("p",null,"There are several situations where specific data is not too relevant but needs lifting to a higher level. That is where aggregation comes into play."),(0,s.kt)("p",null,"Aggregation allows to group entities by one or more properties and then do math operations on that group."),(0,s.kt)("p",null,"Let's look at an example to understand the concept better."),(0,s.kt)("p",null,"For the sake of this example, consider this query:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"> query is(instance) and age > 3y\n")),(0,s.kt)("p",null,"This will select all compute instances in my cloud, that are older than 3 years."),(0,s.kt)("p",null,"If we only want to know the number of instances, that matches that criteria, we could write this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"> query aggregate(sum(1) as count): is(instance) and age > 3y\n> count: 20\n")),(0,s.kt)("p",null,"\u2026 which would return the total number of all compute instances that are older than 3 years."),(0,s.kt)("p",null,"You can see the ",(0,s.kt)("inlineCode",{parentName:"p"},"aggregate():")," part in front of the filter query part. The query part itself has not changed\u2014the aggregation part tells Resoto to aggregate the resulting data based on the defined criteria."),(0,s.kt)("p",null,"Every resulting element of the filter query is passed to the aggregation function. This function can aggregate data from the incoming element using on of ",(0,s.kt)("inlineCode",{parentName:"p"},"sum(x)"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"min(x)"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"max(x)")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"avg(x)"),"."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This criteria in this case is ",(0,s.kt)("inlineCode",{parentName:"p"},"sum(1) as count"),", which uses the static value ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," for every element passed and then sums it up."),(0,s.kt)("p",{parentName:"div"},"Since every element counts as ",(0,s.kt)("inlineCode",{parentName:"p"},"1"),"; ",(0,s.kt)("inlineCode",{parentName:"p"},"sum(1)")," is basically the number of elements passed."),(0,s.kt)("p",{parentName:"div"},"Please note, that the variable to sum does not need to be a static value, but could come from the element passed to this function."))),(0,s.kt)("p",null,"If we would like to know the number of CPU cores, we could rewrite the aggregation like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"> query aggregate(\n    sum(1) as count,\n    sum(instance_cores) as cores):\n  is(instance) and age > 3y\n\ncount: 20\ncores: 62\n")),(0,s.kt)("p",null,"In addition to the instance count, we also get the total number of instance cores in the system."),(0,s.kt)("p",null,"All of the above aggregations do not use any grouping information. Grouping can be a powerful feature, since it allows to make the defined computation on separate groups."),(0,s.kt)("p",null,"Let us now assume we want to know the number of instances and cores for compute instances, grouped by its instance status:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"> query aggregate(\n    instance_status as status:\n    sum(1) as count, sum(instance_cores) as cores):\n  is(instance) and age > 3y\n\ngroup:\n  status: stopped\ncount: 15\ncores: 51\n---\ngroup:\n  status: terminated\ncount: 5\ncores: 11\n")),(0,s.kt)("p",null,"The query is the same and the aggregation functions are the same."),(0,s.kt)("p",null,"The only addition here is the aggregation group: ",(0,s.kt)("inlineCode",{parentName:"p"},"instance_status"),", which is defined by every compute instance.\nThe result of this addition: the computation is performed on every matching subgroup."),(0,s.kt)("p",null,"Each group is identified by the value of the grouping variable.\nEvery compute instance is put into one subgroup by its reported ",(0,s.kt)("inlineCode",{parentName:"p"},"instance_status")," property."),(0,s.kt)("p",null,"We can see that there are 15 stopped and 5 terminated instances, with the related number of cores.\nIt is totally possible to group by more than one variable."),(0,s.kt)("p",null,"Let's also use the instance_type as an additional group variable:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"> query aggregate(\n    instance_status as status,\n    instance_type as type:\n    sum(1) as count,\n    sum(instance_cores) as cores):\n  is(instance) and age > 3y\n\ngroup:\n  status: stopped\n  type: m5.xlarge\ncount: 12\ncores: 48\n---\ngroup:\n  status: stopped\n  type: t2.micro\ncount: 3\ncores: 3\n---\ngroup:\n  status: terminated\n  type: n1-standard-1\ncount: 1\ncores: 1\n---\ngroup:\n  status: terminated\n  type: n1-standard-2\ncount: 3\ncores: 6\n---\ngroup:\n  status: terminated\n  type: n1-standard-4\ncount: 1\ncores: 4\n")),(0,s.kt)("h2",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,"General structure of every aggregation query:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"aggregate([grouping_part:] [function_part]): [query]\n")),(0,s.kt)("p",null,"The grouping part is optional and could be omitted.\nAll grouping variables are separated by comma.\nEvery grouping variable can have an ",(0,s.kt)("inlineCode",{parentName:"p"},"as <name>")," clause to give the variable a specific name: ",(0,s.kt)("inlineCode",{parentName:"p"},"<path_to_prop> as <name>"),".\nIf the ",(0,s.kt)("inlineCode",{parentName:"p"},"as <name>")," clause is omitted, a name is derived from the property path."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"path.to.property1 as p1, path.to.property2 as p2\n")),(0,s.kt)("p",null,"The grouping function part is mandatory with this syntax: ",(0,s.kt)("inlineCode",{parentName:"p"},"<function>(..)"),".\nEvery grouping function can have an ",(0,s.kt)("inlineCode",{parentName:"p"},"as <name>")," clause to give the function result a specific name: ",(0,s.kt)("inlineCode",{parentName:"p"},"<function>(..) as <name>"),".\nIf the ",(0,s.kt)("inlineCode",{parentName:"p"},"as <name>")," clause is omitted, a name is derived from the function name and property path."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sum(1) as fp1, avg(path.to.property) as fp2\n")),(0,s.kt)("p",null,"The following functions are supported:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Function"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"sum(x)")),(0,s.kt)("td",{parentName:"tr",align:null},"Sum x over all incoming elements. x can be a static value or the path to a property.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"min(x)")),(0,s.kt)("td",{parentName:"tr",align:null},"Return the smallest seen x over all incoming elements.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"max(x)")),(0,s.kt)("td",{parentName:"tr",align:null},"Return the biggest seen x over all incoming elements.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"avg(x)")),(0,s.kt)("td",{parentName:"tr",align:null},"Compute the average over all x.")))),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Count all instances in the system"',title:'"Count',all:!0,instances:!0,in:!0,the:!0,'system"':!0},"query aggregate(\n  sum(1) as count):\n  is(instance)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Count all instances and instance cores in the system"',title:'"Count',all:!0,instances:!0,and:!0,instance:!0,cores:!0,in:!0,the:!0,'system"':!0},"query aggregate(\n  sum(1) as count,\n  sum(instance_cores) as cores):\n  is(instance)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Same as above, but group all instances by status"',title:'"Same',as:!0,"above,":!0,but:!0,group:!0,all:!0,instances:!0,by:!0,'status"':!0},"query aggregate(\n  instance_status as status: sum(1) as count,\n  sum(instance_cores) as cores):\n  is(instance)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Same as above, but group all instances by status and type"',title:'"Same',as:!0,"above,":!0,but:!0,group:!0,all:!0,instances:!0,by:!0,status:!0,and:!0,'type"':!0},"query aggregate(\n  instance_status as status,\n  instance_type as type: sum(1) as count,\n  sum(instance_cores) as cores):\n  is(instance)\n")))}m.isMDXComponent=!0}}]);