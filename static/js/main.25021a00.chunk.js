(this.webpackJsonpseesaw_website=this.webpackJsonpseesaw_website||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(15),a=n.n(s),i=n(3),l=n(0),r=function(e){var t=e.selected,c=e.onSelectedChange,s=e.options,a=n(23),i=s.map((function(e){var n="";return e.value===t.value&&(n="active"),Object(l.jsx)("a",{className:n+" item",onClick:function(){return c(e)},children:e.value},e.value)}));return Object(l.jsx)("div",{className:"ui ".concat(a.toWords(s.length)," item menu"),children:i})},d=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Instructions"})})},x=n(6),j=n.n(x),o=n(16),u=n(17),b=n.n(u);n(45);function h(e){return!e}function v(e){return e?Object(l.jsxs)("div",{className:"three wide column",children:[Object(l.jsxs)("div",{className:"ui right corner labeled input",children:[Object(l.jsx)("input",{type:"text",placeholder:"Lower window"}),Object(l.jsx)("div",{className:"ui right corner label",children:Object(l.jsx)("i",{className:"angle down icon"})})]}),Object(l.jsxs)("div",{className:"ui right corner labeled input",children:[Object(l.jsx)("input",{type:"text",placeholder:"Upper window"}),Object(l.jsx)("div",{className:"ui right corner label",children:Object(l.jsx)("i",{className:"angle up icon"})})]})]}):void 0}var O=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(l.jsxs)("div",{className:"ui form",children:[Object(l.jsxs)("h2",{className:"ui header",children:[Object(l.jsx)("i",{className:"settings icon"}),Object(l.jsx)("div",{className:"content",children:"Options:"})]}),Object(l.jsxs)("div",{className:"grouped fields",children:["Enable additional options below:",Object(l.jsxs)("div",{className:"ui grid",children:[Object(l.jsx)("div",{className:"three wide column",children:Object(l.jsx)("div",{className:"field",children:Object(l.jsxs)("div",{className:"ui toggle checkbox",children:[Object(l.jsx)("input",{type:"checkbox",tabIndex:"0",onChange:function(){return s(h)}}),Object(l.jsx)("label",{children:"Abstraction"})]})})}),v(n)]}),Object(l.jsx)("div",{className:"field",children:Object(l.jsxs)("div",{className:"ui toggle checkbox",children:[Object(l.jsx)("input",{type:"checkbox",tabIndex:"1"}),Object(l.jsx)("label",{children:"Parallel"})]})}),Object(l.jsx)("div",{className:"field",children:Object(l.jsxs)("div",{className:"ui toggle checkbox",children:[Object(l.jsx)("input",{type:"checkbox",tabIndex:"2"}),Object(l.jsx)("label",{children:"Report Instability"})]})}),Object(l.jsx)("div",{className:"field",children:Object(l.jsxs)("div",{className:"ui toggle checkbox",children:[Object(l.jsx)("input",{type:"checkbox",tabIndex:"3"}),Object(l.jsx)("label",{children:"Enable Constraints"})]})})]})]})},m=[{ex:"INPUTS {\n\tx1 fl64 : (0.01, 1.0)\t;\n\tx2 fl64 : (0.01, 1.0)\t;\n\tx3 fl64 : (0.01, 1.0)\t;\n\tx4 fl64 : (0.01, 1.0)\t;\n}\n\nOUTPUTS {\n\ty ;\n}\n\n## New Addition of required constraints on inputs\n## Precedence &&, ||\n## Separate constraints => &&\nREQUIRES {\n\n\tRSC1 : (x1*x3 < x2) || (x2 >= x4) ;\n\t#RSC2 : (x4 < x3+x1) && (x4+x2 < x3*x3) || (x2 < x4) ;\n\n}\n\n\nEXPRS {\n\th rnd64 = (x2/x1) + x3 ;\n\tg rnd64 = x1 + x1*x2 ;\n\n\tif ( x1-x2 < 0.4 ) then\n\t\tg rnd64 = 1 + 1/g ;\n\t\th rnd64 = x3 + x4 ;\n\telse\n\t\tif (( x3*x3 > 0.25 ) && (x4*h <= x1*x1)) then\n\t\t\tg rnd64 = h + x2*x3 ;\n\t\tendif\n\tendif\n\n\ty rnd64 = g + sin(x4) ;\n}\n"},{ex:"INPUTS\t{ m0 fl64 :(-1.0, 1.0) ;\n\t\t  m1 fl64 :(-1.0, 1.0) ;\n\t\t  m2 fl64 :(-1.0, 1.0) ;\n\t\t  w0 fl64 :(0.00001, 1.0) ;\n\t\t  w1 fl64 :(0.00001, 1.0) ;\n\t\t  w2 fl64 :(0.00001, 1.0) ;\n\t\t  a0 fl64 :(0.00001, 1.0) ;\n\t\t  a1 fl64 :(0.00001, 1.0) ;\n\t\t  a2 fl64 :(0.00001, 1.0) ;\n\t\t }\n\nOUTPUTS { r ; }\n\nEXPRS {\n\t\te1 rnd64 = (((w2 * (0.0 - m2)) * (-3.0 * ((1.0 * (a2/w2)) * (a2/w2)))) * 1.0) ;\n\t\te2 rnd64 = (((w1 * (0.0 - m1)) * (-3.0 *((1.0 * (a1/w1)) * (a1/w1)))) * 1.0) ;\n\t\te3 rnd64 = (((w0 * (0.0 - m0)) * (-3.0 * ((1.0 * (a0/w0)) * (a0/w0)))) * 1.0) ;\n\t\te4 rnd64 = (((w0 * (3.0 - m0)) * (3.685 * ((1.0 * (a1/w0)) * (a0/w2)))) * 1.0) ;\n\t\tr rnd64 = (0.0 + (e1 + (e2 + (e3 + 0.0)))) ;\n\t  }\n"},{ex:"\n\nINPUTS {\n\tax\tfl64 : (-3.657 - 0.5, -3.657 + 0.5); ay\tfl64 : (5.43 - 0.5, 5.43 + 0.5); az\tfl64 : (-6.23 - 0.5, -6.23 + 0.5);\n\tbx\tfl64 : (7.893 - 0.5, 7.893 + 0.5); by\tfl64 : (-6.67 - 0.5, -6.67 + 0.5); bz\tfl64 : (8.92 - 0.5, 8.92 + 0.5);\n\tcx\tfl64 : (4.441 - 0.5, 4.441 + 0.5); cy\tfl64 : (8.34 - 0.5, 8.34 + 0.5); cz\tfl64 : (-3.35 - 0.5, -3.35 + 0.5);\n\n\tpx\tfl64 : (-2 , -2); py\tfl64 : (3  , 3 ); pz\tfl64 : (5  , 5 );\n}\n\nOUTPUTS {\n\t#ood; \n\t#nu ;\n\tu ;\n\t#w ;\n\t#w ;\n\t#mz ;\n}\n\n\nEXPRS {\n\n\tv0_x = bx - ax ; v0_y = by - ay ; v0_z = bz - az ;\n\tv1_x = cx - ax ; v1_y = cy - ay ; v1_z = cz - az ;\n\tv2_x = px - ax ; v2_y = py - ay ; v2_z = pz - az ;\n\n\td00 = v0_x*v0_x + v0_y*v0_y + v0_z*v0_z ;\n\td01 = v0_x*v1_x + v0_y*v1_y + v0_z*v1_z ;\n\td11 = v1_x*v1_x + v1_y*v1_y + v1_z*v1_z ;\n\td20 = v2_x*v0_x + v2_y*v0_y + v2_z*v0_z ;\n\td21 = v2_x*v1_x + v2_y*v1_y + v2_z*v1_z ;\n\n\tdenom = d00*d11 - d01*d01 ;\n\n\tv = (d11 * d20 - d01 * d21) / denom ;\n\tw = (d00 * d21 - d01 * d20) / denom ;\n\tu = 1.0 - v - w;\n\n}\n"}],f=b.a.create({baseURL:"http://127.0.0.1:5000"});var p=function(){var e=Object(o.a)(j.a.mark((function e(t,n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/users",{params:{program:n}});case 2:c=e.sent,console.log(c);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(m[n].ex),r=Object(i.a)(a,2),d=r[0],x=r[1],j=Object(c.useState)(""),o=Object(i.a)(j,2);o[0],o[1];return Object(l.jsxs)("div",{className:"ui form",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsxs)("div",{className:"ui grid",children:[Object(l.jsxs)("div",{className:"eight wide column",children:[Object(l.jsxs)("h2",{className:"ui header",children:[Object(l.jsx)("i",{className:"keyboard icon"}),Object(l.jsx)("div",{className:"content",children:"Input:"})]}),Object(l.jsx)("textarea",{spellCheck:"false",placeholder:"Seesaw program",value:d,onChange:function(e){return x(e.target.value)}})]}),Object(l.jsxs)("div",{className:"eight wide column",children:[Object(l.jsxs)("h2",{className:"ui header",children:[Object(l.jsx)("i",{className:"clipboard outline icon"}),Object(l.jsx)("div",{className:"content",children:"Output:"})]}),Object(l.jsx)("textarea",{spellCheck:"false",placeholder:"Output"})]})]}),Object(l.jsxs)("div",{className:"ui three column grid",children:[Object(l.jsx)("div",{className:"column",children:Object(l.jsx)("button",{className:"ui large button",onClick:function(e){return p(e,d)},children:"Start"})}),Object(l.jsx)("div",{className:"center aligned column",children:Object(l.jsxs)("div",{className:"ui large buttons",children:[Object(l.jsx)("button",{className:"ui button",onClick:function(e){return function(e,t,n,c){t(Math.max(0,n-1)),c(m[n].ex)}(0,s,n,x)},children:"Prev"}),Object(l.jsx)("div",{className:"or"}),Object(l.jsx)("button",{className:"ui button",onClick:function(e){return function(e,t,n,c){t(Math.min(m.length-1,n+1)),c(m[n].ex)}(0,s,n,x)},children:"Next"})]})}),Object(l.jsx)("div",{className:"column",children:Object(l.jsx)("button",{className:"ui large right floated button",children:"Clear"})})]})]}),Object(l.jsx)("div",{className:"field",children:Object(l.jsx)(O,{})})]})},g=(n(46),function(){return Object(l.jsx)("div",{children:"About"})}),w=[{value:"About"},{value:"Try"},{value:"Learn"}];function _(e){switch(e.value){case"About":return Object(l.jsx)(g,{});case"Try":return Object(l.jsx)(N,{});case"Learn":return Object(l.jsx)(d,{});default:return Object(l.jsx)("div",{children:"No view selected to render"})}}var y=function(){var e=Object(c.useState)(w[1]),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsxs)("h1",{className:"ui center aligned icon header",children:[Object(l.jsx)("i",{className:"bug massive icon orange"}),Object(l.jsx)("p",{className:"title",children:"Seesaw"})]}),Object(l.jsx)(r,{selected:n,onSelectedChange:s,options:w}),_(n)]})};a.a.render(Object(l.jsx)(y,{}),document.querySelector("#root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.25021a00.chunk.js.map