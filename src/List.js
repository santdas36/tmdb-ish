import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import "./List.css";
import axios from './axios';
import requests from './api';

function List() {
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		axios.get(requests.fetchGenres).then((response) => {
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
					<Button className="app__button" variant="contained" disableFocusRipple>Action</Button>
					<Button className="app__button" variant="contained" disableFocusRipple>Animation</Button>
					<Button className="app__button" variant="contained" disableFocusRipple>Comedy</Button>
					<Button className="app__button" variant="contained" disableFocusRipple>Crime</Button>
					<Button className="app__button" variant="contained" disableFocusRipple>Epic</Button>
					<Button className="app__button" variant="contained" disableFocusRipple>Drama</Button>
					<Button className="app__button" variant="contained" disableFocusRipple>Fantasy</Button>
					<Button className="app__button" variant="contained" disableFocusRipple>Romance</Button>
					<Button className="app__button" variant="contained" disableFocusRipple>Sci-Fi</Button>
					<Button className="app__button" variant="contained" disableFocusRipple>Thriller</Button>
				</div>
			</div>

		</div>
	);
}

export default List;