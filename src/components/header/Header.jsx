import React, { useEffect, useState } from 'react'
import logo from '@/assets/img/logo (7).png'
import { BsBox2Fill } from "react-icons/bs";
import { AiFillCopy } from "react-icons/ai";
import { BiBookmarks } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';

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
]

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className='container flex flex-wrap items-center justify-between py-6'>
        <div onClick={() => navigate("/")} className='w-[112px] h-[36px] cursor-pointer'>
            <img className='w-full h-full' src={logo} alt="" />
        </div>
        <div className='flex w-[350px] flex-wrap justify-between'>
            <Link to={"/"} className="flex flex-wrap flex-col items-center text-red-500 font-bold hover:text-violet-600">
                <BsBox2Fill className='text-[20px]'/>
                <p className='text-[20px]'>Afisha</p>
            </Link>
            <Link to={"/"} className="flex flex-wrap flex-col items-center hover:text-red-500">
                <AiFillCopy className='text-[20px]'/>
                <p className='text-[20px]'>Seans</p>
            </Link>
            <Link to={"/"} className="flex flex-wrap flex-col items-center hover:text-red-500">
                <BiBookmarks className='text-[20px]'/>
                <p className='text-[20px]'>Bilet</p>
            </Link>
            <Link to={"/"} className="flex flex-wrap flex-col items-center hover:text-red-500">
                <FiSearch className='text-[20px]'/>
                <p className='text-[20px]'>Search</p>
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
  )
}

export default Header