import React, { memo } from 'react'

const Moviesitem = ({title, poster_path, release_date}) => {
  return (
    <div className='bg-slate-900 rounded-xl p-2'>
        <img className='rounded-md' src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`} alt="" />
        <p className='line-clamp-1 font-bold py-1'>{title}</p>
        <p className='text-slate-600 text-[14px] font-bold'>{release_date}</p>
    </div>
  )
}

export default memo(Moviesitem)






