import { useParams } from "react-router-dom";
import "./Products.css"

export default function Products() {
    const params = useParams();

    const categoryName = params.category

    return (
        <>
        <h1 className="categoryText">{categoryName}</h1>
        </>
    )

}