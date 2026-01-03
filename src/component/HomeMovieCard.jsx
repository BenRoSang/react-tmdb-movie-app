import React from 'react'

function HomeMovieCard({movie}) {
  return (
    // step one
    <div className='group cursor-pointer w-full max-w-[200px]'>
        {/* step two Image container */}
        <div className='relative aspect-[2/3] overflow-hidden bg-slate-800 rounded-xl border border-slate-700/50 shadow-md transition-all duration-300 group-hover:shadow-blue-500/20 group-hover:border-blue-500/50'>
            {/* step three The Image */}
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.name} 
                loading="lazy" 
                className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110'
            />
        </div>
        {/* The 'Glass' Overlay: Only visible on hover */}
        {/* <div className='absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3'>
            <span className="text-[10px] font-bold bg-blue-600 px-2 py-1 rounded">
                VIEW DETAILS
            </span>
        </div> */}
        {/* step five Typography */}
        <div className='mt-3 space-y-1'>
            <h3 className="text-sm font-semibold text-slate-100 truncate group-hover:text-blue-400 transition-colors">
                {movie.title || movie.name}
            </h3>
            <div className="flex items-center justify-between text-[12px] text-slate-500">
                <span>
                    {/* {movie.release_date?.split('-')[0] || 'TBA'} */}
                    { movie.release_date || movie.first_air_date }
                </span>
                <span className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span> {movie.vote_average.toFixed(1)}
                </span>
            </div>
        </div>
    </div>
  )
}

export default HomeMovieCard