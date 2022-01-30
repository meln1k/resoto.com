"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[6211],{8607:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/01/18/v2.0.0a10","metadata":{"permalink":"/news/2022/01/18/v2.0.0a10","source":"@site/news/2022-01-18-v2.0.0a10.md","title":"v2.0.0a10","description":"This release is exciting since it is the first one featuring our new product name, _Resoto_.","date":"2022-01-18T00:00:00.000Z","formattedDate":"January 18, 2022","tags":[],"readingTime":4.335,"truncated":false,"authors":[],"frontMatter":{},"nextItem":{"title":"v2.0.0a9","permalink":"/news/2021/12/09/v2.0.0a9"}},"content":"This release is exciting since it is the first one featuring our new product name, **_Resoto_**.\\n\\n_Cloudkeeper_ is no more, along with all `ck` naming.\\n\\nThe components that make up Resoto are now called [Resoto Core (`resotocore`)](/docs/concepts/components/core), [Resoto Shell (`resotoshell`)](/docs/concepts/components/shell), [Resoto Worker (`resotoworker`)](/docs/concepts/components/worker), and [Resoto Metrics (`resotometrics`)](/docs/concepts/components/metrics).\\n\\n:::note\\n\\nThe Docker image name has also changed to `somecr.io/someengineering/resoto`.\\n\\n:::\\n\\nBesides the naming change, a lot of features have been implemented. Here is a summary of the most important ones:\\n\\n## Query and CLI Interpretation Relative to the Reported Section\\n\\nResoto has the concept of a property path. A deeply nested json object can be navigated by defining a path to it.\\n\\n:::tip Example\\n\\n`reported.name` means the `name` property inside the `reported` object.\\n\\n:::\\n\\nUntil now, we interpreted all paths from the object root. But while this might be the natural approach, we realized that most of the properties to deal with are in the reported section.\\n\\nTo make query and commands most effective, Resoto will now interpret any path relative to the reported section.\\n\\nA property path can be prefixed with a `/` to mark it as an absolute path. This allows accessing properties not in the reported section.\\n\\nThe described behavior is used in queries and all other commands you use on the command line.\\n\\n:::tip Example\\n\\nA volume (e.g. an [aws_ec2_volume](/docs/reference/data-models/aws#aws_ec2_volume)) has a `name` and `volume_size` property in the reported section, that can be accessed directly.\\n\\n```bash\\n$> query is(volume) and name=~pvc | list name, volume_size\\n```\\n\\nAn absolute path is now required to access properties not in the reported section. Assuming we want to query data in the metadata section, the path has to be prefixed with a `/`.\\n\\n```bash\\n$> query is(volume) and /metadata.cleaned==false | list /metadata.protected\\n```\\n\\n:::\\n\\nThis new way of path resolution allowed us to remove several CLI commands like `reported`, `desired` and `metadata`.\\n\\n## Ancestor merges are now happening automagically\\n\\nReferences to ancestors are available in their section `/ancestors`.\\n\\nAs with previous versions, id and name of cloud, account, region and zone are added and displayed automatically for every resource. It is now possible to use any other property besides id and name.\\n\\n:::tip Example\\n\\n```bash\\n$> query is(volume) and /ancestors.region.metadata.intent=test\\n```\\n\\n:::\\n\\n## More Powerful Formats\\n\\nThe `format` [CLI command](/docs/reference/cli) now understands some predefined formats, which can be enabled via command-line flags.\\n\\nThe following formats are available out of the box:\\n\\n- `--graphml` [graphml](http://graphml.graphdrawing.org) is a widely used format to export graph data.\\n- `--cytoscape` [cytoscape](https://js.cytoscape.org) vendor specific format.\\n- `--dot` export the data in [graphviz](https://graphviz.org) dot format.\\n- `--json` creates a JSON string for any node in the system put into a json array.\\n- `--ndjson` new line delimited JSON, so every node is a one line JSON document.\\n- `--text` creates a text representation of every node.\\n\\n:::tip Example\\n\\nHere, we export the whole graph including all edges to a file named `graph.json`:\\n\\n```bash\\n$> query --include-edges is(graph_root) -[0:]->  | format --json | write graph.json\\n```\\n\\nAnd here, we export a query result in dot format.\\n\\n```bash\\n$> query --include-edges is(aws_ec2_instance) <-[0:1]- | format --dot | write edges.dot\\n```\\n\\n:::\\n\\nIf you have [Graphviz](https://graphviz.org) installed, you can turn this file into a diagram using this command:\\n\\n```bash\\n$> sfdp -Tpng -o edges.png edges.dot\\n```\\n\\n## Improved Jobs Command\\n\\nThere is now a single [CLI command](/docs/reference/cli) to create, manipulate and test jobs: `jobs`.\\n\\nPlease see the `jobs` command help page (`help jobs`) for more details.\\n\\nThe `add_job`, `delete_job`, and `tasks` commands have been removed as a part of this change.\\n\\n## `http` Command\\n\\nWe introduced the `http` and `https` [CLI commands](/docs/reference/cli), which allow you to make REST calls to other systems.\\n\\n:::tip Example\\n\\nAssume we want to call an internal gatekeeper in case we find compute instances that are tagged with `load-test` and are older than 24 hours.\\n\\n```bash\\n$> query is(instance) and tags.intent=\\"load-test\\" and age>24h | chunk 100 | format --json |  http gatekeeper/handle_expired\\n```\\n\\nThe results of this query are chunked, every chunk of 100 elements is JSON-formatted and sent to the gatekeeper.\\n\\nIt would be possible to make this a recurrent task by creating a job.\\n\\n:::\\n\\n## Query Cost Analysis\\n\\nWriting queries can be a complex task.\\n\\nTo give some guidance related to query runtime performance, we introduced the option to analyze a query.\\n\\nThe [`query` command](/docs/reference/cli/query) now has an `--explain` flag, that gives insights into the query performance.\\n\\n:::tip Example\\n\\nWe use the previous query as example to show a possible result. (Please note that the runtime characteristics are highly dependent on the underlying graph data.)\\n\\n```bash\\n$> query --explain is(instance) and tags.intent=\\"load-test\\" and age>24h\\n// highlight-start\\navailable_nr_items: 142670\\nestimated_cost: 4891\\nestimated_nr_items: 4641\\nfull_collection_scan: false\\nrating: simple\\n// highlight-end\\n```\\n\\n:::\\n\\nThe final rating is the most interesting one, where Resoto defines a query as simple, complex or bad. A query that is considered simple should be fast and resource friendly.\\n\\n## Other improvements\\n\\n- Resoto is now using [Codecov](https://app.codecov.io/gh/someengineering/resoto) for coverage reports.\\n- This release ships with APIs and functionality to enable a TLS-secured setup. This is still work in progress so all communication is still plain HTTP. We will have a complete secure setup when the final 2.0 release is shipped."},{"id":"/2021/12/09/v2.0.0a9","metadata":{"permalink":"/news/2021/12/09/v2.0.0a9","source":"@site/news/2021-12-09-v2.0.0a9.md","title":"v2.0.0a9","description":"We are very happy to announce that we are now another small step closer to a stable 2.0 release!","date":"2021-12-09T00:00:00.000Z","formattedDate":"December 9, 2021","tags":[],"readingTime":2.075,"truncated":false,"authors":[],"frontMatter":{},"prevItem":{"title":"v2.0.0a10","permalink":"/news/2022/01/18/v2.0.0a10"},"nextItem":{"title":"v2.0.0a3","permalink":"/news/2021/10/04/v2.0.0a3"}},"content":"We are very happy to announce that we are now another small step closer to a stable 2.0 release!\\n\\nHere are some highlights from this release:\\n\\n## The UI is now shipped as part of every release\\n\\nThis is the first version that ships with our gorgeous UI.\\n\\nPlease try it out by downloading the latest version and navigating to `https://path.to.cloudkeeper:8900/ui` in your browser.\\n\\nThe main graph view has been upgraded from 2D to 3D, and shows Treemap charts ([#457](https://github.com/someengineering/resoto/pull/457))!\\n\\n## We now have a helm chart\\n\\nThanks to a contribution from [@yuval-k](https://github.com/yuval-k), we now have a Helm chart ([#428](https://github.com/someengineering/resoto/pull/428))!\\n\\nWith this chart, it is easier to deploy Cloudkeeper in Kubernetes.\\n\\nTry it out yourself by following the [Kubernetes setup tutorial in our documentation](https://docs.some.engineering/getting_started/setup_kubernetes.html).\\n\\n## All cleanup plugins are now available\\n\\nWe needed to migrate all cleanup plugins to the 2.0 infrastructure.\\n\\nWith this release, all cleanup plugins have been ported ([#422](https://github.com/someengineering/resoto/pull/422)) and ([#439](https://github.com/someengineering/resoto/pull/439)).\\n\\n## Analytics sensors were added\\n\\nWe believe that it is important to know how Cloudkeeper is used, and thus how we can improve.\\n\\nAs such, we have added analytics to our codebase.\\n\\nThe data that is anonymized and purely focused on providing product insights.\\n\\nIt is possible to opt out of sending this data by specifying the command line flag `--analytics-opt-out`.\\n\\n## Query language improvements\\n\\nThere are several significant improvements in this area.\\n\\nIt is now possible to define sub-queries ([#412](https://github.com/someengineering/resoto/pull/412)) which allow merging nodes with other nodes in the graph.\\n\\nAdditionally, the first step toward a full-featured query template engine has been implemented in [#431](https://github.com/someengineering/resoto/pull/431).\\n\\nThis feature allows defining queries as a template and reusing those templates in other queries, greatly simplifying more complex queries.\\n\\n## Other improvements\\n\\n- `[ckcore]` In the CLI the default output style is now the list style. Every node is printed as one line. To show all available data as yaml node, we introduced the dump command. ([#425](https://github.com/someengineering/resoto/pull/425))\\n- `[plugin/gcp]` only collect referenced type and service resources, so the graph only contains used resources. ([#430](https://github.com/someengineering/resoto/pull/430))\\n- `[ckcore]` Add support for array modifiers `all, any, none`. Example: `reported.array all > 3`, which selects all nodes where the property `reported.array` points to an array of integers and all integers in that array are bigger than 3. ([#427](https://github.com/someengineering/resoto/pull/427))\\n- `[ckcore]` arangodb 3.8.2 or later is now the minimum required version to run resoto. ([#445](https://github.com/someengineering/resoto/pull/445))\\n- `[ckcore]` `tag` command can be backgrounded. ([#437](https://github.com/someengineering/resoto/pull/437))\\n- `[ckcore]` `is()` now also supports multiple kinds, with an or meaning. Example `is(volume, instance) ([#432](https://github.com/someengineering/resoto/pull/432))"},{"id":"/2021/10/04/v2.0.0a3","metadata":{"permalink":"/news/2021/10/04/v2.0.0a3","source":"@site/news/2021-10-04-v2.0.0a3.md","title":"v2.0.0a3","description":"July 1st, 2021 was a big day for Cloudkeeper. We started a new company to focus 100% on building out Cloudkeeper. The new company\'s name is \\"Some Engineering Inc.\\", and going forward we are the maintainers of the open-source project.","date":"2021-10-04T00:00:00.000Z","formattedDate":"October 4, 2021","tags":[],"readingTime":11.945,"truncated":false,"authors":[],"frontMatter":{},"prevItem":{"title":"v2.0.0a9","permalink":"/news/2021/12/09/v2.0.0a9"}},"content":"July 1st, 2021 was a big day for Cloudkeeper. We started a new company to focus 100% on building out Cloudkeeper. The new company\'s name is \\"Some Engineering Inc.\\", and going forward we are the maintainers of the open-source project.\\n\\nCloudkeeper started as an internal project in late 2019 at D2iQ, the Enterprise Kubernetes Platform, to solve the problem of \\"better housekeeping\\" for D2iQ\'s cloud accounts. Find leaky resources, manage quota limits, detect drift, clean up and reduce cost. It\'s the stuff no engineer wants to deal with. Our co-founder Lukas was a Site Reliability Engineer at D2iQ, and he was in charge of the cleanup project. He needed a tool to give him the big picture of all cloud resources running. And then use that inventory to identify and clean up the resources not in use anymore.\\n\\nFast forward to today, and Cloudkeeper has been in production at D2iQ for almost two years. It has grown \\"organically\'\' to its current functionality. The SRE team at D2iQ knows all the ins and out of the project. But for somebody new to the project, the bar to start was quite high.\\n\\nFor the past two months, we\'ve been busy changing that. And the result is release 2.0.0a3. With this new release, we took out the friction to get Cloudkeeper running in a cloud account. At the same time, we also added a lot of new functionality that makes Cloudkeeper more useful.\\n\\nWe also wrote a lot of new documentation to make it easier for a new user to start with Cloudkeeper. It\'s far from done yet, and we\'re adding new sections every day.\\n\\nBut let\'s dive into the updates!\\n\\n## Architecture: From Monolith to Distributed System\\n\\nWe rebuilt Cloudkeeper from the ground up to make it extensible and scalable. The first version of Cloudkeeper was monolithic with a single binary and ran in-memory locally on a laptop. We broke down the single binary and now provide four different binaries:\\n\\n1. `ckcore` maintains cloud-agnostic data in a graph\\n2. `ckworker` executes infrastructure-specific plug-ins\\n3. `cksh` starts the Cloudkeeper shell\\n4. `ckmetrics` calculates metrics in Prometheus format\\n\\nThe benefit of this approach is that it scales. The length of a full Cloudkeeper run is subject to the number of accounts in a cloud. If you have hundreds or even thousands of accounts\u2014it just takes longer to collect all resources. With this new architecture, you can now add more `ckworker` for faster processing.\\n\\nThis distributed architecture is also more flexible. A clear and simple API helps deal with cloud-specific data. Right now we support AWS, but eventually, we will also build support for GCP, Azure, Alicloud, etc. Different workers give you the freedom of choice to allocate workers, with different configurations. For example, you can have different workers for different clouds, and split the workloads that way. Or, you assign a worker for each individual login. In other words, you can run workers in whatever combination, to reflect e.g. your multi-cloud, geo, account or login structure of your cloud.\\n\\n### Components\\n\\nA bit more detail on the four components of the architecture.\\n\\n- `ckcore`, a.k.a. \\"the core,\\" maintains the graph. Data collection happens via `ckworker`. The workers push data into `ckcore`, after the core has told the workers to start collecting data. In the graph, nodes are individual resources, edges are logical dependencies. Cloudkeeper stores a resource\'s attributes in the node. These attributes are the basis for the dependencies that Cloudkeeper creates. We built `ckcore` with a scheduler and a message bus. The message bus has topics and queues. The scheduler runs internally in the core, by default the collect event gets triggered once per hour. A user can however define their own schedule by using the Cloudkeeper shell `cksh`.\\n- `ckworker` does all the collection and cleanup work in Cloudkeeper. It waits for instructions from `ckcore` over a WebSocket connection. By default `ckworker` subscribes to collect, clean up and tag tasks.\\n- `cksh` is our command-line interface, aka \\"the shell.\\" The CLI allows you to execute a variety of commands (see query language) to explore the graph, find resources of interest, mark them for cleanup, fix their tagging, aggregate over their metadata to create metrics and format the output for use in a 3rd party script or system.\\n- `ckmetrics` takes graph data from `ckcore` and runs aggregation functions on it. The aggregated metrics are then exposed in a Prometheus-compatible format for consumption in other services. For example, D2iQ uses Grafana dashboards to visualize infrastructure metrics for Engineering, Finance and the CEO.\\n\\n## Graph Storage: From In-Memory to On-Disk Persistence\\n\\nOne of the biggest asks by early users has been data persistence. With the new version of Cloudkeeper, we migrated from a locally maintained in-memory graph to a backend where we now persist the graph after each collect run. Under the hood, we use ArangoDB for that.\\n\\nData persistence has three major advantages.\\n\\n- It is the foundation to create a history and different versions of the graph. In the past, with the in-memory only version, a restart would make Cloudkeeper lose all history. Right now Cloudkeeper persists the latest collected snapshot, and we have history on our roadmap.\\n- By persisting the graph we can also provide an audit trail of all changes. Cloudkeeper attaches the changelog to the node that represents the resource. In the previous version, you lost the changelog associated with each node once a new collect run started. Once we keep a history of snapshots, we can also provide a history of changes. Particularly users in the financial services industry have asked for that capability.\\n- The size of the data set Cloudkeeper collects and stores is not limited anymore by available memory. It\'s essentially unlimited now by adding more storage at the database layer. This means Cloudkeeper can work with the largest cloud and multi-cloud infrastructure(s).\\n\\nData persistence also means better collaboration, because two people can now look at the same version of the graph. Previously, their local versions of the graph would be different from each other, simply because the information was collected at different points in time.\\n\\nWe also switched to incremental updates. Every time a collector runs, it collects all resources in your entire cloud and sends the information to the core. The old version would push the entire new graph, which is fine for an in-memory store. But now with data persistence and disk, we wanted to optimize for fewer writes. In this new version, the core compares what a new collect run delivered with the current state of the graph, and only stores the delta between the two.\\n\\n## Query Language: From Constrained to Flexible\\n\\nIn the previous version of Cloudkeeper, plug-ins delivered much of the rich functionality. The issue with that approach is that for each new use case, you need to create a new plug-in. Plug-ins are useful, but they require writing code and deploying the change. It also means the number of plug-ins keeps going up as you add more use cases, and it gets confusing pretty fast.\\n\\nInstead, we evolved the query language to include more commands and richer query syntax. The benefit for the users is that you don\'t have to write and maintain yet another plug-in\u2014you just write a single query.\\n\\nA really nice new functionality of the query language is graph traversal over multiple nodes. In the old version of Cloudkeeper, you could only match and filter by attributes for an individual resource. Now, with graph traversal, you can also filter and match based on the state of all predecessor and successor nodes. This is a super powerful capability to navigate the graph, express complex conditions across multiple resources in a single query, and take action on resources that match those conditions.\\n\\n### Example\\n\\nLet\'s illustrate this with a specific use case\u2014cleaning up unused application load balancers (\\"ALB\\") in AWS. Load balancers distribute incoming application traffic across multiple targets, such as EC2 instances, which are attached to multiple target groups. In short, _load balancer \u2192 target group(s) \u2192 compute instances_.\\n\\nTo determine if a load balancer is still in use or not, you have to know if there are no more backend instances, or if they are still connected but terminated (which is particular to AWS). This may seem easy, but in a multi-account structure\u2014for every account you would have to look for load balancers in every region, understand which ones have target groups, which target groups have instances, and understand the state of each instance. If there is an instance still running, we can\'t delete the target group of the load balancer, because it might still be in use. Going through that decision loop for every load balancer is impossible without automation. Unless you want to spend your time clicking through the account structure of your AWS console.\\n\\nWhy would this matter? Load balancers are not that expensive. But companies usually have thousands of them\u2014it adds up, and there are quotas. The default is 50 ALBs and 100 ALB target groups per region. You can increase the quota by 10x or even 100x. But when you leak resources, it\'s easy to hit even a high limit like 5,000.\\n\\nAnd so going through that decision loop to find unused ALBs without any automation is almost impossible. With graph traversal, we can write a query that finds unused load balancers, by determining if the target groups are empty, if the instances are not running anymore, or if they are connected but terminated. We define \\"unused\\" as \\"older than 7 days\\" `ctime < -7d` and \\"no backends attached.\\"\\n\\n```bash\\nis(aws_alb) and ctime < -7d with(empty, <-- is(aws_alb_target_group)\\n  and target_type = instance and ctime < -7d with(empty, <-- is(aws_ec2_instance)\\n  and instance_status != terminated)) <-[0:1]- is(aws_alb_target_group) or is(aws_alb)\\n```\\n\\nThat\'s it! This query will generate a list of all orphaned load balancers that are candidates for clean-up. To actually clean up, we only need to add a `| clean` command at the end of the query.\\n\\n```bash\\nis(aws_alb) and ctime < -7d with(empty, <-- is(aws_alb_target_group)\\n  and target_type = instance and ctime < -7d with(empty, <-- is(aws_ec2_instance)\\n  and instance_status != terminated)) <-[0:1]- is(aws_alb_target_group) or is(aws_alb) | clean\\n```\\n\\n## Metrics: From Hard-Coded to Query-Based\\n\\nIn the old version of Cloudkeeper, the metrics for each resource were hard-coded. At D2iQ, you would literally have to ask Lukas to write the code for a new metric. Obviously, that\'s not a great long-term solution. The new query language can now do selection and aggregation, and a user can write queries that generate custom metrics.\\n\\nThe benefit is that each audience (engineering, product, finance, etc. ) can create the exact metric they need. Let\'s pick an example to illustrate how to write a query that generates metrics.\\n\\nAssume a CFO wants to know the cost of all AWS compute instances that are running, in nearn The query below calculates a total hourly on-demand cost estimate for all EC2 instances running in all AWS accounts, and aggregates the result by account, region and instance type.\\n\\n```bash\\n$> query is(aws_ec2_instance) and reported.instance_status = running |\\n     merge_ancestors\\n       account,region,instance_type |\\n     aggregate\\n       reported.account.name as account,\\n       reported.region.name as region,\\n       reported.instance_type.name as type :\\n     sum(reported.instance_type.ondemand_cost) as instances_hourly_cost_estimate\\n```\\n\\n`instance_type` is a resource in the Cloudkeeper graph. The node for the resource contains a field for the on-demand cost. Cloudkeeper fetches the data for that field from the AWS Pricing API during each collection run.\\n\\nThe query then generates a new metric `instances_hourly_cost_estimate`\u2014a total hourly cost estimate, broken down by account, region and instance type. It\'s a simple way to understand which AWS accounts and the teams responsible for the accounts drive compute cost. And the nice thing is that Finance doesn\'t have to bother engineering to get these metrics. They can just run the queries themselves in the Cloudkeeper CLI.\\n\\nWriting queries may not be everyone\'s thing though. For those users, we also maintain several pre-configured metrics per resource in Cloudkeeper.\\n\\nThese pre-configured metrics are running as queries in `ckmetrics`. `ckmetrics` connects to the core, runs the queries and recalculates the metrics automatically every time something has changed in the graph, e.g. after a collect or a clean-up. The results are cached in `ckmetrics` and exported to Prometheus where they can be queried via PromQL. From there, you can send them to any visualization tool that understands the prometheus format, such as Grafana. Future versions of `ckmetrics` will allow a user to edit the pre-defined metrics as well as define their own.\\n\\n## Command-Line Interface: From Local to Remote Execution\\n\\nThe old CLI ran locally on a user\'s desktop. That implied that two different users would never look at the same version of a graph, because it was their own \\"local\\" version that Cloudkeeper had generated at a specific point in time.\\n\\nThe new CLI executes commands remotely in the core. That means everyone now looks at the same version of a graph, which opens up new collaboration use cases.\\n\\n## Workflows: From Hard-Coded to Event-Based\\n\\nCurrently we support three different workflows\u2014collect, clean up and metrics. Workflows consist of steps that perform a specific action.\\n\\nIn the old Cloudkeeper, the execution order of these workflows and their steps was hard-coded. Collect, clean-up, metrics. If you wanted to update your metrics\u2014you had to execute the whole thing again. You couldn\'t flexibly re-arrange the steps, skip a step, or call one on-demand.\\n\\nNow, you can schedule and execute workflows in whatever scope and order you want. For example, once Cloudkeeper has collected and generated a new graph, you can look at the graph, write a query that flags certain resources for clean-up, and trigger the clean-up.\\n\\nWorkflows are an area that we\'re investing strongly in. If you have ideas, please let us know!\\n\\n## What\'s Next?\\n\\nThis current release makes it much easier to use Cloudkeeper to keep your cloud clean of drift. We made it easier and more intuitive for first-time users to start with Cloudkeeper. And we have a lot more ideas to keep going in that direction. For example, the next release will have a built-in library of useful query templates to give users a jump start. We\'re also working on authentication, authorization and encrypted communication.\\n\\nMeanwhile, please let us know what\'s important for you as we continue building out Cloudkeeper. We also offer custom onboarding sessions on [Discord](https://discord.gg/someengineering)!"}]}')}}]);