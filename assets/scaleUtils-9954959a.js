import{bo as u,bp as i,bq as c}from"./index-8edf265f.js";const e=96;function d(n,t){const r=t||n.extent,o=n.width,a=u(r==null?void 0:r.spatialReference);return r&&o?r.width/o*a*i*e:0}function b(n,t){return n/(u(t)*i*e)}function h(n,t,r){return f(n,t)&&s(n,r)}function f(n,t){return t===0||c(n,t)||n<t}function s(n,t){return t===0||c(n,t)||n>t}export{h as d,d as i,b as o};