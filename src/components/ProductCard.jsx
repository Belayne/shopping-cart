import { useState } from "react"
import "./ProductCard.css"
import PropTypes, { func } from "prop-types";
import QuantityPicker from "./QauntityPicker";

export default function ProductCard({imgSrc, title, cost}) {
    const [quantity, setQuantity] = useState(0);

    function handleCartClick() {
        return 
    }

    function plusButtonHandler() {
        setQuantity(quantity => quantity + 1);
    }

    function minusButtonHandler() {
        if(quantity > 0)
            setQuantity(quantity => quantity - 1);
    }

    function inputHandler(e) {
        let inputQuantity = +e.target.value;
        inputQuantity = inputQuantity > 0? inputQuantity: 0;

        setQuantity(inputQuantity)
    }

    return (
        <article className="productCard">
            <h2 className="cardTitle">{title}</h2>
            <img src={imgSrc} alt={title} />
            <QuantityPicker quantity = {quantity} 
                            minusButtonHandler = {minusButtonHandler}
                            plusButtonHandler= {plusButtonHandler}
                            inputHandler={inputHandler} />
            <p>{"$" + cost}</p>
            <button onClick={handleCartClick}>Add to cart</button>
        </article>
    )
}

ProductCard.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    cost: PropTypes.number
}