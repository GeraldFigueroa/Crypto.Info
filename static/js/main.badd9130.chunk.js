(this.webpackJsonpcoingecko=this.webpackJsonpcoingecko||[]).push([[0],{127:function(e,t,c){},128:function(e,t,c){},425:function(e,t,c){"use strict";c.r(t);var n=c(5),r=c.n(n),i=c(17),s=c.n(i),a=(c(127),c(40)),o=c.n(a),j=c(74),u=c(76),l=(c(128),c(1)),h=function(e){return Object(l.jsxs)("div",{className:"coinBox",children:[Object(l.jsx)("div",{className:"imgBx",children:Object(l.jsx)("img",{src:e.coin.image,alt:""})}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("h2",{children:e.coin.name}),Object(l.jsxs)("div",{className:"content-p",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Precio:"}),Object(l.jsxs)("div",{children:["L. ",(e.coin.current_price*e.lempiraValue).toLocaleString()]})]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"\xdaltimo Cambio (24h):"}),Object(l.jsxs)("div",{style:{color:e.coin.price_change_24h<0?"#7c0b0b":"#084015"},children:["L. ",(e.coin.price_change_24h*e.lempiraValue).toLocaleString()]})]})]})]})]})},d=function(e){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:"Coin List"}),Object(l.jsx)("input",{type:"text",placeholder:"Buscar",onChange:function(t){var c=t.target.value;e.getCoins(c.toLocaleLowerCase())}})]})},b=(c(130),function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("p",{children:["Created by ",Object(l.jsx)("div",{children:" Gerald Figueroa"})]}),Object(l.jsx)("a",{href:"https://www.coingecko.com/en/api/documentation",target:"_blank",children:"Crypto Monedas API"}),Object(l.jsx)("a",{href:"https://exchangeratesapi.io/",target:"_blank",children:"Divisas API"}),Object(l.jsx)("a",{href:"https://github.com/GeraldFigueroa/Crypto.Info",children:"GitHub"})]})}),p=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)([]),s=Object(u.a)(i,2),a=s[0],p=s[1],x=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(o.a.mark((function e(t){var c,n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false");case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,""==t?r(n):(i=[],n.map((function(e){e.name.toLocaleLowerCase().includes(t)&&i.push(e)})),r(i));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){O(""),x()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{getCoins:O}),Object(l.jsx)("div",{className:"coinsBox",children:c.map((function(e){return Object(l.jsx)(h,{coin:e,lempiraValue:a})}))}),Object(l.jsx)(b,{})]})};var x=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(p,{})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,426)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),O()}},[[425,1,2]]]);
//# sourceMappingURL=main.badd9130.chunk.js.map