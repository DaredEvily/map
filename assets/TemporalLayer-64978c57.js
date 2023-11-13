import{gr as I,b9 as T,aB as w,gs as h,f as t,ce as U,g as l,j as d,dH as p,aV as u,aR as y,dJ as E,fm as O}from"./index-8edf265f.js";const x=I()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});let r=class extends T(w){constructor(e){super(e),this.unit="milliseconds",this.value=0}toMilliseconds(){return h(this.value,this.unit,"milliseconds")}};t([U(x,{nonNullable:!0})],r.prototype,"unit",void 0),t([l({type:Number,json:{write:!0},nonNullable:!0})],r.prototype,"value",void 0),r=t([d("esri.TimeInterval")],r);const o=r;function c(i,e){return o.fromJSON({value:i,unit:e})}let n=class extends T(w){constructor(i){super(i),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(i,e){if(!e.timeExtent||!Array.isArray(e.timeExtent)||e.timeExtent.length!==2)return null;const s=new Date(e.timeExtent[0]),a=new Date(e.timeExtent[1]);return new p({start:s,end:a})}writeFullTimeExtent(i,e){(i==null?void 0:i.start)!=null&&i.end!=null?e.timeExtent=[i.start.getTime(),i.end.getTime()]:e.timeExtent=null}readInterval(i,e){return e.timeInterval&&e.timeIntervalUnits?c(e.timeInterval,e.timeIntervalUnits):e.defaultTimeInterval&&e.defaultTimeIntervalUnits?c(e.defaultTimeInterval,e.defaultTimeIntervalUnits):null}writeInterval(i,e){e.timeInterval=(i==null?void 0:i.toJSON().value)??null,e.timeIntervalUnits=(i==null?void 0:i.toJSON().unit)??null}};t([l({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],n.prototype,"cumulative",void 0),t([l({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],n.prototype,"endField",void 0),t([l({type:p,json:{write:{enabled:!0,allowNull:!0}}})],n.prototype,"fullTimeExtent",void 0),t([u("fullTimeExtent",["timeExtent"])],n.prototype,"readFullTimeExtent",null),t([y("fullTimeExtent")],n.prototype,"writeFullTimeExtent",null),t([l({type:Boolean,json:{write:!0}})],n.prototype,"hasLiveData",void 0),t([l({type:o,json:{write:{enabled:!0,allowNull:!0}}})],n.prototype,"interval",void 0),t([u("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],n.prototype,"readInterval",null),t([y("interval")],n.prototype,"writeInterval",null),t([l({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],n.prototype,"startField",void 0),t([l(E("timeReference",!0))],n.prototype,"timeZone",void 0),t([l({type:String,json:{write:{enabled:!0,allowNull:!0}}})],n.prototype,"trackIdField",void 0),t([l({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],n.prototype,"useTime",void 0),n=t([d("esri.layers.support.TimeInfo")],n);const g=n,N=i=>{let e=class extends i{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(s,a){const m=a.timeInfo.exportOptions;if(!m)return null;const v=m.timeOffset,f=x.fromJSON(m.timeOffsetUnits);return v&&f?new o({value:v,unit:f}):null}set timeInfo(s){O(s,this.fieldsIndex),this._set("timeInfo",s)}};return t([l({type:p,json:{write:!1}})],e.prototype,"timeExtent",void 0),t([l({type:o})],e.prototype,"timeOffset",void 0),t([u("service","timeOffset",["timeInfo.exportOptions"])],e.prototype,"readOffset",null),t([l({value:null,type:g,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],e.prototype,"timeInfo",null),t([l({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],e.prototype,"useViewTime",void 0),e=t([d("esri.layers.mixins.TemporalLayer")],e),e};export{N as a,g as d};
