"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[657],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5140:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={},s="Job",c={unversionedId:"concepts/automation/job",id:"concepts/automation/job",title:"Job",description:"You can use resh to trigger commands in Resoto. Let's assume you want to find out all resources, that have not been labeled with an owner tag. The following query should do the trick:",source:"@site/docs/concepts/automation/job.md",sourceDirName:"concepts/automation",slug:"/concepts/automation/job",permalink:"/docs/concepts/automation/job",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/concepts/automation/job.md",tags:[],version:"current",lastUpdatedBy:"Jay Wallace",lastUpdatedAt:1643133589,formattedLastUpdatedAt:"1/25/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Automation",permalink:"/docs/concepts/automation"},next:{title:"Workflow",permalink:"/docs/concepts/automation/workflow"}},p=[],u={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"job"},"Job"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/components/resh"},(0,r.kt)("inlineCode",{parentName:"a"},"resh"))," to trigger commands in Resoto. Let's assume you want to find out all resources, that have not been labeled with an owner tag. The following query should do the trick:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$> query is(resource) and tags.owner==null\n")),(0,r.kt)("p",null,"Let's further assume you want to automatically set the owner tag for such resources. This can be achieved by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," command, which will update the tags of the elements to the defined value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$> query is(resource) and tags.owner==null | tag update owner "John Doe"\n')),(0,r.kt)("p",null,"While this is already an improvement, it will only update resources without tags at the moment."),(0,r.kt)("p",null,"Resources that are created in the future and do not have an owner tag have to be handled the same way again."),(0,r.kt)("p",null,"Jobs allow you to take a defined CLI Command line, that can be triggered either by time (cron expression) or event."),(0,r.kt)("p",null,"A job is executed automatically, once the related trigger triggers."),(0,r.kt)("p",null,"Let's assume we want to ensure, that there will be never resources without owner tag again."),(0,r.kt)("p",null,"We can use the command line we have written above and turn it into a job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$> jobs add ensure-owner-tag --wait-for-event post_collect 'query is(resource) and tags.owner==null | tag update owner \"John Doe\"'\nJob ensure-owner-tag added.\n")),(0,r.kt)("p",null,"Let's revisit this line to understand what it does:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the query and tag command is the same that we used before. To not conflict with the ",(0,r.kt)("inlineCode",{parentName:"li"},"jobs")," command line, the job command line is wrapped in single quotes (if we would omit those, we would write: ",(0,r.kt)("inlineCode",{parentName:"li"},"jobs add ... | tag ...")," which is not what we want)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jobs add")," is used to turn the command line into a job. A job is persisted in the database and will be available until it is deleted explicitly."),(0,r.kt)("li",{parentName:"ul"},"the job is triggered by the occurrence of the event ",(0,r.kt)("inlineCode",{parentName:"li"},"post_collect"),". See ref:",(0,r.kt)("inlineCode",{parentName:"li"},"workflow-collect_and_cleanup")," where this event is emitted by the default workflow after all resources have been collected. Since this workflow itself is triggered every hour, this job will be called constantly and operate on fresh data.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The jobs are executed server-side and the resulting output is written to the log file."),(0,r.kt)("p",{parentName:"div"},"It probably does not make a lot of sense to turn commands into jobs that do not have any side effect (side effects would be sending a notification, triggering a REST endpoint, manipulating the resources directly, etc.), since you will only see the result in the log stream."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Further examples for job triggers"',title:'"Further',examples:!0,for:!0,job:!0,'triggers"':!0},"# print hello world every minute to the log stream\n$> jobs add say-hello --schedule '* * * * *' echo hello world\n\n# print a message when the post_collect event is received\n$> jobs add on-collect-done --wait-for-event post_collect echo collect is done!\n\n# print a message when the first post_collect is received after 4 AM\n# Under the assumption that the post_collect event will come every hour,\n# this job would be only triggered once a day.\n$> jobs add early-message --schedule '0 4 * * *' --wait-for-event post_collect echo collect after 4AM is done!\n")),(0,r.kt)("p",null,"The job functionality can be used to automate actions. Here is a list of possible topics that\ncould be natural candidates for automation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Encode a set of rules."),(0,r.kt)("p",{parentName:"li"},"Define rules as queries in a way that all results returned by this query violate the rule."),(0,r.kt)("p",{parentName:"li"},"The job would run after collect is finished (",(0,r.kt)("inlineCode",{parentName:"p"},"post_collect"),")."),(0,r.kt)("p",{parentName:"li"},"Ideally, the query will not find a single entry so it will not trigger any further functionality."),(0,r.kt)("p",{parentName:"li"},"The query should be combined with the ",(0,r.kt)("inlineCode",{parentName:"p"},"notify")," command (coming soon) or the ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," command to call into another\nsystem to handle such cases.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Gather or accumulate data."),(0,r.kt)("p",{parentName:"li"},"Resoto has advanced aggregation query capabilities.\nresotometrics is using it to derive and report metrics to prometheus."),(0,r.kt)("p",{parentName:"li"},"If additional data besides metrics are relevant to you, create a job that gathers and publishes the data."),(0,r.kt)("p",{parentName:"li"},"You would use ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," aggregation and ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," to implement this functionality.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Up to date diagrams."),(0,r.kt)("p",{parentName:"li"},"Did you know that Resoto can provide graph diagrams in dot format?"),(0,r.kt)("p",{parentName:"li"},"Try this in resotoshell (",(0,r.kt)("inlineCode",{parentName:"p"},"resh"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"query --include-edges is(graph_root) -[0:2]-> | format --dot | write out.dot"),"."),(0,r.kt)("p",{parentName:"li"},"This will query the graph from the root and traverse it 2 levels deep and will also emit all edges."),(0,r.kt)("p",{parentName:"li"},"The resulting graph will be formatted in ",(0,r.kt)("inlineCode",{parentName:"p"},"Graphviz <https://graphviz.org>"),"_"," dot format and written to file out.dot."),(0,r.kt)("p",{parentName:"li"},"If you have graphviz installed, you can now create a diagram from the dot specification, for example with: ",(0,r.kt)("inlineCode",{parentName:"p"},"sfdp -Tsvg -o out.svg out.dot"),"."),(0,r.kt)("p",{parentName:"li"},"You could automate the generation of diagrams and would always have up-to-date documentation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Define resources for cleanup"),(0,r.kt)("p",{parentName:"li"},"Resoto allows you to define resources with an expiration via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto/tree/main/plugins/cleanup_expired#tag-format"},"custom tags"),"."),(0,r.kt)("p",{parentName:"li"},"If you have your idea and logic, to define when resources should be cleaned up, hook a job into ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanup_plan"),"."),(0,r.kt)("p",{parentName:"li"},"Imagine you want to cleanup all compute instances in the load-testing account every Friday night, so they will not run over the weekend."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$> jobs add mark-resources-for-cleanup --schedule '0 22 * * 5' --wait-for-event cleanup_plan 'query is(instance) and /ancestors.account.reported.name==load-testing | clean'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enforce tags structure"),(0,r.kt)("p",{parentName:"li"},"Almost all cloud providers offer the ability to annotate resources with tags."),(0,r.kt)("p",{parentName:"li"},"Those tags are used as metadata store to extend custom functionality."),(0,r.kt)("p",{parentName:"li"},"It is not an easy task to enforce valid tags, since there is usually nothing from the provider side to help with."),(0,r.kt)("p",{parentName:"li"},"With Resoto it is easy to query all resource tags with a simple query."),(0,r.kt)("p",{parentName:"li"},"There is also the ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," command which allows to update or delete tags."),(0,r.kt)("p",{parentName:"li"},"So you could set up a job, that notifies people in case the resource does not adhere to a specific format,"),(0,r.kt)("p",{parentName:"li"},"or you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," command to directly fix the issue.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"And much more\u2026"))),(0,r.kt)("p",null,"This list should give inspiration for possible jobs that can be automated and is by no means complete.\nWe are interested in your use case - so please create a PR and extend this list."))}d.isMDXComponent=!0}}]);