import { Link, useParams } from "react-router-dom"
import "./NavigationBar.css"
import CartButton from "./CartButton"
import PropTypes from "prop-types";

const CATEGORIES = ["men's clothing", "women's clothing", "jewelery"];


export default function NavigationBar({numberOfItems = 0}) {
    const currenCategory = useParams().category;

    return (
        <div className="navbar">
            <nav>
                <Link className="navLink brandText" to={"/"}>NovaCart</Link>
                {CATEGORIES.map(
                    category => category == currenCategory? 
                    <Link key={category} className="navLink active" to={`/products/${category}`}>{category}</Link>
                    :<Link key={category} className="navLink" to={`/products/${category}`}>{category}</Link>)}
                <CartButton numberOfItems={numberOfItems}/>
            </nav> 
        </div>
    )
}

NavigationBar.propTypes = {
    numberOfItems: PropTypes.number
}