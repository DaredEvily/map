import{aU as m}from"./index-8edf265f.js";import{c}from"./query-22d59433.js";import{d as s}from"./FeatureSet-4ba9f962.js";import{b as e}from"./Query-474f3baf.js";async function S(r,o,t){const a=await p(r,o,t);return s.fromJSON(a)}async function p(r,o,t){const a=m(r),f={...t},n=e.from(o),{data:i}=await c(a,n,n.sourceSpatialReference,f);return i}export{p as a,S as s};