import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import TextTruncate from 'react-text-truncate';
import "./List.css";
import axios from './axios';
import requests, {imageBase} from './api';

function List() {
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


	return (
		<div className="list">

			<div class="list__trending">
				<h4>Trending Movies and TV Shows</h4>
				<div class="list__items">
					{ popularMovies?.slice(0, 6).map((movie) => 
						(<div class="list__item">
							<img src={`${imageBase}${movie.backdrop_path || movie.poster_path}`} />
							<TextTruncate
								line={1}
								element="h5"
								containerClassName="list__itemTitle"
								truncateText="…"
								text={movie.title || movie.original_title}
							/>
						</div>)
					)}
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