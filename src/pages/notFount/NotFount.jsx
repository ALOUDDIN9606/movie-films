// 404Page.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center flex-col min-h-[600px] text-white">
      <h1 className="text-8xl font-extrabold text-red-800 mb-6 animate-pulse">404</h1>
      <p className="text-2xl mb-8">Siz qidirayotgan sahifa mavjud emas ✖️</p>
      <button
        onClick={() => navigate("/")}
        className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-red-600 transition-all duration-300"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
