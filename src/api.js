const API_KEY = "ebc795444944ae46fa639cc55b79ded3";

const imageBase = "https://image.tmdb.org/t/p/original";
const requests = {
	searchQuery: `/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
	fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
	fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
	fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}`,
};
const fetchMovie = (id) => {
	return `/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
}

export {imageBase, fetchMovie};
export default requests;