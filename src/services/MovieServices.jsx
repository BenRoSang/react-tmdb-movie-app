const token = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const popularMovieApi = `${BASE_URL}movie/popular?language=en-US&page=1&api_key=${token}`;
const trendingMovieApi = `${BASE_URL}trending/movie/day?language=en-US&api_key=${token}`;
const popularTVserieApi = `${BASE_URL}tv/popular?language=en-US&page=1&api_key=${token}`;
const trendingTVSeriesApi = `${BASE_URL}trending/tv/day?language=en-US&api_key=${token}`;
const genresMovieApi = `${BASE_URL}genre/movie/list?language=en&api_key=${token}`;
const genresSerieApi = `${BASE_URL}genre/tv/list?language=en&api_key=${token}`;

const genresMovieCountApi = `${BASE_URL}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${token}&with_genres=`;
const genresSerieCountApi = `${BASE_URL}discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${token}&with_genres=`;
const multiMovieApi = `${BASE_URL}search/multi?&include_adult=false&language=en-US&api_key=${token}`;
const movieDetailAPI = `${BASE_URL}movie/`;

export const get_home_page_data = async() => {
    // const res = await fetch(popularMovieApi)
    // return res.json()
    const [popularMovies, trendingMovies, popularTVSeries, trendingTVSeries, genresMovie, genresSerie] = await Promise.all([
        fetch(popularMovieApi).then(res => res.json()),
        fetch(trendingMovieApi).then(res => res.json()),
        fetch(popularTVserieApi).then(res => res.json()),
        fetch(trendingTVSeriesApi).then(res => res.json()),
        fetch(genresMovieApi).then(res => res.json()),
        fetch(genresSerieApi).then(res => res.json()),
    ]);

    const topGenresMovie = genresMovie.genres.slice(0, 10)
    const topGenresSerie = genresSerie.genres.slice(0, 11)

    const getGenresData = async (genres, api) => {
        const countGenresMoviePromise = genres.map( async (genre) => {
            const res = await fetch(api + genre.id)
            const data = await res.json()
            return {
                id: genre.id,
                name: genre.name,
                total: data.total_results
            }
        })
        
        const genresMovieData = await Promise.all(countGenresMoviePromise)
        return genresMovieData
    }

    return {
        popularMovies: popularMovies.results.slice(0, 4),
        trendingMovies: trendingMovies.results.slice(0, 4),
        popularTVSeries: popularTVSeries.results.slice(0, 4),
        trendingTVSeries: trendingTVSeries.results.slice(0, 4),
        genresMovie: await getGenresData(topGenresMovie, genresMovieCountApi),
        genresSerie: await getGenresData(topGenresSerie, genresSerieCountApi),
    }
}


export const get_movies_by_page = async(page = 1) => {
    const res = await fetch(`${popularMovieApi}&page=${page}`)

    if(!res.ok) throw new Error("Failed to fetch Popular Movies!");
    return res.json();
}

export const get_serie_by_page = async (page = 1) => {
    const res = await fetch(`${popularTVserieApi}&page=${page}`)
    if(!res.ok) throw new Error("Failed to fetch Popular Series");
    return res.json()
}

export const get_data_by_search = async(query ,page = 1) => {
    const res = await fetch(`${multiMovieApi}&page=${page}&query=${query}`)

    if(!res.ok) throw new Error('Failed to fetch Search Movies')

    return res.json();
}

export const get_movie_detail = async(id) => {
    const res = await fetch(`${movieDetailAPI}${id}?api_key=${token}&append_to_response=credits%2Cvideos&language=en-US'`)
    console.log(res)
    if(!res.ok) return  {error : 'Failed to fetch data'}

    return res.json();
}