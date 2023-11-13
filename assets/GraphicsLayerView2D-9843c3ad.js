import{u as o,m as a,V as m,n as g,e as s,f as p,g as c,j as l}from"./index-8edf265f.js";import{m as n,u as d}from"./LayerView-afeaadc7.js";import{i as u}from"./GraphicContainer-ed4da031.js";import{r as w}from"./GraphicsView2D-9be86d91.js";import"./scaleUtils-9954959a.js";import"./Container-f2d36f2f.js";import"./definitions-d28bab5c.js";import"./enums-bdecffa2.js";import"./Texture-f675116c.js";import"./color-430dd9e0.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-ea792e77.js";import"./FeatureContainer-ac3e4d66.js";import"./AttributeStoreView-302aad8c.js";import"./TiledDisplayObject-d74621e4.js";import"./diffUtils-9dbdd340.js";import"./labelingInfo-8214bb11.js";import"./LabelClass-67c7130a.js";import"./labelUtils-39618ac3.js";import"./defaultsJSON-b087dd4d.js";import"./jsonUtils-805d1979.js";import"./WGLContainer-35b97840.js";import"./FramebufferObject-d5b7affd.js";import"./ProgramTemplate-ade57408.js";import"./GeometryUtils-f6e6151e.js";import"./heatmapUtils-485005f9.js";import"./vec4f64-3c9d0901.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-fb2d01fb.js";import"./featureConversionUtils-bfaae0f6.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-73d1d4d8.js";import"./ExpandedCIM-cc180b11.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-55c191c7.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-4acc4a23.js";import"./floatRGBA-adf8f6af.js";import"./clusterUtils-6b9076e5.js";import"./MD5-715f37cd.js";import"./SizeVariable-0dc1bc42.js";import"./colorRamps-763955b0.js";import"./LegendOptions-48c2523d.js";import"./util-a284bd77.js";import"./TileContainer-d3fa1aca.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-62ac54ad.js";import"./projectionSupport-131d63cd.js";import"./json-48e3ea08.js";import"./Matcher-1fcb2229.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-8e67d24e.js";import"./LRUCache-c7a923e7.js";import"./ComputedAttributeStorage-a7df6cd1.js";import"./FieldsIndex-3d8128c0.js";import"./UnknownTimeZone-d5028e24.js";import"./TimeOnly-f35243a6.js";let e=class extends n(d){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new w({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new u(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):m.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t==null?void 0:t.filter(g);return r!=null&&r.length?(this._addHighlight(r),s(()=>this._removeHighlight(r))):s()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};p([c()],e.prototype,"graphicsView",void 0),e=p([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const Ai=e;export{Ai as default};
