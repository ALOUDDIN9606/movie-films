import { useFavorites } from "@/components/saved/FavoritesContext";
import React from "react";
import { FaRegBookmark, FaBookmark  } from "react-icons/fa";


const Latest = () => {
  // Like bosilgan kinolarni oladi
  const { favorites, removeFromFavorites } = useFavorites(); 
  return (
    <div className="py-6 container">
      {favorites.length === 0 ? (
        <div className="flex items-center justify-center min-h-[530px]">
          <div className="text-6xl text-gray-500">🙅‍♂️</div>
          <p className="text-lg text-gray-500">Sevimli filmlar hali yo'q.</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-5">
          {favorites.map((movie) => (
            <div key={movie.id} className="bg-slate-900 rounded-xl p-2 relative">
              <img
                className="rounded-md"
                src={`${import.meta.env.VITE_IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="line-clamp-1 font-bold py-1">{movie.title}</p>
                  <p className="text-slate-600 text-[14px] font-bold">{movie.release_date}</p>
                </div>

                <button
                  onClick={() => removeFromFavorites(movie)} 
                  className="text-white pr-2 rounded-full"
                >
                  <FaBookmark className="text-[22px] text-red-600"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Latest;
