import React from 'react';
import {useState} from 'react'

function Search() {

    const [searchString, setSearchString] = useState('')

    function handleChange(event) {
        setSearchString(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(searchString)
    }

	return (
		<div>
			<h2 className='search-title'>Search for any character in the Rick and Morty Universe!</h2>
			<form className='search-form' onSubmit={handleSubmit}>
                <label htmlFor='searchString'> <strong>Search:</strong></label>
                <input 
                type='text'
                id='searchString'
                name='searchString'
                onChange={handleChange}
                required
                />
                <button type='submit'>Submit</button>
            </form>
		</div>
	);
}

export default Search;
