import{fX as Z,d as K,fj as X,gH as Y,V as C,F as m,aG as ee,aD as te,e0 as re,x as ie,s as T,fu as R,f as o,gI as se,m as L,aT as oe,g as n,j as E,ab as ae,dl as ne,dm as le,b9 as ue,dt as de,aS as pe,el as ye,_ as P,a$ as ce,dP as I,I as he,bT as x,fl as G,fz as fe,E as me,gc as ge,f9 as be,bI as we,N as ve,fm as _e,aV as y,gJ as Fe,aR as $,ac as D,gK as Se,l as Te,dV as Ie}from"./index-8edf265f.js";import"./UniqueValueRenderer-36595a45.js";import{o as Ee,m as $e,u as De}from"./jsonUtils-f9aedde2.js";import{m as je}from"./MultiOriginJSONSupport-2c2935ac.js";import{I as Oe,m as Me,a as A,b as Ce,c as qe,C as Re,y as Le,p as Pe}from"./commonProperties-43b199c9.js";import{D as xe,y as Ge}from"./FeatureLayerBase-7801e5b0.js";import{t as N}from"./queryZScale-b4140d92.js";import{d as z}from"./FeatureSet-4ba9f962.js";import{i as Ae}from"./APIKeyMixin-828ee2ca.js";import{l as Ne}from"./ArcGISService-16130ddc.js";import{o as Je}from"./CustomParametersMixin-6ff009ea.js";import{F as Ve}from"./EditBusLayer-60b14f80.js";import{p as ke}from"./FeatureEffectLayer-7399d7e4.js";import{c as Qe}from"./FeatureReductionLayer-5aee6f89.js";import{u as Ze}from"./OperationalLayer-1bd8068d.js";import{c as ze}from"./OrderedLayer-d4b74f5a.js";import{j as We}from"./PortalLayer-394f0be4.js";import{f as He}from"./RefreshableLayer-1604ee0a.js";import{a as Ue,d as Be}from"./TemporalLayer-64978c57.js";import{Q as Ke,T as Xe,R as Ye,M as et,D as tt,m as rt,w as it,b as st,g as ot,x as at,j as nt,I as lt,q as ut,F as dt,A as pt,O as yt,P as ct,E as ht,S as ft,f as J}from"./featureLayerUtils-a39aeb4a.js";import{p as W}from"./FeatureTemplate-580a397d.js";import{n as H}from"./FeatureType-d929c2b3.js";import{s as mt}from"./fieldProperties-c388c8d2.js";import{C as gt}from"./LabelClass-67c7130a.js";import{i as j}from"./labelingInfo-8214bb11.js";import{a as bt}from"./serviceCapabilitiesUtils-7d3bbd37.js";import{e as wt}from"./versionUtils-1e15284e.js";import{b as vt,K as _t}from"./Query-474f3baf.js";import{t as Ft}from"./styleUtils-62792db0.js";import{S as _}from"./TopFeaturesQuery-4081a2c4.js";import{p as St}from"./popupUtils-afaed8cf.js";import{A as F}from"./interfaces-f1f22245.js";function V(e,t,r){if(e.hasM==null||e.hasZ)for(const i of t)for(const s of i)s.length>2&&(s[2]*=r)}function Tt(e,t,r){if(!e&&!t||!r)return;const i=Z(r);k(e,r,i),k(t,r,i)}function k(e,t,r){if(e)for(const i of e)It(i.geometry,t,r)}function It(e,t,r){if(!(e!=null&&e.spatialReference)||K(e.spatialReference,t))return;const i=Z(e.spatialReference)/r;if(i!==1){if("x"in e)e.z!=null&&(e.z*=i);else if("rings"in e)V(e,e.rings,i);else if("paths"in e)V(e,e.paths,i);else if("points"in e&&(e.hasM==null||e.hasZ))for(const s of e.points)s.length>2&&(s[2]*=i)}}let Et=0,g=class extends X.LoadableMixin(Y(C)){constructor(e){super(e),this._idToClientGraphic=null,this.type="memory"}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}get _workerGeometryType(){var t;const e=(t=this.layer)==null?void 0:t.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);N(e,this.layer.spatialReference,r);const i=z.fromJSON(r);if(!this._requiresClientGraphicMapping())return i;const s=this.layer.objectIdField;for(const l of i.features){const u=l.attributes[s],c=this._idToClientGraphic.get(u);c&&(l.geometry=c.geometry)}return i.geometryType=this.layer.geometryType,i}async queryFeaturesJSON(e,t={}){if(this._requiresClientGraphicMapping())throw new m("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return N(e,this.layer.spatialReference,r),r}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(r=>({count:r.count,extent:ee.fromJSON(r.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}async _applyEdits(e){if(!this._connection)throw new m("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let r=null;const i=[],s=[];await Promise.all([this._prepareClientMapping(e.addFeatures,null),this._prepareClientMapping(e.updateFeatures,null)]);const l=d=>"objectId"in d&&d.objectId!=null?d.objectId:"attributes"in d&&d.attributes[t]!=null?d.attributes[t]:null;if(e.addFeatures&&(r=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const d of e.deleteFeatures){const f=l(d);f!=null&&i.push(f)}const u=e.updateFeatures&&this._idToClientGraphic?new Map:null;if(e.updateFeatures){for(const d of e.updateFeatures)if(s.push(this._serializeFeature(d)),u){const f=l(d);f!=null&&u.set(f,d)}}Tt(r?r.features:null,s,this.layer.spatialReference);const{fullExtent:c,featureEditResults:p}=await this._connection.invoke("applyEdits",{adds:r?r.features:[],updates:s,deletes:i});return this.fullExtent=c,r&&r.finish(p.uidToObjectId),this._updateClientGraphicIds(u,p),this._createEditsResult(p)}async _prepareClientMapping(e,t){if(this._layerOrSourceGeometryType!=="mesh"||e==null)return;const r=[];for(const{geometry:i}of e)i==null||i.type!=="mesh"||i.hasExtent||i.loaded||r.push(i.load({signal:t}));r.length&&await Promise.all(r)}_updateClientGraphicIds(e,t){if(this._idToClientGraphic){if(e)for(const r of t.updateResults){if(!r.success)continue;const i=e.get(r.objectId);i!=null&&this._addIdToClientGraphic(i)}for(const r of t.deleteResults)r.success&&this._idToClientGraphic.delete(r.objectId)}}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new m("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,r=new Array(e.length);let i=null;for(let l=0;l<e.length;l++){const u=e[l],c=this._serializeFeature(u);i||u.geometry==null||(i=u.geometry.type),r[l]=c,t.set(`${c.uid}`,u)}const s=this;return{features:r,inferredGeometryType:i,finish(l){const u=s.sourceJSON.objectIdField;for(const c in l){const p=l[c],d=t.get(c);d&&(d.attributes||(d.attributes={}),p===-1?delete d.attributes[u]:d.attributes[u]=p,s._addIdToClientGraphic(d))}}}}_addIdToClientGraphic(e){var i;if(!this._idToClientGraphic)return;const t=this.sourceJSON.objectIdField,r=(i=e.attributes)==null?void 0:i[t];r!=null&&this._idToClientGraphic.set(r,e)}get _layerOrSourceGeometryType(){var e,t;return((e=this.layer)==null?void 0:e.geometryType)??((t=this.sourceJSON)==null?void 0:t.geometryType)}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return e==="mesh"||e==="multipatch"||e==="extent"}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e),i=(Et++).toString();return r?{uid:i,geometry:r.toJSON(),attributes:t}:{uid:i,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:this._geometryRequiresClientGraphicMapping(t)?t.extent?te.fromExtent(t.extent):null:t}async _startWorker(e){this._connection=await re("MemorySourceWorker",{strategy:ie("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:r,objectIdField:i,hasM:s,hasZ:l,timeInfo:u,dateFieldsTimeZone:c}=this.layer,p=this.layer.originOf("spatialReference")==="defaults";await this._prepareClientMapping(this.items,e);const d=this._prepareAddFeatures(this.items);this.addHandles(this.on("before-changes",w=>{T.getLogger(this).error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),w.preventDefault()}));const f={features:d.features,fields:t==null?void 0:t.map(w=>w.toJSON()),geometryType:R.toJSON(this._workerGeometryType),hasM:this._layerOrSourceGeometryType!=="mesh"&&s,hasZ:this._layerOrSourceGeometryType==="mesh"||l,objectIdField:i,spatialReference:p?null:r&&r.toJSON(),timeInfo:(u==null?void 0:u.toJSON())??null,dateFieldsTimeZone:c},b=await this._connection.invoke("load",f,{signal:e});for(const w of b.warnings)T.getLogger(this.layer).warn("#load()",`${w.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:w});b.featureErrors.length&&T.getLogger(this.layer).warn("#load()",`Encountered ${b.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:b.featureErrors});const q=b.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(d.inferredGeometryType)&&(q.geometryType=R.toJSON(d.inferredGeometryType)),this.sourceJSON=q,this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map),d.finish(b.assignedObjectIds)}};o([se({Type:L,ensureType:oe(L)})],g.prototype,"itemType",void 0),o([n()],g.prototype,"type",void 0),o([n({constructOnly:!0})],g.prototype,"layer",void 0),o([n({readOnly:!0})],g.prototype,"_workerGeometryType",null),o([n()],g.prototype,"sourceJSON",void 0),g=o([E("esri.layers.graphics.sources.MemorySource")],g);let v=class extends ae{constructor(){super(...arguments),this.updating=!1,this.status="unknown"}};o([n()],v.prototype,"updating",void 0),o([n()],v.prototype,"status",void 0),v=o([E("esri.layers.support.PublishingInfo")],v);const $t=v,U="esri.layers.mixins.PublishableLayer",Dt=Symbol(U),jt=e=>{var t;let r=class extends e{constructor(){super(...arguments),this[t]=!0}get publishingInfo(){if(this.destroyed)return null;const i=this._get("publishingInfo");if(i)return i;const s=new $t;return this._checkPublishingStatus(s),s}_checkPublishingStatus(i){let u=0;const c=async d=>{let f;i.updating=!0;try{f=await this.fetchPublishingStatus()}catch{f="unavailable"}f!=="published"&&f!=="unavailable"||(i.status==="publishing"&&this.refresh(),p.remove()),i.status=f,i.updating=!1,p.removed||(u=setTimeout(c,d,d+125))},p={removed:!1,remove(){this.removed=!0,clearTimeout(u)}};this.when().catch(()=>p.remove()),c(250),this.addHandles(p)}};return t=Dt,o([n({readOnly:!0,clonable:!1})],r.prototype,"publishingInfo",null),r=o([E(U)],r),r},h="FeatureLayer",B="esri.layers.FeatureLayer",Ot=T.getLogger(B);function S(e,t){return new m("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}function Q(e){return e&&e instanceof C}const O=mt();function M(e,t,r){const i=!!(r!=null&&r.writeLayerSchema);return{enabled:i,ignoreOrigin:i}}let a=class extends xe(Qe(ke(jt(Ve(ne(ze(Ue(le(He(Ne(Ze(We(je(Je(Ae(ue(de))))))))))))))))){constructor(...e){super(...e),this.charts=null,this.copyright=null,this.displayField=null,this.dynamicDataSource=null,this.fields=null,this.fieldsIndex=null,this.formTemplate=null,this.fullExtent=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.infoFor3D=null,this.isTable=!1,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.outFields=null,this.path=null,this.popupEnabled=!0,this.popupTemplate=null,this.resourceInfo=null,this.screenSizePerspectiveEnabled=!0,this.spatialReference=pe.WGS84,this.subtypeCode=null,this.templates=null,this.timeInfo=null,this.title=null,this.sublayerTitleMode="item-title",this.type="feature",this.typeIdField=null,this.types=null,this.visible=!0,this._debouncedSaveOperations=ye(async(t,r,i)=>{const{save:s,saveAs:l}=await P(()=>import("./featureLayerUtils-0d505290.js"),["assets/featureLayerUtils-0d505290.js","assets/index-8edf265f.js","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/utils-d69ab73e.js","assets/jsonContext-618c4b82.js","assets/portalItemUtils-1acb3c0b.js","assets/saveAPIKeyUtils-ab063b52.js","assets/fetchService-f7fe51b5.js","assets/lazyLayerLoader-dc888de8.js"]);switch(t){case F.SAVE:return s(this,r);case F.SAVE_AS:return l(this,i,r)}})}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){var i;const t=e!=null?e.signal:null;if((i=this.portalItem)!=null&&i.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(t).then(s=>this.initLayerProperties(s))),Promise.resolve(this);const r=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e).catch(ce).then(async()=>{if(this.url&&this.layerId==null&&/FeatureServer|MapServer\/*$/i.test(this.url)){const s=await this._fetchFirstValidLayerId(t);s!=null&&(this.layerId=s)}if(!this.url&&!this._hasMemorySource())throw new m("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.initLayerProperties(await this.createGraphicsSource(t))}).then(()=>Ke(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}readCapabilities(e,t){return t=t.layerDefinition||t,bt(t,this.url)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("dynamicDataSource"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){var e;return!(this.loaded&&!((e=this.capabilities)!=null&&e.operations.supportsEditing))&&(this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges)}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}readEditingEnabled(e,t){return this._readEditingEnabled(t,!1)}readEditingEnabledFromWebMap(e,t,r){return this._readEditingEnabled(t,!0,r)}writeEditingEnabled(e,t){this._writeEditingEnabled(e,t,!1)}writeEditingEnabledToWebMap(e,t,r,i){this._writeEditingEnabled(e,t,!0,i)}get effectiveEditingEnabled(){return Xe(this)}readIsTable(e,t){return(t=(t==null?void 0:t.layerDefinition)??t).type==="Table"||!t.geometryType}writeIsTable(e,t,r,i){i!=null&&i.writeLayerSchema&&I(r,e?"Table":"Feature Layer",t)}readGlobalIdField(e,t){return Ye(t.layerDefinition||t)}readObjectIdField(e,t){return et(t.layerDefinition||t)}get parsedUrl(){const e=he(this.url);return e!=null&&(this.dynamicDataSource!=null?e.path=x(e.path,"dynamicLayer"):this.layerId!=null&&(e.path=x(e.path,this.layerId.toString()))),e}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){G(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){var s;t=t.layerDefinition||t;const i=(s=t.drawingInfo)==null?void 0:s.renderer;if(i){const l=Ee(i,t,r)??void 0;return l||Ot.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),l}return tt(t,r)}set source(e){const t=this._get("source");t!==e&&(Q(t)&&this._resetMemorySource(t),Q(e)&&this._initMemorySource(e),this._set("source",e))}castSource(e){return e?Array.isArray(e)||e instanceof C?new g({layer:this,items:e}):e:null}readSource(e,t){const r=z.fromJSON(t.featureSet);return new g({layer:this,items:(r==null?void 0:r.features)??[]})}readTemplates(e,t){const r=t.editFieldsInfo,i=r==null?void 0:r.creatorField,s=r==null?void 0:r.editorField;return e=e==null?void 0:e.map(l=>W.fromJSON(l)),this._fixTemplates(e,i),this._fixTemplates(e,s),e}readTitle(e,t){var s,l,u;const r=((s=t.layerDefinition)==null?void 0:s.name)??t.name,i=t.title||((l=t.layerDefinition)==null?void 0:l.title);if(r){const c=(u=this.portalItem)==null?void 0:u.title;if(this.sublayerTitleMode==="item-title")return this.url?fe(this.url,r):r;let p=r;if(!p&&this.url){const d=me(this.url);d!=null&&(p=d.title)}return p?(this.sublayerTitleMode==="item-title-and-service-name"&&c&&c!==p&&(p=c+" - "+p),ge(p)):void 0}if(this.sublayerTitleMode==="item-title"&&i)return i}readTitleFromWebMap(e,t){var r;return t.title||((r=t.layerDefinition)==null?void 0:r.name)}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const i=t.fields.find(s=>s.name.toLowerCase()===r);i&&(r=i.name)}return r}readTypes(e,t){e=(t=t.layerDefinition||t).types;const r=t.editFieldsInfo,i=r==null?void 0:r.creatorField,s=r==null?void 0:r.editorField;return e==null?void 0:e.map(l=>(l=H.fromJSON(l),this._fixTemplates(l.templates,i),this._fixTemplates(l.templates,s),l))}readVisible(e,t){var r;return((r=t.layerDefinition)==null?void 0:r.defaultVisibility)!=null?!!t.layerDefinition.defaultVisibility:t.visibility!=null?!!t.visibility:void 0}async addAttachment(e,t){return rt(this,e,t,h)}async updateAttachment(e,t,r){return it(this,e,t,r,h)}async applyEdits(e,t){return st(this,e,t)}async uploadAssets(e,t){return ot(this,e,t)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return St(this,e)}async createGraphicsSource(e){if(this._hasMemorySource()&&this.source)return this.source.load({signal:e});const{default:t}=await be(P(()=>import("./FeatureLayerSource-e9c2a89e.js"),["assets/FeatureLayerSource-e9c2a89e.js","assets/index-8edf265f.js","assets/mat4f64-1413b4a7.js","assets/MeshGeoreferencedRelativeVertexSpace-5bf2bee1.js","assets/vec32-3a2725b2.js","assets/External-639f79ab.js","assets/editingSupport-85a3ac1f.js","assets/EditBusLayer-60b14f80.js","assets/clientSideDefaults-bd9ebd17.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/defaultsJSON-b087dd4d.js","assets/QueryTask-92b896f2.js","assets/Query-474f3baf.js","assets/Field-ebbe1dfc.js","assets/fieldType-088ee331.js","assets/executeForIds-ee169be0.js","assets/query-22d59433.js","assets/pbfQueryUtils-3b107514.js","assets/pbf-08dd563b.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/queryZScale-b4140d92.js","assets/executeQueryJSON-bdb53db6.js","assets/FeatureSet-4ba9f962.js","assets/executeQueryPBF-b4c7e501.js","assets/featureConversionUtils-bfaae0f6.js","assets/featureLayerUtils-a39aeb4a.js","assets/jsonUtils-f9aedde2.js","assets/UniqueValueRenderer-36595a45.js","assets/LegendOptions-48c2523d.js","assets/diffUtils-9dbdd340.js","assets/SizeVariable-0dc1bc42.js","assets/colorRamps-763955b0.js","assets/ColorStop-7842c5e0.js","assets/jsonUtils-805d1979.js","assets/styleUtils-e8aad1b5.js","assets/DictionaryLoader-7ed264e8.js","assets/LRUCache-c7a923e7.js","assets/FieldsIndex-3d8128c0.js","assets/UnknownTimeZone-d5028e24.js","assets/heatmapUtils-485005f9.js","assets/vec4f64-3c9d0901.js","assets/AttachmentQuery-6e51685e.js","assets/RelationshipQuery-c2adf52b.js","assets/MultiOriginJSONSupport-2c2935ac.js","assets/commonProperties-43b199c9.js","assets/FeatureLayerBase-7801e5b0.js","assets/LayerFloorInfo-0e67daa6.js","assets/serviceCapabilitiesUtils-7d3bbd37.js","assets/APIKeyMixin-828ee2ca.js","assets/ArcGISService-16130ddc.js","assets/CustomParametersMixin-6ff009ea.js","assets/FeatureEffectLayer-7399d7e4.js","assets/FeatureEffect-8a44b622.js","assets/FeatureReductionLayer-5aee6f89.js","assets/clusterUtils-6b9076e5.js","assets/MD5-715f37cd.js","assets/FeatureReductionSelection-63d7d958.js","assets/LabelClass-67c7130a.js","assets/labelUtils-39618ac3.js","assets/OperationalLayer-1bd8068d.js","assets/OrderedLayer-d4b74f5a.js","assets/PortalLayer-394f0be4.js","assets/portalItemUtils-1acb3c0b.js","assets/RefreshableLayer-1604ee0a.js","assets/TemporalLayer-64978c57.js","assets/FeatureTemplate-580a397d.js","assets/FeatureType-d929c2b3.js","assets/fieldProperties-c388c8d2.js","assets/labelingInfo-8214bb11.js","assets/versionUtils-1e15284e.js","assets/styleUtils-62792db0.js","assets/TopFeaturesQuery-4081a2c4.js","assets/popupUtils-afaed8cf.js","assets/interfaces-f1f22245.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=at(this);e.dynamicDataSource=this.dynamicDataSource;const t=this.subtypeCode!=null?`${this.subtypeField} = ${this.subtypeCode}`:null,r=we(this.definitionExpression,t);return e.where=r||"1=1",e}async deleteAttachments(e,t){return nt(this,e,t,h)}async fetchRecomputedExtents(e){return lt(this,e,h)}getFeatureType(e){const{typeIdField:t,types:r}=this;if(!t||!e)return null;const i=e.attributes?e.attributes[t]:void 0;if(i==null)return null;let s=null;return r==null||r.some(l=>{const{id:u}=l;return u!=null&&(u.toString()===i.toString()&&(s=l),!!s)}),s}getFieldDomain(e,t){const r=t==null?void 0:t.feature,i=this.getFeatureType(r);if(i){const s=i.domains&&i.domains[e];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}async queryAttachments(e,t){return ut(this,e,t,h)}async queryFeatures(e,t){const r=await this.load(),i=await r.source.queryFeatures(vt.from(e)??r.createQuery(),t);if(i!=null&&i.features)for(const s of i.features)s.layer=s.sourceLayer=r;return i}async queryObjectIds(e,t){return dt(this,e,t,h)}async queryFeatureCount(e,t){return pt(this,e,t,h)}async queryExtent(e,t){return yt(this,e,t,h)}async queryRelatedFeatures(e,t){return ct(this,e,t,h)}async queryRelatedFeaturesCount(e,t){return ht(this,e,t,h)}async queryTopFeatures(e,t){var l;const{source:r,capabilities:i}=await this.load();if(!r.queryTopFeatures||!((l=i==null?void 0:i.query)!=null&&l.supportsTopFeaturesQuery))throw new m(h,"Layer source does not support queryTopFeatures capability");const s=await r.queryTopFeatures(_.from(e),t);if(s!=null&&s.features)for(const u of s.features)u.layer=u.sourceLayer=this;return s}async queryTopObjectIds(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopObjectIds||!(i!=null&&i.query.supportsTopFeaturesQuery))throw new m(h,"Layer source does not support queryTopObjectIds capability");return r.queryTopObjectIds(_.from(e),t)}async queryTopFeaturesExtent(e,t){var s;const{source:r,capabilities:i}=await this.load();if(!r.queryTopExtents||!((s=i==null?void 0:i.query)!=null&&s.supportsTopFeaturesQuery))throw new m(h,"Layer source does not support queryTopExtents capability");return r.queryTopExtents(_.from(e),t)}async queryTopFeatureCount(e,t){var s;const{source:r,capabilities:i}=await this.load();if(!r.queryTopCount||!((s=i==null?void 0:i.query)!=null&&s.supportsTopFeaturesQuery))throw new m(h,"Layer source does not support queryFeatureCount capability");return r.queryTopCount(_.from(e),t)}read(e,t){const r=e.featureCollection;if(r){this.resourceInfo=e;const i=r.layers;i&&i.length===1&&(super.read(i[0],t),r.showLegend!=null&&super.read({showLegend:r.showLegend},t))}super.read(e,t),t&&t.origin==="service"&&(this.revert(["objectIdField","fields","timeInfo","dateFieldsTimeZone"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))}write(e,t){t={...t,origin:(t==null?void 0:t.origin)??void 0,writeLayerSchema:(t==null?void 0:t.writeLayerSchema)??this._hasMemorySource()};const{origin:r,layerContainerType:i,messages:s}=t;if(this.dynamicDataSource)return s==null||s.push(S(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),null;if(this.isTable){if((r==="web-map"||r==="web-scene")&&i!=="tables")return s==null||s.push(S(this,`a table source can only be written to tables, not ${i}`)),null;if(this._hasMemorySource())return s==null||s.push(S(this,"using an in-memory table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&(r==="web-map"||r==="web-scene")&&i==="tables")return s==null||s.push(S(this,"using a non-table source cannot be written to tables in web maps or web scenes")),null;return super.write(e,t)}clone(){if(this._hasMemorySource())throw new m(h,`FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);return super.clone()}serviceSupportsSpatialReference(e){var t;return!!this.loaded&&(((t=this.source)==null?void 0:t.type)==="memory"||wt(this,e))}async save(e){return this._debouncedSaveOperations(F.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(F.SAVE_AS,t,e)}_readEditingEnabled(e,t,r){var s;let i=(s=e.layerDefinition)==null?void 0:s.capabilities;return i?this._hasEditingCapability(i):(i=e.capabilities,t&&(r==null?void 0:r.origin)==="web-map"&&!this._hasMemorySource()&&i?this._hasEditingCapability(i):void 0)}_hasEditingCapability(e){return e.toLowerCase().split(",").map(t=>t.trim()).includes("editing")}_writeEditingEnabled(e,t,r,i){var s,l;if(!e){const u=(l=(s=this.capabilities)==null?void 0:s.operations)!=null&&l.supportsSync?"Query,Sync":"Query";I("layerDefinition.capabilities",u,t),r&&!(i!=null&&i.writeLayerSchema)&&(t.capabilities=u)}}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}_fetchFirstValidLayerId(e){return ve(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t=>{const r=t.data;if(r)return this.findFirstValidLayerId(r)})}async initLayerProperties(e){var t;return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(t=this.portalItem)==null?void 0:t.portal,url:this.parsedUrl})),this._verifySource(),this._verifyFields(),G(this.renderer,this.fieldsIndex),_e(this.timeInfo,this.fieldsIndex),Ft(this,{origin:"service"})}async hasDataChanged(){return ft(this)}async fetchPublishingStatus(){const e=this.source;return e!=null&&e.fetchPublishingStatus?e.fetchPublishingStatus():"unavailable"}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(i=>i.type==="geometry")||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_fixTemplates(e,t){e&&e.forEach(r=>{var s;const i=(s=r.prototype)==null?void 0:s.attributes;i&&t&&delete i[t]})}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new m("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new m("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")}_initMemorySource(e){e.forEach(t=>{t.layer=this,t.sourceLayer=this}),this.addHandles([e.on("after-add",t=>{t.item.layer=this,t.item.sourceLayer=this}),e.on("after-remove",t=>{t.item.layer=null,t.item.sourceLayer=null})],"fl-source")}_resetMemorySource(e){e.forEach(t=>{t.layer=null,t.sourceLayer=null}),this.removeHandles("fl-source")}_hasMemorySource(){return!(this.url||!this.source)}findFirstValidLayerId(e){return Array.isArray(e.layers)&&e.layers.length>0?e.layers[0].id:Array.isArray(e.tables)&&e.tables.length>0?e.tables[0].id:void 0}};o([y("service","capabilities")],a.prototype,"readCapabilities",null),o([n({json:{origins:{"web-scene":{write:!1}},write:!0}})],a.prototype,"charts",void 0),o([n({readOnly:!0})],a.prototype,"createQueryVersion",null),o([n({json:{read:{source:"layerDefinition.copyrightText"}}})],a.prototype,"copyright",void 0),o([n({json:{read:{source:"layerDefinition.displayField"}}})],a.prototype,"displayField",void 0),o([n({types:Fe,readOnly:!0})],a.prototype,"defaultSymbol",void 0),o([n({type:_t})],a.prototype,"dynamicDataSource",void 0),o([n({type:Boolean})],a.prototype,"editingEnabled",null),o([y(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],a.prototype,"readEditingEnabled",null),o([y("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],a.prototype,"readEditingEnabledFromWebMap",null),o([$(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],a.prototype,"writeEditingEnabled",null),o([$("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],a.prototype,"writeEditingEnabledToWebMap",null),o([n({readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),o([n({...O.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:M}}}}})],a.prototype,"fields",void 0),o([n(O.fieldsIndex)],a.prototype,"fieldsIndex",void 0),o([n({type:Ge,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"formTemplate",void 0),o([n({json:{read:{source:"layerDefinition.extent"}}})],a.prototype,"fullExtent",void 0),o([n({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:M,writer(e,t,r){const i=e?J.toJSON(e):null;i&&I(r,i,t)}}}},read:{source:"layerDefinition.geometryType",reader:J.read}}})],a.prototype,"geometryType",void 0),o([n({json:{read:{source:"layerDefinition.hasM"}}})],a.prototype,"hasM",void 0),o([n({json:{read:{source:"layerDefinition.hasZ"}}})],a.prototype,"hasZ",void 0),o([n(Oe)],a.prototype,"id",void 0),o([n({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],a.prototype,"infoFor3D",void 0),o([n({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],a.prototype,"isTable",void 0),o([y("service","isTable",["type","geometryType"]),y("isTable",["layerDefinition.type","layerDefinition.geometryType"])],a.prototype,"readIsTable",null),o([$("web-map","isTable")],a.prototype,"writeIsTable",null),o([n(Me)],a.prototype,"labelsVisible",void 0),o([n({type:[gt],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:j,write:!1},"web-scene":{name:"layerDefinition.drawingInfo.labelingInfo",read:j,write:{enabled:!0,layerContainerTypes:A}}},name:"layerDefinition.drawingInfo.labelingInfo",read:j,write:!0}})],a.prototype,"labelingInfo",void 0),o([n((()=>{const e=D(Ce);return e.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(t,r,i){I(i,Se(t),r)}}},e})())],a.prototype,"opacity",void 0),o([n(qe)],a.prototype,"legendEnabled",void 0),o([n({type:["show","hide"],json:(()=>{const e=D(Re.json);return e.origins["portal-item"]={read:!1,write:!1},e})()})],a.prototype,"listMode",void 0),o([y("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],a.prototype,"readGlobalIdField",null),o([n({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:M}}}}})],a.prototype,"objectIdField",void 0),o([y("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],a.prototype,"readObjectIdField",null),o([n({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],a.prototype,"operationalLayerType",void 0),o([n(O.outFields)],a.prototype,"outFields",void 0),o([n({readOnly:!0})],a.prototype,"parsedUrl",null),o([n({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),o([n(Le)],a.prototype,"popupEnabled",void 0),o([n({type:Te,json:{name:"popupInfo",write:!0}})],a.prototype,"popupTemplate",void 0),o([n({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),o([n({types:$e,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:De,name:"layerDefinition.drawingInfo.renderer",write:{layerContainerTypes:A,overridePolicy:(e,t,r)=>({ignoreOrigin:r==null?void 0:r.writeLayerSchema})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,t,r)=>({ignoreOrigin:r==null?void 0:r.writeLayerSchema})}}})],a.prototype,"renderer",null),o([y("service","renderer",["drawingInfo.renderer","defaultSymbol"]),y("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],a.prototype,"readRenderer",null),o([n()],a.prototype,"resourceInfo",void 0),o([n((()=>{const e=D(Pe);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],a.prototype,"screenSizePerspectiveEnabled",void 0),o([n({clonable:!1})],a.prototype,"source",null),o([Ie("source")],a.prototype,"castSource",null),o([y("portal-item","source",["featureSet"]),y("web-map","source",["featureSet"])],a.prototype,"readSource",null),o([n({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],a.prototype,"spatialReference",void 0),o([n({type:Number})],a.prototype,"subtypeCode",void 0),o([n({type:[W]})],a.prototype,"templates",void 0),o([y("templates",["editFieldsInfo","creatorField","editorField","templates"])],a.prototype,"readTemplates",null),o([n({type:Be})],a.prototype,"timeInfo",void 0),o([n()],a.prototype,"title",void 0),o([y("service","title",["name"]),y("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],a.prototype,"readTitle",null),o([y("web-map","title",["layerDefinition.name","title"])],a.prototype,"readTitleFromWebMap",null),o([n({type:String})],a.prototype,"sublayerTitleMode",void 0),o([n({json:{read:!1}})],a.prototype,"type",void 0),o([n({type:String})],a.prototype,"typeIdField",void 0),o([y("service","typeIdField"),y("typeIdField",["layerDefinition.typeIdField"])],a.prototype,"readTypeIdField",null),o([n({type:[H]})],a.prototype,"types",void 0),o([y("service","types",["types"]),y("types",["layerDefinition.types"])],a.prototype,"readTypes",null),o([n({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],a.prototype,"visible",void 0),o([y("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],a.prototype,"readVisible",null),a=o([E(B)],a);const Mt=a,dr=Object.freeze(Object.defineProperty({__proto__:null,default:Mt},Symbol.toStringTag,{value:"Module"}));export{dr as F,Mt as Z,Tt as i};
