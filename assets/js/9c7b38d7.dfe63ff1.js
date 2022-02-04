"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[1496],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26740:function(e,t,n){n.d(t,{p:function(){return s},C:function(){return l}});var r=n(15861),o=n(87757),a=n.n(o),i=n(91522),s=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new i.v).request("/repos/"+t+"/"+n);case 3:return r=e.sent,e.abrupt("return",r.data.stargazers_count);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new i.v).request("/repos/"+t+"/"+n+"/releases?per_page=1");case 3:return r=e.sent,e.abrupt("return",r.data[0].name);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()},81523:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return f}});var r=n(87462),o=n(63366),a=n(67294),i=n(3905),s=n(15861),l=n(87757),c=n.n(l),p=n(26740);function u(){var e=(0,a.useState)(null),t=e[0],n=e[1];return(0,a.useEffect)((function(){var e=function(){var e=(0,s.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,(0,p.C)("someengineering","resoto");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),a.createElement("code",null,null!=t?t:"latest")}var d=["components"],m={title:"Installing with Docker"},k="Installing with Docker",h={unversionedId:"getting-started/installing-with-docker",id:"getting-started/installing-with-docker",title:"Installing with Docker",description:'Docker provides the ability to run an application in a loosely isolated environment called a "container."',source:"@site/docs/getting-started/installing-with-docker.md",sourceDirName:"getting-started",slug:"/getting-started/installing-with-docker",permalink:"/docs/getting-started/installing-with-docker",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/getting-started/installing-with-docker.md",tags:[],version:"current",lastUpdatedAt:1643943445,formattedLastUpdatedAt:"2/4/2022",frontMatter:{title:"Installing with Docker"},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Installing with Kubernetes",permalink:"/docs/getting-started/installing-with-kubernetes"}},f=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Installation",id:"installation",children:[{value:"docker run Command",id:"docker-run-install",children:[],level:3},{value:"Docker Compose",id:"docker-compose-install",children:[],level:3}],level:2},{value:"Resoto CLI",id:"resoto-cli",children:[],level:2},{value:"Resoto Web UI",id:"resoto-web-ui",children:[],level:2},{value:"Updating",id:"updating",children:[{value:"docker run Command",id:"docker-run-update",children:[],level:3},{value:"Docker Compose",id:"docker-compose-update",children:[],level:3}],level:2}],g={toc:f};function v(e){var t=e.components,n=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-with-docker"},"Installing with Docker"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docker.com"},"Docker"),' provides the ability to run an application in a loosely isolated environment called a "',(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/overview#containers"},"container"),'."'),(0,i.kt)("p",null,"Currently, all of the requirements and components of Resoto are packaged into a single Docker ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/overview#images"},"image"),"."),(0,i.kt)("p",null,"For more information on Docker, please see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com"},"official Docker documentation"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-started#download-and-install-docker"},"Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"},"AWS IAM access keys"))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"There are multiple ways to get the Resoto Docker image up and running."),(0,i.kt)("h3",{id:"docker-run-install"},(0,i.kt)("a",{parentName:"h3",href:"https://docs.docker.com/engine/reference/run"},(0,i.kt)("inlineCode",{parentName:"a"},"docker run"))," Command"),(0,i.kt)("p",null,"First, create a volume in which to persist data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume create resoto-data\n")),(0,i.kt)("p",null,"Then, start the container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  --name resoto \\\n  -e AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID \\\n  -e AWS_SECRET_ACCESS_KEY=YOUR_ACCESS_KEY \\\n  -e CKWORKER_COLLECTOR='AWS Example' \\\n  -p 8900:8900 \\\n  -v resoto-data:/data \\\n  --restart unless-stopped \\\n  somecr.io/someengineering/resoto:{{latestRelease}}\n")),(0,i.kt)("p",null,"And just like that, you now have Resoto running in Docker!"),(0,i.kt)("h3",{id:"docker-compose-install"},(0,i.kt)("a",{parentName:"h3",href:"https://docs.docker.com/compose/reference"},"Docker Compose")),(0,i.kt)("p",null,"Add the following volume and service definitions to a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file"},(0,i.kt)("inlineCode",{parentName:"a"},"docker-compose.yml")," file"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},"---\nversion: '3'\n\nservices:\n  resoto:\n    image: somecr.io/someengineering/resoto:{{latestRelease}}\n    container_name: resoto\n    environment:\n      AWS_ACCESS_KEY_ID: YOUR_ACCESS_KEY_ID\n      AWS_SECRET_ACCESS_KEY: YOUR_ACCESS_KEY\n      CKWORKER_COLLECTOR: AWS Example\n    ports:\n      - 8900:8900\n    volumes:\n      - resoto-data:/data\n    restart: unless-stopped\nvolumes:\n  resoto-data:\n")),(0,i.kt)("p",null,"Then, run the following command from the directory containing the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,i.kt)("h2",{id:"resoto-cli"},"Resoto CLI"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/components/shell"},(0,i.kt)("inlineCode",{parentName:"a"},"resh"))," command is used to interact with ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/components/core"},(0,i.kt)("inlineCode",{parentName:"a"},"resotocore")),"."),(0,i.kt)("p",null,"To access the Resoto shell interface inside the Docker container, simply execute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it resoto resh\n")),(0,i.kt)("h2",{id:"resoto-web-ui"},"Resoto Web UI"),(0,i.kt)("p",null,"To access the Resoto web interface, navigate to ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8900/ui"},"http://localhost:8900/ui")," in your preferred web browser."),(0,i.kt)("h2",{id:"updating"},"Updating"),(0,i.kt)("p",null,"When a new version of Resoto is available, the update process is dependent on how Resoto was installed initially."),(0,i.kt)("h3",{id:"docker-run-update"},(0,i.kt)("a",{parentName:"h3",href:"https://docs.docker.com/engine/reference/run"},(0,i.kt)("inlineCode",{parentName:"a"},"docker run"))," Command"),(0,i.kt)("p",null,"First, stop and remove the existing container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop resoto\ndocker rm resoto\n")),(0,i.kt)("p",null,"Next, recreate the container with the same parameters used previously, but updating the image tag (e.g., ",(0,i.kt)(u,{mdxType:"LatestRelease"}),") to reflect the desired Resoto release."),(0,i.kt)("h3",{id:"docker-compose-update"},(0,i.kt)("a",{parentName:"h3",href:"https://docs.docker.com/compose/reference"},"Docker Compose")),(0,i.kt)("p",null,"Simply edit the image tag (e.g., ",(0,i.kt)(u,{mdxType:"LatestRelease"}),") specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file to reflect the desired Resoto release."),(0,i.kt)("p",null,"Then, run the following command from the directory containing the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")))}v.isMDXComponent=!0}}]);