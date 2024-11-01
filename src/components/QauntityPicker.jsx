import "./QuantityPicker.css";
import PropTypes from "prop-types";

export default function QuantityPicker({quantity, plusButtonHandler, minusButtonHandler, inputHandler}) {

    function onFocus(e) {
        if(+e.target.value == 0) {
            e.target.value = "";
        }
    }
    return (
        <div className="quantityPicker">
            <button onClick={minusButtonHandler}>-</button>
            <input type="number" onFocus = {e => onFocus(e)} onChange={(e) => inputHandler(e)} value = {quantity} id="quantityInput" />
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