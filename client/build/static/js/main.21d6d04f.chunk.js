(this["webpackJsonpkeeper-part-3-starting"]=this["webpackJsonpkeeper-part-3-starting"]||[]).push([[0],{41:function(t,e,n){t.exports=n(79)},79:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(9),i=n.n(a),c=n(8),l=n(10),u=n(3),s=n(7),f=n(5),h=n.n(f);function p(){p=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new L(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return k()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var s={};function f(){}function h(){}function m(){}var d={};c(d,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(j([])));g&&g!==e&&n.call(g,o)&&(d=g);var y=m.prototype=f.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=m,c(y,"constructor",m),c(m,"constructor",h),h.displayName=c(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new b(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(y),c(y,i,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}n(68).config();var m=function(t){var e=Object(r.useState)(!1),n=Object(u.a)(e,2),a=n[0],i=n[1],f=Object(r.useState)({name:"",password:"",email:""}),m=Object(u.a)(f,2),d=m[0],v=m[1],g=Object(r.useState)({}),y=Object(u.a)(g,2),w=y[0],b=y[1],E=Object(r.useState)("login"),x=Object(u.a)(E,2),O=x[0],L=x[1],j=Object(r.useState)(!1),k=Object(u.a)(j,2),N=k[0],_=k[1],S=Object(r.useState)(!1),C=Object(u.a)(S,2),F=C[0],G=C[1];h.a.defaults.withCredentials=!0,Object(r.useEffect)((function(){h.a.get("/login").then((function(t){"no"===t.data?(google.accounts.id.initialize({client_id:"768229132762-5mhr41tc287d787lblssb5ma7ra2qi5n.apps.googleusercontent.com",callback:I}),google.accounts.id.prompt()):(b(t.data),_(!0))})).catch((function(t){return console.log(t)}))}),[]);var I=function(){var e=Object(l.a)(p().mark((function e(n){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/Glogin",n).then((function(e){t.getData(e.data),b(e.data)})).catch((function(t){return console.log(t)}));case 2:i(!1),_(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var t=Object(l.a)(p().mark((function t(e){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"modelDiv"===e.target.id&&(i(!1),G(!1),L("login"),v({name:"",password:"",email:""}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(p().mark((function e(n){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.a.post("login"===O?"/login":"/signup",d).then((function(e){"wrong"!==e.data?(t.getData(e.data),b(e.data),_(!0),G(!1),i(!1)):G(!0)})).catch((function(t){return console.log(t)}));case 3:v({name:"",email:"",password:""});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(t){var e=t.target,n=e.name,r=e.value;v((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(s.a)({},n,r))}))};return Object(r.useEffect)((function(){google.accounts.id.initialize({client_id:"768229132762-5mhr41tc287d787lblssb5ma7ra2qi5n.apps.googleusercontent.com",callback:I}),google.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"dark",size:"large",data:"use"})}),[a]),o.a.createElement("header",null,o.a.createElement("h1",null,"Keeper"),o.a.createElement("div",{onClick:function(){i(!0)}},N?o.a.createElement("h3",null,o.a.createElement("span",null,o.a.createElement("img",{src:w.picture})),w.name):o.a.createElement("h3",{id:"modelCard"},"Login")),a&&o.a.createElement("div",{id:"modelDiv",className:"modelContainer",onClick:P},o.a.createElement("div",{className:"model",id:"mainModel"},N?o.a.createElement("div",{className:"AfterLogin"},o.a.createElement("img",{src:w.picture,alt:"image"}),o.a.createElement("hr",null),o.a.createElement("h2",{className:"name"},"Name : ",w.name),o.a.createElement("h2",null,"email : ",w.email),o.a.createElement("button",{onClick:function(){_(!1),t.signOut(),h.a.get("/signout").then((function(t){return console.log(t.data)})).catch((function(t){return console.log(t)})),google.accounts.id.disableAutoSelect(),i(!1)}},"SignOut")):o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"close",onClick:function(){return i(!1)}},"X"),o.a.createElement("h1",{className:"modelHeading"},"Login/SignUp"),o.a.createElement("form",{className:"modelForm",onSubmit:T},"signup"===O&&o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{className:"namelabel",htmlFor:"name"},"Name : "),o.a.createElement("input",{className:"modelInput",name:"name",type:"text",onChange:D,value:d.name,autoComplete:"off"}),o.a.createElement("br",null)),o.a.createElement("label",{className:"emaillabel",htmlFor:"emial"},"email : "),o.a.createElement("input",{className:"modelInput",name:"email",type:"email",onChange:D,value:d.email,autoComplete:"off"}),o.a.createElement("br",null),o.a.createElement("label",{className:"passwordlabel",htmlFor:"password"}," Password : "),o.a.createElement("input",{className:"modelInput",name:"password",type:"password",onChange:D,value:d.password,autoComplete:"off"}),o.a.createElement("br",null),F&&o.a.createElement("p",{className:"invalid"},"Invalid email/password"),o.a.createElement("button",{className:"login",type:"submit",onClick:function(t){L(t.target.value)},value:O},O),o.a.createElement("a",{className:"signup",onClick:function(){L("login"===O?"signup":"login"),v({name:"",email:"",password:""})}}," ","login"===O?"signup":"login"," "),o.a.createElement("div",{id:"buttonDiv",className:"Gbutton"}))))))};var d=function(){var t=(new Date).getFullYear();return o.a.createElement("footer",null,o.a.createElement("p",null,"Copyright \u24d2 ",t))},v=n(37),g=n.n(v);var y=function(t){return o.a.createElement("div",{className:"note"},o.a.createElement("h1",null,t.title),o.a.createElement("p",null,t.content),o.a.createElement("button",{onClick:function(){t.onremove(t.id),console.log(t.id)}}," ",o.a.createElement(g.a,null)," "))},w=n(95);var b=function(t){var e=o.a.useState({title:"",content:""}),n=Object(u.a)(e,2),r=n[0],a=n[1],i=o.a.useState(!1),l=Object(u.a)(i,2),f=l[0],h=l[1];function p(t){var e=t.target,n=e.name,o=e.value;a(Object(c.a)(Object(c.a)({},r),{},Object(s.a)({},n,o)))}return document.addEventListener("click",(function(t){var e=t.target.closest("#clicktitle");t.target.closest("#contentbox")||e||h(!1)})),o.a.createElement("div",null,o.a.createElement("form",{className:"mainForm"},o.a.createElement("input",{id:"clicktitle",onChange:p,name:"title",value:r.title,onClick:function(){return h(!f)},placeholder:"Title"}),f&&o.a.createElement("textarea",{id:"contentbox",onChange:p,name:"content",value:r.content,placeholder:"Take a note...",rows:"3"}),f&&o.a.createElement(w.a,{in:!0},o.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),t.onAdd(r),h(!1),a({title:"",content:""})}},"+"))))};function E(){E=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new L(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return k()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var s={};function f(){}function h(){}function p(){}var m={};c(m,o,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(j([])));v&&v!==e&&n.call(v,o)&&(m=v);var g=p.prototype=f.prototype=Object.create(m);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=p,c(g,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(w.prototype),c(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new w(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(g),c(g,i,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var x=function(){var t=o.a.useState([]),e=Object(u.a)(t,2),n=e[0],a=e[1],i=o.a.useState({}),s=Object(u.a)(i,2),f=s[0],p=s[1],v=o.a.useState(0),g=Object(u.a)(v,2),w=g[0],x=g[1];function O(){return(O=Object(l.a)(E().mark((function t(e){return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("/addNote",Object(c.a)(Object(c.a)({},e),{},{id:f._id})).then((function(t){console.log(t.data)})).catch((function(t){return console.log(t)}));case 2:return t.next=4,h.a.post("/api",{email:f.email}).then((function(t){a(t.data.data)})).catch((function(t){return console.log(t)}));case 4:console.log("Notes-",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(t){return j.apply(this,arguments)}function j(){return(j=Object(l.a)(E().mark((function t(e){return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("/delete",Object(c.a)(Object(c.a)({},f),{},{noteId:e})).then((function(t){return console.log("delete-note-res-",t.data)})).catch((function(t){return console.log(t)}));case 2:return t.next=4,h.a.post("/api",{email:f.email}).then((function(t){console.log("updated in delete"),a(t.data.data)})).catch((function(t){return console.log(t)}));case 4:console.log("Notes-",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return h.a.defaults.withCredentials=!0,o.a.useEffect((function(){f.email&&h.a.post("/api",{email:f.email}).then((function(t){a(t.data.data),console.log()})).catch((function(t){return console.log(t)}))}),[f]),Object(r.useEffect)((function(){x(n.length)}),[w]),o.a.createElement("div",null,o.a.createElement(m,{getData:function(t){console.log("from app",t.email),p(t)},signOut:function(){a([])}}),o.a.createElement(b,{onAdd:function(t){return O.apply(this,arguments)}}),n?n.map((function(t){return o.a.createElement(y,{key:t._id,id:t._id,title:t.title,content:t.content,onremove:L})})):o.a.createElement(o.a.Fragment,null),o.a.createElement(d,null))};i.a.render(o.a.createElement(x,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.21d6d04f.chunk.js.map