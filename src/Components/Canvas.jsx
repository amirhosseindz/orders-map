import {useEffect} from "react";
import L from "leaflet"
import {useMap} from "react-leaflet"
import "leaflet-canvas-markers";

const ordersFetch = {
    url: "/orders.json",
    intervalTime: 1000
}

const markerStyle = {
    radius: 10,
    fillColor: "blue",
    fillOpacity: 0,
    color: "#063773",
    weight: 0.5,
}

const Canvas = () => {
    const map = useMap();

    const ordersFetchPromise = async () => {
        const ordersFetchResponse = await fetch(ordersFetch.url)

        return await ordersFetchResponse.json()
    }

    useEffect(() => {
        const markers = {}
        const addOrUpdateMarker = (index, name, opacity, position) => {
            markerStyle.fillOpacity = opacity

            if (markers.hasOwnProperty(index)) {
                markers[index].setStyle(markerStyle)
            } else {
                markers[index] = L.circleMarker(
                    L.latLng(position.lat, position.lng), markerStyle
                ).bindPopup(name).addTo(map)
            }
        }

        const fetchOrdersInterval = setInterval(() => (
            ordersFetchPromise().then((orders) =>
                orders.forEach((order) =>
                    addOrUpdateMarker(order.zipcode, order.name, order.orderCount / order.totalCount, order.position)
                )
            )
        ), ordersFetch.intervalTime)

        return () => {
            clearInterval(fetchOrdersInterval)
        }
    }, [map])

    return null;
}

export default Canvas