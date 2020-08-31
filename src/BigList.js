import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import Rating from "@material-ui/lab/Rating";
import TextTruncate from "react-text-truncate";
import "./BigList.css";
import axios from './axios';
import requests, {imageBase} from './api';

function BigList({ fetchId, title, setMovieId }) {
	const [thisMovies, setThisMovies] = useState([]);

	useEffect(() => {
		axios.get(fetchId).then((response) => {
			setThisMovies(response.data.results);
			console.log(response.data.results);
		})
	}, [fetchId]);

	const handleClick = (movie) => {
		setMovieId(movie);
	}

	const getReleaseYear = (date) => {
		let year = new Date(date);
		return year.getFullYear();
	}

	return (
		<div className="list biglist">

			<div class="list__trending list__big">
				<h4>{title}</h4>
				<div class="list__items list__items-big">
					{ thisMovies?.slice(0, 10).map((movie) =>
						(<div class="list__item" onClick={() => handleClick(movie)}>
							<img src={`${imageBase}${movie.poster_path || movie.backdrop_path}`} />
							<div className="list__itemInfo">
								<h5 className="list__itemTitle">{movie.title || movie.original_title || movie.name || movie.original_name}<span className="list__itemYear">({getReleaseYear(featuredMovie.release_date)})</span></h5>
								<TextTruncate
									line={2}
									element="p"
									containerClassName="list__itemOverview"
									truncateText="…"
									text={movie.overview}
								/>
								<div className="list__rating">
									<Rating name="movie-rating" className="movieRating" value={(movie.vote_average / 2) || 0} precision={0.5} icon={<StarRoundedIcon fontSize="inherit" readOnly />}/>
									<small className="list__likes">{movie.vote_average / 2}</small>
								</div>
							</div>
						</div>)
					)}
				</div>
			</div>

		</div>
	);
}

export default BigList;