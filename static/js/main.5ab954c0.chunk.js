(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={feedback:"Feedback_feedback__30sK5",title:"Feedback_title__XQaem",message:"Feedback_message__iOH1S",btn:"Feedback_btn__mHHBS"}},16:function(e,t,a){},17:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(5),s=a.n(r),o=(a(16),a(6)),i=a(7),d=a(8),b=a(11),l=a(10),u=(a(17),a(1)),j=a.n(u),h=a(0);function v(e){var t=e.title,a=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{className:j.a.title,children:t}),a]})}function k(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,r=e.positivePercentage;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Good: ",t]}),Object(h.jsxs)("p",{children:["Neutral: ",a]}),Object(h.jsxs)("p",{children:["Bad: ",n]}),Object(h.jsxs)("p",{children:["Total: ",c]}),Object(h.jsxs)("p",{children:["Positive feedback: ",r,"%"]})]})}var O=a(9),f=a.n(O);function g(e){var t=e.options,a=e.onLeaveFeedback;return Object(h.jsx)("div",{children:t.map((function(e){return Object(h.jsx)("button",{className:j.a.btn,type:"button",name:e,onClick:a,children:e},f.a.generate())}))})}function p(e){var t=e.message;return Object(h.jsx)("p",{className:j.a.message,children:t})}var x=function(e){Object(b.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),a=100*e.state.good/t;return Math.round(a)},e.onLeaveFeedback=function(t){var a=t.target.name;e.setState((function(e){return Object(o.a)({},a,e[a]+1)}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage(),s=Object.keys(this.state);return Object(h.jsxs)("div",{className:j.a.feedback,children:[Object(h.jsx)(v,{title:"Please leave feedback",children:Object(h.jsx)(g,{options:s,onLeaveFeedback:this.onLeaveFeedback})}),Object(h.jsx)(v,{title:"Statistics",children:0!==c?Object(h.jsx)(k,{good:t,neutral:a,bad:n,total:c,positivePercentage:r}):Object(h.jsx)(p,{message:"No feedback given"})})]})}}]),a}(n.Component),m=x;s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.5ab954c0.chunk.js.map