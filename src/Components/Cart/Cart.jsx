import {useEffect, useState} from "react";
import CartIcon from "./CartIcon";
import Product from "./Product";

const lastOrderFetch = {
    url: "/last-order.json",
    intervalTime: 3000
}

const cartStyle = {
    width: "30%",
    height: "100%",
    float: "left",
    position: "relative",
    backgroundColor: "#fff",
    marginRight: "5px",
}

const Cart = () => {
    const [lastOrder, setLastOrder] = useState(null)
    const [cartTotalCount, setCartTotalCount] = useState(0)

    const lastOrderFetchPromise = async () => {
        const lastOrderFetchResponse = await fetch(lastOrderFetch.url)

        return await lastOrderFetchResponse.json()
    }

    useEffect(() => {
        const fetchLastOrderInterval = setInterval(() => (
            lastOrderFetchPromise().then((order) => {
                if (!lastOrder || lastOrder.totalCount !== order.totalCount) {
                    setLastOrder(order)
                }
            })
        ), lastOrderFetch.intervalTime)

        return () => {
            clearInterval(fetchLastOrderInterval)
        }
    })

    return (
        <div style={cartStyle}>
            {lastOrder && <Product order={lastOrder}
                                   onExited={(totalCount) => setCartTotalCount(totalCount)}
            />}

            <CartIcon totalCount={cartTotalCount}/>
        </div>
    )
}

export default Cart