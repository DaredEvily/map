import{eA as H,_ as E,eB as L,f as $,j as x,a9 as T,ac as p}from"./index-8edf265f.js";const k=H(),P=new Map,j=new Map;async function W(e,n,a=!1){var s,r;if(!e||!n)return!0;const d=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),i=(s=j.get(d))==null?void 0:s.entries();if(i){for(const[l,c]of i)if(c.name===n){const u=!((r=c.stack)!=null&&r.hasForwardEdits());if(!u&&a){const[{deleteForwardEdits:m},{default:h}]=await Promise.all([E(()=>import("./deleteForwardEdits-ef79b153.js"),["assets/deleteForwardEdits-ef79b153.js","assets/index-8edf265f.js"]),E(()=>import("./DeleteForwardEditsParameters-3d154c99.js"),["assets/DeleteForwardEditsParameters-3d154c99.js","assets/index-8edf265f.js"])]);return m(d,l,new h({sessionId:k,moment:c.moment}))}return u}}return!0}function U(e,n){var i;if(!e)return!1;const a=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),d=(i=j.get(a))==null?void 0:i.entries();if(d){for(const[s,r]of d)if(r.name===n)return r.lockType==="edit"}return!1}const g=new L.EventEmitter;function B(e){return g.on("apply-edits",new WeakRef(e))}function D(e){return g.on("update-moment",new WeakRef(e))}function C(e,n,a=null,d=!1){const i=T();return d=n==null||d,g.emit("apply-edits",{serviceUrl:e,layerId:n,gdbVersion:a,mayReceiveServiceEdits:d,result:i.promise}),i}const A="esri.layers.mixins.EditBusLayer",w=Symbol(A);function q(e){return e!=null&&typeof e=="object"&&w in e}function b(e){return e!=null&&typeof e=="object"&&"gdbVersion"in e}function F(e,n,a){const d=new URL(e).host,i=P.get(d),s=r=>!r||r===i;return s(n)&&s(a)||n===a}const z=e=>{var n;let a=class extends e{constructor(...d){super(...d),this[n]=!0,this._applyEditsHandler=i=>{const{serviceUrl:s,layerId:r,gdbVersion:l,mayReceiveServiceEdits:c,result:u}=i,m=s===this.url,h=r!=null&&this.layerId!=null&&r===this.layerId,V=b(this),R=b(this)&&F(s,l,this.gdbVersion);if(!m||V&&!R||!h&&!c)return;const S=u.then(t=>{var y;if(h&&(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length))return this.emit("edits",p(t)),t;const I=(y=t.editedFeatures)==null?void 0:y.find(({layerId:f})=>f===this.layerId);if(I){const{adds:f,updates:M,deletes:_}=I.editedFeatures,v={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:f?f.map(({attributes:o})=>({objectId:this.objectIdField&&o[this.objectIdField],globalId:this.globalIdField&&o[this.globalIdField]})):[],deletedFeatures:_?_.map(({attributes:o})=>({objectId:this.objectIdField&&o[this.objectIdField],globalId:this.globalIdField&&o[this.globalIdField]})):[],updatedFeatures:M?M.map(({current:{attributes:o}})=>({objectId:this.objectIdField&&o[this.objectIdField],globalId:this.globalIdField&&o[this.globalIdField]})):[],editedFeatures:p(t.editedFeatures),exceededTransferLimit:!1,historicMoment:p(t.historicMoment)};return this.emit("edits",v),v}return{edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:p(t.editedFeatures),exceededTransferLimit:!1,historicMoment:p(t.historicMoment)}}).then(t=>("historicMoment"in this&&this.historicMoment!==t.historicMoment&&U(s,l)&&(this.historicMoment=t.historicMoment),t));this.emit("apply-edits",{result:S})},this._updateMomentHandler=i=>{const{serviceUrl:s,gdbVersion:r,moment:l}=i,c=s===this.url,u=b(this),m=b(this)&&F(s,r,this.gdbVersion),h=b(this)&&!F(s,this.gdbVersion,null);c&&u&&m&&h&&"historicMoment"in this&&this.historicMoment!==l&&(this.historicMoment=l)},this.when().then(()=>{this.addHandles(B(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(D(this._updateMomentHandler))},()=>{})}};return n=w,a=$([x(A)],a),a};export{z as F,U as a,C as c,q as p,k as r,W as s};
