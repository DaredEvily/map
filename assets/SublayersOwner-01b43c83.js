import{f as s,g as n,aV as g,aG as z,aS as Y,j as k,a_ as J,bs as u,bT as Q,N as $,E as W,al as ee,dk as te,F as S,gg as re,x as ie,bX as ae,s as E,aT as se,V as U,dT as oe,aa as P,_ as le,ac as F,bI as ne,cT as R,aQ as V,aR as w,l as pe,df as G,dV as ye,dz as L,fj as ue,w as de,k as ce,e5 as fe,fS as he}from"./index-8edf265f.js";import{r as be}from"./DictionaryLoader-7ed264e8.js";import{I as me,y as ge}from"./commonProperties-43b199c9.js";import{c as H}from"./portalItemUtils-1acb3c0b.js";import"./UniqueValueRenderer-36595a45.js";import{m as Se,u as Ie}from"./jsonUtils-f9aedde2.js";import{m as ve}from"./MultiOriginJSONSupport-2c2935ac.js";import{x as we}from"./QueryTask-92b896f2.js";import{n as Ee}from"./FeatureType-d929c2b3.js";import{y as Le}from"./Field-ebbe1dfc.js";import{Z as xe}from"./FieldsIndex-3d8128c0.js";import{C as Te}from"./LabelClass-67c7130a.js";import{c as Oe}from"./labelingInfo-8214bb11.js";import{p as De}from"./LayerFloorInfo-0e67daa6.js";import{a as Fe}from"./serviceCapabilitiesUtils-7d3bbd37.js";import{c as q,b as _e,K}from"./Query-474f3baf.js";import{c as Pe}from"./AttachmentQuery-6e51685e.js";import{p as Ae}from"./popupUtils-afaed8cf.js";import{o as Ve}from"./sublayerUtils-44a79dda.js";const rt=r=>{let e=class extends r{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null}readCapabilities(t,i){const a=i.capabilities&&i.capabilities.split(",").map(Z=>Z.toLowerCase().trim());if(!a)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const o=this.type,p=o!=="tile"&&!!i.supportsDynamicLayers,y=a.includes("query"),d=a.includes("map"),c=!!i.exportTilesAllowed,b=a.includes("tilemap"),I=a.includes("data"),x=o!=="tile"&&(!i.tileInfo||p),T=o!=="tile"&&(!i.tileInfo||p),f=o!=="tile",h=i.cimVersion&&be.parse(i.cimVersion),O=(h==null?void 0:h.since(1,4))??!1,D=(h==null?void 0:h.since(2,0))??!1;return{operations:{supportsExportMap:d,supportsExportTiles:c,supportsIdentify:y,supportsQuery:I,supportsTileMap:b},exportMap:d?{supportsArcadeExpressionForLabeling:O,supportsSublayersChanges:f,supportsDynamicLayers:p,supportsSublayerVisibility:x,supportsSublayerDefinitionExpression:T,supportsCIMSymbols:D}:null,exportTiles:c?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(t,i){let a=i.currentVersion;return a||(a=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),a}async fetchRelatedService(t){const i=this.portalItem;if(!i||!H(i))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=i.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},t).then(o=>o.find(p=>p.type==="Feature Service")??null,()=>null));const a=await this._relatedFeatureServicePromise;return J(t),a?{itemId:a.id,url:a.url}:null}async fetchSublayerInfo(t,i){var y;const{source:a}=t;if(this!=null&&this.portalItem&&this.type==="tile"&&(a==null?void 0:a.type)==="map-layer"&&H(this.portalItem)&&t.originIdOf("url")<u.SERVICE){const d=await this.fetchRelatedService(i);d&&(t.url=Q(d.url,a.mapLayerId.toString()),t.layerItemId=d.itemId)}const{url:o}=t;let p;if(a.type==="data-layer")p=(await $(o,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...i})).data;else if(o&&t.originIdOf("url")>u.SERVICE)try{const d=await this._fetchAllLayersAndTablesFromService(o),c=((y=W(o))==null?void 0:y.sublayer)??a.mapLayerId;p=d.get(c)}catch{}else{let d=t.id;(a==null?void 0:a.type)==="map-layer"&&(d=a.mapLayerId);try{p=(await this.fetchAllLayersAndTables(i)).get(d)}catch{}}return p}async fetchAllLayersAndTables(t){var i;return this._fetchAllLayersAndTablesFromService((i=this.parsedUrl)==null?void 0:i.path,t)}async _fetchAllLayersAndTablesFromService(t,i){await this.load(i),this._allLayersAndTablesMap||(this._allLayersAndTablesMap=new Map);const a=W(t),o=ee(this._allLayersAndTablesMap,a==null?void 0:a.url.path,()=>$(Q(a==null?void 0:a.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(y=>{const d=new Map;for(const c of y.data.layers)d.set(c.id,c);return{result:d}},y=>({error:y}))),p=await o;if(J(i),"result"in p)return p.result;throw p.error}};return s([n({readOnly:!0})],e.prototype,"capabilities",void 0),s([g("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],e.prototype,"readCapabilities",null),s([n({json:{read:{source:"copyrightText"}}})],e.prototype,"copyright",void 0),s([n({type:z})],e.prototype,"fullExtent",void 0),s([n(me)],e.prototype,"id",void 0),s([n({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],e.prototype,"legendEnabled",void 0),s([n(ge)],e.prototype,"popupEnabled",void 0),s([n({type:Y})],e.prototype,"spatialReference",void 0),s([n({readOnly:!0})],e.prototype,"version",void 0),s([g("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],e.prototype,"readVersion",null),e=s([k("esri.layers.mixins.ArcGISMapService")],e),e};var A;function j(r){return r!=null&&r.type==="esriSMS"}function M(r,e,t){var a;const i=this.originIdOf(e)>=L(t.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!t&&((a=t.layer)==null?void 0:a.type)==="map-image"&&(t.writeSublayerStructure||i)}}function C(r,e,t){var i;return{enabled:!!t&&((i=t.layer)==null?void 0:i.type)==="tile"&&(t.origin&&this.originIdOf(e)>=L(t.origin)||this._isOverridden(e))}}function m(r,e,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function _(r,e,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(e)>=L(t.origin))}}let je=0;const v=new Set;v.add("layer"),v.add("parent"),v.add("loaded"),v.add("loadStatus"),v.add("loadError"),v.add("loadWarnings");let l=A=class extends ve(te(ue)){constructor(r){super(r),this.capabilities=void 0,this.maxScaleRange={minScale:0,maxScale:0},this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.type="sublayer",this.types=null,this._lastParsedUrl=null}async load(r){return this.addResolvingPromise((async()=>{const{layer:e,url:t}=this;if(!e&&!t)throw new S("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const i=e?await e.fetchSublayerInfo(this,r):(await $(t,{responseType:"json",query:{f:"json"},...r})).data;i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service"}))})()),this}readCapabilities(r,e){e=e.layerDefinition||e;const{operations:{supportsQuery:t,supportsQueryAttachments:i},query:{supportsFormatPBF:a},data:{supportsAttachment:o}}=Fe(e,this.url);return{exportMap:{supportsModification:!!e.canModifyLayer},operations:{supportsQuery:t,supportsQueryAttachments:i},data:{supportsAttachment:o},query:{supportsFormatPBF:a}}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(r){this._setAndNotifyLayer("definitionExpression",r)}get effectiveScaleRange(){const{minScale:r,maxScale:e}=this;return{minScale:r,maxScale:e}}readMaxScaleRange(r,e){return{minScale:(e=e.layerDefinition||e).minScale??0,maxScale:e.maxScale??0}}get fieldsIndex(){return new xe(this.fields||[])}set floorInfo(r){this._setAndNotifyLayer("floorInfo",r)}readGlobalIdFieldFromService(r,e){if((e=e.layerDefinition||e).globalIdField)return e.globalIdField;if(e.fields){for(const t of e.fields)if(t.type==="esriFieldTypeGlobalID")return t.name}}get id(){return this._get("id")??je++}set id(r){var e,t,i;this._get("id")!==r&&(((i=(t=(e=this.layer)==null?void 0:e.capabilities)==null?void 0:t.exportMap)==null?void 0:i.supportsDynamicLayers)!==!1?this._set("id",r):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(r){this._setAndNotifyLayer("labelingInfo",r)}writeLabelingInfo(r,e,t,i){r&&r.length&&(e.layerDefinition={drawingInfo:{labelingInfo:r.map(a=>a.write({},i))}})}set labelsVisible(r){this._setAndNotifyLayer("labelsVisible",r)}set layer(r){this._set("layer",r),this.sublayers&&this.sublayers.forEach(e=>e.layer=r)}set listMode(r){this._set("listMode",r)}set minScale(r){this._setAndNotifyLayer("minScale",r)}readMinScale(r,e){var t;return e.minScale||((t=e.layerDefinition)==null?void 0:t.minScale)||0}set maxScale(r){this._setAndNotifyLayer("maxScale",r)}readMaxScale(r,e){var t;return e.maxScale||((t=e.layerDefinition)==null?void 0:t.maxScale)||0}readObjectIdFieldFromService(r,e){if((e=e.layerDefinition||e).objectIdField)return e.objectIdField;if(e.fields){for(const t of e.fields)if(t.type==="esriFieldTypeOID")return t.name}}set opacity(r){this._setAndNotifyLayer("opacity",r)}readOpacity(r,e){var i;const t=e.layerDefinition;return 1-.01*(((t==null?void 0:t.transparency)!=null?t.transparency:(i=t==null?void 0:t.drawingInfo)==null?void 0:i.transparency)??0)}writeOpacity(r,e,t,i){e.layerDefinition={drawingInfo:{transparency:100-100*r}}}writeParent(r,e){this.parent&&this.parent!==this.layer?e.parentLayerId=re(this.parent.id):e.parentLayerId=-1}get queryTask(){var p;if(!this.layer)return null;const{spatialReference:r}=this.layer,e="gdbVersion"in this.layer?this.layer.gdbVersion:void 0,{capabilities:t,fieldsIndex:i}=this,a=ie("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF),o=((p=t==null?void 0:t.operations)==null?void 0:p.supportsQueryAttachments)??!1;return new we({url:this.url,pbfSupported:a,fieldsIndex:i,gdbVersion:e,sourceSpatialReference:r,queryAttachmentsSupported:o})}set renderer(r){if(r){for(const e of r.getSymbols())if(ae(e)){E.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",r)}get source(){return this._get("source")||new q({mapLayerId:this.id})}set source(r){this._setAndNotifyLayer("source",r)}set sublayers(r){this._handleSublayersChange(r,this._get("sublayers")),this._set("sublayers",r)}castSublayers(r){return se(U.ofType(A),r)}writeSublayers(r,e,t){var i;(i=this.sublayers)!=null&&i.length&&(e[t]=this.sublayers.map(a=>a.id).toArray().reverse())}readTitle(r,e){var t;return((t=e.layerDefinition)==null?void 0:t.name)??e.name}readTypeIdField(r,e){let t=(e=e.layerDefinition||e).typeIdField;if(t&&e.fields){t=t.toLowerCase();const i=e.fields.find(a=>a.name.toLowerCase()===t);i&&(t=i.name)}return t}get url(){var i;const r=((i=this.layer)==null?void 0:i.parsedUrl)??this._lastParsedUrl,e=this.source;if(!r)return null;if(this._lastParsedUrl=r,(e==null?void 0:e.type)==="map-layer")return`${r.path}/${e.mapLayerId}`;const t={layer:JSON.stringify({source:this.source})};return`${r.path}/dynamicLayer?${oe(t)}`}set url(r){this._overrideIfSome("url",r)}set visible(r){this._setAndNotifyLayer("visible",r)}writeVisible(r,e,t,i){e[t]=this.getAtOrigin("defaultVisibility","service")||r}clone(){const{store:r}=P(this),e=new A;return P(e).store=r.clone(v),this.commitProperty("url"),e._lastParsedUrl=this._lastParsedUrl,e}createPopupTemplate(r){return Ae(this,r)}createQuery(){return new _e({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var a;if(this.hasOwnProperty("sublayers"))return null;const r=(await le(()=>import("./FeatureLayer-1a860199.js").then(o=>o.F),["assets/FeatureLayer-1a860199.js","assets/index-8edf265f.js","assets/UniqueValueRenderer-36595a45.js","assets/LegendOptions-48c2523d.js","assets/diffUtils-9dbdd340.js","assets/SizeVariable-0dc1bc42.js","assets/colorRamps-763955b0.js","assets/ColorStop-7842c5e0.js","assets/jsonUtils-805d1979.js","assets/styleUtils-e8aad1b5.js","assets/jsonUtils-f9aedde2.js","assets/DictionaryLoader-7ed264e8.js","assets/LRUCache-c7a923e7.js","assets/FieldsIndex-3d8128c0.js","assets/UnknownTimeZone-d5028e24.js","assets/heatmapUtils-485005f9.js","assets/vec4f64-3c9d0901.js","assets/MultiOriginJSONSupport-2c2935ac.js","assets/commonProperties-43b199c9.js","assets/FeatureLayerBase-7801e5b0.js","assets/Field-ebbe1dfc.js","assets/fieldType-088ee331.js","assets/featureLayerUtils-a39aeb4a.js","assets/Query-474f3baf.js","assets/AttachmentQuery-6e51685e.js","assets/RelationshipQuery-c2adf52b.js","assets/LayerFloorInfo-0e67daa6.js","assets/serviceCapabilitiesUtils-7d3bbd37.js","assets/queryZScale-b4140d92.js","assets/FeatureSet-4ba9f962.js","assets/APIKeyMixin-828ee2ca.js","assets/ArcGISService-16130ddc.js","assets/CustomParametersMixin-6ff009ea.js","assets/EditBusLayer-60b14f80.js","assets/FeatureEffectLayer-7399d7e4.js","assets/FeatureEffect-8a44b622.js","assets/FeatureReductionLayer-5aee6f89.js","assets/clusterUtils-6b9076e5.js","assets/MD5-715f37cd.js","assets/FeatureReductionSelection-63d7d958.js","assets/LabelClass-67c7130a.js","assets/labelUtils-39618ac3.js","assets/defaultsJSON-b087dd4d.js","assets/OperationalLayer-1bd8068d.js","assets/OrderedLayer-d4b74f5a.js","assets/PortalLayer-394f0be4.js","assets/portalItemUtils-1acb3c0b.js","assets/RefreshableLayer-1604ee0a.js","assets/TemporalLayer-64978c57.js","assets/FeatureTemplate-580a397d.js","assets/FeatureType-d929c2b3.js","assets/fieldProperties-c388c8d2.js","assets/labelingInfo-8214bb11.js","assets/versionUtils-1e15284e.js","assets/styleUtils-62792db0.js","assets/TopFeaturesQuery-4081a2c4.js","assets/popupUtils-afaed8cf.js","assets/interfaces-f1f22245.js"])).default,{layer:e,url:t}=this;let i;if(t&&this.originIdOf("url")>u.SERVICE)i=new r({url:t});else{if(!(e!=null&&e.parsedUrl))throw new S("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");{const o=e.parsedUrl;i=new r({url:o.path}),o&&this.source&&(this.source.type==="map-layer"?i.layerId=this.source.mapLayerId:i.dynamicDataSource=this.source)}}return(e==null?void 0:e.refreshInterval)!=null&&(i.refreshInterval=e.refreshInterval),this.definitionExpression&&(i.definitionExpression=this.definitionExpression),this.floorInfo&&(i.floorInfo=F(this.floorInfo)),this.originIdOf("labelingInfo")>u.SERVICE&&(i.labelingInfo=F(this.labelingInfo)),this.originIdOf("labelsVisible")>u.DEFAULTS&&(i.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>u.DEFAULTS&&(i.legendEnabled=this.legendEnabled),this.originIdOf("visible")>u.DEFAULTS&&(i.visible=this.visible),this.originIdOf("minScale")>u.DEFAULTS&&(i.minScale=this.minScale),this.originIdOf("maxScale")>u.DEFAULTS&&(i.maxScale=this.maxScale),this.originIdOf("opacity")>u.DEFAULTS&&(i.opacity=this.opacity),this.originIdOf("popupTemplate")>u.DEFAULTS&&(i.popupTemplate=F(this.popupTemplate)),this.originIdOf("renderer")>u.SERVICE&&(i.renderer=F(this.renderer)),((a=this.source)==null?void 0:a.type)==="data-layer"&&(i.dynamicDataSource=this.source.clone()),this.originIdOf("title")>u.DEFAULTS&&(i.title=this.title),(e==null?void 0:e.type)==="map-image"&&e.originIdOf("customParameters")>u.DEFAULTS&&(i.customParameters=e.customParameters),(e==null?void 0:e.type)==="tile"&&e.originIdOf("customParameters")>u.DEFAULTS&&(i.customParameters=e.customParameters),i}getField(r){return this.fieldsIndex.get(r)}getFeatureType(r){const{typeIdField:e,types:t}=this;if(!e||!r)return null;const i=r.attributes?r.attributes[e]:void 0;if(i==null)return null;let a=null;return t==null||t.some(o=>{const{id:p}=o;return p!=null&&(p.toString()===i.toString()&&(a=o),!!a)}),a}getFieldDomain(r,e){const t=e==null?void 0:e.feature,i=this.getFeatureType(t);if(i){const a=i.domains&&i.domains[r];if(a&&a.type!=="inherited")return a}return this._getLayerDomain(r)}async queryAttachments(r,e){var b,I;await this.load(),r=Pe.from(r);const t=this.capabilities;if(!((b=t==null?void 0:t.data)!=null&&b.supportsAttachment))throw new S("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:i,objectIds:a,globalIds:o,num:p,size:y,start:d,where:c}=r;if(!((I=t==null?void 0:t.operations)!=null&&I.supportsQueryAttachments)&&((i==null?void 0:i.length)>0||(o==null?void 0:o.length)>0||(y==null?void 0:y.length)>0||p||d||c))throw new S("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",r);if(!(a!=null&&a.length||o!=null&&o.length||c))throw new S("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",r);return this.queryTask.executeAttachmentQuery(r,e)}async queryFeatures(r=this.createQuery(),e){var i,a;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new S("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new S("queryFeatures:not-supported","this layer has no url.");const t=await this.queryTask.execute(r,{...e,query:{...(i=this.layer)==null?void 0:i.customParameters,token:(a=this.layer)==null?void 0:a.apiKey}});if(t!=null&&t.features)for(const o of t.features)o.sourceLayer=this;return t}toExportImageJSON(r){var o,p;const e={id:this.id,source:((o=this.source)==null?void 0:o.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},t=ne(r,this.definitionExpression);t!=null&&(e.definitionExpression=t);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((y,d)=>(y[d]=this.originIdOf(d),y),{});if(Object.keys(i).some(y=>i[y]>u.SERVICE)){const y=e.drawingInfo={};if(i.renderer>u.SERVICE&&(y.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>u.SERVICE&&(y.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>u.SERVICE)if(this.labelingInfo){!this.loaded&&((p=this.labelingInfo)!=null&&p.some(c=>!c.labelPlacement))&&E.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let d=this.labelingInfo;this.geometryType!=null&&(d=Oe(this.labelingInfo,R.toJSON(this.geometryType))),y.showLabels=!0,y.labelingInfo=d.filter(c=>c.labelPlacement).map(c=>c.toJSON({origin:"service",layer:this.layer}))}else y.showLabels=!1;i.opacity>u.SERVICE&&(y.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(y.renderer)}return e}_assignDefaultSymbolColors(r){this._forEachSimpleMarkerSymbols(r,e=>{var t;e.color||e.style!=="esriSMSX"&&e.style!=="esriSMSCross"||((t=e.outline)!=null&&t.color?e.color=e.outline.color:e.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(r,e){if(r){const t=("uniqueValueInfos"in r?r.uniqueValueInfos:"classBreakInfos"in r?r.classBreakInfos:null)??[];for(const i of t)j(i.symbol)&&e(i.symbol);"symbol"in r&&j(r.symbol)&&e(r.symbol),"defaultSymbol"in r&&j(r.defaultSymbol)&&e(r.defaultSymbol)}}_setAndNotifyLayer(r,e){var y,d,c,b;const t=this.layer,i=this._get(r);let a,o;switch(r){case"definitionExpression":case"floorInfo":a="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":a="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":a="supportsDynamicLayers",o="supportsModification"}const p=P(this).getDefaultOrigin();if(p!=="service"){if(a&&((c=(d=(y=this.layer)==null?void 0:y.capabilities)==null?void 0:d.exportMap)==null?void 0:c[a])===!1)return void this._logLockedError(r,`capability not available 'layer.capabilities.exportMap.${a}'`);if(o&&((b=this.capabilities)==null?void 0:b.exportMap[o])===!1)return void this._logLockedError(r,`capability not available 'capabilities.exportMap.${o}'`)}r!=="source"||this.loadStatus==="not-loaded"?(this._set(r,e),p!=="service"&&i!==e&&t&&t.emit&&t.emit("sublayer-update",{propertyName:r,target:this})):this._logLockedError(r,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(r,e){e&&(e.forEach(t=>{t.parent=null,t.layer=null}),this.removeAllHandles()),r&&(r.forEach(t=>{t.parent=this,t.layer=this.layer}),this.addHandles([r.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),r.on("after-remove",({item:t})=>{t.parent=null,t.layer=null}),r.on("before-changes",t=>{var a,o,p;const i=(p=(o=(a=this.layer)==null?void 0:a.capabilities)==null?void 0:o.exportMap)==null?void 0:p.supportsSublayersChanges;i==null||i||(E.getLogger(this).error(new S("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),t.preventDefault())})]))}_logLockedError(r,e){const{layer:t,declaredClass:i}=this;E.getLogger(i).error(new S("sublayer:locked",`Property '${String(r)}' can't be changed on Sublayer from the layer '${t==null?void 0:t.id}'`,{reason:e,sublayer:this,layer:t}))}_getLayerDomain(r){const e=this.fieldsIndex.get(r);return e?e.domain:null}};l.test={isMapImageLayerOverridePolicy:r=>r===m||r===M,isTileImageLayerOverridePolicy:r=>r===C},s([n({readOnly:!0})],l.prototype,"capabilities",void 0),s([g("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],l.prototype,"readCapabilities",null),s([n()],l.prototype,"defaultPopupTemplate",null),s([n({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:M}}})],l.prototype,"definitionExpression",null),s([n({readOnly:!0})],l.prototype,"effectiveScaleRange",null),s([g("service","maxScaleRange",["minScale","maxScale"])],l.prototype,"readMaxScaleRange",null),s([n({type:[Le],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],l.prototype,"fields",void 0),s([n({readOnly:!0})],l.prototype,"fieldsIndex",null),s([n({type:De,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:M},origins:{"web-scene":{read:!1,write:!1}}}})],l.prototype,"floorInfo",null),s([n({type:z,json:{read:{source:"layerDefinition.extent"}}})],l.prototype,"fullExtent",void 0),s([n({type:R.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:R.read}}}}})],l.prototype,"geometryType",void 0),s([n({type:String})],l.prototype,"globalIdField",void 0),s([g("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],l.prototype,"readGlobalIdFieldFromService",null),s([n({type:V,json:{write:{ignoreOrigin:!0}}})],l.prototype,"id",null),s([n({value:null,type:[Te],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:m}}})],l.prototype,"labelingInfo",null),s([w("labelingInfo")],l.prototype,"writeLabelingInfo",null),s([n({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:m}}})],l.prototype,"labelsVisible",null),s([n({value:null})],l.prototype,"layer",null),s([n({type:String,json:{write:{overridePolicy:C}}})],l.prototype,"layerItemId",void 0),s([n({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:_}}})],l.prototype,"legendEnabled",void 0),s([n({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],l.prototype,"listMode",null),s([n({type:Number,value:0,json:{write:{overridePolicy:m}}})],l.prototype,"minScale",null),s([g("minScale",["minScale","layerDefinition.minScale"])],l.prototype,"readMinScale",null),s([n({type:Number,value:0,json:{write:{overridePolicy:m}}})],l.prototype,"maxScale",null),s([g("maxScale",["maxScale","layerDefinition.maxScale"])],l.prototype,"readMaxScale",null),s([n({type:String})],l.prototype,"objectIdField",void 0),s([g("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],l.prototype,"readObjectIdFieldFromService",null),s([n({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:m}}})],l.prototype,"opacity",null),s([g("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],l.prototype,"readOpacity",null),s([w("opacity")],l.prototype,"writeOpacity",null),s([n({json:{type:V,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:m}}})],l.prototype,"parent",void 0),s([w("parent")],l.prototype,"writeParent",null),s([n({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(r,e)=>!e.disablePopup},write:{target:"disablePopup",overridePolicy:_,writer(r,e,t){e[t]=!r}}}})],l.prototype,"popupEnabled",void 0),s([n({type:pe,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:_}}})],l.prototype,"popupTemplate",void 0),s([n({readOnly:!0})],l.prototype,"queryTask",null),s([n({types:Se,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:m},origins:{"web-scene":{types:Ie,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:m}}}}})],l.prototype,"renderer",null),s([n({types:{key:"type",base:null,typeMap:{"data-layer":K,"map-layer":q}},cast(r){if(r){if("mapLayerId"in r)return G(q,r);if("dataSource"in r)return G(K,r)}return r},json:{name:"layerDefinition.source",write:{overridePolicy:m}}})],l.prototype,"source",null),s([n()],l.prototype,"sourceJSON",void 0),s([n({value:null,json:{type:[V],write:{target:"subLayerIds",allowNull:!0,overridePolicy:m}}})],l.prototype,"sublayers",null),s([ye("sublayers")],l.prototype,"castSublayers",null),s([w("sublayers")],l.prototype,"writeSublayers",null),s([n({type:String,json:{name:"name",write:{overridePolicy:_}}})],l.prototype,"title",void 0),s([g("service","title",["name","layerDefinition.name"])],l.prototype,"readTitle",null),s([n({type:String})],l.prototype,"typeIdField",void 0),s([n({json:{read:!1},readOnly:!0,value:"sublayer"})],l.prototype,"type",void 0),s([g("typeIdField",["layerDefinition.typeIdField"])],l.prototype,"readTypeIdField",null),s([n({type:[Ee],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],l.prototype,"types",void 0),s([n({type:String,json:{name:"layerUrl",write:{overridePolicy:C}}})],l.prototype,"url",null),s([n({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:m}}})],l.prototype,"visible",null),s([w("visible")],l.prototype,"writeVisible",null),l=A=s([k("esri.layers.support.Sublayer")],l);const B=l,Me=E.getLogger("esri.layers.TileLayer");function Ce(r,e){const t=[],i={};return r&&r.forEach(a=>{const o=new B;if(o.read(a,e),i[o.id]=o,a.parentLayerId!=null&&a.parentLayerId!==-1){const p=i[a.parentLayerId];p.sublayers||(p.sublayers=[]),p.sublayers.unshift(o)}else t.unshift(o)}),t}const N=U.ofType(B);function X(r,e){r&&r.forEach(t=>{e(t),t.sublayers&&t.sublayers.length&&X(t.sublayers,e)})}const it=r=>{let e=class extends r{constructor(...t){super(...t),this.allSublayers=new de({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[u.SERVICE]:{},[u.PORTAL_ITEM]:{},[u.WEB_SCENE]:{},[u.WEB_MAP]:{}},this.addHandles(ce(()=>this.sublayers,(i,a)=>this._handleSublayersChange(i,a),fe))}destroy(){this.allSublayers.destroy()}readSublayers(t,i){if(!i||!t)return;const{sublayersSourceJSON:a}=this,o=L(i.origin);if(o<u.SERVICE||(a[o]={context:i,visibleLayers:t.visibleLayers||a[o].visibleLayers,layers:t.layers||a[o].layers},o>u.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:p,origin:y}=this.createSublayersForOrigin("web-document"),d=P(this);d.setDefaultOrigin(y),this._set("sublayers",new N(p)),d.setDefaultOrigin("user")}findSublayerById(t){return this.allSublayers.find(i=>i.id===t)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(t){const i=L(t==="web-document"?"web-map":t);let a=u.SERVICE,o=this.sublayersSourceJSON[u.SERVICE].layers,p=this.sublayersSourceJSON[u.SERVICE].context,y=null;const d=[u.PORTAL_ITEM,u.WEB_SCENE,u.WEB_MAP].filter(f=>f<=i);for(const f of d){const h=this.sublayersSourceJSON[f];Ve(h.layers)&&(a=f,o=h.layers,p=h.context,h.visibleLayers&&(y={visibleLayers:h.visibleLayers,context:h.context}))}const c=[u.PORTAL_ITEM,u.WEB_SCENE,u.WEB_MAP].filter(f=>f>a&&f<=i);let b=null;for(const f of c){const{layers:h,visibleLayers:O,context:D}=this.sublayersSourceJSON[f];h&&(b={layers:h,context:D}),O&&(y={visibleLayers:O,context:D})}const I=Ce(o,p),x=new Map,T=new Set;if(b)for(const f of b.layers)x.set(f.id,f);if(y!=null&&y.visibleLayers)for(const f of y.visibleLayers)T.add(f);return X(I,f=>{b&&f.read(x.get(f.id),b.context),y&&f.read({defaultVisibility:T.has(f.id)},y.context)}),{origin:he(a),sublayers:new N({items:I})}}read(t,i){super.read(t,i),this.readSublayers(t,i)}_handleSublayersChange(t,i){i&&(i.forEach(a=>{a.parent=null,a.layer=null}),this.removeHandles("sublayers-owner")),t&&(t.forEach(a=>{a.parent=this,a.layer=this}),this.addHandles([t.on("after-add",({item:a})=>{a.parent=this,a.layer=this}),t.on("after-remove",({item:a})=>{a.parent=null,a.layer=null})],"sublayers-owner"),this.type==="tile"&&this.addHandles(t.on("before-changes",a=>{Me.error(new S("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),a.preventDefault()}),"sublayers-owner"))}};return s([n({readOnly:!0})],e.prototype,"allSublayers",void 0),s([n({readOnly:!0,type:U.ofType(B)})],e.prototype,"serviceSublayers",void 0),s([n({value:null,type:N,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],e.prototype,"sublayers",void 0),s([n({readOnly:!0})],e.prototype,"sublayersSourceJSON",void 0),e=s([k("esri.layers.mixins.SublayersOwner")],e),e};export{it as E,B as X,rt as f};
