import{f as i,g as n,j as y,k as d,F as u,e9 as h,e as _}from"./index-8edf265f.js";import{d as f}from"./FeatureSet-4ba9f962.js";import S from"./FeatureLayerView2D-9fa32786.js";import{e as g}from"./util-a284bd77.js";import{d as v}from"./FeatureEffect-8a44b622.js";import"./Field-ebbe1dfc.js";import"./fieldType-088ee331.js";import"./Container-f2d36f2f.js";import"./definitions-d28bab5c.js";import"./enums-bdecffa2.js";import"./Texture-f675116c.js";import"./Query-474f3baf.js";import"./LayerView-afeaadc7.js";import"./scaleUtils-9954959a.js";import"./AttributeStoreView-302aad8c.js";import"./TiledDisplayObject-d74621e4.js";import"./diffUtils-9dbdd340.js";import"./labelingInfo-8214bb11.js";import"./LabelClass-67c7130a.js";import"./labelUtils-39618ac3.js";import"./defaultsJSON-b087dd4d.js";import"./jsonUtils-805d1979.js";import"./color-430dd9e0.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLContainer-35b97840.js";import"./FramebufferObject-d5b7affd.js";import"./ProgramTemplate-ade57408.js";import"./GeometryUtils-f6e6151e.js";import"./heatmapUtils-485005f9.js";import"./vec4f64-3c9d0901.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-fb2d01fb.js";import"./featureConversionUtils-bfaae0f6.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-73d1d4d8.js";import"./ExpandedCIM-cc180b11.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-55c191c7.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-4acc4a23.js";import"./floatRGBA-adf8f6af.js";import"./clusterUtils-6b9076e5.js";import"./MD5-715f37cd.js";import"./SizeVariable-0dc1bc42.js";import"./colorRamps-763955b0.js";import"./LegendOptions-48c2523d.js";import"./BitmapTileContainer-ec88b95a.js";import"./Bitmap-a468b1d0.js";import"./TileContainer-d3fa1aca.js";import"./CircularArray-ef508845.js";import"./BufferPool-befa182b.js";import"./FeatureContainer-ac3e4d66.js";import"./commonProperties-43b199c9.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-158a08e7.js";import"./RefreshableLayerView-e734be59.js";const O=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return i([n()],t.prototype,"_isUserPaused",void 0),i([n({readOnly:!0})],t.prototype,"connectionStatus",null),i([n({type:v})],t.prototype,"filter",void 0),t=i([y("esri.layers.mixins.StreamLayerView")],t),t};function c(e,t){if(e==null&&t==null)return null;const r={};return t!=null&&(r.geometry=t.toJSON()),e!=null&&(r.where=e),r}let o=class extends O(S){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null,this._enabledEventTypes=new Set}initialize(){this.addHandles([d(()=>this.layer.customParameters,e=>this._proxy.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._proxy.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>this._proxy.sendMessageToClient(e)),d(()=>this.layer.purgeOptions,()=>this._update()),d(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor")}get connectionError(){return this.pipelineErrorString?new u("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return h(e.map(p=>this.on(p,t)));const r=["data-received","message-received"].includes(e);r&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const a=super.on(e,t),s=this;return _(()=>{a.remove(),r&&(s._proxy.closed||s.hasEventListener(e)||s._proxy.enableEvent(e,!1))})}queryLatestObservations(e,t){var r,a,s;if(!((r=this.layer.timeInfo)!=null&&r.endField||(a=this.layer.timeInfo)!=null&&a.startField||(s=this.layer.timeInfo)!=null&&s.trackIdField))throw new u("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(p=>{const m=f.fromJSON(p);return m.features.forEach(l=>{l.layer=this.layer,l.sourceLayer=this.layer}),m})}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){var e;(e=this._proxy)==null||e.pauseStream()}_doResume(){var e;(e=this._proxy)==null||e.resumeStream()}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(c(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){var m;const e=this.layer,{objectIdField:t}=e,r=e.fields.map(l=>l.toJSON()),a=g(e.geometryType),s=((m=e.timeInfo)==null?void 0:m.toJSON())||null,p=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",isPaused:this._isUserPaused,fields:r,fieldsIndex:this.layer.fieldsIndex.toJSON(),geometryType:a,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:c(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:p,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};i([n()],o.prototype,"pipelineConnectionStatus",void 0),i([n()],o.prototype,"pipelineErrorString",void 0),i([n({readOnly:!0})],o.prototype,"connectionError",null),i([n({readOnly:!0})],o.prototype,"_streamConnectionStatus",null),o=i([y("esri.views.2d.layers.StreamLayerView2D")],o);const Re=o;export{Re as default};