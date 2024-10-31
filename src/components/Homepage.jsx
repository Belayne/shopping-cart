import { Link } from "react-router-dom"
import styles from "./Homepage.module.css"

export default function Homepage() {
    
    return (
        <main className={styles.homepage}>
            <h1 className={styles.heroText}>
                Discover Your Next Favorite Find
                Shop the Latest Trends Today!
            </h1>
            <Link className={styles.buttonLink} to="/products">SHOP</Link>
        </main>
    )
}