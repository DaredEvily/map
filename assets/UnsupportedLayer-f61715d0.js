import{dW as n,f as s,g as i,j as a,dt as d,F as l}from"./index-8edf265f.js";import{m as u}from"./MultiOriginJSONSupport-2c2935ac.js";import{j as y}from"./PortalLayer-394f0be4.js";import"./portalItemUtils-1acb3c0b.js";let t=class extends y(u(d)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{n(()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let p="Unsupported layer type";r&&(p+=" "+r),o(new l("layer:unsupported-layer-type",p,{layerType:r}))})}))}read(e,o){const r={resourceInfo:e};e.id!=null&&(r.id=e.id),e.title!=null&&(r.title=e.title),super.read(r,o)}write(e,o){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};s([i({readOnly:!0})],t.prototype,"resourceInfo",void 0),s([i({type:["show","hide"]})],t.prototype,"listMode",void 0),s([i({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),s([i({json:{read:!1},readOnly:!0,value:"unsupported"})],t.prototype,"type",void 0),t=s([a("esri.layers.UnsupportedLayer")],t);const I=t;export{I as default};
