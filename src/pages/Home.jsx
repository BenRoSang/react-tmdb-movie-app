import React from 'react'
import { useLoaderData } from 'react-router'
import HomeMovieCard  from '../component/HomeMovieCard'
import GenreSidebar from '../component/GenreSidebar';

function Home() {
  const {homePageData} = useLoaderData();
  const movieData = [
    {
      name: 'Trending Movies',
      link: 'View Link Here',
      data: homePageData.trendingMovies
    },
    {
      name: 'Trending TV Series',
      link: 'View Link Here',
      data: homePageData.trendingTVSeries
    },
    {
      name: 'Popular Movies',
      link: 'View Link Here',
      data: homePageData.popularMovies
    },
    {
      name: 'Popular TV Series',
      link: 'View Link Here',
      data: homePageData.trendingMovies
    },
  ]

  console.log(homePageData)

  return (
    <div className='flex flex-row justify-evenly'>
        <div className='flex-6 text-center'>
          {
            movieData.map((data) => {
              return (
                <div key={data.name} className='movie-section mb-10'>
                  <div className='flex justify-between'>
                    <span className='text-2xl'>{data.name}</span>
                    <button className='px-3 py-2 rounded-2xl border bg-amber-400 hover:bg-amber-600'>View All</button>
                  </div>
                  <div className='flex justify-between mt-3'>
                    {
                      data.data.map((movie) => ( <HomeMovieCard key={movie.id} movie={movie} /> ))
                    }
                  </div>
                </div>
              )
            })
          }
          
        </div>
        <div className='flex-2 ml-4 text-center mt-14'>
            <GenreSidebar genresMovie={homePageData.genresMovie} genresSerie={homePageData.genresSerie} />
        </div>
    </div>
  )
}

export default Home
