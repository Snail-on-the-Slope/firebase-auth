(function(e){function t(t){for(var n,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==c[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},c={app:0},o=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0aa3d7f6":"455fca5c","chunk-10b86dd9":"01f8dadc","chunk-2d0d7699":"e74445c0","chunk-2d21a3d2":"0ddd9a3a","chunk-2e6b48b8":"ada3887a","chunk-447cc450":"3d9191b8","chunk-53c8ec65":"8d654788","chunk-5f4ad635":"709154f1","chunk-c420df12":"f1361cac"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-447cc450":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-0aa3d7f6":"31d6cfe0","chunk-10b86dd9":"31d6cfe0","chunk-2d0d7699":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2e6b48b8":"31d6cfe0","chunk-447cc450":"faccf3a1","chunk-53c8ec65":"31d6cfe0","chunk-5f4ad635":"31d6cfe0","chunk-c420df12":"31d6cfe0"}[e]+".css",c=s.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],f.parentNode.removeChild(f),r(o)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-crm/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2532:function(e){e.exports=JSON.parse('{"ProfileTitle":"Профиль"}')},"56d7":function(e,t,r){"use strict";r.r(t);r("4de4"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("1dce"),c=r.n(a),o=r("8832"),i=r.n(o),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r(e.layout,{tag:"component"},[r("router-view")],1)],1)},u=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grey darken-1 empty-layout"},[r("router-view")],1)},d=[],f=r("b444"),p={computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){console.log(e),this.$error(f["a"][e.code]||"Что-то пошло не так")}}},h=p,m=r("2877"),v=Object(m["a"])(h,l,d,!1,null,null,null),g=v.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("Loader"):r("div",{staticClass:"app-main-layout"},[r("Navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),r("Sidebar",{model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),r("main",{staticClass:"app-content",class:{full:!e.isOpen}},[r("div",{staticClass:"app-page"},[r("router-view")],1)]),r("div",{staticClass:"fixed-action-btn"},[r("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Создать новую запись",expression:"'Создать новую запись'"}],staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[r("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)],1)},w=[],y=(r("b64b"),r("96cf"),r("1da1")),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar orange lighten-1"},[r("div",{staticClass:"nav-wrapper"},[r("div",{staticClass:"navbar-left"},[r("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[r("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),r("span",{staticClass:"black-text"},[e._v(e._s(e._f("date")(e.date,"datetime")))])]),r("ul",{staticClass:"right hide-on-small-and-down"},[r("li",[r("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v(" "+e._s(e.name)+" "),r("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),r("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[r("li",[r("router-link",{staticClass:"black-text",attrs:{to:"/profile"}},[r("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v("Профиль ")])],1),r("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),r("li",[r("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[r("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v("Выйти ")])])])])])])])},x=[],O=(r("b0c0"),{data:function(){return{date:new Date,interval:null,dropdown:null}},methods:{logout:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push("/login?message=logout");case 3:case"end":return t.stop()}}),t)})))()}},computed:{name:function(){return this.$store.getters.info.name}},mounted:function(){var e=this;this.interval=setInterval((function(){e.date=new Date}),1e3),this.dropdown=M.Dropdown.init(this.$refs.dropdown,{constrainWidth:!1})},beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy}}),_=O,j=Object(m["a"])(_,k,x,!1,null,null,null),C=j.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,(function(t){return r("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[r("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},E=[],U={props:["value"],data:function(){return{links:[{title:"Счет",url:"/",exact:!0},{title:"История",url:"/history"},{title:"Планирование",url:"/planning"},{title:"Новая запись",url:"/record"},{title:"Категории",url:"/categories"}]}}},$=U,I=Object(m["a"])($,R,E,!1,null,null,null),S=I.exports,P={name:"main-layout",data:function(){return{isOpen:!0,loading:!0}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Object.keys(e.$store.getters.info).length){t.next=3;break}return t.next=3,e.$store.dispatch("fetchInfo");case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},components:{Navbar:C,Sidebar:S},computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){console.log(e),this.$error(f["a"][e.code]||"Что-то пошло не так")}}},A=P,N=Object(m["a"])(A,b,w,!1,null,null,null),D=N.exports,T={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:g,MainLayout:D}},L=T,B=(r("5c0b"),Object(m["a"])(L,s,u,!1,null,null,null)),z=B.exports,F=r("9483");Object(F["a"])("".concat("/vue-crm/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("45fc"),r("d3b7");var H=r("8c4f"),J=r("59ca"),K=r.n(J);n["a"].use(H["a"]);var q=[{path:"/",name:"Home",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d21a3d2").then(r.bind(null,"bb51"))}},{path:"/login",name:"Lodin",meta:{layout:"empty"},component:function(){return r.e("chunk-5f4ad635").then(r.bind(null,"a55b"))}},{path:"/register",name:"Register",meta:{layout:"empty"},component:function(){return r.e("chunk-c420df12").then(r.bind(null,"73cf"))}},{path:"/categories",name:"Categories",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-10b86dd9").then(r.bind(null,"58c2"))}},{path:"/detail/:id",name:"DetailRecord",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d0d7699").then(r.bind(null,"7769"))}},{path:"/history",name:"History",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2e6b48b8").then(r.bind(null,"e4bb"))}},{path:"/planning",name:"Planning",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-0aa3d7f6").then(r.bind(null,"6859"))}},{path:"/profile",name:"Profile",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-447cc450").then(r.bind(null,"c66d"))}},{path:"/record",name:"Record",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-53c8ec65").then(r.bind(null,"43ef"))}}],W=new H["a"]({mode:"history",base:"/vue-crm/",routes:q});W.beforeEach((function(e,t,r){var n=K.a.auth().currentUser,a=e.matched.some((function(e){return e.meta.auth}));a&&!n?r("/login?message=login"):r()}));var G=W,Z=r("2f62"),Q={actions:{login:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.dispatch,n=e.commit,a=t.email,c=t.password,r.prev=2,r.next=5,K.a.auth().signInWithEmailAndPassword(a,c);case 5:r.next=11;break;case 7:throw r.prev=7,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},register:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function r(){var n,a,c,o,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,c=t.email,o=t.password,i=t.name,r.prev=2,r.next=5,K.a.auth().createUserWithEmailAndPassword(c,o);case 5:return r.next=7,n("getUid");case 7:return s=r.sent,r.next=10,K.a.database().ref("/users/".concat(s,"/info")).set({bill:1e4,name:i});case 10:r.next=16;break;case 12:throw r.prev=12,r.t0=r["catch"](2),a("setError",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},getUid:function(){var e=K.a.auth().currentUser;return e?e.uid:null},logout:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,K.a.auth().signOut();case 3:r("clearInfo");case 4:case"end":return t.stop()}}),t)})))()}}},V=r("5530"),X={state:{info:{}},mutations:{setInfo:function(e,t){e.info=t},clearInfo:function(e){e.info={}}},actions:{fetchInfo:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var r,n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,K.a.database().ref("/users/".concat(a,"/info")).once("value");case 7:c=t.sent.val(),n("setInfo",c),t.next=15;break;case 11:throw t.prev=11,t.t0=t["catch"](1),n("setError",t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()},updateInfo:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function r(){var n,a,c,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,c=e.getters,r.prev=1,r.next=4,n("getUid");case 4:return o=r.sent,i=Object(V["a"])(Object(V["a"])({},c.info),t),r.next=8,K.a.database().ref("/users/".concat(o,"/info")).update(i);case 8:a("setInfo",i),r.next=15;break;case 11:throw r.prev=11,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()}},getters:{info:function(e){return e.info}}},Y=(r("d81d"),{actions:{fetchCategories:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var r,n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.dispatch,t.prev=1,t.next=4,n("getUid");case 4:return a=t.sent,t.next=7,K.a.database().ref("/users/".concat(a,"/categories")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return c=t.t0,t.abrupt("return",Object.keys(c).map((function(e){return Object(V["a"])(Object(V["a"])({},c[e]),{},{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),r("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},createCategory:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function r(){var n,a,c,o,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,c=t.title,o=t.limit,r.prev=2,r.next=5,a("getUid");case 5:return i=r.sent,r.next=8,K.a.database().ref("/users/".concat(i,"/categories")).push({title:c,limit:o});case 8:return s=r.sent,r.abrupt("return",{title:c,limit:o,id:s.key});case 12:throw r.prev=12,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},updateCategory:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function r(){var n,a,c,o,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,c=t.id,o=t.title,i=t.limit,r.prev=2,r.next=5,a("getUid");case 5:return s=r.sent,r.next=8,K.a.database().ref("/users/".concat(s,"/categories")).child(c).update({title:o,limit:i});case 8:r.next=14;break;case 10:throw r.prev=10,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},fetchCategoryById:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function r(){var n,a,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,r.prev=1,r.next=4,a("getUid");case 4:return c=r.sent,r.next=7,K.a.database().ref("/users/".concat(c,"/categories")).child(t).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return o=r.t0,r.abrupt("return",Object(V["a"])(Object(V["a"])({},o),{},{id:t}));case 14:throw r.prev=14,r.t1=r["catch"](1),n("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()}}}),ee={actions:{createRecord:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return c=r.sent,r.next=7,K.a.database().ref("/users/".concat(c,"/records")).push(t);case 7:return r.abrupt("return",r.sent);case 10:throw r.prev=10,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))()},fetchRecords:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var r,n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,K.a.database().ref("/users/".concat(a,"/records")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return c=t.t0,t.abrupt("return",Object.keys(c).map((function(e){return Object(V["a"])(Object(V["a"])({},c[e]),{},{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),n("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},fetchRecordById:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function r(){var n,a,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return c=r.sent,r.next=7,K.a.database().ref("/users/".concat(c,"/records")).child(t).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return o=r.t0,r.abrupt("return",Object(V["a"])(Object(V["a"])({},o),{},{id:t}));case 14:throw r.prev=14,r.t1=r["catch"](1),a("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()}}};n["a"].use(Z["a"]);var te=new Z["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},getters:{error:function(e){return e.error}},actions:{fetchCurrency:function(){return Object(y["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="35b46a25c0613fcf7fab0f5d23e18f03",e.next=3,fetch("http://data.fixer.io/api/latest?access_key=".concat(t,"&symbols=USD,EUR,RUB"));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))()}},modules:{auth:Q,info:X,category:Y,record:ee}});r("caad"),r("25326");function re(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",r={};t.includes("date")&&(r.day="2-digit",r.month="long",r.year="numeric"),t.includes("time")&&(r.hour="2-digit",r.minute="2-digit",r.second="2-digit");var n=te.getters.info.local||"ru-RU";return new Intl.DateTimeFormat(n,r).format(new Date(e))}var ne=r("5bb3"),ae=r("2532"),ce=r("7271"),oe={"ru-RU":ae,"en-US":ce};function ie(e){var t=te.getters.info.local||"ru-RU";return oe[t][e]||"[localize ERROR]: key ".concat(e," is not found")}var se,ue={bind:function(e,t){var r=t.value;M.Tooltip.init(e,{html:r})},unbind:function(e){var t=M.Tooltip.getInstance(e);t&&t.destroy&&t.destroy()}},le={install:function(e,t){e.prototype.$message=function(e){M.toast({html:e})},e.prototype.$error=function(e){M.toast({html:"[Ошибка]: ".concat(e)})}}},de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-loader"},[r("div",{staticClass:"preloader-wrapper active"},[r("div",{staticClass:"spinner-layer",class:e.color},[e._m(0),e._m(1),e._m(2)])])])},fe=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper left"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gap-patch"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper right"},[r("div",{staticClass:"circle"})])}],pe={computed:{color:function(){var e=["spinner-red-only","spinner-blue-only","spinner-green-only"];return e[Math.floor(3*Math.random())]}}},he=pe,me=Object(m["a"])(he,de,fe,!1,null,null,null),ve=me.exports;r("6885"),r("ea7b"),r("66ce");n["a"].config.productionTip=!1,n["a"].use(le),n["a"].use(c.a),n["a"].filter("date",re),n["a"].filter("currency",ne["a"]),n["a"].filter("localize",ie),n["a"].directive("tooltip",ue),n["a"].component("Loader",ve),n["a"].component("Paginate",i.a),K.a.initializeApp({apiKey:"AIzaSyC4vAAvaKSKzic4o1HjwsBZE_GoF-kyLms",authDomain:"vue-crm-f26ce.firebaseapp.com",databaseURL:"https://vue-crm-f26ce.firebaseio.com",projectId:"vue-crm-f26ce",storageBucket:"vue-crm-f26ce.appspot.com",messagingSenderId:"588074936181",appId:"1:588074936181:web:3c63041ba456965b9c953c",measurementId:"G-HEHBJV9QZ5"}),K.a.auth().onAuthStateChanged((function(){se||new n["a"]({router:G,store:te,render:function(e){return e(z)}}).$mount("#app")}))},"5bb3":function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"RUB";return new Intl.NumberFormat("ru-RU",{style:"currency",currency:t}).format(e)}r.d(t,"a",(function(){return n}))},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},7271:function(e){e.exports=JSON.parse('{"ProfileTitle":"Profile"}')},"9c0c":function(e,t,r){},b444:function(e,t,r){"use strict";t["a"]={logout:"Вы вышли из системы",login:"Для начала войдите в систему","auth/user-not-found":"Пользователя с таким email не существует","auth/wrong-password":"Неверный пароль","auth/email-already-in-use":"Пользователь с таким email уже существует",updateUserProfile:"Данные успешно обновлены"}}});
//# sourceMappingURL=app.c55ab676.js.map