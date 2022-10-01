import './App.css';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import { useState, useEffect } from 'react';

function App() {

  const [characters, setCharacters] = useState([])
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

	function handleSubmit(event) {
		event.preventDefault();
	}



	return (
		<>
			<div className='schwifty-container'>
				<Header />
			</div>
			<Search
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			<Results characters={characters}/>
		</>
	);
}

export default App;
