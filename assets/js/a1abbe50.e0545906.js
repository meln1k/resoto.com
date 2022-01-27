"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[722],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3751:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return v}});var r=n(7462),a=n(3366),o=n(7294),i=n(3905),l=n(2389),s=n(9548),u=n(6010),p="tabItem_LplD";function c(e){var t,n,a,i=e.lazy,l=e.block,c=e.defaultValue,m=e.values,d=e.groupId,h=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,s.lx)(b,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(t=null!=c?c:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,o.useState)(v),T=w[0],C=w[1],O=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=y[d];null!=E&&E!==T&&b.some((function(e){return e.value===E}))&&C(E)}var D=function(e){var t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==T&&(x(t),C(r),null!=d&&N(d,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},h)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:D,onClick:D},a,{className:(0,u.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,l.Z)();return o.createElement(c,(0,r.Z)({key:String(t)},e))}var d=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},h=["components"],g={sidebar_label:"Components"},b=void 0,f={unversionedId:"contributing/components",id:"contributing/components",title:"components",description:"The source code for Resoto lives in the someengineering/resoto repository on GitHub.",source:"@site/docs/contributing/components.md",sourceDirName:"contributing",slug:"/contributing/components",permalink:"/docs/contributing/components",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/contributing/components.md",tags:[],version:"current",lastUpdatedBy:"TheCatLady",lastUpdatedAt:1643233080,formattedLastUpdatedAt:"1/26/2022",frontMatter:{sidebar_label:"Components"},sidebar:"sidebar",previous:{title:"Contributing",permalink:"/docs/contributing"},next:{title:"Documentation",permalink:"/docs/contributing/documentation"}},v=[{value:"Authoring Changes",id:"authoring-changes",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Setting Up a Virtual Environment",id:"setting-up-a-virtual-environment",children:[],level:3},{value:"Starting the Database",id:"starting-the-database",children:[],level:3},{value:"Start components locally",id:"start-components-locally",children:[],level:3},{value:"Testing Your Changes",id:"testing-your-changes",children:[],level:3}],level:2}],k={toc:v};function y(e){var t=e.components,n=(0,a.Z)(e,h);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing-to-components"},"Contributing to Components"),(0,i.kt)("p",null,"The source code for Resoto lives in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto"},(0,i.kt)("inlineCode",{parentName:"a"},"someengineering/resoto")," repository on GitHub"),"."),(0,i.kt)("h2",{id:"authoring-changes"},"Authoring Changes"),(0,i.kt)("p",null,"Contributions are made via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto/pulls"},"pull requests to the GitHub repository"),". You will first need to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/get-started/quickstart/fork-a-repo"},"fork")," the repository."),(0,i.kt)("p",null,"Each Resoto ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/components/"},"component")," is maintained as separate project, and pull requests should target a single component:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/tree/main/resotocore"},"Resoto Core (",(0,i.kt)("inlineCode",{parentName:"a"},"resotocore"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/tree/main/resotoshell"},"Resoto Shell (",(0,i.kt)("inlineCode",{parentName:"a"},"resotoshell"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/tree/main/resotoworker"},"Resoto Worker (",(0,i.kt)("inlineCode",{parentName:"a"},"resotoworker"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/tree/main/resotometrics"},"Resoto Metrics (",(0,i.kt)("inlineCode",{parentName:"a"},"resotometrics"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/someengineering/resoto/tree/main/resotolib"},"Resoto Library (",(0,i.kt)("inlineCode",{parentName:"a"},"resotolib"),")"))),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com"},"Git")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://python.org"},"Python")," 3.8+ (3.10 is recommended)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arangodb.com"},"ArangoDB")," 3.8.2+"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gcc.gnu.org"},"GNU Compiler Collection (GCC)")," (depending on the host system, Python dependencies may need to be compiled from source)")),(0,i.kt)("h3",{id:"setting-up-a-virtual-environment"},"Setting Up a Virtual Environment"),(0,i.kt)("p",null,"We recommend using a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/tutorial/venv.html"},"Python virtual environment"),"."),(0,i.kt)("p",null,"A script is provided to simplify the process of configuring the virtual environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./setup_venv.sh --dev --path .\n")),(0,i.kt)("p",null,"Activate the virtual environment:"),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(d,{value:"linux",label:"Linux/macOS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"source venv/bin/activate\n"))),(0,i.kt)(d,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"venv\\Scripts\\activate.bat\n")))),(0,i.kt)("h3",{id:"starting-the-database"},"Starting the Database"),(0,i.kt)("p",null,"Start ArangoDB (using ",(0,i.kt)("inlineCode",{parentName:"p"},"systemctl")," on Linux, by clicking the application icon in macOS, etc.)."),(0,i.kt)("p",null,"Start ",(0,i.kt)("a",{parentName:"p",href:"https://arangodb.com"},"ArangoDB")," (using ",(0,i.kt)("inlineCode",{parentName:"p"},"systemctl")," on Linux, by clicking the application icon in macOS, etc.)."),(0,i.kt)("p",null,"Depending on the installation method used for ",(0,i.kt)("a",{parentName:"p",href:"https://arangodb.com"},"ArangoDB"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.arangodb.com/docs/stable/getting-started-installation.html#securing-the-installation"},"authentication may or may not be enabled on the built-in ",(0,i.kt)("inlineCode",{parentName:"a"},"root")," user account"),". The installation process either prompted for the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," password (Debian, Windows), configured a random password (Red Hat), or set the password to an empty string."),(0,i.kt)("p",null,"In order for ",(0,i.kt)("inlineCode",{parentName:"p"},"resotocore")," to perform the required database setup and for tests to pass, authentication must be disabled or the password for ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," must be set to an empty string."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This setup is for development only and should not be deployed in production environments."))),(0,i.kt)("h3",{id:"start-components-locally"},"Start components locally"),(0,i.kt)("p",null,"You can now start each of the Resoto components:"),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(d,{value:"core",label:"Core (resotocore)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd resotocore\npython -m core\n"))),(0,i.kt)(d,{value:"shell",label:"Shell (resh)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd resotoshell\npython -m resotoshell\n"))),(0,i.kt)(d,{value:"worker",label:"Worker (resotoworker)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd resotoworker\npython -m resotoworker\n"))),(0,i.kt)(d,{value:"metrics",label:"Metrics (resotometrics)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd resotometrics\npython -m resotometrics\n")))),(0,i.kt)("h3",{id:"testing-your-changes"},"Testing Your Changes"),(0,i.kt)("p",null,"We use the ",(0,i.kt)("a",{parentName:"p",href:"https://pytest.org"},(0,i.kt)("inlineCode",{parentName:"a"},"pytest"))," framework. Prior to submitting your changes for review, please verify that all existing tests pass and add test coverage for new code."),(0,i.kt)("p",null,"Lint and test your code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tox\n")),(0,i.kt)("p",null,"You can now ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto/pulls"},"submit your pull request on GitHub"),"! You are welcome to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests"},"open your pull request as a draft")," for early feedback and review. Be sure to follow the pull request template!"))}y.isMDXComponent=!0}}]);