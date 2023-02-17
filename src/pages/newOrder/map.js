import * as React from "react";
import {useState} from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxLanguage from '@mapbox/mapbox-gl-language';

function MapboxMap({latLang, setLatLang}) {
  const [map, setMap] = useState();
  const mapNode = React.useRef(null);

  React.useEffect(() => {


    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;
    if (mapboxgl.getRTLTextPluginStatus() === 'unavailable') {
      mapboxgl.setRTLTextPlugin(
        'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
        null,
        true // Lazy load the plugin
      );
    }

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: latLang,
      zoom: 10,
    });


    mapboxMap.addControl(new MapboxLanguage({
      defaultLanguage: 'mul'
    }));
    setMap(mapboxMap);

    const marker = new mapboxgl.Marker({
      draggable: true
    })
      .setLngLat(latLang)
      .addTo(mapboxMap);

    function onDragEnd() {
      const lngLat = marker.getLngLat();
      setLatLang([lngLat.lng, lngLat.lat])
    }

    marker.on('dragend', onDragEnd);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <div ref={mapNode} style={{width: "100%", height: "100%"}}/>;
}

export default MapboxMap
