import {useEffect, useRef, useState} from "react"
import {Transition} from "react-transition-group"

const productTransitionTime = 1300
const product = {
    transitionStyles: {
        entering: {opacity: 0},
        entered: {opacity: 1},
        exiting: {opacity: 1, top: "0%", transform: "rotate(0deg)"},
        exited: {opacity: 0, top: "100%", transform: "rotate(90deg)"},
    },
    style: {
        transition: `all ${productTransitionTime}ms ease-in-out`,
        width: "20vw",
        marginLeft: "auto",
        marginRight: "auto",
        position: "absolute",
        left: 0,
        right: 0,
        top: "0%",
        transform: "rotate(0deg)",
        opacity: 0
    }
}

const Product = ({url, name, onExited}) => {
    const [productIn, setProductIn] = useState(false)
    const productRef = useRef(null)

    useEffect(() => {
        if (url) {
            setProductIn(true);
        }
    }, [url])

    return (
        <Transition nodeRef={productRef}
                    in={productIn}
                    timeout={productTransitionTime}
                    onEntered={() => setProductIn(false)}
                    onExited={onExited}
        >
            {(state) => (
                <img ref={productRef}
                     src={url}
                     alt={name}
                     style={{
                         ...product.style,
                         ...product.transitionStyles[state]
                     }}
                />
            )}
        </Transition>
    )
}

export default Product