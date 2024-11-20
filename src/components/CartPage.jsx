import CartItem from "./CartItem";
import styles from "./CartPage.module.css"
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function CartPage() {
    const [cart, setCart] = useState([]);
    const handleCartQuantity = useOutletContext();

    useEffect(() => {
        if(localStorage.cart) {
            setCart(JSON.parse(localStorage.cart));
        }
    }, [])
    
    const totalCartPrice = cart.reduce((total, product) => product.price * product.quantity + total, 0)

    function deleteItem(id) {
        const newCart = cart.filter(item => item.id != id);
        localStorage.cart = JSON.stringify(newCart);
        handleCartQuantity()
        setCart(newCart);
    }

    if(cart.length == 0) {
        return (<h2 className={styles.emptyCart}>Your cart is empty.</h2>)
    }

    return (
        <main className={styles.cartContainer}>
            <div className={styles.cartItemList}>
            <h2>Cart</h2>
                {
                    cart.map(product => <CartItem key={product.id} id={product.id} imgSrc={product.image} itemName={product.title} cost={product.price} quantity={product.quantity} deleteItem = {deleteItem}></CartItem>)
                }
            </div>
            <div className={styles.checkoutContainer}>
                <p>Total: ${totalCartPrice.toFixed(2)}</p>
                <button className={styles.checkoutBtn}>Proceed to checkout</button>
            </div>
        </main>
    )
}