import {useEffect, useState, useReducer} from "react";
import CountUp from "react-countup";

const counterStyle = {
    position: "absolute",
    left: 0,
    right: "-6%",
    bottom: "59%",
    color: "#fff",
    fontSize: "3vw",
    fontWeight: 600,
}

const CartCounter = ({end}) => {
    const [lastEnd, setLastEnd] = useState(0), [start, setStart] = useReducer(() => {
        const value = lastEnd
        setLastEnd(end)
        return value
    }, 0)

    useEffect(() => {
        if (end) setStart()
    }, [end])

    return (
        <CountUp start={start} end={end} style={counterStyle} />
    )
}

export default CartCounter