import CartItem from "./CartItem";
import styles from "./CartPage.module.css"

export default function CartPage() {

    const cart = localStorage.cart? JSON.parse(localStorage.cart): "";

    return (
        <main className={styles.cartContainer}>
            <h2>Cart</h2>
            {cart? cart.map(product => <CartItem imgSrc={product.image} itemName={product.title} cost={product.price} quantity={product.quantity}></CartItem>): <p>Your cart is empty.</p>}
            <button>Proceed to checkout</button>
        </main>
    )
}