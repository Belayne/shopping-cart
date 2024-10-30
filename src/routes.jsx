import Homepage from "./components/Homepage"
import App from "./App"

const routes = [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true, element: <Homepage />
                }
            ]
        }
    ]

export default routes