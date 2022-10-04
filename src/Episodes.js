import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Episodes() {
	const epUrl = 'https://rickandmortyapi.com/api/episode';

	const [episodes, setEpisodes] = useState([]);

	useEffect(() => {
		fetch(epUrl)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setEpisodes(data.results);
			})
			.catch((err) => console.log('Error!', err));
	}, []);

	return (
		<div>
			<h1 className='center' >Yee</h1>
		</div>
	);
}

export default Episodes;
