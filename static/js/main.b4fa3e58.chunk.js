(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[1],{28:function(e,t,a){"use strict";var n=a(33),r=a.n(n),l={apiKey:"AIzaSyCq7HOp6pH78q_4zP9oPe2_zTCjhx1NuVE",authDomain:"trip-o-manic.firebaseapp.com",databaseURL:"https://trip-o-manic.firebaseio.com",projectId:"trip-o-manic",storageBucket:"trip-o-manic.appspot.com",messagingSenderId:"186797420313",appId:"1:186797420313:web:12fc3c1aa0d3b9a96e5f88",measurementId:"G-ELNQPB6JG4"};r.a.initializeApp(l);t.a=r.a},39:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a(8),r=a(9),l=a(28),c={token:null,user:"kk",loading:!1,error:!1},o=function(e,t){return function(a){a(u),l.a.auth().signInWithEmailAndPassword(e,t).then((function(e){a(s(e.user.ga.a,e.user.email))})).catch((function(e){a(i(e))}))}},u=function(){return{type:r.b}},i=function(e){return{type:r.a,payload:e.message}},s=function(e,t){return{type:r.c,user:t,token:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.b:return Object(n.a)(Object(n.a)({},e),{},{loading:!0});case r.c:return localStorage.setItem("token",t.token),localStorage.setItem("user",t.user),Object(n.a)(Object(n.a)({},e),{},{user:t.user,loading:!1,token:t.token});case r.a:return Object(n.a)(Object(n.a)({},e),{},{loading:!1,error:t.payload});default:return{state:e}}}},40:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(8),r=a(9),l=a(28),c={token:null,user:"kk",loading:!1,error:null},o=function(e,t){return function(a){a(u()),l.a.auth().createUserWithEmailAndPassword(e,t).then((function(e){a(s(e.user.ga.a,e.user.email))})).catch((function(e){a(i(e.message))}))}},u=function(){return{type:r.b}},i=function(e){return{type:r.a,payload:e}},s=function(e,t){return{type:r.c,user:t,token:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.b:return Object(n.a)(Object(n.a)({},e),{},{loading:!0});case r.c:return localStorage.setItem("token",t.token),localStorage.setItem("user",t.user),Object(n.a)(Object(n.a)({},e),{},{user:t.user,loading:!1,token:t.token});case r.a:return Object(n.a)(Object(n.a)({},e),{},{loading:!1,error:t.payload});default:return{state:e}}}},41:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("input",e)}},56:function(e,t,a){e.exports=a(96)},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},80:function(e,t,a){},9:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return l}));var n="user_request",r="user_succes",l="user_error"},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a.n(l),o=(a(61),a(3),a(62),a(35)),u=a(36),i=a(38),s=a(37),m=(a(63),function(){return r.a.createElement(r.a.Fragment,null,"  ",r.a.createElement("div",{className:"imageDiv"}),r.a.createElement("div",{className:"trans"},r.a.createElement("span",{className:"lets"},"Lets Connect")))}),d=a(53),b=a(25),h=a(19),f=a(42),p=a.n(f),v=(a(80),a(41)),g=a(20),E=function(){var e=Object(n.useState)([{placeholder:"Name",type:"text",className:"input",rules:{required:!0,submitable:!1,length:8},value:""},{placeholder:"Phone no.",type:"number",className:"input",rules:{required:!0,submitable:!1,length:8},value:""},{placeholder:"Email",type:"text",className:"input",rules:{required:!0,submitable:!1,length:0,valid:""},value:""}]),t=Object(h.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),o=Object(h.a)(c,2),u=o[0],i=o[1],s=Object(n.useState)(null),m=Object(h.a)(s,2),f=m[0],E=m[1],y=Object(n.useState)(!1),O=Object(h.a)(y,2),j=O[0],w=O[1],k=Object(n.useState)(!0),N=Object(h.a)(k,2),S=N[0],z=N[1],A=function(e,t){var n=Object(b.a)(a);e.target.value.length>a[t].rules.length?a[2]===n[t]?x(e,t):(i(null),n[t].rules.submitable=!0,l(n)):(i("Length is Short"),n[t].rules.submitable=!1,l(n)),a[0].rules.submitable&&a[1].rules.submitable&&a[2].rules.submitable&&z(!1)},x=function(e,t){var n=e.target.value,r=Object(b.a)(a);/@gmail.com$/.exec(n)?(r[2].rules.submitable=!0,i(null)):(i(" Email is invalid "),r[2].rules.submitable=!1),l(r)};Object(n.useEffect)((function(){var e,t=Object(d.a)(a);try{for(t.s();!(e=t.n()).done;){e.value.error&&z(!0)}}catch(n){t.e(n)}finally{t.f()}}),[a]);var C=r.a.createElement("div",{style:{textAlign:"center"}});return j&&(C=r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h5",{className:"h5"},"Your request has been sent ..we will Contact you as soon as possible",r.a.createElement(g.b,{to:"/"},"Back",r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-left-circle",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"})))))),f&&(C=r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h5",{className:"h5"},"Something went wrong..",r.a.createElement("h2",null,f,r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-emoji-frown",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683z"}),r.a.createElement("path",{d:"M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"})))))),r.a.createElement("div",{className:"bodydiv"},C,r.a.createElement("div",{className:"inputDiv"},r.a.createElement("h1",{style:{fontSize:"4vw"}}," We Will Contact  you Shortly"),r.a.createElement("h3",{className:"kindly"},"Kindly Fill ups the details "),r.a.createElement("div",{className:"inputSection"},r.a.createElement("form",null,a.map((function(e,t){return r.a.createElement("div",{key:e.placeholder+e.type,className:"divisioncontact"},r.a.createElement("label",null,e.placeholder),r.a.createElement(v.a,{placeholder:e.placeholder,className:e.className,required:e.rules.required,onChange:function(e){return function(e,t){var n=Object(b.a)(a);A(e,t),n[t].value=e.target.value,l(n)}(e,t)}}))})),r.a.createElement("span",null,r.a.createElement("span",null,u))),r.a.createElement("button",{type:"submit",className:"button",onClick:function(e){e.preventDefault();var t=[{Name:a[0].value,Phone:a[1].value,Email:a[2].value}];p.a.post("https://trip-o-manic.firebaseio.com/contact-us.json",t).then((function(e){console.log(e),w(!0)})).catch((function(e){console.log(e),E(e.message)}))},disabled:S}," Submit "))))};n.Component,r.a.lazy((function(){return a.e(6).then(a.bind(null,119))})),r.a.lazy((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,114))})),r.a.lazy((function(){return a.e(12).then(a.bind(null,115))})),r.a.lazy((function(){return a.e(9).then(a.bind(null,116))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(39),O=a(40),j=a(43),w=a(16),k=a(55),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||w.d,S=Object(w.c)({Login:y.a,signup:O.b}),z=Object(w.e)(S,N(Object(w.a)(k.a)));c.a.render(r.a.createElement(g.a,null,r.a.createElement(j.a,{store:z},r.a.createElement("div",null,"heloo"))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,2,3]]]);
//# sourceMappingURL=main.b4fa3e58.chunk.js.map