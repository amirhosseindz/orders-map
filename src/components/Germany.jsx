import React, {useEffect, useState} from "react";
import {GeoJSON} from "react-leaflet"

const geoJSON = {
    url: "https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/1_deutschland/4_niedrig.geo.json",
    style: {
        weight: 2,
        opacity: 1,
        color: "#063773",
        fillOpacity: 0.10,
        fillColor: "blue",
    }
}

const Germany = () => {
    const [geoJSONData, setGeoJSONData] = useState(null)

    useEffect(() => {
        if (!geoJSONData) {
            fetch(geoJSON.url)
                .then((resp) => resp.json())
                .then((data) => setGeoJSONData(data))
        }
    })

    return geoJSONData && (
        <GeoJSON data={geoJSONData} style={geoJSON.style}/>
    )
}

export default Germany