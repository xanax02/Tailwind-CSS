const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movies/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/dicover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movies?api_key=${API_KEY}&with_genres=35`
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movies?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMytery: {
        title: "Mystery",
        url: `/discover/movies?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi: {
        title: "Sci-Fi",
        url: `/discover/movies?api_key=${API_KEY}&with_genres=878`
    },
    fetchWetern: {
        title: "Western",
        url: `/discover/movies?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation: {
        title: "Animantion",
        url: `/discover/movies?api_key=${API_KEY}&with_genres=16`
    },
    fetchTv: {
        title: "TV Movies",
        url: `/discover/movies?api_key=${API_KEY}&with_genres=10770`
    }
}