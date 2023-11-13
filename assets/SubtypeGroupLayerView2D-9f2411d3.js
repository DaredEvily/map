import{f as l,j as d,k as u,P as y,x as h}from"./index-17f5801a.js";import{d as c}from"./FeatureEffect-7bb7c8e1.js";import b from"./FeatureLayerView2D-8008f666.js";import"./Query-4ba80df1.js";import"./Field-d94e0e84.js";import"./fieldType-59772d91.js";import"./Container-7d5626df.js";import"./definitions-4b4d3bb7.js";import"./enums-bdecffa2.js";import"./Texture-a719e912.js";import"./FeatureSet-4e0171b9.js";import"./LayerView-ec2c2565.js";import"./scaleUtils-f904dc53.js";import"./AttributeStoreView-98b68c3a.js";import"./TiledDisplayObject-a64f6237.js";import"./diffUtils-6c9afbf1.js";import"./labelingInfo-23d6e286.js";import"./LabelClass-3d0bd3e4.js";import"./labelUtils-7504045c.js";import"./defaultsJSON-b087dd4d.js";import"./jsonUtils-0dadc667.js";import"./color-a0e5bbb3.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLContainer-cfa928c9.js";import"./FramebufferObject-ec3a2f1c.js";import"./ProgramTemplate-6030136e.js";import"./GeometryUtils-656a25af.js";import"./heatmapUtils-eb599eda.js";import"./vec4f64-3c9d0901.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-ac984003.js";import"./featureConversionUtils-3ca44a73.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-54d3173d.js";import"./ExpandedCIM-649a170a.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-fbfb0ca5.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-e1d75a2b.js";import"./floatRGBA-682b09fa.js";import"./clusterUtils-14e668da.js";import"./MD5-715f37cd.js";import"./SizeVariable-b848ae53.js";import"./colorRamps-89517de6.js";import"./LegendOptions-2334a895.js";import"./util-729b06cc.js";import"./BitmapTileContainer-ff71e8f2.js";import"./Bitmap-6641ced8.js";import"./TileContainer-8d4f6d4a.js";import"./CircularArray-ef508845.js";import"./BufferPool-21fc9212.js";import"./FeatureContainer-d7b2a42e.js";import"./commonProperties-b03c3d94.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-bca90695.js";import"./RefreshableLayerView-0fb2f2d6.js";function g(e,i){return!e.visible||e.minScale!==0&&i>e.minScale||e.maxScale!==0&&i<e.maxScale}let p=class extends b{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var m;const e=this.layer.sublayers.some(a=>a.renderer!=null),i=this._commandsQueue.updating,o=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,s=this.tileRenderer==null||((m=this.tileRenderer)==null?void 0:m.updating),n=e&&(i||o||t||r||s);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${n}
  -> hasRenderer ${e}
  -> hasPendingCommand ${i}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${s}
`),n}_injectOverrides(e){let i=super._injectOverrides(e);const o=this.view.scale,t=this.layer.sublayers.filter(s=>g(s,o)).map(s=>s.subtypeCode);if(!t.length)return i;i=i??new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return i.where=i.where?`(${i.where}) AND (${r})`:r,i}_setLayersForFeature(e){const i=this.layer.fieldsIndex.get(this.layer.subtypeField),o=e.attributes[i.name],t=this.layer.sublayers.find(r=>r.subtypeCode===o);e.layer=e.sourceLayer=t}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},i=this.layer.sublayers.map(r=>r.subtypeCode).join(","),o=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${i})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=o,{...super._createSchemaConfig(),...e,definitionExpression:t}}};p=l([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],p);const Ci=p;export{Ci as default};