import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Register } from "./pages/Register";
import { Stock } from "./pages/Stock";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/register", element: <Register /> },
            { path: "/stock", element: <Stock /> }
        ]
    }
])

export default router;