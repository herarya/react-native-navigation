(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(468)),i=["components"],s={id:"style-constants",title:"Constants",sidebar_label:"Constants"},c={unversionedId:"docs/style-constants",id:"version-7.11.2/docs/style-constants",isDocsHomePage:!1,title:"Constants",description:"React Native Navigation exposes a set of constants which can be used to get the dimensions of various navigation elements on the screen: StatusBar, TopBar and BottomTabs.",source:"@site/versioned_docs/version-7.11.2/docs/style-constants.mdx",slug:"/docs/style-constants",permalink:"/react-native-navigation/7.11.2/docs/style-constants",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.11.2/docs/style-constants.mdx",version:"7.11.2",sidebar_label:"Constants",sidebar:"version-7.11.2/docs",previous:{title:"Changing fonts",permalink:"/react-native-navigation/7.11.2/docs/style-fonts"},next:{title:"Community libraries",permalink:"/react-native-navigation/7.11.2/docs/community-libraries"}},l=[{value:"When are constants evaluated",id:"when-are-constants-evaluated",children:[]},{value:"API",id:"api",children:[]}],d={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"React Native Navigation exposes a set of constants which can be used to get the dimensions of various navigation elements on the screen: StatusBar, TopBar and BottomTabs."),Object(r.b)("h2",{id:"when-are-constants-evaluated"},"When are constants evaluated"),Object(r.b)("p",null,"Some of the values exposed through the constants API are actually evaluated only after the UI is created (",Object(r.b)("inlineCode",{parentName:"p"},"setRoot")," has been called) and therefore are not accessible through static getters."),Object(r.b)("p",null,"For example, if you need to get the height of the BottomTabs, you'll first need to have BottomTabs visible on the screen and only then retrieve their height via the constants API."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"We recommend you don't cache the actual constants object returned by ",Object(r.b)("inlineCode",{parentName:"p"},"await Navigation.constants()")," as it might not be accurate later on when, for example, a new root is set or orientation changes."))),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("p",null,"As explained above, constants are evaluated in native each time the API is invoked. That's why ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.constants()")," returns a promise and the use is as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const { Navigation } = require('react-native-navigation');\nconst {\n  statusBarHeight,\n  topBarHeight,\n  bottomTabsHeight\n} = await Navigation.constants();\n")))}u.isMDXComponent=!0},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||r;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);