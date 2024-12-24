import React, { memo, useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "@/components/saved/FavoritesContext";
import { FaRegBookmark, FaBookmark  } from "react-icons/fa";

const Moviesitem = ({ id, title, poster_path, release_date }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isMovieFavorite = favorites.some((movie) => movie.id === id);
    setIsFavorite(isMovieFavorite);
  }, [favorites, id]);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites({ id });
    } else {
      addToFavorites({ id, title, poster_path, release_date });
    }
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="bg-slate-900 rounded-xl p-2 min-h-[500px]">
      <img
        className="rounded-md cursor-pointer"
        src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
        alt={title}
        onClick={() => navigate(`/movie/${id}`)}
      />
      <div className="flex items-center justify-between py-2">
        <div>
          <p className="line-clamp-1 font-bold">{title}</p>
          <p className="text-slate-600 text-[14px] font-bold">{release_date}</p>
        </div>
        <button onClick={toggleFavorite}>
          {isFavorite ? (
            <FaBookmark className="text-red-500 text-[25px]" />
          ) : (
            <FaRegBookmark className="text-gray-400 text-[25px]" />
          )}
        </button>
      </div>
    </div>
  );
};

export default memo(Moviesitem);
