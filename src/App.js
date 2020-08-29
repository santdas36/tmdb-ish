import React, { useEffect } from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import TextTruncate from "react-text-truncate";
import List from "./List";
import "./App.css";

function App() {
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
		<div className="app__featured">
			<p className="app__featuredInfo">Today's Featured Film</p>
			<h2 className="app__featuredTitle">Two and a Half Men</h2>
			<TextTruncate
				line={2}
				element="p"
				containerClassName="app__featuredDesc"
				truncateText="…" text="Charlie Harper is a jingle writer who leads a hedonistic, carefree life. Everything changes when his good-for-nothing brother, Alan, and 10-year-old nephew, Jake, move into his Malibu beach house"
			/>
			<div className="app__featuredRating">
				<Rating name="movie-rating" value={3.4} precision={0.5} icon={<StarRoundedIcon fontSize="inherit" readOnly />}/>
				<p className="app__featuredLikes">3.4<small> (372)</small></p>
			</div>
			<Button className="app__button" variant="contained" startIcon={<PlayArrowRoundedIcon />}>Play Trailer</Button>
		</div>
		<List />
    </div>
  );
}

export default App;