import{G as e}from"./graph-BFMCWEOQ.js";import{S as t,r as n,e as r,s as o}from"./transform-HRDlW471.js";import{aa as l,a8 as a,o as s,l as i,p as c,c as d,i as p,r as b,q as w,n as f,y as u,t as g,ab as h}from"./mermaid.core-C_riceSj.js";import{r as y}from"./index-01f381cb-MEmmLdDV.js";import{c as k}from"./channel-BKSc2EV2.js";function x(e){return"string"==typeof e?new t([document.querySelectorAll(e)],[document.documentElement]):new t([r(e)],n)}function m(e,t){return!!e.children(t).length}function v(e){return T(e.v)+":"+T(e.w)+":"+T(e.name)}var S=/:/g;function T(e){return e?String(e).replace(S,"\\:"):""}function _(e,t){t&&e.attr("style",t)}function C(e,t,n){t&&e.attr("class",t).attr("class",n+" "+e.attr("class"))}function $(e,t){var n=t.graph();if(l(n)){var r=n.transition;if(a(r))return r(e)}return e}function E(e,t){var n=e.append("foreignObject").attr("width","100000"),r=n.append("xhtml:div");r.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":r.insert(o);break;case"object":r.insert((function(){return o}));break;default:r.html(o)}_(r,t.labelStyle),r.style("display","inline-block"),r.style("white-space","nowrap");var l=r.node().getBoundingClientRect();return n.attr("width",l.width).attr("height",l.height),n}const A={},B=async function(e,t,n,r,o,l){const a=r.select(`[id="${n}"]`),w=Object.keys(e);for(const f of w){const n=e[f];let r="default";n.classes.length>0&&(r=n.classes.join(" ")),r+=" flowchart-label";const w=s(n.styles);let u,g=void 0!==n.text?n.text:n.id;if(i.info("vertex",n,n.labelType),"markdown"===n.labelType)i.info("vertex",n,n.labelType);else if(c(d().flowchart.htmlLabels)){u=E(a,{label:g}).node(),u.parentNode.removeChild(u)}else{const e=o.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",w.labelStyle.replace("color:","fill:"));const t=g.split(p.lineBreakRegex);for(const n of t){const t=o.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=n,e.appendChild(t)}u=e}let h=0,y="";switch(n.type){case"round":h=5,y="rect";break;case"square":case"group":default:y="rect";break;case"diamond":y="question";break;case"hexagon":y="hexagon";break;case"odd":case"odd_right":y="rect_left_inv_arrow";break;case"lean_right":y="lean_right";break;case"lean_left":y="lean_left";break;case"trapezoid":y="trapezoid";break;case"inv_trapezoid":y="inv_trapezoid";break;case"circle":y="circle";break;case"ellipse":y="ellipse";break;case"stadium":y="stadium";break;case"subroutine":y="subroutine";break;case"cylinder":y="cylinder";break;case"doublecircle":y="doublecircle"}const k=await b(g,d());t.setNode(n.id,{labelStyle:w.labelStyle,shape:y,labelText:k,labelType:n.labelType,rx:h,ry:h,class:r,style:w.style,id:n.id,link:n.link,linkTarget:n.linkTarget,tooltip:l.db.getTooltip(n.id)||"",domId:l.db.lookUpDomId(n.id),haveCallback:n.haveCallback,width:"group"===n.type?500:void 0,dir:n.dir,type:n.type,props:n.props,padding:d().flowchart.padding}),i.info("setNode",{labelStyle:w.labelStyle,labelType:n.labelType,shape:y,labelText:k,rx:h,ry:h,class:r,style:w.style,id:n.id,domId:l.db.lookUpDomId(n.id),width:"group"===n.type?500:void 0,type:n.type,dir:n.dir,props:n.props,padding:d().flowchart.padding})}},L=async function(e,t,n){i.info("abc78 edges = ",e);let r,o,l=0,a={};if(void 0!==e.defaultStyle){const t=s(e.defaultStyle);r=t.style,o=t.labelStyle}for(const c of e){l++;const n="L-"+c.start+"-"+c.end;void 0===a[n]?(a[n]=0,i.info("abc78 new entry",n,a[n])):(a[n]++,i.info("abc78 new entry",n,a[n]));let u=n+"-"+a[n];i.info("abc78 new link id to be used is",n,u,a[n]);const g="LS-"+c.start,h="LE-"+c.end,y={style:"",labelStyle:""};switch(y.minlen=c.length||1,"arrow_open"===c.type?y.arrowhead="none":y.arrowhead="normal",y.arrowTypeStart="arrow_open",y.arrowTypeEnd="arrow_open",c.type){case"double_arrow_cross":y.arrowTypeStart="arrow_cross";case"arrow_cross":y.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":y.arrowTypeStart="arrow_point";case"arrow_point":y.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":y.arrowTypeStart="arrow_circle";case"arrow_circle":y.arrowTypeEnd="arrow_circle"}let k="",x="";switch(c.stroke){case"normal":k="fill:none;",void 0!==r&&(k=r),void 0!==o&&(x=o),y.thickness="normal",y.pattern="solid";break;case"dotted":y.thickness="normal",y.pattern="dotted",y.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":y.thickness="thick",y.pattern="solid",y.style="stroke-width: 3.5px;fill:none;";break;case"invisible":y.thickness="invisible",y.pattern="solid",y.style="stroke-width: 0;fill:none;"}if(void 0!==c.style){const e=s(c.style);k=e.style,x=e.labelStyle}y.style=y.style+=k,y.labelStyle=y.labelStyle+=x,void 0!==c.interpolate?y.curve=w(c.interpolate,f):void 0!==e.defaultInterpolate?y.curve=w(e.defaultInterpolate,f):y.curve=w(A.curve,f),void 0===c.text?void 0!==c.style&&(y.arrowheadStyle="fill: #333"):(y.arrowheadStyle="fill: #333",y.labelpos="c"),y.labelType=c.labelType,y.label=await b(c.text.replace(p.lineBreakRegex,"\n"),d()),void 0===c.style&&(y.style=y.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),y.labelStyle=y.labelStyle.replace("color:","fill:"),y.id=u,y.classes="flowchart-link "+g+" "+h,t.setEdge(c.start,c.end,y,l)}},N={setConf:function(e){const t=Object.keys(e);for(const n of t)A[n]=e[n]},addVertices:B,addEdges:L,getClasses:function(e,t){return t.db.getClasses()},draw:async function(t,n,r,l){i.info("Drawing flowchart");let a=l.db.getDirection();void 0===a&&(a="TD");const{securityLevel:s,flowchart:c}=d(),p=c.nodeSpacing||50,b=c.rankSpacing||50;let w;"sandbox"===s&&(w=o("#i"+n));const f=o("sandbox"===s?w.nodes()[0].contentDocument.body:"body"),h="sandbox"===s?w.nodes()[0].contentDocument:document,k=new e({multigraph:!0,compound:!0}).setGraph({rankdir:a,nodesep:p,ranksep:b,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let m;const v=l.db.getSubGraphs();i.info("Subgraphs - ",v);for(let e=v.length-1;e>=0;e--)m=v[e],i.info("Subgraph - ",m),l.db.addVertex(m.id,{text:m.title,type:m.labelType},"group",void 0,m.classes,m.dir);const S=l.db.getVertices(),T=l.db.getEdges();i.info("Edges",T);let _=0;for(_=v.length-1;_>=0;_--){m=v[_],x("cluster").append("text");for(let e=0;e<m.nodes.length;e++)i.info("Setting up subgraphs",m.nodes[e],m.id),k.setParent(m.nodes[e],m.id)}await B(S,k,n,f,h,l),await L(T,k);const C=f.select(`[id="${n}"]`),$=f.select("#"+n+" g");if(await y($,k,["point","circle","cross"],"flowchart",n),u.insertTitle(C,"flowchartTitleText",c.titleTopMargin,l.db.getDiagramTitle()),g(k,C,c.diagramPadding,c.useMaxWidth),l.db.indexNodes("subGraph"+_),!c.htmlLabels){const e=h.querySelectorAll('[id="'+n+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),n=h.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",e.width),n.setAttribute("height",e.height),t.insertBefore(n,t.firstChild)}}Object.keys(S).forEach((function(e){const t=S[e];if(t.link){const r=o("#"+n+' [id="'+e+'"]');if(r){const e=h.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",t.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",t.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===s?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):t.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",t.linkTarget);const n=r.insert((function(){return e}),":first-child"),o=r.select(".label-container");o&&n.append((function(){return o.node()}));const l=r.select(".label");l&&n.append((function(){return l.node()}))}}}))}},j=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .katex path {\n    fill: #000;\n    stroke: #000;\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ${((e,t)=>{const n=k,r=n(e,"r"),o=n(e,"g"),l=n(e,"b");return h(r,o,l,t)})(e.edgeLabelBackground,.5)};\n    // background-color: \n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`;export{_ as a,E as b,$ as c,C as d,v as e,N as f,j as g,m as i,x as s};