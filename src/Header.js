import React, {useState, useRef} from 'react';
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import "./Header.css";
import axios from './axios';
import requests, {imageBase, fetchMovie, fetchTV, fetchSearchString} from './api';

function Header({setSearchResult}) {
	const [input, setInput] = useState('');
	const inputEl = useRef(null);
	const searchEl = useRef(null);
	const [searchOpen, setSearchOpen] = useState(false);

	const searchQuery = (query) => {
		axios.get(fetchSearchString(query)).then((response) => {
			setSearchResult(response.data.results);
		}).catch((err) => console.log(err));	
	}

	const handleSearch = (e) => {
		e.preventDefault();
		searchQuery(input);
		setSearchOpen(false);
		setInput('');
		inputEl.current.blur();
	}

	const searchClick = () => {
		setSearchOpen(true);
		setTimeout(() => {inputEl.current.focus()}, 300);
	}

	return(
		<div className="app__header">
			<ul className="app__nav">
				<li className={`app__search ${searchOpen || input ? "open" : ""}`} onClick={searchClick}>
					<SearchRoundedIcon style={{ fontSize: 20 }} className="app__searchIcon" />
					<form>
						<input ref={inputEl} type="search" value={input} onBlur={() => setSearchOpen(false)} onChange={(e) => setInput(e.target.value)} placeholder="Search..." />
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