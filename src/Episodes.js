import { useState, useEffect } from 'react';
import SearchEpisodes from './SearchEpisodes';
import EpisodeResults from './EpisodeResults';

function Episodes() {
	const [episodes, setEpisodes] = useState([]);
	const [searchEpisodes, setSearchEpisodes] = useState('');

	let episodeUrl = `https://rickandmortyapi.com/api/episode/?name=${searchEpisodes}`;

	useEffect(() => {
		fetch(episodeUrl)
			.then((res) => res.json())
			.then((data) => setEpisodes(data.results))
			.catch((err) => console.log('Error!', err));
	}, [episodeUrl]);

	function changeEpisode(event) {
		setSearchEpisodes(event.target.value);
	}

	return (
		<div>
			<SearchEpisodes
				changeEpisode={changeEpisode}
				searchEpisodes={searchEpisodes}
			/>
			<EpisodeResults episodes={episodes} />
		</div>
	);
}

export default Episodes;
