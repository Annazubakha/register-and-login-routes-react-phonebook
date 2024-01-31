"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[728],{8728:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(2791),r=n(4420),s=n(9439),i=n(5984),l=n(2564),c=n(2187),u=n(4316),m=n(6351),p=n(7234),x=n(184),o=function(){var e=(0,r.I0)(),t=(0,a.useState)(""),n=(0,s.Z)(t,2),o=n[0],d=n[1],f=(0,a.useState)(""),h=(0,s.Z)(f,2),b=h[0],j=h[1],y=(0,r.v9)(m.Af),v=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":d(a);break;case"number":j(a)}},w=function(){d(""),j("")};return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("form",{className:"flex gap-4 pb-[24px]",onSubmit:function(t){t.preventDefault(),function(e){var t=y.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}));return t?l.Am.error("".concat(e," is already in contacts.")):t}(o)||(e((0,p.je)({name:o,number:b})),l.Am.success("".concat(o," was added to contacts successfully.")),w())},children:[(0,x.jsxs)("label",{className:"flex gap-2 justify-between items-center text-[28px] text-primary",children:[(0,x.jsx)(c.J4e,{}),(0,x.jsx)("input",{type:"text",pattern:"^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)",title:"Please enter name like this: Anna Zubakha",minLength:"4",placeholder:"Type here the full name",className:"input input-bordered input-primary w-[250px]",name:"name",id:(0,i.x0)(),required:!0,value:o,onChange:v})]}),(0,x.jsxs)("label",{className:"flex gap-2 justify-between items-center text-[28px] text-primary",children:[(0,x.jsx)(u.I7T,{}),(0,x.jsx)("input",{className:"input input-bordered input-primary w-[250px]",placeholder:"Type here the phone number",title:"Please enter number like this: 123-456-7890",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",type:"tel",name:"number",required:!0,id:(0,i.x0)(),value:b,onChange:v})]}),(0,x.jsx)("div",{className:"text-center",children:(0,x.jsx)("button",{className:"btn btn-outline btn-primary w-[120px] text-[16px]",type:"submit",children:"Add contact"})})]})})},d=function(e){var t=e.name,n=e.number,a=e.id,s=(0,r.I0)();return(0,x.jsx)("li",{className:" text-primary  font-semibold",children:(0,x.jsxs)("div",{className:"flex  gap-3  items-center justify-between w-[600px]",children:[t,": ",n,(0,x.jsx)("button",{className:"btn  btn-sm btn-outline btn-primary w-[80px] text-[16px]",type:"button",onClick:function(){return s((0,p.xX)(a))},children:"Delete"})]})},a)},f=function(){var e=(0,r.v9)(m.DI);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("ol",{className:"flex flex-col gap-2 text-[28px] font-[500] list-decimal pl-[32px] text-primary]",children:e.map((function(e){return(0,x.jsx)(d,{name:e.name,number:e.number,id:e.id},e.id)}))})})},h=n(6895),b=function(){var e=(0,r.I0)();return(0,x.jsxs)("label",{className:"flex gap-4  items-center text-[24px] text-primary",children:[(0,x.jsx)(u.ulB,{}),(0,x.jsx)("input",{type:"text",placeholder:"Type here the name of the contact to find it",className:"input input-bordered input-primary w-[442px]",name:"filter",onChange:function(t){return e((0,h.x)(t.target.value))}})]})},j=function(){var e=(0,r.I0)();return(0,a.useEffect)((function(){e((0,p.VC)())}),[e]),(0,x.jsxs)("div",{className:"font-['Oswald'] italic font-normal h-[calc(100vh_-_80px)] bg-base-300 px-16 py-16 flex  gap-5 flex-col items-left",children:[(0,x.jsx)(o,{}),(0,x.jsx)("div",{className:"divider divider-primary text-[28px] text-primary font-bold ",children:"Contacts"}),(0,x.jsx)(b,{}),(0,x.jsx)("div",{className:"flex  gap-5 flex-col items-left justify-start",children:(0,x.jsx)(f,{})})]})}}}]);
//# sourceMappingURL=728.85b58cea.chunk.js.map