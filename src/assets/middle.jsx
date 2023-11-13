import { useEffect, useRef, useState } from "react";
import { _middle } from "../style";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import DropdownSelector from "./dropdownselector"; // Import your DropdownSelector component

export default () => {
    const mapref = useRef(null);
    const [selectedBasemap, setSelectedBasemap] = useState("osm");

useEffect(() => {
    const graphiclayer = new GraphicsLayer();
    const map = new Map({
        basemap: selectedBasemap, // Use the selected basemap
        layers: graphiclayer,
    });

    const view = new MapView({
        map: map,
        center: [29.95527, 31.21564],
        zoom: 9,
        container: mapref.current,
        constraints: {
        snapToZoom: false,
        },
    });

    const point = new Point({
        longitude: 29.95527,
        latitude: 31.21564,
    });

    const simpleMarkerSymbol = new SimpleMarkerSymbol({
        color: "red",
        style: "square",
    });

    const graphicpoint = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol,
    });

    graphiclayer.add(graphicpoint);

    return () => view && view.destroy();
  }, [selectedBasemap]); // Re-run the effect when the selected basemap changes

  const basemaps = ["streets", "satellite", "osm", "topo", "gray"]; // Add more basemaps as needed

const handleBasemapChange = (newBasemap) => {
    setSelectedBasemap(newBasemap);
};

return (
    <_middle>
    <DropdownSelector
        options={basemaps}
        selectedOption={selectedBasemap}
        onChange={handleBasemapChange}
    />
    <div className="map" ref={mapref}></div>
    </_middle>
);
};
