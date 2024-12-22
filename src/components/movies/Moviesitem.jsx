import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const Moviesitem = ({id, title, poster_path, release_date }) => {
  const navigate = useNavigate()

  return (
      <div className='bg-slate-900 rounded-xl p-2'>
        <img onClick={() => navigate(`/movie/${id}`)} className='rounded-md' src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`} alt={title} />
        <p className='line-clamp-1 font-bold py-1'>{title}</p>
        <p className='text-slate-600 text-[14px] font-bold'>{release_date}</p>
      </div>
  );
};

export default memo(Moviesitem);

