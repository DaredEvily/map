import{f as i,g as a,aD as _,aR as I,j as u,aB as b,bv as x,bc as L,gf as N,ac as j,dj as R,V as M,I as V,N as A,dm as D,v as E,bV as J,a$ as $,F as c,s as S,aV as P,e5 as U,dt as K}from"./index-8edf265f.js";import{m as z}from"./MultiOriginJSONSupport-2c2935ac.js";import{j as f}from"./persistable-3b776331.js";import{i as C}from"./APIKeyMixin-828ee2ca.js";import{l as F}from"./ArcGISService-16130ddc.js";import{u as G}from"./OperationalLayer-1bd8068d.js";import{j as k}from"./PortalLayer-394f0be4.js";import{E as q,P as w}from"./SceneService-3a8ef716.js";import{f as B}from"./commonProperties-43b199c9.js";import{s as H,l as Q,u as W,m as X}from"./I3SLayerDefinitions-0e0d07cc.js";import{x as T,p as Y,E as Z}from"./elevationInfoUtils-7db944f5.js";import"./MD5-715f37cd.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-fcbf8f28.js";import"./portalItemUtils-1acb3c0b.js";import"./originUtils-cfe4feaf.js";import"./saveAPIKeyUtils-ab063b52.js";import"./saveUtils-734d5b27.js";import"./resourceUtils-b3854bba.js";var h;let n=h=class extends b{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){var l;if((l=r.layer)!=null&&l.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!x(e.spatialReference,r.layer.spatialReference))return void((r==null?void 0:r.messages)&&r.messages.push(new L("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const y=new _;N(e,y,r.layer.spatialReference),t[o]=y.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new h({geometry:j(this.geometry),type:this.type})}};i([a({type:_}),f()],n.prototype,"geometry",void 0),i([I(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),i([a({type:["clip","mask","replace"],nonNullable:!0}),f()],n.prototype,"type",void 0),n=h=i([u("esri.layers.support.SceneModification")],n);const m=n;var p;let d=p=class extends R(M.ofType(m)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const o=new p;for(const r of e)o.add(m.fromJSON(r,t));return o}static async fromUrl(e,t,o){const r={url:V(e),origin:"service"},l=await A(e,{responseType:"json",signal:o==null?void 0:o.signal}),y=t.toJSON(),g=[];for(const v of l.data)g.push(m.fromJSON({...v,geometry:{...v.geometry,spatialReference:y}},r));return new p({url:e,items:g})}};i([a({type:String})],d.prototype,"url",void 0),d=p=i([u("esri.layers.support.SceneModifications")],d);const O=d;let s=class extends q(F(G(k(D(z(C(K))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles(E(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,U))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:J(e,o),context:o}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e==null?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){$(o)}if(await this._fetchService(t),this._modificationsSource!=null){const o=await O.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",o,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(w.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(w.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new c("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new c("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new c("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";T(S.getLogger(this),Y(t,"absolute-height",e)),T(S.getLogger(this),Z(t,e))}};i([a({type:String,readOnly:!0})],s.prototype,"geometryType",void 0),i([a({type:["show","hide"]})],s.prototype,"listMode",void 0),i([a({type:["IntegratedMeshLayer"]})],s.prototype,"operationalLayerType",void 0),i([a({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),i([a({type:H,readOnly:!0})],s.prototype,"nodePages",void 0),i([a({type:[Q],readOnly:!0})],s.prototype,"materialDefinitions",void 0),i([a({type:[W],readOnly:!0})],s.prototype,"textureSetDefinitions",void 0),i([a({type:[X],readOnly:!0})],s.prototype,"geometryDefinitions",void 0),i([a({readOnly:!0})],s.prototype,"serviceUpdateTimeStamp",void 0),i([a({type:O}),f({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],s.prototype,"modifications",void 0),i([P(["web-scene","portal-item"],"modifications")],s.prototype,"readModifications",null),i([a(B)],s.prototype,"elevationInfo",null),i([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),s=i([u("esri.layers.IntegratedMeshLayer")],s);const Se=s;export{Se as default};
