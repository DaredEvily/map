import{m as u,V as f,n as w,e as c,k as h,P as a,v as y,f as _,j as V}from"./index-dfe4d42d.js";import{m as v,u as C}from"./LayerView-c684256d.js";import{i as m}from"./GraphicContainer-42132332.js";import{r as g}from"./GraphicsView2D-cdfcd37b.js";import"./scaleUtils-fb4f3919.js";import"./Container-17b68520.js";import"./definitions-5574f3b3.js";import"./enums-bdecffa2.js";import"./Texture-f95d4e25.js";import"./color-628a0e8f.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-823f9ac8.js";import"./FeatureContainer-5bb38090.js";import"./AttributeStoreView-45d33124.js";import"./TiledDisplayObject-fe67ecec.js";import"./diffUtils-bbf5ba7d.js";import"./labelingInfo-d5ce8c46.js";import"./LabelClass-ee8ff0ef.js";import"./labelUtils-a50f3602.js";import"./defaultsJSON-b087dd4d.js";import"./jsonUtils-f13e839b.js";import"./WGLContainer-63e30817.js";import"./FramebufferObject-11d118ad.js";import"./ProgramTemplate-b90e7b4c.js";import"./GeometryUtils-40616d63.js";import"./heatmapUtils-339dd66a.js";import"./vec4f64-3c9d0901.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-9c20e96e.js";import"./featureConversionUtils-17f64791.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-d034d8c8.js";import"./ExpandedCIM-4553bdd3.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-9a8de973.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-3746adc8.js";import"./floatRGBA-d8066688.js";import"./clusterUtils-bc690dd1.js";import"./MD5-715f37cd.js";import"./SizeVariable-aba63b8a.js";import"./colorRamps-c95c47a3.js";import"./LegendOptions-9dd9bdee.js";import"./util-7d7d5193.js";import"./TileContainer-6839f28c.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-5fb0fa6f.js";import"./projectionSupport-0821404a.js";import"./json-48e3ea08.js";import"./Matcher-5b864048.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-5db9284f.js";import"./LRUCache-c11c9d99.js";import"./ComputedAttributeStorage-7fd5c211.js";import"./FieldsIndex-c919e639.js";import"./UnknownTimeZone-03c79817.js";import"./TimeOnly-a22a1873.js";const d="sublayers",n="layerView";let l=class extends v(C){constructor(){super(...arguments),this._highlightIds=new Map}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const o=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&o.popupTemplate&&(r.popupTemplate=o.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),c(()=>this._removeHighlight(e))):c()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const o=new m(this.view.featuresTilingScheme),r=new g({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:o});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([h(()=>s.visible,p=>r.container.visible=p,a),h(()=>r.updating,()=>this.notifyChange("updating"),a)],n)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),d)}detach(){this._destroyGraphicsViews(),this.removeHandles(d)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const o=new m(this.view.featuresTilingScheme);o.fadeTransitionEnabled=!0;const r=new g({view:t,graphics:s.graphics,requestUpdateCallback:e,container:o});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),h(()=>s.visible,p=>r.container.visible=p,a),h(()=>r.updating,()=>this.notifyChange("updating"),a)],n),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=_([V("esri.views.2d.layers.MapNotesLayerView2D")],l);const Gi=l;export{Gi as default};