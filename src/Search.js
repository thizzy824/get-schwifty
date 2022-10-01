import React from 'react';

function Search({ handleChange, handleSubmit, searchString }) {
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
		</div>
	);
}

export default Search;
