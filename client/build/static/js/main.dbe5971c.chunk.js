(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,a){e.exports=a(77)},48:function(e,t,a){},49:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(13),r=a.n(o),i=(a(48),a(49),a(4)),l=a(105),s=a(5),u=a(11),m=a.n(u);function b(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),o=a[0],r=a[1],u=Object(n.useState)(""),b=Object(i.a)(u,2),f=b[0],d=b[1];Object(n.useEffect)((function(){m.a.get("https://api.themoviedb.org/3/search/movie?api_key=41bc5f16975cf23dbb34e6ec9292c03c&language=en-US&query="+e.name+"&page=1&include_adult=false").then((function(e){d("url(https://image.tmdb.org/t/p/w500/"+e.data.results[0].poster_path+")")}))}),[]);var g={backgroundImage:f,width:"200px",height:"300px",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},p=Object(s.a)({iconFilled:{color:"#E50914"},iconHover:{color:"#E50914"},iconEmpty:{color:"gray"}})(l.a);return c.a.createElement("div",{style:{width:"200px",maxHeight:"370px",margin:"2%",backgroundColor:"black"}},c.a.createElement("div",{style:g,className:"image"}),e.rating?c.a.createElement(p,{defaultValue:0,precision:.5,value:o,onChange:function(t,a){r(a),e.changeRating(e.id,a)},style:{height:"30px",padding:"0px"}}):null)}var f=a(101),d=a(106),g=a(102),p=a(103),h=a(104);function E(e){var t=Object(n.useState)(e.list),a=Object(i.a)(t,2),o=a[0],r=(a[1],Object(n.useState)({})),l=Object(i.a)(r,2),s=(l[0],l[1],Object(n.useState)(0)),u=Object(i.a)(s,2),m=u[0],f=u[1],d=Object(n.useState)([]),g=Object(i.a)(d,2),p=g[0],h=g[1],E=Object(n.useState)([]),j=Object(i.a)(E,2);j[0],j[1];function O(t){h(p.concat(t.slice(m,m+20).map((function(t,a){return c.a.createElement(b,{name:t,key:m+a,id:m+a,rating:!0,changeRating:e.changeRating})})))),f(m+20)}return Object(n.useEffect)((function(){O(o)}),[]),c.a.createElement("div",null,c.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},p),c.a.createElement("button",{onClick:function(){return O(o)}},"Load More"))}function j(e){var t=Object(n.useState)(e.list),a=Object(i.a)(t,2),o=a[0],r=(a[1],Object(n.useState)(e.recommended)),l=Object(i.a)(r,2),s=l[0],u=(l[1],Object(n.useState)({})),m=Object(i.a)(u,2),f=(m[0],m[1],Object(n.useState)(0)),d=Object(i.a)(f,2),g=d[0],p=d[1],h=Object(n.useState)([]),E=Object(i.a)(h,2),j=E[0],O=E[1],v=Object(n.useState)([]),y=Object(i.a)(v,2);y[0],y[1];function k(e){O(j.concat(s.slice(g,g+20).map((function(t){return c.a.createElement(b,{name:e[t],key:t,id:t,rating:!1})})))),p(g+20)}return Object(n.useEffect)((function(){k(o)}),[]),c.a.createElement("div",null,c.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},j),c.a.createElement("button",{onClick:function(){return k(o)}},"Load More"))}var O=a(37),v=a.n(O),y=Object(f.a)((function(e){return{root:{flexGrow:1,backgroundColor:"#221f1f"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},button:{textTransform:"none"}}}));function k(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)([]),l=Object(i.a)(r,2),s=l[0],u=l[1],b=Object(n.useState)("home"),f=Object(i.a)(b,2),O=f[0],k=f[1],S=Object(n.useState)(!0),w=Object(i.a)(S,2),x=w[0],C=w[1],N=Object(n.useState)([]),R=Object(i.a)(N,2),M=R[0],J=R[1],L=y();return Object(n.useEffect)((function(){m.a.get("http://mrec.herokuapp.com/movielist").then((function(e){u(e.data.a),C(!1)}))}),[]),x?c.a.createElement(v.a,{css:"\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n",size:100,color:"#E50914",loading:x}):"home"===O?c.a.createElement("div",null,c.a.createElement(d.a,{className:L.root,position:"sticky",color:"inherit"},c.a.createElement(g.a,null,c.a.createElement(p.a,{style:{color:"#E50914",marginLeft:"5%"},align:"left",variant:"h6",className:L.title},c.a.createElement("b",null,"MREC")),c.a.createElement(h.a,{style:{color:"#E50914"},className:L.button,color:"inherit",onClick:function(){C(!0),m.a.post("http://mrec.herokuapp.com/addratings",a).then((function(e){J(e.data.r),C(!1),console.log(e.data.r)})),k("recommended")}},"Recommended"))),c.a.createElement(E,{changeRating:function(e,t){o((function(a){var n=JSON.parse(JSON.stringify(a));return n[e]=t,n}))},list:s})):"recommended"==O?c.a.createElement("div",null,c.a.createElement(d.a,{className:L.root,position:"sticky",color:"inherit"},c.a.createElement(g.a,null,c.a.createElement(p.a,{style:{color:"#E50914",marginLeft:"5%"},align:"left",variant:"h6",className:L.title},c.a.createElement("b",null,"MREC")),c.a.createElement(h.a,{style:{color:"#E50914"},className:L.button,color:"inherit",onClick:function(){k("home")}},"Rate More Movies"))),c.a.createElement(j,{list:s,recommended:M})):void 0}a(75);var S=function(){return c.a.createElement("div",{style:{backgroundColor:"#221f1f",width:"100%",height:"100%"},className:"App"},c.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.dbe5971c.chunk.js.map