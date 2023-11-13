import{N as f,F as y,s as K,f as l,g as c,aS as w,aV as m,aG as I,gb as P,aR as U,j as L,el as V,fz as M,E as k,gc as q,gd as z,ge as C,I as R,aZ as F,b4 as N}from"./index-8edf265f.js";import{i as E}from"./originUtils-cfe4feaf.js";import{I as J,d as D}from"./commonProperties-43b199c9.js";import{i as A}from"./saveAPIKeyUtils-ab063b52.js";import{u as B,p as Z}from"./saveUtils-734d5b27.js";async function G(u,o,e,t,i,r){let a=null;if(e!=null){const h=`${u}/nodepages/`,n=h+Math.floor(e.rootIndex/e.nodesPerPage);try{return{type:"page",rootPage:(await f(n,{query:{f:"json",token:t},responseType:"json",signal:r})).data,rootIndex:e.rootIndex,pageSize:e.nodesPerPage,lodMetric:e.lodSelectionMetricType,urlPrefix:h}}catch(v){i!=null&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",n,v),a=v}}if(!o)return null;const s=o==null?void 0:o.split("/").pop(),p=`${u}/nodes/`,d=p+s;try{return{type:"node",rootNode:(await f(d,{query:{f:"json",token:t},responseType:"json",signal:r})).data,urlPrefix:p}}catch(h){throw new y("sceneservice:root-node-missing","Root node missing.",{pageError:a,nodeError:h,url:d})}}let H=null;function Q(){return H}const j="esri.layers.mixins.SceneService",x=K.getLogger(j),re=u=>{let o=class extends u{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=V(async(e,t,i)=>{switch(e){case S.SAVE:return this._save(t);case S.SAVE_AS:return this._saveAs(i,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(e.spatialReference!=null)return w.fromJSON(e.spatialReference);{const t=e.store,i=t.indexCRS||t.geographicCRS,r=i&&parseInt(i.substring(i.lastIndexOf("/")+1,i.length),10);return r!=null?new w(r):null}}readFullExtent(e,t,i){if(e!=null&&typeof e=="object"){const s=e.spatialReference==null?{...e,spatialReference:this._readSpatialReference(t)}:e;return I.fromJSON(s,i)}const r=t.store,a=this._readSpatialReference(t);return a==null||(r==null?void 0:r.extent)==null||!Array.isArray(r.extent)||r.extent.some(s=>s<b)?null:new I({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:a})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},i=e.split(".");return i.length>=2&&(t.major=parseInt(i[0],10),t.minor=parseInt(i[1],10)),t}readVersion(e,t){const i=t.store,r=i.version!=null?i.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(e){return this.sublayerTitleMode!=="item-title"?void 0:e}readTitleService(e,t){var a;const i=(a=this.portalItem)==null?void 0:a.title;if(this.sublayerTitleMode==="item-title")return M(this.url,t.name);let r=t.name;if(!r&&this.url){const s=k(this.url);s!=null&&(r=s.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&i&&(r=i+" - "+r),q(r)}set url(e){const t=z({layer:this,url:e,nonStandardUrlAllowed:!1,logger:x});this._set("url",t.url),t.layerId!=null&&this._set("layerId",t.layerId)}writeUrl(e,t,i,r){C(this,e,"layers",t,r)}get parsedUrl(){const e=this._get("url"),t=R(e);return this.layerId!=null&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=G(this.parsedUrl.path,this.rootNode,e,this.apiKey,x,t),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){var t,i,r,a;if((e==null?void 0:e.type)==="page"){const s=e.rootIndex%e.pageSize,p=(i=(t=e.rootPage)==null?void 0:t.nodes)==null?void 0:i[s];if(((r=p==null?void 0:p.obb)==null?void 0:r.center)==null||p.obb.halfSize==null)throw new y("sceneservice:invalid-node-page","Invalid node page.");if(p.obb.center[0]<b||this.fullExtent==null||this.fullExtent.hasZ)return;const d=p.obb.halfSize,h=p.obb.center[2],n=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);this.fullExtent.zmin=h-n,this.fullExtent.zmax=h+n}else if((e==null?void 0:e.type)==="node"){const s=(a=e.rootNode)==null?void 0:a.mbs;if(!Array.isArray(s)||s.length!==4||s[0]<b)return;const p=s[2],d=s[3],{fullExtent:h}=this;h&&(h.zmin=p-d,h.zmax=p+d)}}async _fetchService(e){if(this.url==null)throw new y("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);t!=null&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await f(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){var a;const t=await f(((a=this.parsedUrl)==null?void 0:a.path)??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(t.data.layerType&&t.data.layerType==="Voxel"&&(i=!0),i)return this._fetchVoxelServiceLayer();const r=t.data;this.read(r,this._getServiceContext()),this.validateLayer(r)}async _fetchVoxelServiceLayer(e){var i;const t=(await f(((i=this.parsedUrl)==null?void 0:i.path)+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){var e;return{origin:"service",portalItem:this.portalItem,portal:(e=this.portalItem)==null?void 0:e.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,i){e.typeKeywords||(e.typeKeywords=[]);const r=t.getTypeKeywords();for(const a of r)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((a,s,p)=>p.indexOf(a)===s),i===g.newItem&&(e.typeKeywords=e.typeKeywords.filter(a=>a!=="Hosted Service")))}async _saveAs(e,t){var d;const i={...T,...t};let r=F.from(e);if(!r)throw new y("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");A(r),r.id&&(r=r.clone(),r.id=null);const a=r.portal||N.getDefault();await this._ensureLoadBeforeSave(),r.type=_,r.portal=a;const s={origin:"portal-item",url:null,messages:[],portal:a,portalItem:r,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},p={layers:[this.write({},s)]};return await Promise.all(s.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(p,s,i),r.url=this.url,r.title||(r.title=this.title),this._updateTypeKeywords(r,i,g.newItem),await a.signIn(),await((d=a.user)==null?void 0:d.addItem({item:r,folder:i==null?void 0:i.folder,data:p})),await B(this.resourceReferences,s,null),this.portalItem=r,E(s),s.portalItem=r,r}async _save(e){const t={...T,...e};if(!this.portalItem)throw new y("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(A(this.portalItem),this.portalItem.type!==_)throw new y("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${_}"`);await this._ensureLoadBeforeSave();const i={origin:"portal-item",url:this.portalItem.itemUrl&&R(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||N.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},r={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(r,i,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,g.existingItem),await Z(this.portalItem,r,this.resourceReferences,i,null),E(i),this.portalItem}async _validateAgainstJSONSchema(e,t,i){var d,h;let r=((d=t.messages)==null?void 0:d.filter(n=>n.type==="error").map(n=>new y(n.name,n.message,n.details)))??[];(h=i==null?void 0:i.validationOptions)!=null&&h.ignoreUnsupported&&(r=r.filter(n=>n.name!=="layer:unsupported"&&n.name!=="symbol:unsupported"&&n.name!=="symbol-layer:unsupported"&&n.name!=="property:unsupported"&&n.name!=="url:unsupported"&&n.name!=="scenemodification:unsupported"));const a=i==null?void 0:i.validationOptions,s=a==null?void 0:a.enabled,p=Q();if(s&&p){const n=(await p()).validate(e,i.portalItemLayerType);if(n.length>0){const v=`Layer item did not validate:
${n.join(`
`)}`;if(x.error(`_validateAgainstJSONSchema(): ${v}`),a.failPolicy==="throw"){const O=n.map($=>new y("sceneservice:schema-validation",$)).concat(r);throw new y("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:O})}}}if(r.length>0)throw new y("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}};return l([c(J)],o.prototype,"id",void 0),l([c({type:w})],o.prototype,"spatialReference",void 0),l([m("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],o.prototype,"readSpatialReference",null),l([c({type:I})],o.prototype,"fullExtent",void 0),l([m("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],o.prototype,"readFullExtent",null),l([c({readOnly:!0,type:P})],o.prototype,"heightModelInfo",void 0),l([c({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],o.prototype,"minScale",void 0),l([c({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],o.prototype,"maxScale",void 0),l([c({readOnly:!0})],o.prototype,"version",void 0),l([m("version",["store.version"])],o.prototype,"readVersion",null),l([c({type:String,json:{read:{source:"copyrightText"}}})],o.prototype,"copyright",void 0),l([c({type:String,json:{read:!1}})],o.prototype,"sublayerTitleMode",void 0),l([c({type:String})],o.prototype,"title",void 0),l([m("portal-item","title")],o.prototype,"readTitlePortalItem",null),l([m("service","title",["name"])],o.prototype,"readTitleService",null),l([c({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],o.prototype,"layerId",void 0),l([c(D)],o.prototype,"url",null),l([U("url")],o.prototype,"writeUrl",null),l([c()],o.prototype,"parsedUrl",null),l([c({readOnly:!0})],o.prototype,"store",void 0),l([c({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],o.prototype,"rootNode",void 0),o=l([L(j)],o),o},b=-1e38;var g;(function(u){u[u.existingItem=0]="existingItem",u[u.newItem=1]="newItem"})(g||(g={}));const _="Scene Service",T={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var S;(function(u){u[u.SAVE=0]="SAVE",u[u.SAVE_AS=1]="SAVE_AS"})(S||(S={}));export{re as E,S as P,G as r};
