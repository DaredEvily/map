import{f as l,g as r,aP as i,aQ as u,aR as n,j as p,aB as c}from"./index-8edf265f.js";var t;let e=t=class extends c{constructor(o){super(o),this.color=null,this.label=null,this.value=null}writeValue(o,s,a){s[a]=o??0}clone(){return new t({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};l([r({type:i,json:{type:[u],write:!0}})],e.prototype,"color",void 0),l([r({type:String,json:{write:!0}})],e.prototype,"label",void 0),l([r({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],e.prototype,"value",void 0),l([n("value")],e.prototype,"writeValue",null),e=t=l([p("esri.renderers.visualVariables.support.ColorStop")],e);const y=e;export{y as a};