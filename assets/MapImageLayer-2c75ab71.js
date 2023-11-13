import{dl as $,dm as w,a$ as I,dz as b,bs as f,dG as T,N as g,aG as E,dH as O,dI as M,F as v,b as R,f as s,g as p,dJ as x,aV as F,aR as j,j as L,aQ as P,dt as J}from"./index-8edf265f.js";import{m as N}from"./MultiOriginJSONSupport-2c2935ac.js";import{i as U}from"./scaleUtils-9954959a.js";import{i as q}from"./APIKeyMixin-828ee2ca.js";import{E as A,f as _,X as k}from"./SublayersOwner-01b43c83.js";import{l as V}from"./ArcGISService-16130ddc.js";import{o as z}from"./CustomParametersMixin-6ff009ea.js";import{u as G}from"./OperationalLayer-1bd8068d.js";import{j as H}from"./PortalLayer-394f0be4.js";import{f as Z}from"./RefreshableLayer-1604ee0a.js";import{a as B}from"./TemporalLayer-64978c57.js";import{d as C}from"./commonProperties-43b199c9.js";import{m as D}from"./ExportImageParameters-229f0d8c.js";import{t as K}from"./imageBitmapUtils-ed29b33e.js";import{e as S}from"./sublayerUtils-44a79dda.js";import{e as W}from"./versionUtils-1e15284e.js";import"./DictionaryLoader-7ed264e8.js";import"./LRUCache-c7a923e7.js";import"./FieldsIndex-3d8128c0.js";import"./UnknownTimeZone-d5028e24.js";import"./portalItemUtils-1acb3c0b.js";import"./UniqueValueRenderer-36595a45.js";import"./LegendOptions-48c2523d.js";import"./diffUtils-9dbdd340.js";import"./SizeVariable-0dc1bc42.js";import"./colorRamps-763955b0.js";import"./ColorStop-7842c5e0.js";import"./jsonUtils-805d1979.js";import"./styleUtils-e8aad1b5.js";import"./jsonUtils-f9aedde2.js";import"./heatmapUtils-485005f9.js";import"./vec4f64-3c9d0901.js";import"./QueryTask-92b896f2.js";import"./Query-474f3baf.js";import"./Field-ebbe1dfc.js";import"./fieldType-088ee331.js";import"./executeForIds-ee169be0.js";import"./query-22d59433.js";import"./pbfQueryUtils-3b107514.js";import"./pbf-08dd563b.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-b4140d92.js";import"./executeQueryJSON-bdb53db6.js";import"./FeatureSet-4ba9f962.js";import"./executeQueryPBF-b4c7e501.js";import"./featureConversionUtils-bfaae0f6.js";import"./FeatureType-d929c2b3.js";import"./FeatureTemplate-580a397d.js";import"./LabelClass-67c7130a.js";import"./labelUtils-39618ac3.js";import"./defaultsJSON-b087dd4d.js";import"./labelingInfo-8214bb11.js";import"./LayerFloorInfo-0e67daa6.js";import"./serviceCapabilitiesUtils-7d3bbd37.js";import"./AttachmentQuery-6e51685e.js";import"./popupUtils-afaed8cf.js";import"./floorFilterUtils-080a7cd2.js";let i=class extends $(B(w(A(_(V(G(H(N(Z(q(z(J)))))))))))){constructor(...e){super(...e),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,o){return typeof e=="string"?{url:e,...o}:e}load(e){const o=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(I).then(()=>this._fetchService(o))),Promise.resolve(this)}readImageFormat(e,o){const m=o.supportedImageFormatTypes;return m&&m.includes("PNG32")?"png32":"png24"}writeSublayers(e,o,m,t){var h;if(!this.loaded||!e)return;const a=e.slice().reverse().flatten(({sublayers:r})=>r&&r.toArray().reverse()).toArray();let n=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&((h=this.capabilities.exportMap)!=null&&h.supportsDynamicLayers)){const r=b(t.origin);if(r===f.PORTAL_ITEM){const d=this.createSublayersForOrigin("service").sublayers;n=S(a,d,f.SERVICE)}else if(r>f.PORTAL_ITEM){const d=this.createSublayersForOrigin("portal-item");n=S(a,d.sublayers,b(d.origin))}}const l=[],y={writeSublayerStructure:n,...t};let c=n;a.forEach(r=>{const d=r.write({},y);l.push(d),c=c||r.originOf("visible")==="user"}),l.some(r=>Object.keys(r).length>1)&&(o.layers=l),c&&(o.visibleLayers=a.filter(r=>r.visible).map(r=>r.id))}createExportImageParameters(e,o,m,t){const a=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const n=new D({layer:this,floors:t==null?void 0:t.floors,scale:U({extent:e,width:o})*a}),l=n.toJSON();n.destroy();const y=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},c=e==null?void 0:e.spatialReference,h=T(c);l.dpi*=a;const r={};if(t!=null&&t.timeExtent){const{start:d,end:u}=t.timeExtent.toJSON();r.time=d&&u&&d===u?""+d:`${d??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(r.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:h,imageSR:h,size:o+","+m,...l,...y,...r}}async fetchImage(e,o,m,t){const{data:a}=await this._fetchImage("image",e,o,m,t);return a}async fetchImageBitmap(e,o,m,t){const{data:a,url:n}=await this._fetchImage("blob",e,o,m,t);return K(a,n,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const o={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:m}=await g(this.url,o),{extent:t,fullExtent:a,timeExtent:n}=m,l=t||a;return{fullExtent:l&&E.fromJSON(l),timeExtent:n&&O.fromJSON({start:n[0],end:n[1]})}}loadAll(){return M(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return W(this,e)}async _fetchImage(e,o,m,t,a){var y,c,h;const n={responseType:e,signal:(a==null?void 0:a.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(o,m,t,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(((y=n.query)==null?void 0:y.dynamicLayers)!=null&&!((h=(c=this.capabilities)==null?void 0:c.exportMap)!=null&&h.supportsDynamicLayers))throw new v("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:r}=await g(l,n);return{data:r,url:l}}catch(r){throw R(r)?r:new v("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:r})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:o,ssl:m}=await g(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});m&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=o,this.read(o,{origin:"service",url:this.parsedUrl})}};s([p(x("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),s([p({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),s([p()],i.prototype,"dpi",void 0),s([p()],i.prototype,"gdbVersion",void 0),s([p()],i.prototype,"imageFormat",void 0),s([F("imageFormat",["supportedImageFormatTypes"])],i.prototype,"readImageFormat",null),s([p({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],i.prototype,"imageMaxHeight",void 0),s([p({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],i.prototype,"imageMaxWidth",void 0),s([p()],i.prototype,"imageTransparency",void 0),s([p({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),s([p({json:{read:!1,write:!1}})],i.prototype,"labelsVisible",void 0),s([p({type:["ArcGISMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([p({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),s([p(x("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),s([p()],i.prototype,"sourceJSON",void 0),s([p({json:{write:{ignoreOrigin:!0}}})],i.prototype,"sublayers",void 0),s([j("sublayers",{layers:{type:[k]},visibleLayers:{type:[P]}})],i.prototype,"writeSublayers",null),s([p({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),s([p({json:{read:!1},readOnly:!0,value:"map-image"})],i.prototype,"type",void 0),s([p(C)],i.prototype,"url",void 0),i=s([L("esri.layers.MapImageLayer")],i);const tt=i;export{tt as default};
