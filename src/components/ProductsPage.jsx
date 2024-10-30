import { Outlet } from "react-router-dom"
export default function Products({category = ""}) {

    return (
        <main className="productsPage">
            <Outlet />
        </main>
    )
}