import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import AddFavourites from './AddFavourites'; 
import RemoveFavourites from './RemoveFavourites';







const Home = () => {
	const user = localStorage.getItem("token")
	const [movies, setMovies] = useState([
		{
            "Title": "Heeramandi: The Diamond Bazaar",
            "Year": "2024–",
            "imdbID": "tt15204292",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTkwNmM3ZWMtNDY1Ni00YmFhLTg2ZTgtZmE3NTBmOGUwOTUyXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_SX300.jpg"
        },{
            "Title": "The Avengers",
            "Year": "2012",
            "imdbID": "tt0848228",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
		{
            "Title": "Kantara",
            "Year": "2022",
            "imdbID": "tt15327088",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjQyNGI5OWEtZjI1Yy00NDVjLWE4MTAtMzRlNzU1NzM2OGVkXkEyXkFqcGdeQXVyMTA1NzEzOTU1._V1_SX300.jpg"
        },
		{
            "Title": "The Conjuring",
            "Year": "2013",
            "imdbID": "tt1457767",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "The Conjuring 2",
            "Year": "2016",
            "imdbID": "tt3065204",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_SX300.jpg"
        },
		{
            "Title": "King the Land",
            "Year": "2023",
            "imdbID": "tt26693803",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjE5ZDJmZGItMDRkNi00YjAxLTliYjQtYjBjZjk4Yjk4NjdhXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_SX300.jpg"
        },
    	]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);
	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<>
		
		
		<div className='container-fluid img-responsive movie-app'>
			<div className='row align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className="d-flex">
				<MovieList 
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>
			<div>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className="d-flex">
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
	</>
	);
};

export default Home;