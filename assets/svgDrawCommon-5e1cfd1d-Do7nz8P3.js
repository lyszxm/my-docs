import{m as t,k as a}from"./mermaid.core-C_riceSj.js";const r=(t,a)=>{const r=t.append("rect");if(r.attr("x",a.x),r.attr("y",a.y),r.attr("fill",a.fill),r.attr("stroke",a.stroke),r.attr("width",a.width),r.attr("height",a.height),a.name&&r.attr("name",a.name),void 0!==a.rx&&r.attr("rx",a.rx),void 0!==a.ry&&r.attr("ry",a.ry),void 0!==a.attrs)for(const s in a.attrs)r.attr(s,a.attrs[s]);return void 0!==a.class&&r.attr("class",a.class),r},s=(t,a)=>{const s={x:a.startx,y:a.starty,width:a.stopx-a.startx,height:a.stopy-a.starty,fill:a.fill,stroke:a.stroke,class:"rect"};r(t,s).lower()},e=(a,r)=>{const s=r.text.replace(t," "),e=a.append("text");e.attr("x",r.x),e.attr("y",r.y),e.attr("class","legend"),e.style("text-anchor",r.anchor),void 0!==r.class&&e.attr("class",r.class);const n=e.append("tspan");return n.attr("x",r.x+2*r.textMargin),n.text(s),e},n=(t,r,s,e)=>{const n=t.append("image");n.attr("x",r),n.attr("y",s);const i=a.sanitizeUrl(e);n.attr("xlink:href",i)},i=(t,r,s,e)=>{const n=t.append("use");n.attr("x",r),n.attr("y",s);const i=a.sanitizeUrl(e);n.attr("xlink:href",`#${i}`)},o=()=>({x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}),x=()=>({x:0,y:0,width:100,height:100,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0});export{s as a,x as b,i as c,r as d,n as e,e as f,o as g};
