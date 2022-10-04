import './App.css';
import Characters from './Characters';
import { Route, Routes, Link } from 'react-router-dom';
import Episodes from './Episodes';

function App() {
	return (
		<>
			<div className='schwifty-container'>
				<Link to='/'>
				<h1 className='schwifty'>Get Schwifty!</h1>
				</Link>
			</div>

			<Routes>
				<Route path='/' element={<Characters />} />
				<Route path='/episodes' element={<Episodes />} />
			</Routes>
		</>
	);
}

export default App;
