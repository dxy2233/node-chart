(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e816b40"],{"3c60":function(e,t,n){},b7df:function(e,t,n){"use strict";var s=n("3c60"),i=n.n(s);i.a},bb51:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"nav"},[e._v("\n    房间\n  ")]),n("div",{staticClass:"page"},[n("div",{staticClass:"header"},[e._v("用户名:"+e._s(e.$store.state.userName)+"，在线人数"+e._s(e.num))]),n("div",{staticClass:"wrap"},[n("div",{staticClass:"screen",attrs:{id:"screen"}},e._l(e.info,function(t,s){return n("p",{key:s},[e._v(e._s(t.user)+"："+e._s(t.content))])}),0),n("div",{staticClass:"entry"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.enter,expression:"enter"}],domProps:{value:e.enter},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)},input:function(t){t.target.composing||(e.enter=t.target.value)}}}),n("button",{on:{click:e.sendMessage}},[e._v("发送")])])])])])},i=[],c={name:"Home",data:function(){return{id:"",num:"",enter:"",info:[]}},created:function(){this.$socket.emit("getLoginInfo")},methods:{sendMessage:function(){this.$socket.emit("send",this.enter),this.enter=""}},sockets:{id:function(e){this.id=e},num:function(e){this.num=e},message:function(e){this.info.push(e),this.$nextTick(function(){document.getElementById("screen").scrollTop=document.getElementById("screen").scrollHeight})}}},o=c,a=(n("b7df"),n("fc05")),r=Object(a["a"])(o,s,i,!1,null,"7fc2f7f3",null);t["default"]=r.exports}}]);