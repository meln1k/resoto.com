"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[9006],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),h=o,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2931:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],u={sidebar_label:"Documentation"},l="Contributing Documentation",s={unversionedId:"contributing/documentation",id:"contributing/documentation",title:"Contributing Documentation",description:"The Resoto website and documentation are built with Docusaurus, a static-site generator. The source code lives in the someengineering/resoto.com repository on GitHub.",source:"@site/docs/contributing/documentation.md",sourceDirName:"contributing",slug:"/contributing/documentation",permalink:"/docs/contributing/documentation",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/contributing/documentation.md",tags:[],version:"current",lastUpdatedAt:1643261720,formattedLastUpdatedAt:"1/27/2022",frontMatter:{sidebar_label:"Documentation"},sidebar:"sidebar",previous:{title:"Components",permalink:"/docs/contributing/components"}},p=[{value:"Authoring Changes",id:"authoring-changes",children:[{value:"GitHub Web Interface",id:"github-web-interface",children:[],level:3},{value:"Local Git Repository",id:"local-git-repository",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:4},{value:"Cloning the Repository",id:"cloning-the-repository",children:[],level:4},{value:"Starting the Development Server",id:"starting-the-development-server",children:[],level:4},{value:"Pushing Your Changes",id:"pushing-your-changes",children:[],level:4},{value:"Keeping Your Branch Up-to-Date",id:"keeping-your-branch-up-to-date",children:[],level:4}],level:3}],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contributing-documentation"},"Contributing Documentation"),(0,a.kt)("p",null,"The Resoto website and documentation are built with ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus"),", a static-site generator. The source code lives in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto.com"},(0,a.kt)("inlineCode",{parentName:"a"},"someengineering/resoto.com")," repository on GitHub"),"."),(0,a.kt)("h2",{id:"authoring-changes"},"Authoring Changes"),(0,a.kt)("p",null,"Contributions are made via ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto.com/pulls"},"pull requests to the GitHub repository"),". Changes can be authored ",(0,a.kt)("a",{parentName:"p",href:"#github-web-interface"},"via the GitHub web interface")," (easy) or ",(0,a.kt)("a",{parentName:"p",href:"#local-git-repository"},"in a local repository using your favorite ",(0,a.kt)("inlineCode",{parentName:"a"},"git")," client")," (recommended)."),(0,a.kt)("p",null,"If your changes modify non-Markdown files, it is strongly recommended to work on a local clone of the repository rather than within the GitHub web interface."),(0,a.kt)("h3",{id:"github-web-interface"},"GitHub Web Interface"),(0,a.kt)("p",null,'On the bottom of all documentation pages, there is an "',(0,a.kt)("strong",{parentName:"p"},"Edit this page"),'" link.'),(0,a.kt)("p",null,'Simply click the link, make your changes, and select the "',(0,a.kt)("strong",{parentName:"p"},"Create a new branch for this commit and start a pull request."),'" option at the bottom of the page.'),(0,a.kt)("p",null,"For supported Markdown features, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus documentation"),"."),(0,a.kt)("h3",{id:"local-git-repository"},"Local Git Repository"),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com"},"Git")," (the below instructions assume you are using the CLI, though ",(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads/guis"},"GUI clients")," will also work!)"),(0,a.kt)("li",{parentName:"ul"},"Code editor (",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code")," is recommended)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://yarnpkg.com"},"Yarn"))),(0,a.kt)("h4",{id:"cloning-the-repository"},"Cloning the Repository"),(0,a.kt)("p",null,"You will first need to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/get-started/quickstart/fork-a-repo"},"fork")," the repository."),(0,a.kt)("p",null,"Then, creating a local ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/repositories/creating-and-managing-repositories/cloning-a-repository"},"clone")," of the repository is as simple as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/YOUR_GITHUB_USERNAME/resoto.com.git\n")),(0,a.kt)("p",null,"This will create a directory named ",(0,a.kt)("inlineCode",{parentName:"p"},"resoto.com")," in your current working directory."),(0,a.kt)("p",null,"Next, add a remote pointing to the upstream repository (as opposted to your fork) named ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git remote add upstream https://github.com/someengineering/resoto.com.git\n")),(0,a.kt)("p",null,"We will now create a new ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell"},"branch")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," (it is recommended to give your branch a meaningful, descriptive name):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b YOUR_BRANCH_NAME main\n")),(0,a.kt)("h4",{id:"starting-the-development-server"},"Starting the Development Server"),(0,a.kt)("p",null,"We are finally able to get to the fun stuff! ",(0,a.kt)("span",{parentName:"p",role:"img","aria-label":"partying face"},"\ud83e\udd73")," Install dependencies and start a local development server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\nyarn start\n")),(0,a.kt)("p",null,"You will notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," has been opened in your browser, where you can see your changes reflected live."),(0,a.kt)("h4",{id:"pushing-your-changes"},"Pushing Your Changes"),(0,a.kt)("p",null,"After you are done authoring your changes, be sure to verify that they will pass our ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lint_(software)"},"lint")," and build ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/actions/automating-builds-and-tests/about-continuous-integration"},"continuous integration")," checks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn lint\nyarn build\n")),(0,a.kt)("p",null,"When you are ready to submit your changes for review, commit them to your local repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git commit\n")),(0,a.kt)("p",null,"Then, push them to your fork:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git push --set-upstream origin YOUR_BRANCH_NAME\n")),(0,a.kt)("p",null,"You can now ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/someengineering/resoto.com/pulls"},"submit your pull request on GitHub"),"! You are welcome to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests"},"open your pull request as a draft")," for early feedback and review. Be sure to follow the pull request template!"),(0,a.kt)("h4",{id:"keeping-your-branch-up-to-date"},"Keeping Your Branch Up-to-Date"),(0,a.kt)("p",null,"If there are new commits to the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch of the repository, you can update your branch by rebasing from your ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream")," remote:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch upstream\ngit rebase upstream/main\n")),(0,a.kt)("p",null,"To update the branch in your fork, you will then need to force push:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\ngit push -f origin YOUR_BRANCH_NAME\n")))}m.isMDXComponent=!0}}]);