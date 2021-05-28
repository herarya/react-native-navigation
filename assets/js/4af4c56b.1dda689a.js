(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(468)),r=n(474),c=["components"],l={id:"bottomTabs",title:"Bottom tabs",sidebar_label:"Bottom tabs"},b={unversionedId:"docs/bottomTabs",id:"version-7.11.2/docs/bottomTabs",isDocsHomePage:!1,title:"Bottom tabs",description:'Bottom tabs refers to a row of links, displayed at the bottom of the screen, and is referred to as "Tab Bar" in iOS and as "Bottom Navigation Bar" on Android. Usually these are intended to be used to switch between top-level content views with a single tap.',source:"@site/versioned_docs/version-7.11.2/docs/docs-bottomTabs.mdx",slug:"/docs/bottomTabs",permalink:"/react-native-navigation/7.11.2/docs/bottomTabs",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.11.2/docs/docs-bottomTabs.mdx",version:"7.11.2",sidebar_label:"Bottom tabs",sidebar:"version-7.11.2/docs",previous:{title:"Stack",permalink:"/react-native-navigation/7.11.2/docs/stack"},next:{title:"Side Menu",permalink:"/react-native-navigation/7.11.2/docs/sideMenu"}},s=[{value:"Creating bottom tabs",id:"creating-bottom-tabs",children:[{value:"Example",id:"example",children:[]}]},{value:"Selecting Tabs Programmatically",id:"selecting-tabs-programmatically",children:[{value:"Selecting a tab by index",id:"selecting-a-tab-by-index",children:[]},{value:"Selecting a tab by id",id:"selecting-a-tab-by-id",children:[]}]},{value:"Changing BottomTabs visibility",id:"changing-bottomtabs-visibility",children:[]},{value:"Updating tab options dynamically",id:"updating-tab-options-dynamically",children:[]},{value:"Controlling tab loading",id:"controlling-tab-loading",children:[]}],d={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Bottom tabs refers to a row of links, displayed at the bottom of the screen, and is referred to as "Tab Bar" in iOS and as "Bottom Navigation Bar" on Android. Usually these are intended to be used to switch between top-level content views with a single tap.'),Object(i.b)("h2",{id:"creating-bottom-tabs"},"Creating bottom tabs"),Object(i.b)("p",null,"BottomTabs provide flat navigation and access to up to five equally important top-level root destinations. While any type of layout can be displayed in a tab, typically, ",Object(i.b)("a",{parentName:"p",href:"stack"},"Stacks")," are used, since they allow for vertical navigation within a tab."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"Lets see how to create a simple BottomTabs layout. There are a few things to notice here:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Each child represents a tab on the screen."),Object(i.b)("li",{parentName:"ol"},"The root layout for each tab is a stack to allow for vertical navigation within the tab."),Object(i.b)("li",{parentName:"ol"},"Each stack declares ",Object(i.b)("inlineCode",{parentName:"li"},"bottomTab")," options which are used to configure the tab's text, icon, color etc.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"bottomTabs: {\n  id: 'BOTTOM_TABS_LAYOUT',\n  children: [\n    {\n      stack: {\n        id: 'HOME_TAB',\n        children: [\n          {\n            component: {\n              id: 'HOME_SCREEN',\n              name: 'HomeScreen'\n            }\n          }\n        ],\n        options: {\n          bottomTab: {\n            icon: require('./home.png')\n          }\n        }\n      }\n    },\n    {\n      stack: {\n        id: 'PROFILE_TAB',\n        children: [\n          {\n            component: {\n              id: 'PROFILE_SCREEN',\n              name: 'ProfileScreen'\n            }\n          }\n        ],\n        options: {\n          bottomTab: {\n            icon: require('./profile.png')\n          }\n        }\n      }\n    }\n  ]\n}\n")),Object(i.b)("p",null,"Once we run this code, our BottomTabs should look like this:"),Object(i.b)("img",{width:"40%",src:Object(r.a)("img/bottomTabs.png")}),Object(i.b)("h2",{id:"selecting-tabs-programmatically"},"Selecting Tabs Programmatically"),Object(i.b)("p",null,"Tabs can be selected programmatically by updating the ",Object(i.b)("inlineCode",{parentName:"p"},"currentTabIndex")," or ",Object(i.b)("inlineCode",{parentName:"p"},"currentTabId")," options."),Object(i.b)("p",null,"We'll use the BottomTabs layout showcased ",Object(i.b)("a",{parentName:"p",href:"bottomTabs#example"},"above")," to demonstrate programmatic tab selection."),Object(i.b)("h3",{id:"selecting-a-tab-by-index"},"Selecting a tab by index"),Object(i.b)("p",null,"The following mergeOptions command will select the second tab. We're passing the id of our BottomTabs layout, but we could also use the id of any of the child components, for example ",Object(i.b)("inlineCode",{parentName:"p"},"PROFILE_TAB")," or ",Object(i.b)("inlineCode",{parentName:"p"},"PROFILE_SCREEN"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {\n  bottomTabs: {\n    currentTabIndex: 1\n  }\n});\n")),Object(i.b)("h3",{id:"selecting-a-tab-by-id"},"Selecting a tab by id"),Object(i.b)("p",null,"Tabs can also be selected by id (",Object(i.b)("inlineCode",{parentName:"p"},"componentId"),"). This is particularly useful in cases where you don't know in which tab a screen is contained.\nFor example, if invoked from one of the child components, ",Object(i.b)("inlineCode",{parentName:"p"},"HOME_SCREEN")," or ",Object(i.b)("inlineCode",{parentName:"p"},"SETTINGS_SCREEN"),", the following merge command will select the tab containing the child."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"Navigation.mergeOptions(this.props.componentId, {\n  bottomTabs: {\n    currentTabId: this.props.componentId\n  }\n});\n")),Object(i.b)("h2",{id:"changing-bottomtabs-visibility"},"Changing BottomTabs visibility"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"visible")," property is used to control the BottomTab visibility. Visibility can be toggled dynamically using the ",Object(i.b)("inlineCode",{parentName:"p"},"mergeOptions")," command."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"Navigation.mergeOptions(componentId, {\n  bottomTabs: {\n    visible: false\n  },\n});\n")),Object(i.b)("p",null,"Visibility can also be changed when pushing screens."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"Navigation.push(componentId, {\n  component: {\n    name: 'pushedScreen',\n    options: {\n      bottomTabs: {\n        visible: false\n      }\n    }\n  }\n});\n")),Object(i.b)("h2",{id:"updating-tab-options-dynamically"},"Updating tab options dynamically"),Object(i.b)("p",null,"To update a tab option, like an icon, text or color, simply call ",Object(i.b)("inlineCode",{parentName:"p"},"mergeOptions")," with new options using the id of a component or layout contained in the tab you wish to update."),Object(i.b)("p",null,"For instance, in the example below we update the color of a specific tab:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"Navigation.mergeOptions(componentId, {\n  bottomTab: {\n    iconColor: 'red',\n    textColor: 'red'\n  },\n});\n")),Object(i.b)("h2",{id:"controlling-tab-loading"},"Controlling tab loading"),Object(i.b)("p",null,"By default, all tabs are mounted at the same time. This can have a negative impact on performance since screens which are not visible to the user are mounted."),Object(i.b)("p",null,"The order in which tabs are mounted can be configured with the ",Object(i.b)("inlineCode",{parentName:"p"},"tabsAttachMode")," option:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"together")," - all tabs are mounted at the same time, this is the default behavior."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"afterInitialTab")," - after initial tab is mounted, other tabs are mounted."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onSwitchToTab")," - initial tab is mounted, other tabs are mounted when the user navigates to them for the first time.")))}p.isMDXComponent=!0},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(r,".").concat(u)]||d[u]||p[u]||i;return n?o.a.createElement(m,c(c({ref:t},b),{},{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<i;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},474:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n(16),o=n(475);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,c=void 0!==r&&r,l=i.absolute,b=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+s:s}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},475:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);