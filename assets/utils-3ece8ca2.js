import{eZ as U,Q as B,aC as _,e_ as C,am as j,eK as A,aS as Y,az as Z}from"./index-8edf265f.js";import{L as Q}from"./quantizationUtils-4acc4a23.js";import{y as R,m as K}from"./heatmapUtils-485005f9.js";import{Z as H}from"./utils-22d77ce3.js";import{a as J,d as W}from"./generateRendererUtils-d97b60ba.js";const X="<Null>",tt="equal-interval",et=1,nt=5,lt=10,at=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,it=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),ot=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),rt=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function F(t){return t==null||typeof t=="string"&&!t?X:t}function st(t){const e=t.normalizationField!=null||t.normalizationType!=null,n=t.minValue!=null||t.maxValue!=null,l=!!t.sqlExpression&&t.supportsSQLExpression;return!e&&!n&&!l}function kt(t){const e=t.returnDistinct?[...new Set(t.values)]:t.values,n=e.filter(i=>i!=null).sort(),l=n.length,a={count:l,min:n[0],max:n[l-1]};return t.supportsNullCount&&(a.nullcount=e.length-l),t.percentileParams&&(a.median=P(e,t.percentileParams)),a}function ut(t){const{values:e,useSampleStdDev:n,supportsNullCount:l}=t;let a=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,o=null,r=null,s=null,f=null,c=0;const d=t.minValue==null?-1/0:t.minValue,m=t.maxValue==null?1/0:t.maxValue;for(const u of e)Number.isFinite(u)?u>=d&&u<=m&&(o=o===null?u:o+u,a=Math.min(a,u),i=Math.max(i,u),c++):typeof u=="string"&&c++;if(c&&o!=null){r=o/c;let u=0;for(const v of e)Number.isFinite(v)&&v>=d&&v<=m&&(u+=(v-r)**2);f=n?c>1?u/(c-1):0:c>0?u/c:0,s=Math.sqrt(f)}else a=null,i=null;const h={avg:r,count:c,max:i,min:a,stddev:s,sum:o,variance:f};return l&&(h.nullcount=e.length-c),t.percentileParams&&(h.median=P(e,t.percentileParams)),h}function P(t,e){const{fieldType:n,value:l,orderBy:a,isDiscrete:i}=e,o=mt(n,a==="desc");if((t=[...t].filter(h=>h!=null).sort((h,u)=>o(h,u))).length===0)return null;if(l<=0)return t[0];if(l>=1)return t[t.length-1];const r=(t.length-1)*l,s=Math.floor(r),f=s+1,c=r%1,d=t[s],m=t[f];return f>=t.length||i||typeof d=="string"||typeof m=="string"?d:d*(1-c)+m*c}function mt(t,e){if(t){if(it.has(t))return O(e);if(ot.has(t))return E(e,!1);if(t==="esriFieldTypeTimestampOffset")return pt(e);const i=E(e,!0);if(t==="esriFieldTypeString")return i;if(t==="esriFieldTypeGUID"||t==="esriFieldTypeGlobalID")return(o,r)=>i(G(o),G(r))}const n=e?1:-1,l=O(e),a=E(e,!0);return(i,o)=>typeof i=="number"&&typeof o=="number"?l(i,o):typeof i=="string"&&typeof o=="string"?a(i,o):n}const M=(t,e)=>t==null?e==null?0:1:e==null?-1:null,w=(t,e)=>t==null?e==null?0:-1:e==null?1:null;function ct(t){return t?M:w}const ft=(t,e)=>w(t,e)??(t===e?0:new Date(t).getTime()-new Date(e).getTime()),dt=(t,e)=>M(t,e)??(t===e?0:new Date(e).getTime()-new Date(t).getTime());function pt(t){return t?dt:ft}const ht=(t,e)=>w(t,e)??(t===e?0:t<e?-1:1),vt=(t,e)=>M(t,e)??(t===e?0:t<e?1:-1);function E(t,e){if(!e)return t?vt:ht;const n=ct(t);return t?(l,a)=>{const i=n(l,a);return i??((l=l.toUpperCase())>(a=a.toUpperCase())?-1:l<a?1:0)}:(l,a)=>{const i=n(l,a);return i??((l=l.toUpperCase())<(a=a.toUpperCase())?-1:l>a?1:0)}}const yt=(t,e)=>M(t,e)??e-t,gt=(t,e)=>w(t,e)??t-e;function O(t){return t?yt:gt}function G(t){return t.substr(24,12)+t.substr(19,4)+t.substr(16,2)+t.substr(14,2)+t.substr(11,2)+t.substr(9,2)+t.substr(6,2)+t.substr(4,2)+t.substr(2,2)+t.substr(0,2)}function Ot(t,e){let n;for(n in t)rt.includes(n)&&(Number.isFinite(t[n])||(t[n]=null));return e&&["avg","stddev","variance"].forEach(l=>{t[l]!=null&&(t[l]=Math.ceil(t[l]??0))}),t}function Gt(t){const e={};for(let n of t)(n==null||typeof n=="string"&&n.trim()==="")&&(n=null),e[n]==null?e[n]={count:1,data:n}:e[n].count++;return{count:e}}function k(t){return(t==null?void 0:t.type)!=="coded-value"?[]:t.codedValues.map(e=>e.code)}function Pt(t,e,n,l){const a=t.count,i=[];if(n&&e){const o=[],r=k(e[0]);for(const s of r)if(e[1]){const f=k(e[1]);for(const c of f)if(e[2]){const d=k(e[2]);for(const m of d)o.push(`${F(s)}${l}${F(c)}${l}${F(m)}`)}else o.push(`${F(s)}${l}${F(c)}`)}else o.push(s);for(const s of o)a.hasOwnProperty(s)||(a[s]={data:s,count:0})}for(const o in a){const r=a[o];i.push({value:r.data,count:r.count,label:r.label})}return{uniqueValueInfos:i}}function Tt(t,e,n,l){let a=null;switch(e){case"log":t!==0&&(a=Math.log(t)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&l!==0&&(a=t/l*100);break;case"field":Number.isFinite(n)&&n!==0&&(a=t/n);break;case"natural-log":t>0&&(a=Math.log(t));break;case"square-root":t>0&&(a=t**.5)}return a}function bt(t,e){const n=Ft({field:e.field,normalizationType:e.normalizationType,normalizationField:e.normalizationField,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,breakCount:e.numClasses||nt});return t=xt(t,e.minValue,e.maxValue),J({definition:n,values:t,normalizationTotal:e.normalizationTotal})}function xt(t,e,n){const l=e??-1/0,a=n??1/0;return t.filter(i=>Number.isFinite(i)&&i>=l&&i<=a)}function Ft(t){const{breakCount:e,field:n,normalizationField:l,normalizationType:a}=t,i=t.classificationMethod||tt,o=i==="standard-deviation"?t.standardDeviationInterval||et:void 0;return new W({breakCount:e,classificationField:n,classificationMethod:i,normalizationField:a==="field"?l:void 0,normalizationType:a,standardDeviationInterval:o})}function qt(t,e){var s,f;let n=t.classBreaks;const l=n.length,a=(s=n[0])==null?void 0:s.minValue,i=(f=n[l-1])==null?void 0:f.maxValue,o=e==="standard-deviation",r=at;return n=n.map(c=>{const d=c.label,m={minValue:c.minValue,maxValue:c.maxValue,label:d};if(o&&d){const h=d.match(r),u=(h==null?void 0:h.map(v=>+v.trim()))??[];u.length===2?(m.minStdDev=u[0],m.maxStdDev=u[1],u[0]<0&&u[1]>0&&(m.hasAvg=!0)):u.length===1&&(d.includes("<")?(m.minStdDev=null,m.maxStdDev=u[0]):d.includes(">")&&(m.minStdDev=u[0],m.maxStdDev=null))}return m}),{minValue:a,maxValue:i,classBreakInfos:n,normalizationTotal:t.normalizationTotal}}function Lt(t,e){const n=Vt(t,e);if(n.min==null&&n.max==null)return{bins:[],minValue:n.min,maxValue:n.max,normalizationTotal:e.normalizationTotal};const l=n.intervals,a=n.min??0,i=n.max??0,o=l.map((r,s)=>({minValue:l[s][0],maxValue:l[s][1],count:0}));for(const r of t)if(r!=null&&r>=a&&r<=i){const s=$t(l,r);s>-1&&o[s].count++}return{bins:o,minValue:a,maxValue:i,normalizationTotal:e.normalizationTotal}}function Vt(t,e){const{field:n,classificationMethod:l,standardDeviationInterval:a,normalizationType:i,normalizationField:o,normalizationTotal:r,minValue:s,maxValue:f}=e,c=e.numBins||lt;let d=null,m=null,h=null;if((!l||l==="equal-interval")&&!i){if(s!=null&&f!=null)d=s,m=f;else{const u=ut({values:t,minValue:s,maxValue:f,useSampleStdDev:!i,supportsNullCount:st({normalizationType:i,normalizationField:o,minValue:s,maxValue:f})});d=u.min??null,m=u.max??null}h=It(d??0,m??0,c)}else{const{classBreaks:u}=bt(t,{field:n,normalizationType:i,normalizationField:o,normalizationTotal:r,classificationMethod:l,standardDeviationInterval:a,minValue:s,maxValue:f,numClasses:c});d=u[0].minValue,m=u[u.length-1].maxValue,h=u.map(v=>[v.minValue,v.maxValue])}return{min:d,max:m,intervals:h}}function $t(t,e){let n=-1;for(let l=t.length-1;l>=0;l--)if(e>=t[l][0]){n=l;break}return n}function It(t,e,n){const l=(e-t)/n,a=[];let i,o=t;for(let r=1;r<=n;r++)i=o+l,i=Number(i.toFixed(16)),a.push([o,r===n?e:i]),o=i;return a}let x=null;const zt=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function Nt(t,e,n){return t.x<0?t.x+=e:t.x>n&&(t.x-=e),t}function Ut(t,e,n,l){const a=U(n)?B(n):null,i=a?Math.round((a.valid[1]-a.valid[0])/e.scale[0]):null;return t.map(o=>{const r=new _(o.geometry);return Q(e,r,r,r.hasZ,r.hasM),o.geometry=a?Nt(r,i??0,l[0]):r,o})}function Bt(t,e=18,n,l,a,i){const o=new Float64Array(a*i);e=Math.round(Z(e));let r=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,f=0,c=0,d=0,m=0;const h=R(l,n);for(const{geometry:v,attributes:$}of t){const{x:g,y:V}=v,I=Math.max(0,g-e),z=Math.max(0,V-e),N=Math.min(i,V+e),y=Math.min(a,g+e),T=+h($);for(let p=z;p<N;p++)for(let b=I;b<y;b++){const D=p*a+b,q=K(b-g,p-V,e),L=o[D];f=o[D]+=q*T;const S=f-L;c+=S,d+=S*S,f<r&&(r=f),f>s&&(s=f),m++}}if(!m)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const u=(s-r)/2;return{mean:c/m,stdDev:Math.sqrt((d-c*c/m)/m),min:r,max:s,mid:u,count:m}}function Dt(t){const e=zt.exec(t);if(!e)return null;const{hh:n,mm:l,ss:a,ms:i}=e.groups;return Number(n)*C.hours+Number(l)*C.minutes+Number(a)*C.seconds+Number(i||0)}async function _t(t,e,n=!0){if(!e)return[];const{field:l,field2:a,field3:i,fieldDelimiter:o,fieldInfos:r,timeZone:s}=t,f=l&&(r==null?void 0:r.find(y=>y.name.toLowerCase()===l.toLowerCase())),c=!!f&&j(f),d=!!f&&H(f),m=t.valueExpression,h=t.normalizationType,u=t.normalizationField,v=t.normalizationTotal,$=[],g=t.viewInfoParams;let V=null,I=null;if(m){if(!x){const{arcadeUtils:y}=await A();x=y}x.hasGeometryOperations(m)&&await x.enableGeometryOperations(),V=x.createFunction(m),I=g?x.getViewInfo({viewingMode:g.viewingMode,scale:g.scale,spatialReference:new Y(g.spatialReference)}):null}const z=t.fieldInfos,N=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&z?{fields:z}:null;return e.forEach(y=>{const T=y.attributes;let p;if(m){const b=N?{...y,layer:N}:y,D=x.createExecContext(b,I,s);p=x.executeFunction(V,D)}else T&&(p=T[l],a?(p=`${F(p)}${o}${F(T[a])}`,i&&(p=`${p}${o}${F(T[i])}`)):typeof p=="string"&&n&&(d?p=p?new Date(p).getTime():null:c&&(p=p?Dt(p):null)));if(h&&typeof p=="number"&&isFinite(p)){const b=T&&parseFloat(T[u]);p=Tt(p,h,b,v)}$.push(p)}),$}export{Pt as $,Tt as B,Ot as C,bt as E,qt as P,mt as T,Lt as U,_t as b,F as c,kt as d,st as f,Ut as j,Gt as k,ut as p,P as v,Dt as w,Bt as x};
