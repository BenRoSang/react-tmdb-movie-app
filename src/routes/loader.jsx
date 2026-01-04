import { get_movies_by_page, get_home_page_data, get_serie_by_page } from "../services/MovieServices";

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
