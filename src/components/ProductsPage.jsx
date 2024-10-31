import { Outlet, useParams } from "react-router-dom"
import styles from "./ProductsPage.module.css";

export default function Products() {
    const params = useParams();

    const categoryName = params.category || "All Products";

    return (
        <main className="productsPage">
            <h1 className={styles.categoryText}>{categoryName}</h1>
            <Outlet />
        </main>
    )
}