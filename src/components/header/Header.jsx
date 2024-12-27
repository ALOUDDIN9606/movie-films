import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { BiCategory, BiFolderPlus } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BsMoon, BsSun } from "react-icons/bs";
import logo from '@/assets/img/logo (7).png';
import { useDarkMode } from '../dark/DarkModeProvider';

const lang = [
    { label: 'Eng', value: 'en' },
    { label: 'Rus', value: 'ru' },
    { label: 'Uzb', value: 'uzb' },
];

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const getActiveClass = (path) => {
        return location.pathname === path ? 'text-red-500 font-bold' : 'hover:text-red-500';
    };

    return (
        <div className="bg-white dark:bg-black text-black dark:text-white">
            <div className="container flex flex-wrap items-center justify-between py-6 lg:flex-nowrap">
                {/* Logo Section */}
                <div onClick={() => navigate("/")} className="w-[22%] cursor-pointer lg:w-auto">
                    <img className="w-[112px] h-[36px]" src={logo} alt="Logo" />
                </div>

                {/* Navigation Section */}
                <div className="hidden lg:flex w-[30%] justify-between">
                    <Link to={"/"} className={`flex flex-col items-center ${getActiveClass("/")}`}>
                        <FaHome className="text-[24px]" />
                        <p className="text-[19px]">Home</p>
                    </Link>
                    <Link to={"/movies"} className={`flex flex-col items-center ${getActiveClass("/movies")}`}>
                        <BiCategory className="text-[24px]" />
                        <p className="text-[19px]">Movies</p>
                    </Link>
                    <Link to={"/latest"} className={`flex flex-col items-center ${getActiveClass("/latest")}`}>
                        <BiFolderPlus className="text-[24px]" />
                        <p className="text-[19px]">Saved</p>
                    </Link>
                    <Link to={"/search"} className={`flex flex-col items-center ${getActiveClass("/search")}`}>
                        <FiSearch className="text-[24px]" />
                        <p className="text-[19px]">Search</p>
                    </Link>
                </div>

                {/* Dark Mode, Language, and Logout Section */}
                <div className="flex w-[21%] items-center justify-between">
                    <button
                        onClick={toggleDarkMode}
                        className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                        title={isDarkMode ? "Light Mode" : "Dark Mode"}
                    >
                        {isDarkMode ? <BsSun className="text-[20px]" /> : <BsMoon className="text-[20px]" />}
                    </button>
                    <select className="h-full px-2 py-2 rounded-md bg-white dark:bg-slate-900 border text-black dark:text-white">
                        {lang.map((item) => (
                            <option key={item.value} value={item.value}>{item.label}</option>
                        ))}
                    </select>
                    <button onClick={() => navigate("/login")} className="w-[130px] bg-red-700 text-white py-3 rounded-xl">
                        Logout
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Section */}
            <div className="lg:hidden z-50 fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 flex justify-around py-3">
                <Link to={"/"} className={`flex flex-col items-center ${getActiveClass("/")}`}>
                    <FaHome className="text-[24px]" />
                    <p className="text-[12px]">Home</p>
                </Link>
                <Link to={"/movies"} className={`flex flex-col items-center ${getActiveClass("/movies")}`}>
                    <BiCategory className="text-[24px]" />
                    <p className="text-[12px]">Movies</p>
                </Link>
                <Link to={"/latest"} className={`flex flex-col items-center ${getActiveClass("/latest")}`}>
                    <BiFolderPlus className="text-[24px]" />
                    <p className="text-[12px]">Saved</p>
                </Link>
                <Link to={"/search"} className={`flex flex-col items-center ${getActiveClass("/search")}`}>
                    <FiSearch className="text-[24px]" />
                    <p className="text-[12px]">Search</p>
                </Link>
            </div>
        </div>
    );
};

export default Header;
