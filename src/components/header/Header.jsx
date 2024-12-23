import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { BiBookmarks } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import logo from '@/assets/img/logo (7).png';
import { BiFolderPlus } from "react-icons/bi";
const lang = [
    {
        label: 'Eng',
        value: 'en',
    },
    {
        label: 'Rus',
        value: 'ru',
    },
    {
        label: 'Uzb',
        value: 'uzb',
    }
];

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const getActiveClass = (path) => {
        return location.pathname === path ? 'text-red-500 font-bold' : 'hover:text-red-500';
    };

    return (
        <div className='container flex flex-wrap items-center justify-between py-6'>
            <div onClick={() => navigate("/")} className='w-[112px] h-[36px] cursor-pointer'>
                <img className='w-full h-full' src={logo} alt="" />
            </div>
            <div className='flex w-[350px] flex-wrap justify-between'>
                <Link to={"/"} className={`flex flex-wrap flex-col items-center ${getActiveClass("/")}`}>
                    <FaHome className='text-[24px]' />
                    <p className='text-[19px]'>Home</p>
                </Link>
                <Link to={"/movies"} className={`flex flex-wrap flex-col items-center ${getActiveClass("/movies")}`}>
                    <BiCategory className='text-[24px]' />
                    <p className='text-[19px]'>Movies</p>
                </Link>
                <Link to={"/latest"} className={`flex flex-wrap flex-col items-center ${getActiveClass("/latest")}`}>
                    <BiFolderPlus className='text-[24px]' />
                    <p className='text-[19px]'>Saved</p>
                </Link>
                <Link to={"/search"} className={`flex flex-wrap flex-col items-center ${getActiveClass("/search")}`}>
                    <FiSearch className='text-[24px]' />
                    <p className='text-[19px]'>Search</p>
                </Link>
            </div>
            <div className='flex gap-2 items-center'>
                <select className='h-full bg-slate-900 px-2 py-2 rounded-md text-white'>
                    {lang.map((item) => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                </select>
                <button className='w-[130px] bg-red-700 text-white py-3 rounded-xl'>Logout</button>
            </div>
        </div>
    );
};

export default Header;
