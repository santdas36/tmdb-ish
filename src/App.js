import React, { useState, useEffect } from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import TextTruncate from "react-text-truncate";
import List from "./List";
import "./App.css";
import axios from './axios';
import requests, {imageBase, fetchMovie} from './api';


function App() {
  const [truncLine, setTruncLine] = useState(2);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState([]);

	useEffect(() => {
		axios.get(requests.fetchTopRatedMovies).then((response) => {
			let tempMov = response.data.results;
			setTopRatedMovies(tempMov);
			let getFeatured = tempMov[Math.floor(Math.random() * tempMov.length)].id;
			axios.get(fetchMovie(getFeatured)).then((response) => setFeaturedMovie(response.data)).catch((err) => console.log(err));
		})
	}, []);

  const readMore = (e) => {
	setTruncLine(0);
	e.preventDefault();
	e.target.style.display = 'none';
  }

  return (
    <div className="app">
		<div className="app__overlay"></div>
		<div className="app__header">
			<ul className="app__nav">
				<li className="app__search">
					<SearchRoundedIcon style={{ fontSize: 20 }} className="app__searchIcon" />
					<input type="text" placeholder="Search..." />
				</li>
				<li><a href="#">Home</a></li>
				<li><a href="#">Movies</a></li>
				<li><a href="#">Series</a></li>
				<li><a href="#">Featured</a></li>
			</ul>
			<h1 className="app__title">TMDB</h1>
		</div>
		{featuredMovie && 
		<div className="app__featured">
			<p className="app__featuredInfo">Today's Featured Film</p>
			<h2 className="app__featuredTitle">{featuredMovie.title || featuredMovie.original_title}</h2>
			<TextTruncate
				line={truncLine}
				element="p"
				containerClassName="app__featuredDesc"
				textTruncateChild={<a href="#" onClick={readMore}><small>[more]</small></a>}
				truncateText="…" text={featuredMovie.overview}
			/>
			<div className="app__featuredRating">
				<Rating name="movie-rating" value={featuredMovie.vote_average / 2} precision={0.5} icon={<StarRoundedIcon fontSize="inherit" readOnly />}/>
				<p className="app__featuredLikes">{featuredMovie.vote_average / 2}<small> ({featuredMovie.vote_count})</small></p>
			</div>
			<Button className="app__button" variant="contained" startIcon={<PlayArrowRoundedIcon />}>Play Trailer</Button>
		</div>
		}
		<List />
    </div>
  );
}

export default App;