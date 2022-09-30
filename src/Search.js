import React from 'react';

function Search() {
	return (
		<div>
			<h2 className='search-title'>Search for any character in the Rick and Morty Universe!</h2>
			<form>
                <label htmlFor='searchString'> Search : </label>
                <input 
                type='text'
                id='searchString'
                name='searchString'
                required
                />
                <button type='submit'>Submit</button>
            </form>
		</div>
	);
}

export default Search;
