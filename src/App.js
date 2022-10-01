import './App.css';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import {Routes, Route, Link, useSearchParams} from 'react-router-dom'
import { useState } from 'react';

function App() {

  const [searchParams, setSearchParams] = useSearchParams()

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
					element={<Search setSearchParams={setSearchParams} />}
				/>
				<Route
					path='/results'
					element={<Results searchParams={searchParams} />}
				/>
			</Routes>
		</>
	);
}

export default App;
