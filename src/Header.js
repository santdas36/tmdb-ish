import React, {useState} from 'react';
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import "./Header.css";

function Header() {
	const [input, setInput] = useState('');

	return(
		<div className="app__header">
			<ul className="app__nav">
				<li className="app__search">
					<SearchRoundedIcon style={{ fontSize: 20 }} className="app__searchIcon" />
					<form>
						<input type="search" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search..." />
						<button type="submit"></button>
					</form>
				</li>
				<li><a href="#">Home</a></li>
				<li><a href="#">Movies</a></li>
				<li><a href="#">Series</a></li>
				<li><a href="#">Featured</a></li>
			</ul>
			<h1 className="app__title">TMDB</h1>
		</div>
	)
}

export default Header;