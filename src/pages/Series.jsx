import React from 'react'
import { useLoaderData, useSearchParams } from 'react-router'
import ListPage from '../component/ListPage';

function Series() {
  const loaderData = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = loaderData.page
  const totalPage = Math.min(loaderData.total_pages, 100) //Limit total number of page from TMDB

  const handlePageChange = (newPage) => {
    setSearchParams({page : newPage})
    window.scrollTo(0, 0)
  }

  
  return (
    <ListPage title={'Popular Series'} loaderData={loaderData} currentPage={currentPage} totalPage={totalPage} handlePageChange={handlePageChange} />
  )
}

export default Series