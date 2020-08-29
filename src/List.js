import React from "react";
import Button from '@material-ui/core/Button';
import "./List.css";

function List() {
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
					<Button className="app__button" variant="contained">Action</Button>
					<Button className="app__button" variant="contained">Animation</Button>
					<Button className="app__button" variant="contained">Comedy</Button>
					<Button className="app__button" variant="contained">Crime</Button>
					<Button className="app__button" variant="contained">Epic</Button>
					<Button className="app__button" variant="contained">Drama</Button>
					<Button className="app__button" variant="contained">Fantasy</Button>
					<Button className="app__button" variant="contained">Romance</Button>
					<Button className="app__button" variant="contained">Sci-Fi</Button>
					<Button className="app__button" variant="contained">Thriller</Button>
				</div>
			</div>

		</div>
	);
}

export default List;