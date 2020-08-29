import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import "./List.css";
import axios from './axios';
import requests from './api';

function List() {
	const [genres, setGenres] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		axios.get(requests.fetchGenres).then((response) => {
			setGenres(response.data.genres);
			console.log(genres);
		});
		axios.get(requests.fetchPopularMovies).then((response) => {
			console.log(response);
		})
	}, []);


	return (
		<div className="list">

			<div class="list__trending">
				<h4>Trending Movies and TV Shows</h4>
				<div class="list__items">
					<div class="list__item"></div>
					<div class="list__item"></div>
					<div class="list__item"></div>
					<div class="list__item"></div>
					<div class="list__item"></div>
					<div class="list__item"></div>
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