import{l as u,bd as f,be as m,bf as b,bg as l,bh as p,bi as g,bj as w,bk as F}from"./index-17f5801a.js";function B({displayField:e,editFieldsInfo:i,fields:a,objectIdField:t,title:r},o){if(!a)return null;const s=L({editFieldsInfo:i,fields:a,objectIdField:t},o);if(!s.length)return null;const c=h({titleBase:r,fields:a,displayField:e}),d=N();return new u({title:c,content:d,fieldInfos:s})}const y=(e,i)=>i.visibleFieldNames?i.visibleFieldNames.has(e.name):F(e,i);function v(e,i){const a=e;return i&&(e=e.filter(t=>!i.includes(t.type))),e===a&&(e=e.slice()),e.sort(I),e}function I(e,i){return e.type==="oid"?-1:i.type==="oid"?1:n(e)?-1:n(i)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((i.alias||i.name).toLocaleLowerCase())}function L(e,i){const a=i==null?void 0:i.visibleFieldNames;return v(e.fields??[],(i==null?void 0:i.ignoreFieldTypes)||j).map(t=>new f({fieldName:t.name,isEditable:m(t,e),label:t.alias,format:C(t),visible:y(t,{...e,visibleFieldNames:a})}))}function C(e){switch(e.type){case"small-integer":case"integer":case"single":return new l({digitSeparator:!0,places:0});case"double":return new l({digitSeparator:!0,places:2});case"string":return b(e.name)?new l({digitSeparator:!0,places:0}):null;default:return null}}function N(){return[new p,new g]}function h(e){const i=w(e),{titleBase:a}=e;return i?`${a}: {${i.trim()}}`:a??""}function n(e){return(e.name&&e.name.toLowerCase())==="name"?!0:(e.alias&&e.alias.toLowerCase())==="name"}const j=["geometry","blob","raster","guid","xml"];export{B as p};