import { Link } from "react-router-dom"
import "./NavigationBar.css"
import CartButton from "./CartButton"

export default function NavigationBar() {
    return (
        <div className="navbar">
            <nav>
                <Link className="navLink brandText" to={"/"}>NovaCart</Link>
                <Link className="navLink" to={"/"}>Men</Link>
                <Link className="navLink" to={"/"}>Women</Link>
                <Link className="navLink" to={"/"}>Accessories</Link>
                <CartButton />
            </nav>
            
        </div>
    )
}