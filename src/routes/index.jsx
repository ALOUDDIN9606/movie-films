import Category from "@/pages/category/Category"
import Details from "@/pages/details/Details"
import Home from "@/pages/home/Home"
import Latest from "@/pages/latest/Latest"
import Layout from "@/pages/layout/Layout"
import { useRoutes } from "react-router-dom"


const Router = () => {
    return (
        useRoutes([
            {
                path: "/",
                element: <Layout />,
                children: [
                    
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
                    },
                    {
                        path: "/movies",
                        element: <Category />
                    }
                ]}
        ])
    )
}

export default Router