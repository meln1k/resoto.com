"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[1116],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=o,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},46482:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return d},default:function(){return p}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],s={},l="v2.0.0a3",c={permalink:"/news/2021/10/04/v2.0.0a3",source:"@site/news/2021-10-04-v2.0.0a3.md",title:"v2.0.0a3",description:'July 1st, 2021 was a big day for Cloudkeeper. We started a new company to focus 100% on building out Cloudkeeper. The new company\'s name is "Some Engineering Inc.", and going forward we are the maintainers of the open-source project.',date:"2021-10-04T00:00:00.000Z",formattedDate:"October 4, 2021",tags:[],readingTime:11.945,truncated:!1,authors:[],frontMatter:{},prevItem:{title:"v2.0.0a9",permalink:"/news/2021/12/09/v2.0.0a9"}},u={authorsImageUrls:[]},d=[{value:"Architecture: From Monolith to Distributed System",id:"architecture-from-monolith-to-distributed-system",children:[{value:"Components",id:"components",children:[],level:3}],level:2},{value:"Graph Storage: From In-Memory to On-Disk Persistence",id:"graph-storage-from-in-memory-to-on-disk-persistence",children:[],level:2},{value:"Query Language: From Constrained to Flexible",id:"query-language-from-constrained-to-flexible",children:[{value:"Example",id:"example",children:[],level:3}],level:2},{value:"Metrics: From Hard-Coded to Query-Based",id:"metrics-from-hard-coded-to-query-based",children:[],level:2},{value:"Command-Line Interface: From Local to Remote Execution",id:"command-line-interface-from-local-to-remote-execution",children:[],level:2},{value:"Workflows: From Hard-Coded to Event-Based",id:"workflows-from-hard-coded-to-event-based",children:[],level:2},{value:"What&#39;s Next?",id:"whats-next",children:[],level:2}],h={toc:d};function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'July 1st, 2021 was a big day for Cloudkeeper. We started a new company to focus 100% on building out Cloudkeeper. The new company\'s name is "Some Engineering Inc.", and going forward we are the maintainers of the open-source project.'),(0,r.kt)("p",null,"Cloudkeeper started as an internal project in late 2019 at D2iQ, the Enterprise Kubernetes Platform, to solve the problem of \"better housekeeping\" for D2iQ's cloud accounts. Find leaky resources, manage quota limits, detect drift, clean up and reduce cost. It's the stuff no engineer wants to deal with. Our co-founder Lukas was a Site Reliability Engineer at D2iQ, and he was in charge of the cleanup project. He needed a tool to give him the big picture of all cloud resources running. And then use that inventory to identify and clean up the resources not in use anymore."),(0,r.kt)("p",null,"Fast forward to today, and Cloudkeeper has been in production at D2iQ for almost two years. It has grown \"organically'' to its current functionality. The SRE team at D2iQ knows all the ins and out of the project. But for somebody new to the project, the bar to start was quite high."),(0,r.kt)("p",null,"For the past two months, we've been busy changing that. And the result is release 2.0.0a3. With this new release, we took out the friction to get Cloudkeeper running in a cloud account. At the same time, we also added a lot of new functionality that makes Cloudkeeper more useful."),(0,r.kt)("p",null,"We also wrote a lot of new documentation to make it easier for a new user to start with Cloudkeeper. It's far from done yet, and we're adding new sections every day."),(0,r.kt)("p",null,"But let's dive into the updates!"),(0,r.kt)("h2",{id:"architecture-from-monolith-to-distributed-system"},"Architecture: From Monolith to Distributed System"),(0,r.kt)("p",null,"We rebuilt Cloudkeeper from the ground up to make it extensible and scalable. The first version of Cloudkeeper was monolithic with a single binary and ran in-memory locally on a laptop. We broke down the single binary and now provide four different binaries:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ckcore")," maintains cloud-agnostic data in a graph"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ckworker")," executes infrastructure-specific plug-ins"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"cksh")," starts the Cloudkeeper shell"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ckmetrics")," calculates metrics in Prometheus format")),(0,r.kt)("p",null,"The benefit of this approach is that it scales. The length of a full Cloudkeeper run is subject to the number of accounts in a cloud. If you have hundreds or even thousands of accounts\u2014it just takes longer to collect all resources. With this new architecture, you can now add more ",(0,r.kt)("inlineCode",{parentName:"p"},"ckworker")," for faster processing."),(0,r.kt)("p",null,"This distributed architecture is also more flexible. A clear and simple API helps deal with cloud-specific data. Right now we support AWS, but eventually, we will also build support for GCP, Azure, Alicloud, etc. Different workers give you the freedom of choice to allocate workers, with different configurations. For example, you can have different workers for different clouds, and split the workloads that way. Or, you assign a worker for each individual login. In other words, you can run workers in whatever combination, to reflect e.g. your multi-cloud, geo, account or login structure of your cloud."),(0,r.kt)("h3",{id:"components"},"Components"),(0,r.kt)("p",null,"A bit more detail on the four components of the architecture."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ckcore"),', a.k.a. "the core," maintains the graph. Data collection happens via ',(0,r.kt)("inlineCode",{parentName:"li"},"ckworker"),". The workers push data into ",(0,r.kt)("inlineCode",{parentName:"li"},"ckcore"),", after the core has told the workers to start collecting data. In the graph, nodes are individual resources, edges are logical dependencies. Cloudkeeper stores a resource's attributes in the node. These attributes are the basis for the dependencies that Cloudkeeper creates. We built ",(0,r.kt)("inlineCode",{parentName:"li"},"ckcore")," with a scheduler and a message bus. The message bus has topics and queues. The scheduler runs internally in the core, by default the collect event gets triggered once per hour. A user can however define their own schedule by using the Cloudkeeper shell ",(0,r.kt)("inlineCode",{parentName:"li"},"cksh"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ckworker")," does all the collection and cleanup work in Cloudkeeper. It waits for instructions from ",(0,r.kt)("inlineCode",{parentName:"li"},"ckcore")," over a WebSocket connection. By default ",(0,r.kt)("inlineCode",{parentName:"li"},"ckworker")," subscribes to collect, clean up and tag tasks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cksh"),' is our command-line interface, aka "the shell." The CLI allows you to execute a variety of commands (see query language) to explore the graph, find resources of interest, mark them for cleanup, fix their tagging, aggregate over their metadata to create metrics and format the output for use in a 3rd party script or system.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ckmetrics")," takes graph data from ",(0,r.kt)("inlineCode",{parentName:"li"},"ckcore")," and runs aggregation functions on it. The aggregated metrics are then exposed in a Prometheus-compatible format for consumption in other services. For example, D2iQ uses Grafana dashboards to visualize infrastructure metrics for Engineering, Finance and the CEO.")),(0,r.kt)("h2",{id:"graph-storage-from-in-memory-to-on-disk-persistence"},"Graph Storage: From In-Memory to On-Disk Persistence"),(0,r.kt)("p",null,"One of the biggest asks by early users has been data persistence. With the new version of Cloudkeeper, we migrated from a locally maintained in-memory graph to a backend where we now persist the graph after each collect run. Under the hood, we use ArangoDB for that."),(0,r.kt)("p",null,"Data persistence has three major advantages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is the foundation to create a history and different versions of the graph. In the past, with the in-memory only version, a restart would make Cloudkeeper lose all history. Right now Cloudkeeper persists the latest collected snapshot, and we have history on our roadmap."),(0,r.kt)("li",{parentName:"ul"},"By persisting the graph we can also provide an audit trail of all changes. Cloudkeeper attaches the changelog to the node that represents the resource. In the previous version, you lost the changelog associated with each node once a new collect run started. Once we keep a history of snapshots, we can also provide a history of changes. Particularly users in the financial services industry have asked for that capability."),(0,r.kt)("li",{parentName:"ul"},"The size of the data set Cloudkeeper collects and stores is not limited anymore by available memory. It's essentially unlimited now by adding more storage at the database layer. This means Cloudkeeper can work with the largest cloud and multi-cloud infrastructure(s).")),(0,r.kt)("p",null,"Data persistence also means better collaboration, because two people can now look at the same version of the graph. Previously, their local versions of the graph would be different from each other, simply because the information was collected at different points in time."),(0,r.kt)("p",null,"We also switched to incremental updates. Every time a collector runs, it collects all resources in your entire cloud and sends the information to the core. The old version would push the entire new graph, which is fine for an in-memory store. But now with data persistence and disk, we wanted to optimize for fewer writes. In this new version, the core compares what a new collect run delivered with the current state of the graph, and only stores the delta between the two."),(0,r.kt)("h2",{id:"query-language-from-constrained-to-flexible"},"Query Language: From Constrained to Flexible"),(0,r.kt)("p",null,"In the previous version of Cloudkeeper, plug-ins delivered much of the rich functionality. The issue with that approach is that for each new use case, you need to create a new plug-in. Plug-ins are useful, but they require writing code and deploying the change. It also means the number of plug-ins keeps going up as you add more use cases, and it gets confusing pretty fast."),(0,r.kt)("p",null,"Instead, we evolved the query language to include more commands and richer query syntax. The benefit for the users is that you don't have to write and maintain yet another plug-in\u2014you just write a single query."),(0,r.kt)("p",null,"A really nice new functionality of the query language is graph traversal over multiple nodes. In the old version of Cloudkeeper, you could only match and filter by attributes for an individual resource. Now, with graph traversal, you can also filter and match based on the state of all predecessor and successor nodes. This is a super powerful capability to navigate the graph, express complex conditions across multiple resources in a single query, and take action on resources that match those conditions."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,'Let\'s illustrate this with a specific use case\u2014cleaning up unused application load balancers ("ALB") in AWS. Load balancers distribute incoming application traffic across multiple targets, such as EC2 instances, which are attached to multiple target groups. In short, ',(0,r.kt)("em",{parentName:"p"},"load balancer \u2192 target group(s) \u2192 compute instances"),"."),(0,r.kt)("p",null,"To determine if a load balancer is still in use or not, you have to know if there are no more backend instances, or if they are still connected but terminated (which is particular to AWS). This may seem easy, but in a multi-account structure\u2014for every account you would have to look for load balancers in every region, understand which ones have target groups, which target groups have instances, and understand the state of each instance. If there is an instance still running, we can't delete the target group of the load balancer, because it might still be in use. Going through that decision loop for every load balancer is impossible without automation. Unless you want to spend your time clicking through the account structure of your AWS console."),(0,r.kt)("p",null,"Why would this matter? Load balancers are not that expensive. But companies usually have thousands of them\u2014it adds up, and there are quotas. The default is 50 ALBs and 100 ALB target groups per region. You can increase the quota by 10x or even 100x. But when you leak resources, it's easy to hit even a high limit like 5,000."),(0,r.kt)("p",null,'And so going through that decision loop to find unused ALBs without any automation is almost impossible. With graph traversal, we can write a query that finds unused load balancers, by determining if the target groups are empty, if the instances are not running anymore, or if they are connected but terminated. We define "unused" as "older than 7 days" ',(0,r.kt)("inlineCode",{parentName:"p"},"ctime < -7d"),' and "no backends attached."'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"is(aws_alb) and ctime < -7d with(empty, <-- is(aws_alb_target_group)\n  and target_type = instance and ctime < -7d with(empty, <-- is(aws_ec2_instance)\n  and instance_status != terminated)) <-[0:1]- is(aws_alb_target_group) or is(aws_alb)\n")),(0,r.kt)("p",null,"That's it! This query will generate a list of all orphaned load balancers that are candidates for cleanup. To actually clean up, we only need to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"| clean")," command at the end of the query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"is(aws_alb) and ctime < -7d with(empty, <-- is(aws_alb_target_group)\n  and target_type = instance and ctime < -7d with(empty, <-- is(aws_ec2_instance)\n  and instance_status != terminated)) <-[0:1]- is(aws_alb_target_group) or is(aws_alb) | clean\n")),(0,r.kt)("h2",{id:"metrics-from-hard-coded-to-query-based"},"Metrics: From Hard-Coded to Query-Based"),(0,r.kt)("p",null,"In the old version of Cloudkeeper, the metrics for each resource were hard-coded. At D2iQ, you would literally have to ask Lukas to write the code for a new metric. Obviously, that's not a great long-term solution. The new query language can now do selection and aggregation, and a user can write queries that generate custom metrics."),(0,r.kt)("p",null,"The benefit is that each audience (engineering, product, finance, etc. ) can create the exact metric they need. Let's pick an example to illustrate how to write a query that generates metrics."),(0,r.kt)("p",null,"Assume a CFO wants to know the cost of all AWS compute instances that are running, in nearn The query below calculates a total hourly on-demand cost estimate for all EC2 instances running in all AWS accounts, and aggregates the result by account, region and instance type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$> query is(aws_ec2_instance) and reported.instance_status = running |\n     merge_ancestors\n       account,region,instance_type |\n     aggregate\n       reported.account.name as account,\n       reported.region.name as region,\n       reported.instance_type.name as type :\n     sum(reported.instance_type.ondemand_cost) as instances_hourly_cost_estimate\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"instance_type")," is a resource in the Cloudkeeper graph. The node for the resource contains a field for the on-demand cost. Cloudkeeper fetches the data for that field from the AWS Pricing API during each collection run."),(0,r.kt)("p",null,"The query then generates a new metric ",(0,r.kt)("inlineCode",{parentName:"p"},"instances_hourly_cost_estimate"),"\u2014a total hourly cost estimate, broken down by account, region and instance type. It's a simple way to understand which AWS accounts and the teams responsible for the accounts drive compute cost. And the nice thing is that Finance doesn't have to bother engineering to get these metrics. They can just run the queries themselves in the Cloudkeeper CLI."),(0,r.kt)("p",null,"Writing queries may not be everyone's thing though. For those users, we also maintain several pre-configured metrics per resource in Cloudkeeper."),(0,r.kt)("p",null,"These pre-configured metrics are running as queries in ",(0,r.kt)("inlineCode",{parentName:"p"},"ckmetrics"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"ckmetrics")," connects to the core, runs the queries and recalculates the metrics automatically every time something has changed in the graph, e.g. after a collect or a cleanup. The results are cached in ",(0,r.kt)("inlineCode",{parentName:"p"},"ckmetrics")," and exported to Prometheus where they can be queried via PromQL. From there, you can send them to any visualization tool that understands the prometheus format, such as Grafana. Future versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"ckmetrics")," will allow a user to edit the pre-defined metrics as well as define their own."),(0,r.kt)("h2",{id:"command-line-interface-from-local-to-remote-execution"},"Command-Line Interface: From Local to Remote Execution"),(0,r.kt)("p",null,'The old CLI ran locally on a user\'s desktop. That implied that two different users would never look at the same version of a graph, because it was their own "local" version that Cloudkeeper had generated at a specific point in time.'),(0,r.kt)("p",null,"The new CLI executes commands remotely in the core. That means everyone now looks at the same version of a graph, which opens up new collaboration use cases."),(0,r.kt)("h2",{id:"workflows-from-hard-coded-to-event-based"},"Workflows: From Hard-Coded to Event-Based"),(0,r.kt)("p",null,"Currently we support three different workflows\u2014collect, clean up and metrics. Workflows consist of steps that perform a specific action."),(0,r.kt)("p",null,"In the old Cloudkeeper, the execution order of these workflows and their steps was hard-coded. Collect, cleanup, metrics. If you wanted to update your metrics\u2014you had to execute the whole thing again. You couldn't flexibly re-arrange the steps, skip a step, or call one on-demand."),(0,r.kt)("p",null,"Now, you can schedule and execute workflows in whatever scope and order you want. For example, once Cloudkeeper has collected and generated a new graph, you can look at the graph, write a query that flags certain resources for cleanup, and trigger the cleanup."),(0,r.kt)("p",null,"Workflows are an area that we're investing strongly in. If you have ideas, please let us know!"),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("p",null,"This current release makes it much easier to use Cloudkeeper to keep your cloud clean of drift. We made it easier and more intuitive for first-time users to start with Cloudkeeper. And we have a lot more ideas to keep going in that direction. For example, the next release will have a built-in library of useful query templates to give users a jump start. We're also working on authentication, authorization and encrypted communication."),(0,r.kt)("p",null,"Meanwhile, please let us know what's important for you as we continue building out Cloudkeeper. We also offer custom onboarding sessions on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/someengineering"},"Discord"),"!"))}p.isMDXComponent=!0}}]);