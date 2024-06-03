import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className="image-container m-3">
					<img src={movie.Poster} alt='movie'></img>
			
					<div
						onClick={() => props.handleFavouritesClick(movie)}

					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;