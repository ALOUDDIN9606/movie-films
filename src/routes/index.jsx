import Category from "@/pages/category/Category"
import Details from "@/pages/details/Details"
import Home from "@/pages/home/Home"
import Latest from "@/pages/latest/Latest"
import Layout from "@/pages/layout/Layout"
import NotFoundPage from "@/pages/notFount/NotFount"
import { useState } from "react"
import { useRoutes } from "react-router-dom"


const Router = () => {

   const [favorites, setFavorites] = useState([]);

  const onAddToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  const onRemoveFromFavorites = (movie) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== movie.id));
  };

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
                    },
                    {
                        path: "/latest",
                        element: <Latest />
                    },
                    {
                        path: "*",
                        element: <NotFoundPage />
                    }
                ]}
        ])
    )
}

export default Router