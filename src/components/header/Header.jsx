import React from 'react'
import logo from '@/assets/img/logo (7).png'
import { BsBox2Fill } from "react-icons/bs";
import { AiFillCopy } from "react-icons/ai";
import { BiBookmarks } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const lang = [
    {
        label: 'Ing',
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
  return (
    <div className='container flex flex-wrap items-center justify-between py-4'>
        <div className='w-[112px] h-[36px]'>
            <img className='w-full h-full' src={logo} alt="" />
        </div>
        <ul className='flex w-[280px] flex-wrap justify-between'>
            <li className='flex flex-wrap flex-col items-center cursor-pointer'>
                <BsBox2Fill className='text-[20px]'/>
                <span>Afisha</span>
            </li>
            <li className='flex flex-wrap flex-col items-center cursor-pointer'>
                <AiFillCopy className='text-[20px]'/>
                <span>Seans</span>
            </li>
            <li className='flex flex-wrap flex-col items-center cursor-pointer'>
                <BiBookmarks className='text-[20px]'/>
                <span>Bilet</span>
            </li>
            <li className='flex flex-wrap flex-col items-center cursor-pointer'>
                <FiSearch className='text-[20px]'/>
                <span>Search</span>
            </li>
        </ul>
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