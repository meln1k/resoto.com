"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"sidebar":[{"type":"link","label":"Introduction","href":"/docs/","docId":"introduction"},{"type":"category","label":"Getting Started","items":[{"type":"link","label":"Installing with Docker","href":"/docs/getting-started/installing-with-docker","docId":"getting-started/installing-with-docker"},{"type":"link","label":"Installing with Kubernetes","href":"/docs/getting-started/installing-with-kubernetes","docId":"getting-started/installing-with-kubernetes"},{"type":"link","label":"Pruning Resources","href":"/docs/getting-started/pruning-resources","docId":"getting-started/pruning-resources"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Concepts","items":[{"type":"category","label":"Automation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Job","href":"/docs/concepts/automation/job","docId":"concepts/automation/job"},{"type":"link","label":"Workflow","href":"/docs/concepts/automation/workflow","docId":"concepts/automation/workflow"}],"href":"/docs/concepts/automation"},{"type":"category","label":"Components","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Resoto Core (resotocore)","href":"/docs/concepts/components/resotocore","docId":"concepts/components/resotocore"},{"type":"link","label":"Resoto Worker (resotoworker)","href":"/docs/concepts/components/resotoworker","docId":"concepts/components/resotoworker"},{"type":"link","label":"Resoto Library (resotolib)","href":"/docs/concepts/components/resotolib","docId":"concepts/components/resotolib"},{"type":"link","label":"Resoto Shell (resh)","href":"/docs/concepts/components/resh","docId":"concepts/components/resh"},{"type":"link","label":"Resoto Metrics (resotometrics)","href":"/docs/concepts/components/resotometrics","docId":"concepts/components/resotometrics"}],"href":"/docs/concepts/components/"},{"type":"category","label":"Graph","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Node","href":"/docs/concepts/graph/node","docId":"concepts/graph/node"},{"type":"link","label":"Edge","href":"/docs/concepts/graph/edge","docId":"concepts/graph/edge"}],"href":"/docs/concepts/graph/"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Reference","items":[{"type":"link","label":"Access Permissions","href":"/docs/reference/access-permissions","docId":"reference/access-permissions"},{"type":"category","label":"Command-Line Interface (CLI)","items":[{"type":"link","label":"Command-Line Interface (CLI)","href":"/docs/reference/cli/","docId":"reference/cli/README"},{"type":"link","label":"tag","href":"/docs/reference/cli/tag","docId":"reference/cli/tag"},{"type":"category","label":"query","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Basic Queries","href":"/docs/reference/cli/query/basic-queries","docId":"reference/cli/query/basic-queries"},{"type":"link","label":"with Clause","href":"/docs/reference/cli/query/with-clause","docId":"reference/cli/query/with-clause"},{"type":"link","label":"Subqueries","href":"/docs/reference/cli/query/subqueries","docId":"reference/cli/query/subqueries"},{"type":"link","label":"Aggregation","href":"/docs/reference/cli/query/aggregation","docId":"reference/cli/query/aggregation"},{"type":"link","label":"Examples","href":"/docs/reference/cli/query/examples","docId":"reference/cli/query/examples"}],"href":"/docs/reference/cli/query/"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Resoto Core API","href":"https://resoto.com/docs/reference/resotocore-api/"},{"type":"category","label":"Resources","items":[{"type":"link","label":"Data Models","href":"/docs/reference/resources/data-models","docId":"reference/resources/data-models"},{"type":"link","label":"Amazon Web Services (AWS)","href":"/docs/reference/resources/aws","docId":"reference/resources/aws"},{"type":"link","label":"Google Cloud Platform (GCP)","href":"/docs/reference/resources/gcp","docId":"reference/resources/gcp"}],"collapsible":true,"collapsed":true}],"collapsible":true,"collapsed":true},{"type":"category","label":"Contributing","items":[{"type":"link","label":"Documentation","href":"/docs/contributing/docs","docId":"contributing/docs"}],"collapsible":true,"collapsed":true}]},"docs":{"concepts/automation/job":{"id":"concepts/automation/job","title":"Job","description":"You can use resh to trigger commands in Resoto. Let\'s assume you want to find out all resources, that have not been labeled with an owner tag. The following query should do the trick:","sidebar":"sidebar"},"concepts/automation/workflow":{"id":"concepts/automation/workflow","title":"Workflow","description":"A workflow is a set of steps that implements a finite state machine, where every step performs a specific action.","sidebar":"sidebar"},"concepts/components/README":{"id":"concepts/components/README","title":"Components","description":"- Resoto Core (resotocore) is the platform maintaining the directed multigraph.","sidebar":"sidebar"},"concepts/components/resh":{"id":"concepts/components/resh","title":"Resoto Shell (`resh`)","description":"resh starts the Resoto shell. It is used to interact with resotocore.","sidebar":"sidebar"},"concepts/components/resotocore":{"id":"concepts/components/resotocore","title":"Resoto Core (`resotocore`)","description":"The Resoto graph platform resotocore is the persistence and query backend of Resoto. It maintains the graph of resources and provides APIs to update and access them.","sidebar":"sidebar"},"concepts/components/resotolib":{"id":"concepts/components/resotolib","title":"Resoto Library (`resotolib`)","description":"Any functionality that is required by more than one of our components exists in the shared resotolib library.","sidebar":"sidebar"},"concepts/components/resotometrics":{"id":"concepts/components/resotometrics","title":"Resoto Metrics (`resotometrics`)","description":"resotometrics takes resotocore graph data and runs aggregation functions on the data.","sidebar":"sidebar"},"concepts/components/resotoworker":{"id":"concepts/components/resotoworker","title":"Resoto Worker (`resotoworker`)","description":"resotoworker does all of the collection and cleanup work in Resoto. It is connected to resotocore over a websocket connection and waits for instructions. By default, it subscribes to the collect and cleanup actions as well as tag tasks.","sidebar":"sidebar"},"concepts/graph/edge":{"id":"concepts/graph/edge","title":"Graph Edge","description":"Nodes in the graph are connected via edges. Edges in the graph are directed, starting from a node pointing to a node.","sidebar":"sidebar"},"concepts/graph/node":{"id":"concepts/graph/node","title":"Graph Node","description":"A graph node is a JSON document with a well-defined structure and the following top-level properties:","sidebar":"sidebar"},"concepts/graph/README":{"id":"concepts/graph/README","title":"Graph","description":"You can search your cloud infrastructure and find the resources you are looking for using Resoto\'s powerful query language.","sidebar":"sidebar"},"contributing/docs":{"id":"contributing/docs","title":"Contributing Documentation","description":"The Resoto website and documentation are built with Docusaurus, a static-site generator. The source code lives in the someengineering/resoto.com repository on GitHub.","sidebar":"sidebar"},"getting-started/installing-with-docker":{"id":"getting-started/installing-with-docker","title":"Installing with Docker","description":"Docker provides the ability to run an application in a loosely isolated environment called a \\"container.\\"","sidebar":"sidebar"},"getting-started/installing-with-kubernetes":{"id":"getting-started/installing-with-kubernetes","title":"Installing with Kubernetes","description":"Prerequisites","sidebar":"sidebar"},"getting-started/pruning-resources":{"id":"getting-started/pruning-resources","title":"Pruning Resources","description":"Please act with caution when selecting and filtering resources for cleanup.","sidebar":"sidebar"},"introduction":{"id":"introduction","title":"Documentation","description":"Welcome to the Resoto documentation!","sidebar":"sidebar"},"reference/access-permissions":{"id":"reference/access-permissions","title":"Access Permissions","description":"To use Resoto with all it\'s features\u2014including cleanup\u2014it requires wide permissions. It needs to collect all the resources, do tag validations and updates as well as deleting resources.","sidebar":"sidebar"},"reference/cli/query/aggregation":{"id":"reference/cli/query/aggregation","title":"Aggregation","description":"There are several situations where specific data is not too relevant but needs lifting to a higher level. That is where aggregation comes into play.","sidebar":"sidebar"},"reference/cli/query/basic-queries":{"id":"reference/cli/query/basic-queries","title":"Basic Queries","description":"Selecting Nodes by ID","sidebar":"sidebar"},"reference/cli/query/examples":{"id":"reference/cli/query/examples","title":"Examples","description":"The following are some common queries for Resoto, organized by kind.","sidebar":"sidebar"},"reference/cli/query/README":{"id":"reference/cli/query/README","title":"query","description":"The query command allows you to define a search query to filter available nodes.","sidebar":"sidebar"},"reference/cli/query/subqueries":{"id":"reference/cli/query/subqueries","title":"Subqueries","description":"While it is possible to query and retrieve a filtered part of the graph, it is sometimes helpful to retrieve structural graph data as part of the node.","sidebar":"sidebar"},"reference/cli/query/with-clause":{"id":"reference/cli/query/with-clause","title":"`with` Clause","description":"There are certain scenarios, where nodes need to be selected that have defined relationships and position in the graph without selecting the related nodes.","sidebar":"sidebar"},"reference/cli/README":{"id":"reference/cli/README","title":"Command-Line Interface (CLI)","description":"The resh CLI supports various commands that help you accessing the graph database.","sidebar":"sidebar"},"reference/cli/tag":{"id":"reference/cli/tag","title":"tag","description":"Tags are a useful to organize your cloud infrastructure and provide additional information to your resources.","sidebar":"sidebar"},"reference/resources/aws":{"id":"reference/resources/aws","title":"Amazon Web Services (AWS) Resources","description":"aws_account","sidebar":"sidebar"},"reference/resources/data-models":{"id":"reference/resources/data-models","title":"Data Models","description":"Resoto is able to collect data from different data sources that is maintained in a graph. It has a pluggable API to interface with different cloud providers.","sidebar":"sidebar"},"reference/resources/gcp":{"id":"reference/resources/gcp","title":"Google Cloud Platform (GCP) Resources","description":"gcp_autoscaler","sidebar":"sidebar"}}}')}}]);