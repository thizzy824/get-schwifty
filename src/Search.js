import React from 'react';

function Search({ handleChange, searchString }) {
	return (
		<div className='search-form'>
			<form >
				<label htmlFor='searchString'>
					{' '}
					<strong>Search:</strong>
				</label>
				<input
					className='input'
					type='text'
					id='searchString'
					name='searchString'
					onChange={handleChange}
					value={searchString}
					required
				/>
			</form>
			<button>Random Characters</button>
		</div>
	);
}

export default Search;
