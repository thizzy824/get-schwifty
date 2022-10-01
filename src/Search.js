import React from 'react';
import {useState, useEffect} from 'react'

function Search() {

      const [characters, setCharacters] = useState([])

  let url = `https://rickandmortyapi.com/api/character/`;
  const [searchString, setSearchString] = useState('')
  
  useEffect(() => {
    fetch(url)
			.then((res) => res.json())
			.then((data) => setCharacters(data.results))
			.catch((err) => console.log('Error!', err));
	}, []);
  
  console.log(characters)


    function handleChange(event) {
        setSearchString(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        
    }


	return (
		<div>
			<form className='search-form' onSubmit={handleSubmit}>
				<label htmlFor='searchString'>
					{' '}
					<strong>Search:</strong>
				</label>
				<input
					type='text'
					id='searchString'
					name='searchString'
					onChange={handleChange}
					value={searchString}
					required
				/>
				<button type='submit'>Submit</button>
			</form>
			<div className='results'>
				{characters.map((character) => (
					<div>
						<img src={character.image} alt={character.name} />
						<strong>{character.name}</strong>
						<p>Status: {character.status}</p>
                        <p>Species: {character.species}</p>
                        <p>Location: {character.location.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Search;
