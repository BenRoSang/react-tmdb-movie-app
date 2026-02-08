import { get_movies_by_page, get_home_page_data, get_serie_by_page, get_data_by_search, get_movie_detail } from "../services/MovieServices";

export const home_page_loader = async () => {
    // return data from here
    return { homePageData: await get_home_page_data() };
}

//Movie page data loader
export const movie_loader = async ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || '1';
    return await get_movies_by_page(page)
}

//Seire page data loader
export const serie_loader = async({request}) => {
    const url = new URL(request.url)
    const page = url.searchParams.get('page') || '1';
    return await get_serie_by_page(page)
}

//Multi Search Loader
export const search_loader = async({request}) => {
    const url = new URL(request.url)
    const query = url.searchParams.get('query');
    const page = url.searchParams.get('page') || '1';
    console.log(query)
    return await get_data_by_search(query, page)
}

//Movie Detail Loader
export const detail_loader = async(id) => {
    console.log(id)
    return await get_movie_detail(id);
}
