"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[1496],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,k=m["".concat(c,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},188:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Installing with Docker"},c="Installing with Docker",s={unversionedId:"getting-started/installing-with-docker",id:"getting-started/installing-with-docker",title:"Installing with Docker",description:'Docker provides the ability to run an application in a loosely isolated environment called a "container."',source:"@site/docs/getting-started/installing-with-docker.md",sourceDirName:"getting-started",slug:"/getting-started/installing-with-docker",permalink:"/docs/getting-started/installing-with-docker",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/getting-started/installing-with-docker.md",tags:[],version:"current",lastUpdatedBy:"TheCatLady",lastUpdatedAt:1643003139,formattedLastUpdatedAt:"1/24/2022",frontMatter:{title:"Installing with Docker"},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Installing with Kubernetes",permalink:"/docs/getting-started/installing-with-kubernetes"}},d=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Installation",id:"installation",children:[{value:"docker run Command",id:"docker-run-command",children:[],level:3},{value:"Docker Compose",id:"docker-compose",children:[],level:3}],level:2},{value:"Resoto CLI",id:"resoto-cli",children:[],level:2},{value:"Resoto Web UI",id:"resoto-web-ui",children:[],level:2},{value:"Updating",id:"updating",children:[{value:"<code>docker run</code> Command",id:"docker-run-command-1",children:[],level:3},{value:"Docker Compose",id:"docker-compose-1",children:[],level:3}],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-with-docker"},"Installing with Docker"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docker.com"},"Docker"),' provides the ability to run an application in a loosely isolated environment called a "',(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/overview#containers"},"container"),'."'),(0,a.kt)("p",null,"Currently, all of the requirements and components of Resoto are packaged into a single Docker ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/overview#images"},"image"),"."),(0,a.kt)("p",null,"For more information on Docker, please see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com"},"official Docker documentation"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-started/#download-and-install-docker"},"Docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"},"AWS IAM access keys"))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"There are multiple ways to get the Resoto Docker image up and running."),(0,a.kt)("h3",{id:"docker-run-command"},(0,a.kt)("a",{parentName:"h3",href:"https://docs.docker.com/engine/reference/run"},(0,a.kt)("inlineCode",{parentName:"a"},"docker run"))," Command"),(0,a.kt)("p",null,"First, create a volume in which to persist data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker create volume resoto-data\n")),(0,a.kt)("p",null,"Then, start the container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  --name resoto \\\n  -e AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID \\\n  -e AWS_SECRET_ACCESS_KEY=YOUR_ACCESS_KEY \\\n  -e CKWORKER_COLLECTOR='AWS Example' \\\n  -p 8900:8900 \\\n  -v resoto-data:/data \\\n  --restart unless-stopped \\\n  ghcr.io/someengineering/resoto:2.0.0a12\n")),(0,a.kt)("p",null,"And just like that, you now have Resoto running in Docker!"),(0,a.kt)("h3",{id:"docker-compose"},(0,a.kt)("a",{parentName:"h3",href:"https://docs.docker.com/compose/reference"},"Docker Compose")),(0,a.kt)("p",null,"Add the following volume and service definitions to a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file"},(0,a.kt)("inlineCode",{parentName:"a"},"docker-compose.yml")," file"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},"---\nversion: '3'\n\nservices:\n  resoto:\n    image: ghcr.io/someengineering/resoto:2.0.0a12\n    container_name: resoto\n    environment:\n      AWS_ACCESS_KEY_ID: YOUR_ACCESS_KEY_ID\n      AWS_SECRET_ACCESS_KEY: YOUR_ACCESS_KEY\n      CKWORKER_COLLECTOR: AWS Example\n    ports:\n      - 8900:8900\n    volumes:\n      - resoto-data:/data\n    restart: unless-stopped\n")),(0,a.kt)("p",null,"Then, run the following command from the directory containing the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,a.kt)("h2",{id:"resoto-cli"},"Resoto CLI"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/components/resh"},(0,a.kt)("inlineCode",{parentName:"a"},"resh"))," is used to interact with ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/components/resotocore"},(0,a.kt)("inlineCode",{parentName:"a"},"resotocore")),"."),(0,a.kt)("p",null,"To access the Resoto shell interface, simply execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it resoto resh\n")),(0,a.kt)("h2",{id:"resoto-web-ui"},"Resoto Web UI"),(0,a.kt)("p",null,"To access the Resoto web interface, navigate to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8900/ui"},"http://localhost:8900/ui")," in your preferred web browser."),(0,a.kt)("h2",{id:"updating"},"Updating"),(0,a.kt)("p",null,"When a new version of Resoto is available, the update process is dependent on how Resoto was installed initially."),(0,a.kt)("h3",{id:"docker-run-command-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"docker run")," Command"),(0,a.kt)("p",null,"First, stop and remove the existing container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop resoto\ndocker rm resoto\n")),(0,a.kt)("p",null,"Next, recreate the container with the same parameters used previously, but updating the image tag (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"2.0.0a12"),") to reflect the desired Resoto release."),(0,a.kt)("h3",{id:"docker-compose-1"},"Docker Compose"),(0,a.kt)("p",null,"Simply edit the image tag (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"2.0.0a12"),") specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file to reflect the desired Resoto release."),(0,a.kt)("p",null,"Then, run the following command from the directory containing the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")))}m.isMDXComponent=!0}}]);