import Homepage from "./components/Homepage"
import App from "./App"
import ProductsPage from "./components/ProductsPage"
import Products from "./components/Products"
import CartPage from "./components/CartPage"

const routes = [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true, element: <Homepage />
                },
                {
                    path: "/products", element: <ProductsPage />,
                    children: [
                        {
                            index: true, element: <Products />
                        },
                        {
                            path: "/products/:category", element: <Products />
                        }
                    ]
                },
                {
                    path: "/cart", element: <CartPage />
                }
            ]
        }
    ]

export default routes