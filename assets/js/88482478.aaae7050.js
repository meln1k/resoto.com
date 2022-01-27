"use strict";(self.webpackChunkresoto_com=self.webpackChunkresoto_com||[]).push([[2233],{3905:function(e,i,t){t.d(i,{Zo:function(){return c},kt:function(){return d}});var I=t(7294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function l(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(e);i&&(I=I.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,I)}return t}function n(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?l(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function M(e,i){if(null==e)return{};var t,I,a=function(e,i){if(null==e)return{};var t,I,a={},l=Object.keys(e);for(I=0;I<l.length;I++)t=l[I],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(I=0;I<l.length;I++)t=l[I],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var N=I.createContext({}),o=function(e){var i=I.useContext(N),t=i;return e&&(t="function"==typeof e?e(i):n(n({},i),e)),t},c=function(e){var i=o(e.components);return I.createElement(N.Provider,{value:i},e.children)},r={inlineCode:"code",wrapper:function(e){var i=e.children;return I.createElement(I.Fragment,{},i)}},g=I.forwardRef((function(e,i){var t=e.components,a=e.mdxType,l=e.originalType,N=e.parentName,c=M(e,["components","mdxType","originalType","parentName"]),g=o(t),d=a,u=g["".concat(N,".").concat(d)]||g[d]||r[d]||l;return t?I.createElement(u,n(n({ref:i},c),{},{components:t})):I.createElement(u,n({ref:i},c))}));function d(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var l=t.length,n=new Array(l);n[0]=g;var M={};for(var N in i)hasOwnProperty.call(i,N)&&(M[N]=i[N]);M.originalType=e,M.mdxType="string"==typeof e?e:a,n[1]=M;for(var o=2;o<l;o++)n[o]=t[o];return I.createElement.apply(null,n)}return I.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2810:function(e,i,t){t.r(i),t.d(i,{frontMatter:function(){return M},contentTitle:function(){return N},metadata:function(){return o},toc:function(){return c},default:function(){return g}});var I=t(7462),a=t(3366),l=(t(7294),t(3905)),n=["components"],M={},N="Workflow",o={unversionedId:"concepts/automation/workflow",id:"concepts/automation/workflow",title:"Workflow",description:"A workflow is a set of steps that implements a finite state machine, where every step performs a specific action.",source:"@site/docs/concepts/automation/workflow.md",sourceDirName:"concepts/automation",slug:"/concepts/automation/workflow",permalink:"/docs/concepts/automation/workflow",editUrl:"https://github.com/someengineering/resoto.com/edit/main/docs/concepts/automation/workflow.md",tags:[],version:"current",lastUpdatedBy:"TheCatLady",lastUpdatedAt:1643233080,formattedLastUpdatedAt:"1/26/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Job",permalink:"/docs/concepts/automation/job"},next:{title:"Components",permalink:"/docs/concepts/components/"}},c=[],r={toc:c};function g(e){var i=e.components,M=(0,a.Z)(e,n);return(0,l.kt)("wrapper",(0,I.Z)({},r,M,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"workflow"},"Workflow"),(0,l.kt)("p",null,"A workflow is a set of steps that implements a finite state machine, where every step performs a specific action."),(0,l.kt)("p",null,"Workflows can be triggered on a schedule or by an event."),(0,l.kt)("p",null,"While we want to enable users to create and manipulate workflows on their own, there is currently only one hardcoded workflow that ships with Resoto, which is illustrated in the following diagram:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Default Workflow Diagram",src:t(1250).Z,width:"616",height:"355"})),(0,l.kt)("p",null,"This workflow is triggered by time and runs every hour."),(0,l.kt)("p",null,"According to this workflow, the following actions are performed every full hour:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"collect")," All configured cloud providers are triggered to collect the available cloud resources."),(0,l.kt)("p",{parentName:"li"},"The collected resources are given to the core and update the internal database. After this step is done, all cloud resources should be available to Resoto.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"cleanup_plan")," This step allows selection of resources that should be cleaned up."),(0,l.kt)("p",{parentName:"li"},"Out of the box, Resoto will select expired resources if ",(0,l.kt)("inlineCode",{parentName:"p"},"resotoworker")," is started with the relevant command-line flag (",(0,l.kt)("inlineCode",{parentName:"p"},"--cleanup-expired"),"). Users can hook into this step to select resources, that they think should be cleaned up. After this step is done, all resources that should be cleaned up are marked internally in resotocore.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"cleanup")," When cleanup is enabled in resotoworker (",(0,l.kt)("inlineCode",{parentName:"p"},"--cleanup"),"), this step will select all resources that are marked for cleanup and will delete them."),(0,l.kt)("p",{parentName:"li"},"After this step is done, all resources that were marked for cleanup are handled.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"generate_metrics")," This step will perform several queries to get updated metrics. Since the incoming data only changes during the next collect run, the metrics can be safely generated here and cached until the next collect run."))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Every step shown in this diagram has an additional ",(0,l.kt)("inlineCode",{parentName:"p"},"pre")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"post")," action. Those actions exist, to allow additional customization. If you want to trigger functionality after ",(0,l.kt)("inlineCode",{parentName:"p"},"collect")," is done, it would be possible to react on the ",(0,l.kt)("inlineCode",{parentName:"p"},"post_collect")," action for example."))),(0,l.kt)("p",null,"The following diagram shows how ",(0,l.kt)("inlineCode",{parentName:"p"},"resotoworker")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"resotometrics")," use the default workflow."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"resotoworker")," waits for the ",(0,l.kt)("inlineCode",{parentName:"li"},"collect")," action. Once this is received, it will run all configured cloud providers to collect the available cloud resources. It will also listen to the ",(0,l.kt)("inlineCode",{parentName:"li"},"cleanup_plan")," action in case expired resources should be cleaned up."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"resotometrics")," will wait for the ",(0,l.kt)("inlineCode",{parentName:"li"},"generate_metrics")," action. Since this action is performed after the collect step, the metrics operate on the latest available snapshot of data.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Default Workflow Actors",src:t(776).Z,width:"803",height:"509"})))}g.isMDXComponent=!0},1250:function(e,i,t){i.Z=t.p+"assets/images/default_workflow-7e975b4c3dac765deea69c1a007f31d7.svg"},776:function(e,i){i.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjAycHQiIGhlaWdodD0iMzgycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMjIzIDE4MSA2MDIgMzgyIj48bWV0YWRhdGE+UHJvZHVjZWQgYnkgT21uaUdyYWZmbGUgNy4yLjI8L21ldGFkYXRhPjxkZWZzPjxmb250LWZhY2UgeC1oZWlnaHQ9IjUxNyIgYXNjZW50PSI5NzUuMDA2IiBjYXAtaGVpZ2h0PSI3MTQiIGRlc2NlbnQ9Ii0yMTYuOTk1IiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBwYW5vc2UtMT0iMiAwIDggMyAwIDAgMCA5IDAgNCIgc2xvcGU9IjAiIHVuZGVybGluZS1wb3NpdGlvbj0iLTEwMCIgdW5kZXJsaW5lLXRoaWNrbmVzcz0iNTAiIHVuaXRzLXBlci1lbT0iMTAwMCI+PGZvbnQtZmFjZS1zcmM+PGZvbnQtZmFjZS1uYW1lIG5hbWU9IkhlbHZldGljYU5ldWUtQm9sZCIvPjwvZm9udC1mYWNlLXNyYz48L2ZvbnQtZmFjZT48bWFya2VyIGlkPSJGaWxsZWRBcnJvd19NYXJrZXIiIGNvbG9yPSIjYTVhNWE1IiBtYXJrZXJIZWlnaHQ9IjgiIG1hcmtlclVuaXRzPSJzdHJva2VXaWR0aCIgbWFya2VyV2lkdGg9IjEwIiBvcmllbnQ9ImF1dG8iIG92ZXJmbG93PSJ2aXNpYmxlIiB2aWV3Qm94PSItMSAtNCAxMCA4Ij48Zz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiIGQ9Ik0gOCAwIEwgMCAtMyBMIDAgMyBaIi8+PC9nPjwvbWFya2VyPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWRhc2hhcnJheT0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjEiPjx0aXRsZT5DYW52YXMgMTwvdGl0bGU+PGc+PHRpdGxlPkxheWVyIDE8L3RpdGxlPjxyZWN0IHdpZHRoPSI0MDEuNSIgaGVpZ2h0PSIxMjgiIHg9IjM0NCIgeT0iMjkyLjUiIGZpbGw9IiNjMGZmYzAiLz48cmVjdCB3aWR0aD0iNDAxLjUiIGhlaWdodD0iMTI4IiB4PSIzNDQiIHk9IjI5Mi41IiBzdHJva2U9IiNhNWE1YTUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZmlsbD0iI2MwZmZmZiIgZD0iTSAzNjMgMzIxLjUgTCA1MTIuNzM4MDYgMzIxLjUgQyA1MTcuNzA4NiAzMjEuNSA1MjEuNzM4MDYgMzI1LjUyOTQ0IDUyMS43MzgwNiAzMzAuNSBMIDUyMS43MzgwNiAzNDEgQyA1MjEuNzM4MDYgMzQ1Ljk3MDU2IDUxNy43MDg2IDM1MCA1MTIuNzM4MDYgMzUwIEwgMzYzIDM1MCBDIDM1OC4wMjk0NCAzNTAgMzU0IDM0NS45NzA1NiAzNTQgMzQxIEwgMzU0IDMzMC41IEMgMzU0IDMyNS41Mjk0NCAzNTguMDI5NDQgMzIxLjUgMzYzIDMyMS41IFoiLz48cGF0aCBzdHJva2U9IiNhNWE1YTUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIiBkPSJNIDM2MyAzMjEuNSBMIDUxMi43MzgwNiAzMjEuNSBDIDUxNy43MDg2IDMyMS41IDUyMS43MzgwNiAzMjUuNTI5NDQgNTIxLjczODA2IDMzMC41IEwgNTIxLjczODA2IDM0MSBDIDUyMS43MzgwNiAzNDUuOTcwNTYgNTE3LjcwODYgMzUwIDUxMi43MzgwNiAzNTAgTCAzNjMgMzUwIEMgMzU4LjAyOTQ0IDM1MCAzNTQgMzQ1Ljk3MDU2IDM1NCAzNDEgTCAzNTQgMzMwLjUgQyAzNTQgMzI1LjUyOTQ0IDM1OC4wMjk0NCAzMjEuNSAzNjMgMzIxLjUgWiIvPjx0ZXh0IGZpbGw9IiMwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1OSAzMjguMDc1OTYpIj48dHNwYW4geD0iNTkuNjYzIiB5PSIxMiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgdGV4dExlbmd0aD0iMzguNDEyIj5jb2xsZWN0PC90c3Bhbj48L3RleHQ+PHBhdGggZmlsbD0iI2RhZGFkYSIgZD0iTSA1NzcuNSAzODIuNSBMIDcyNy4yMzgwNiAzODIuNSBDIDczMi4yMDg2IDM4Mi41IDczNi4yMzgwNiAzODYuNTI5NDQgNzM2LjIzODA2IDM5MS41IEwgNzM2LjIzODA2IDQwMiBDIDczNi4yMzgwNiA0MDYuOTcwNTYgNzMyLjIwODYgNDExIDcyNy4yMzgwNiA0MTEgTCA1NzcuNSA0MTEgQyA1NzIuNTI5NDQgNDExIDU2OC41IDQwNi45NzA1NiA1NjguNSA0MDIgTCA1NjguNSAzOTEuNSBDIDU2OC41IDM4Ni41Mjk0NCA1NzIuNTI5NDQgMzgyLjUgNTc3LjUgMzgyLjUgWiIvPjxwYXRoIHN0cm9rZT0iI2E1YTVhNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0gNTc3LjUgMzgyLjUgTCA3MjcuMjM4MDYgMzgyLjUgQyA3MzIuMjA4NiAzODIuNSA3MzYuMjM4MDYgMzg2LjUyOTQ0IDczNi4yMzgwNiAzOTEuNSBMIDczNi4yMzgwNiA0MDIgQyA3MzYuMjM4MDYgNDA2Ljk3MDU2IDczMi4yMDg2IDQxMSA3MjcuMjM4MDYgNDExIEwgNTc3LjUgNDExIEMgNTcyLjUyOTQ0IDQxMSA1NjguNSA0MDYuOTcwNTYgNTY4LjUgNDAyIEwgNTY4LjUgMzkxLjUgQyA1NjguNSAzODYuNTI5NDQgNTcyLjUyOTQ0IDM4Mi41IDU3Ny41IDM4Mi41IFoiLz48dGV4dCBmaWxsPSIjMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NzMuNSAzODkuMDc1OTYpIj48dHNwYW4geD0iNTYuMjA3IiB5PSIxMiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgdGV4dExlbmd0aD0iNDUuMzI0Ij5jbGVhbnVwPC90c3Bhbj48L3RleHQ+PHBhdGggZmlsbD0iI2RhZGFkYSIgZD0iTSAzNjMgMzgyLjUgTCA1MTIuNzM4MDYgMzgyLjUgQyA1MTcuNzA4NiAzODIuNSA1MjEuNzM4MDYgMzg2LjUyOTQ0IDUyMS43MzgwNiAzOTEuNSBMIDUyMS43MzgwNiA0MDIgQyA1MjEuNzM4MDYgNDA2Ljk3MDU2IDUxNy43MDg2IDQxMSA1MTIuNzM4MDYgNDExIEwgMzYzIDQxMSBDIDM1OC4wMjk0NCA0MTEgMzU0IDQwNi45NzA1NiAzNTQgNDAyIEwgMzU0IDM5MS41IEMgMzU0IDM4Ni41Mjk0NCAzNTguMDI5NDQgMzgyLjUgMzYzIDM4Mi41IFoiLz48cGF0aCBzdHJva2U9IiNhNWE1YTUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIiBkPSJNIDM2MyAzODIuNSBMIDUxMi43MzgwNiAzODIuNSBDIDUxNy43MDg2IDM4Mi41IDUyMS43MzgwNiAzODYuNTI5NDQgNTIxLjczODA2IDM5MS41IEwgNTIxLjczODA2IDQwMiBDIDUyMS43MzgwNiA0MDYuOTcwNTYgNTE3LjcwODYgNDExIDUxMi43MzgwNiA0MTEgTCAzNjMgNDExIEMgMzU4LjAyOTQ0IDQxMSAzNTQgNDA2Ljk3MDU2IDM1NCA0MDIgTCAzNTQgMzkxLjUgQyAzNTQgMzg2LjUyOTQ0IDM1OC4wMjk0NCAzODIuNSAzNjMgMzgyLjUgWiIvPjx0ZXh0IGZpbGw9IiMwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1OSAzODkuMDc1OTYpIj48dHNwYW4geD0iNDAuOTkxIiB5PSIxMiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgdGV4dExlbmd0aD0iNzUuNzU2Ij5jbGVhbnVwX3BsYW48L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSIjYzBmZmZmIiBkPSJNIDU3Ny41IDMyMS41IEwgNzI3LjIzODA2IDMyMS41IEMgNzMyLjIwODYgMzIxLjUgNzM2LjIzODA2IDMyNS41Mjk0NCA3MzYuMjM4MDYgMzMwLjUgTCA3MzYuMjM4MDYgMzQxIEMgNzM2LjIzODA2IDM0NS45NzA1NiA3MzIuMjA4NiAzNTAgNzI3LjIzODA2IDM1MCBMIDU3Ny41IDM1MCBDIDU3Mi41Mjk0NCAzNTAgNTY4LjUgMzQ1Ljk3MDU2IDU2OC41IDM0MSBMIDU2OC41IDMzMC41IEMgNTY4LjUgMzI1LjUyOTQ0IDU3Mi41Mjk0NCAzMjEuNSA1NzcuNSAzMjEuNSBaIi8+PHBhdGggc3Ryb2tlPSIjYTVhNWE1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMyIgZD0iTSA1NzcuNSAzMjEuNSBMIDcyNy4yMzgwNiAzMjEuNSBDIDczMi4yMDg2IDMyMS41IDczNi4yMzgwNiAzMjUuNTI5NDQgNzM2LjIzODA2IDMzMC41IEwgNzM2LjIzODA2IDM0MSBDIDczNi4yMzgwNiAzNDUuOTcwNTYgNzMyLjIwODYgMzUwIDcyNy4yMzgwNiAzNTAgTCA1NzcuNSAzNTAgQyA1NzIuNTI5NDQgMzUwIDU2OC41IDM0NS45NzA1NiA1NjguNSAzNDEgTCA1NjguNSAzMzAuNSBDIDU2OC41IDMyNS41Mjk0NCA1NzIuNTI5NDQgMzIxLjUgNTc3LjUgMzIxLjUgWiIvPjx0ZXh0IGZpbGw9IiMwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3My41IDMyOC4wNzU5NikiPjx0c3BhbiB4PSIyOC44ODMiIHk9IjEyIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0TGVuZ3RoPSI5OS45NzIiPmdlbmVyYXRlX21ldHJpY3M8L3RzcGFuPjwvdGV4dD48bGluZSB4MT0iNDM3Ljg2OSIgeDI9IjQzNy44NjkiIHkxPSIzNTAuNzUiIHkyPSIzNzEuODUiIHN0cm9rZT0iI2E1YTVhNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjRmlsbGVkQXJyb3dfTWFya2VyKSIvPjxsaW5lIHgxPSI1MjIuNDg4IiB4Mj0iNTU3Ljg1IiB5MT0iMzk2Ljc1IiB5Mj0iMzk2Ljc1IiBzdHJva2U9IiNhNWE1YTUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI0ZpbGxlZEFycm93X01hcmtlcikiLz48bGluZSB4MT0iNjUyLjM2OSIgeDI9IjY1Mi4zNjkiIHkxPSIzODEuNzUiIHkyPSIzNjAuNjUiIHN0cm9rZT0iI2E1YTVhNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjRmlsbGVkQXJyb3dfTWFya2VyKSIvPjx0ZXh0IGZpbGw9IiMwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUyNC43NSAyOTcuODI1OTYpIj48dHNwYW4geD0iLjIyNCIgeT0iMTIiIGZpbGw9IiMwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHRMZW5ndGg9IjM5LjU1MiI+cmVzb3RvY29yZTwvdHNwYW4+PC90ZXh0PjxyZWN0IHdpZHRoPSI4Mi41IiBoZWlnaHQ9IjU3IiB4PSIyMjQuNSIgeT0iNTA0LjUiIGZpbGw9IiNjMGZmYzAiLz48cmVjdCB3aWR0aD0iODIuNSIgaGVpZ2h0PSI1NyIgeD0iMjI0LjUiIHk9IjUwNC41IiBzdHJva2U9IiNhNWE1YTUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIi8+PHRleHQgZmlsbD0iIzAwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjI5LjUgNTI1LjMyNTk2KSI+PHRzcGFuIHg9IjkuMjU2IiB5PSIxMiIgZmlsbD0iIzAwMCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgdGV4dExlbmd0aD0iNTMuOTg4Ij5yZXNvdG93b3JrZXI8L3RzcGFuPjwvdGV4dD48cmVjdCB3aWR0aD0iODIuNSIgaGVpZ2h0PSI1NyIgeD0iNzQwLjUiIHk9IjE4MyIgZmlsbD0iI2MwZmZjMCIvPjxyZWN0IHdpZHRoPSI4Mi41IiBoZWlnaHQ9IjU3IiB4PSI3NDAuNSIgeT0iMTgzIiBzdHJva2U9IiNhNWE1YTUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIi8+PHRleHQgZmlsbD0iIzAwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzQ1LjUgMjAzLjgyNTk2KSI+PHRzcGFuIHg9IjcuODIyIiB5PSIxMiIgZmlsbD0iIzAwMCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgdGV4dExlbmd0aD0iNTYuODU2Ij5yZXNvdG9tZXRyaWNzPC90c3Bhbj48L3RleHQ+PGxpbmUgeDE9Ijc1MS4yOTIiIHgyPSI2NjcuOTg5IiB5MT0iMjQwLjc1IiB5Mj0iMzIwLjc1IiBzdHJva2U9IiNhNWE1YTUiIHN0cm9rZS1kYXNoYXJyYXk9IjEgNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iMjc4LjgzNyIgeDI9IjM1NCIgeTE9IjUwMy43NSIgeTI9IjMzNS43NSIgc3Ryb2tlPSIjYTVhNWE1IiBzdHJva2UtZGFzaGFycmF5PSIxIDQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjI4NC42OTUiIHgyPSIzNTMuMjUiIHkxPSI1MDMuNzUiIHkyPSIzOTcuOTA4IiBzdHJva2U9IiNhNWE1YTUiIHN0cm9rZS1kYXNoYXJyYXk9IjEgNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iMzA3Ljc1IiB4Mj0iNjA5LjgwNiIgeTE9IjUxOC4xOTkiIHkyPSI0MTEuNzUiIHN0cm9rZT0iI2E1YTVhNSIgc3Ryb2tlLWRhc2hhcnJheT0iMSA0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L2c+PC9zdmc+"}}]);