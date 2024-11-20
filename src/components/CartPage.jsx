import CartItem from "./CartItem";
import styles from "./CartPage.module.css"
import { useEffect, useState } from "react";

export default function CartPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if(localStorage.cart) {
            setCart(JSON.parse(localStorage.cart));
        }
    }, [])
    
    const totalCartPrice = cart.reduce((total, product) => product.price * product.quantity + total, 0)

    return (
        <main className={styles.cartContainer}>
            <div className={styles.cartItemList}>
            <h2>Cart</h2>
                {
                    cart? cart.map(product => <CartItem key={product.id} imgSrc={product.image} itemName={product.title} cost={product.price} quantity={product.quantity}></CartItem>):
                    <p>Your cart is empty.</p>
                }
            </div>
            <div className={styles.checkoutContainer}>
                <p>Total: ${totalCartPrice.toFixed(2)}</p>
                <button className={styles.checkoutBtn}>Proceed to checkout</button>
            </div>
        </main>
    )
}