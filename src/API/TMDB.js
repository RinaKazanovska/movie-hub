
function makeMovieFromTMDBMovie(tmdbMovie) {
	return {
		id: tmdbMovie.id,
		title: tmdbMovie.title,
		year: tmdbMovie.release_date.substr(0, 4),
		vote: tmdbMovie.vote_average,
		image: tmdbMovie.poster_path,
	};
}

async function getMovieById(id) {
	const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=393b7ef10061d30182b6ed6d24273ca9";

	return await fetch(url)
		.then(response => { return response.json() })
		.then(movie => { return makeMovieFromTMDBMovie(movie) })
}

async function topRatedMovies(pageNumber = 1) {
	const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=393b7ef10061d30182b6ed6d24273ca9&page=" + pageNumber;

	let movies = {};

	// see: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
	movies = await fetch(url)
		.then(response => { return response.json() })
		.then(data => {
			data.results.forEach(tmdbMovie => {
				let movieObject = makeMovieFromTMDBMovie(tmdbMovie);
				movies[tmdbMovie.id] = movieObject;
			});
			return movies;
		})
	return movies;
	}

async function getSearch(searchText) {
	
	const url = "https://api.themoviedb.org/3/search/movie?api_key=393b7ef10061d30182b6ed6d24273ca9&query=" + searchText;

	let movies = {};
	movies = await fetch(url)
		.then(response => { return response.json() })
		.then(data => {
			data.results.forEach(tmdbMovie => {
				let movieObject = makeMovieFromTMDBMovie(tmdbMovie);
				movies[tmdbMovie.id] = movieObject;
			});
			return movies;
		})
	return movies;
}

async function getMoviesByIDs(ids) {
	let movies = {};
	for (let id of ids) {
		let movie = await getMovieById(id)
			.then(movie => movie);
		movies[id] = movie;
	};
	return movies;
}

const TMDB = { getMovieById, getMoviesByIDs, topRatedMovies, getSearch };
export default TMDB;