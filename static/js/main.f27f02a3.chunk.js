(this.webpackJsonpcoingecko=this.webpackJsonpcoingecko||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(4),s=c.n(i),a=(c(11),c(3)),o=c.n(a),j=c(5),h=c(6),l=(c(13),c(0)),d=function(e){return Object(l.jsxs)("div",{className:"coinBox",children:[Object(l.jsx)("div",{className:"imgBx",children:Object(l.jsx)("img",{src:e.coin.image,alt:""})}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("h2",{children:e.coin.name}),Object(l.jsxs)("div",{className:"content-p",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Precio:"}),Object(l.jsxs)("div",{children:["$. ",e.coin.current_price.toLocaleString()]})]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"\xdaltimo Cambio (24h):"}),Object(l.jsxs)("div",{style:{color:e.coin.price_change_24h<0?"#7c0b0b":"#084015"},children:["$. ",e.coin.price_change_24h.toLocaleString()]})]})]})]})]})},u=function(e){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:"Coin List"}),Object(l.jsx)("input",{type:"text",placeholder:"Buscar",onChange:function(t){var c=t.target.value;e.getCoins(c.toLocaleLowerCase())}})]})},b=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("p",{children:["Created by ",Object(l.jsx)("div",{children:" Gerald Figueroa"})]}),Object(l.jsx)("a",{href:"https://www.coingecko.com/en/api/documentation",target:"_blank",children:"Crypto Monedas API"}),Object(l.jsx)("a",{href:"https://exchangeratesapi.io/",target:"_blank",children:"Divisas API"}),Object(l.jsx)("a",{href:"https://github.com/GeraldFigueroa/Crypto.Info",target:"_blank",children:"GitHub"})]})},x=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],i=function(){var e=Object(j.a)(o.a.mark((function e(t){var c,n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,""===t?r(n):(i=[],n.forEach((function(e){e.name.toLocaleLowerCase().includes(t)&&i.push(e)})),r(i));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i("")}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{getCoins:i}),Object(l.jsx)("div",{className:"coinsBox",children:c.map((function(e){return Object(l.jsx)(d,{coin:e})}))}),Object(l.jsx)(b,{})]})};var p=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(x,{})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.f27f02a3.chunk.js.map