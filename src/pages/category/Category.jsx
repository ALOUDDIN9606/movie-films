import { request } from '@/api'
import Genre from '@/components/genre/Genre'
import Movies from '@/components/movies/Movies'
import React, { useEffect, useState } from 'react'
import Pagination from "@mui/material/Pagination";
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


const Category = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    request("/discover/movie", {
      params: {
        page,
        with_genres: selectedGenre.join(","),
      },
    }).then((res) => {
      setData(res.data);
    });
  }, [page, selectedGenre]);

  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    request("/genre/movie/list").then((res) => {
      setGenres(res.data.genres);
    });
  }, []);
    

  if (!data || !data.results) {
      return (
        <div className="flex items-center justify-center min-h-[500px]">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-t-transparent border-red-500 rounded-full animate-spin"></div>
            <p className="text-lg text-gray-500">Loading...</p>
          </div>
        </div>
      );
  }

  return (
    <div className='bg-black text-white mb-6'>
        <Genre data={genres} setSelectedGenre={setSelectedGenre} selectedGenre={selectedGenre}/>
        <Movies data={data}/>
        <div className="flex justify-center py-6">
          <Pagination
            page={page}
            onChange={handleChange}
            count={data?.total_pages <= 500 ? data?.total_pages : 500}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#fff", // Text color
                backgroundColor: "#1a1a1a", // Default button background
                border: "1px solid #ff4040", // Red border for buttons
                "&:hover": {
                  backgroundColor: "#ff4040", // Red background on hover
                  color: "#fff", // Keep text white
                },
              },
              "& .Mui-selected": {
                backgroundColor: "#ff4040", // Red background for selected page
                color: "#fff", // White text for selected page
                border: "1px solid #ff7373", // Slightly lighter border for the selected button
                "&:hover": {
                  backgroundColor: "#ff7373", // Even lighter red on hover
                },
              },
              "& .MuiPaginationItem-ellipsis": {
                color: "#ff7373", // Customize ellipsis color
              },
            }}
          />
        </div>
        <div className='flex justify-center'>
            <button
                onClick={() => navigate("/")}
                className="px-12 py-3 mt-3 flex items-center gap-3 justify-center bg-red-900 hover:bg-red-700 rounded-md"
                >
                <FaHome className="text-[20px]"/><span>Home</span>
            </button>
        </div>
    </div>
  )
}

export default Category