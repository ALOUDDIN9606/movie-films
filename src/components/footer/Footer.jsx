import React from 'react'
import img from '@/assets/img/EMBLEM.png'
import { FaGooglePlay, FaApple, FaInstagram   } from "react-icons/fa";
import { CiFacebook,CiYoutube  } from "react-icons/ci";

const Footer = () => {
    const handleButtonClick = () => {
        window.location.href = 'https://play.google.com/store';
    };

    const handleButtonClick2 = () => {
        window.location.href = 'https://apps.apple.com/us/app/movie-box-app/id1596072720';
    };

  return (
    <div className='py-12 container'>
        <div className=' bg-slate-900 grid grid-cols-4 gap-4 p-6 rounded-md'>
            <div className='flex flex-wrap flex-col justify-between gap-10'>
                <img className='w-[60px]' src={img} alt="" />
                <div className='flex flex-wrap flex-col gap-4'>
                    <button onClick={handleButtonClick} className="w-[180px] border flex gap-3 items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                        <FaGooglePlay className='text-red-600 text-[30px]'/>Google Play
                    </button>

                    <button onClick={handleButtonClick2} className="w-[180px] border flex gap-3 items-center justify-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                        <FaApple className='text-white text-[30px]'/> <span>App Store</span>
                    </button>
                </div>
            </div>
            <div className=''>
                <h2 className="text-lg font-semibold mb-4">О нас</h2>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">📄</span>
                    <a href="#" className="hover:underline">
                      Публичная оферта
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">✨</span>
                    <a href="#" className="text-red-500 hover:underline">
                      Реклама
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">❓</span>
                    <a href="#" className="hover:underline">
                      F.A.Q
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">📞</span>
                    <a href="#" className="hover:underline">
                      Контакты
                    </a>
                  </li>
                </ul>
            </div>
            <div className=''>
                <h2 className="text-lg font-semibold mb-4">Категории</h2>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">🎥</span>
                    <a href="#" className="hover:underline">
                      Кино
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">🎭</span>
                    <a href="#" className="hover:underline">
                      Театр
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">🎵</span>
                    <a href="#" className="hover:underline">
                      Концерты
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">🏀</span>
                    <a href="#" className="hover:underline">
                      Спорт
                    </a>
                  </li>
                </ul>
            </div>
            <div className='flex flex-wrap flex-col justify-between'>
                <div className='flex  flex-wrap flex-col gap-3'>
                    <p>Связаться с нами</p>
                    <ul>
                        <li>
                            <a className='text-red-600' href="#">+998 (95) 897-33-38</a>
                        </li>
                    </ul>
                </div>
                <div className='flex  flex-wrap flex-col gap-3'>
                    <p>Социальные сети</p>
                    <div className='text-red-800 text-[25px] flex  gap-4'>
                        <FaInstagram/>
                        <CiFacebook />
                        <CiYoutube />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer