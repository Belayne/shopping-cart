import PropTypes from "prop-types";
import styles from "./CartItem.module.css";

export default function CartItem({imgSrc, itemName, quantity, cost}) {

    return (
        <article className={styles.cartItem}>
            <img src={imgSrc} alt={itemName} />
            <div>
                <h3>{itemName}</h3>
                <p>Price:    <span className={styles.bold}>${cost}</span></p>
                <p>Quantity: <span className={styles.bold}>{quantity}</span></p>
            </div>
            <button>Remove</button>
        </article>
    )
}

CartItem.propTypes = {
    imgSrc: PropTypes.string,
    itemName: PropTypes.string,
    quantity: PropTypes.number,
    cost: PropTypes.number
} 