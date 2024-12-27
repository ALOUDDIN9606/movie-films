import { request } from '@/api'
import Genre from '@/components/genre/Genre'
import Movies from '@/components/movies/Movies'
import React, { useEffect, useState } from 'react'
import Pagination from "@mui/material/Pagination";
import { useLocation, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


const Category = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(location.state?.page || 1);  // Sahifa raqami
  const [genres, setGenres] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(location.state?.selectedGenre || []);
  const [scrollPosition, setScrollPosition] = useState(location.state?.scrollPosition || 0);  // Scroll pozitsiyasi

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

  useEffect(() => {
    request("/genre/movie/list").then((res) => {
      setGenres(res.data.genres);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, scrollPosition); // Scrollni saqlash
  }, [scrollPosition]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleMovieClick = (id) => {
    const currentScrollPosition = window.scrollY;
    setScrollPosition(currentScrollPosition);
    navigate(`/details/${id}`, {
      state: { scrollPosition: currentScrollPosition, page, selectedGenre }
    });
  };

    

  if (!data || !data.results) {
      return (
        <div className="flex items-center justify-center min-h-[500px] bg-white dark:bg-black text-white dark:text-white">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-t-transparent border-red-500 rounded-full animate-spin"></div>
            <p className="text-lg text-gray-500">Loading...</p>
          </div>
        </div>
      );
  }

  return (
    <div className='pb-6 bg-white dark:bg-black text-white dark:text-white'>
        <Genre data={genres} setSelectedGenre={setSelectedGenre} selectedGenre={selectedGenre}/>
        <Movies data={data} onMovieClick={handleMovieClick}/>
        <div className="flex justify-center py-6">
        <Pagination
          page={page}
          onChange={handleChange}
          count={data?.total_pages <= 500 ? data?.total_pages : 500}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#fff",
              backgroundColor: "#2c2c2c", // Dark gray background
              border: "1px solid #444", // Soft border color
              borderRadius: "8px", // Rounded corners for a smoother look
              padding: "8px 16px", // Padding to make it more spacious
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
              transition: "background-color 0.3s, transform 0.2s", // Smooth transition for hover effects
              "&:hover": {
                backgroundColor: "#ff4040", // Red background on hover
                color: "#fff", 
                transform: "scale(1.1)", // Slight zoom effect on hover
              },
            },
            "& .Mui-selected": {
              backgroundColor: "#ff4040", 
              color: "#fff", 
              border: "1px solid #ff7373", 
              boxShadow: "0px 0px 10px rgba(255, 64, 64, 0.6)", // Glow effect for selected item
              "&:hover": {
                backgroundColor: "#ff7373", // Soft red on hover
              },
            },
            "& .MuiPaginationItem-ellipsis": {
              color: "#ff7373", // Color for ellipsis (the "..." separator)
              fontWeight: "bold", // Make ellipsis more prominent
            },
            "& .MuiPaginationItem-text": {
              fontSize: "14px", // Adjust font size for better readability
            },
          }}
        />

        </div>
        <div className='flex justify-center '>
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