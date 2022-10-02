const  Results = ({characters}) => {

    if (!characters) {
        return <h2 className='no-characters'>No Characters Found! Jeez Morty!</h2>
    }

    return (
			<div>
				<div className='results'>
					{characters.map((character) => (
						<div key={character.id} className='details'>
							<img src={character.image} alt={character.name} />
							<strong>{character.name}
							<p>Status: {character.status}</p>
							<p>Species: {character.species}</p>
							<p>Location: {character.location.name}</p>
                            </strong>
						</div>
					))}
				</div>
			</div>
		);
}

export default Results;

	