import { createBrowserRouter } from "react-router-dom"
// import Home from "./pages/Home"
import Quiz from "./pages/Quiz"

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Home />
    // },
    {
        path: "/",
        element: <Quiz />
    }
])

export default router