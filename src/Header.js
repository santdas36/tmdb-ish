import React, {useState} from 'react';
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import "./Header.css";
import axios from './axios';
import requests, {imageBase, fetchMovie, fetchTV} from './api';

function Header({setSearchResult}) {
	const [input, setInput] = useState('');
	const [searchOpen, setSearchOpen] = useState(false);

	const handleSearch = (e) => {
		e.preventDefault();
		setInput('');
		setSearchOpen(false);
	}

	return(
		<div className="app__header">
			<ul className="app__nav">
				<li className={(searchOpen || input) ? "app__search" : "app__search open"} onFocus={() => setSearchOpen(true)} onBlur={() => setSearchOpen(false)}>
					<SearchRoundedIcon style={{ fontSize: 20 }} className="app__searchIcon" />
					<form>
						<input type="search" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search..." />
						<button onClick={(e) => handleSearch(e)} type="submit"></button>
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