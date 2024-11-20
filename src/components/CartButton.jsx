import PropTypes from "prop-types";
import cartIcon from "../assets/cart_icon.svg";
import { Link } from "react-router-dom";
import "./CartButton.css"

export default function CartButton({numberOfItems = 0}) {
    return (
        <div className="cartButtonContainer">
            <Link to="/cart"><img src={cartIcon} alt="shopping cart icon" /></Link>
            <span className="numberOfItems">{numberOfItems}</span>
        </div>
    )
}

CartButton.propTypes = {
    numberOfItems: PropTypes.number
}