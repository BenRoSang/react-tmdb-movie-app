const token = import.meta.env.VITE_TMDB_KEY;

const popularMovieApi = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${token}`;
const trendingMovieApi = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${token}`;
const popularTVserieApi = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${token}`;
const trendingTVSeriesApi = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${token}`;
const genresMovieApi = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${token}`;
const genresSerieApi = `https://api.themoviedb.org/3/genre/tv/list?language=en&api_key=${token}`;

const genresMovieCountApi = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${token}&with_genres=`;
const genresSerieCountApi = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${token}&with_genres=`;

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

    if(!res.ok) throw new Error("Failed to fetch Movies!");
    return res.json();
}