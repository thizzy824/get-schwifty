import Search from './Search';
import Results from './Results';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'


function Characters() {
	const [characters, setCharacters] = useState([]);
	const [searchString, setSearchString] = useState('');

	let url = `https://rickandmortyapi.com/api/character/?name=${searchString}`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setCharacters(data.results))
			.catch((err) => console.log('Error!', err));
	}, [url]);

	function handleChange(event) {
		event.preventDefault()
		setSearchString(event.target.value);
	}

	return (
		<div>
			<div>
				<Link to='/episodes'>
					<h2 className='center'>Episodes</h2>
				</Link>
			</div>
			<Search handleChange={handleChange} searchString={searchString} />
			<Results characters={characters} />
		</div>
	);
}

export default Characters;
