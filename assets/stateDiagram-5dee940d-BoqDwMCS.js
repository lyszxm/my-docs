import{p as t,d as e,s as a}from"./styles-0784dbeb-BetALVDb.js";import{s as i}from"./transform-HRDlW471.js";import{G as r}from"./graph-BFMCWEOQ.js";import{l as n}from"./layout-CEsxQayv.js";import{c as s,l as d,h as o,i as g,ak as p,y as c}from"./mermaid.core-C_riceSj.js";import{l as h}from"./line-1zszC37A.js";import"./app-CPFfduuf.js";import"./commonjsHelpers-lGe4XDVY.js";import"./array-Cr1T_sRR.js";import"./path-Bp026QlT.js";import"./point-D2qQkQ1r.js";const l=(t,e)=>{const a=t.append("text").attr("x",2*s().state.padding).attr("y",s().state.textHeight+1.3*s().state.padding).attr("font-size",s().state.fontSize).attr("class","state-title").text(e.descriptions[0]).node().getBBox(),i=a.height,r=t.append("text").attr("x",s().state.padding).attr("y",i+.4*s().state.padding+s().state.dividerMargin+s().state.textHeight).attr("class","state-description");let n=!0,d=!0;e.descriptions.forEach((function(t){n||(!function(t,e,a){const i=t.append("tspan").attr("x",2*s().state.padding).text(e);a||i.attr("dy",s().state.textHeight)}(r,t,d),d=!1),n=!1}));const o=t.append("line").attr("x1",s().state.padding).attr("y1",s().state.padding+i+s().state.dividerMargin/2).attr("y2",s().state.padding+i+s().state.dividerMargin/2).attr("class","descr-divider"),g=r.node().getBBox(),p=Math.max(g.width,a.width);return o.attr("x2",p+3*s().state.padding),t.insert("rect",":first-child").attr("x",s().state.padding).attr("y",s().state.padding).attr("width",p+2*s().state.padding).attr("height",g.height+i+2*s().state.padding).attr("rx",s().state.radius),t},x=(t,e,a)=>{const i=s().state.padding,r=2*s().state.padding,n=t.node().getBBox(),d=n.width,o=n.x,g=t.append("text").attr("x",0).attr("y",s().state.titleShift).attr("font-size",s().state.fontSize).attr("class","state-title").text(e.id),p=g.node().getBBox().width+r;let c,h=Math.max(p,d);h===d&&(h+=r);const l=t.node().getBBox();e.doc,c=o-i,p>d&&(c=(d-h)/2+i),Math.abs(o-l.x)<i&&p>d&&(c=o-(p-d)/2);const x=1-s().state.textHeight;return t.insert("rect",":first-child").attr("x",c).attr("y",x).attr("class",a?"alt-composit":"composit").attr("width",h).attr("height",l.height+s().state.textHeight+s().state.titleShift+1).attr("rx","0"),g.attr("x",c+i),p<=d&&g.attr("x",o+(h-r)/2-p/2+i),t.insert("rect",":first-child").attr("x",c).attr("y",s().state.titleShift-s().state.textHeight-s().state.padding).attr("width",h).attr("height",3*s().state.textHeight).attr("rx",s().state.radius),t.insert("rect",":first-child").attr("x",c).attr("y",s().state.titleShift-s().state.textHeight-s().state.padding).attr("width",h).attr("height",l.height+3+2*s().state.textHeight).attr("rx",s().state.radius),t},f=(t,e)=>{e.attr("class","state-note");const a=e.append("rect").attr("x",0).attr("y",s().state.padding),i=e.append("g"),{textWidth:r,textHeight:n}=((t,e,a,i)=>{let r=0;const n=i.append("text");n.style("text-anchor","start"),n.attr("class","noteText");let d=t.replace(/\r\n/g,"<br/>");d=d.replace(/\n/g,"<br/>");const o=d.split(g.lineBreakRegex);let p=1.25*s().state.noteMargin;for(const g of o){const t=g.trim();if(t.length>0){const i=n.append("tspan");i.text(t),0===p&&(p+=i.node().getBBox().height),r+=p,i.attr("x",e+s().state.noteMargin),i.attr("y",a+r+1.25*s().state.noteMargin)}}return{textWidth:n.node().getBBox().width,textHeight:r}})(t,0,0,i);return a.attr("height",n+2*s().state.noteMargin),a.attr("width",r+2*s().state.noteMargin),a},u=function(t,e){const a=e.id,i={id:a,label:e.id,width:0,height:0},r=t.append("g").attr("id",a).attr("class","stateGroup");"start"===e.type&&(t=>{t.append("circle").attr("class","start-state").attr("r",s().state.sizeUnit).attr("cx",s().state.padding+s().state.sizeUnit).attr("cy",s().state.padding+s().state.sizeUnit)})(r),"end"===e.type&&(t=>{t.append("circle").attr("class","end-state-outer").attr("r",s().state.sizeUnit+s().state.miniPadding).attr("cx",s().state.padding+s().state.sizeUnit+s().state.miniPadding).attr("cy",s().state.padding+s().state.sizeUnit+s().state.miniPadding),t.append("circle").attr("class","end-state-inner").attr("r",s().state.sizeUnit).attr("cx",s().state.padding+s().state.sizeUnit+2).attr("cy",s().state.padding+s().state.sizeUnit+2)})(r),"fork"!==e.type&&"join"!==e.type||((t,e)=>{let a=s().state.forkWidth,i=s().state.forkHeight;if(e.parentId){let t=a;a=i,i=t}t.append("rect").style("stroke","black").style("fill","black").attr("width",a).attr("height",i).attr("x",s().state.padding).attr("y",s().state.padding)})(r,e),"note"===e.type&&f(e.note.text,r),"divider"===e.type&&(t=>{t.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",s().state.textHeight).attr("class","divider").attr("x2",2*s().state.textHeight).attr("y1",0).attr("y2",0)})(r),"default"===e.type&&0===e.descriptions.length&&((t,e)=>{const a=t.append("text").attr("x",2*s().state.padding).attr("y",s().state.textHeight+2*s().state.padding).attr("font-size",s().state.fontSize).attr("class","state-title").text(e.id),i=a.node().getBBox();t.insert("rect",":first-child").attr("x",s().state.padding).attr("y",s().state.padding).attr("width",i.width+2*s().state.padding).attr("height",i.height+2*s().state.padding).attr("rx",s().state.radius)})(r,e),"default"===e.type&&e.descriptions.length>0&&l(r,e);const n=r.node().getBBox();return i.width=n.width+2*s().state.padding,i.height=n.height+2*s().state.padding,i};let y=0;let m;const w={},b=(t,a,i,o,l,f,B)=>{const N=new r({compound:!0,multigraph:!0});let k,E=!0;for(k=0;k<t.length;k++)if("relation"===t[k].stmt){E=!1;break}i?N.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:E?1:m.edgeLengthFactor,nodeSep:E?1:50,isMultiGraph:!0}):N.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:E?1:m.edgeLengthFactor,nodeSep:E?1:50,ranker:"tight-tree",isMultiGraph:!0}),N.setDefaultEdgeLabel((function(){return{}})),B.db.extract(t);const M=B.db.getStates(),S=B.db.getRelations(),v=Object.keys(M);for(const e of v){const t=M[e];let r;if(i&&(t.parentId=i),t.doc){let e=a.append("g").attr("id",t.id).attr("class","stateGroup");r=b(t.doc,e,t.id,!o,l,f,B);{e=x(e,t,o);let a=e.node().getBBox();r.width=a.width,r.height=a.height+m.padding/2,w[t.id]={y:m.compositTitleSize}}}else r=u(a,t);if(t.note){const e={descriptions:[],id:t.id+"-note",note:t.note,type:"note"},i=u(a,e);"left of"===t.note.position?(N.setNode(r.id+"-note",i),N.setNode(r.id,r)):(N.setNode(r.id,r),N.setNode(r.id+"-note",i)),N.setParent(r.id,r.id+"-group"),N.setParent(r.id+"-note",r.id+"-group")}else N.setNode(r.id,r)}d.debug("Count=",N.nodeCount(),N);let H=0;S.forEach((function(t){var e;H++,d.debug("Setting edge",t),N.setEdge(t.id1,t.id2,{relation:t,width:(e=t.title,e?e.length*m.fontSizeFactor:1),height:m.labelHeight*g.getRows(t.title).length,labelpos:"c"},"id"+H)})),n(N),d.debug("Graph after layout",N.nodes());const z=a.node();N.nodes().forEach((function(t){if(void 0!==t&&void 0!==N.node(t)){d.warn("Node "+t+": "+JSON.stringify(N.node(t))),l.select("#"+z.id+" #"+t).attr("transform","translate("+(N.node(t).x-N.node(t).width/2)+","+(N.node(t).y+(w[t]?w[t].y:0)-N.node(t).height/2)+" )"),l.select("#"+z.id+" #"+t).attr("data-x-shift",N.node(t).x-N.node(t).width/2);f.querySelectorAll("#"+z.id+" #"+t+" .divider").forEach((t=>{const e=t.parentElement;let a=0,i=0;e&&(e.parentElement&&(a=e.parentElement.getBBox().width),i=parseInt(e.getAttribute("data-x-shift"),10),Number.isNaN(i)&&(i=0)),t.setAttribute("x1",0-i+8),t.setAttribute("x2",a-i-8)}))}else d.debug("No Node "+t+": "+JSON.stringify(N.node(t)))}));let j=z.getBBox();N.edges().forEach((function(t){void 0!==t&&void 0!==N.edge(t)&&(d.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(N.edge(t))),function(t,a,i){a.points=a.points.filter((t=>!Number.isNaN(t.y)));const r=a.points,n=h().x((function(t){return t.x})).y((function(t){return t.y})).curve(p),o=t.append("path").attr("d",n(r)).attr("id","edge"+y).attr("class","transition");let l="";if(s().state.arrowMarkerAbsolute&&(l=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,l=l.replace(/\(/g,"\\("),l=l.replace(/\)/g,"\\)")),o.attr("marker-end","url("+l+"#"+function(t){switch(e.relationType.DEPENDENCY){case e.relationType.AGGREGATION:return"aggregation";case e.relationType.EXTENSION:return"extension";case e.relationType.COMPOSITION:return"composition";case e.relationType.DEPENDENCY:return"dependency"}}()+"End)"),void 0!==i.title){const e=t.append("g").attr("class","stateLabel"),{x:r,y:n}=c.calcLabelPosition(a.points),o=g.getRows(i.title);let p=0;const h=[];let l=0,x=0;for(let t=0;t<=o.length;t++){const a=e.append("text").attr("text-anchor","middle").text(o[t]).attr("x",r).attr("y",n+p),i=a.node().getBBox();if(l=Math.max(l,i.width),x=Math.min(x,i.x),d.info(i.x,r,n+p),0===p){const t=a.node().getBBox();p=t.height,d.info("Title height",p,n)}h.push(a)}let f=p*o.length;if(o.length>1){const t=(o.length-1)*p*.5;h.forEach(((e,a)=>e.attr("y",n+a*p-t))),f=p*o.length}const u=e.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",r-l/2-s().state.padding/2).attr("y",n-f/2-s().state.padding/2-3.5).attr("width",l+s().state.padding).attr("height",f+s().state.padding),d.info(u)}y++}(a,N.edge(t),N.edge(t).relation))})),j=z.getBBox();const T={id:i||"root",label:i||"root",width:0,height:0};return T.width=j.width+2*m.padding,T.height=j.height+2*m.padding,d.debug("Doc rendered",T,N),T},B={parser:t,db:e,renderer:{setConf:function(){},draw:function(t,e,a,r){m=s().state;const n=s().securityLevel;let g;"sandbox"===n&&(g=i("#i"+e));const p=i("sandbox"===n?g.nodes()[0].contentDocument.body:"body"),c="sandbox"===n?g.nodes()[0].contentDocument:document;d.debug("Rendering diagram "+t);const h=p.select(`[id='${e}']`);h.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z");const l=r.db.getRootDoc();b(l,h,void 0,!1,p,c,r);const x=m.padding,f=h.node().getBBox(),u=f.width+2*x,y=f.height+2*x;o(h,y,1.75*u,m.useMaxWidth),h.attr("viewBox",`${f.x-m.padding}  ${f.y-m.padding} `+u+" "+y)}},styles:a,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,e.clear()}};export{B as diagram};
