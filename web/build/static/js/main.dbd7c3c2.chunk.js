(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{10:function(e,a,t){},24:function(e,a,t){e.exports=t(55)},31:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),s=t.n(c),l=t(23),u=t(4),i=t.n(u),o=t(3),m=(t(10),t(21)),d=t.n(m);var g=function(e,a){if(!e)return"";var t=e.substring(0,10);return d()(t).locale("pt-BR").format(a)};var p=function(e){var a,t=e.updateDailyMessage,c=(e.setCurrentDailyMessage,e.currentDailyMessage),s=e.setEditing,l=Object(n.useState)(c.author),u=Object(o.a)(l,2),i=u[0],m=u[1],d=Object(n.useState)(c.dailyMessage),p=Object(o.a)(d,2),f=p[0],E=p[1],v=Object(n.useState)(c.dateMessage),b=Object(o.a)(v,2),h=b[0],M=b[1];return Object(n.useEffect)((function(){E(c.dailyMessage),m(c.author),M(c.dateMessage)}),[c]),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{name:"topBoxForm",onSubmit:function(e){e.preventDefault(),t(c._id,{_id:c._id,author:i,dailyMessage:f,dateMessage:h}),s(!1),m(""),E(""),M("")}},r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"author"},"Autor: "),r.a.createElement("input",{type:"text",id:"author",name:"author",required:!0,value:i,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"dailyMessage"},"Mensagem: "),r.a.createElement("textarea",{name:"dailyMessage",id:"dailyMessage",required:!0,value:f,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"dateMessage"},"Data: "),r.a.createElement("input",{type:"Date",maxLength:"10",id:"dateMessage",name:"dateMessage",required:!0,value:(a=h,g(a,"YYYY-MM-DD")),onChange:function(e){return M(e.target.value)}})),r.a.createElement("button",{type:"submit"},"Salvar")))};var f=function(e){var a=e.addDailyMessage,t=Object(n.useState)(""),c=Object(o.a)(t,2),s=c[0],l=c[1],u=Object(n.useState)(""),i=Object(o.a)(u,2),m=i[0],d=i[1],g=Object(n.useState)(""),p=Object(o.a)(g,2),f=p[0],E=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{name:"topBoxForm",onSubmit:function(e){e.preventDefault(),a({author:s,dailyMessage:m,dateMessage:f}),l(""),d(""),E("")}},r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"author"},"Autor: "),r.a.createElement("input",{type:"text",id:"author",name:"author",required:!0,value:s,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"message"},"Mensagem: "),r.a.createElement("textarea",{name:"message",id:"message",required:!0,value:m,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"date"},"Data: "),r.a.createElement("input",{type:"date",id:"date",name:"date",required:!0,value:f,onChange:function(e){return E(e.target.value)}})),r.a.createElement("button",{type:"submit"},"Salvar")))},E=(t(31),t(6)),v=t(8);var b=function(e){var a,t=e.data,n=e.deleteDailyMessage,c=e.editRow;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"content-block"},r.a.createElement("div",{className:"edit-delete-bar"},r.a.createElement("div",{className:"editDiv"},r.a.createElement("a",{type:"submit",href:"/",onClick:function(e){e.preventDefault(),c(t)}},r.a.createElement(E.a,{icon:v.a,className:"iconHover"}))),r.a.createElement("div",{className:"deleteDiv"},r.a.createElement("a",{type:"submit",href:"/",onClick:function(e){e.preventDefault(),n(t._id)}},r.a.createElement(E.a,{icon:v.b,className:"iconHover"})))),r.a.createElement("p",null,t.dailyMessage),r.a.createElement("span",{name:"spanAuthor"},t.author),r.a.createElement("span",{name:"spanDate"},(a=t.dateMessage,g(a,"DD/MM/YYYY")))))},h=t(22),M=t.n(h).a.create({baseURL:"http://localhost:44350/v1/dailymessages"});t(52),t(53),t(54);var y=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(!1),u=Object(o.a)(s,2),m=u[0],d=u[1],g=Object(n.useState)({_id:null,author:"",dailyMessage:"",dateMessage:""}),E=Object(o.a)(g,2),v=E[0],h=E[1];function y(e){return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(M.delete("/mensagem/".concat(e)));case 2:c(t.filter((function(a){return a.id!==e}))),d(!1);case 4:case"end":return a.stop()}}))}function D(e){d(!0),h({_id:e._id,author:e.author,dateMessage:e.dateMessage,dailyMessage:e.dailyMessage})}return Object(n.useEffect)((function(){!function(){var e;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(M.get("/"));case 2:e=a.sent,c(e.data);case 4:case"end":return a.stop()}}))}()})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"app"},r.a.createElement("main",null,r.a.createElement("div",{className:"topBox"},r.a.createElement("strong",null,"Cadastro de Mensagem Di\xe1ria"),m?r.a.createElement(p,{updateDailyMessage:function(e,a){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(M.put("/mensagem/".concat(e),a));case 2:c(t.map((function(t){return t._id===e?a:t})));case 3:case"end":return n.stop()}}))},setCurrentDailyMessage:h,currentDailyMessage:v,setEditing:d}):r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{addDailyMessage:function(e){var a;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(M.post("/",e));case 2:a=n.sent,c([].concat(Object(l.a)(t),[a.data]));case 4:case"end":return n.stop()}}))}})))),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(b,{key:e._id,data:e,deleteDailyMessage:y,editRow:D})}))))))};s.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.dbd7c3c2.chunk.js.map