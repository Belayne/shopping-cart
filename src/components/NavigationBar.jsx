import { Link, useParams } from "react-router-dom"
import "./NavigationBar.css"
import CartButton from "./CartButton"

export default function NavigationBar() {
    const currenCategory = useParams().category;

    const categories = ["men", "women", "accessories"];
    return (
        <div className="navbar">
            <nav>
                <Link className="navLink brandText" to={"/"}>NovaCart</Link>
                {categories.map(
                    category => category == currenCategory? 
                    <Link className="navLink active" to={`/products/${category}`}>{category}</Link>
                    :<Link className="navLink" to={`/products/${category}`}>{category}</Link>)}
                <CartButton />
            </nav> 
        </div>
    )
}