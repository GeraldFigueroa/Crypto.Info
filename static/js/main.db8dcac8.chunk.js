(this.webpackJsonpcoingecko=this.webpackJsonpcoingecko||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(6),s=c.n(a),i=(c(11),c(2)),o=c.n(i),j=c(4),u=c(5),l=(c(13),c(0)),h=function(e){return Object(l.jsxs)("div",{className:"coinBox",children:[Object(l.jsx)("div",{className:"imgBx",children:Object(l.jsx)("img",{src:e.coin.image,alt:""})}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("h2",{children:e.coin.name}),Object(l.jsxs)("div",{className:"content-p",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Precio:"}),Object(l.jsxs)("div",{children:["L. ",(e.coin.current_price*e.lempiraValue).toLocaleString()]})]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"\xdaltimo Cambio (24h):"}),Object(l.jsxs)("div",{style:{color:e.coin.price_change_24h<0?"#7c0b0b":"#084015"},children:["L. ",(e.coin.price_change_24h*e.lempiraValue).toLocaleString()]})]})]})]})]})},d=function(e){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:"Coin List"}),Object(l.jsx)("input",{type:"text",placeholder:"Buscar",onChange:function(t){var c=t.target.value;e.getCoins(c.toLocaleLowerCase())}})]})},b=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("p",{children:["Created by ",Object(l.jsx)("div",{children:" Gerald Figueroa"})]}),Object(l.jsx)("a",{href:"https://www.coingecko.com/en/api/documentation",target:"_blank",children:"Crypto Monedas API"}),Object(l.jsx)("a",{href:"https://exchangeratesapi.io/",target:"_blank",children:"Divisas API"}),Object(l.jsx)("a",{href:"https://github.com/GeraldFigueroa/Crypto.Info",target:"_blank",children:"GitHub"})]})},p=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(u.a)(a,2),i=s[0],p=s[1],x=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.exchangeratesapi.io/v1/latest?access_key=c3baeaa981b937959ed1edae21336804").then((function(e){return e.json()}));case 2:t=e.sent,p(t.rates.HNL);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(o.a.mark((function e(t){var c,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false");case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,""===t?r(n):(a=[],n.forEach((function(e){e.name.toLocaleLowerCase().includes(t)&&a.push(e)})),r(a));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f(""),x()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{getCoins:f}),Object(l.jsx)("div",{className:"coinsBox",children:c.map((function(e){return Object(l.jsx)(h,{coin:e,lempiraValue:i})}))}),Object(l.jsx)(b,{})]})};var x=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(p,{})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.db8dcac8.chunk.js.map