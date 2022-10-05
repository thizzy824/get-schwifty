import React from 'react';

function Search({ handleChange, searchString }) {
	return (
		<>
			<h3 className='center'>Search for any character</h3>
			<div className='search-form'>
				<form>
					<label htmlFor='searchString'>
						{' '}
						<strong>Search:</strong>
					</label>
					<input
						className='input'
						placeholder='Enter Name'
						type='text'
						id='searchString'
						name='searchString'
						onChange={handleChange}
						value={searchString}
					/>
				</form>
			</div>
		</>
	);
}

export default Search;
