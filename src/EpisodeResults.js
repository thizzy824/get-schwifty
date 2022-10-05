const EpisodeResults = ({ episodes }) => {
	if (!episodes) {
		return <h2 className='not-found'>No Episode Found</h2>;
	}

	return (
		<div>
			<div className='results'>
				{episodes.map((episode) => (
					<div key={episode.id} className='details'>
						<strong>
							<p>Episode # {episode.id}</p>
							<p>Name: {episode.name}</p>
							<p>Air-Date: {episode.air_date}</p>
						</strong>
					</div>
				))}
			</div>
		</div>
	);
};

export default EpisodeResults;
