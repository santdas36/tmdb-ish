import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import Rating from "@material-ui/lab/Rating";
import TextTruncate from "react-text-truncate";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./List.css";
import axios from './axios';
import requests, {imageBase} from './api';

function List({setMovieId, setLoading}) {
	const [genres, setGenres] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		axios.get(requests.fetchGenres).then((response) => {
			setGenres(response.data.genres);
		});
		axios.get(requests.fetchPopularMovies).then((response) => {
			setPopularMovies(response.data.results);
		})
	}, []);

	const handleClick = (movie) => {
		setMovieId(movie);
		setLoading(true);
	}

	const getReleaseYear = (date) => {
		let year = new Date(date);
		return year.getFullYear();
	}

	return (
		<div className="list">

			<div class="list__trending">
				<h4>Popular Movies</h4>
				<div class="list__items">
					{ popularMovies?.slice(0, 10).map((movie) => 
						(<div class="list__item" onClick={() => handleClick(movie)}>
							<LazyLoadImage effect="opacity" threshold="0" src={`${imageBase}${movie.backdrop_path || movie.poster_path}`} />
							<div className="list__itemInfo">
								<h5 className="list__itemTitle">{movie.title || movie.original_title}<span className="list__itemYear">({getReleaseYear(movie.release_date || movie.first_air_date)})</span></h5>
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

			<div class="list__genreList">
				<h4>Movies by Genre</h4>
				<div class="list__genres">
					{ genres?.map((genre) =>
						genre.id !== 10770 && genre.id !== 99 && genre.id !== 37 && genre.id !== 10752 && genre.id !== 9648 && (<Button className="app__button" onClick={() => console.log(genre.name, genre.id)} variant="contained" disableFocusRipple>{genre.name}</Button>)
					)}
				</div>
			</div>

		</div>
	);
}

export default List;