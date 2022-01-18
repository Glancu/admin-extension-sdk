"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9524],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),s=a,f=p["".concat(d,".").concat(s)]||p[s]||m[s]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1791:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},d="Main module",u={unversionedId:"guide/api-reference/ui/mainModule",id:"guide/api-reference/ui/mainModule",isDocsHomePage:!1,title:"Main module",description:"Add main module",source:"@site/docs/guide/2_api-reference/ui/mainModule.md",sourceDirName:"guide/2_api-reference/ui",slug:"/guide/api-reference/ui/mainModule",permalink:"/admin-extension-sdk/docs/guide/api-reference/ui/mainModule",tags:[],version:"current",frontMatter:{},sidebar:"Guide",previous:{title:"Component Section",permalink:"/admin-extension-sdk/docs/guide/api-reference/ui/component-section"},next:{title:"Menu Item",permalink:"/admin-extension-sdk/docs/guide/api-reference/ui/menuItem"}},c=[{value:"Add main module",id:"add-main-module",children:[{value:"Usage:",id:"usage",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],level:3}],m={toc:c};function p(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"main-module"},"Main module"),(0,i.kt)("h3",{id:"add-main-module"},"Add main module"),(0,i.kt)("p",null,"Add a main module to your extension. The content of the main module is determined by your ",(0,i.kt)("inlineCode",{parentName:"p"},"locationId"),".\nA specific view or a set of actions can be triggered based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"locationId"),"."),(0,i.kt)("h4",{id:"usage"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"ui.mainModule.addMainModule({\n    heading: 'My App',\n    locationId: 'main-location-id',\n});\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"heading")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The heading displayed in your module")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"locationId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Id for the content of the module")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"displaySearchBar")),(0,i.kt)("td",{parentName:"tr",align:"left"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggles the sw-page search bar on/off")))),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Main module example",src:n(3946).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// General commands\nif (location.is(location.MAIN_HIDDEN)) {\n    // Add the main module\n    ui.mainModule.addMainModule({\n        heading: 'My App',\n        locationId: 'main-location-id',\n    });\n}\n\n// Render your custom view\nif (location.is('main-location-id')) {\n    document.body.innerHTML = '<h1 style=\"text-align: center\">Hello from your main module</h1>';\n}\n")))}p.isMDXComponent=!0},3946:function(e,t,n){t.Z=n.p+"assets/images/add-main-module-example-8b5c8301a930391ddd1f8589ecd3aced.png"}}]);