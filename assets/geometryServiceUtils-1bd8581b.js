import{f as c,g as l,j as h,aB as S,dG as u,cy as p,aT as w,aU as v,dd as j,N as R,g5 as $,b0 as m,F as f,b4 as F}from"./index-8edf265f.js";let n=class extends S{constructor(t){super(t),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const t=this.geometries.map(a=>a.toJSON()),r=this.geometries[0],e={};return e.outSR=u(this.outSpatialReference),e.inSR=u(r.spatialReference),e.geometries=JSON.stringify({geometryType:p(r),geometries:t}),this.transformation&&(e.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),this.transformForward!=null&&(e.transformForward=this.transformForward),e}};c([l()],n.prototype,"geometries",void 0),c([l({json:{read:{source:"outSR"}}})],n.prototype,"outSpatialReference",void 0),c([l()],n.prototype,"transformation",void 0),c([l()],n.prototype,"transformForward",void 0),n=c([h("esri.rest.support.ProjectParameters")],n);const g=n,N=w(g);async function J(o,t,r){t=N(t);const e=v(o),a={...e.query,f:"json",...t.toJSON()},s=t.outSpatialReference,i=p(t.geometries[0]),y=j(a,r);return R(e.path+"/project",y).then(({data:{geometries:d}})=>$(d,i,s))}async function O(o=null,t){var a,s;if(m.geometryServiceUrl)return m.geometryServiceUrl;if(!o)throw new f("internal:geometry-service-url-not-configured");let r;r="portal"in o?o.portal||F.getDefault():o,await r.load({signal:t});const e=(s=(a=r.helperServices)==null?void 0:a.geometry)==null?void 0:s.url;if(!e)throw new f("internal:geometry-service-url-not-configured");return e}async function T(o,t,r=null,e){const a=await O(r,e),s=new g;s.geometries=[o],s.outSpatialReference=t;const i=await J(a,s,{signal:e});if(i&&Array.isArray(i)&&i.length===1)return i[0];throw new f("internal:geometry-service-projection-failed")}export{O as getGeometryServiceURL,T as projectGeometry};
