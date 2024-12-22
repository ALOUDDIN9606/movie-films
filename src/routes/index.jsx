import Details from "@/pages/details/Details"
import Home from "@/pages/home/Home"
import Latest from "@/pages/latest/Latest"
import { useRoutes } from "react-router-dom"


const Router = () => {
    return (
        useRoutes([
            {
                path: "/",
                element: <Home />
            },
            {
                path: "latest",
                element: <Latest />
            },
            {
              path: '/movie/:id',
              element: <Details/>
            }
        ])
    )
}

export default Router