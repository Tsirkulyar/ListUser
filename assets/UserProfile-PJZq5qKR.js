import{_,u as d,a as u,o as p,r as l,b as i,c as f,d as t,f as s,w as a,p as m,g as h}from"./index-tbGaPVRU.js";const r=e=>(m("data-v-828a5ae1"),e=e(),h(),e),b={class:"divBtn"},v=r(()=>t("button",{class:"btn"},"посты пользователя",-1)),S=r(()=>t("button",{class:"btn"},"альбомы пользователя",-1)),k={__name:"UserProfile",setup(e){const n=d(),c=u().params.id;return p(()=>{n.GetProfile(c)}),(B,I)=>{const o=l("router-link");return i(),f("div",null,[t("div",b,[s(o,{to:{name:"user.profile.post"}},{default:a(()=>[v]),_:1},8,["to"]),s(o,{to:{name:"user.profile.albums"}},{default:a(()=>[S]),_:1},8,["to"])])])}}},P=_(k,[["__scopeId","data-v-828a5ae1"]]);export{P as default};