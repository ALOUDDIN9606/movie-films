import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

// Context API yordamida kontekstdan (global holatni boshqarish uchun) ma'lumot olish uchun ishlatiladigan funcsiya
export const useFavorites = () => {
  return useContext(FavoritesContext);
};

// Context-Provider qilingan componentni saxlaydigan funksiya
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Like kinolarni saxlaydigan funksiya
  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((item) => item.id === movie.id)) {
        const updatedFavorites = [...prevFavorites, movie];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Localni yangilaydi
        return updatedFavorites;
      }
      return prevFavorites; 
    });
  };

  // Like bosilgan kinolarni uchirish uchun funcsiya
  const removeFromFavorites = (movie) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((item) => item.id !== movie.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
