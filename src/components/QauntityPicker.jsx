import "./QuantityPicker.css";
import PropTypes from "prop-types";

export default function QuantityPicker({quantity, plusButtonHandler, minusButtonHandler, inputHandler}) {

    const stringQuantity = quantity.toString()

    return (
        <div className="quantityPicker">
            <button onClick={minusButtonHandler}>-</button>
            <input type="text" inputMode="numeric" onChange={(e) => inputHandler(e)} value = {stringQuantity} id="quantityInput" />
            <button onClick={plusButtonHandler}>+</button>
        </div>
    )
}

QuantityPicker.propTypes = {
    quantity: PropTypes.number,
    plusButtonHandler: PropTypes.func,
    inputHandler: PropTypes.func,
    minusButtonHandler: PropTypes.func,
}