import{dl as _,dm as S,a$ as T,aS as v,I as b,N as u,dT as w,dI as $,F as h,E as O,bb as R,cU as U,dU as W,f as o,g as a,aV as j,aR as I,dV as P,j as L,dt as N}from"./index-17f5801a.js";import{m as A}from"./MultiOriginJSONSupport-16b6f8f9.js";import{i as B}from"./APIKeyMixin-a61b993e.js";import{p as M}from"./ArcGISCachedService-5622882f.js";import{E as C,f as k,X as D}from"./SublayersOwner-8977da3a.js";import{l as J}from"./ArcGISService-6cabde08.js";import{o as V}from"./CustomParametersMixin-ddc1f0c2.js";import{u as q}from"./OperationalLayer-ddd9a49f.js";import{j as E}from"./PortalLayer-40b330d4.js";import{f as G}from"./RefreshableLayer-d08eadb3.js";import{d as x}from"./commonProperties-b03c3d94.js";import{o as y}from"./imageBitmapUtils-28ac4052.js";import"./TileInfoTilemapCache-093efcd6.js";import"./TilemapCache-5389e9d5.js";import"./ByteSizeUnit-d4757d40.js";import"./LRUCache-65a1a7c7.js";import"./DictionaryLoader-8ab98d36.js";import"./FieldsIndex-b50dd53d.js";import"./UnknownTimeZone-29b2edce.js";import"./portalItemUtils-a4142bff.js";import"./UniqueValueRenderer-97820cbb.js";import"./LegendOptions-2334a895.js";import"./diffUtils-6c9afbf1.js";import"./SizeVariable-b848ae53.js";import"./colorRamps-89517de6.js";import"./ColorStop-efe07ef9.js";import"./jsonUtils-0dadc667.js";import"./styleUtils-d2b98714.js";import"./jsonUtils-8a80628b.js";import"./heatmapUtils-eb599eda.js";import"./vec4f64-3c9d0901.js";import"./QueryTask-e84e8721.js";import"./Query-4ba80df1.js";import"./Field-d94e0e84.js";import"./fieldType-59772d91.js";import"./executeForIds-77ac94de.js";import"./query-218a1fa9.js";import"./pbfQueryUtils-4350389c.js";import"./pbf-f8d4e157.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-c2a04c0c.js";import"./executeQueryJSON-dc717ebc.js";import"./FeatureSet-4e0171b9.js";import"./executeQueryPBF-c12ab9f0.js";import"./featureConversionUtils-3ca44a73.js";import"./FeatureType-66d34250.js";import"./FeatureTemplate-d1aaa665.js";import"./LabelClass-3d0bd3e4.js";import"./labelUtils-7504045c.js";import"./defaultsJSON-b087dd4d.js";import"./labelingInfo-23d6e286.js";import"./LayerFloorInfo-da60df01.js";import"./serviceCapabilitiesUtils-2cb01da5.js";import"./AttachmentQuery-30dad528.js";import"./popupUtils-2f71c23c.js";import"./sublayerUtils-86c48519.js";var d;const f=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let i=d=class extends _(S(C(M(k(q(E(J(A(G(B(V(N)))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(T).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){var r;const e=(r=this.parsedUrl)==null?void 0:r.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){var t;return(e=e||((t=r.tileInfo)==null?void 0:t.spatialReference))&&v.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray(),n=[],c={writeSublayerStructure:!1,...s};p.forEach(l=>{const m=l.write({},c);n.push(m)}),n.some(l=>Object.keys(l).length>1)&&(r.layers=n)}get tileServers(){var e;return this._getDefaultTileServers((e=this.parsedUrl)==null?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>b(r).path):null}fetchTile(e,r,t,s={}){const{signal:p}=s,n=this.getTileUrl(e,r,t),c={responseType:"image",signal:p,query:{...this.refreshParameters}};return u(n,c).then(l=>l.data)}async fetchImageBitmapTile(e,r,t,s={}){const{signal:p}=s;if(this.fetchTile!==d.prototype.fetchTile){const m=await this.fetchTile(e,r,t,s);return y(m,e,r,t,p)}const n=this.getTileUrl(e,r,t),c={responseType:"blob",signal:p,query:{...this.refreshParameters}},{data:l}=await u(n,c);return y(l,e,r,t,p)}getTileUrl(e,r,t){var c,l;const s=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,p=w({...(c=this.parsedUrl)==null?void 0:c.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),n=this.tileServers;return`${n&&n.length?n[r%n.length]:(l=this.parsedUrl)==null?void 0:l.path}/tile/${e}/${r}/${t}${p?"?"+p:""}`}loadAll(){return $(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new h("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new h("tile-layer:undefined-url","layer's url is not defined");const s=O(this.parsedUrl.path);if(s!=null&&s.serverType==="ImageServer")throw new h("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");u(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)}).then(r=>{let t=this.url;if(r.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!R(t))return this._fetchServerVersion(t,e).then(s=>{this.read({currentVersion:s})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!U(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return u(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(s=>{if(s.data&&s.data.currentVersion)return s.data.currentVersion;throw new h("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(e==null)return null;let r;e=e.toLowerCase();for(let t=0,s=f.length;t<s;t++)if(r=f[t],r.toLowerCase().includes(e))return W("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(e==null)return[];const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[g]}};o([a({readOnly:!0})],i.prototype,"attributionDataUrl",null),o([a({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),o([a({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0),o([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),o([a({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),o([a({type:Boolean})],i.prototype,"resampling",void 0),o([a()],i.prototype,"sourceJSON",void 0),o([a({type:v})],i.prototype,"spatialReference",void 0),o([j("spatialReference",["spatialReference","tileInfo"])],i.prototype,"readSpatialReference",null),o([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),o([a({readOnly:!0})],i.prototype,"sublayers",void 0),o([I("sublayers",{layers:{type:[D]}})],i.prototype,"writeSublayers",null),o([a({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),o([a()],i.prototype,"tileServers",null),o([P("tileServers")],i.prototype,"castTileServers",null),o([a({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),o([a(x)],i.prototype,"url",void 0),i=d=o([L("esri.layers.TileLayer")],i);const g=Symbol("default-fetch-tile");i.prototype.fetchTile[g]=!0;const He=i;export{He as default};