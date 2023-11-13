import{e as pt}from"./deduplicate-9ab49e05.js";import{H as D}from"./InterleavedLayout-c63747de.js";import{e as f}from"./VertexAttribute-0e674613.js";import{C as V}from"./enums-bdecffa2.js";import{t as ht}from"./VertexElementDescriptor-2925c6af.js";import{h8 as nt,hg as Ot,gL as At,eR as W,cI as ot,cq as z,hh as dt,hi as St,cr as ft,cJ as rt,ct as ut,cc as w,cM as Tt,h7 as Et}from"./index-8edf265f.js";function j(t,e=0){const o=t.stride;return Array.from(t.fields.keys()).map(s=>{const r=t.fields.get(s),i=r.constructor.ElementCount,g=wt(r.constructor.ElementType),a=r.offset,I=!(!r.optional||!r.optional.glNormalized);return new ht(s,i,g,a,o,I,e)})}function wt(t){const e=vt[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const vt={u8:V.UNSIGNED_BYTE,u16:V.UNSIGNED_SHORT,u32:V.UNSIGNED_INT,i8:V.BYTE,i16:V.SHORT,i32:V.INT,f32:V.FLOAT},$t=D().vec3f(f.POSITION).u16(f.COMPONENTINDEX),yt=D().vec2u8(f.SIDENESS);j(yt);const K=D().vec3f(f.POSITION0).vec3f(f.POSITION1).vec3f(f.NORMAL).u16(f.COMPONENTINDEX).u8(f.VARIANTOFFSET,{glNormalized:!0}).u8(f.VARIANTSTROKE).u8(f.VARIANTEXTENSION,{glNormalized:!0}),G=D().vec3f(f.POSITION0).vec3f(f.POSITION1).vec3f(f.NORMALA).vec3f(f.NORMALB).u16(f.COMPONENTINDEX).u8(f.VARIANTOFFSET,{glNormalized:!0}).u8(f.VARIANTSTROKE).u8(f.VARIANTEXTENSION,{glNormalized:!0});f.POSITION0,f.POSITION1,f.COMPONENTINDEX,f.VARIANTOFFSET,f.VARIANTSTROKE,f.VARIANTEXTENSION,f.NORMAL,f.NORMALA,f.NORMALB,f.SIDENESS;const L=-1;var st;function Rt(t,e,o,s=Dt){const r=t.vertices.position,i=t.vertices.componentIndex,g=nt(s.anglePlanar),a=nt(s.angleSignificantEdge),I=Math.cos(a),l=Math.cos(g),u=k.edge,h=u.position0,O=u.position1,p=u.faceNormal0,v=u.faceNormal1,A=xt(t),$=Pt(t),n=$.length/4,c=e.allocate(n);let N=0;const m=n,d=o.allocate(m);let E=0,y=0,S=0;const Q=Ot(0,n),_=new Float32Array(n);_.forEach((M,T,F)=>{r.getVec($[4*T],h),r.getVec($[4*T+1],O),F[T]=At(h,O)}),Q.sort((M,T)=>_[T]-_[M]);const Z=new Array,tt=new Array;for(let M=0;M<n;M++){const T=Q[M],F=_[T],H=$[4*T],It=$[4*T+1],P=$[4*T+2],C=$[4*T+3],et=C===L;if(r.getVec(H,h),r.getVec(It,O),et)W(p,A[3*P],A[3*P+1],A[3*P+2]),ot(v,p),u.componentIndex=i.get(H),u.cosAngle=z(p,v);else{if(W(p,A[3*P],A[3*P+1],A[3*P+2]),W(v,A[3*C],A[3*C+1],A[3*C+2]),u.componentIndex=i.get(H),u.cosAngle=z(p,v),Lt(u,l))continue;u.cosAngle<-.9999&&ot(v,p)}y+=F,S++,et||Vt(u,I)?(e.write(c,N++,u),Z.push(F)):Mt(u,g)&&(o.write(d,E++,u),tt.push(F))}const Nt=new Float32Array(Z.reverse()),mt=new Float32Array(tt.reverse());return{regular:{instancesData:e.trim(c,N),lodInfo:{lengths:Nt}},silhouette:{instancesData:o.trim(d,E),lodInfo:{lengths:mt}},averageEdgeLength:y/S}}function Vt(t,e){return t.cosAngle<e}function Lt(t,e){return t.cosAngle>e}function Mt(t,e){const o=dt(t.cosAngle),s=k.fwd,r=k.ortho;return St(s,t.position1,t.position0),o*(z(ft(r,t.faceNormal0,t.faceNormal1),s)>0?-1:1)>e}function Pt(t){const e=t.faces.length/3,o=t.faces,s=t.neighbors;let r=0;for(let a=0;a<e;a++){const I=s[3*a],l=s[3*a+1],u=s[3*a+2],h=o[3*a],O=o[3*a+1],p=o[3*a+2];r+=I===L||h<O?1:0,r+=l===L||O<p?1:0,r+=u===L||p<h?1:0}const i=new Int32Array(4*r);let g=0;for(let a=0;a<e;a++){const I=s[3*a],l=s[3*a+1],u=s[3*a+2],h=o[3*a],O=o[3*a+1],p=o[3*a+2];(I===L||h<O)&&(i[g++]=h,i[g++]=O,i[g++]=a,i[g++]=I),(l===L||O<p)&&(i[g++]=O,i[g++]=p,i[g++]=a,i[g++]=l),(u===L||p<h)&&(i[g++]=p,i[g++]=h,i[g++]=a,i[g++]=u)}return i}function xt(t){const e=t.faces.length/3,o=t.vertices.position,s=t.faces,r=X.v0,i=X.v1,g=X.v2,a=new Float32Array(3*e);for(let I=0;I<e;I++){const l=s[3*I],u=s[3*I+1],h=s[3*I+2];o.getVec(l,r),o.getVec(u,i),o.getVec(h,g),rt(i,i,r),rt(g,g,r),ft(r,i,g),ut(r,r),a[3*I]=r[0],a[3*I+1]=r[1],a[3*I+2]=r[2]}return a}(function(t){t[t.SOLID=0]="SOLID",t[t.SKETCH=1]="SKETCH"})(st||(st={}));const k={edge:{position0:w(),position1:w(),faceNormal0:w(),faceNormal1:w(),componentIndex:0,cosAngle:0},ortho:w(),fwd:w()},X={v0:w(),v1:w(),v2:w()},Dt={anglePlanar:4,angleSignificantEdge:35};function ct(t,e,o){const s=e/3,r=new Uint32Array(o+1),i=new Uint32Array(o+1),g=(n,c)=>{n<c?r[n+1]++:i[c+1]++};for(let n=0;n<s;n++){const c=t[3*n],N=t[3*n+1],m=t[3*n+2];g(c,N),g(N,m),g(m,c)}let a=0,I=0;for(let n=0;n<o;n++){const c=r[n+1],N=i[n+1];r[n+1]=a,i[n+1]=I,a+=c,I+=N}const l=new Uint32Array(6*s),u=r[o],h=(n,c,N)=>{if(n<c){const m=r[n+1]++;l[2*m]=c,l[2*m+1]=N}else{const m=i[c+1]++;l[2*u+2*m]=n,l[2*u+2*m+1]=N}};for(let n=0;n<s;n++){const c=t[3*n],N=t[3*n+1],m=t[3*n+2];h(c,N,n),h(N,m,n),h(m,c,n)}const O=(n,c)=>{const N=2*n,m=c-n;for(let d=1;d<m;d++){const E=l[N+2*d],y=l[N+2*d+1];let S=d-1;for(;S>=0&&l[N+2*S]>E;S--)l[N+2*S+2]=l[N+2*S],l[N+2*S+3]=l[N+2*S+1];l[N+2*S+2]=E,l[N+2*S+3]=y}};for(let n=0;n<o;n++)O(r[n],r[n+1]),O(u+i[n],u+i[n+1]);const p=new Int32Array(3*s),v=(n,c)=>n===t[3*c]?0:n===t[3*c+1]?1:n===t[3*c+2]?2:-1,A=(n,c)=>{const N=v(n,c);p[3*c+N]=-1},$=(n,c,N,m)=>{const d=v(n,c);p[3*c+d]=m;const E=v(N,m);p[3*m+E]=c};for(let n=0;n<o;n++){let c=r[n];const N=r[n+1];let m=i[n];const d=i[n+1];for(;c<N&&m<d;){const E=l[2*c],y=l[2*u+2*m];E===y?($(n,l[2*c+1],y,l[2*u+2*m+1]),c++,m++):E<y?(A(n,l[2*c+1]),c++):(A(y,l[2*u+2*m+1]),m++)}for(;c<N;)A(n,l[2*c+1]),c++;for(;m<d;)A(l[2*u+2*m],l[2*u+2*m+1]),m++}return p}let gt=class{updateSettings(e){this.settings=e,this._edgeHashFunction=e.reducedPrecision?_t:Ft}write(e,o,s){const r=this._edgeHashFunction(s);b.seed=r;const i=b.getIntRange(0,255),g=b.getIntRange(0,this.settings.variants-1),a=.7,I=b.getFloat(),l=255*(.5*Ct(-(1-Math.min(I/a,1))+Math.max(0,I-a)/(1-a),1.2)+.5);e.position0.setVec(o,s.position0),e.position1.setVec(o,s.position1),e.componentIndex.set(o,s.componentIndex),e.variantOffset.set(o,i),e.variantStroke.set(o,g),e.variantExtension.set(o,l)}trim(e,o){return e.slice(0,o)}};const J=new Float32Array(6),B=new Uint32Array(J.buffer),R=new Uint32Array(1);function Ft(t){const e=J;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],R[0]=5381;for(let o=0;o<B.length;o++)R[0]=31*R[0]+B[o];return R[0]}function _t(t){const e=J;e[0]=x(t.position0[0]),e[1]=x(t.position0[1]),e[2]=x(t.position0[2]),e[3]=x(t.position1[0]),e[4]=x(t.position1[1]),e[5]=x(t.position1[2]),R[0]=5381;for(let o=0;o<B.length;o++)R[0]=31*R[0]+B[o];return R[0]}const it=1e4;function x(t){return Math.round(t*it)/it}function Ct(t,e){const o=t<0?-1:1;return Math.abs(t)**e*o}let q=class{constructor(){this._commonWriter=new gt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return K.createBuffer(e)}write(e,o,s){this._commonWriter.write(e,o,s),Tt(U,s.faceNormal0,s.faceNormal1),ut(U,U),e.normal.setVec(o,U)}trim(e,o){return this._commonWriter.trim(e,o)}};q.Layout=K,q.glLayout=j(K,1);class Y{constructor(){this._commonWriter=new gt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return G.createBuffer(e)}write(e,o,s){this._commonWriter.write(e,o,s),e.normalA.setVec(o,s.faceNormal0),e.normalB.setVec(o,s.faceNormal1)}trim(e,o){return this._commonWriter.trim(e,o)}}Y.Layout=G,Y.glLayout=j(G,1);const U=w(),b=new Et;function qt(t){const e=Ut(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return at.updateSettings(t.writerSettings),lt.updateSettings(t.writerSettings),Rt(e,at,lt)}function Ut(t,e,o,s){if(e){const g=ct(o,s,t.count);return new bt(o,s,g,t)}const r=pt(t.buffer,t.stride/4,{originalIndices:o,originalIndicesLength:s}),i=ct(r.indices,s,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:i,vertices:$t.createView(r.buffer)}}class bt{constructor(e,o,s,r){this.faces=e,this.facesLength=o,this.neighbors=s,this.vertices=r}}const at=new q,lt=new Y,Yt=D().vec3f(f.POSITION0).vec3f(f.POSITION1),jt=D().vec3f(f.POSITION0).vec3f(f.POSITION1).u16(f.COMPONENTINDEX);export{$t as T,Yt as d,qt as f,jt as m,Rt as p,Ut as u};