import{b9 as g,aB as d,f as t,g as r,j as f,aP as b,dQ as T,m as n,u as c,k as h,P as y}from"./index-dfe4d42d.js";import{m as _,u as v}from"./LayerView-c684256d.js";import{i as O}from"./GraphicContainer-42132332.js";import{r as C}from"./GraphicsView2D-cdfcd37b.js";import"./scaleUtils-fb4f3919.js";import"./Container-17b68520.js";import"./definitions-5574f3b3.js";import"./enums-bdecffa2.js";import"./Texture-f95d4e25.js";import"./color-628a0e8f.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-823f9ac8.js";import"./FeatureContainer-5bb38090.js";import"./AttributeStoreView-45d33124.js";import"./TiledDisplayObject-fe67ecec.js";import"./diffUtils-bbf5ba7d.js";import"./labelingInfo-d5ce8c46.js";import"./LabelClass-ee8ff0ef.js";import"./labelUtils-a50f3602.js";import"./defaultsJSON-b087dd4d.js";import"./jsonUtils-f13e839b.js";import"./WGLContainer-63e30817.js";import"./FramebufferObject-11d118ad.js";import"./ProgramTemplate-b90e7b4c.js";import"./GeometryUtils-40616d63.js";import"./heatmapUtils-339dd66a.js";import"./vec4f64-3c9d0901.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-9c20e96e.js";import"./featureConversionUtils-17f64791.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-d034d8c8.js";import"./ExpandedCIM-4553bdd3.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-9a8de973.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-3746adc8.js";import"./floatRGBA-d8066688.js";import"./clusterUtils-bc690dd1.js";import"./MD5-715f37cd.js";import"./SizeVariable-aba63b8a.js";import"./colorRamps-c95c47a3.js";import"./LegendOptions-9dd9bdee.js";import"./util-7d7d5193.js";import"./TileContainer-6839f28c.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-5fb0fa6f.js";import"./projectionSupport-0821404a.js";import"./json-48e3ea08.js";import"./Matcher-5b864048.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-5db9284f.js";import"./LRUCache-c11c9d99.js";import"./ComputedAttributeStorage-7fd5c211.js";import"./FieldsIndex-c919e639.js";import"./UnknownTimeZone-03c79817.js";import"./TimeOnly-a22a1873.js";let a=class extends g(d){constructor(e){super(e),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null}};t([r({type:Boolean})],a.prototype,"frameCenter",void 0),t([r({type:Boolean})],a.prototype,"frameOutline",void 0),t([r({type:Boolean})],a.prototype,"lineOfSight",void 0),t([r({type:Boolean})],a.prototype,"sensorLocation",void 0),t([r({type:Boolean})],a.prototype,"sensorTrail",void 0),a=t([f("esri.layers.support.TelemetryDisplay")],a);const u=a,p=new b([255,127,0]);let m=class extends _(v){constructor(){super(...arguments),this._graphicsLayer=new T,this._frameOutlineGraphic=new n({symbol:{type:"simple-fill",outline:{type:"simple-line",color:p}}}),this._sensorTrailGraphic=new n({symbol:{type:"simple-line",color:p}}),this._lineOfSightGraphic=new n({symbol:{type:"simple-line",color:p}}),this._sensorLocationGraphic=new n({symbol:{type:"simple-marker",color:p}}),this._frameCenterGraphic=new n({symbol:{type:"simple-marker",color:p}}),this.layer=null,this.symbolColor=p,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=c(this._graphicsLayer)}initialize(){var e,i,s,l,o;this.addHandles(h(()=>this.symbolColor,()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor},y)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new u({frameCenter:((e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter)??!0,frameOutline:((i=this.layer.telemetryDisplay)==null?void 0:i.frameOutline)??!0,lineOfSight:((s=this.layer.telemetryDisplay)==null?void 0:s.lineOfSight)??!0,sensorLocation:((l=this.layer.telemetryDisplay)==null?void 0:l.sensorLocation)??!0,sensorTrail:((o=this.layer.telemetryDisplay)==null?void 0:o.sensorTrail)??!0})}attach(){this.graphicsView=new C({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new O(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([h(()=>{var e,i,s,l,o;return[(e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter,(i=this.layer.telemetryDisplay)==null?void 0:i.frameOutline,(s=this.layer.telemetryDisplay)==null?void 0:s.sensorLocation,(l=this.layer.telemetryDisplay)==null?void 0:l.sensorTrail,(o=this.layer.telemetryDisplay)==null?void 0:o.lineOfSight]},()=>this._updateVisibleTelemetryElements(),y),h(()=>{var e,i,s,l,o;return[this.layer.telemetry,(e=this.visibleTelemetryElements)==null?void 0:e.frameCenter,(i=this.visibleTelemetryElements)==null?void 0:i.frameOutline,(s=this.visibleTelemetryElements)==null?void 0:s.sensorLocation,(l=this.visibleTelemetryElements)==null?void 0:l.sensorTrail,(o=this.visibleTelemetryElements)==null?void 0:o.lineOfSight]},()=>this._updateGraphicGeometries(),y)])}detach(){this.container.removeAllChildren(),this.graphicsView=c(this.graphicsView)}supportsSpatialReference(e){return!0}moveStart(){}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(e){this.graphicsView.processUpdate(e)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:i}=this;e&&i&&(i.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,i.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,i.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,i.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,i.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}};t([r()],m.prototype,"graphicsView",void 0),t([r()],m.prototype,"layer",void 0),t([r()],m.prototype,"symbolColor",void 0),t([r({type:u})],m.prototype,"visibleTelemetryElements",void 0),m=t([f("esri.views.2d.layers.VideoLayerView2D")],m);const $e=m;export{$e as default};