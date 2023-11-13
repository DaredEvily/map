import{dk as ce,f as t,g as i,aV as I,aQ as he,j as p,s as x,fj as ee,gH as te,N as re,gA as me,F,m as ge,aG as fe,aS as ie,fy as ve,l as be,ce as se,B as Se,V as b,bc as we,iV as $e,aB as g,ac as d,iW as Oe,dg as xe,dm as Fe,w as Ie,bT as je,a$ as Le,dI as Te,dt as Be}from"./index-8edf265f.js";import{S as Ee,m as Ae}from"./MultiOriginJSONSupport-2c2935ac.js";import"./UniqueValueRenderer-36595a45.js";import{u as _e}from"./jsonUtils-f9aedde2.js";import{Z as oe}from"./FeatureLayer-1a860199.js";import{w as q,y as qe,v as Ne,c as Re,f as Pe}from"./commonProperties-43b199c9.js";import{s as Me,i as ke}from"./I3SUtil-f11fb620.js";import{s as Qe}from"./fieldProperties-c388c8d2.js";import{Z as Ue}from"./FieldsIndex-3d8128c0.js";import{r as Ve,E as Ke,P as Z}from"./SceneService-3a8ef716.js";import{s as Ce,l as De,u as Ze,m as He}from"./I3SLayerDefinitions-0e0d07cc.js";import{b as Je}from"./Query-474f3baf.js";import{p as Ge}from"./popupUtils-afaed8cf.js";import{n as We,p as ze}from"./popupUtils-158a08e7.js";import{i as Xe}from"./APIKeyMixin-828ee2ca.js";import{l as Ye}from"./ArcGISService-16130ddc.js";import{u as et}from"./OperationalLayer-1bd8068d.js";import{j as tt}from"./PortalLayer-394f0be4.js";import{l as rt}from"./associatedFeatureServiceUtils-87fe13f5.js";import{x as H,p as it,E as st}from"./elevationInfoUtils-7db944f5.js";import"./LegendOptions-48c2523d.js";import"./diffUtils-9dbdd340.js";import"./SizeVariable-0dc1bc42.js";import"./colorRamps-763955b0.js";import"./ColorStop-7842c5e0.js";import"./jsonUtils-805d1979.js";import"./styleUtils-e8aad1b5.js";import"./DictionaryLoader-7ed264e8.js";import"./LRUCache-c7a923e7.js";import"./heatmapUtils-485005f9.js";import"./vec4f64-3c9d0901.js";import"./FeatureLayerBase-7801e5b0.js";import"./Field-ebbe1dfc.js";import"./fieldType-088ee331.js";import"./featureLayerUtils-a39aeb4a.js";import"./AttachmentQuery-6e51685e.js";import"./RelationshipQuery-c2adf52b.js";import"./LayerFloorInfo-0e67daa6.js";import"./serviceCapabilitiesUtils-7d3bbd37.js";import"./queryZScale-b4140d92.js";import"./FeatureSet-4ba9f962.js";import"./CustomParametersMixin-6ff009ea.js";import"./EditBusLayer-60b14f80.js";import"./FeatureEffectLayer-7399d7e4.js";import"./FeatureEffect-8a44b622.js";import"./FeatureReductionLayer-5aee6f89.js";import"./clusterUtils-6b9076e5.js";import"./MD5-715f37cd.js";import"./FeatureReductionSelection-63d7d958.js";import"./LabelClass-67c7130a.js";import"./labelUtils-39618ac3.js";import"./defaultsJSON-b087dd4d.js";import"./OrderedLayer-d4b74f5a.js";import"./RefreshableLayer-1604ee0a.js";import"./TemporalLayer-64978c57.js";import"./FeatureTemplate-580a397d.js";import"./FeatureType-d929c2b3.js";import"./labelingInfo-8214bb11.js";import"./versionUtils-1e15284e.js";import"./styleUtils-62792db0.js";import"./TopFeaturesQuery-4081a2c4.js";import"./interfaces-f1f22245.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quat-ec8cad3d.js";import"./quatf64-3363c48e.js";import"./spatialReferenceEllipsoidUtils-13386ee1.js";import"./I3SBinaryReader-961db42c.js";import"./VertexAttribute-0e674613.js";import"./orientedBoundingBox-67853eb1.js";import"./plane-e47fa5dc.js";import"./sphere-1b3fc8c2.js";import"./ByteSizeUnit-d4757d40.js";import"./UnknownTimeZone-d5028e24.js";import"./originUtils-cfe4feaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./saveAPIKeyUtils-ab063b52.js";import"./saveUtils-734d5b27.js";import"./resourceUtils-b3854bba.js";import"./portalItemUtils-1acb3c0b.js";let y=class extends ce(Ee){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(r,s){return typeof s.alias=="string"?s.alias:typeof s.name=="string"?s.name:""}readIdOnlyOnce(r){return this.id!==-1?this.id:typeof r=="number"?r:-1}};t([i({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([I("service","title",["alias","name"])],y.prototype,"readTitle",null),t([i()],y.prototype,"layer",void 0),t([i({type:he,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([I("service","id")],y.prototype,"readIdOnlyOnce",null),t([i(q(String))],y.prototype,"modelName",void 0),t([i(q(Boolean))],y.prototype,"isEmpty",void 0),t([i({type:Boolean,nonNullable:!0})],y.prototype,"legendEnabled",void 0),t([i({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([i({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([p("esri.layers.buildingSublayers.BuildingSublayer")],y);const ae=y,ne="esri.layers.buildingSublayers.BuildingComponentSublayer",ot=x.getLogger(ne),J=Qe();let a=class extends ee.LoadableMixin(te(ae)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,r;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(r=this.layer.parsedUrl)==null?void 0:r.query}:{path:""}}get fieldsIndex(){return new Ue(this.fields)}readAssociatedLayer(e,r){const s=this.layer.associatedFeatureServiceItem,o=r.associatedLayerID;return s!=null&&typeof o=="number"?new oe({portalItem:s,layerId:o}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=e!=null?e.signal:null,s=this._fetchService(r).then(()=>{this.indexInfo=Ve(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,ot,r)});return this.addResolvingPromise(s),Promise.resolve(this)}createPopupTemplate(e){return Ge(this,e)}async _fetchService(e){const r=(await re(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var o,n,c;const s=(n=(o=this.getFeatureType(r==null?void 0:r.feature))==null?void 0:o.domains)==null?void 0:n[e];return s&&s.type!=="inherited"?s:((c=this.getField(e))==null?void 0:c.domain)??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Me,{query:r,data:{supportsZ:s,supportsM:o,isVersioned:n}}=e;return{query:r,data:{supportsZ:s,supportsM:o,isVersioned:n}}}createQuery(){const e=new Je;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatures(e||this.createQuery(),r)).then(s=>{if(s!=null&&s.features)for(const o of s.features)o.layer=this.layer,o.sourceLayer=this;return s})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryObjectIds(e||this.createQuery(),r))}async queryCachedAttributes(e,r){const s=me(this.fieldsIndex,await We(this,ze(this)));return ke(this.parsedUrl.path,this.attributeStorageInfo,e,r,s)}async queryCachedFeature(e,r){const s=await this.queryCachedAttributes(e,[r]);if(!s||s.length===0)throw new F("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new ge;return o.attributes=s[0],o.layer=this,o.sourceLayer=this,o}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new F("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new F("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([i({readOnly:!0})],a.prototype,"parsedUrl",null),t([i({type:Ce,readOnly:!0})],a.prototype,"nodePages",void 0),t([i({type:[De],readOnly:!0})],a.prototype,"materialDefinitions",void 0),t([i({type:[Ze],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),t([i({type:[He],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),t([i({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),t([i({readOnly:!0})],a.prototype,"store",void 0),t([i({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),t([i({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),t([i(J.fields)],a.prototype,"fields",void 0),t([i({readOnly:!0})],a.prototype,"fieldsIndex",null),t([i({readOnly:!0,type:oe})],a.prototype,"associatedLayer",void 0),t([I("service","associatedLayer",["associatedLayerID"])],a.prototype,"readAssociatedLayer",null),t([i(J.outFields)],a.prototype,"outFields",void 0),t([i({type:String,readOnly:!0})],a.prototype,"objectIdField",null),t([i({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),t([i({readOnly:!0,type:String})],a.prototype,"apiKey",null),t([i({readOnly:!0,type:fe})],a.prototype,"fullExtent",null),t([i({readOnly:!0,type:ie})],a.prototype,"spatialReference",null),t([i({readOnly:!0})],a.prototype,"version",null),t([i({readOnly:!0,type:ve})],a.prototype,"elevationInfo",null),t([i({readOnly:!0,type:Number})],a.prototype,"minScale",null),t([i({readOnly:!0,type:Number})],a.prototype,"maxScale",null),t([i({readOnly:!0,type:Number})],a.prototype,"effectiveScaleRange",null),t([i({type:["hide","show"],json:{write:!0}})],a.prototype,"listMode",void 0),t([i({types:_e,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",void 0),t([i({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),t([i(qe)],a.prototype,"popupEnabled",void 0),t([i({type:be,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],a.prototype,"popupTemplate",void 0),t([i({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),t([i({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),t([i()],a.prototype,"types",null),t([i()],a.prototype,"typeIdField",null),t([i({json:{write:!1}}),se(new Se({"3DObject":"3d-object",Point:"point"}))],a.prototype,"layerType",void 0),t([i()],a.prototype,"geometryType",null),t([i()],a.prototype,"profile",null),t([i({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),a=t([p(ne)],a);const N=a;var R;const G={type:b,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:le}}},read:!1}};function le(e,r,s){if(e&&Array.isArray(e))return new b(e.map(o=>{const n=at(o);if(n){const c=new n;return c.read(o,s),c}return s!=null&&s.messages&&o&&s.messages.push(new we("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(o.type||"unknown")+"' are not supported",{definition:o,context:s})),null}))}let m=R=class extends ae{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return $e(this,e=>R.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}))}};function at(e){return e.layerType==="group"?m:N}t([i({type:["hide","show","hide-children"],json:{write:!0}})],m.prototype,"listMode",void 0),t([i(G)],m.prototype,"sublayers",void 0),m=R=t([p("esri.layers.buildingSublayers.BuildingGroupSublayer")],m),function(e){function r(s,o){s.forEach(n=>{o(n),n.type==="building-group"&&r(n.sublayers,o)})}e.sublayersProperty=G,e.readSublayers=le,e.forEachSublayer=r}(m||(m={}));const f=m;let j=class extends g{constructor(){super(...arguments),this.type=null}};t([i({type:String,readOnly:!0,json:{write:!0}})],j.prototype,"type",void 0),j=t([p("esri.layers.support.BuildingFilterAuthoringInfo")],j);const pe=j;var P;let S=P=class extends g{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new P({filterType:this.filterType,filterValues:d(this.filterValues)})}};t([i({type:String,json:{write:!0}})],S.prototype,"filterType",void 0),t([i({type:[String],json:{write:!0}})],S.prototype,"filterValues",void 0),S=P=t([p("esri.layers.support.BuildingFilterAuthoringInfoType")],S);const nt=S;var M;const lt=b.ofType(nt);let L=M=class extends g{clone(){return new M({filterTypes:d(this.filterTypes)})}};t([i({type:lt,json:{write:!0}})],L.prototype,"filterTypes",void 0),L=M=t([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")],L);const pt=L;var k;const yt=b.ofType(pt);let w=k=class extends pe{constructor(){super(...arguments),this.type="checkbox"}clone(){return new k({filterBlocks:d(this.filterBlocks)})}};t([i({type:["checkbox"]})],w.prototype,"type",void 0),t([i({type:yt,json:{write:!0}})],w.prototype,"filterBlocks",void 0),w=k=t([p("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],w);const W=w;let T=class extends g{};t([i({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),T=t([p("esri.layers.support.BuildingFilterMode")],T);const A=T;var Q;let B=Q=class extends A{constructor(){super(...arguments),this.type="solid"}clone(){return new Q}};t([i({type:["solid"],readOnly:!0,json:{write:!0}})],B.prototype,"type",void 0),B=Q=t([p("esri.layers.support.BuildingFilterModeSolid")],B);const U=B;var V;let $=V=class extends A{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new V({edges:d(this.edges)})}};t([se({wireFrame:"wire-frame"})],$.prototype,"type",void 0),t([i(Oe)],$.prototype,"edges",void 0),$=V=t([p("esri.layers.support.BuildingFilterModeWireFrame")],$);const z=$;var K;let E=K=class extends A{constructor(){super(...arguments),this.type="x-ray"}clone(){return new K}};t([i({type:["x-ray"],readOnly:!0,json:{write:!0}})],E.prototype,"type",void 0),E=K=t([p("esri.layers.support.BuildingFilterModeXRay")],E);const X=E;var C;const ut={nonNullable:!0,types:{key:"type",base:A,typeMap:{solid:U,"wire-frame":z,"x-ray":X}},json:{read:e=>{switch(e==null?void 0:e.type){case"solid":return U.fromJSON(e);case"wireFrame":return z.fromJSON(e);case"x-ray":return X.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let v=C=class extends g{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new U,this.title=""}clone(){return new C({filterExpression:this.filterExpression,filterMode:d(this.filterMode),title:this.title})}};t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"filterExpression",void 0),t([i(ut)],v.prototype,"filterMode",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"title",void 0),v=C=t([p("esri.layers.support.BuildingFilterBlock")],v);const dt=v;var D;const ct=b.ofType(dt);let h=D=class extends g{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=xe(),this.name=null}clone(){return new D({description:this.description,filterBlocks:d(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:d(this.filterAuthoringInfo)})}};t([i({type:String,json:{write:!0}})],h.prototype,"description",void 0),t([i({type:ct,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"filterBlocks",void 0),t([i({types:{key:"type",base:pe,typeMap:{checkbox:W}},json:{read:e=>(e==null?void 0:e.type)==="checkbox"?W.fromJSON(e):null,write:!0}})],h.prototype,"filterAuthoringInfo",void 0),t([i({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"id",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"name",void 0),h=D=t([p("esri.layers.support.BuildingFilter")],h);const ht=h;let u=class extends g{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([i({type:String})],u.prototype,"fieldName",void 0),t([i({type:String})],u.prototype,"modelName",void 0),t([i({type:String})],u.prototype,"label",void 0),t([i({type:Number})],u.prototype,"min",void 0),t([i({type:Number})],u.prototype,"max",void 0),t([i({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],u.prototype,"mostFrequentValues",void 0),t([i({type:[Number]})],u.prototype,"subLayerIds",void 0),u=t([p("esri.layers.support.BuildingFieldStatistics")],u);let O=class extends ee.LoadableMixin(te(g)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(x.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await re(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([i({constructOnly:!0,type:String})],O.prototype,"url",void 0),t([i({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],O.prototype,"fields",null),O=t([p("esri.layers.support.BuildingSummaryStatistics")],O);const ye=O,ue=b.ofType(ht),de=d(f.sublayersProperty);var Y;const _=(Y=de.json)==null?void 0:Y.origins;_&&(_["web-scene"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},_["portal-item"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let l=class extends Ke(Ye(et(tt(Fe(Ae(Xe(Be))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Ie({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new ue,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,s){const o=f.readSublayers(e,r,s);return f.forEachSublayer(o,n=>n.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(o,this._sublayerOverrides),this._sublayerOverrides=null),o}applySublayerOverrides(e,{overrides:r,context:s}){f.forEachSublayer(e,o=>o.read(r.get(o.id),s))}readSublayerOverrides(e,r){var o;const s=new Map;for(const n of e)n!=null&&typeof n=="object"&&typeof n.id=="number"?s.set(n.id,n):(o=r.messages)==null||o.push(new F("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}));return{overrides:s,context:r}}writeSublayerOverrides(e,r,s){const o=[];f.forEachSublayer(this.sublayers,n=>{const c=n.write({},s);Object.keys(c).length>1&&o.push(c)}),o.length>0&&(r.sublayers=o)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(s=>{r.sublayers.push(d(s))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const s=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,s):this._sublayerOverrides=s}}readSummaryStatistics(e,r){var s;if(typeof r.statisticsHRef=="string"){const o=je((s=this.parsedUrl)==null?void 0:s.path,r.statisticsHRef);return new ye({url:o})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Le).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(s),Promise.resolve(this)}loadAll(){return Te(this,e=>{f.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(Z.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(Z.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new F("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:r}=await rt(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=r}catch(r){x.getLogger(this).warn("Associated feature service item could not be loaded",r)}}_validateElevationInfo(){const e=this.elevationInfo,r="Building scene layers";H(x.getLogger(this),it(r,"absolute-height",e)),H(x.getLogger(this),st(r,e))}};t([i({type:["BuildingSceneLayer"]})],l.prototype,"operationalLayerType",void 0),t([i({readOnly:!0})],l.prototype,"allSublayers",void 0),t([i(de)],l.prototype,"sublayers",void 0),t([I("service","sublayers")],l.prototype,"readSublayers",null),t([i({type:ue,nonNullable:!0,json:{write:!0}})],l.prototype,"filters",void 0),t([i({type:String,json:{write:!0}})],l.prototype,"activeFilterId",void 0),t([i({readOnly:!0,type:ye})],l.prototype,"summaryStatistics",void 0),t([I("summaryStatistics",["statisticsHRef"])],l.prototype,"readSummaryStatistics",null),t([i({type:[String],json:{read:!1}})],l.prototype,"outFields",void 0),t([i(Ne)],l.prototype,"fullExtent",void 0),t([i(Re)],l.prototype,"legendEnabled",void 0),t([i({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),t([i(q(ie))],l.prototype,"spatialReference",void 0),t([i(Pe)],l.prototype,"elevationInfo",null),t([i({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),t([i()],l.prototype,"associatedFeatureServiceItem",void 0),l=t([p("esri.layers.BuildingSceneLayer")],l);const Kr=l;export{Kr as default};
