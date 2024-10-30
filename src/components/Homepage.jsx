import { Link } from "react-router-dom"
import "./Homepage.css"

export default function Homepage() {
    
    return (
        <main className="homepage">
            <h1 className="heroText">
                Discover Your Next Favorite Find
                Shop the Latest Trends Today!
            </h1>
            <Link className="buttonLink" to="/">SHOP</Link>
        </main>
    )
}