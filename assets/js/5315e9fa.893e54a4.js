"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[210],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8572:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={},i="Installing with Kubernetes",c={unversionedId:"getting-started/installing-with-kubernetes",id:"getting-started/installing-with-kubernetes",title:"Installing with Kubernetes",description:"Prerequisites",source:"@site/docs/getting-started/installing-with-kubernetes.md",sourceDirName:"getting-started",slug:"/getting-started/installing-with-kubernetes",permalink:"/docs/getting-started/installing-with-kubernetes",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/getting-started/installing-with-kubernetes.md",tags:[],version:"current",lastUpdatedBy:"TheCatLady",lastUpdatedAt:1643233080,formattedLastUpdatedAt:"1/26/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Installing with Docker",permalink:"/docs/getting-started/installing-with-docker"},next:{title:"Pruning Resources",permalink:"/docs/getting-started/pruning-resources"}},u=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Installation",id:"installation",children:[{value:"Prepare ArangoDB Database",id:"prepare-arangodb-database",children:[],level:3},{value:"Create Helm Values File",id:"create-helm-values-file",children:[],level:3},{value:"Configure Cloud Credentials (optional)",id:"configure-cloud-credentials-optional",children:[],level:3},{value:"Install Helm Chart",id:"install-helm-chart",children:[],level:3}],level:2},{value:"Resoto CLI",id:"resoto-cli",children:[],level:2},{value:"Resoto Web UI",id:"resoto-web-ui",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-with-kubernetes"},"Installing with Kubernetes"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Helm (version 3 and above)"),(0,o.kt)("li",{parentName:"ul"},"A Kubernetes cluster (kind or minikube should work as well)"),(0,o.kt)("li",{parentName:"ul"},"AWS or GCP credentials with proper permissions.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"prepare-arangodb-database"},"Prepare ArangoDB Database"),(0,o.kt)("p",null,"If you don't have ArangoDB, you can use the operator to install it. See more info here: ",(0,o.kt)("a",{parentName:"p",href:"https://www.arangodb.com/docs/stable/tutorials-kubernetes.html"},"https://www.arangodb.com/docs/stable/tutorials-kubernetes.html")),(0,o.kt)("p",null,"You can use the following commands to install the DB, but do note that this is not a production-ready setup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'helm repo add arangodb https://arangodb.github.io/kube-arangodb\nhelm repo update\nhelm install kube-arangodb-crd arangodb/kube-arangodb-crd\nhelm install kube-arangodb arangodb/kube-arangodb\n\nkubectl apply -f - <<EOF\napiVersion: "database.arangodb.com/v1alpha"\nkind: "ArangoDeployment"\nmetadata:\nname: "single-server"\nspec:\nmode: Single\ntls:\ncaSecretName: None\nEOF\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"These instructuions were tested with version 1.2.4 of the operator."))),(0,o.kt)("p",null,"Wait until the the ArangoDB deployment is ready. You can check the conditions in the status to see that it is ready:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get arangodeployment single-server -o yaml\n")),(0,o.kt)("p",null,"Set up a database and password:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"RESOTOCORE_GRAPHDB_PASSWORD=$(head -c 1500 /dev/urandom | tr -dc 'a-zA-Z0-9' | cut -c -32)\nPOD=$(kubectl get pods --selector=arango_deployment=single-server -o jsonpath=\"{.items[0].metadata.name}\")\nkubectl exec -i ${POD} -- arangosh --console.history false --server.password \"\" <<EOF\n    const users = require('@arangodb/users');\n    users.save('resoto', '$RESOTOCORE_GRAPHDB_PASSWORD');\n    db._createDatabase('resoto');\n    users.grantDatabase('resoto', 'resoto', 'rw');\nEOF\n")),(0,o.kt)("p",null,"Create the secret with the credentials:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret generic resoto-graphdb-credentials --from-literal=password=$RESOTOCORE_GRAPHDB_PASSWORD\n")),(0,o.kt)("h3",{id:"create-helm-values-file"},"Create Helm Values File"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="resoto-values.yml"',title:'"resoto-values.yml"'},"resotocore:\n  graphdb:\n    server: http://single-server:8529\n    login: resoto\n    database: resoto\n    passwordSecret:\n      name: resoto-graphdb-credentials\n      key: password\n# add your stuff here:\nresotoworker:\n  extraArgs:\n    - --fork\n  collector: example\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto/blob/main/kubernetes/chart/values.yaml"},(0,o.kt)("inlineCode",{parentName:"a"},"kubernetes/chart/values.yaml"))," for a list of configurable values."),(0,o.kt)("h3",{id:"configure-cloud-credentials-optional"},"Configure Cloud Credentials (optional)"),(0,o.kt)("p",null,"You can use Helm values ",(0,o.kt)("inlineCode",{parentName:"p"},"resotoworker.extraArgs"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"resotoworker.extraEnv"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"resotoworker.volumes"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"resotoworker.volumeMounts")," to inject credentials and their configuration to ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/components/worker"},(0,o.kt)("inlineCode",{parentName:"a"},"resotoworker")),"."),(0,o.kt)("p",null,"For example, for AWS and GCP, you would do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n resoto create secret generic resoto-auth \\\n  --from-file=GOOGLE_APPLICATION_CREDENTIALS=<PATH TO SERVICE ACCOUNT JSON CREDS> \\\n  --from-literal=AWS_ACCESS_KEY_ID=<YOUR ACCESS KEY ID> \\\n  --from-literal=AWS_SECRET_ACCESS_KEY=<YOUR ACCESS KEY>\n")),(0,o.kt)("p",null,"You could then use these values for ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/components/worker"},(0,o.kt)("inlineCode",{parentName:"a"},"resotoworker")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"resotocore:\n  graphdb:\n    server: http://single-server:8529\n    login: resoto\n    passwordSecret:\n      name: resoto-graphdb-credentials\n      key: password\nresotoworker:\n  collector: aws gcp\n  volumeMounts:\n    - mountPath: /etc/tokens/\n      name: auth-secret\n  volumes:\n    - name: auth-secret\n      secret:\n        secretName: resoto-auth\n        items:\n          - key: GOOGLE_APPLICATION_CREDENTIALS\n            path: gcp-service-account.json\n  extraEnv:\n    - name: AWS_ACCESS_KEY_ID\n      valueFrom:\n        secretKeyRef:\n          name: resoto-auth\n          key: AWS_ACCESS_KEY_ID\n    - name: AWS_SECRET_ACCESS_KEY\n      valueFrom:\n        secretKeyRef:\n          name: resoto-auth\n          key: AWS_SECRET_ACCESS_KEY\n  extraArgs:\n    - --fork\n    - --gcp-service-account\n    - /etc/tokens/gcp-service-account.json\n    - '--aws-fork'\n    - '--gcp-fork'\n    - '--aws-account-pool-size'\n    - '4'\n    - '--gcp-project-pool-size'\n    - '4'\n")),(0,o.kt)("h3",{id:"install-helm-chart"},"Install Helm Chart"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto"},(0,o.kt)("inlineCode",{parentName:"a"},"someengineering/resoto"))," repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/someengineering/resoto\n")),(0,o.kt)("p",null,"Next, install Resoto using Helm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install resoto ./resoto/kubernetes/chart --set image.tag={{latestTag}} -f resoto-values.yaml\n")),(0,o.kt)("h2",{id:"resoto-cli"},"Resoto CLI"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/components/shell"},(0,o.kt)("inlineCode",{parentName:"a"},"resh"))," command is used to interact with ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/components/core"},(0,o.kt)("inlineCode",{parentName:"a"},"resotocore")),"."),(0,o.kt)("h2",{id:"resoto-web-ui"},"Resoto Web UI"),(0,o.kt)("p",null,"To access the Resoto web interface, navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8900/ui"},"http://localhost:8900/ui")," in your preferred web browser."))}d.isMDXComponent=!0}}]);