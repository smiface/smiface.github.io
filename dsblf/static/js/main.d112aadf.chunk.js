(this["webpackJsonpreact-dsblf"]=this["webpackJsonpreact-dsblf"]||[]).push([[0],{12:function(t,c,e){},13:function(t,c,e){},15:function(t,c,e){"use strict";e.r(c);var a=e(1),s=e.n(a),n=e(5),i=e.n(n),r=e(4),d=e(2),p=s.a.createContext(),o=e(6),h=(e(12),e(13),e(0));function l(t){var c=Object(a.useContext)(p).isButtonDisabled,e=Object(a.useContext)(p).hit;return Object(h.jsxs)("div",{className:"hits_buttons",children:[Object(h.jsxs)("button",{className:"cybr-btn",disabled:c,onClick:function(){e("left")},children:["left",Object(h.jsx)("span",{"aria-hidden":!0,children:"hit"}),Object(h.jsx)("span",{"aria-hidden":!0,className:"cybr-btn__glitch",children:"left"}),Object(h.jsx)("span",{"aria-hidden":!0,className:"cybr-btn__tag",children:"hit"})]}),Object(h.jsxs)("button",{className:"cybr-btn",disabled:c,onClick:function(){e("right")},children:["right",Object(h.jsx)("span",{"aria-hidden":!0,children:"_"}),Object(h.jsx)("span",{"aria-hidden":!0,className:"cybr-btn__glitch",children:"right"}),Object(h.jsx)("span",{"aria-hidden":!0,className:"cybr-btn__tag",children:"hit"})]})]})}var m=["https://cdn.discordapp.com/attachments/468501401350176798/873613804221652992/x1.png","https://cdn.discordapp.com/attachments/468501401350176798/873613806738214942/x2.png","https://cdn.discordapp.com/attachments/468501401350176798/873613800992026644/x3.png","https://cdn.discordapp.com/attachments/468501401350176798/873613802694909962/x4.png"],b=["https://cdn.discordapp.com/attachments/468501401350176798/873616943406518272/fist1.png","https://cdn.discordapp.com/attachments/468501401350176798/873616947063971910/fist2.png","https://cdn.discordapp.com/attachments/468501401350176798/873616941493915648/fist3.png","https://cdn.discordapp.com/attachments/468501401350176798/873616942240497674/fist4.png"];function j(t){var c=Object(a.useContext)(p).isLeftFistActive,e=Object(a.useContext)(p).isRightFistActive,s=Object(a.useContext)(p).isDedHealing,n=Object(a.useState)(!1),i=Object(d.a)(n,2),r=i[0],o=i[1];return Object(a.useEffect)((function(){if(s){var t=setInterval((function(){o(!r)}),500);return function(){return clearInterval(t)}}}),[s,r]),Object(h.jsxs)("div",{className:"character",children:[Object(h.jsx)("img",{src:s?r?m[2]:m[3]:c||e?m[1]:m[0],className:"character_head"}),Object(h.jsx)("img",{src:t.bodyImg,className:"character_body"}),Object(h.jsxs)("div",{className:"character_fists",children:[Object(h.jsx)("img",{src:c?b[3]:b[2],className:c?"character_fist left_fist_active":"character_fist "}),Object(h.jsx)("img",{src:e?b[1]:b[0],className:e?"character_fist right_fist_active":"character_fist "})]})]})}var u=["https://cdn.discordapp.com/attachments/468501401350176798/873881354759180299/armor0.png","https://cdn.discordapp.com/attachments/468501401350176798/873881356361408512/armor1.png","https://cdn.discordapp.com/attachments/468501401350176798/873881357451935806/armor2.png","https://cdn.discordapp.com/attachments/468501401350176798/873881360199188490/armor3.png"],g=["https://cdn.discordapp.com/attachments/468501401350176798/873881112471044136/head0.png","https://cdn.discordapp.com/attachments/468501401350176798/873881114241032232/head1.png","https://cdn.discordapp.com/attachments/468501401350176798/873881115247652864/head2.png","https://cdn.discordapp.com/attachments/468501401350176798/873881121945972746/head3.png"];function O(){var t=Object(a.useContext)(p).ded,c={position:"absolute",height:"30px",width:2.4*t.hp+"px",marginLeft:"132px",marginTop:"-50px",backgroundColor:"white",zIndex:"-1"};return Object(h.jsxs)("div",{className:"display",children:[Object(h.jsx)("img",{src:t.lvl>2?u[3]:u[t.lvl],className:"armor"}),Object(h.jsx)("img",{src:t.lvl>6?g[3]:t.lvl-3<0?g[0]:g[t.lvl-3],className:"helmet"}),Object(h.jsx)("img",{src:"https://cdn.discordapp.com/attachments/468501401350176798/873990851309752320/hp.png",className:"displayImg"}),Object(h.jsx)("p",{className:"hp",children:t.hp}),Object(h.jsxs)("p",{className:"lvl",children:[" level : ",t.lvl+1]}),Object(h.jsx)("div",{style:c})]})}var f="https://cdn.discordapp.com/attachments/468501401350176798/873888501924528148/punch.mp3",v=[{title:"Cyberpunk",background:"https://cdn.discordapp.com/attachments/468501401350176798/873565567934660648/bg.jpg",bodyImg:"https://cdn.discordapp.com/attachments/468501401350176798/873925969134616646/body.png"},{title:"Apex",background:"https://cdn.discordapp.com/attachments/468501401350176798/873923301603430450/apex-1.jpg",bodyImg:"https://cdn.discordapp.com/attachments/468501401350176798/873992410508718130/crypto.png"}],x=function(){var t=localStorage.getItem("ded")?JSON.parse(localStorage.getItem("ded")):{hp:100,lvl:0},c=Object(a.useState)(t),e=Object(d.a)(c,2),s=e[0],n=e[1],i=Object(a.useState)(!1),m=Object(d.a)(i,2),b=m[0],u=m[1],g=Object(a.useState)(!1),x=Object(d.a)(g,2),y=x[0],N=x[1],_=Object(a.useState)(!1),I=Object(d.a)(_,2),S=I[0],k=I[1],C=Object(a.useState)(!1),w=Object(d.a)(C,2),A=w[0],D=w[1],E=function(t){return localStorage.setItem("ded",JSON.stringify(t))},F=Object(a.useState)(v[0].bodyImg),J=Object(d.a)(F,2),B=J[0],H=J[1],L=function(t){document.querySelector("body").style.backgroundImage="url('"+t.background+"')",H(t.bodyImg)};Object(a.useEffect)((function(){if(b){N(!0);var t=setInterval((function(){var t={lvl:s.lvl,hp:s.hp+10};n((function(c){return t}))}),500);if(s.hp>99){var c={lvl:s.lvl+1,hp:s.hp=100};n((function(t){return c})),u(!1),N(!1),E(c)}return function(){return clearInterval(t)}}}),[b,s,y,S,A]),Object(a.useEffect)((function(){L(v[0])}),[]);return Object(h.jsxs)("main",{children:[Object(h.jsx)("div",{className:"links",children:v.map((function(t){return Object(h.jsx)("button",{onClick:function(){return L(t)},children:t.title})}))}),Object(h.jsx)(p.Provider,{value:{ded:s,isButtonDisabled:y,hit:function(t){var c;c=f,new o.Howl({src:c,html5:!0,volume:.1}).play();var e=9-s.lvl>0?10-s.lvl:1;N(!0);var a=Object(r.a)(Object(r.a)({},s),{},{hp:s.hp-e});n(a),E(a),"left"==t?k(!0):D(!0),s.hp<11&&u(!0),setTimeout((function(){D(!1),k(!1),N(!1)}),50)},isLeftFistActive:S,isRightFistActive:A,isDedHealing:b},children:Object(h.jsxs)("div",{className:"homePage",children:[Object(h.jsx)(O,{}),Object(h.jsx)(l,{}),Object(h.jsx)(j,{bodyImg:B})]})})]})};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d112aadf.chunk.js.map