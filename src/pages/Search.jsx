import React from 'react'
import { useLoaderData, useSearchParams } from 'react-router'
import ListPage from '../component/ListPage';

function Search() {
    const loaderData = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();

    const totalPage = Math.min(loaderData.total_pages, 100)

    const currentPage = loaderData.page;
    const query = searchParams.get('query')
    // console.log(query, 'query')
    const handlePageChange = (newPage) => {
        setSearchParams({page: newPage, query: query})

    }
    // console.log(loaderData)
  return (
    // <div>serarch</div>
    <ListPage title={`Search Content: ${query}`} handlePageChange={handlePageChange} loaderData={loaderData} currentPage={currentPage} totalPage={totalPage} />
  )
}

export default Search