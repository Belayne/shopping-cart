import PropTypes from "prop-types";
import styles from "./CartItem.module.css";
import CartDeleteItemButton from "./CartDeleteItemButton";

export default function CartItem({id, imgSrc, itemName, quantity, cost, deleteItem}) {

    return (
        <article className={styles.cartItem}>
            <img src={imgSrc} alt={itemName} />
            <div>
                <h3>{itemName}</h3>
                <p>Price:    <span className={styles.bold}>${cost}</span></p>
                <p>Quantity: <span className={styles.bold}>{quantity}</span></p>
            </div>
            <CartDeleteItemButton id = {id} deleteItem={deleteItem}/>
        </article>
    )
}

CartItem.propTypes = {
    id: PropTypes.number,
    imgSrc: PropTypes.string,
    itemName: PropTypes.string,
    quantity: PropTypes.number,
    cost: PropTypes.number,
    deleteItem: PropTypes.func
} 