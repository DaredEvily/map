import{m as Ie}from"./TimeOnly-f35243a6.js";import{n as N,K as De,X as J,H as L,N as v,a as m,r as p,P,d as b,x as Te,y as fe,Q as ue,A as S,B as U,q as x,U as G,E as Ee,b as M,J as be,v as Ne,c as O,D as xe,S as Ae,T as _,V as X,Y}from"./arcadeUtils-96e38c70.js";import{e as de,j as Le,q as ce,f as Se,c as me,a as Ce,b as ve,d as Pe,g as q,k as Ze,F as Re,T as $e,B as k,h as ke,i as B,L as C,I as ee}from"./featureSetUtils-32913e22.js";import{l as Me}from"./portalUtils-94015274.js";import{u as Ue,D as pe}from"./SpatialFilter-98ab29aa.js";import{b4 as ye,e1 as Oe}from"./index-8edf265f.js";import{x as T}from"./WhereClause-78ff7756.js";import{Z as ne}from"./FeatureLayer-1a860199.js";import{y as W}from"./Field-ebbe1dfc.js";import"./UnknownTimeZone-d5028e24.js";import"./number-da09adcd.js";import"./featureConversionUtils-bfaae0f6.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./FieldsIndex-3d8128c0.js";import"./MD5-715f37cd.js";import"./SubtypeGroupLayer-7ad27d17.js";import"./MultiOriginJSONSupport-2c2935ac.js";import"./APIKeyMixin-828ee2ca.js";import"./ArcGISService-16130ddc.js";import"./CustomParametersMixin-6ff009ea.js";import"./EditBusLayer-60b14f80.js";import"./FeatureLayerBase-7801e5b0.js";import"./commonProperties-43b199c9.js";import"./featureLayerUtils-a39aeb4a.js";import"./Query-474f3baf.js";import"./jsonUtils-f9aedde2.js";import"./UniqueValueRenderer-36595a45.js";import"./LegendOptions-48c2523d.js";import"./diffUtils-9dbdd340.js";import"./SizeVariable-0dc1bc42.js";import"./colorRamps-763955b0.js";import"./ColorStop-7842c5e0.js";import"./jsonUtils-805d1979.js";import"./styleUtils-e8aad1b5.js";import"./DictionaryLoader-7ed264e8.js";import"./LRUCache-c7a923e7.js";import"./heatmapUtils-485005f9.js";import"./vec4f64-3c9d0901.js";import"./AttachmentQuery-6e51685e.js";import"./RelationshipQuery-c2adf52b.js";import"./fieldType-088ee331.js";import"./LayerFloorInfo-0e67daa6.js";import"./serviceCapabilitiesUtils-7d3bbd37.js";import"./OperationalLayer-1bd8068d.js";import"./PortalLayer-394f0be4.js";import"./portalItemUtils-1acb3c0b.js";import"./RefreshableLayer-1604ee0a.js";import"./TemporalLayer-64978c57.js";import"./fieldProperties-c388c8d2.js";import"./FeatureTemplate-580a397d.js";import"./LabelClass-67c7130a.js";import"./labelUtils-39618ac3.js";import"./defaultsJSON-b087dd4d.js";import"./labelingInfo-8214bb11.js";import"./popupUtils-afaed8cf.js";import"./versionUtils-1e15284e.js";import"./interfaces-f1f22245.js";import"./executeQueryJSON-bdb53db6.js";import"./query-22d59433.js";import"./pbfQueryUtils-3b107514.js";import"./pbf-08dd563b.js";import"./queryZScale-b4140d92.js";import"./FeatureSet-4ba9f962.js";import"./executeQueryPBF-b4c7e501.js";import"./AttachmentInfo-24f267f4.js";import"./executeForIds-ee169be0.js";import"./TopFeaturesQuery-4081a2c4.js";import"./FeatureType-d929c2b3.js";import"./geometryEngineAsync-f5c35b2a.js";import"./FeatureEffectLayer-7399d7e4.js";import"./FeatureEffect-8a44b622.js";import"./FeatureReductionLayer-5aee6f89.js";import"./clusterUtils-6b9076e5.js";import"./FeatureReductionSelection-63d7d958.js";import"./OrderedLayer-d4b74f5a.js";import"./styleUtils-62792db0.js";function ze(s,n,r,c){if(c.length===1){if(x(c[0]))return Y(s,c[0],-1);if(M(c[0]))return Y(s,c[0].toArray(),-1)}return Y(s,c,-1)}async function te(s,n,r){const c=s.getVariables();if(c.length>0){const F=[];for(let t=0;t<c.length;t++){const a={name:c[t]};F.push(await n.evaluateIdentifier(r,a))}const e={};for(let t=0;t<c.length;t++)e[c[t]]=F[t];return s.parameters=e,s}return s}function d(s,n,r=null){for(const c in s)if(c.toLowerCase()===n.toLowerCase())return s[c];return r}function we(s){if(s===null)return null;const n={type:d(s,"type",""),name:d(s,"name","")};if(n.type==="range")n.range=d(s,"range",[]);else{n.codedValues=[];for(const r of d(s,"codedValues",[]))n.codedValues.push({name:d(r,"name",""),code:d(r,"code",null)})}return n}function ie(s){if(s===null)return null;const n={},r=d(s,"wkt",null);r!==null&&(n.wkt=r);const c=d(s,"wkid",null);return c!==null&&(n.wkid=c),n}function he(s){if(s===null)return null;const n={hasZ:d(s,"hasz",!1),hasM:d(s,"hasm",!1)},r=d(s,"spatialreference",null);r&&(n.spatialReference=ie(r));const c=d(s,"x",null);if(c!==null)return n.x=c,n.y=d(s,"y",null),n;const F=d(s,"rings",null);if(F!==null)return n.rings=F,n;const e=d(s,"paths",null);if(e!==null)return n.paths=e,n;const t=d(s,"points",null);if(t!==null)return n.points=t,n;for(const a of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const u=d(s,a,null);u!==null&&(n[a]=u)}return n}function je(s,n){for(const r of n)if(r===s)return!0;return!1}function He(s){return!!s.layerDefinition&&!!s.featureSet&&je(s.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&x(s.layerDefinition.fields)!==!1&&x(s.featureSet.features)!==!1}function z(s){return(s==null?void 0:s.toLowerCase())==="utc"?"UTC":(s==null?void 0:s.toLowerCase())==="unknown"?"Unknown":s}function mt(s){s.mode==="async"&&(s.functions.timezone=function(n,r){return s.standardFunctionAsync(n,r,async(c,F,e)=>{var u,y;if(N(e,1,2,n,r),De(e[0])||J(e[0]))return"Unknown";if(L(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].datesInUnknownTimezone?z("unknown"):z(e[0].dateFieldsTimeZone);if(!(e[1]instanceof v)||e[1].hasField("type")===!1)throw new m(n,p.InvalidParameter,r);const l=e[1].field("type");if(P(l)===!1)throw new m(n,p.InvalidParameter,r);switch(b(l).toLowerCase()){case"preferredtimezone":return z(e[0].preferredTimeZone);case"editfieldsinfo":return z(((u=e[0].editFieldsInfo)==null?void 0:u.timeZone)??null);case"timeinfo":return z(((y=e[0].timeInfo)==null?void 0:y.timeZone)??null);case"field":if(e[1].hasField("fieldname")&&P(e[1].field("fieldname")))return z(e[0].fieldTimeZone(b(e[1].field("fieldname"))))}throw new m(n,p.InvalidParameter,r)}const t=Te(e[0],fe(n));if(t===null)return null;const a=t.timeZone;return a==="system"?Ie.systemTimeZoneCanonicalName:a.toLowerCase()==="utc"?"UTC":a.toLowerCase()==="unknown"?"Unknown":a})},s.functions.sqltimestamp=function(n,r){return s.standardFunctionAsync(n,r,async(c,F,e)=>{N(e,1,3,n,r);const t=e[0];if(ue(t)){if(e.length===1)return t.toSQLWithKeyword();if(e.length===2)return t.changeTimeZone(b(e[1])).toSQLWithKeyword();throw new m(n,p.InvalidParameter,r)}if(J(t))return t.toSQLWithKeyword();if(L(t)){if(e.length!==3)throw new m(n,p.InvalidParameter,r);await t.load();const a=b(e[1]);if(J(e[2]))return e[2].toSQLWithKeyword();if(ue(e[2])===!1)throw new m(n,p.InvalidParameter,r);const u=t.fieldTimeZone(a);return u===null?e[2].toSQLWithKeyword():e[2].changeTimeZone(u).toSQLWithKeyword()}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"sqltimestamp",min:2,max:4}),s.functions.featuresetbyid=function(n,r){return s.standardFunctionAsync(n,r,(c,F,e)=>{if(N(e,2,4,n,r),e[0]instanceof de){const t=b(e[1]);let a=S(e[2],null);const u=U(S(e[3],!0));if(a===null&&(a=["*"]),x(a)===!1)throw new m(n,p.InvalidParameter,r);return e[0].featureSetById(t,u,a)}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"featuresetbyid",min:2,max:4}),s.functions.getfeatureset=function(n,r){return s.standardFunctionAsync(n,r,(c,F,e)=>{if(N(e,1,2,n,r),G(e[0])){let t=S(e[1],"datasource");return t===null&&(t="datasource"),t=b(t).toLowerCase(),Le(e[0].fullSchema(),t,n.lrucache,n.interceptor,n.spatialReference)}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"getfeatureset",min:1,max:2}),s.functions.featuresetbyportalitem=function(n,r){return s.standardFunctionAsync(n,r,(c,F,e)=>{var l,i;if(N(e,2,5,n,r),e[0]===null)throw new m(n,p.PortalRequired,r);if(e[0]instanceof Ee){const o=b(e[1]),f=b(e[2]);let I=S(e[3],null);const D=U(S(e[4],!0));if(I===null&&(I=["*"]),x(I)===!1)throw new m(n,p.InvalidParameter,r);let w=null;return w=(l=n.services)!=null&&l.portal?n.services.portal:ye.getDefault(),w=Me(e[0],w),ce(o,f,n.spatialReference,I,D,w,n.lrucache,n.interceptor)}if(P(e[0])===!1)throw new m(n,p.PortalRequired,r);const t=b(e[0]),a=b(e[1]);let u=S(e[2],null);const y=U(S(e[3],!0));if(u===null&&(u=["*"]),x(u)===!1)throw new m(n,p.InvalidParameter,r);return ce(t,a,n.spatialReference,u,y,((i=n.services)==null?void 0:i.portal)??ye.getDefault(),n.lrucache,n.interceptor)})},s.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),s.functions.featuresetbyname=function(n,r){return s.standardFunctionAsync(n,r,(c,F,e)=>{if(N(e,2,4,n,r),e[0]instanceof de){const t=b(e[1]);let a=S(e[2],null);const u=U(S(e[3],!0));if(a===null&&(a=["*"]),x(a)===!1)throw new m(n,p.InvalidParameter,r);return e[0].featureSetByName(t,u,a)}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"featuresetbyname",min:2,max:4}),s.functions.featureset=function(n,r){return s.standardFunction(n,r,(c,F,e)=>{N(e,1,1,n,r);let t=e[0];const a={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(P(t))t=JSON.parse(t),t.layerDefinition!==void 0?(a.layerDefinition=t.layerDefinition,a.featureSet=t.featureSet,t.layerDefinition.spatialReference&&(a.layerDefinition.spatialReference=t.layerDefinition.spatialReference)):(a.featureSet.features=t.features,a.featureSet.geometryType=t.geometryType,a.layerDefinition.geometryType=a.featureSet.geometryType,a.layerDefinition.objectIdField=t.objectIdFieldName??"",a.layerDefinition.typeIdField=t.typeIdFieldName,a.layerDefinition.globalIdField=t.globalIdFieldName,a.layerDefinition.fields=t.fields,t.spatialReference&&(a.layerDefinition.spatialReference=t.spatialReference));else{if(!(e[0]instanceof v))throw new m(n,p.InvalidParameter,r);{t=JSON.parse(e[0].castToText(!0));const u=d(t,"layerdefinition");if(u!==null){a.layerDefinition.geometryType=d(u,"geometrytype",""),a.featureSet.geometryType=a.layerDefinition.geometryType,a.layerDefinition.globalIdField=d(u,"globalidfield",""),a.layerDefinition.objectIdField=d(u,"objectidfield",""),a.layerDefinition.typeIdField=d(u,"typeidfield",""),a.layerDefinition.hasZ=d(u,"hasz",!1)===!0,a.layerDefinition.hasM=d(u,"hasm",!1)===!0;const y=d(u,"spatialreference",null);y&&(a.layerDefinition.spatialReference=ie(y));for(const i of d(u,"fields",[])){const o={name:d(i,"name",""),alias:d(i,"alias",""),type:d(i,"type",""),nullable:d(i,"nullable",!0),editable:d(i,"editable",!0),length:d(i,"length",null),domain:we(d(i,"domain"))};a.layerDefinition.fields.push(o)}const l=d(t,"featureset",null);if(l){const i={};for(const o of a.layerDefinition.fields)i[o.name.toLowerCase()]=o.name;for(const o of d(l,"features",[])){const f={},I=d(o,"attributes",{});for(const D in I)f[i[D.toLowerCase()]]=I[D];a.featureSet.features.push({attributes:f,geometry:he(d(o,"geometry",null))})}}}else{a.layerDefinition.hasZ=d(t,"hasz",!1)===!0,a.layerDefinition.hasM=d(t,"hasm",!1)===!0,a.layerDefinition.geometryType=d(t,"geometrytype",""),a.featureSet.geometryType=a.layerDefinition.geometryType,a.layerDefinition.objectIdField=d(t,"objectidfieldname",""),a.layerDefinition.typeIdField=d(t,"typeidfieldname","");const y=d(t,"spatialreference",null);y&&(a.layerDefinition.spatialReference=ie(y));let l=d(t,"fields",null);if(x(l))for(const f of l){const I={name:d(f,"name",""),alias:d(f,"alias",""),type:d(f,"type",""),nullable:d(f,"nullable",!0),editable:d(f,"editable",!0),length:d(f,"length",null),domain:we(d(f,"domain"))};a.layerDefinition.fields.push(I)}else l=null,a.layerDefinition.fields=l;const i={};for(const f of a.layerDefinition.fields)i[f.name.toLowerCase()]=f.name;let o=d(t,"features",null);if(x(o))for(const f of o){const I={},D=d(f,"attributes",{});for(const w in D)I[i[w.toLowerCase()]]=D[w];a.featureSet.features.push({attributes:I,geometry:he(d(f,"geometry",null))})}else o=null,a.featureSet.features=o}}}if(He(a)===!1)throw new m(n,p.InvalidParameter,r);return a.layerDefinition.geometryType||(a.layerDefinition.geometryType="esriGeometryNull"),Se.create(a,n.spatialReference)})},s.signatures.push({name:"featureset",min:1,max:1}),s.functions.filter=function(n,r){return s.standardFunctionAsync(n,r,async(c,F,e)=>{if(N(e,2,2,n,r),x(e[0])||M(e[0])){const t=[];let a=e[0];a instanceof be&&(a=a.toArray());let u=null;if(!Ne(e[1]))throw new m(n,p.InvalidParameter,r);u=e[1].createFunction(n);for(const y of a){const l=u(y);Oe(l)?await l===!0&&t.push(y):l===!0&&t.push(y)}return t}if(L(e[0])){const t=await e[0].load(),a=T.create(e[1],t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),u=a.getVariables();if(u.length>0){const y=[];for(let i=0;i<u.length;i++){const o={name:u[i]};y.push(await s.evaluateIdentifier(n,o))}const l={};for(let i=0;i<u.length;i++)l[u[i]]=y[i];return a.parameters=l,new me({parentfeatureset:e[0],whereclause:a})}return new me({parentfeatureset:e[0],whereclause:a})}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"filter",min:2,max:2}),s.functions.orderby=function(n,r){return s.standardFunctionAsync(n,r,async(c,F,e)=>{if(N(e,2,2,n,r),L(e[0])){const t=new Ce(e[1]);return new ve({parentfeatureset:e[0],orderbyclause:t})}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"orderby",min:2,max:2}),s.functions.top=function(n,r){return s.standardFunctionAsync(n,r,async(c,F,e)=>{if(N(e,2,2,n,r),L(e[0]))return new Pe({parentfeatureset:e[0],topnum:e[1]});if(x(e[0]))return O(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,O(e[1]));if(M(e[0]))return O(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,O(e[1]));throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"top",min:2,max:2}),s.functions.first=function(n,r){return s.standardFunctionAsync(n,r,async(c,F,e)=>{if(N(e,1,1,n,r),L(e[0])){const t=await e[0].first(c.abortSignal);if(t!==null){const a=xe.createFromGraphicLikeObject(t.geometry,t.attributes,e[0],n.timeZone);return a._underlyingGraphic=t,a}return t}return x(e[0])?e[0].length===0?null:e[0][0]:M(e[0])?e[0].length()===0?null:e[0].get(0):null})},s.signatures.push({name:"first",min:1,max:1}),s.functions.attachments=function(n,r){return s.standardFunctionAsync(n,r,async(c,F,e)=>{N(e,1,2,n,r);const t={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof v){if(e[1].hasField("minsize")&&(t.minsize=O(e[1].field("minsize"))),e[1].hasField("metadata")&&(t.returnMetadata=U(e[1].field("metadata"))),e[1].hasField("maxsize")&&(t.maxsize=O(e[1].field("maxsize"))),e[1].hasField("types")){const a=Ae(e[1].field("types"),!1);a.length>0&&(t.types=a)}}else if(e[1]!==null)throw new m(n,p.InvalidParameter,r)}if(G(e[0])){let a=e[0]._layer;return a instanceof ne&&(a=q(a,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),a===null?[]:L(a)===!1?[]:(await a.load(),a.queryAttachments(e[0].field(a.objectIdField),t.minsize,t.maxsize,t.types,t.returnMetadata))}if(e[0]===null)return[];throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"attachments",min:1,max:2}),s.functions.featuresetbyrelationshipname=function(n,r){return s.standardFunctionAsync(n,r,async(c,F,e)=>{N(e,2,4,n,r);const t=e[0],a=b(e[1]);let u=S(e[2],null);const y=U(S(e[3],!0));if(u===null&&(u=["*"]),x(u)===!1)throw new m(n,p.InvalidParameter,r);if(e[0]===null)return null;if(!G(e[0]))throw new m(n,p.InvalidParameter,r);let l=t._layer;if(l instanceof ne&&(l=q(l,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),l===null||L(l)===!1)return null;l=await l.load();const i=l.relationshipMetaData().filter(w=>w.name===a);if(i.length===0)return null;if(i[0].relationshipTableId!==void 0&&i[0].relationshipTableId!==null&&i[0].relationshipTableId>-1)return Ze(l,i[0],t.field(l.objectIdField),l.spatialReference,u,y,n.lrucache,n.interceptor);let o=l.serviceUrl();if(!o)return null;o=o.charAt(o.length-1)==="/"?o+i[0].relatedTableId.toString():o+"/"+i[0].relatedTableId.toString();const f=await Re(o,l.spatialReference,u,y,n.lrucache,n.interceptor);await f.load();let I=f.relationshipMetaData();if(I=I.filter(w=>w.id===i[0].id),t.hasField(i[0].keyField)===!1||t.field(i[0].keyField)===null){const w=await l.getFeatureByObjectId(t.field(l.objectIdField),[i[0].keyField]);if(w){const E=T.create(I[0].keyField+"= @id",f.getFieldsIndex(),f.dateFieldsTimeZoneDefaultUTC);return E.parameters={id:w.attributes[i[0].keyField]},f.filter(E)}return new Ue({parentfeatureset:f})}const D=T.create(I[0].keyField+"= @id",f.getFieldsIndex(),f.dateFieldsTimeZoneDefaultUTC);return D.parameters={id:t.field(i[0].keyField)},f.filter(D)})},s.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),s.functions.featuresetbyassociation=function(n,r){return s.standardFunctionAsync(n,r,async(c,F,e)=>{N(e,2,3,n,r);const t=e[0],a=b(S(e[1],"")).toLowerCase(),u=P(e[2])?b(e[2]):null;if(e[0]===null)return null;if(!G(e[0]))throw new m(n,p.InvalidParameter,r);let y=t._layer;if(y instanceof ne&&(y=q(y,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),y===null||L(y)===!1)return null;await y.load();const l=y.serviceUrl(),i=await $e(l,n.spatialReference);let o=null,f=null,I=!1;if(u!==null&&u!==""&&u!==void 0){for(const g of i.terminals)g.terminalName===u&&(f=g.terminalId);f===null&&(I=!0)}const D=i.associations.getFieldsIndex(),w=D.get("TOGLOBALID").name,E=D.get("FROMGLOBALID").name,K=D.get("TOTERMINALID").name,V=D.get("FROMTERMINALID").name,j=D.get("FROMNETWORKSOURCEID").name,H=D.get("TONETWORKSOURCEID").name,$=D.get("ASSOCIATIONTYPE").name,ge=D.get("ISCONTENTVISIBLE").name,Fe=D.get("OBJECTID").name;for(const g of y.fields)if(g.type==="global-id"){o=t.field(g.name);break}let Z=null,ae=new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),T.create("0",i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC)),re=new k(new W({name:"side",alias:"side",type:"string"}),T.create("''",i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC));const A="globalid",se="globalId",oe={};for(const g in i.lkp)oe[g]=i.lkp[g].sourceId;const R=new ke(new W({name:"classname",alias:"classname",type:"string"}),null,oe);let h="";switch(a){case"midspan":{h=`((${w}='${o}') OR ( ${E}='${o}')) AND (${$} IN (5))`,R.codefield=T.create(`CASE WHEN (${w}='${o}') THEN ${j} ELSE ${H} END`,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC);const g=X(C.findField(i.associations.fields,E));g.name=A,g.alias=A,Z=new k(g,T.create(`CASE WHEN (${E}='${o}') THEN ${w} ELSE ${E} END`,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC)),ae=i.unVersion>=4?new ee(C.findField(i.associations.fields,D.get("PERCENTALONG").name)):new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),T.create("0",i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC));break}case"junctionedge":{h=`((${w}='${o}') OR ( ${E}='${o}')) AND (${$} IN (4,6))`,R.codefield=T.create(`CASE WHEN (${w}='${o}') THEN ${j} ELSE ${H} END`,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC);const g=X(C.findField(i.associations.fields,E));g.name=A,g.alias=A,Z=new k(g,T.create(`CASE WHEN (${E}='${o}') THEN ${w} ELSE ${E} END`,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC)),re=new k(new W({name:"side",alias:"side",type:"string"}),T.create(`CASE WHEN (${$}=4) THEN 'from' ELSE 'to' END`,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC));break}case"connected":{let g=`${w}='@T'`,le=`${E}='@T'`;f!==null&&(g+=` AND ${K}=@A`,le+=` AND ${V}=@A`),h="(("+g+") OR ("+le+"))",h=_(h,"@T",o??""),g=_(g,"@T",o??""),f!==null&&(g=_(g,"@A",f.toString()),h=_(h,"@A",f.toString())),R.codefield=T.create("CASE WHEN "+g+` THEN ${j} ELSE ${H} END`,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC);const Q=X(C.findField(i.associations.fields,E));Q.name=A,Q.alias=A,Z=new k(Q,T.create("CASE WHEN "+g+` THEN ${E} ELSE ${w} END`,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC));break}case"container":h=`${w}='${o}' AND ${$} = 2`,f!==null&&(h+=` AND ${K} = `+f.toString()),R.codefield=j,h="( "+h+" )",Z=new B(C.findField(i.associations.fields,E),A,A);break;case"content":h=`(${E}='${o}' AND ${$} = 2)`,f!==null&&(h+=` AND ${V} = `+f.toString()),R.codefield=H,h="( "+h+" )",Z=new B(C.findField(i.associations.fields,w),A,A);break;case"structure":h=`(${w}='${o}' AND ${$} = 3)`,f!==null&&(h+=` AND ${K} = `+f.toString()),R.codefield=j,h="( "+h+" )",Z=new B(C.findField(i.associations.fields,E),A,se);break;case"attached":h=`(${E}='${o}' AND ${$} = 3)`,f!==null&&(h+=` AND ${V} = `+f.toString()),R.codefield=H,h="( "+h+" )",Z=new B(C.findField(i.associations.fields,w),A,se);break;default:throw new m(n,p.InvalidParameter,r)}return I&&(h="1 <> 1"),new C({parentfeatureset:i.associations,adaptedFields:[new ee(C.findField(i.associations.fields,Fe)),new ee(C.findField(i.associations.fields,ge)),Z,re,R,ae],extraFilter:h?T.create(h,i.associations.getFieldsIndex(),i.associations.dateFieldsTimeZoneDefaultUTC):null})})},s.signatures.push({name:"featuresetbyassociation",min:2,max:6}),s.functions.groupby=function(n,r){return s.standardFunctionAsync(n,r,async(c,F,e)=>{if(N(e,3,3,n,r),!L(e[0]))throw new m(n,p.InvalidParameter,r);const t=await e[0].load(),a=[],u=[];let y=!1,l=[];if(P(e[1]))l.push(e[1]);else if(e[1]instanceof v)l.push(e[1]);else if(x(e[1]))l=e[1];else{if(!M(e[1]))throw new m(n,p.InvalidParameter,r);l=e[1].toArray()}for(const i of l)if(P(i)){const o=T.create(b(i),t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),f=pe(o)===!0?b(i):"%%%%FIELDNAME";a.push({name:f,expression:o}),f==="%%%%FIELDNAME"&&(y=!0)}else{if(!(i instanceof v))throw new m(n,p.InvalidParameter,r);{const o=i.hasField("name")?i.field("name"):"%%%%FIELDNAME",f=i.hasField("expression")?i.field("expression"):"";if(o==="%%%%FIELDNAME"&&(y=!0),!o)throw new m(n,p.InvalidParameter,r);a.push({name:o,expression:T.create(f||o,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)})}}if(l=[],P(e[2]))l.push(e[2]);else if(x(e[2]))l=e[2];else if(M(e[2]))l=e[2].toArray();else{if(!(e[2]instanceof v))throw new m(n,p.InvalidParameter,r);l.push(e[2])}for(const i of l){if(!(i instanceof v))throw new m(n,p.InvalidParameter,r);{const o=i.hasField("name")?i.field("name"):"",f=i.hasField("statistic")?i.field("statistic"):"",I=i.hasField("expression")?i.field("expression"):"";if(!o||!f||!I)throw new m(n,p.InvalidParameter,r);u.push({name:o,statistic:f.toLowerCase(),expression:T.create(I,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)})}}if(y){const i={};for(const f of t.fields)i[f.name.toLowerCase()]=1;for(const f of a)f.name!=="%%%%FIELDNAME"&&(i[f.name.toLowerCase()]=1);for(const f of u)f.name!=="%%%%FIELDNAME"&&(i[f.name.toLowerCase()]=1);let o=0;for(const f of a)if(f.name==="%%%%FIELDNAME"){for(;i["field_"+o.toString()]===1;)o++;i["field_"+o.toString()]=1,f.name="FIELD_"+o.toString()}}for(const i of a)await te(i.expression,s,n);for(const i of u)await te(i.expression,s,n);return e[0].groupby(a,u)})},s.signatures.push({name:"groupby",min:3,max:3}),s.functions.distinct=function(n,r){return s.standardFunctionAsync(n,r,async(c,F,e)=>{if(L(e[0])){N(e,2,2,n,r);const t=await e[0].load(),a=[];let u=[];if(P(e[1]))u.push(e[1]);else if(e[1]instanceof v)u.push(e[1]);else if(x(e[1]))u=e[1];else{if(!M(e[1]))throw new m(n,p.InvalidParameter,r);u=e[1].toArray()}let y=!1;for(const l of u)if(P(l)){const i=T.create(b(l),t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),o=pe(i)===!0?b(l):"%%%%FIELDNAME";a.push({name:o,expression:i}),o==="%%%%FIELDNAME"&&(y=!0)}else{if(!(l instanceof v))throw new m(n,p.InvalidParameter,r);{const i=l.hasField("name")?l.field("name"):"%%%%FIELDNAME",o=l.hasField("expression")?l.field("expression"):"";if(i==="%%%%FIELDNAME"&&(y=!0),!i)throw new m(n,p.InvalidParameter,r);a.push({name:i,expression:T.create(o||i,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)})}}if(y){const l={};for(const o of t.fields)l[o.name.toLowerCase()]=1;for(const o of a)o.name!=="%%%%FIELDNAME"&&(l[o.name.toLowerCase()]=1);let i=0;for(const o of a)if(o.name==="%%%%FIELDNAME"){for(;l["field_"+i.toString()]===1;)i++;l["field_"+i.toString()]=1,o.name="FIELD_"+i.toString()}}for(const l of a)await te(l.expression,s,n);return e[0].groupby(a,[])}return ze("distinct",c,F,e)})}),s.functions.getfeaturesetinfo=function(n,r){return s.standardFunctionAsync(n,r,async(c,F,e)=>{if(N(e,1,1,n,r),!L(e[0]))return null;const t=await e[0].getFeatureSetInfo();return t?v.convertObjectToArcadeDictionary({layerId:t.layerId,layerName:t.layerName,itemId:t.itemId,serviceLayerUrl:t.serviceLayerUrl,webMapLayerId:t.webMapLayerId??null,webMapLayerTitle:t.webMapLayerTitle??null,className:null,objectClassId:null},fe(n),!1,!1):null})},s.signatures.push({name:"getfeaturesetinfo",min:1,max:1})}export{mt as registerFunctions};