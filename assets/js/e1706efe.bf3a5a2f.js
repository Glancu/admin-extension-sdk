"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),p=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(f,c(c({ref:n},l),{},{components:t})):o.createElement(f,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<i;p++)c[p]=t[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1427:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),c=["components"],s={},a="Component sections",p={unversionedId:"guide/concepts/component-sections",id:"guide/concepts/component-sections",isDocsHomePage:!1,title:"Component sections",description:"In most cases extension developers will directly use the extension capabilities of the UI components (e.g. adding tab items, adding button to grid, ...). This will cover most needs of many extensions. But in cases where a extension need special solutions which aren't feasible with the given extension they can use a feature named Component Sections. These are sections where any extension developer can inject components.",source:"@site/docs/guide/4_concepts/component-sections.md",sourceDirName:"guide/4_concepts",slug:"/guide/concepts/component-sections",permalink:"/admin-extension-sdk/docs/guide/concepts/component-sections",tags:[],version:"current",frontMatter:{},sidebar:"Guide",previous:{title:"Vue Devtools",permalink:"/admin-extension-sdk/docs/guide/tooling/vue-devtools"},next:{title:"Locations",permalink:"/admin-extension-sdk/docs/guide/concepts/locations"}},l=[{value:"Example:",id:"example",children:[],level:3}],u={toc:l};function d(e){var n=e.components,s=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"component-sections"},"Component sections"),(0,i.kt)("p",null,"In most cases extension developers will directly use the extension capabilities of the UI components (e.g. adding tab items, adding button to grid, ...). This will cover most needs of many extensions. But in cases where a extension need special solutions which aren't feasible with the given extension they can use a feature named ",(0,i.kt)("inlineCode",{parentName:"p"},"Component Sections"),". These are sections where any extension developer can inject components."),(0,i.kt)("p",null,"These components are prebuilt (like cards) and contain in most cases custom ",(0,i.kt)("a",{parentName:"p",href:"/admin-extension-sdk/docs/guide/concepts/locations"},"location")," where the extension has the full freedom to render anything."),(0,i.kt)("h3",{id:"example"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"if (location.is(location.MAIN_HIDDEN)) {\n  // Choose a position id where you want to render a custom component\n  sw.ui.componentSection('sw-manufacturer-card-custom-fields__before').add({\n      // The Component Sections provides different components out of the box\n      component: 'card', \n      // Props are depending on the type of component\n      props: {\n          title: 'Hello from plugin',\n          subtitle: 'I am before the properties card',\n          // Some components can render a custom view. In this case the extension can render custom content in the card.\n          locationId: 'my-app-card-before-properties'\n      }\n  })\n}\n\n// Render the custom UI when the iFrame location matches your defined location\nif (sw.location.is('my-app-card-before-properties')) {\n    document.body.innerHTML = '<h1>Hello World before</h1>';\n    document.body.style.background = 'blue';\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Component Sections screenshot example",src:t(3858).Z})))}d.isMDXComponent=!0},3858:function(e,n,t){n.Z=t.p+"assets/images/component-sections-example-62782a34916bf1bfce6cec3946519294.png"}}]);