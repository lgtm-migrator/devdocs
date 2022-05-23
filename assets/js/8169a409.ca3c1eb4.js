"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[216],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6691:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:13},p="Empty Page",s={unversionedId:"hig/patterns/empty_page",id:"hig/patterns/empty_page",title:"Empty Page",description:"Empty pages fill a view with an image or a symbolic icon, a title, and a description. They are used to fill a view that would be populated with content.",source:"@site/docs/hig/patterns/empty_page.md",sourceDirName:"hig/patterns",slug:"/hig/patterns/empty_page",permalink:"/docs/hig/patterns/empty_page",draft:!1,editUrl:"https://github.com/tau-OS/devdocs/blob/main/docs/hig/patterns/empty_page.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"hig",previous:{title:"Welcome Screen",permalink:"/docs/hig/patterns/welcome_screen"},next:{title:"Banners",permalink:"/docs/hig/patterns/banners"}},c={},u=[{value:"Guidelines",id:"guidelines",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"empty-page"},"Empty Page"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4697).Z,width:"896",height:"696"})),(0,i.kt)("p",null,"Empty pages fill a view with an image or a symbolic icon, a title, and a description. They are used to fill a view that would be populated with content."),(0,i.kt)("p",null,"There are two styles of empty pages: illustration and symbolic. Illustration empty pages use a colorful image, whereas symbolic empty pages use a simple symbolic icon."),(0,i.kt)("h2",{id:"guidelines"},"Guidelines"),(0,i.kt)("p",null,"All empty pages should include a title which provides guidance. For example, \u201cEmpty Folder\u201d."),(0,i.kt)("p",null,"It is helpful to include a description which provides additional guidance. For example, \u201cUse the + button to add items.\u201d"),(0,i.kt)("p",null,"It can also be a good idea to include buttons that start up adding content to the app. This is one place where an Overlay Button can be appropriate."),(0,i.kt)("p",null,"If an illustration empty page is used as part of the initial on-boarding experience, the image should be full-color, and the text should be positive in tone and make a relationship with the user by addressing them directly."),(0,i.kt)("p",null,"Symbolic empty pages should be subtle and not attract attention. Use a symbolic icon and a neutral tone for text."))}m.isMDXComponent=!0},4697:function(e,t,n){t.Z=n.p+"assets/images/empty_page-2cbe9c11e53a8f7de86b5e28c5e3ad82.png"}}]);