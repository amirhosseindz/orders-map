import CountUp from 'react-countup';

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
    return (
        <CountUp end={end} style={counterStyle} />
    )
}

export default CartCounter