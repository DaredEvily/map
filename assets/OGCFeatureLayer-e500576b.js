import{f as r,g as i,j as D,fj as B,aS as x,fu as L,F as R,dl as N,dm as z,fl as F,fm as H,aG as J,cT as I,l as Z,dt as k}from"./index-17f5801a.js";import"./UniqueValueRenderer-97820cbb.js";import{m as U,u as V}from"./jsonUtils-8a80628b.js";import{m as W}from"./MultiOriginJSONSupport-16b6f8f9.js";import{S as K,h as $,x as O,T as X,I as Y,F as ee,k as te,j as re,b as oe}from"./ogcFeatureUtils-6ab01636.js";import{d as ie}from"./FeatureSet-4e0171b9.js";import{i as se}from"./APIKeyMixin-a61b993e.js";import{o as pe}from"./CustomParametersMixin-ddc1f0c2.js";import{p as ne}from"./FeatureEffectLayer-257395ad.js";import{c as ae}from"./FeatureReductionLayer-160c0ea2.js";import{u as le}from"./OperationalLayer-ddd9a49f.js";import{c as ue}from"./OrderedLayer-c90ce43b.js";import{j as de}from"./PortalLayer-40b330d4.js";import{f as ce}from"./RefreshableLayer-d08eadb3.js";import{a as ye}from"./TemporalLayer-0fc56b4d.js";import{f as me,m as fe,c as he,y as ge,p as ve,d as Se}from"./commonProperties-b03c3d94.js";import{n as xe}from"./FeatureType-66d34250.js";import{y as be}from"./Field-d94e0e84.js";import{s as we}from"./fieldProperties-7ee96046.js";import{C as Ce}from"./LabelClass-3d0bd3e4.js";import{i as Re}from"./labelingInfo-23d6e286.js";import{b as T}from"./Query-4ba80df1.js";import{p as Fe}from"./popupUtils-2f71c23c.js";import"./LegendOptions-2334a895.js";import"./diffUtils-6c9afbf1.js";import"./SizeVariable-b848ae53.js";import"./colorRamps-89517de6.js";import"./ColorStop-efe07ef9.js";import"./jsonUtils-0dadc667.js";import"./styleUtils-d2b98714.js";import"./DictionaryLoader-8ab98d36.js";import"./LRUCache-65a1a7c7.js";import"./FieldsIndex-b50dd53d.js";import"./UnknownTimeZone-29b2edce.js";import"./heatmapUtils-eb599eda.js";import"./vec4f64-3c9d0901.js";import"./featureConversionUtils-3ca44a73.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./geojson-1e516e8c.js";import"./date-294ce3fb.js";import"./clientSideDefaults-4d087b77.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./defaultsJSON-b087dd4d.js";import"./fieldType-59772d91.js";import"./FeatureEffect-7bb7c8e1.js";import"./clusterUtils-14e668da.js";import"./MD5-715f37cd.js";import"./FeatureReductionSelection-0ce8af1c.js";import"./featureLayerUtils-32fbfbe4.js";import"./AttachmentQuery-30dad528.js";import"./RelationshipQuery-1eb53b79.js";import"./portalItemUtils-a4142bff.js";import"./FeatureTemplate-d1aaa665.js";import"./labelUtils-7504045c.js";let d=class extends B{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:p},layer:{apiKey:n,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:n,customParameters:l},spatialReference:s,supportedCrs:p}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(s=>ie.fromJSON(s))}queryFeaturesJSON(e,t={}){const s=this.getSource();return this.load(t).then(()=>K(s,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const s=new RegExp(`^${t}$`,"i");return e.conformsTo.some(p=>s.test(p))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){var s,p,n,l,a;const t=(s=e==null?void 0:e.components)==null?void 0:s.parameters;return((n=(p=t==null?void 0:t.limit)==null?void 0:p.schema)==null?void 0:n.maximum)??((a=(l=t==null?void 0:t.limitFeatures)==null?void 0:l.schema)==null?void 0:a.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??$,s=O(t);return s==null?x.WGS84:new x({wkid:s})}_getSupportedSpatialReferences(e,t){const s="#/crs",p=e.crs??[$],n=p.includes(s)?p.filter(a=>a!==s).concat(t.crs??[]):p,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter(a=>!l.test(a))}async _loadOGCServices(e,t){const s=t!=null?t.signal:null,{apiKey:p,collectionId:n,customParameters:l,fields:a,geometryType:m,hasZ:f,objectIdField:j,timeInfo:h,url:E}=e,P={fields:a==null?void 0:a.map(u=>u.toJSON()),geometryType:L.toJSON(m),hasZ:f??!1,objectIdField:j,timeInfo:h==null?void 0:h.toJSON()},c={apiKey:p,customParameters:l,signal:s},g=await X(E,c),[b,w]=await Promise.all([Y(g,c),ee(g,c)]);if(!this._conformsToType(b,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new R("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=w.collections.find(u=>u.id===n);if(!y)throw new R("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const _=this._conformsToType(b,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await te(g,c):null,C=await re(y,P,c),q=this._getMaxRecordCount(_),A=this._getCapabilities(C.hasZ,q),G=this._getStorageSpatialReference(y).toJSON(),M=this._getSupportedSpatialReferences(y,w),Q=new RegExp(`^${oe}`,"i"),v={};for(const u of M){const S=O(u);S!=null&&(v[S]||(v[S]=u.replace(Q,"")))}this.featureDefinition={capabilities:A,collection:y,layerDefinition:C,spatialReference:G,supportedCrs:v}}};r([i()],d.prototype,"featureDefinition",void 0),r([i({constructOnly:!0})],d.prototype,"layer",void 0),r([i()],d.prototype,"type",void 0),d=r([D("esri.layers.graphics.sources.OGCFeatureSource")],d);const Ie=we();let o=class extends se(pe(ae(ne(N(ue(ye(z(le(de(ce(W(k)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){F(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Fe(this,e)}createQuery(){return new T}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let s,p=!1;const n=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return l!=null&&this.types&&(p=this.types.some(m=>{var f;return m.id==l&&(s=(f=m.domains)==null?void 0:f[e],(s==null?void 0:s.type)==="inherited"&&(s=this._getLayerDomain(e)),!0)})),p||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(T.from(e)||this.createQuery(),t)).then(s=>{var p;return(p=s==null?void 0:s.features)==null||p.forEach(n=>{n.layer=n.sourceLayer=this}),s})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),F(this.renderer,this.fieldsIndex),H(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([i({readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"capabilities",void 0),r([i({type:String,json:{write:!0}})],o.prototype,"collectionId",void 0),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String})],o.prototype,"definitionExpression",void 0),r([i({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],o.prototype,"description",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Number})],o.prototype,"effectiveMaxRecordCount",null),r([i(me)],o.prototype,"elevationInfo",void 0),r([i({type:[be],json:{origins:{service:{name:"layerDefinition.fields"}}}})],o.prototype,"fields",void 0),r([i(Ie.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({readOnly:!0,type:J,json:{origins:{service:{name:"layerDefinition.extent"}}}})],o.prototype,"fullExtent",void 0),r([i({type:I.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:I.read}}}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],o.prototype,"hasZ",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i({type:[Ce],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Re},write:!0}}}})],o.prototype,"labelingInfo",void 0),r([i(fe)],o.prototype,"labelsVisible",void 0),r([i(he)],o.prototype,"legendEnabled",void 0),r([i({type:Number})],o.prototype,"maxRecordCount",void 0),r([i({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i({type:["OGCFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(ge)],o.prototype,"popupEnabled",void 0),r([i({type:Z,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:U,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:V,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],o.prototype,"renderer",null),r([i(ve)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({readOnly:!0,type:x,json:{origins:{service:{read:!0}}}})],o.prototype,"spatialReference",void 0),r([i({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],o.prototype,"title",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),r([i({type:[xe]})],o.prototype,"types",void 0),r([i(Se)],o.prototype,"url",void 0),o=r([D("esri.layers.OGCFeatureLayer")],o);const Ot=o;export{Ot as default};