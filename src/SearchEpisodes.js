import React from 'react';

function SearchEpisodes({ searchEpisodes, changeEpisode }) {
	return (
		<>
			<h2 className='center'>Search by Episode</h2>
			<div className='search-form'>
				<form>
					<label htmlFor='searchEpisodes'>
						{''}
						<strong>Search:</strong>
					</label>
					<input
						className='input'
						placeholder='Enter Episode #'
						type='text'
						id='searchEpisodes'
						name='searchEpisodes'
						onChange={changeEpisode}
						value={searchEpisodes}
					/>
				</form>
			</div>
		</>
	);
}

export default SearchEpisodes;
