import{f as t,g as r,j as I,aB as F,dl as P,dm as E,b9 as A,aS as $,el as O,F as d,a$ as k,fl as f,s as D,_ as v,cT as y,e9 as N,N as C,fm as U,fy as V,aG as L,aQ as g,l as G,aV as w,ac as J,dt as M}from"./index-dfe4d42d.js";import"./UniqueValueRenderer-1ec4ce17.js";import{o as z,m as W,u as q}from"./jsonUtils-cb29184a.js";import{m as Q}from"./MultiOriginJSONSupport-0aa6c847.js";import{l as B}from"./ArcGISService-e9ab7c5d.js";import{o as Y}from"./CustomParametersMixin-4d8f9b2c.js";import{p as Z}from"./FeatureEffectLayer-d7d00fe4.js";import{c as H}from"./FeatureReductionLayer-67c9b8b0.js";import{u as K}from"./OperationalLayer-a07152bf.js";import{j as X}from"./PortalLayer-8c7a2a4a.js";import{f as ee}from"./RefreshableLayer-1b1b43bd.js";import{a as te}from"./TemporalLayer-9c7b7ca0.js";import{m as ie,c as re,S as oe,T as se,y as ne,p as ae,d as pe}from"./commonProperties-14436239.js";import{D as le}from"./featureLayerUtils-c63babeb.js";import{y as de}from"./Field-640b3afc.js";import{s as me}from"./fieldProperties-40d569dd.js";import{C as ce}from"./LabelClass-ee8ff0ef.js";import{i as ue}from"./labelingInfo-d5ce8c46.js";import{t as ye}from"./styleUtils-0331f96d.js";import{b as he}from"./Query-f0adc00a.js";import{p as fe}from"./popupUtils-3dc5c52a.js";import{A as c}from"./interfaces-f1f22245.js";import"./LegendOptions-9dd9bdee.js";import"./diffUtils-bbf5ba7d.js";import"./SizeVariable-aba63b8a.js";import"./colorRamps-c95c47a3.js";import"./ColorStop-1ea4e9e4.js";import"./jsonUtils-f13e839b.js";import"./styleUtils-1f283fd1.js";import"./DictionaryLoader-7e1ef82a.js";import"./LRUCache-c11c9d99.js";import"./FieldsIndex-c919e639.js";import"./UnknownTimeZone-03c79817.js";import"./heatmapUtils-339dd66a.js";import"./vec4f64-3c9d0901.js";import"./FeatureEffect-81a1dd57.js";import"./clusterUtils-bc690dd1.js";import"./MD5-715f37cd.js";import"./FeatureReductionSelection-ddc2121c.js";import"./portalItemUtils-26ed5206.js";import"./AttachmentQuery-d86ac604.js";import"./RelationshipQuery-73de5c2e.js";import"./fieldType-3ccc5c40.js";import"./labelUtils-a50f3602.js";import"./defaultsJSON-b087dd4d.js";var h;let l=h=class extends F{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new h({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([r({type:Number,json:{write:!0}})],l.prototype,"age",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"ageReceived",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"displayCount",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"maxObservations",void 0),l=h=t([I("esri.layers.support.PurgeOptions")],l);const x=l,b=me();function S(e,o){return new d("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${o}`,{layer:e})}let i=class extends H(Z(P(te(E(ee(B(K(X(Q(Y(A(M)))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new x,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=$.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=O(async(o,s,a)=>{const{save:n,saveAs:p}=await v(()=>import("./streamLayerUtils-20285748.js"),["assets/streamLayerUtils-20285748.js","assets/utils-4b24252f.js","assets/index-dfe4d42d.js","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/jsonContext-00d588d5.js","assets/portalItemUtils-26ed5206.js","assets/saveAPIKeyUtils-402f78a0.js"]);switch(o){case c.SAVE:return n(this,s);case c.SAVE_AS:return p(this,a,s)}})}normalizeCtorArgs(e,o){return typeof e=="string"?{url:e,...o}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new d("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const o=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(k).then(()=>this._fetchService(o))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const o=this._normalizeFeatureReduction(e);this._set("featureReduction",o)}set renderer(e){f(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,o,s){var n;o=o.layerDefinition||o;const a=(n=o.drawingInfo)==null?void 0:n.renderer;if(a){const p=z(a,o,s)||void 0;return p||D.getLogger(this).error("Failed to create renderer",{rendererDefinition:o.drawingInfo.renderer,layer:this,context:s}),p}return le(o,s)}async connect(e){const[{createConnection:o}]=await Promise.all([v(()=>import("./createConnection-e51f70ef.js"),["assets/createConnection-e51f70ef.js","assets/index-dfe4d42d.js","assets/query-ceecada0.js","assets/pbfQueryUtils-3a3139f8.js","assets/pbf-4963ee00.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/queryZScale-57f79533.js","assets/Query-f0adc00a.js","assets/Field-640b3afc.js","assets/fieldType-3ccc5c40.js"]),this.load()]),s=this.geometryType?y.toJSON(this.geometryType):null,{customParameters:a=null,definitionExpression:n=null,geometryDefinition:p=null,maxReconnectionAttempts:j=0,maxReconnectionInterval:R=20,spatialReference:T=this.spatialReference}=e||this.createConnectionParameters(),m=o(this.parsedUrl,this.spatialReference,T,s,{geometry:p,where:n},j,R,a??void 0),_=N([this.on("send-message-to-socket",u=>m.sendMessageToSocket(u)),this.on("send-message-to-client",u=>m.sendMessageToClient(u))]);return m.once("destroy",_.remove),m}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return fe(this,e)}createQuery(){const e=new he;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,o){if(!this.fields)return null;let s=null;return this.fields.some(a=>(a.name===e&&(s=a.domain),!!s)),s}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(c.SAVE,e)}async saveAs(e,o){return this._debouncedSaveOperations(c.SAVE_AS,o,e)}write(e,o){const s=o==null?void 0:o.messages;return this.webSocketUrl?(s==null||s.push(S(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,o):(s==null||s.push(S(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){var o,s,a;if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:n}=await C(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=n}}else{if(!((o=this.timeInfo)!=null&&o.trackIdField))throw new d("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const n=(s=this.fields.find(p=>p.type==="oid"))==null?void 0:s.name;if(!n)throw new d("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=n}if(!this.fields)throw new d("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(n=>n.name===this.objectIdField)||this.fields.push(new de({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new d("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(a=this.portalItem)==null?void 0:a.portal,url:this.parsedUrl}),f(this.renderer,this.fieldsIndex),U(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),ye(this,{origin:"service"})}};t([r({type:String})],i.prototype,"copyright",void 0),t([r({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r({type:String})],i.prototype,"displayField",void 0),t([r({type:V})],i.prototype,"elevationInfo",void 0),t([r({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],i.prototype,"featureReduction",null),t([r(b.fields)],i.prototype,"fields",void 0),t([r(b.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([r({type:L,json:{name:"layerDefinition.definitionGeometry",write:!0}})],i.prototype,"geometryDefinition",void 0),t([r({type:y.apiValues,json:{read:{reader:y.read}}})],i.prototype,"geometryType",void 0),t([r(ie)],i.prototype,"labelsVisible",void 0),t([r({type:[ce],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ue},write:!0}})],i.prototype,"labelingInfo",void 0),t([r(re)],i.prototype,"legendEnabled",void 0),t([r({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],i.prototype,"listMode",void 0),t([r({type:g})],i.prototype,"maxReconnectionAttempts",void 0),t([r({type:g})],i.prototype,"maxReconnectionInterval",void 0),t([r(oe)],i.prototype,"maxScale",void 0),t([r(se)],i.prototype,"minScale",void 0),t([r({type:String})],i.prototype,"objectIdField",void 0),t([r({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),t([r({readOnly:!0})],i.prototype,"outFields",void 0),t([r(ne)],i.prototype,"popupEnabled",void 0),t([r({type:G,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),t([r({type:x})],i.prototype,"purgeOptions",void 0),t([r({json:{read:!1,write:!1}})],i.prototype,"refreshInterval",void 0),t([r({types:W,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:q,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),t([w("service","renderer",["drawingInfo.renderer","defaultSymbol"]),w("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),t([r((()=>{const e=J(ae);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],i.prototype,"screenSizePerspectiveEnabled",void 0),t([r()],i.prototype,"sourceJSON",void 0),t([r({type:$,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),t([r({json:{read:!1}})],i.prototype,"type",void 0),t([r(pe)],i.prototype,"url",void 0),t([r({type:Number})],i.prototype,"updateInterval",void 0),t([r({json:{read:!1,write:!1}})],i.prototype,"useViewTime",void 0),t([r({type:String})],i.prototype,"webSocketUrl",void 0),i=t([I("esri.layers.StreamLayer")],i);const pt=i;export{pt as default};