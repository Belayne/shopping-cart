import { Outlet, useOutletContext, useParams } from "react-router-dom"
import styles from "./ProductsPage.module.css";

export default function ProductPage() {
    const params = useParams();
    const handleCartQuantity = useOutletContext();

    const categoryName = params.category || "All Products";

    return (
        <main className="productsPage">
            <h1 className={styles.categoryText}>{categoryName}</h1>
            <Outlet context={handleCartQuantity}/>
        </main>
    )
}