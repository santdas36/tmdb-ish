const API_KEY = "ebc795444944ae46fa639cc55b79ded3";

const requests = {
	searchQuery: `/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
	fetchGenres: `/genre/tv/list?api_key=${API_KEY}&language=en-US`,
	fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
	fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
	fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}`,
};

export default requests;