(function(t){function e(e){for(var i,n,l=e[0],o=e[1],c=e[2],d=0,p=[];d<l.length;d++)n=l[d],s[n]&&p.push(s[n][0]),s[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,n=1;n<a.length;n++){var l=a[n];0!==s[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},s={app:0},r=[];function l(t){return o.p+"js/"+({about:"about",blogs:"blogs",capabilities:"capabilities","get-started":"get-started",talks:"talks",workshops:"workshops"}[t]||t)+"."+{about:"76c7f600",blogs:"4b3197dc",capabilities:"6284eb74","get-started":"dd411761",talks:"d10911e6",workshops:"d09441e3"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={about:1,blogs:1,capabilities:1,"get-started":1,talks:1,workshops:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var i="css/"+({about:"about",blogs:"blogs",capabilities:"capabilities","get-started":"get-started",talks:"talks",workshops:"workshops"}[t]||t)+"."+{about:"a66fb75d",blogs:"a66fb75d",capabilities:"a66fb75d","get-started":"a66fb75d",talks:"a66fb75d",workshops:"a66fb75d"}[t]+".css",s=o.p+i,r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var c=r[l],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===i||d===s))return e()}var p=document.getElementsByTagName("style");for(l=0;l<p.length;l++){c=p[l],d=c.getAttribute("data-href");if(d===i||d===s)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var i=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete n[t],u.parentNode.removeChild(u),a(r)},u.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(u)}).then(function(){n[t]=0}));var i=s[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise(function(e,a){i=s[t]=[e,a]});e.push(i[2]=r);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=l(t),c=function(e){d.onerror=d.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+i+": "+n+")");r.type=i,r.request=n,a[1](r)}s[t]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var u=d;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0880":function(t,e,a){"use strict";var i=a("b039"),n=a.n(i);n.a},"316b":function(t,e,a){t.exports=a.p+"img/directory-235562_1280.ebd10381.png"},"3c81":function(t,e,a){t.exports=a.p+"img/logos.bfd04c79.png"},"477c":function(t,e,a){t.exports=a.p+"img/web-app.34b7331d.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("my-header"),a("cv-content",{attrs:{id:"#main-content"}},[a("router-view")],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"cv-header bx--header",attrs:{role:"banner","data-header":"","aria-label":"label"}},[a("router-link",{staticClass:"cv-header-name bx--header__name router-link-exact-active router-link-active",staticStyle:{"font-size":"14px"},attrs:{role:"menuitem",to:"/"}},[a("span",{staticClass:"bx--text-truncate--end"},[t._v("Cloud Native Starter")])]),a("nav",{staticClass:"cv-header-nav bx--header__nav",attrs:{"aria-label":"label nav"}},[a("ul",{staticClass:"bx--header__menu-bar",attrs:{role:"menubar"}},[a("li",{staticClass:"cv-header-menu-item"},[a("router-link",{staticClass:"bx--header__menu-item",staticStyle:{"font-size":"14px"},attrs:{role:"menuitem",to:"/get-started"}},[a("span",{staticClass:"bx--text-truncate--end"},[t._v("Get Started")])])],1)])]),a("nav",{staticClass:"cv-header-nav bx--header__nav",attrs:{"aria-label":"label nav"}},[a("ul",{staticClass:"bx--header__menu-bar",attrs:{role:"menubar"}},[a("li",{staticClass:"cv-header-menu-item"},[a("router-link",{staticClass:"bx--header__menu-item",staticStyle:{"font-size":"14px"},attrs:{role:"menuitem",to:"/capabilities"}},[a("span",{staticClass:"bx--text-truncate--end"},[t._v("Capabilities")])])],1)])]),a("nav",{staticClass:"cv-header-nav bx--header__nav",attrs:{"aria-label":"label nav"}},[a("ul",{staticClass:"bx--header__menu-bar",attrs:{role:"menubar"}},[a("li",{staticClass:"cv-header-menu-item"},[a("router-link",{staticClass:"bx--header__menu-item",staticStyle:{"font-size":"14px"},attrs:{role:"menuitem",to:"/talks"}},[a("span",{staticClass:"bx--text-truncate--end"},[t._v("Talks")])])],1)])]),a("nav",{staticClass:"cv-header-nav bx--header__nav",attrs:{"aria-label":"label nav"}},[a("ul",{staticClass:"bx--header__menu-bar",attrs:{role:"menubar"}},[a("li",{staticClass:"cv-header-menu-item"},[a("router-link",{staticClass:"bx--header__menu-item",staticStyle:{"font-size":"14px"},attrs:{role:"menuitem",to:"/blogs"}},[a("span",{staticClass:"bx--text-truncate--end"},[t._v("Blogs")])])],1)])]),a("nav",{staticClass:"cv-header-nav bx--header__nav",attrs:{"aria-label":"label nav"}},[a("ul",{staticClass:"bx--header__menu-bar",attrs:{role:"menubar"}},[a("li",{staticClass:"cv-header-menu-item"},[a("router-link",{staticClass:"bx--header__menu-item",staticStyle:{"font-size":"14px"},attrs:{role:"menuitem",to:"/workshops"}},[a("span",{staticClass:"bx--text-truncate--end"},[t._v("Workshops")])])],1)])]),a("nav",{staticClass:"cv-header-nav bx--header__nav",attrs:{"aria-label":"label nav"}},[a("ul",{staticClass:"bx--header__menu-bar",attrs:{role:"menubar"}},[a("li",{staticClass:"cv-header-menu-item"},[a("router-link",{staticClass:"bx--header__menu-item",staticStyle:{"font-size":"14px"},attrs:{role:"menuitem",to:"/about"}},[a("span",{staticClass:"bx--text-truncate--end"},[t._v("About")])])],1)])])],1)},l=[],o={name:"MyHeader",components:{},methods:{onGithubClicked:function(){window.open("https://github.com/ibm/cloud-native-starter","_blank")}}},c=o,d=a("2877"),p=Object(d["a"])(c,r,l,!1,null,null,null),u=p.exports,b=u,g={name:"App",components:{MyHeader:b}},v=g,m=(a("5c0b"),Object(d["a"])(v,n,s,!1,null,null,null)),h=m.exports,_=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bx--grid bx--grid--full-width landing-page",staticStyle:{"padding-left":"0rem","padding-right":"0rem"}},[a("div",{staticClass:"bx--row landing-page__banner",staticStyle:{"padding-top":"4rem","padding-bottom":"3rem","padding-left":"2rem","padding-right":"2rem"}},[a("div",{staticClass:"bx--col-lg-16"},[a("h1",{staticClass:"landing-page__heading",staticStyle:{"font-size":"3rem","line-height":"normal"}},[t._v("Learn how to develop and operate Microservices")]),a("p",{staticClass:"landing-page__p",staticStyle:{"padding-top":"25px"}},[a("cv-button",{staticStyle:{"padding-right":"12px","font-size":"20px"},on:{click:t.onGetStartedClicked}},[t._v("Get Started")]),a("cv-button",{staticStyle:{"padding-right":"12px","margin-left":"20px","font-size":"20px"},attrs:{kind:"tertiary"},on:{click:t.onGithubClicked}},[t._v("Open Repo")])],1)])]),t._m(0),a("div",{staticClass:"bx--row landing-page__r2",staticStyle:{"background-color":"#f3f3f3","padding-top":"1rem","padding-bottom":"0rem","padding-left":"2rem","padding-right":"2rem"}},[a("div",{staticClass:"bx--col bx--no-gutter"},[a("div",{staticClass:"bx--grid bx--grid--no-gutter bx--grid--full-width"},[a("div",{staticClass:"bx--row landing-page__tab-content"},[t._m(1),a("div",{staticClass:"bx--col-md-4 bx--offset-lg-1 bx--col-lg-8"},[a("h1",{staticClass:"landing-page__subheading",staticStyle:{"font-size":"1.7rem"}},[t._v("Key Technologies")]),a("p",{staticClass:"landing-page__p"},[t._v("\n                Cloud Native Starter explains how to use the following technologies together:\n              ")]),a("p",{staticClass:"landing-page__p"},[a("cv-list",[a("cv-list-item",[t._v("\n                    -\n                    "),a("cv-link",{staticStyle:{"font-size":"inherit"},attrs:{href:"https://quarkus.io/"}},[t._v("Quarkus")])],1),a("cv-list-item",[t._v("\n                    -\n                    "),a("cv-link",{staticStyle:{"font-size":"inherit"},attrs:{href:"https://openliberty.io/"}},[t._v("Open Liberty")]),t._v(" /\n                    "),a("cv-link",{staticStyle:{"font-size":"inherit"},attrs:{href:"https://jakarta.ee/"}},[t._v("Eclipse JakartaEE")])],1),a("cv-list-item",[t._v("\n                    -\n                    "),a("cv-link",{staticStyle:{"font-size":"inherit"},attrs:{href:"https://microprofile.io/"}},[t._v("Eclipse MicroProfile")])],1),a("cv-list-item",[t._v("\n                    -\n                    "),a("cv-link",{staticStyle:{"font-size":"inherit"},attrs:{href:"https://www.eclipse.org/openj9//"}},[t._v("Eclipse OpenJ9")])],1),a("cv-list-item",[t._v("\n                    -\n                    "),a("cv-link",{staticStyle:{"font-size":"inherit"},attrs:{href:"https://kubernetes.io/"}},[t._v("Kubernetes")])],1),a("cv-list-item",[t._v("\n                    -\n                    "),a("cv-link",{staticStyle:{"font-size":"inherit"},attrs:{href:"https://istio.io/"}},[t._v("Istio")])],1)],1)],1)])])])])]),t._m(2),a("div",{staticClass:"bx--row landing-page__r2",staticStyle:{"background-color":"#f3f3f3","padding-top":"1rem","padding-bottom":"1rem","padding-left":"2rem","padding-right":"2rem"}},[a("div",{staticClass:"bx--col bx--no-gutter"},[a("div",{staticClass:"bx--grid bx--grid--no-gutter bx--grid--full-width"},[a("div",{staticClass:"bx--row landing-page__tab-content"},[t._m(3),a("div",{staticClass:"bx--col-md-4 bx--offset-lg-1 bx--col-lg-8"},[a("h1",{staticClass:"landing-page__subheading",staticStyle:{"font-size":"1.7rem"}},[t._v("Run Everywhere")]),a("p",{staticClass:"landing-page__p"},[t._v("Cloud Native Starter can be run on any Kubernetes implementation without vendor lock-in.")]),a("p",{staticClass:"landing-page__p"},[t._v("Documentation and scripts are provided to deploy the sample application to the following environments:")]),a("p",{staticClass:"landing-page__p"},[a("cv-list",[a("cv-list-item",[t._v("\n                    -\n                    "),a("cv-link",{staticStyle:{"font-size":"inherit"},attrs:{href:"https://kubernetes.io/docs/setup/learning-environment/minikube/"}},[t._v("Minikube")])],1),a("cv-list-item",[t._v("\n                    -\n                    "),a("cv-link",{staticStyle:{"font-size":"inherit"},attrs:{href:"https://www.ibm.com/cloud/container-service/"}},[t._v("IBM Cloud Kubernetes Service")])],1),a("cv-list-item",[t._v("\n                    -\n                    "),a("cv-link",{staticStyle:{"font-size":"inherit"},attrs:{href:"https://developers.redhat.com/products/codeready-containers/overview"}},[t._v("Red Hat CodeReady Containers")])],1),a("cv-list-item",[t._v("\n                    -\n                    "),a("cv-link",{staticStyle:{"font-size":"inherit"},attrs:{href:"https://www.ibm.com/cloud/openshift"}},[t._v("Red Hat Open Shift on IBM Cloud")])],1)],1)],1)])])])])]),t._m(4),a("div",{staticClass:"bx--row landing-page__r2",staticStyle:{"background-color":"#f3f3f3","padding-top":"1rem","padding-bottom":"1rem","padding-left":"2rem","padding-right":"2rem"}},[a("div",{staticClass:"bx--col bx--no-gutter"},[a("div",{staticClass:"bx--grid bx--grid--no-gutter bx--grid--full-width"},[a("div",{staticClass:"bx--row landing-page__tab-content"},[t._m(5),a("div",{staticClass:"bx--col-md-4 bx--offset-lg-1 bx--col-lg-8"},[a("h1",{staticClass:"landing-page__subheading",staticStyle:{"font-size":"1.7rem"}},[t._v("What's next?")]),a("p",{staticClass:"landing-page__p"},[t._v("Multiple roads lead to Rome. Choose yourself how you prefer to learn more about Cloud Native Starter.")]),a("p",{staticClass:"landing-page__p"},[a("cv-list",[a("cv-list-item",[t._v("\n                    - "),a("router-link",{staticClass:"cv-link bx--link",staticStyle:{"font-size":"20px"},attrs:{to:"/get-started"}},[t._v("Set up the sample application")])],1),a("cv-list-item",[t._v("\n                    - "),a("router-link",{staticClass:"cv-link bx--link",staticStyle:{"font-size":"20px"},attrs:{to:"/capabilities"}},[t._v("Learn about the capabilities")])],1),a("cv-list-item",[t._v("\n                    - "),a("router-link",{staticClass:"cv-link bx--link",staticStyle:{"font-size":"20px"},attrs:{to:"/talks"}},[t._v("Watch recorded talks")])],1),a("cv-list-item",[t._v("\n                    - "),a("router-link",{staticClass:"cv-link bx--link",staticStyle:{"font-size":"20px"},attrs:{to:"/blogs"}},[t._v("Read blogs")])],1),a("cv-list-item",[t._v("\n                    - "),a("router-link",{staticClass:"cv-link bx--link",staticStyle:{"font-size":"20px"},attrs:{to:"/get-started"}},[t._v("Get your hands dirty with workshops")])],1),a("cv-list-item",[t._v("\n                    - "),a("router-link",{staticClass:"cv-link bx--link",staticStyle:{"font-size":"20px"},attrs:{to:"/get-started"}},[t._v("Contact the Cloud Native Starter developers")])],1)],1)],1)])])])])]),a("div",{staticClass:"bx--row landing-page__r2",staticStyle:{"padding-top":"1rem","padding-bottom":"0rem","padding-left":"2rem","padding-right":"2rem"}},[a("div",{staticClass:"bx--col bx--no-gutter"},[a("div",{staticClass:"bx--grid bx--grid--no-gutter bx--grid--full-width"},[a("div",{staticClass:"bx--row landing-page__tab-content"},[a("div",{staticClass:"bx--col-md-8 bx--col-lg-14"},[a("cv-link",{staticStyle:{"font-size":"inherit"},attrs:{href:"https://github.com/ibm/cloud-native-starter"}},[t._v("Repo on GitHub")]),t._v("\n            |\n           "),a("cv-link",{staticStyle:{"font-size":"inherit"},attrs:{href:"https://www.ibm.com/cloud/container-service/"}},[t._v("IBM Privacy Statement")]),t._v("\n |\n           "),a("cv-link",{staticStyle:{"font-size":"inherit"},attrs:{href:"https://www.ibm.com/legal/us/en/"}},[t._v("Terms of Use")]),t._v("\n |\n           "),a("cv-link",{staticStyle:{"font-size":"inherit"},attrs:{href:"https://www.ibm.com/legal"}},[t._v("Imprint / Impressum")])],1)])])])])])},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bx--row landing-page__r2",staticStyle:{"padding-top":"3rem","padding-bottom":"1rem","padding-left":"2rem","padding-right":"2rem"}},[i("div",{staticClass:"bx--col bx--no-gutter"},[i("div",{staticClass:"bx--grid bx--grid--no-gutter bx--grid--full-width"},[i("div",{staticClass:"bx--row landing-page__tab-content"},[i("div",{staticClass:"bx--col-md-4 bx--col-lg-7"},[i("h1",{staticClass:"landing-page__subheading",staticStyle:{"font-size":"1.7rem"}},[t._v("What is Cloud Native Starter?")]),i("p",{staticClass:"landing-page__p"},[t._v("Cloud Native Starter is an open source project that demonstrates how to develop complete enterprise applications with Java and MicroProfile and how to operate them with Kubernetes and Istio.")]),i("p",{staticClass:"landing-page__p"},[t._v("\n                The project comes with a simple sample application that displays and manages articles.\n              ")])]),i("div",{staticClass:"bx--col-md-4 bx--offset-lg-1 bx--col-lg-8"},[i("img",{staticClass:"landing-page__illo",staticStyle:{border:"1px solid #ddd"},attrs:{src:a("477c")}})])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bx--col-md-4 bx--col-lg-7"},[i("img",{staticClass:"landing-page__illo",attrs:{src:a("3c81"),alt:"Carbon illustration"}}),i("p",{staticClass:"landing-page__p"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bx--row landing-page__r2",staticStyle:{"padding-top":"3rem","padding-bottom":"2rem","padding-left":"2rem","padding-right":"2rem"}},[i("div",{staticClass:"bx--col bx--no-gutter"},[i("div",{staticClass:"bx--grid bx--grid--no-gutter bx--grid--full-width"},[i("div",{staticClass:"bx--row landing-page__tab-content"},[i("div",{staticClass:"bx--col-md-4 bx--col-lg-7"},[i("h1",{staticClass:"landing-page__subheading",staticStyle:{"font-size":"1.7rem"}},[t._v("Core Services are based on Open Source")]),i("p",{staticClass:"landing-page__p"},[t._v("The core components and platforms used in the sample application are available under open source licenses. Additionally the Cloud Native Starter project is available under the Apache license.")]),i("p",{staticClass:"landing-page__p"},[t._v("The components which are not available as open source, are only optional and can be replaced with other implementations.")])]),i("div",{staticClass:"bx--col-md-4 bx--offset-lg-1 bx--col-lg-8"},[i("img",{staticClass:"landing-page__illo",staticStyle:{border:"1px solid #ddd"},attrs:{src:a("8b43")}})])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bx--col-md-4 bx--col-lg-7"},[i("img",{staticClass:"landing-page__illo",attrs:{src:a("57f3"),alt:"Carbon illustration"}}),i("p",{staticClass:"landing-page__p"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bx--row landing-page__r2",staticStyle:{"padding-top":"3rem","padding-bottom":"2rem","padding-left":"2rem","padding-right":"2rem"}},[i("div",{staticClass:"bx--col bx--no-gutter"},[i("div",{staticClass:"bx--grid bx--grid--no-gutter bx--grid--full-width"},[i("div",{staticClass:"bx--row landing-page__tab-content"},[i("div",{staticClass:"bx--col-md-4 bx--col-lg-7"},[i("h1",{staticClass:"landing-page__subheading",staticStyle:{"font-size":"1.7rem"}},[t._v("Easy First Time Experience")]),i("p",{staticClass:"landing-page__p"},[t._v("To minimize the time to get productive, several scripts are provided which make the setup as easy as possible.")]),i("p",{staticClass:"landing-page__p"},[t._v("Since finding the URLs of all services and tools can be challenging, a script displays all relevant endpoints.")])]),i("div",{staticClass:"bx--col-md-4 bx--offset-lg-1 bx--col-lg-8"},[i("img",{staticClass:"landing-page__illo",staticStyle:{border:"1px solid #ddd"},attrs:{src:a("a45a")}})])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bx--col-md-4 bx--col-lg-7"},[i("img",{staticClass:"landing-page__illo",attrs:{src:a("316b"),alt:"Carbon illustration"}}),i("p",{staticClass:"landing-page__p"})])}],C={name:"LandingPage",created:function(){},methods:{onGithubClicked:function(){window.open("https://github.com/ibm/cloud-native-starter","_blank")},onGetStartedClicked:function(){this.$router.push("get-started")}}},y=C,k=(a("0880"),Object(d["a"])(y,f,x,!1,null,null,null)),w=k.exports,S=w;i["default"].use(_["a"]);var E=new _["a"]({mode:"history",routes:[{path:"/",name:"landing-page",component:S},{path:"/get-started",name:"get-started",component:function(){return a.e("get-started").then(a.bind(null,"7c85"))}},{path:"/capabilities",name:"capabilities",component:function(){return a.e("capabilities").then(a.bind(null,"8dab"))}},{path:"/talks",name:"talks",component:function(){return a.e("talks").then(a.bind(null,"de16"))}},{path:"/blogs",name:"blogs",component:function(){return a.e("blogs").then(a.bind(null,"a8fd"))}},{path:"/workshops",name:"workshops",component:function(){return a.e("workshops").then(a.bind(null,"2081"))}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"1b5a"))}}]}),O=a("c8c2"),z=a.n(O),j=(a("96cf"),a("8e6e"),a("ac6a"),a("456d"),a("3b8d"),a("bd86")),P=a("522d"),A=a("efe7");function N(t){for(var e=1;e<arguments.length;e++)if(e%2){var a=null!=arguments[e]?arguments[e]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.forEach(function(e){Object(j["a"])(t,e,a[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}i["default"].use(P["a"]);var T=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN,L=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_HTTP||"https://api.github.com/graphql",R={httpEndpoint:L,wsEndpoint:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_WS,tokenName:T,persisting:!1,websocketsOnly:!1,ssr:!1,getAuth:function(t){return"Bearer ".concat(t)}};function M(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(A["createApolloClient"])(N({},R,{},t)),a=e.apolloClient,i=e.wsClient;a.wsClient=i;var n=new P["a"]({defaultClient:a,defaultOptions:{$query:{}},errorHandler:function(t){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",t.message)}});return n}i["default"].use(z.a),i["default"].config.productionTip=!1,new i["default"]({router:E,apolloProvider:M(),render:function(t){return t(h)}}).$mount("#app")},"57f3":function(t,e,a){t.exports=a.p+"img/platforms.5593f982.png"},"5c0b":function(t,e,a){"use strict";var i=a("5e27"),n=a.n(i);n.a},"5e27":function(t,e,a){},"8b43":function(t,e,a){t.exports=a.p+"img/architecture-2.a02e79e9.png"},a45a:function(t,e,a){t.exports=a.p+"img/urls.d3e64565.png"},b039:function(t,e,a){}});
//# sourceMappingURL=app.7cfb4ca1.js.map