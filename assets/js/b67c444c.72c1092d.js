"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[830],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return t?i.createElement(f,a(a({ref:n},c),{},{components:t})):i.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var d=2;d<o;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2556:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var i=t(7462),r=t(3366),o=(t(7294),t(3905)),a=["components"],p={id:"ui_componentSection",title:"Module: ui/componentSection",sidebar_label:"ui/componentSection",sidebar_position:0,custom_edit_url:null},l=void 0,d={unversionedId:"api/modules/ui_componentSection",id:"api/modules/ui_componentSection",isDocsHomePage:!1,title:"Module: ui/componentSection",description:"Functions",source:"@site/docs/api/modules/ui_componentSection.md",sourceDirName:"api/modules",slug:"/api/modules/ui_componentSection",permalink:"/admin-extension-sdk/docs/api/modules/ui_componentSection",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ui_componentSection",title:"Module: ui/componentSection",sidebar_label:"ui/componentSection",sidebar_position:0,custom_edit_url:null},sidebar:"API",previous:{title:"notification",permalink:"/admin-extension-sdk/docs/api/modules/notification"},next:{title:"ui/tabs",permalink:"/admin-extension-sdk/docs/api/modules/ui_tabs"}},c=[{value:"Functions",id:"functions",children:[{value:"add",id:"add",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Type aliases",id:"type-aliases",children:[{value:"uiComponentSectionRenderer",id:"uicomponentsectionrenderer",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],s={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"add"},"add"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"add"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"messageOptions"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"messageOptions")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Omit"),"<",(0,o.kt)("a",{parentName:"td",href:"/admin-extension-sdk/docs/api/modules/channel#messagedatatype"},(0,o.kt)("inlineCode",{parentName:"a"},"MessageDataType")),"<",(0,o.kt)("inlineCode",{parentName:"td"},'"uiComponentSectionRenderer"'),">",", ",(0,o.kt)("inlineCode",{parentName:"td"},'"src"'),">")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/shopware/admin-extension-sdk/blob/131660a/src/ui/componentSection/index.ts#L4"},"ui/componentSection/index.ts:4")),(0,o.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,o.kt)("h3",{id:"uicomponentsectionrenderer"},"uiComponentSectionRenderer"),(0,o.kt)("p",null,"\u01ac ",(0,o.kt)("strong",{parentName:"p"},"uiComponentSectionRenderer"),": { ",(0,o.kt)("inlineCode",{parentName:"p"},"responseType"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"component"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"positionId"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unknown")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"src?"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"  } & ",(0,o.kt)("inlineCode",{parentName:"p"},"cardComponentRender")),(0,o.kt)("p",null,"Contains all possible components for the sections"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/shopware/admin-extension-sdk/blob/131660a/src/ui/componentSection/index.ts#L11"},"ui/componentSection/index.ts:11")))}u.isMDXComponent=!0}}]);