import React from 'react';
import { useState, useEffect } from 'react';

function Episodes() {

    const epUrl = 'https://rickandmortyapi.com/api/episode';

    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
			fetch(epUrl)
				.then((res) => res.json())
				.then((data) => {
                    console.log(data)
                    setEpisodes(data)})
				.catch((err) => console.log('Error!', err));
		}, []);

    return (
        <div>
            <h1>Episodes</h1>

        </div>
    );
}

export default Episodes;