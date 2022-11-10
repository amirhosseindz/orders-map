import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro"
import CartCounter from "./CartCounter";

const cartIconStyle = {
    bottom: "0px",
    position: "absolute",
    left: 0,
    right: 0,
}

const iconStyle = {
    color: "#063773",
    fontSize: "15vw",
}

const CartIcon = ({totalCount}) => {
    return (
        <div style={cartIconStyle}>
            <CartCounter end={totalCount}/>
            <FontAwesomeIcon icon={solid("cart-shopping")} style={iconStyle}/>
        </div>
    )
}

export default CartIcon