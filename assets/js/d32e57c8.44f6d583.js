"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[788],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=A(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return n?i.createElement(h,o(o({ref:t},l),{},{components:n})):i.createElement(h,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var A={};for(var c in t)hasOwnProperty.call(t,c)&&(A[c]=t[c]);A.originalType=e,A.mdxType="string"==typeof e?e:r,o[1]=A;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4979:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return A},metadata:function(){return s},toc:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],A={sidebar_position:6},c="View Switcher",s={unversionedId:"hig/patterns/view_switcher",id:"hig/patterns/view_switcher",title:"View Switcher",description:"The View Switcher is used when there are multiple views in your app. It displays each View's title which are clickable to navigate to that View.",source:"@site/docs/hig/patterns/view_switcher.md",sourceDirName:"hig/patterns",slug:"/hig/patterns/view_switcher",permalink:"/docs/hig/patterns/view_switcher",draft:!1,editUrl:"https://github.com/tau-OS/devdocs/blob/main/docs/hig/patterns/view_switcher.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"hig",previous:{title:"Views",permalink:"/docs/hig/patterns/views"},next:{title:"Content Block",permalink:"/docs/hig/patterns/content_blocks"}},l={},p=[{value:"Mini View Switcher",id:"mini-view-switcher",level:2}],u={toc:p};function d(e){var t=e.components,A=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,A,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"view-switcher"},"View Switcher"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3738).Z,width:"626",height:"236"})),(0,a.kt)("p",null,"The View Switcher is used when there are multiple views in your app. It displays each View's title which are clickable to navigate to that View."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The position of the View Switcher should be taken into consideration on whether it's a normal-type one, or a mini-type one."),(0,a.kt)("li",{parentName:"ul"},"Navigation locations should be of equal importance in the app."),(0,a.kt)("li",{parentName:"ul"},"The position of the View Switcher makes primary user journeys easy to access."),(0,a.kt)("li",{parentName:"ul"},"View Switchers provide access to two up to five destinations."),(0,a.kt)("li",{parentName:"ul"},"The destinations may show a badge.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6986).Z,width:"590",height:"174"})),(0,a.kt)("p",null,"It is positioned at the top of Windows for convenient access. Each destination is represented by a text label, and optional icon. Do not color these, as they should always use the foreground/text color."),(0,a.kt)("p",null,"When a View Switcher destination is selected, the user is taken to the navigation destination associated with that text label."),(0,a.kt)("p",null,"It should be used for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Top-level destinations that need to be accessible from anywhere in the app."),(0,a.kt)("li",{parentName:"ul"},"Two to five destinations.")),(0,a.kt)("p",null,"It shouldn't be used for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Single tasks, such as viewing a single email; in this case use a View Title."),(0,a.kt)("li",{parentName:"ul"},"Displaying a Settings view. Those should be on a Secondary Window.")),(0,a.kt)("h2",{id:"mini-view-switcher"},"Mini View Switcher"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1715).Z,width:"590",height:"174"})),(0,a.kt)("p",null,"When space is at a premium, one should move the View Switcher to the App Bar in the center."))}d.isMDXComponent=!0},1715:function(e,t){t.Z="data:image/png;base64,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"},3738:function(e,t,n){t.Z=n.p+"assets/images/view_switcher-11567db7431a78f231aa9ecded7452a9.png"},6986:function(e,t,n){t.Z=n.p+"assets/images/view_switcher_geo-a94c9dedfb214d080f7ae3201aa48083.png"}}]);