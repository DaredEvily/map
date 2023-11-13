import{f as i,g as r,j as x,fj as $,el as P,aG as T,F as C,cT as c,di as N,e0 as E,x as U,ai as J,dl as _,dm as k,aS as j,fl as O,fm as W,dP as X,I as Y,dJ as D,aR as Q,aQ as S,l as L,dt as V}from"./index-17f5801a.js";import"./UniqueValueRenderer-97820cbb.js";import{m as G,u as Z}from"./jsonUtils-8a80628b.js";import{m as M}from"./MultiOriginJSONSupport-16b6f8f9.js";import{l as z,o as A}from"./clientSideDefaults-4d087b77.js";import{v as B,W as H,q as K,V as ee,S as te}from"./wfsUtils-5fef235a.js";import{d as ie}from"./FeatureSet-4e0171b9.js";import{o as re}from"./CustomParametersMixin-ddc1f0c2.js";import{p as oe}from"./FeatureEffectLayer-257395ad.js";import{c as se}from"./FeatureReductionLayer-160c0ea2.js";import{u as ae}from"./OperationalLayer-ddd9a49f.js";import{c as ne}from"./OrderedLayer-c90ce43b.js";import{j as pe}from"./PortalLayer-40b330d4.js";import{f as le}from"./RefreshableLayer-d08eadb3.js";import{a as de}from"./TemporalLayer-0fc56b4d.js";import{f as ue,m as me,c as ye,b as ce,y as fe,p as he,d as ge}from"./commonProperties-b03c3d94.js";import{y as R}from"./Field-d94e0e84.js";import{s as we}from"./fieldProperties-7ee96046.js";import{C as ve}from"./LabelClass-3d0bd3e4.js";import{i as Fe}from"./labelingInfo-23d6e286.js";import{b as m}from"./Query-4ba80df1.js";import{p as be}from"./popupUtils-2f71c23c.js";import"./LegendOptions-2334a895.js";import"./diffUtils-6c9afbf1.js";import"./SizeVariable-b848ae53.js";import"./colorRamps-89517de6.js";import"./ColorStop-efe07ef9.js";import"./jsonUtils-0dadc667.js";import"./styleUtils-d2b98714.js";import"./DictionaryLoader-8ab98d36.js";import"./LRUCache-65a1a7c7.js";import"./FieldsIndex-b50dd53d.js";import"./UnknownTimeZone-29b2edce.js";import"./heatmapUtils-eb599eda.js";import"./vec4f64-3c9d0901.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./defaultsJSON-b087dd4d.js";import"./geojson-1e516e8c.js";import"./date-294ce3fb.js";import"./OptimizedGeometry-d94e541f.js";import"./xmlUtils-444cb4c0.js";import"./FeatureEffect-7bb7c8e1.js";import"./clusterUtils-14e668da.js";import"./MD5-715f37cd.js";import"./FeatureReductionSelection-0ce8af1c.js";import"./featureLayerUtils-32fbfbe4.js";import"./AttachmentQuery-30dad528.js";import"./RelationshipQuery-1eb53b79.js";import"./fieldType-59772d91.js";import"./portalItemUtils-a4142bff.js";import"./labelUtils-7504045c.js";let d=class extends ${constructor(){super(...arguments),this._connection=null,this.capabilities=z(!1,!1),this.type="wfs",this.refresh=P(async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return t&&(this.sourceJSON.extent=t),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const s=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return ie.fromJSON(s)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const s=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:s.count,extent:T.fromJSON(s.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e){var F,b;const{url:t,customParameters:s,name:n,namespaceUri:p,fields:a,geometryType:u,swapXY:f}=this.layer,y=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!t)throw new C("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await B(t,{customParameters:s,...e}));const h=["fields","geometryType","name","namespaceUri","swapXY"].some(w=>this.layer[w]==null),l=h?await H(this.wfsCapabilities,n,p,{spatialReference:y,customParameters:s,signal:e==null?void 0:e.signal}):{...K(a??[]),geometryType:u,name:n,namespaceUri:p,spatialReference:y,swapXY:f},g=ee(this.wfsCapabilities.readFeatureTypes(),l.name,l.namespaceUri),q=c.toJSON(l.geometryType);return{customParameters:s,featureType:g,fields:((F=l.fields)==null?void 0:F.map(w=>w.toJSON()))??[],geometryField:l.geometryField,geometryType:q,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:l.objectIdField,spatialReference:(b=l.spatialReference)==null?void 0:b.toJSON(),swapXY:!!l.swapXY}}async _startWorker(e){const[t,s]=await N([this._createLoadOptions(e),E("WFSSourceWorker",{...e,strategy:U("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=t.error||s.error||null,p=s.value||null;if(n)throw p&&p.close(),n;const a=t.value;this._connection=s.value;const u=(await this._connection.invoke("load",a,e)).extent;this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:J},extent:u,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:A(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:3e3,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};i([r()],d.prototype,"capabilities",void 0),i([r({constructOnly:!0})],d.prototype,"layer",void 0),i([r()],d.prototype,"sourceJSON",void 0),i([r()],d.prototype,"type",void 0),i([r()],d.prototype,"wfsCapabilities",void 0),d=i([x("esri.layers.graphics.sources.WFSSource")],d);var v;const I=we();let o=v=class extends ne(re(se(oe(_(de(le(k(ae(pe(M(V))))))))))){static fromWFSLayerInfo(e){const{customParameters:t,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:u,objectIdField:f,spatialReference:y,swapXY:h,url:l,wfsCapabilities:g}=e;return new v({customParameters:t,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:u,objectIdField:f,spatialReference:y,swapXY:h,url:l,wfsCapabilities:g})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=j.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),O(this.renderer,this.fieldsIndex),W(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){var e;return(e=this.source)==null?void 0:e.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,s){const n=e.filter(p=>p.name!==te);this.geometryField&&n.unshift(new R({name:this.geometryField,alias:this.geometryField,type:"geometry"})),X(s,n.map(p=>p.toJSON()),t)}get parsedUrl(){return Y(this.url)}set renderer(e){O(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){var e;return(e=this.source)==null?void 0:e.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return be(this,e)}createQuery(){const e=new m;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:s}=this;return e.timeExtent=t!=null&&s!=null?s.offset(-t.value,t.unit):s||null,e}getFieldDomain(e,t){var s;return(s=this.getField(e))==null?void 0:s.domain}getField(e){var t;return(t=this.fieldsIndex)==null?void 0:t.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(m.from(e)||this.createQuery(),t)).then(s=>{if(s!=null&&s.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(m.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(m.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(m.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};i([r({readOnly:!0})],o.prototype,"capabilities",null),i([r({type:String})],o.prototype,"copyright",void 0),i([r({readOnly:!0})],o.prototype,"createQueryVersion",null),i([r({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],o.prototype,"customParameters",void 0),i([r(D("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),i([r({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),i([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),i([r({type:String})],o.prototype,"displayField",void 0),i([r(ue)],o.prototype,"elevationInfo",void 0),i([r({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"featureUrl",void 0),i([r({type:[R],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),i([Q("fields")],o.prototype,"writeFields",null),i([r(I.fieldsIndex)],o.prototype,"fieldsIndex",void 0),i([r({type:T,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),i([r()],o.prototype,"geometryField",void 0),i([r({type:String,json:{read:{source:"layerDefinition.geometryType",reader:c.read},write:{target:"layerDefinition.geometryType",writer:c.write,ignoreOrigin:!0},origins:{service:{read:c.read}}}})],o.prototype,"geometryType",void 0),i([r({type:String})],o.prototype,"id",void 0),i([r(me)],o.prototype,"labelsVisible",void 0),i([r({type:[ve],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Fe},write:!0}})],o.prototype,"labelingInfo",void 0),i([r(ye)],o.prototype,"legendEnabled",void 0),i([r({type:["show","hide"]})],o.prototype,"listMode",void 0),i([r({type:String})],o.prototype,"objectIdField",void 0),i([r({type:["WFS"]})],o.prototype,"operationalLayerType",void 0),i([r({type:S,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"maxFeatures",void 0),i([r({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],o.prototype,"mode",void 0),i([r({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"name",void 0),i([r({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"namespaceUri",void 0),i([r(ce)],o.prototype,"opacity",void 0),i([r(I.outFields)],o.prototype,"outFields",void 0),i([r({readOnly:!0})],o.prototype,"parsedUrl",null),i([r(fe)],o.prototype,"popupEnabled",void 0),i([r({type:L,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),i([r({types:G,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:Z,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],o.prototype,"renderer",null),i([r(he)],o.prototype,"screenSizePerspectiveEnabled",void 0),i([r({readOnly:!0})],o.prototype,"source",void 0),i([r({type:j,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],o.prototype,"spatialReference",void 0),i([r({readOnly:!0,type:[S],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"spatialReferences",void 0),i([r({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"swapXY",void 0),i([r({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],o.prototype,"title",void 0),i([r({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),i([r(ge)],o.prototype,"url",void 0),i([r({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"version",void 0),i([r()],o.prototype,"wfsCapabilities",null),o=v=i([x("esri.layers.WFSLayer")],o);const vt=o;export{vt as default};