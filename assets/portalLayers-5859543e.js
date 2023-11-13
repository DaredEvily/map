import{aZ as L,F as I,J as y}from"./index-8edf265f.js";import{l as w}from"./associatedFeatureServiceUtils-87fe13f5.js";import{t as v,a as b}from"./lazyLayerLoader-dc888de8.js";import{s as f}from"./portalItemUtils-1acb3c0b.js";class M{constructor(){this._serviceMetadatas=new Map}async fetchServiceMetadata(a,t){const r=this._serviceMetadatas.get(a);if(r)return r;const n=await v(a,t);return this._serviceMetadatas.set(a,n),n}}function u(e){const a={id:e.id,name:e.name};return e.type==="Oriented Imagery Layer"&&(a.layerType="OrientedImageryLayer"),a}async function g(e,a,t){var r,n;if((e==null?void 0:e.layers)==null||(e==null?void 0:e.tables)==null){const s=await t.fetchServiceMetadata(a);(e=e||{}).layers=e.layers||((r=s==null?void 0:s.layers)==null?void 0:r.map(u)),e.tables=e.tables||((n=s==null?void 0:s.tables)==null?void 0:n.map(u))}return e}function T(e){const a=e.layers;if(a!=null&&a.length)return a[0].id;const t=e.tables;return t!=null&&t.length?t[0].id:null}function p(e){var a,t;return(((a=e==null?void 0:e.layers)==null?void 0:a.length)??0)+(((t=e==null?void 0:e.tables)==null?void 0:t.length)??0)}function G(e){var t;const a=[];return(t=e==null?void 0:e.layers)==null||t.forEach(r=>{r.layerType==="SubtypeGroupLayer"&&a.push(r.id)}),a}function $(e){var a;return(a=e==null?void 0:e.layers)==null?void 0:a.filter(({layerType:t})=>t==="OrientedImageryLayer").map(({id:t})=>t)}async function F(e,a,t){var s,i;if(!(e!=null&&e.url))return a??{};if(a??(a={}),!a.layers){const c=await t.fetchServiceMetadata(e.url);a.layers=(s=c.layers)==null?void 0:s.map(u)}const{serverUrl:r,portalItem:n}=await w(e.url,{sceneLayerItem:e}).catch(()=>({serverUrl:null,portalItem:null}));if(r==null)return a.tables=[],a;if(!a.tables&&n){const c=await n.fetchData();if(c!=null&&c.tables)a.tables=c.tables.map(u);else{const l=await t.fetchServiceMetadata(r);a.tables=(i=l==null?void 0:l.tables)==null?void 0:i.map(u)}}if(a.tables)for(const c of a.tables)c.url=`${r}/${c.id}`;return a}async function C(e){!e.portalItem||e.portalItem instanceof L||(e={...e,portalItem:new L(e.portalItem)});const a=await O(e.portalItem);return new a.constructor({portalItem:e.portalItem,...a.properties})}async function O(e){await e.load();const a=new M;return j(await S(e,a))}async function S(e,a){switch(e.type){case"Map Service":return V(e,a);case"Feature Service":return W(e,a);case"Feature Collection":return K(e);case"Scene Service":return _(e,a);case"Image Service":return U(e,a);case"Stream Service":return k();case"Vector Tile Service":return D();case"GeoJson":return x();case"CSV":return J();case"KML":return A();case"WFS":return E();case"WMTS":return R();case"WMS":return P();case"Feed":return z();case"Group Layer":return Z();default:throw new I("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function j(e){const a=e.className,t=b[a];return{constructor:await t(),properties:e.properties}}async function V(e,a){return await q(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function W(e,a){const t=await N(e,a);if(typeof t=="object"){const r={};return t.id!=null&&(r.layerId=t.id),{className:t.className||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}async function _(e,a){var r;const t=await N(e,a,async()=>{try{if(!e.url)return[];const{serverUrl:n}=await w(e.url,{sceneLayerItem:e}),s=await a.fetchServiceMetadata(n);return(s==null?void 0:s.tables)??[]}catch{return[]}});if(typeof t=="object"){const n={};let s;if(t.id!=null?(n.layerId=t.id,s=`${e.url}/layers/${t.id}`):s=e.url,(r=e.typeKeywords)==null?void 0:r.length){for(const c of Object.keys(y))if(e.typeKeywords.includes(c))return{className:y[c]}}const i=await a.fetchServiceMetadata(s);return{className:y[i==null?void 0:i.layerType]||"SceneLayer",properties:n}}if(t===!1){const n=await a.fetchServiceMetadata(e.url);if((n==null?void 0:n.layerType)==="Voxel")return{className:"VoxelLayer"}}return{className:"GroupLayer"}}async function K(e){await e.load();const a=f(e,"Map Notes"),t=f(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if(f(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return p(r)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function U(e,a){var l,o,d;await e.load();const t=((l=e.typeKeywords)==null?void 0:l.map(h=>h.toLowerCase()))??[];if(t.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(t.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await e.fetchData(),n=r==null?void 0:r.layerType;if(n==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(n==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const s=await a.fetchServiceMetadata(e.url),i=(o=s.cacheType)==null?void 0:o.toLowerCase(),c=(d=s.capabilities)==null?void 0:d.toLowerCase().includes("tilesonly");return i==="map"||c?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function k(){return{className:"StreamLayer"}}function D(){return{className:"VectorTileLayer"}}function x(){return{className:"GeoJSONLayer"}}function J(){return{className:"CSVLayer"}}function A(){return{className:"KMLLayer"}}function E(){return{className:"WFSLayer"}}function P(){return{className:"WMSLayer"}}function R(){return{className:"WMTSLayer"}}function z(){return{className:"StreamLayer"}}function Z(){return{className:"GroupLayer"}}async function q(e,a){return(await a.fetchServiceMetadata(e.url)).tileInfo}async function N(e,a,t){const r=e.url;if(!r||/\/\d+$/.test(r))return{};await e.load();let n=await e.fetchData();if(e.type==="Feature Service"){const i=await g(n,r,a),c=m(i);if(typeof c=="object"){const l=G(i),o=$(i);c.className=c.id!=null&&l.includes(c.id)?"SubtypeGroupLayer":c.id!=null&&(o!=null&&o.includes(c.id))?"OrientedImageryLayer":"FeatureLayer"}return c}if(e.type==="Scene Service"&&(n=await F(e,n,a)),p(n)>0)return m(n);const s=await a.fetchServiceMetadata(r);return t&&(s.tables=await t()),m(s)}function m(e){return p(e)===1&&{id:T(e)}}const Y=Object.freeze(Object.defineProperty({__proto__:null,fromItem:C,selectLayerClassPath:S},Symbol.toStringTag,{value:"Module"}));export{S as L,g as a,M as e,F as i,p as l,G as n,Y as p,T as r,$ as s,u as t};
