(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,a){},42:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(14),n=a.n(s),i=(a(22),a(5)),r=a.n(i),l=a(15),o=a(3),j=a(16),u=a.n(j),b=(a(42),a(17)),p=a.n(b),d=a(1);var O=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),i=Object(o.a)(n,2),j=i[0],b=i[1],O=Object(c.useState)(""),f=Object(o.a)(O,2),h=f[0],v=f[1],g=Object(c.useState)(!1),m=Object(o.a)(g,2),x=m[0],y=m[1],N=Object(c.useState)(!1),S=Object(o.a)(N,2),k=S[0],w=S[1],D=Object(c.useState)(!1),C=Object(o.a)(D,2),J=C[0],L=C[1],R=function(){var e=Object(l.a)(r.a.mark((function e(){var t,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!1),y(!0),(t=new FormData).append("file",a),e.prev=4,e.next=7,u.a.post("/upload",t);case 7:c=e.sent,s=c.data,y(!1),v(s),w(!0),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0),w(!0);case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[J?Object(d.jsx)("h2",{children:"this type of file is not supported"}):"",x?Object(d.jsx)(p.a,{color:"#D736D3",loading:x,size:30}):"",Object(d.jsx)("div",{className:"image",children:Object(d.jsx)("img",{className:"thisimage",src:j})}),Object(d.jsxs)("div",{className:"fileupload",children:[Object(d.jsx)("input",{className:"input",type:"file",onChange:function(e){var t=null;void 0===e.target.files[0]?(w(!1),b(!1)):"image/jpeg"==e.target.files[0].type||"image/png"==e.target.files[0].type?(t=e.target.files[0],w(!0),L(!1)):(console.log("not supported type"),w(!1),L(!0));try{var a=URL.createObjectURL(t);b(a)}catch(c){console.log(c),b(!1)}s(t)}}),Object(d.jsx)("button",{disabled:!k,className:"button",onClick:R,children:Object(d.jsx)("div",{className:"upload",children:"convert"})}),Object(d.jsx)("div",{className:"clear"})]}),Object(d.jsx)("div",{className:"output",children:h})]})};n.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.543d3353.chunk.js.map