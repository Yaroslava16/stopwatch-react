(this["webpackJsonpstopwatch-react"]=this["webpackJsonpstopwatch-react"]||[]).push([[0],{10:function(t,e,n){t.exports={Conteiner:"StopwatchDisplay_Conteiner__2RuBW"}},16:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(9),a=n.n(i),s=n(8),u=n(3),o=n(4),h=n(6),m=n(5),l=n(10),j=n.n(l),T=n(0),p=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.formatTime,n=t.currentTimeSec,r=t.currentTimeMin,c=t.currentTimeHours;return Object(T.jsx)("div",{className:j.a.Conteiner,children:Object(T.jsxs)("span",{children:[e(c),":",e(r),":",e(n)]})})}}]),n}(r.Component),b=n(2),S=n.n(b),f=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={running:!1,currentTimeSec:0,currentTimeMin:0,currentTimeHours:0},t.formatTime=function(t){var e=t.toString();return e.length<2&&(e="0"+e),e},t.start=function(){t.state.running||(t.setState({running:!0}),t.watch=setInterval((function(){return t.pace()}),1e3))},t.stop=function(){t.setState({running:!1,currentTimeSec:0,currentTimeMin:0,currentTimeHours:0}),clearInterval(t.watch)},t.wait=function(){t.setState({running:!1}),clearInterval(t.watch)},t.pace=function(){t.setState({currentTimeSec:t.state.currentTimeSec+1}),t.state.currentTimeSec>=60&&(t.setState({currentTimeMin:t.state.currentTimeMin+1}),t.setState({currentTimeSec:0})),t.state.currentTimeMin>=60&&(t.setState({currentTimeHours:t.state.currentTimeHours+1}),t.setState({currentTimeMin:0}))},t.reset=function(){t.setState({currentTimeSec:0,currentTimeMin:0,currentTimeHours:0})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(T.jsxs)("div",{className:S.a.Conteiner,children:[Object(T.jsx)("h1",{children:"Stopwatch"}),Object(T.jsx)(p,Object(s.a)(Object(s.a)({useRef:"display"},this.state),{},{formatTime:this.formatTime})),!1===this.state.running&&Object(T.jsx)("button",{className:S.a.Btn,onClick:this.start,children:"START"}),!0===this.state.running&&Object(T.jsx)("button",{className:S.a.Btn,onClick:this.stop,children:"STOP"}),Object(T.jsx)("button",{className:S.a.Btn,onClick:this.wait,children:"WAIT"}),Object(T.jsx)("button",{className:S.a.Btn,onClick:this.reset,children:"RESET"})]})}}]),n}(r.Component);a.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(f,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={Conteiner:"Stopwatch_Conteiner__2xpdN",Btn:"Stopwatch_Btn__2fsnV",third:"Stopwatch_third__LtVe_"}}},[[16,1,2]]]);
//# sourceMappingURL=main.1a5b18fa.chunk.js.map