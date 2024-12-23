import { request } from '@/api'
import Carousel from '@/components/carousel/Carousel'
import Movies from '@/components/movies/Movies'
import React, { memo, useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    request("/discover/movie")
        .then((res) => {
            setData(res.data)
        })
  }, [])

  return (
    <>
        <Carousel data={data}/>
        <Movies data={data}/>
    </>
  )
}

export default memo(Home)
