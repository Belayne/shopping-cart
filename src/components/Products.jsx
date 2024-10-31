import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Products.module.css"
import ProductCard from "./ProductCard";

const getProducts = (category) => {
    const [productData, setProductData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const URL = category? 'https://fakestoreapi.com/products/category/' + category
    :'https://fakestoreapi.com/products';

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch(URL);
                if(response.status >= 400) {
                    throw new Error(response.statusText);
                }
                else {
                    const data = await response.json();
                    setProductData(data);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false)
            }
        }
        fetchProductData();
    }, [URL])

    return {productData, error, loading}
} 

export default function Products() {
    const params = useParams();
    const category = params.category;
    const {productData, error, loading} = getProducts(category)

    if(loading) {
        return <p className={styles.loadingText}>Loading...</p>
    }

    if(error) {
        return <p>Error: {error}</p>
    }

    return (
        <>
        {productData.map(product => <ProductCard imgSrc = {product.image} title = {product.title} cost = {product.price}/>)}
        </>
    )

}