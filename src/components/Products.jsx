import { useParams } from "react-router-dom";
import { useState } from "react";

import "./Products.css"

export default function Products() {
    const params = useParams();
    const loading = useState(true);
    const error = useState(null);
    const data = useState(null);

    const category = params.category;

    if(loading) {
        return <p className="loadingText">Loading...</p>
    }

}