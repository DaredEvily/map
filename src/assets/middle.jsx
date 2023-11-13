import { useEffect,useRef } from "react";
import { _middle } from "../style"
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";

export default ()=>{
    const mapref = useRef(null)
    useEffect(()=>{
        const graphiclayer = new GraphicsLayer ()
        const map = new Map({
            basemap :"osm",
            layers: graphiclayer,
        })
        const view = new MapView({
            map:map,
            center:[29.95527,31.21564],
            zoom:9,
            container: mapref.current,
            constraints:{
                snapToZoom:false,
            }
        })
        const point = new Point({
            longitude:29.95527,
            latitude:31.21564,
        })
        const simpleMarkerSymbol = new SimpleMarkerSymbol({
            color:'red',
            style:'square', 
        })
        const graphicpoint = new Graphic({
            geometry: point,
            symbol:simpleMarkerSymbol,
        })
        graphiclayer.add(graphicpoint)
        return()=> view && view.destroy()
    },[])

    return(
    <_middle>
        <div className="map" ref = {mapref}></div>
    </_middle>
    )
}