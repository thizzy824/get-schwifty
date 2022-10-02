import React from 'react';

function Search({ handleChange, handleSubmit, searchString }) {
	return (
		<div className='search-form'>
			<form onSubmit={handleSubmit}>
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
				<button type='submit'>Search</button>
			</form>
			<button>Random Characters</button>
		</div>
	);
}

export default Search;
