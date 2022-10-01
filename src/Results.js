const  Results = ({characters}) => {

    if(!characters.length) {
        return <h2>No Characters found!</h2>
    }

    return (
			<div>
				<div className='results'>
					{characters.map((character) => (
						<div key={character.id} className='details'>
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

export default Results;

	