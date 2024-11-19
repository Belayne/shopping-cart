import { useState } from "react"
import "./ProductCard.css"
import PropTypes, { func } from "prop-types";
import QuantityPicker from "./QauntityPicker";
import { useOutletContext } from "react-router-dom";

const MAX_QUANTITY = 100;

export default function ProductCard({imgSrc, title, cost, productID, handleAddCartClick}) {
    const [quantity, setQuantity] = useState(0);
    
    function plusButtonHandler() {
        if(quantity < MAX_QUANTITY){
            setQuantity(quantity => quantity + 1);
        }
    }

    function minusButtonHandler() {
        if(quantity > 0){
            setQuantity(quantity => quantity - 1);
        }
    }

    function inputHandler(e) {
        let trimmedQuantity = e.target.value.replace(/^0+/, "");
        let inputQuantity = trimmedQuantity? Number.parseInt(trimmedQuantity, 10): 0;

        inputQuantity = inputQuantity < 0? 0:
                        inputQuantity > MAX_QUANTITY? MAX_QUANTITY: inputQuantity;

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
            <button className="addToCartBtn" onClick={() => handleAddCartClick(productID, quantity)}>Add to cart</button>
        </article>
    )
}

ProductCard.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    cost: PropTypes.number,
    handleAddCartClick: PropTypes.func
}