import React, { useState, useEffect } from "react";
import Header from "./Header";
import FeaturedMovie from "./FeaturedMovie";
import List from "./List";
import BigList from "./BigList";
import "./App.css";
import axios from './axios';
import requests, {imageBase, fetchMovie} from './api';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState([]);
  const [videoId, setVideoId] = useState('');
  const [movieId, setMovieId] = useState('');

	const getMovieInfo = (movieInfo) => {
		axios.get(fetchMovie(movieInfo)).then((response) => {
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
		})
	}, []);

	useEffect(() => {
		getMovieInfo(movieId);
	}, [movieId]);

  var overlayStyle = {
	backgroundImage: `url(${imageBase}${featuredMovie.backdrop_path || featuredMovie.poster_path})`,
	backgroundSize: 'cover',
	backgroundPosition: 'top right',
  }

  return (
    <div className="app">
		<Router>
			<Header />
			<Switch>
				<Route path="/">
					<div>
						{featuredMovie && <FeaturedMovie overlayStyle={overlayStyle} title="Today's Featured Film" featuredMovie={featuredMovie} videoId={videoId} />}
						<List setMovieId={setMovieId} />
						<BigList setMovieId={setMovieId} title="Trending Movies in Your Region" fetchId={requests.fetchTrendingMovies}/>
						<BigList setMovieId={setMovieId} title="Top Rated Series For You" fetchId={requests.fetchTrendingTV}/>
					</div>
				</Route>
				<Route path="/movie/:id">
					<div>
						{featuredMovie && <FeaturedMovie overlayStyle={overlayStyle} title="Movie" featuredMovie={featuredMovie} videoId={videoId} />}
						<BigList setMovieId={setMovieId} title="You May Also Like" fetchId={requests.fetchTrendingMovies}/>
					</div>
				</Route>
				<Route path="/series/:id">
					<div>
						{featuredMovie && <FeaturedMovie overlayStyle={overlayStyle} title="Series" featuredMovie={featuredMovie} videoId={videoId} />}
						<BigList setMovieId={setMovieId} title="You May Also Like" fetchId={requests.fetchTrendingMovies}/>
					</div>
				</Route>
			</Switch>
		</Router>
    </div>
  );
}

export default App;