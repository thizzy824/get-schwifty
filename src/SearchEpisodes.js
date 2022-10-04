import React from 'react';

function SearchEpisodes({searchEpisodes, changeEpisode}) {
	return (
		<div>
			<>
				<h2 className='center'>Search by Episode</h2>
				<div className='search-form'>
					<form>
						<label htmlFor='searchEpisode'>
							<strong>Search:</strong>
						</label>
						<input
							className='input'
                            placeholder='Enter Episode #'
							type='text'
							id='searchEpisode'
							name='searchEpisode'
                            onChange={changeEpisode}
                            value={searchEpisodes}
						/>
					</form>
				</div>
			</>
		</div>
	);
}

export default SearchEpisodes;
