import React from 'react'
import HomeMovieCard from './HomeMovieCard'

function ListPage({currentPage, totalPage, handlePageChange, loaderData, title}) {
  return (
    <div className='space-y-10'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <span>Page {currentPage} of {totalPage}</span>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center'>
        {
          loaderData.results.map((movie) => ( movie.backdrop_path || movie.poster_path ? <HomeMovieCard key={movie.id} movie={movie} /> : '' ))
        }
      </div>
      <div className='flex justify-center items-center gap-4 py-10'>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className='px-4 py-2 bg-slate-800 rounded-lg disabled:opacity-50 hover:text-white hover:bg-blue-700 transition-colors'
        >Previous</button>

        <span className="text-sm font-medium">
          Page <span className="text-blue-500">{currentPage}</span> of {totalPage}
        </span>

        <button
          disabled={currentPage === totalPage}
          onClick={() => handlePageChange(currentPage + 1)}
          className='px-4 py-2 bg-slate-800 rounded-lg disabled:opacity-50 hover:text-white hover:bg-blue-700 transition-colors'
        >Next</button>
      </div>
    </div>
  )
}

export default ListPage