(function(e){function t(t){for(var n,u,i=t[0],l=t[1],o=t[2],s=0,y=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&y.push(a[u][0]),a[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(y.length)y.shift()();return c.push.apply(c,o||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var d=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4004:function(e,t,r){},"473e":function(e,t,r){"use strict";r("fec5")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("159b");var n=r("7a23"),a={class:"container"};function c(e,t,r,c,u,i){var l=Object(n["i"])("AddLayerBtn"),o=Object(n["i"])("Price"),d=Object(n["i"])("Layers"),s=Object(n["i"])("Table");return Object(n["e"])(),Object(n["c"])("div",a,[Object(n["d"])(l),Object(n["d"])(o,{sum:e.sum},null,8,["sum"]),Object(n["d"])(d,{layers:e.layers},null,8,["layers"]),Object(n["d"])(s,{layers:e.layers,layerTypes:e.layerTypes},null,8,["layers","layerTypes"])])}var u={layers:[{type:"layer-cherry",pricePerLayer:10,height:1,id:1},{type:"layer-chocolate",pricePerLayer:20,height:2,id:2},{type:"layer-banana",pricePerLayer:30,height:3,id:3}],layerTypes:[{type:"layer-cherry",pricePerLayer:10,height:1},{type:"layer-chocolate",pricePerLayer:20,height:1},{type:"layer-banana",pricePerLayer:30,height:1}],sum:0},i=u,l=(r("4de4"),r("7db0"),r("d3b7"),r("25f0"),r("d81d"),{addLayer:function(){var e=i.layerTypes[0];e.id=i.layers.length+1,this.layers.push(e),this.updateSum()},deleteLayer:function(e){this.layers=this.layers.filter((function(t){return t.id!=e})),this.updateSum()},updateLayerHeight:function(e,t){var r=this.layers.find((function(e){return e.id==t}));r.height=e.target.value,this.updateSum()},updateLayerType:function(e,t){console.log(t);var r=e.target.value.toString(),n=this.layers.find((function(e){return e.id==t})),a=this.layerTypes.find((function(e){return e.type==r}));console.log(a),n.type=r,n.pricePerLayer=a.pricePerLayer,console.log(this.layers)},updateSum:function(){this.sum=this.layers.map((function(e){return e.pricePerLayer*e.height})).reduce((function(e,t){return e+t}))}}),o=l,d={name:"App",data:function(){return i},methods:o,mounted:function(){this.updateSum()}};r("473e");d.render=c;var s=d,y=Object(n["k"])("data-v-69633483"),p=y((function(e,t,r,a,c,u){return Object(n["e"])(),Object(n["c"])("div",null,[Object(n["d"])("button",{onClick:t[1]||(t[1]=function(){return u.addLayer&&u.addLayer.apply(u,arguments)})},"Add layer")])})),b={name:"AddLayerBtn",methods:{addLayer:function(){this.$parent.addLayer()}}};r("b37d");b.render=p,b.__scopeId="data-v-69633483";var f=b,h=Object(n["k"])("data-v-353c4d76");Object(n["g"])("data-v-353c4d76");var O={class:"layers"};Object(n["f"])();var j=h((function(e,t,r,a,c,u){return Object(n["e"])(),Object(n["c"])("div",O,[(Object(n["e"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(r.layers,(function(e){return Object(n["e"])(),Object(n["c"])("div",{key:r.layers.indexOf(e),class:"layer "+e.type,style:"height:"+30*e.height+"px"},null,6)})),128))])})),v={name:"Layers",props:{layers:Object}};r("9fc7");v.render=j,v.__scopeId="data-v-353c4d76";var g=v,m=Object(n["d"])("tr",{class:"row"},[Object(n["d"])("td",{class:"col"},"type"),Object(n["d"])("td",{class:"col"},"height"),Object(n["d"])("td",{class:"col"},"actions")],-1);function L(e,t,r,a,c,u){return Object(n["e"])(),Object(n["c"])("table",null,[m,(Object(n["e"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(r.layers,(function(t){return Object(n["e"])(),Object(n["c"])("tr",{key:t.id},[Object(n["d"])("td",null,[Object(n["d"])("select",{name:"typeImage",onChange:function(r){return e.$parent.updateLayerType(r,t.id)}},[(Object(n["e"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(r.layerTypes,(function(e){return Object(n["e"])(),Object(n["c"])("option",{selected:e.type==t.type,key:r.layerTypes.indexOf(e)},Object(n["j"])(e.type),9,["selected"])})),128))],40,["onChange"])]),Object(n["d"])("td",null,[Object(n["d"])("input",{type:"number",min:"1",name:"layerHeight",value:t.height,onInput:function(r){return e.$parent.updateLayerHeight(r,t.id)}},null,40,["value","onInput"])]),Object(n["d"])("td",null,[Object(n["d"])("button",{onClick:function(r){return e.$parent.deleteLayer(t.id)}}," delete ",8,["onClick"])])])})),128))])}var P={name:"Table",props:{layers:Object,layerTypes:Object}};P.render=L;var T=P,k=Object(n["k"])("data-v-b60e2b7a"),_=k((function(e,t,r,a,c,u){return Object(n["e"])(),Object(n["c"])("div",null," Price: "+Object(n["j"])(r.sum)+" $ ",1)})),w=(r("a9e3"),{name:"Price",props:{sum:Number}});w.render=_,w.__scopeId="data-v-b60e2b7a";var S=w,x=Object(n["b"])(s),I=[["AddLayerBtn",f],["Layers",g],["Table",T],["Price",S]];I.forEach((function(e){return x.component(e[0],e[1])})),x.mount("#app")},"9fc7":function(e,t,r){"use strict";r("ed24")},b37d:function(e,t,r){"use strict";r("4004")},ed24:function(e,t,r){},fec5:function(e,t,r){}});
//# sourceMappingURL=app.3468db0d.js.map