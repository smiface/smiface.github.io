(this["webpackJsonpreact-cookie-calculator"]=this["webpackJsonpreact-cookie-calculator"]||[]).push([[0],{11:function(e,t,r){},12:function(e,t,r){},14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(5),i=r.n(c),l=r(2),s=(r(10),n.a.createContext()),d=(r(11),r(12),r(0));var o=function(e){return Object(d.jsx)("div",{className:"col col-md-6",children:Object(d.jsx)("div",{className:"layers",children:e.layers.map((function(e){return Object(d.jsx)("div",{style:{height:(t=e.height,30*t+"px")},className:"layer "+e.type},Math.floor(1e6*Math.random()));var t}))})})};r(14);function u(e){var t=Object(a.useContext)(s).dispatch;return Object(d.jsx)("select",{className:"form-control form-select mr-2",onChange:function(r){return t({type:"updateType",payload:{layerType:r.target.value,id:e.layer.id}})},defaultValue:e.layer.type,children:e.layerTypes.map((function(e){return Object(d.jsx)("option",{children:e.type},Math.floor(1e6*Math.random()))}))})}function y(e){var t=Object(a.useContext)(s).dispatch,r=Object(a.useState)(Number(e.layer.height)),n=Object(l.a)(r,2),c=n[0],i=n[1];function o(r){r>0&&(i(r),t({type:"updateHeight",payload:{id:e.layer.id,height:r}}))}return Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control",type:"number",id:"layerHeight",min:Number(1),value:c,onChange:function(e){o(e.target.value)}}),Object(d.jsx)("button",{className:"btn btn-success ml-2 mr-2 ",onClick:function(){o(c+1)},children:"+"}),Object(d.jsx)("button",{className:"btn btn-primary  mr-2",disabled:1===c,onClick:function(){o(c-1)},children:"-"})]})}function p(e){var t=Object(a.useContext)(s).dispatch;return Object(d.jsx)("button",{className:"btn btn-danger delete-layer-btn",disabled:1===e.layers.length,onClick:function(){return t({type:"delete",payload:{id:e.layer.id}})},children:"delete"})}function h(e){var t=Object(a.useContext)(s).dispatch;return Object(d.jsx)("button",{id:"addLayerBtn",className:" btn btn-primary mb-2",onClick:function(){return t({type:"add"})},children:"Add layer"})}function j(e){var t=e.layers.map((function(e){return e.pricePerLayer*e.height})).reduce((function(e,t){return e+t}));return Object(d.jsx)("div",{className:"ml-2",children:Object(d.jsxs)("p",{className:"btn btn-info text-white",children:["Price : ",t," $"]})})}function b(e){return Object(d.jsxs)("div",{className:"col col-md-6",children:[Object(d.jsxs)("div",{className:"d-flex top-line",children:[Object(d.jsx)(h,{}),Object(d.jsx)(j,{layers:e.layers})]}),e.layers.map((function(t){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"d-flex input-group mb-2",children:[Object(d.jsx)(u,{layer:t,layerTypes:e.layerTypes}),Object(d.jsx)(y,{layer:t}),Object(d.jsx)(p,{layer:t,layers:e.layers})]})},Math.floor(1e6*Math.random()))}))]})}var f=[{type:"layer-cherry",pricePerLayer:1,height:1},{type:"layer-chocolate",pricePerLayer:10,height:1},{type:"layer-banana",pricePerLayer:100,height:1}],m=[{type:"layer-cherry",pricePerLayer:10,height:3,id:1},{type:"layer-chocolate",pricePerLayer:20,height:2,id:2},{type:"layer-banana",pricePerLayer:30,height:1,id:3},{type:"layer-banana",pricePerLayer:30,height:1,id:4}],O=r(4),x=function(e,t){var r=JSON.parse(JSON.stringify(e));switch(t.type){default:return e;case"add":return r.push(Object(O.a)(Object(O.a)({},f[0]),{},{id:Date.now()})),r;case"delete":return r=r.length>1?r.filter((function(e){return e.id!=t.payload.id})):r;case"updateType":var a=r.find((function(e){return e.id===t.payload.id})),n=f.find((function(e){return e.type==t.payload.layerType}));return a.type=n.type,a.pricePerLayer=n.pricePerLayer,r;case"updateHeight":return r.find((function(e){return e.id===t.payload.id})).height=Number(t.payload.height),r}};var g=function(){var e=localStorage.getItem("layers")||JSON.stringify(m),t=Object(a.useReducer)(x,JSON.parse(e)),r=Object(l.a)(t,2),n=r[0],c=r[1];return Object(a.useEffect)((function(){localStorage.setItem("layers",JSON.stringify(n))}),[n]),Object(d.jsx)(s.Provider,{value:{dispatch:c},children:Object(d.jsx)("div",{className:"App ",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row d-flex pt-5 justify-content-between",children:[Object(d.jsx)(o,{layers:n}),Object(d.jsx)(b,{layers:n,layerTypes:f})]})})})})};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.32668ff2.chunk.js.map