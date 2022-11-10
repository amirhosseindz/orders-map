import React, {useRef} from "react"
import {MapContainer, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import Canvas from "./Canvas"
import Germany from "./Germany"

const map = {
    zoom: 7,
    style: {
        height: "100%",
    },
    center: {
        lat: 51,
        lng: 10
    },
    scrollWheelZoom: false,
}

const Map = () => {
    map.ref = useRef()

    return (
        <MapContainer
            style={map.style}
            center={map.center}
            zoom={map.zoom}
            scrollWheelZoom={map.scrollWheelZoom}
            ref={map.ref}
            preferCanvas={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Germany/>

            <Canvas/>
        </MapContainer>
    )
}

export default Map
