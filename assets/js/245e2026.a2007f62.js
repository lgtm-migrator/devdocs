"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[24],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return Y}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},M=Object.keys(e);for(i=0;i<M.length;i++)n=M[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(e);for(i=0;i<M.length;i++)n=M[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var w=i.createContext({}),c=function(e){var t=i.useContext(w),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(w.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},l=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,M=e.originalType,w=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),l=c(n),Y=r,p=l["".concat(w,".").concat(Y)]||l[Y]||s[Y]||M;return n?i.createElement(p,o(o({ref:t},m),{},{components:n})):i.createElement(p,o({ref:t},m))}));function Y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var M=n.length,o=new Array(M);o[0]=l;var a={};for(var w in t)hasOwnProperty.call(t,w)&&(a[w]=t[w]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var c=2;c<M;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}l.displayName="MDXCreateElement"},2765:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return w},default:function(){return Y},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var i=n(7462),r=n(3366),M=(n(7294),n(3905)),o=["components"],a={sidebar_position:5},w="Views",c={unversionedId:"hig/patterns/views",id:"hig/patterns/views",title:"Views",description:"A View is the main door to your app's content. It displays what the app's aim is for. Views should contain a label that titles it, using the View Title typography style. This Title should be concise and not go over 3 words. Views can also contain a simple description below the View Title, spaced by 6 units, and styled with View Subtitle typography style.",source:"@site/docs/hig/patterns/views.md",sourceDirName:"hig/patterns",slug:"/hig/patterns/views",permalink:"/docs/hig/patterns/views",draft:!1,editUrl:"https://github.com/tau-OS/devdocs/blob/main/docs/hig/patterns/views.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"hig",previous:{title:"Sidebars",permalink:"/docs/hig/patterns/sidebars"},next:{title:"View Switcher",permalink:"/docs/hig/patterns/view_switcher"}},m={},s=[],l={toc:s};function Y(e){var t=e.components,a=(0,r.Z)(e,o);return(0,M.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,M.kt)("h1",{id:"views"},"Views"),(0,M.kt)("p",null,(0,M.kt)("img",{src:n(5386).Z,width:"1126",height:"366"})),(0,M.kt)("p",null,"A View is the main door to your app's content. It displays what the app's aim is for. Views should contain a label that titles it, using the View Title typography style. This Title should be concise and not go over 3 words. Views can also contain a simple description below the View Title, spaced by 6 units, and styled with View Subtitle typography style."),(0,M.kt)("p",null,"There are 3 types of Views we suggest to follow:"),(0,M.kt)("ol",null,(0,M.kt)("li",{parentName:"ol"},(0,M.kt)("p",{parentName:"li"},"Monoview"),(0,M.kt)("p",{parentName:"li"},"This type of View contains one space for content. It pairs well with a View Switcher. It's the default View type.")),(0,M.kt)("li",{parentName:"ol"},(0,M.kt)("p",{parentName:"li"},"Dualview"),(0,M.kt)("p",{parentName:"li"},"This type of View is usually used when there's a details portion and a main portion in a View. Both sides should be equally important to the View.")),(0,M.kt)("li",{parentName:"ol"},(0,M.kt)("p",{parentName:"li"},"View + Auxiliary Sidebar"),(0,M.kt)("p",{parentName:"li"},"This is a special type of View where there's an Auxiliary Sidebar with transient information that isn't details of the main portion of the View. The Auxiliary Sidebar should be toggle-able, and show itself separated with a separator from the rest of the View. The Auxiliary Sidebar should not exceed 200 units in width."))))}Y.isMDXComponent=!0},5386:function(e,t){t.Z="data:image/png;base64,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"}}]);