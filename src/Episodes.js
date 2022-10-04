import React from 'react';
import { useState, useEffect } from 'react';
import SearchEpisodes from './SearchEpisodes';
import EpisodeResults from './EpisodeResults';


function Episodes() {
    
    const [episodes, setEpisodes] = useState([]);
    const [searchEpisodes, setSearchEpisodes] = useState()
    
	const epUrl = `https://rickandmortyapi.com/api/episode/?id=${searchEpisodes}`;

	useEffect(() => {
		fetch(epUrl)
			.then((res) => res.json())
			.then((data) => {
				setEpisodes(data.results);
			})
			.catch((err) => console.log('Error!', err));
	}, [epUrl]);


    function changeEpisode(event) {
        setSearchEpisodes(event.target.value)
    }

	return (
		<div>
			<SearchEpisodes changeEpisode={changeEpisode} searchEpisodes={searchEpisodes} />
            <EpisodeResults episodes={episodes} />
		</div>
	);
}

export default Episodes;
