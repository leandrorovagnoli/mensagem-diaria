(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{13:function(e,t,a){},27:function(e,t,a){e.exports=a(58)},34:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),u=a.n(c),s=a(26),l=a(4),i=a.n(l),o=a(6),m=a(3),d=(a(13),a(24)),p=a.n(d);var f=function(e,t){if(!e)return"";var a=e.substring(0,10);return p()(a).locale("pt-BR").format(t)};var g=function(e){var t=e.updateDailyMessage,a=(e.setCurrentDailyMessage,e.currentDailyMessage),c=e.setEditing,u=Object(n.useState)(a.author),s=Object(m.a)(u,2),l=s[0],i=s[1],o=Object(n.useState)(a.message),d=Object(m.a)(o,2),p=d[0],g=d[1],E=Object(n.useState)(a.date),v=Object(m.a)(E,2),b=v[0],h=v[1];return Object(n.useEffect)((function(){g(a.message),i(a.author),h(a.date)}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{name:"topBoxForm",onSubmit:function(e){e.preventDefault(),t(a.id,{id:a.id,author:l,message:p,date:b}),c(!1),i(""),g(""),h("")}},r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"author"},"Autor: "),r.a.createElement("input",{type:"text",id:"author",name:"author",required:!0,value:l,onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"dailyMessage"},"Mensagem: "),r.a.createElement("textarea",{name:"dailyMessage",id:"dailyMessage",required:!0,value:p,onChange:function(e){return g(e.target.value)}})),r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"dateMessage"},"Data: "),r.a.createElement("input",{type:"Date",maxLength:"10",id:"dateMessage",name:"dateMessage",required:!0,value:function(e){return f(e,"YYYY-MM-DD")}(b),onChange:function(e){return h(e.target.value)}})),r.a.createElement("button",{type:"submit"},"Salvar")))};var E=function(e){var t=e.addDailyMessage,a=Object(n.useState)(""),c=Object(m.a)(a,2),u=c[0],s=c[1],l=Object(n.useState)(""),i=Object(m.a)(l,2),o=i[0],d=i[1],p=Object(n.useState)(""),f=Object(m.a)(p,2),g=f[0],E=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{name:"topBoxForm",onSubmit:function(e){e.preventDefault(),t({author:u,message:o,date:g}),s(""),d(""),E("")}},r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"author"},"Autor: "),r.a.createElement("input",{type:"text",id:"author",name:"author",required:!0,value:u,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"message"},"Mensagem: "),r.a.createElement("textarea",{name:"message",id:"message",required:!0,value:o,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"date"},"Data: "),r.a.createElement("input",{type:"date",id:"date",name:"date",required:!0,value:g,onChange:function(e){return E(e.target.value)}})),r.a.createElement("button",{type:"submit"},"Salvar")))},v=(a(34),a(9)),b=a(11);var h=function(e){var t,a=e.data,n=e.deleteDailyMessage,c=e.editRow;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"content-block"},r.a.createElement("div",{className:"edit-delete-bar"},r.a.createElement("div",{className:"editDiv"},r.a.createElement("a",{type:"submit",href:"/",onClick:function(e){e.preventDefault(),c(a)}},r.a.createElement(v.a,{icon:b.a,className:"iconHover"}))),r.a.createElement("div",{className:"deleteDiv"},r.a.createElement("a",{type:"submit",href:"/",onClick:function(e){e.preventDefault(),n(a.id)}},r.a.createElement(v.a,{icon:b.b,className:"iconHover"})))),r.a.createElement("p",null,a.message),r.a.createElement("span",{name:"spanAuthor"},a.author),r.a.createElement("span",{name:"spanDate"},(t=a.date,f(t,"DD/MM/YYYY")))))},y=a(25),j=a.n(y).a.create({baseURL:"https://mensagemdiaria-webapi.azurewebsites.net/v1/dailymessages"});a(55),a(56),a(57);var D=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(!1),l=Object(m.a)(u,2),d=l[0],p=l[1],f=Object(n.useState)({_id:null,author:"",dailyMessage:"",dateMessage:""}),v=Object(m.a)(f,2),b=v[0],y=v[1];function D(){return(D=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.post("/",{author:t.author,message:t.message,date:t.date});case 2:n=e.sent,c([].concat(Object(s.a)(a),[n.data]));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.delete("/".concat(t));case 2:c(a.filter((function(e){return e.id!==t}))),p(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(o.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.put("/".concat(t),{author:n.author,message:n.message,date:n.date});case 2:c(a.map((function(e){return e.id===t?n:e})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){p(!0),y({id:e.id,author:e.author,date:e.date,message:e.message})}return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"app"},r.a.createElement("main",null,r.a.createElement("div",{className:"topBox"},r.a.createElement("strong",null,"Cadastro de Mensagem Di\xe1ria"),d?r.a.createElement(g,{updateDailyMessage:function(e,t){return x.apply(this,arguments)},setCurrentDailyMessage:y,currentDailyMessage:b,setEditing:p}):r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{addDailyMessage:function(e){return D.apply(this,arguments)}})))),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,a.map((function(e){return r.a.createElement(h,{key:e.id,data:e,deleteDailyMessage:M,editRow:k})}))))))};u.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d5a827a7.chunk.js.map