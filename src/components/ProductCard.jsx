import { useState } from "react"
import "./ProductCard.css"

export default function ProductCard({imgSrc, title, cost}) {
    const quantity = useState(0);

    function handleCartClick() {
        return 
    }

    return (
        <article className="productCard">
            <h2 className="cardTitle">{title}</h2>
            <img src={imgSrc} alt={title} />
            {/*BUTTON- QUANTITY BUTTON+ COMPONENT*/}
            <p>{"$" + cost}</p>
            <button onClick={handleCartClick}>Add to cart</button>
        </article>
    )
}