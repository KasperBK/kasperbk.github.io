(function(t){function e(e){for(var o,n,l=e[0],i=e[1],c=e[2],u=0,p=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,l=1;l<a.length;l++){var i=a[l];0!==s[i]&&(o=!1)}o&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},s={app:0},r=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01c1":function(t,e,a){"use strict";a("5f22")},"122f":function(t,e,a){t.exports=a.p+"media/background.ecdc7c20.mp3"},"1edd":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("b-container",[e("b-row",[e("b-col",[e("b-row",[e("b-col",[e("h1",[t._v("MY PROFILE")])])],1)],1)],1),e("b-row",{staticClass:"spacer-headline"}),t._v(" "),e("b-row",{staticClass:"p-sm-1 p-3 mb-lg-5 mb-1",attrs:{"data-aos":"fade-up"}},[e("b-col",{staticClass:"card-headline-no-border"},[e("b-row",[e("b-col",{staticClass:"introduction-body"},[e("b-row",[e("b-col",{staticClass:"mt-2 mb-5 mb-md-1",attrs:{cols:"12",lg:"6"}},[e("img",{staticClass:"profile-picture",attrs:{src:a("e2eb")}})]),e("b-col",{staticClass:"mt-1",attrs:{cols:"12",lg:"6"}},[e("b-col",[e("h1",{staticClass:"border-bottom-line"},[t._v("PERSONAL INFO")])]),e("b-row",{attrs:{"data-aos":"fade-right","data-aos-duration":"500"}},[e("b-col",{attrs:{cols:"3"}},[e("p",[e("strong",[t._v("Name:")])])]),e("b-col",{attrs:{cols:"9"}},[e("p",[t._v(t._s(t.fullName))])])],1),e("b-row",{attrs:{"data-aos":"fade-right","data-aos-duration":"600"}},[e("b-col",{attrs:{cols:"3"}},[e("p",[e("strong",[t._v("Birthday:")])])]),e("b-col",{attrs:{cols:"9"}},[e("p",[t._v(t._s(t.birthDateStr))])])],1),e("b-row",{attrs:{"data-aos":"fade-right","data-aos-duration":"700"}},[e("b-col",{attrs:{cols:"3"}},[e("p",[e("strong",[t._v("Age:")])])]),e("b-col",{attrs:{cols:"9"}},[e("p",[t._v(t._s(t.age)+" Years Old")])])],1),e("b-row",{attrs:{"data-aos":"fade-right","data-aos-duration":"800"}},[e("b-col",{attrs:{cols:"3"}},[e("p",[e("strong",[t._v("Gender:")])])]),e("b-col",{attrs:{cols:"9"}},[e("p",[t._v(t._s(t.gender))])])],1),e("b-row",{attrs:{"data-aos":"fade-right","data-aos-duration":"900"}},[e("b-col",{attrs:{cols:"3"}},[e("p",[e("strong",[t._v("Languages:")])])]),e("b-col",{attrs:{cols:"9"}},[e("p",[t._v(t._s(t.knownLanguages))])])],1)],1)],1)],1)],1)],1)],1),e("b-row",{staticClass:"spacer-headline"}),t._v(" "),e("b-row",[e("b-col",{staticClass:"card-headline-no-border"},[e("b-row",[e("b-col",[e("h1",[t._v("EDUCATIONAL ATTAINMENT")])])],1)],1)],1),e("b-row",{staticClass:"p-sm-1 p-3 mt-5"},[e("b-col",t._l(t.education,(function(a){return e("b-row",{key:a.level,staticClass:"p-3 mt-1",attrs:{"data-aos":"fade-up"}},[e("b-col",{staticClass:"mb-5",attrs:{cols:"12"}},[e("b-row",[e("b-col",{attrs:{cols:"12",sm:"5"}},[e("img",{staticClass:"mt-sm-4",staticStyle:{"border-radius":"50%","max-width":"150px",height:"auto"},attrs:{src:t.getPic(a.imageUrl)}})]),e("b-col",{staticClass:"mt-4 mt-sm-1 text-center text-sm-left",attrs:{cols:"12",sm:"7"}},[e("p",{staticClass:"font-weight-bold"},[t._v(t._s(t.capital(a.level)))]),e("p",{staticClass:"font-weight-bold h4"},[t._v(t._s(a.name))]),e("p",[t._v(t._s(a.address))]),e("p",{staticStyle:{"margin-top":"-15px"},domProps:{innerHTML:t._s(a.details)}}),e("p",{staticStyle:{"margin-top":"-15px"}},[t._v(t._s(a.yearAttended))])])],1)],1)],1)})),1)],1)],1)},s=[],r={name:"Myself",data(){return{birthDate:"10/08/1998",age:0,fullName:"Keith Andrew S. Pacio",birthDateStr:"October 08, 1998",gender:"Male",religion:"Roman Catholic",maritalStatus:"Single",education:[{imageUrl:"assets/pup.png",level:"college",name:"Polytechnic University of the Philippines",address:"Anonas, Sta. Mesa, Manila City",details:'<p class="font-weight-bold">Bachelor of Science in Computer Engineering</p>',yearAttended:"2014-2019"},{imageUrl:"assets/ilis.png",level:"high school",name:"Isaac Lopez Integrated School",address:"Ilino Cruz Street, Vergara, Mandaluyong City",details:'<p class="font-weight-bold">7th Honorable Mentioned, Best in Mathematics, Best in Science</p>',yearAttended:"2010-2014"}],languages:["English","Tagalog"],imageUrl:"../assets/profile_img.jpg",profileImage:{center:!0,fluidGrow:!0,blank:!0,blankColor:"#bbb",width:600,height:400,class:"my-5"}}},mounted(){this.getAge()},methods:{getAge:function(){var t=new Date,e=new Date(this.birthDate),a=t.getFullYear()-e.getFullYear(),o=t.getMonth()-e.getMonth();(o<0||0===o&&t.getDate()<e.getDate())&&a--,this.age=a},capital:function(t=""){return t.toString().toUpperCase()},getPic(t){return a("a8ec")("./"+t)}},computed:{knownLanguages:function(){return this.languages.join(", ")}},watch:{}},n=r,l=(a("b6cc"),a("2877")),i=Object(l["a"])(n,o,s,!1,null,"a471303a",null);e["default"]=i.exports},2576:function(t,e,a){"use strict";a("6fe0")},"2f96":function(t,e,a){},"3a8b":function(t,e,a){},"3b36":function(t,e,a){t.exports=a.p+"img/pup.767d2321.png"},"3dc6":function(t,e,a){"use strict";a("2f96")},"3dfd":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavBar"),e("b-overlay",{staticClass:"mt-5",attrs:{show:t.show,rounded:"sm",variant:t.showVariant}},[e("div",{staticClass:"body"},[e("router-view")],1)]),e("Footer"),e("audio",{attrs:{id:"backgroundMusic",loop:""}},[e("source",{attrs:{src:a("122f"),type:"audio/mp3"}})])],1)},s=[],r=a("d000"),n=a("fd2d"),l={components:{NavBar:r["default"],Footer:n["default"]},data(){return{show:!0}},methods:{},beforeMount(){this.$store.commit("initialiseStore")},mounted(){this.show=!1},computed:{showVariant(){return this.$store.getters.showVariant}},watch:{$route(){this.show=!0,this.$nextTick(()=>{this.show=!1})}}},i=l,c=(a("9c9c"),a("2877")),d=Object(c["a"])(i,o,s,!1,null,null,null);e["default"]=d.exports},4360:function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),s=a("2f62");o["default"].use(s["a"]),e["default"]=new s["a"].Store({state:{darkMode:!1},getters:{showVariant:t=>t.darkMode?"dark":"light"},mutations:{initialiseStore(t){t.darkMode="true"==localStorage.getItem("darkMode")},switchTheme:(t,e)=>{t.darkMode=e,localStorage.setItem("darkMode",e)}},actions:{},modules:{}})},"56d7":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),s=a("3dfd"),r=a("a18c"),n=a("4360"),l=a("5f5b"),i=a("b1e0"),c=(a("f9e3"),a("2dd8"),a("bc3a")),d=a.n(c),u=a("130e"),p=a("f5af"),b=a.n(p);a("e829"),a("3f21");o["default"].config.productionTip=!1,o["default"].use(l["a"]),o["default"].use(i["a"]),o["default"].use(u["a"],d.a),new o["default"]({created(){b.a.init()},router:r["default"],store:n["default"],render:function(t){return t(s["default"])}}).$mount("#app")},"5f22":function(t,e,a){},"61cc":function(t,e,a){},"67bf":function(t,e,a){t.exports=a.p+"img/name.ccd1f124.png"},"6fe0":function(t,e,a){},7535:function(t,e,a){t.exports=a.p+"img/ilis.7fa52f4e.png"},"791e":function(t,e,a){t.exports=a.p+"img/visualizer.85ef3bc1.gif"},8337:function(t,e,a){},"833a":function(t,e,a){},"8ea7":function(t,e,a){t.exports=a.p+"media/background_old.d7c14c91.mp3"},"9c9c":function(t,e,a){"use strict";a("3a8b")},a18c:function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),s=a("8c4f"),r=a("d504"),n=a("1edd"),l=a("f126"),i=a("ad83");o["default"].use(s["a"]);const c=[{path:"/",name:"Index",component:r["default"]},{path:"/myself",name:"My Profile",component:n["default"]},{path:"/work",name:"Work Experiences",component:l["default"]},{path:"/skills",name:"Skills & Hobbies",component:i["default"]}],d=new s["a"]({routes:c});e["default"]=d},a579:function(t,e,a){"use strict";a("61cc")},a8ec:function(t,e,a){var o={"./App":"3dfd","./App.vue":"3dfd","./assets/background.mp3":"122f","./assets/background_old.mp3":"8ea7","./assets/ilis.png":"7535","./assets/logo.png":"cf05","./assets/name.png":"67bf","./assets/profile_img.jpg":"e2eb","./assets/pup.png":"3b36","./assets/sample-pic.jpg":"cf60","./assets/visualizer.gif":"791e","./components/Footer":"fd2d","./components/Footer.vue":"fd2d","./components/HelloWorld":"fdab","./components/HelloWorld.vue":"fdab","./components/NavBar":"d000","./components/NavBar.vue":"d000","./main":"56d7","./main.js":"56d7","./router":"a18c","./router/":"a18c","./router/index":"a18c","./router/index.js":"a18c","./store":"4360","./store/":"4360","./store/index":"4360","./store/index.js":"4360","./views/Index":"d504","./views/Index.vue":"d504","./views/Myself":"1edd","./views/Myself.vue":"1edd","./views/Skills":"ad83","./views/Skills.vue":"ad83","./views/Work":"f126","./views/Work.vue":"f126"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=r,t.exports=s,s.id="a8ec"},ad83:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("b-container",[e("p",{staticClass:"h1"},[t._v("Coming Soon!")])])},s=[],r={name:"Skills",data(){return{}},mounted(){},methods:{},computed:{},watch:{}},n=r,l=(a("c947"),a("2877")),i=Object(l["a"])(n,o,s,!1,null,"24ed8d3c",null);e["default"]=i.exports},b6cc:function(t,e,a){"use strict";a("8337")},c947:function(t,e,a){"use strict";a("f8b4")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},cf60:function(t,e,a){t.exports=a.p+"img/sample-pic.bfcda7e4.jpg"},d000:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("b-navbar",{attrs:{toggleable:"lg",type:t.themeMode?"dark":"light",variant:"transparent"}},[e("b-navbar-brand",{attrs:{to:{path:"/"}}},[e("img",{staticClass:"d-inline-block align-top navbar-img",attrs:{src:a("67bf"),alt:"Logo"}})]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{to:{path:"/"}}},[t._v("Home")]),e("b-nav-item-dropdown",{attrs:{text:"About",right:""}},[e("b-dropdown-item",{attrs:{to:{path:"/myself"}}},[t._v("My Profile")]),e("b-dropdown-item",{attrs:{to:{path:"/work"}}},[t._v("Work Experience")]),e("b-dropdown-item",{attrs:{to:{path:"/skills"}}},[t._v("My Skills")])],1),e("b-nav-item",{attrs:{to:{path:"/contact"}}},[t._v("Contact Me")])],1),e("b-navbar-nav",{staticClass:"ml-auto"},[e("div",[e("div",{staticClass:"h2 mb-0 d-inline"},[e("b-icon-sun")],1),e("label",{staticClass:"themeSwitch ml-1 mr-1 h3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.themeMode,expression:"themeMode"}],staticClass:"inputSwitch",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.themeMode)?t._i(t.themeMode,null)>-1:t.themeMode},on:{change:function(e){var a=t.themeMode,o=e.target,s=!!o.checked;if(Array.isArray(a)){var r=null,n=t._i(a,r);o.checked?n<0&&(t.themeMode=a.concat([r])):n>-1&&(t.themeMode=a.slice(0,n).concat(a.slice(n+1)))}else t.themeMode=s}}}),e("span",{staticClass:"slider round spanSwitch"})]),e("div",{staticClass:"h2 mb-0 d-inline"},[e("b-icon-moon")],1)])])],1)],1)},s=[],r={name:"NavBar",data(){return{themeMode:!1,root:""}},props:{username:String,role:String},mounted:function(){this.root=document.documentElement,this.themeMode=this.$store.state.darkMode,this.changeTheme()},methods:{changeTheme(){this.themeMode?(this.root.style.setProperty("--bgColor","#191919"),this.root.style.setProperty("--fColor","rgb(238, 237, 237)"),this.root.style.setProperty("--btnColor","purple")):(this.root.style.setProperty("--bgColor","rgb(238, 237, 237)"),this.root.style.setProperty("--fColor","#191919"),this.root.style.setProperty("--btnColor","purple"))}},watch:{themeMode:function(t){this.$store.commit("switchTheme",t),this.changeTheme()}}},n=r,l=(a("a579"),a("2877")),i=Object(l["a"])(n,o,s,!1,null,null,null);e["default"]=i.exports},d504:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("b-container",[e("b-row",[e("b-col",{staticClass:"text-headline"},[e("b-row",[e("b-col",{attrs:{lg:"4",cols:"12"}},[e("p",[t._v("ASPIRE.")])]),e("b-col",{attrs:{lg:"4",cols:"12"}},[e("p",[t._v("ADAPT.")])]),e("b-col",{attrs:{lg:"4",cols:"12"}},[e("p",[t._v("ACHIEVE.")])])],1)],1)],1),e("b-row",{staticClass:"spacer-headline"}),t._v(" "),e("b-row",{staticClass:"p-sm-1 p-3",attrs:{"data-aos":"fade-up"}},[e("b-col",{staticClass:"p-sm-4 p-2 order-md-0 order-1",attrs:{md:"6",cols:"12",lg:"5"}},[e("b-row",[e("b-col",{staticClass:"visualizer-holder"},[e("b-overlay",{attrs:{show:t.show,variant:t.showVariant},on:{click:t.playAudio},scopedSlots:t._u([{key:"overlay",fn:function(){return[e("div",{staticClass:"text-center"},[e("p",{attrs:{id:"cancel-label"}},[t._v("Press here to play music")]),e("b-icon",{attrs:{icon:"music-note-beamed","font-scale":"3"}})],1)]},proxy:!0}])},[e("canvas",{ref:"visualizer",staticClass:"visualizer-img",attrs:{id:"visualizer"}})])],1)],1),e("b-row",[e("b-col",[e("div",{staticClass:"d-flex justify-content-center visualizer-text"},[e("div",{staticClass:"mr-2 mt-1"},[e("button",{staticClass:"btn pt-2",staticStyle:{"background-color":"var(--fColor)",color:"var(--bgColor)","border-radius":"10px",border:"2px solid var(--btnColor)"},on:{click:t.stopAudio}},[e("b-icon",{attrs:{icon:t.playIcon}})],1)]),e("div",[e("p",[t._v("© Song Copyright 2019 : "),e("a",{staticClass:"hyperlink",attrs:{href:"https://www.youtube.com/watch?v=pWAP7fIwGnI",_target:"blank"}},[t._v('"Dawn" by @Sappheiros 🇺🇸')])])])])])],1)],1),e("b-col",{staticClass:"card-headline p-1 p-sm-3 order-md-1 order-0",attrs:{md:"6",cols:"12",lg:"7"}},[e("b-row",[e("b-col",[e("h1",{staticClass:"border-bottom-line text-center text-md-right"},[t._v("INTRODUCTION")])])],1),e("b-row",[e("b-col",{staticClass:"introduction-body text-left"},[e("p",[t._v("Hi! My Name is "),e("strong",[t._v("Keith Andrew Pacio")]),t._v(". I'm most commonly called "),e("strong",[t._v("Kasper")]),t._v(" by my colleagues.")]),e("p",[t._v("I'm a Computer Engineer that can work on both Software and Hardware Technologies.")]),e("p",[t._v("I make Web Applications using PHP and JS technology and frameworks! I'm planning to expand my literacy in other languages. ")]),e("p",[t._v("I enjoy listening to Techno Music and enjoy playing Rhythm Games. I also love programming as a hobby! ")]),e("p",[e("strong",[t._v("Well then, let's begin. Thank you for your valuable time!")])])])],1)],1)],1),e("b-row",{staticClass:"spacer-headline"}),t._v(" "),e("b-row",[e("b-col",[e("b-row",[e("b-col",[e("h1",[t._v("PAGES")])])],1)],1)],1),e("b-row",{staticClass:"card-margin p-sm-1 p-3",attrs:{"data-aos":"fade-right"}},[e("b-col",{staticClass:"card-headline"},[e("b-row",[e("b-col",{attrs:{cols:"12",md:"3"}},[e("b-icon-person-circle",{staticClass:"icon-logo"})],1),e("b-col",{attrs:{cols:"12",md:"9"}},[e("b-row",[e("b-col",[e("h1",{staticClass:"border-bottom-line text-center text-md-left"},[t._v("Profile")]),e("p",[t._v(" Get to know more about myself by reading an introduction about my life. Let me show you who I really am and where it all really started. ")])])],1),e("b-row",{staticClass:"hyperlink"},[e("router-link",{attrs:{to:"/myself"}},[t._v("Go to Page >>")])],1)],1)],1)],1)],1),e("b-row",{staticClass:"spacer-headline-no-border"}),t._v(" "),e("b-row",{staticClass:"card-margin p-sm-1 p-3",attrs:{"data-aos":"fade-left"}},[e("b-col",{staticClass:"card-headline"},[e("b-row",[e("b-col",{staticClass:"order-md-0 order-1",attrs:{cols:"12",md:"9"}},[e("b-row",[e("b-col",[e("h1",{staticClass:"border-bottom-line text-md-right text-center"},[t._v("Work Experiences")]),e("p",[t._v(" Interested about my past jobs? Here! I'll show you the list of all my past and current ones. ")])])],1),e("b-row",{staticClass:"hyperlink"},[e("router-link",{attrs:{to:"/work"}},[t._v("Go to Page >>")])],1)],1),e("b-col",{staticClass:"order-md-1 order-0",attrs:{cols:"12",md:"3"}},[e("b-icon-person-badge",{staticClass:"icon-logo"})],1)],1)],1)],1),e("b-row",{staticClass:"spacer-headline-no-border"}),t._v(" "),e("b-row",{staticClass:"card-margin p-sm-1 p-3",attrs:{"data-aos":"fade-right"}},[e("b-col",{staticClass:"card-headline"},[e("b-row",[e("b-col",{attrs:{cols:"12",md:"3"}},[e("b-icon-person-lines-fill",{staticClass:"icon-logo"})],1),e("b-col",{attrs:{cols:"12",md:"9"}},[e("b-row",[e("b-col",[e("h1",{staticClass:"border-bottom-line text-md-left text-center"},[t._v("Skills & Hobbies")]),e("p",[t._v(" Check the list and see if I'm qualified. I'll explain every skill that I know and I'll also share some of my hobbies to boot! ")])])],1),e("b-row",{staticClass:"hyperlink"},[e("router-link",{attrs:{to:"/skills"}},[t._v("Go to Page >>")])],1)],1)],1)],1)],1)],1)},s=[],r=a("3f21"),n=a.n(r),l={name:"Index",data(){return{show:!0,playing:!1}},mounted(){this.createWave(),document.getElementById("backgroundMusic").paused||(this.show=!1,this.playing=!0)},methods:{createWave(){let t=getComputedStyle(document.body).getPropertyValue("--fColor"),e=getComputedStyle(document.body).getPropertyValue("--btnColor"),a=new n.a,o={type:"shockwave",stroke:2,colors:[e,t,e,t]};a.fromElement("backgroundMusic","visualizer",o),this.$refs.visualizer.click()},playAudio(){document.getElementById("backgroundMusic").paused&&(document.getElementById("backgroundMusic").play(),document.getElementById("backgroundMusic").volume=.1,this.show=!1,this.playing=!0)},stopAudio(){this.playing?(document.getElementById("backgroundMusic").pause(),document.getElementById("backgroundMusic").currentTime=0,this.show=!0,this.playing=!1):this.playAudio()}},computed:{showVariant(){return this.$store.getters.showVariant},playIcon(){return this.playing?"stop-circle-fill":"play-circle-fill"}},watch:{showVariant(){this.createWave()}}},i=l,c=(a("e7fa"),a("2877")),d=Object(c["a"])(i,o,s,!1,null,"efe33632",null);e["default"]=d.exports},e2eb:function(t,e,a){t.exports=a.p+"img/profile_img.30a13c35.jpg"},e7fa:function(t,e,a){"use strict";a("833a")},f126:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("b-container",[e("p",{staticClass:"h1"},[t._v("Coming Soon!")])])},s=[],r={name:"Work",data(){return{}},mounted(){},methods:{},computed:{},watch:{}},n=r,l=(a("2576"),a("2877")),i=Object(l["a"])(n,o,s,!1,null,"35962fe6",null);e["default"]=i.exports},f8b4:function(t,e,a){},fd2d:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-footer font-small blue pt-4"},[e("a",{staticClass:"float",on:{click:function(e){return e.preventDefault(),t.scrollToTop()}}},[e("p",{staticClass:"my-float"},[e("b-icon-arrow-up-circle-fill",{attrs:{animation:"cylon-vertical"}})],1)]),e("div",{staticClass:"footer-copyright text-center py-3"},[t._v("© 2021 Copyright: "),e("router-link",{attrs:{to:"/"}},[t._v(" Kasper")])],1)])},s=[],r={name:"Footer",methods:{scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})}}},n=r,l=(a("3dc6"),a("2877")),i=Object(l["a"])(n,o,s,!1,null,null,null);e["default"]=i.exports},fdab:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._m(0),e("h3",[t._v("Installed CLI Plugins")]),t._m(1),e("h3",[t._v("Essential Links")]),t._m(2),e("h3",[t._v("Ecosystem")]),t._m(3)])},s=[function(){var t=this,e=t._self._c;return e("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),e("br"),t._v(" check out the "),e("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])])])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),e("li",[e("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),e("li",[e("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),e("li",[e("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],r={name:"HelloWorld",props:{msg:String}},n=r,l=(a("01c1"),a("2877")),i=Object(l["a"])(n,o,s,!1,null,"df2aa6b2",null);e["default"]=i.exports}});
//# sourceMappingURL=app.f75c8f7a.js.map