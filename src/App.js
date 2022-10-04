import './App.css';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Episodes from './Episodes';

function App() {
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
		setSearchString(event.target.value);
	}

	return (
		<>
			<div className='schwifty-container'>
				<Link to='/'>
					<Header />
				</Link>
				<Link to='/episodes'>
					<h2 className='center'>Episodes</h2>
				</Link>
			</div>
			<Search handleChange={handleChange} searchString={searchString} />
			<Results characters={characters} />
			<Routes>
				<Route
					path='/'
					element={
						<Search handleChange={handleChange} searchString={searchString} />
					}
				/>
				<Route path='/' element={<Results characters={characters} />} />
				<Route path='/episodes/' element={<Episodes />}/>
			</Routes>
		</>
	);
}

export default App;
