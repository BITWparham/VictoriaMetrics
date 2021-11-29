(this.webpackJsonpvmui=this.webpackJsonpvmui||[]).push([[0],{204:function(e,t,n){},219:function(e,t){},223:function(e,t,n){},224:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(78),i=n.n(c),o=(n(204),n(9)),s=n(313),l=n(312),u=n(0),d=Object(a.createContext)({showInfoMessage:function(){}}),j=function(){return Object(a.useContext)(d)},b=function(e){var t=e.children,n=Object(a.useState)({}),r=Object(o.a)(n,2),c=r[0],i=r[1],j=Object(a.useState)(!1),b=Object(o.a)(j,2),O=b[0],f=b[1],h=Object(a.useState)(void 0),p=Object(o.a)(h,2),x=p[0],v=p[1];Object(a.useEffect)((function(){x&&(i({message:x,key:(new Date).getTime()}),f(!0))}),[x]);return Object(u.jsxs)(d.Provider,{value:{showInfoMessage:v},children:[Object(u.jsx)(s.a,{open:O,autoHideDuration:4e3,onClose:function(e,t){"clickaway"!==t&&(v(void 0),f(!1))},children:Object(u.jsx)(l.a,{children:c.message})},c.key),t]})},O=n(348),f=n(349),h=n(324),p=n(242),x=n(336),v=n(238),m=n(325),y=n(326),g=n(327),E=n(318),_=n(323),S=n(154),T=n.n(S),A=n(3),C=n(16),w=n(42),I=n.n(w),R=n(150),U=n.n(R),k=n(151),D=n.n(k),H=n(112),M=n.n(H);I.a.extend(U.a),I.a.extend(D.a);var L,N=window.innerWidth/2,Y=1,P=1578e8,q="YYYY-MM-DD[T]HH:mm:ss",B=[{long:"days",short:"d",possible:"day"},{long:"weeks",short:"w",possible:"week"},{long:"months",short:"M",possible:"mon"},{long:"years",short:"y",possible:"year"},{long:"hours",short:"h",possible:"hour"},{long:"minutes",short:"m",possible:"min"},{long:"seconds",short:"s",possible:"sec"},{long:"milliseconds",short:"ms",possible:"millisecond"}],z=B.map((function(e){return e.short})),F=function(e){return+M()(e).format("0.000")},Q=function(e){var t=e.match(/\d+/g),n=e.match(/[a-zA-Z]+/g);if(n&&t&&z.includes(n[0]))return Object(A.a)({},n[0],t[0])},W=function(e,t){var n=(t||new Date).valueOf()/1e3,a=e.trim().split(" ").reduce((function(e,t){var n=Q(t);return n?Object(C.a)(Object(C.a)({},e),n):Object(C.a)({},e)}),{}),r=I.a.duration(a).asSeconds();return{start:n-r,end:n,step:F(r/N)||.001,date:G(t||new Date)}},G=function(e){return I()(e).utc().format(q)},V=function(e){var t=Math.floor(e%1e3),n=Math.floor(e/1e3%60),a=Math.floor(e/1e3/60%60),r=Math.floor(e/1e3/3600%24),c=Math.floor(e/864e5),i=["d","h","m","s","ms"];return[c,r,a,n,t].map((function(e,t){return e?"".concat(e).concat(i[t]):""})).filter((function(e){return e})).join(" ")},J=function(e){return new Date(1e3*e)},X=function(e,t){t?window.localStorage.setItem(e,JSON.stringify({value:t})):Z([e])},K=function(e){var t=window.localStorage.getItem(e);if(null!==t)try{var n;return null===(n=JSON.parse(t))||void 0===n?void 0:n.value}catch(a){return t}},Z=function(e){return e.forEach((function(e){return window.localStorage.removeItem(e)}))},$=["BASIC_AUTH_DATA","BEARER_AUTH_DATA"],ee=n(152),te=n.n(ee),ne=n(137),ae=n.n(ne),re={query:"g0.expr","time.duration":"g0.range_input","time.period.date":"g0.end_input","time.period.step":"g0.step_input",stacked:"g0.stacked"},ce=function(e){var t=new Map(Object.entries(re)),n=[];t.forEach((function(t,a){var r=ae()(e,a,"");if(r){var c=encodeURIComponent(r);n.push("".concat(t,"=").concat(c))}})),function(e){var t=window;if(t){var n="".concat(t.location.protocol,"//").concat(t.location.host).concat(t.location.pathname,"?").concat(e);t.history.pushState({path:n},"",n)}}(n.join("&"))},ie=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.location.search,a=te.a.parse(n,{ignoreQueryPrefix:!0});return ae()(a,e,t||"")},oe=ie("g0.range_input","1h"),se=(L=ie("g0.end_input",new Date(I()().utc().format(q))),I()(L).utcOffset(0,!0).local().format(q)),le=ie("g0.expr",K("LAST_QUERY")||"\n"),ue={serverUrl:window.location.href.replace(/\/(?:prometheus\/)?(?:graph|vmui)\/.*/,"/prometheus/"),displayType:"chart",query:le,queryHistory:{index:0,values:[le]},time:{duration:oe,period:W(oe,new Date(se))},queryControls:{autoRefresh:!1,autocomplete:K("AUTOCOMPLETE")||!1,nocache:K("NO_CACHE")||!1}};function de(e,t){switch(t.type){case"SET_DISPLAY_TYPE":return Object(C.a)(Object(C.a)({},e),{},{displayType:t.payload});case"SET_SERVER":return Object(C.a)(Object(C.a)({},e),{},{serverUrl:t.payload});case"SET_QUERY":return Object(C.a)(Object(C.a)({},e),{},{query:t.payload});case"SET_QUERY_HISTORY_INDEX":return Object(C.a)(Object(C.a)({},e),{},{queryHistory:Object(C.a)(Object(C.a)({},e.queryHistory),{},{index:t.payload})});case"SET_QUERY_HISTORY_VALUES":return Object(C.a)(Object(C.a)({},e),{},{queryHistory:Object(C.a)(Object(C.a)({},e.queryHistory),{},{values:t.payload})});case"SET_DURATION":return Object(C.a)(Object(C.a)({},e),{},{time:Object(C.a)(Object(C.a)({},e.time),{},{duration:t.payload,period:W(t.payload,J(e.time.period.end))})});case"SET_UNTIL":return Object(C.a)(Object(C.a)({},e),{},{time:Object(C.a)(Object(C.a)({},e.time),{},{period:W(e.time.duration,t.payload)})});case"SET_PERIOD":var n=function(e){var t=e.to.valueOf()-e.from.valueOf();return V(t)}(t.payload);return Object(C.a)(Object(C.a)({},e),{},{queryControls:Object(C.a)(Object(C.a)({},e.queryControls),{},{autoRefresh:!1}),time:Object(C.a)(Object(C.a)({},e.time),{},{duration:n,period:W(n,t.payload.to)})});case"TOGGLE_AUTOREFRESH":return Object(C.a)(Object(C.a)({},e),{},{queryControls:Object(C.a)(Object(C.a)({},e.queryControls),{},{autoRefresh:!e.queryControls.autoRefresh})});case"TOGGLE_AUTOCOMPLETE":return Object(C.a)(Object(C.a)({},e),{},{queryControls:Object(C.a)(Object(C.a)({},e.queryControls),{},{autocomplete:!e.queryControls.autocomplete})});case"NO_CACHE":return Object(C.a)(Object(C.a)({},e),{},{queryControls:Object(C.a)(Object(C.a)({},e.queryControls),{},{nocache:!e.queryControls.nocache})});case"RUN_QUERY":return Object(C.a)(Object(C.a)({},e),{},{time:Object(C.a)(Object(C.a)({},e.time),{},{period:W(e.time.duration,J(e.time.period.end))})});case"RUN_QUERY_TO_NOW":return Object(C.a)(Object(C.a)({},e),{},{time:Object(C.a)(Object(C.a)({},e.time),{},{period:W(e.time.duration)})});default:throw new Error}}var je=Object(a.createContext)({}),be=function(){return Object(a.useContext)(je).state},Oe=function(){return Object(a.useContext)(je).dispatch},fe=Object.entries(ue).reduce((function(e,t){var n=Object(o.a)(t,2),a=n[0],r=n[1];return Object(C.a)(Object(C.a)({},e),{},Object(A.a)({},a,ie(a)||r))}),{}),he=function(e){var t=e.children,n=Object(a.useReducer)(de,fe),r=Object(o.a)(n,2),c=r[0],i=r[1];Object(a.useEffect)((function(){ce(c)}),[c]);var s=Object(a.useMemo)((function(){return{state:c,dispatch:i}}),[c,i]);return Object(u.jsx)(je.Provider,{value:s,children:t})},pe=function(e){return Object(u.jsxs)(h.a,{position:"relative",display:"inline-flex",children:[Object(u.jsx)(m.a,Object(C.a)({variant:"determinate"},e)),Object(u.jsx)(h.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(u.jsx)(p.a,{variant:"caption",component:"div",children:"".concat(e.label,"s")})})]})},xe=n(309),ve=Object(xe.a)({colorizing:{color:"white"}}),me=function(){var e=ve(),t=Oe(),n=be().queryControls.autoRefresh,c=Object(a.useState)(5),i=Object(o.a)(c,2),s=i[0],l=i[1],d=Object(a.useState)(),j=Object(o.a)(d,2),b=j[0],O=j[1],f=r.a.useState(100),p=Object(o.a)(f,2),x=p[0],v=p[1];Object(a.useEffect)((function(){var e;return n&&(O((new Date).valueOf()),e=setInterval((function(){O((new Date).valueOf()),t({type:"RUN_QUERY_TO_NOW"})}),1e3*s)),function(){e&&clearInterval(e)}}),[s,n]),Object(a.useEffect)((function(){var e=setInterval((function(){if(n&&b){var e=((new Date).valueOf()-b)/1e3,t=Math.floor(e/s*100);v(t)}}),16);return function(){clearInterval(e)}}),[n,b,s]);var m=function(){l((function(e){switch(e){case 1:return 2;default:return 5;case 5:return 1}}))};return Object(u.jsxs)(h.a,{display:"flex",alignItems:"center",children:[Object(u.jsx)(y.a,{control:Object(u.jsx)(g.a,{size:"small",className:e.colorizing,checked:n,onChange:function(){t({type:"TOGGLE_AUTOREFRESH"})}}),label:"Auto-refresh"}),n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(pe,{className:e.colorizing,label:s,value:x,onClick:function(){m()}}),Object(u.jsx)(E.a,{title:"Change delay refresh",children:Object(u.jsx)(h.a,{ml:1,children:Object(u.jsx)(_.a,{onClick:function(){m()},size:"large",children:Object(u.jsx)(T.a,{style:{color:"white"}})})})})]})]})},ye=n(157),ge=n.n(ye),Ee=n(155),_e=n.n(Ee),Se=n(156),Te=n.n(Se),Ae=n(329),Ce=n(319),we=n(328),Ie=Object(we.a)({root:{padding:6,color:"white","&.Mui-selected":{color:"white"}}})(Ae.a),Re=function(){var e=be().displayType,t=Oe();return Object(u.jsxs)(Ce.a,{value:e,exclusive:!0,onChange:function(n,a){return t({type:"SET_DISPLAY_TYPE",payload:null!==a&&void 0!==a?a:e})},children:[Object(u.jsxs)(Ie,{value:"chart","aria-label":"display as chart",children:[Object(u.jsx)(_e.a,{}),"\xa0Query Range as Chart"]}),Object(u.jsxs)(Ie,{value:"code","aria-label":"display as code",children:[Object(u.jsx)(Te.a,{}),"\xa0Instant Query as JSON"]}),Object(u.jsxs)(Ie,{value:"table","aria-label":"display as table",children:[Object(u.jsx)(ge.a,{}),"\xa0Instant Query as Table"]})]})},Ue=n(21),ke=n(158),De={yaxis:{limits:{enable:!1,range:[0,0]}}};function He(e,t){switch(t.type){case"TOGGLE_ENABLE_YAXIS_LIMITS":return Object(C.a)(Object(C.a)({},e),{},{yaxis:Object(C.a)(Object(C.a)({},e.yaxis),{},{limits:Object(C.a)(Object(C.a)({},e.yaxis.limits),{},{enable:!e.yaxis.limits.enable})})});case"SET_YAXIS_LIMITS":return Object(C.a)(Object(C.a)({},e),{},{yaxis:Object(C.a)(Object(C.a)({},e.yaxis),{},{limits:Object(C.a)(Object(C.a)({},e.yaxis.limits),{},{range:t.payload})})});default:throw new Error}}var Me,Le=Object(a.createContext)({}),Ne=function(){return Object(a.useContext)(Le).state},Ye=function(){return Object(a.useContext)(Le).dispatch},Pe=function(e){var t=e.children,n=Object(a.useReducer)(He,De),r=Object(o.a)(n,2),c=r[0],i=r[1],s=Object(a.useMemo)((function(){return{state:c,dispatch:i}}),[c,i]);return Object(u.jsx)(Le.Provider,{value:s,children:t})},qe=function(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);for(var a="#",r=0;r<3;r++){a+=("00"+(t>>8*r&255).toString(16)).substr(-2)}return a},Be=function(e){if(7!=e.length)return"0, 0, 0";var t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return"".concat(t,", ").concat(n,", ").concat(a)},ze=n(122),Fe=["__name__"],Qe=function(e){for(var t=e.length,n=1/0;t--;)e[t]<n&&(n=e[t]);return n},We=function(){return null},Ge={height:500,legend:{show:!1},axes:[{space:80},{show:!0,font:"10px Arial",values:function(e,t){return t.map((function(e){return e>1e3?M()(e).format("0.0a"):e}))}}],cursor:{drag:{x:!1,y:!1},focus:{prox:30},bind:{mouseup:We,mousedown:We,click:We,dblclick:We,mouseenter:We}}},Ve=function(e){var t,n=e.u,a=e.tooltipIdx,r=e.metrics,c=e.series,i=e.tooltip,o=e.tooltipOffset,s=a.seriesIdx,l=a.dataIdx,u=n.data[s][l],d=n.data[0][l],j=(null===(t=r[s-1])||void 0===t?void 0:t.metric)||{},b=qe(c[s].label||""),O=n.over.getBoundingClientRect(),f=O.width,h=O.height,p=n.valToPos(u||0,"y"),x=n.valToPos(d,"x"),v=i.getBoundingClientRect(),m=v.width,y=v.height,g=x+m>=f,E=p+y>=h;i.style.display="grid",i.style.top="".concat(o.top+p+10-(E?y+10:0),"px"),i.style.left="".concat(o.left+x+10-(g?m+20:0),"px");var _=I()(new Date(1e3*d)).format("YYYY-MM-DD HH:mm:ss:SSS (Z)"),S=Object.keys(j).filter((function(e){return"__name__"!==e})).map((function(e){return"<div><b>".concat(e,"</b>: ").concat(j[e],"</div>")})).join(""),T='<div class="u-tooltip__marker" style="background: '.concat(b,'"></div>');i.innerHTML="<div>".concat(_,'</div>\n                       <div class="u-tooltip-data">\n                         ').concat(T).concat(j.__name__||"",': <b class="u-tooltip-data__value">').concat(u,'</b>\n                       </div>\n                       <div class="u-tooltip__info">').concat(S,"</div>")},Je=function(e,t){var n=function(e){if(0===Object.keys(e.metric).length)return"Query result";var t=e.metric,n=t.__name__,a=Object(ze.a)(t,Fe);return"".concat(n||""," {").concat(Object.entries(a).map((function(e){return"".concat(e[0],": ").concat(e[1])})).join(", "),"}")}(e);return{label:n,width:1.5,stroke:qe(n),show:!t.includes(n),scale:"y"}},Xe=function(e){return{label:e.label||"",color:e.stroke,checked:e.show||!1}},Ke=n(159),Ze=n.n(Ke);n(222),n(223);!function(e){e.xRange="xRange",e.yRange="yRange",e.data="data"}(Me||(Me={}));var $e=function(e){var t=e.data,n=e.series,r=e.metrics,c=void 0===r?[]:r,i=e.limits,s=Oe(),l=be().time.period,d=Ne().yaxis,j=Object(a.useRef)(null),b=Object(a.useRef)(null),O=Object(a.useState)(!1),f=Object(o.a)(O,2),h=f[0],p=f[1],x=Object(a.useState)(0),v=Object(o.a)(x,2),m=v[0],y=v[1],g=Object(a.useState)({min:l.start,max:l.end}),E=Object(o.a)(g,2),_=E[0],S=E[1],T=Object(a.useState)(),A=Object(o.a)(T,2),w=A[0],I=A[1],R=document.createElement("div");R.className="u-tooltip";var U={seriesIdx:1,dataIdx:0},k={left:0,top:0},D=Object(a.useCallback)(Ze()((function(e){var t=e.min,n=e.max;s({type:"SET_PERIOD",payload:{from:new Date(1e3*t),to:new Date(1e3*n)}})}),500),[]),H=function(e){var t=e.u,n=e.min,a=e.max,r=1e3*(a-n);r<Y||r>P||(t.setScale("x",{min:n,max:a}),S({min:n,max:a}),D({min:n,max:a}))},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return d.limits.enable?d.limits.range:t&&n?[t-.05*t,n+.05*n]:i},L=function(){return[_.min,_.max]},N=Object(C.a)(Object(C.a)({},Ge),{},{width:j.current?j.current.offsetWidth:400,series:n,plugins:[{hooks:{ready:function(e){var t,n=.85;k.left=parseFloat(e.over.style.left),k.top=parseFloat(e.over.style.top),null===(t=e.root.querySelector(".u-wrap"))||void 0===t||t.appendChild(R),e.over.addEventListener("mousedown",(function(t){!function(e){var t=e.e,n=e.factor,a=void 0===n?.85:n,r=e.u,c=e.setPanning,i=e.setPlotScale;if(0===t.button){t.preventDefault(),c(!0);var o=t.clientX,s=r.posToVal(1,"x")-r.posToVal(0,"x"),l=r.scales.x.min||0,u=r.scales.x.max||0,d=function(e){e.preventDefault();var t=s*((e.clientX-o)*a);i({u:r,min:l-t,max:u-t})};document.addEventListener("mousemove",d),document.addEventListener("mouseup",(function e(){c(!1),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",e)}))}}({u:e,e:t,setPanning:p,setPlotScale:H,factor:n})})),e.over.addEventListener("wheel",(function(t){if(t.ctrlKey||t.metaKey){t.preventDefault();var a=e.over.getBoundingClientRect().width;e.cursor.left&&e.cursor.left>0&&y(e.cursor.left);var r=e.posToVal(m,"x"),c=(e.scales.x.max||0)-(e.scales.x.min||0),i=t.deltaY<0?c*n:c/n,o=r-m/a*i,s=o+i;e.batch((function(){return H({u:e,min:o,max:s})}))}}))},setCursor:function(e){U.dataIdx!==e.cursor.idx&&(U.dataIdx=e.cursor.idx||0,U.seriesIdx&&U.dataIdx&&Ve({u:e,tooltipIdx:U,metrics:c,series:n,tooltip:R,tooltipOffset:k}))},setSeries:function(e,t){U.seriesIdx!==t&&(U.seriesIdx=t||0,t&&U.dataIdx?Ve({u:e,tooltipIdx:U,metrics:c,series:n,tooltip:R,tooltipOffset:k}):R.style.display="none")}}}],scales:{x:{range:L},y:{range:M}}}),q=function(e){if(w){switch(e){case Me.xRange:w.scales.x.range=L;break;case Me.yRange:w.scales.y.range=M;break;case Me.data:w.setData(t)}w.redraw()}};return Object(a.useEffect)((function(){return S({min:l.start,max:l.end})}),[l]),Object(a.useEffect)((function(){if(b.current){var e=new ke.a(N,t,b.current);return I(e),S({min:l.start,max:l.end}),e.destroy}}),[b.current,n]),Object(a.useEffect)((function(){return q(Me.data)}),[t]),Object(a.useEffect)((function(){return q(Me.xRange)}),[_]),Object(a.useEffect)((function(){return q(Me.yRange)}),[d]),Object(u.jsx)("div",{ref:j,style:{pointerEvents:h?"none":"auto",height:"500px"},children:Object(u.jsx)("div",{ref:b})})},et=(n(224),function(e){var t=e.labels,n=e.onChange;return Object(u.jsx)("div",{className:"legendWrapper",children:t.map((function(e){return Object(u.jsxs)("div",{className:e.checked?"legendItem":"legendItem legendItemHide",onClick:function(t){return n(e.label,t.ctrlKey||t.metaKey)},children:[Object(u.jsx)("div",{className:"legendMarker",style:{borderColor:e.color,backgroundColor:"rgba(".concat(Be(e.color),", 0.1)")}}),Object(u.jsxs)("div",{className:"legendLabel",children:[e.checked," ",e.label]})]},e.label)}))})}),tt=function(e){var t=e.data,n=void 0===t?[]:t,r=Ne().yaxis,c=Ye(),i=Object(a.useState)([[]]),s=Object(o.a)(i,2),l=s[0],d=s[1],j=Object(a.useState)([]),b=Object(o.a)(j,2),O=b[0],f=b[1],h=Object(a.useState)([]),p=Object(o.a)(h,2),x=p[0],v=p[1],m=Object(a.useState)([]),y=Object(o.a)(m,2),g=y[0],E=y[1],_=Object(a.useState)([0,1]),S=Object(o.a)(_,2),T=S[0],A=S[1],C=function(e){if(!r.limits.enable||r.limits.range.every((function(e){return!e}))){var t=function(e){var t=Qe(e),n=function(e){for(var t=e.length,n=-1/0;t--;)e[t]>n&&(n=e[t]);return n}(e);return[t-.05*t,n+.05*n]}(e);A(t),c({type:"SET_YAXIS_LIMITS",payload:t})}};return Object(a.useEffect)((function(){var e=[],t=[],a=[],r=[];null===n||void 0===n||n.forEach((function(n){var c=Je(n,g);r.push(c),a.push(Xe(c)),n.values.forEach((function(n){e.push(n[0]),t.push(+n[1])}))}));var c=function(e){var t=Array.from(new Set(e)).sort((function(e,t){return e-t})),n=Qe(t.map((function(e,n){return t[n+1]-e}))),a=t.length,r=t[0]||0;return new Array(a).fill(r).map((function(e,t){return F(e+n*t)}))}(e);d([c].concat(Object(Ue.a)(n.map((function(e){return new Array(c.length).fill(1).map((function(t,n){return e.values[n]?+e.values[n][1]:null}))}))))),C(t);var i=[{}].concat(r);JSON.stringify(i)!==JSON.stringify(O)&&(f(i),v(a))}),[n]),Object(a.useEffect)((function(){var e=[],t=[];null===n||void 0===n||n.forEach((function(n){var a=Je(n,g);t.push(a),e.push(Xe(a))})),f([{}].concat(t)),v(e)}),[g]),Object(u.jsx)(u.Fragment,{children:n.length>0?Object(u.jsxs)("div",{children:[Object(u.jsx)($e,{data:l,series:O,metrics:n,limits:T}),Object(u.jsx)(et,{labels:x,onChange:function(e,t){E(function(e){var t=e.hideSeries,n=e.label,a=e.metaKey,r=e.series,c=t.includes(n),i=r.map((function(e){return e.label||""})).filter((function(e){return e}));return a&&c?Object(Ue.a)(i.filter((function(e){return e!==n}))):a&&!c?t.length===r.length-2?[]:Object(Ue.a)(i.filter((function(e){return e!==n}))):c?t.filter((function(e){return e!==n})):[].concat(Object(Ue.a)(t),[n])}({hideSeries:g,label:e,metaKey:t,series:O}))}})]}):Object(u.jsx)("div",{style:{textAlign:"center"},children:"No data to show"})})},nt=n(330),at=n(178),rt=n(331),ct=n(332),it=n(333),ot=n(334),st=n(335),lt=Object(xe.a)({deemphasized:{opacity:.4}}),ut=function(e){var t=e.data,n=lt(),r=function(e){return Object(a.useMemo)((function(){var t={};return e.forEach((function(e){return Object.entries(e.metric).forEach((function(e){return t[e[0]]?t[e[0]].options.add(e[1]):t[e[0]]={options:new Set([e[1]])}}))})),Object.entries(t).map((function(e){return{key:e[0],variations:e[1].options.size}})).sort((function(e,t){return e.variations-t.variations}))}),[e])}(t),c=Object(a.useMemo)((function(){return null===t||void 0===t?void 0:t.map((function(e){return{metadata:r.map((function(t){return e.metric[t.key]||"-"})),value:e.value[1]}}))}),[r,t]);return Object(u.jsx)(u.Fragment,{children:c.length>0?Object(u.jsx)(nt.a,{component:at.a,children:Object(u.jsxs)(rt.a,{"aria-label":"simple table",children:[Object(u.jsx)(ct.a,{children:Object(u.jsxs)(it.a,{children:[r.map((function(e,t){return Object(u.jsx)(ot.a,{style:{textTransform:"capitalize"},children:e.key},t)})),Object(u.jsx)(ot.a,{align:"right",children:"Value"})]})}),Object(u.jsx)(st.a,{children:c.map((function(e,t){return Object(u.jsxs)(it.a,{children:[e.metadata.map((function(e,a){var r=c[t-1]&&c[t-1].metadata[a];return Object(u.jsx)(ot.a,{className:r===e?n.deemphasized:void 0,children:e},a)})),Object(u.jsx)(ot.a,{align:"right",children:e.value})]},t)}))})]})}):Object(u.jsx)("div",{style:{textAlign:"center"},children:"No data to show"})})},dt=n(316),jt=n(346),bt=n(347),Ot=n(320),ft=n(310),ht=n(6),pt=n(13),xt=n(117),vt=n(172),mt=n(174),yt=function(e){var t=e.query,n=e.queryHistory,r=e.setHistoryIndex,c=e.setQuery,i=e.runQuery,s=e.server,l=e.oneLiner,d=void 0!==l&&l,j=e.autocomplete,b=Object(a.useRef)(null),O=Object(a.useState)(),f=Object(o.a)(O,2),h=f[0],p=f[1];Object(a.useEffect)((function(){return b.current&&p(new pt.d({parent:b.current})),function(){return null===h||void 0===h?void 0:h.destroy()}}),[]),Object(a.useEffect)((function(){var e=new vt.a;e.activateCompletion(j),e.setComplete({remote:{url:s}});var n=pt.d.updateListener.of((function(e){e.docChanged&&c(e.state.doc.toJSON().map((function(e){return e.trim()})).join(""))}));null===h||void 0===h||h.setState(ht.f.create({doc:t,extensions:[mt.a,pt.k.of(xt.a),n,e.asExtension()]}))}),[s,h,j,n]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{ref:b,className:d?"one-line-scroll":"multi-line-scroll",onKeyUp:function(e){var t=e.key,n=e.ctrlKey,a=e.metaKey,c=n||a;"Enter"===t&&c?i():"ArrowUp"===t&&c?r(-1):"ArrowDown"===t&&c&&r(1)}})})},gt=n(339),Et=n(307),_t=function(){return Object(u.jsx)(nt.a,{component:at.a,children:Object(u.jsxs)(rt.a,{"aria-label":"simple table",size:"small",children:[Object(u.jsx)(ct.a,{children:Object(u.jsxs)(it.a,{children:[Object(u.jsx)(ot.a,{children:"Long"}),Object(u.jsx)(ot.a,{children:"Short"})]})}),Object(u.jsx)(st.a,{children:B.map((function(e,t){return Object(u.jsxs)(it.a,{children:[Object(u.jsx)(ot.a,{component:"th",scope:"row",children:e.long}),Object(u.jsx)(ot.a,{children:e.short})]},t)}))})]})})},St=Object(xe.a)({inlineBtn:{"&:hover":{cursor:"pointer"}}}),Tt=function(e){var t=e.handler,n=e.text,a=St();return Object(u.jsx)(x.a,{component:"span",className:a.inlineBtn,onClick:t,children:n})},At=function(e){var t=e.setDuration,n=Object(a.useState)(!1),c=Object(o.a)(n,2),i=c[0],s=c[1],l=r.a.useState(null),d=Object(o.a)(l,2),j=d[0],b=d[1],O=Object(a.useState)(),f=Object(o.a)(O,2),x=f[0],v=f[1],m=be().time,y=m.period.end,g=m.duration,E=Oe(),_=Object(a.useState)(g),S=Object(o.a)(_,2),T=S[0],A=S[1];Object(a.useEffect)((function(){A(g)}),[g]),Object(a.useEffect)((function(){v(function(e){return I()(e).format(q)}(J(y)))}),[y]),Object(a.useEffect)((function(){if(!i){var e=function(e){var t=e.trim().split(" ").reduce((function(e,t){var n=Q(t);return n?Object(C.a)(Object(C.a)({},e),n):Object(C.a)({},e)}),{}),n=I.a.duration(t).asMilliseconds();return n<Y?V(Y):n>P?V(P):e}(T);A(e),t(e)}}),[T,i]);var w=function(){b(null)},R=Boolean(j);return Object(u.jsxs)(h.a,{m:1,flexDirection:"row",display:"flex",children:[Object(u.jsxs)(h.a,{px:1,children:[Object(u.jsx)(h.a,{children:Object(u.jsx)(ft.a,{label:"Duration",value:T,onChange:function(e){A(e.target.value)},variant:"standard",fullWidth:!0,onKeyUp:function(e){if("Enter"===e.key){var t=e.target;t.blur(),A(t.value)}},onBlur:function(){s(!1)},onFocus:function(){s(!0)}})}),Object(u.jsx)(h.a,{my:2,children:Object(u.jsxs)(p.a,{variant:"body2",children:[Object(u.jsx)("span",{"aria-owns":R?"mouse-over-popover":void 0,"aria-haspopup":"true",style:{cursor:"pointer"},onMouseEnter:function(e){b(e.currentTarget)},onMouseLeave:w,children:"Possible options:\xa0"}),Object(u.jsx)(gt.a,{open:R,anchorEl:j,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},style:{pointerEvents:"none"},onClose:w,disableRestoreFocus:!0,children:Object(u.jsx)(_t,{})}),Object(u.jsx)(Tt,{handler:function(){return A("5m")},text:"5m"}),",\xa0",Object(u.jsx)(Tt,{handler:function(){return A("1h")},text:"1h"}),",\xa0",Object(u.jsx)(Tt,{handler:function(){return A("1h 30m")},text:"1h 30m"})]})})]}),Object(u.jsxs)(h.a,{px:1,children:[Object(u.jsx)(h.a,{children:Object(u.jsx)(Et.a,{label:"Until",ampm:!1,value:x,onChange:function(e){return E({type:"SET_UNTIL",payload:e})},onError:console.log,inputFormat:"DD/MM/YYYY HH:mm:ss",mask:"__/__/____ __:__:__",renderInput:function(e){return Object(u.jsx)(ft.a,Object(C.a)(Object(C.a)({},e),{},{variant:"standard"}))}})}),Object(u.jsx)(h.a,{my:2,children:Object(u.jsxs)(p.a,{variant:"body2",children:["Will be changed to current time for auto-refresh mode.\xa0",Object(u.jsx)(Tt,{handler:function(){return E({type:"RUN_QUERY_TO_NOW"})},text:"Switch to now"})]})})]})]})},Ct=n(163),wt=n.n(Ct),It=n(165),Rt=n.n(It),Ut=n(304),kt=n(302),Dt=n(343),Ht=n(345),Mt=n(311),Lt=n(341),Nt=n(338),Yt=n(317),Pt=n(337),qt=n(342),Bt=n(315),zt=n(340),Ft=n(344),Qt=n(321),Wt=n(303),Gt=["children","value","index"],Vt=function(e){var t=e.children,n=e.value,a=e.index,r=Object(ze.a)(e,Gt);return Object(u.jsx)("div",Object(C.a)(Object(C.a)({role:"tabpanel",hidden:n!==a,id:"auth-config-tabpanel-".concat(a),"aria-labelledby":"auth-config-tab-".concat(a)},r),{},{children:n===a&&Object(u.jsx)(h.a,{py:2,children:t})}))},Jt=n(161),Xt=n.n(Jt),Kt=n(162),Zt=n.n(Kt),$t={authMethod:"NO_AUTH",saveAuthLocally:!1},en=K("AUTH_TYPE"),tn=K("BASIC_AUTH_DATA"),nn=K("BEARER_AUTH_DATA"),an=Object(C.a)(Object(C.a)({},$t),{},{authMethod:en||$t.authMethod,basicData:tn,bearerData:nn,saveAuthLocally:!(!tn&&!nn)}),rn=function(){Z($)};function cn(e,t){switch(t.type){case"SET_BASIC_AUTH":return t.payload.checkbox?X("BASIC_AUTH_DATA",t.payload.value):rn(),X("AUTH_TYPE","BASIC_AUTH"),Object(C.a)(Object(C.a)({},e),{},{authMethod:"BASIC_AUTH",basicData:t.payload.value});case"SET_BEARER_AUTH":return t.payload.checkbox?X("BEARER_AUTH_DATA",t.payload.value):rn(),X("AUTH_TYPE","BEARER_AUTH"),Object(C.a)(Object(C.a)({},e),{},{authMethod:"BEARER_AUTH",bearerData:t.payload.value});case"SET_NO_AUTH":return!t.payload.checkbox&&rn(),X("AUTH_TYPE","NO_AUTH"),Object(C.a)(Object(C.a)({},e),{},{authMethod:"NO_AUTH"});default:throw new Error}}var on=Object(a.createContext)({}),sn=function(){return Object(a.useContext)(on).state},ln=function(e){var t=e.children,n=Object(a.useReducer)(cn,an),r=Object(o.a)(n,2),c=r[0],i=r[1],s=Object(a.useMemo)((function(){return{state:c,dispatch:i}}),[c,i]);return Object(u.jsx)(on.Provider,{value:s,children:t})},un=Object(xe.a)((function(){return Object(Wt.a)({tabsContent:{height:"200px"}})})),dn="Bearer ",jn=[{title:"No auth",id:"NO_AUTH"},{title:"Basic Auth",id:"BASIC_AUTH"},{title:"Bearer Token",id:"BEARER_AUTH"}],bn=function(e){var t=un(),n=e.onClose,r=e.open,c=sn(),i=c.saveAuthLocally,s=c.basicData,l=c.bearerData,d=c.authMethod,j=Object(a.useContext)(on).dispatch,b=Object(a.useState)(i),O=Object(o.a)(b,2),f=O[0],x=O[1],v=Object(a.useState)(s||{password:"",login:""}),m=Object(o.a)(v,2),g=m[0],E=m[1],_=Object(a.useState)((null===l||void 0===l?void 0:l.token)||dn),S=Object(o.a)(_,2),T=S[0],A=S[1],w=Object(a.useState)(jn.findIndex((function(e){return e.id===d}))||0),I=Object(o.a)(w,2),R=I[0],U=I[1],k=function(){n()};return Object(u.jsxs)(kt.a,{onClose:k,"aria-labelledby":"simple-dialog-title",open:r,children:[Object(u.jsx)(Ut.a,{id:"simple-dialog-title",children:"Request Auth Settings"}),Object(u.jsxs)(Dt.a,{children:[Object(u.jsx)(Ht.a,{children:"This affects Authorization header sent to the server you specify. Not shown in URL and can be optionally stored on a client side"}),Object(u.jsx)(Mt.a,{value:R,onChange:function(e,t){U(t)},indicatorColor:"primary",textColor:"primary",children:jn.map((function(e){return Object(u.jsx)(Lt.a,{label:e.title},e.id)}))}),Object(u.jsxs)(h.a,{p:0,display:"flex",flexDirection:"column",className:t.tabsContent,children:[Object(u.jsxs)(h.a,{flexGrow:1,children:[Object(u.jsx)(Vt,{value:R,index:0,children:Object(u.jsx)(p.a,{style:{fontStyle:"italic"},children:"No Authorization Header"})}),Object(u.jsxs)(Vt,{value:R,index:1,children:[Object(u.jsxs)(Nt.a,{margin:"dense",fullWidth:!0,children:[Object(u.jsx)(Yt.a,{htmlFor:"basic-login",children:"User"}),Object(u.jsx)(Pt.a,{id:"basic-login",startAdornment:Object(u.jsx)(qt.a,{position:"start",children:Object(u.jsx)(Xt.a,{})}),required:!0,onChange:function(e){return E((function(t){return Object(C.a)(Object(C.a)({},t),{},{login:e.target.value||""})}))},value:(null===g||void 0===g?void 0:g.login)||""})]}),Object(u.jsxs)(Nt.a,{margin:"dense",fullWidth:!0,children:[Object(u.jsx)(Yt.a,{htmlFor:"basic-pass",children:"Password"}),Object(u.jsx)(Pt.a,{id:"basic-pass",startAdornment:Object(u.jsx)(qt.a,{position:"start",children:Object(u.jsx)(Zt.a,{})}),onChange:function(e){return E((function(t){return Object(C.a)(Object(C.a)({},t),{},{password:e.target.value||""})}))},value:(null===g||void 0===g?void 0:g.password)||""})]})]}),Object(u.jsx)(Vt,{value:R,index:2,children:Object(u.jsx)(ft.a,{id:"bearer-auth",label:"Bearer token",multiline:!0,fullWidth:!0,value:T,onChange:function(e){var t=e.target.value;t.startsWith(dn)?A(t):A(dn)},InputProps:{onPaste:function(e){var t=e.clipboardData.getData("text/plain");t.startsWith(dn)?A(t):A(dn+t),e.preventDefault()}},maxRows:6})})]}),Object(u.jsxs)(Nt.a,{children:[Object(u.jsx)(y.a,{control:Object(u.jsx)(Bt.a,{checked:f,onChange:function(){return x((function(e){return!e}))},name:"checkedB",color:"primary"}),label:"Persist Auth Data Locally"}),Object(u.jsx)(zt.a,{children:f?"Auth Data and the Selected method will be saved to LocalStorage":"Auth Data won't be saved. All previously saved Auth Data will be removed"})]})]})]}),Object(u.jsx)(Ft.a,{children:Object(u.jsx)(Qt.a,{onClick:function(){switch(R){case 0:j({type:"SET_NO_AUTH",payload:{checkbox:f}});break;case 1:j({type:"SET_BASIC_AUTH",payload:{checkbox:f,value:g}});break;case 2:j({type:"SET_BEARER_AUTH",payload:{checkbox:f,value:{token:T}}})}k()},color:"primary",children:"Apply"})})]})},On=n(164),fn=n.n(On),hn=n(297),pn=n(139),xn=n.n(pn),vn=function(){var e=be(),t=e.serverUrl,n=e.query,r=e.queryHistory,c=e.time.duration,i=e.queryControls,s=i.autocomplete,l=i.nocache,d=Oe(),j=Ne().yaxis,b=Ye(),O=Object(a.useState)(!1),f=Object(o.a)(O,2),x=f[0],v=f[1],m=Object(a.useState)(!0),S=Object(o.a)(m,2),T=S[0],A=S[1],C=Object(a.useRef)(null),w=function(){var e=r.values;d({type:"RUN_QUERY"}),n!==e[e.length-1]&&(d({type:"SET_QUERY_HISTORY_INDEX",payload:e.length}),d({type:"SET_QUERY_HISTORY_VALUES",payload:[].concat(Object(Ue.a)(e),[n])}))},I=function(e){n!==e&&d({type:"SET_QUERY",payload:e})};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(dt.a,{expanded:T,onChange:function(){return A((function(e){return!e}))},children:[Object(u.jsxs)(jt.a,{expandIcon:Object(u.jsx)(wt.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:[Object(u.jsx)(h.a,{display:"flex",alignItems:"center",mr:2,children:Object(u.jsx)(p.a,{variant:"h6",component:"h2",children:"Query Configuration"})}),Object(u.jsx)(h.a,{flexGrow:1,onClick:function(e){return e.stopPropagation()},onFocusCapture:function(e){return e.stopPropagation()},children:Object(u.jsx)(hn.a,{disablePortal:!T,container:C.current,children:Object(u.jsxs)(h.a,{display:"flex",alignItems:"center",children:[Object(u.jsx)(h.a,{width:"100%",children:Object(u.jsx)(yt,{server:t,query:n,oneLiner:!T,autocomplete:s,queryHistory:r,setHistoryIndex:function(e){var t=r.index+e;t<-1||t>r.values.length||(d({type:"SET_QUERY_HISTORY_INDEX",payload:t}),I(r.values[t]||""))},runQuery:w,setQuery:I})}),Object(u.jsx)(E.a,{title:"Execute Query",children:Object(u.jsx)(_.a,{onClick:w,size:"large",children:Object(u.jsx)(fn.a,{})})})]})})})]}),Object(u.jsx)(bt.a,{children:Object(u.jsxs)(Ot.a,{container:!0,spacing:2,children:[Object(u.jsx)(Ot.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(h.a,{display:"grid",gap:2,gridTemplateRows:"auto 1fr",children:[Object(u.jsxs)(h.a,{display:"flex",alignItems:"center",children:[Object(u.jsx)(ft.a,{variant:"outlined",fullWidth:!0,label:"Server URL",value:t,inputProps:{style:{fontFamily:"Monospace"}},onChange:function(e){var t=e.target.value;d({type:"SET_SERVER",payload:t})}}),Object(u.jsx)(h.a,{children:Object(u.jsx)(E.a,{title:"Request Auth Settings",children:Object(u.jsx)(_.a,{onClick:function(){return v(!0)},size:"large",children:Object(u.jsx)(Rt.a,{})})})})]}),Object(u.jsx)(h.a,{flexGrow:1,children:Object(u.jsx)("div",{ref:C})})]})}),Object(u.jsx)(Ot.a,{item:!0,xs:8,md:6,children:Object(u.jsx)(h.a,{style:{minHeight:"128px",padding:"10px 0",borderRadius:"4px",borderColor:"#b9b9b9",borderStyle:"solid",borderWidth:"1px"},children:Object(u.jsx)(At,{setDuration:function(e){return d({type:"SET_DURATION",payload:e})},duration:c})})}),Object(u.jsx)(Ot.a,{item:!0,xs:12,children:Object(u.jsxs)(h.a,{px:1,display:"flex",alignItems:"center",minHeight:52,children:[Object(u.jsx)(h.a,{children:Object(u.jsx)(y.a,{label:"Enable autocomplete",control:Object(u.jsx)(g.a,{size:"small",checked:s,onChange:function(){d({type:"TOGGLE_AUTOCOMPLETE"}),X("AUTOCOMPLETE",!s)}})})}),Object(u.jsx)(h.a,{ml:2,children:Object(u.jsx)(y.a,{label:"Enable cache",control:Object(u.jsx)(g.a,{size:"small",checked:!l,onChange:function(){d({type:"NO_CACHE"}),X("NO_CACHE",!l)}})})}),Object(u.jsxs)(h.a,{ml:2,display:"flex",alignItems:"center",children:[Object(u.jsx)(y.a,{control:Object(u.jsx)(g.a,{size:"small",checked:j.limits.enable,onChange:function(){b({type:"TOGGLE_ENABLE_YAXIS_LIMITS"})}}),label:"Fix the limits for y-axis"}),j.limits.enable&&Object(u.jsxs)(h.a,{display:"grid",gridTemplateColumns:"120px 120px",gap:1,children:[Object(u.jsx)(ft.a,{label:"Min",type:"number",size:"small",variant:"outlined",defaultValue:j.limits.range[0],onChange:xn()((function(e){var t=e.target.value;b({type:"SET_YAXIS_LIMITS",payload:[+t,j.limits.range[1]]})}),750)}),Object(u.jsx)(ft.a,{label:"Max",type:"number",size:"small",variant:"outlined",defaultValue:j.limits.range[1],onChange:xn()((function(e){var t=e.target.value;b({type:"SET_YAXIS_LIMITS",payload:[j.limits.range[0],+t]})}),750)})]})]})]})})]})})]}),Object(u.jsx)(bn,{open:x,onClose:function(){return v(!1)}})]})},mn=n(115),yn=n.n(mn),gn=n(166),En=function(){var e=be(),t=e.query,n=e.displayType,r=e.serverUrl,c=e.time.period,i=e.queryControls.nocache,s=sn(),l=s.basicData,u=s.bearerData,d=s.authMethod,j=Object(a.useState)(!1),b=Object(o.a)(j,2),O=b[0],f=b[1],h=Object(a.useState)(),p=Object(o.a)(h,2),x=p[0],v=p[1],m=Object(a.useState)(),y=Object(o.a)(m,2),g=y[0],E=y[1],_=Object(a.useState)(),S=Object(o.a)(_,2),T=S[0],A=S[1],w=Object(a.useState)(),I=Object(o.a)(w,2),R=I[0],U=I[1];Object(a.useEffect)((function(){T&&(v(void 0),E(void 0))}),[T]);var k=Object(a.useMemo)((function(){if(!R)return!0;var e=(R.end-R.start)/3,t=e/(c.end-c.start)>=.7,n=c.end>R.end+e,a=c.start<R.start-e;return t||n||a}),[c]),D=function(){var e=Object(gn.a)(yn.a.mark((function e(){var a,r,i,o;return yn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H){e.next=2;break}return e.abrupt("return");case 2:return f(!0),U(c),a=new Headers,"BASIC_AUTH"===d&&a.set("Authorization","Basic "+btoa("".concat((null===l||void 0===l?void 0:l.login)||"",":").concat((null===l||void 0===l?void 0:l.password)||""))),"BEARER_AUTH"===d&&a.set("Authorization",(null===u||void 0===u?void 0:u.token)||""),e.prev=7,e.next=10,fetch(H,{headers:a});case 10:if(!(r=e.sent).ok){e.next=20;break}return X("LAST_QUERY",t),e.next=15,r.json();case 15:i=e.sent,A(void 0),"chart"===n?v(i.data.result):E(i.data.result),e.next=34;break;case 20:return e.t0=A,e.next=23,r.json();case 23:if(e.t2=o=e.sent,e.t1=null===e.t2,e.t1){e.next=27;break}e.t1=void 0===o;case 27:if(!e.t1){e.next=31;break}e.t3=void 0,e.next=32;break;case 31:e.t3=o.error;case 32:e.t4=e.t3,(0,e.t0)(e.t4);case 34:e.next=39;break;case 36:e.prev=36,e.t5=e.catch(7),e.t5 instanceof Error&&A(e.t5.message);case 39:f(!1);case 40:case"end":return e.stop()}}),e,null,[[7,36]])})));return function(){return e.apply(this,arguments)}}(),H=Object(a.useMemo)((function(){if(c)if(r)if(t.trim()){if(function(e){var t;try{t=new URL(e)}catch(n){return!1}return"http:"===t.protocol||"https:"===t.protocol}(r)){var e=(c.end-c.start)/2,a=Object(C.a)(Object(C.a)({},c),{},{start:c.start-e,end:c.end+e});return"chart"===n?function(e,t,n,a){return"".concat(e,"/api/v1/query_range?query=").concat(encodeURIComponent(t),"&start=").concat(n.start,"&end=").concat(n.end,"&step=").concat(n.step).concat(a?"&nocache=1":"")}(r,t,a,i):function(e,t,n){return"".concat(e,"/api/v1/query?query=").concat(encodeURIComponent(t),"&start=").concat(n.start,"&end=").concat(n.end,"&step=").concat(n.step)}(r,t,c)}A("Please provide a valid URL")}else A("Please enter a valid Query and execute it");else A("Please enter Server URL")}),[r,c,n]);return Object(a.useEffect)((function(){U(void 0)}),[t]),Object(a.useEffect)((function(){D()}),[r,n]),Object(a.useEffect)((function(){k&&D()}),[c]),{fetchUrl:H,isLoading:O,graphData:x,liveData:g,error:T}},_n=function(e){var t=e.data,n=j().showInfoMessage,r=Object(a.useMemo)((function(){return JSON.stringify(t,null,2)}),[t]);return Object(u.jsxs)(h.a,{position:"relative",children:[Object(u.jsx)(h.a,{flexDirection:"column",justifyContent:"flex-end",display:"flex",style:{position:"fixed",right:"16px"},children:Object(u.jsx)(Qt.a,{variant:"outlined",onClick:function(e){navigator.clipboard.writeText(r),n("Formatted JSON has been copied"),e.preventDefault()},children:"Copy JSON"})}),Object(u.jsx)("pre",{children:r})]})},Sn=n(167),Tn=n.n(Sn),An=function(e){var t=e.url,n=j().showInfoMessage;return Object(u.jsx)(h.a,{pl:2,py:1,flexShrink:0,display:"flex",children:Object(u.jsx)(E.a,{title:"Copy Query URL",children:Object(u.jsx)(_.a,{size:"small",onClick:function(e){t&&(navigator.clipboard.writeText(t),n("Value has been copied"),e.preventDefault())},children:Object(u.jsx)(Tn.a,{style:{color:"white"}})})})})},Cn=function(){var e=be(),t=e.displayType,n=e.time.period,a=En(),r=a.fetchUrl,c=a.isLoading,i=a.liveData,o=a.graphData,s=a.error;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O.a,{position:"static",children:Object(u.jsxs)(f.a,{children:[Object(u.jsxs)(h.a,{display:"flex",children:[Object(u.jsxs)(p.a,{variant:"h5",children:[Object(u.jsx)("span",{style:{fontWeight:"bolder"},children:"VM"}),Object(u.jsx)("span",{style:{fontWeight:"lighter"},children:"UI"})]}),Object(u.jsx)("div",{style:{fontSize:"10px",marginTop:"-2px"},children:Object(u.jsx)("div",{children:"BETA"})})]}),Object(u.jsx)("div",{style:{fontSize:"10px",position:"absolute",top:"40px",opacity:".4"},children:Object(u.jsx)(x.a,{color:"inherit",href:"https://github.com/VictoriaMetrics/VictoriaMetrics/issues/new",target:"_blank",children:"Create an issue"})}),Object(u.jsx)(h.a,{ml:4,flexGrow:1,children:Object(u.jsx)(me,{})}),Object(u.jsx)(Re,{}),Object(u.jsx)(An,{url:r})]})}),Object(u.jsxs)(h.a,{p:2,display:"grid",gridTemplateRows:"auto 1fr",gap:"20px",style:{minHeight:"calc(100vh - 64px)"},children:[Object(u.jsx)(h.a,{children:Object(u.jsx)(vn,{})}),Object(u.jsxs)(h.a,{height:"100%",children:[c&&Object(u.jsx)(v.a,{in:c,style:{transitionDelay:c?"300ms":"0ms"},children:Object(u.jsx)(h.a,{alignItems:"center",justifyContent:"center",flexDirection:"column",display:"flex",style:{width:"100%",maxWidth:"calc(100vw - 32px)",position:"absolute",height:"50%",background:"linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7), rgba(255,255,255,0))"},children:Object(u.jsx)(m.a,{})})}),Object(u.jsxs)(h.a,{height:"100%",p:3,bgcolor:"#fff",children:[s&&Object(u.jsx)(l.a,{color:"error",severity:"error",style:{fontSize:"14px"},children:s}),o&&n&&"chart"===t&&Object(u.jsx)(tt,{data:o}),i&&"code"===t&&Object(u.jsx)(_n,{data:i}),i&&"table"===t&&Object(u.jsx)(ut,{data:i})]})]})]})]})},wn=n(173),In=n(306),Rn=n(322),Un=n(305),kn=n(301),Dn=n(168),Hn=function(){var e=Object(wn.a)({palette:{primary:{main:"#3F51B5"},secondary:{main:"#F50057"}},components:{MuiSwitch:{defaultProps:{color:"secondary"}}},typography:{fontSize:10}});return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(Un.a,{})," ",Object(u.jsxs)(kn.b,{dateAdapter:Dn.a,children:[" ",Object(u.jsx)(In.a,{injectFirst:!0,children:Object(u.jsxs)(Rn.a,{theme:e,children:["  ",Object(u.jsxs)(he,{children:[" ",Object(u.jsxs)(ln,{children:[" ",Object(u.jsxs)(Pe,{children:[" ",Object(u.jsxs)(b,{children:[" ",Object(u.jsx)(Cn,{})]})]})]})]})]})})]})]})},Mn=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,351)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(Hn,{})}),document.getElementById("root")),Mn()}},[[231,1,2]]]);