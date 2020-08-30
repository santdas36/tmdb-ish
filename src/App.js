import React, { useState, useEffect } from "react";
import Header from "./Header";
import FeaturedMovie from "./FeaturedMovie";
import List from "./List";
import BigList from "./BigList";
import "./App.css";
import axios from './axios';
import requests, {imageBase, fetchMovie, fetchTV} from './api';

function App() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState([]);
  const [featTitle, setFeatTitle] = useState("Today's Featured Film");
  const [truncLine, setTruncLine] = useState(2);
  const [videoId, setVideoId] = useState('');
  const [movieId, setMovieId] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

	const getMovieInfo = (movieInfo) => {
		axios.get(fetchMovie(movieInfo)).then((response) => {
			setFeaturedMovie(response.data);
			let videos = response.data.videos.results;
			let vidId = videos[0].key;
			setVideoId(vidId);
		}).catch((err) => console.log(err));	
	}
	const getTVInfo = (movieInfo) => {
		axios.get(fetchTV(movieInfo)).then((response) => {
			setFeaturedMovie(response.data);
			let videos = response.data.videos.results;
			let vidId = videos[0].key;
			setVideoId(vidId);
		}).catch((err) => console.log(err));	
	}

	useEffect(() => {
		axios.get(requests.fetchTopRatedMovies).then((response) => {
			let tempMov = response.data.results;
			setTopRatedMovies(tempMov);
			let getFeatured = tempMov[Math.floor(Math.random() * tempMov.length)].id;
			getMovieInfo(getFeatured);
			setFeatTitle("Today's Featured Film");
		})
	}, []);

	useEffect(() => {
		if(movieId.media_type === 'movie') {
			getMovieInfo(movieId.id);
			setTruncLine(2);
			setFeatTitle('Movie');
		}
		if(movieId.media_type === 'tv') {
			getTVInfo(movieId.id);
			setTruncLine(2);
			setFeatTitle('Series');
		}
		if(!movieId.media_type) {
			getMovieInfo(movieId.id);
			setTruncLine(2);
			setFeatTitle('Movie');
		}
		setTimeout(() => {window.scrollTo(0, 0)}, 100);
	}, [movieId]);

  var overlayStyle = {
	backgroundImage: `url(${imageBase}${featuredMovie.backdrop_path || featuredMovie.poster_path})`,
	backgroundSize: 'cover',
	backgroundPosition: 'top right',
  }

  return (
    <div className="app">
		<Header setSearchResult={setSearchResult} />
		{featuredMovie && <FeaturedMovie overlayStyle={overlayStyle} title={featTitle} featuredMovie={featuredMovie} videoId={videoId} setTruncLine={setTruncLine} truncLine={truncLine} />}
		<List setMovieId={setMovieId} />
		<BigList setMovieId={setMovieId} title="Trending Movies in Your Region" fetchId={requests.fetchTrendingMovies}/>
		<BigList setMovieId={setMovieId} title="Top Rated Series For You" fetchId={requests.fetchTrendingTV}/>
    </div>
  );
}

export default App;