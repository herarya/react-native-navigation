(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{456:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),o=(t(0),t(468)),l=["components"],b={},i={unversionedId:"api/options-migration",id:"api/options-migration",isDocsHomePage:!1,title:"options-migration",description:"Common Options",source:"@site/docs/api/options-migration.mdx",slug:"/api/options-migration",permalink:"/react-native-navigation/next/api/options-migration",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/api/options-migration.mdx",version:"current"},c=[{value:"navBarTextColor",id:"navbartextcolor",children:[]},{value:"navBarTextFontSize",id:"navbartextfontsize",children:[]},{value:"navBarTextFontFamily",id:"navbartextfontfamily",children:[]},{value:"navBarBackgroundColor",id:"navbarbackgroundcolor",children:[]},{value:"navBarCustomView",id:"navbarcustomview",children:[]},{value:"navBarClipToBounds",id:"navbarcliptobounds",children:[]},{value:"navBarComponentAlignment",id:"navbarcomponentalignment",children:[]},{value:"navBarCustomViewInitialProps",id:"navbarcustomviewinitialprops",children:[]},{value:"navBarButtonColor",id:"navbarbuttoncolor",children:[]},{value:"navBarHidden",id:"navbarhidden",children:[]},{value:"navBarTransparent",id:"navbartransparent",children:[]},{value:"drawUnderNavBar",id:"drawundernavbar",children:[]},{value:"drawUnderTabBar",id:"drawundertabbar",children:[]},{value:"tabBarHidden",id:"tabbarhidden",children:[]},{value:"statusBarHidden",id:"statusbarhidden",children:[]},{value:"statusBarTextColorScheme",id:"statusbartextcolorscheme",children:[]},{value:"navBarSubtitleColor",id:"navbarsubtitlecolor",children:[]},{value:"navBarSubtitleFontFamily",id:"navbarsubtitlefontfamily",children:[]},{value:"navBarSubtitleFontSize",id:"navbarsubtitlefontsize",children:[]},{value:"screenBackgroundColor",id:"screenbackgroundcolor",children:[]},{value:"orientation",id:"orientation",children:[]},{value:"disabledButtonColor",id:"disabledbuttoncolor",children:[]},{value:"navBarButtonFontSize",id:"navbarbuttonfontsize",children:[]},{value:"navBarLeftButtonFontSize",id:"navbarleftbuttonfontsize",children:[]},{value:"navBarLeftButtonColor",id:"navbarleftbuttoncolor",children:[]},{value:"navBarLeftButtonFontWeight",id:"navbarleftbuttonfontweight",children:[]},{value:"navBarRightButtonFontSize",id:"navbarrightbuttonfontsize",children:[]},{value:"navBarRightButtonColor",id:"navbarrightbuttoncolor",children:[]},{value:"navBarRightButtonFontWeight",id:"navbarrightbuttonfontweight",children:[]},{value:"modalPresentationStyle",id:"modalpresentationstyle",children:[{value:"Options supported on iOS",id:"options-supported-on-ios",children:[]},{value:"Options supported on Android",id:"options-supported-on-android",children:[]}]},{value:"navBarButtonFontFamily",id:"navbarbuttonfontfamily",children:[]},{value:"navBarHideOnScroll",id:"navbarhideonscroll",children:[]},{value:"navBarTranslucent",id:"navbartranslucent",children:[]},{value:"navBarNoBorder",id:"navbarnoborder",children:[]},{value:"navBarBlur",id:"navbarblur",children:[]},{value:"rootBackgroundImageName",id:"rootbackgroundimagename",children:[]},{value:"screenBackgroundImageName",id:"screenbackgroundimagename",children:[]},{value:"statusBarHideWithNavBar",id:"statusbarhidewithnavbar",children:[]},{value:"statusBarBlur",id:"statusbarblur",children:[]},{value:"statusBarAnimate",id:"statusbaranimate",children:[]},{value:"disabledBackGesture",id:"disabledbackgesture",children:[]},{value:"largeTitle",id:"largetitle",children:[]},{value:"topBarElevationShadowEnabled",id:"topbarelevationshadowenabled",children:[]},{value:"navBarTitleTextCentered",id:"navbartitletextcentered",children:[]},{value:"statusBarColor",id:"statusbarcolor",children:[]},{value:"navigationBarColor",id:"navigationbarcolor",children:[]},{value:"drawUnderStatusBar",id:"drawunderstatusbar",children:[]},{value:"navBarHeight",id:"navbarheight",children:[]},{value:"navBarTopPadding",id:"navbartoppadding",children:[]},{value:"topTabsHeight",id:"toptabsheight",children:[]},{value:"topBarBorderColor",id:"topbarbordercolor",children:[]},{value:"topBarBorderWidth",id:"topbarborderwidth",children:[]}],s={toc:c};function u(e){var n=e.components,t=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"common-options"},"Common Options"),Object(o.b)("h2",{id:"navbartextcolor"},"navBarTextColor"),Object(o.b)("p",null,"Title text color"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  title: {\n    color: 'red'\n  }\n}\n")),Object(o.b)("h2",{id:"navbartextfontsize"},"navBarTextFontSize"),Object(o.b)("p",null,"Title font size"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  title: {\n    fontSize: 18\n  }\n}\n")),Object(o.b)("h2",{id:"navbartextfontfamily"},"navBarTextFontFamily"),Object(o.b)("p",null,"Title font"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  title: {\n    fontFamily: 'Helvetica'\n  }\n}\n")),Object(o.b)("h2",{id:"navbarbackgroundcolor"},"navBarBackgroundColor"),Object(o.b)("p",null,"TopBar background color"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  background: {\n    color: 'red'\n  }\n}\n")),Object(o.b)("h2",{id:"navbarcustomview"},"navBarCustomView"),Object(o.b)("p",null,"Use a react view as the TopBar's background or use a React view instead of the textual title."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  background: {\n    component: {\n      name: 'example.CustomTopBarBackground'\n    }\n  },\n  title: {\n    component: {\n      name: 'example.CustomTopBarTitle'\n    }\n  }\n}\n")),Object(o.b)("h2",{id:"navbarcliptobounds"},"navBarClipToBounds"),Object(o.b)("p",null,"Restrict the navbar background color to the navbar, and do not flow behind the status bar."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  background: {\n    component: {\n      name: 'example.CustomTopBarBackground',\n      clipToBounds: true\n    }\n  },\n}\n")),Object(o.b)("h2",{id:"navbarcomponentalignment"},"navBarComponentAlignment"),Object(o.b)("p",null,"Align the React view used as the title"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  title: {\n    component: {\n      name: 'example.CustomTopBarTitle',\n      alignment: 'center' | 'fill'\n    }\n  }\n}\n")),Object(o.b)("h2",{id:"navbarcustomviewinitialprops"},"navBarCustomViewInitialProps"),Object(o.b)("p",null,"Initial props passed to the React component"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  background: {\n    component: {\n      name: 'example.CustomTopBarBackground',\n      passProps: {}\n    }\n  },\n  title: {\n    component: {\n      name: 'example.CustomTopBarTitle',\n      passProps: {}\n    }\n  }\n}\n")),Object(o.b)("h2",{id:"navbarbuttoncolor"},"navBarButtonColor"),Object(o.b)("p",null,"TopBar button color"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  rightButtons: [\n    {\n      color: 'red'\n    }\n  ],\n  leftButtons: [\n    {\n      color: 'red'\n    }\n  ],\n  backButton: {\n    color: 'red'\n  }\n}\n")),Object(o.b)("h2",{id:"navbarhidden"},"navBarHidden"),Object(o.b)("p",null,"TopBar visibility. When setting ",Object(o.b)("inlineCode",{parentName:"p"},"visible: false"),", you probably want to set ",Object(o.b)("inlineCode",{parentName:"p"},"drawBehind: true")," as well. Use ",Object(o.b)("inlineCode",{parentName:"p"},"animate: false")," to toggle visibility without animation."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  visible: false\n}\n")),Object(o.b)("h2",{id:"navbartransparent"},"navBarTransparent"),Object(o.b)("p",null,"Transparent TopBar. Set ",Object(o.b)("inlineCode",{parentName:"p"},"drawBehind: true")," to draw the screen behind the transparent TopBar."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  background: {\n    color: 'transparent'\n  }\n}\n")),Object(o.b)("h2",{id:"drawundernavbar"},"drawUnderNavBar"),Object(o.b)("p",null,"Draw the screen behind the TopBar, Useful when the TopBar is toggled or transparent"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  drawBehind: true\n}\n")),Object(o.b)("h2",{id:"drawundertabbar"},"drawUnderTabBar"),Object(o.b)("p",null,"Draw the screen behind the BottomTabs, Useful when toggling BottomTabs or when the BottomTabs are translucent."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"bottomTabs: {\n  drawBehind: true\n}\n")),Object(o.b)("h2",{id:"tabbarhidden"},"tabBarHidden"),Object(o.b)("p",null,"BottomTabs visibility."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"bottomTabs: {\n  visible: false\n}\n")),Object(o.b)("p",null,"The BottomTab's visibility can be toggled only on ",Object(o.b)("strong",{parentName:"p"},"Android")," using ",Object(o.b)("inlineCode",{parentName:"p"},"mergeOptions"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.mergeOptions(this.props.componentId, {\n  bottomTabs: {\n    visible: false\n  }\n});\n")),Object(o.b)("p",null,"On ",Object(o.b)("strong",{parentName:"p"},"iOS"),", BottomTab visibility can be changed only when pushing screens. This means that if you'd like to hide BottomTabs when pushing a screen, You'll need to set the property to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," in the options passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"push")," command or via the ",Object(o.b)("inlineCode",{parentName:"p"},"static options(passProps) {}")," api."),Object(o.b)("h2",{id:"statusbarhidden"},"statusBarHidden"),Object(o.b)("p",null,"StatusBar visibility. For android, also set ",Object(o.b)("inlineCode",{parentName:"p"},"drawBehind: true"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"statusBar: {\n  visible: false\n}\n")),Object(o.b)("h2",{id:"statusbartextcolorscheme"},"statusBarTextColorScheme"),Object(o.b)("p",null,"Theme of text and icons displayed in the StatusBar"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"statusBar: {\n  style: 'light' | 'dark'\n}\n")),Object(o.b)("h2",{id:"navbarsubtitlecolor"},"navBarSubtitleColor"),Object(o.b)("p",null,"Subtitle color"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  subtitle: {\n    color: 'red'\n  }\n}\n")),Object(o.b)("h2",{id:"navbarsubtitlefontfamily"},"navBarSubtitleFontFamily"),Object(o.b)("p",null,"Subtitle font"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  subtitle: {\n    fontFamily: 'Helvetica'\n  }\n}\n")),Object(o.b)("h2",{id:"navbarsubtitlefontsize"},"navBarSubtitleFontSize"),Object(o.b)("p",null,"Subtitle font size"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  subtitle: {\n    fontSize: 14\n  }\n}\n")),Object(o.b)("h2",{id:"screenbackgroundcolor"},"screenBackgroundColor"),Object(o.b)("p",null,"Screen color, visible before the actual React view is rendered"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"layout: {\n  backgroundColor: 'red'\n}\n")),Object(o.b)("h2",{id:"orientation"},"orientation"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"layout: {\n  orientation: ['portrait', 'landscape'] // An array of supported orientations\n}\n")),Object(o.b)("h2",{id:"disabledbuttoncolor"},"disabledButtonColor"),Object(o.b)("p",null,"Button color when ",Object(o.b)("inlineCode",{parentName:"p"},"enabled: false")," is used"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  rightButtons: [\n    {\n      disabledColor: 'grey'\n    }\n  ]\n}\n")),Object(o.b)("h2",{id:"navbarbuttonfontsize"},"navBarButtonFontSize"),Object(o.b)("p",null,"Button font size"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  rightButtons: [\n    {\n      fontSize: 13\n    }\n  ],\n  leftButtons: [\n    {\n      fontSize: 13\n    }\n  ]\n}\n")),Object(o.b)("h2",{id:"navbarleftbuttonfontsize"},"navBarLeftButtonFontSize"),Object(o.b)("p",null,"Left button font size"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  topBar: {\n    leftButtons: [\n      {\n        fontSize: 13\n      }\n    ]\n  }\n}\n")),Object(o.b)("h2",{id:"navbarleftbuttoncolor"},"navBarLeftButtonColor"),Object(o.b)("p",null,"Left button color"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  topBar: {\n    leftButtons: [\n      {\n        color: 'red'\n      }\n    ]\n  }\n}\n")),Object(o.b)("h2",{id:"navbarleftbuttonfontweight"},"navBarLeftButtonFontWeight"),Object(o.b)("p",null,"Left button font weight"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  topBar: {\n    leftButtons: [\n      {\n        weight: '300'\n      }\n    ]\n  }\n}\n")),Object(o.b)("h2",{id:"navbarrightbuttonfontsize"},"navBarRightButtonFontSize"),Object(o.b)("p",null,"Right button font size"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  leftButtons: [\n    {\n      fontSize: 13\n    }\n  ]\n}\n")),Object(o.b)("h2",{id:"navbarrightbuttoncolor"},"navBarRightButtonColor"),Object(o.b)("p",null,"Right button color"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  rightButtons: [\n    {\n      color: 'red'\n    }\n  ]\n}\n")),Object(o.b)("h2",{id:"navbarrightbuttonfontweight"},"navBarRightButtonFontWeight"),Object(o.b)("p",null,"Right button font weight"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  rightButtons: [\n    {\n      weight: '400'\n    }\n  ]\n}\n")),Object(o.b)("h2",{id:"modalpresentationstyle"},"modalPresentationStyle"),Object(o.b)("p",null,"Controls the behavior of screens displayed modally."),Object(o.b)("h3",{id:"options-supported-on-ios"},"Options supported on iOS"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"overCurrentContext")," - Content is displayed over the previous screen. Useful for ",Object(o.b)("strong",{parentName:"li"},"transparent modals")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"formSheet")," - Content is centered in the screen"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pageSheet")," -Content partially covers the underlying content"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"overFullScreen")," - Content covers the screen, without detaching previous content."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fullScreen")," - Content covers the screen, previous content is detached."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"popover")," - Content is displayed in a popover view.")),Object(o.b)("p",null,"More information on the different styles for iOS can be found on ",Object(o.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uimodalpresentationstyle"},"https://developer.apple.com/documentation/uikit/uimodalpresentationstyle")),Object(o.b)("h3",{id:"options-supported-on-android"},"Options supported on Android"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"overCurrentContext")," - Content is displayed over the previous screen. Useful for ",Object(o.b)("strong",{parentName:"li"},"transparent modals")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"none")," - Previous content is detached when the Modal's show animation ends")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  modalPresentationStyle: 'overCurrentContext'\n}\n")),Object(o.b)("h2",{id:"navbarbuttonfontfamily"},"navBarButtonFontFamily"),Object(o.b)("p",null,"Button font family"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  rightButtons: [\n    {\n      fontFamily: 'Helvetica'\n    }\n  ]\n}\n")),Object(o.b)("h1",{id:"ios-only"},"iOS only"),Object(o.b)("h2",{id:"navbarhideonscroll"},"navBarHideOnScroll"),Object(o.b)("p",null,"Hide TopBar when list is scrolled"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  hideOnScroll: true\n}\n")),Object(o.b)("h2",{id:"navbartranslucent"},"navBarTranslucent"),Object(o.b)("p",null,"Translucent TopBar, Setting ",Object(o.b)("inlineCode",{parentName:"p"},"drawBehind: true")," is required for this property to work as expected."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  drawBehind: true,\n  background: {\n    translucent: true\n  }\n}\n")),Object(o.b)("h2",{id:"navbarnoborder"},"navBarNoBorder"),Object(o.b)("p",null,"Remove TopBar border (hair line)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  noBorder: true\n}\n")),Object(o.b)("h2",{id:"navbarblur"},"navBarBlur"),Object(o.b)("p",null,"Blur the area behind the TopBar, Setting ",Object(o.b)("inlineCode",{parentName:"p"},"drawBehind: true")," and  topBar background ",Object(o.b)("inlineCode",{parentName:"p"},"transparent: true")," is required for this property to work as expected."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  drawBehind: true,\n  background: {\n    blur: true,\n    transparent: true\n  }\n}\n")),Object(o.b)("h2",{id:"rootbackgroundimagename"},"rootBackgroundImageName"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"iOS: name of image in Images.xcassets"),Object(o.b)("li",{parentName:"ul"},"Android: name of drawable")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  rootBackgroundImage: require('rootBackground.png')\n}\n")),Object(o.b)("h2",{id:"screenbackgroundimagename"},"screenBackgroundImageName"),Object(o.b)("p",null,"name of image in Images.xcassets"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  backgroundImage: require('background.png')\n}\n")),Object(o.b)("h2",{id:"statusbarhidewithnavbar"},"statusBarHideWithNavBar"),Object(o.b)("p",null,"Hide the StatusBar if the TopBar is also hidden"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"statusBar: {\n  hideWithTopBar: true\n}\n")),Object(o.b)("h2",{id:"statusbarblur"},"statusBarBlur"),Object(o.b)("p",null,"Blur the area behind the StatusBar"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"statusBar: {\n  blur: true\n}\n")),Object(o.b)("h2",{id:"statusbaranimate"},"statusBarAnimate"),Object(o.b)("p",null,"Animate between style changes of the StatusBar"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"statusBar: {\n  animate: true\n}\n")),Object(o.b)("h2",{id:"disabledbackgesture"},"disabledBackGesture"),Object(o.b)("p",null,"Disable the back (swipe) gesture used to pop screens"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  popGesture: false\n}\n")),Object(o.b)("h2",{id:"largetitle"},"largeTitle"),Object(o.b)("p",null,"Use iOS 11 large title"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"  topBar: {\n    largeTitle: {\n      visible: true,\n      fontSize: 30,\n      color: 'red',\n      fontFamily: 'Helvetica'\n    }\n  }\n")),Object(o.b)("h1",{id:"android-options"},"Android Options"),Object(o.b)("h2",{id:"topbarelevationshadowenabled"},"topBarElevationShadowEnabled"),Object(o.b)("p",null,"TopBar elevation in dp. Set this value to ",Object(o.b)("inlineCode",{parentName:"p"},"0")," to disable the TopBar's shadow."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  elevation: 0\n}\n")),Object(o.b)("h2",{id:"navbartitletextcentered"},"navBarTitleTextCentered"),Object(o.b)("p",null,"Title alignment"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  title: {\n    alignment: 'center'|'fill'\n  }\n}\n")),Object(o.b)("h2",{id:"statusbarcolor"},"statusBarColor"),Object(o.b)("p",null,"StatusBar color"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"statusBar: {\n  backgroundColor: 'red'\n}\n")),Object(o.b)("h2",{id:"navigationbarcolor"},"navigationBarColor"),Object(o.b)("p",null,"NavigationBar color"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"navigationBar: {\n  backgroundColor: 'red'\n}\n")),Object(o.b)("h2",{id:"drawunderstatusbar"},"drawUnderStatusBar"),Object(o.b)("p",null,"Draw content behind the StatusBar"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"statusBar: {\n  drawBehind: true\n}\n")),Object(o.b)("h2",{id:"navbarheight"},"navBarHeight"),Object(o.b)("p",null,"TopBar height in dp"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  height: 70\n}\n")),Object(o.b)("h2",{id:"navbartoppadding"},"navBarTopPadding"),Object(o.b)("p",null,"Content top margin"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"layout: {\n    topMargin: 26\n  }\n")),Object(o.b)("h2",{id:"toptabsheight"},"topTabsHeight"),Object(o.b)("p",null,"TopTabs height"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topTabs: {\n  height: 70\n}\n")),Object(o.b)("h2",{id:"topbarbordercolor"},"topBarBorderColor"),Object(o.b)("p",null,"TopBar border color"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  borderColor: 'red'\n}\n")),Object(o.b)("h2",{id:"topbarborderwidth"},"topBarBorderWidth"),Object(o.b)("p",null,"TopBar border height"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"topBar: {\n  borderHeight: 1.3\n}\n")),Object(o.b)("h1",{id:"unsupported-options"},"Unsupported options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"disabledSimultaneousGesture"),Object(o.b)("li",{parentName:"ul"},"statusBarTextColorSchemeSingleScreen"),Object(o.b)("li",{parentName:"ul"},"navBarButtonFontWeight"),Object(o.b)("li",{parentName:"ul"},"topBarShadowColor"),Object(o.b)("li",{parentName:"ul"},"topBarShadowOpacity"),Object(o.b)("li",{parentName:"ul"},"topBarShadowOffset"),Object(o.b)("li",{parentName:"ul"},"topBarShadowRadius"),Object(o.b)("li",{parentName:"ul"},"preferredContentSize"),Object(o.b)("li",{parentName:"ul"},"navBarSubTitleTextCentered"),Object(o.b)("li",{parentName:"ul"},"collapsingToolBarImage"),Object(o.b)("li",{parentName:"ul"},"collapsingToolBarCollapsedColor"),Object(o.b)("li",{parentName:"ul"},"navBarTextFontBold")))}u.isMDXComponent=!0},468:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return t?r.a.createElement(m,b(b({ref:n},c),{},{components:t})):r.a.createElement(m,b({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var b={};for(var i in n)hasOwnProperty.call(n,i)&&(b[i]=n[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<o;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);