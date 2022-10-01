import './App.css';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import {Routes, Route, Link} from 'react-router-dom'
import { useState, useEffect } from 'react';

function App() {

  const [characters, setCharacters] = useState([])

  let url = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    fetch(url)
			.then((res) => res.json())
			.then((data) => setCharacters(data.results))
			.catch((err) => console.log('Error!', err));
	}, []);
  
  console.log(characters)


	return (
		<>
			<div className='schwifty-container'>
				<Link to='/'>
					<Header />
				</Link>
			</div>
			<Routes>
				<Route
					path='/'
					element={<Search />}
				/>
				<Route
					path='/results'
					element={<Results />}
				/>
			</Routes>
		</>
	);
}

export default App;
