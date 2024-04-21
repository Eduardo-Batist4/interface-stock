import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Register } from "./pages/Register";
import { Stock } from "./pages/Stock";
import { Output } from "./pages/Output";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/register", element: <Register /> },
            { path: "/output", element: <Output /> },
            { path: "/stock", element: <Stock /> }
        ]
    }
])

export default router;