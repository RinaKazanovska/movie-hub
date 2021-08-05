const WATCHED_MOVIES = "watchedMovies";
const FAVORITE_MOVIES = "favoriteMovies"

function getFavoriteMovies() {
	// returns an array with IDs
	const storage = window.localStorage;
	const favoriteIDs = storage.getItem(FAVORITE_MOVIES);

	if (favoriteIDs == null) {
		return [];
	}

	return JSON.parse(favoriteIDs);
}

function addFavoriteMovie(id) {
	// console.log(id);
	const movies = getFavoriteMovies();

	if (!movies.includes(id)) {
		// console.log("pushing movie");
		movies.push(id);
		setFavoriteMovies(movies);
	}

	console.log("favoriteMovies:", getFavoriteMovies());
}

function removeFavoriteMovie(id) {
	let movies = getFavoriteMovies();
	movies = movies.filter(movieID => movieID !== id);
	setFavoriteMovies(movies);
	console.log("favoriteMovies:", getFavoriteMovies());
}

function setFavoriteMovies(favoriteMovies = []) {
	const storage = window.localStorage;
	storage.setItem(FAVORITE_MOVIES, JSON.stringify(favoriteMovies));
}

function addWatchedMovie(id) {
	const movies = getWatchedMovies();

	if (!movies.includes(id)) {
		console.log("pushing movie");
		movies.push(id);
		setWatchedMovies(movies);
	}

	console.log("watchedMovies:", getWatchedMovies());
}

function getWatchedMovies() {
	// returns an array with IDs
	const storage = window.localStorage;
	const watchedIDs = storage.getItem(WATCHED_MOVIES);

	if (watchedIDs == null) {
		return [];
	}

	return JSON.parse(watchedIDs);
}

/**
 * @param {Array of IDs} watchedMovies
 */
function setWatchedMovies(watchedMovies = []) {
	// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
	const storage = window.localStorage;
	storage.setItem(WATCHED_MOVIES, JSON.stringify(watchedMovies));
}

function removeWatchedMovie(id) {
	let movies = getWatchedMovies();
	movies = movies.filter(movieID => movieID !== id);
	setWatchedMovies(movies);
	console.log("watchedMovies:", getWatchedMovies());
}

function isFavorite(id) {
	const movies = getFavoriteMovies();
	return movies.includes(`${id}`);
}

function isWatched(id) {
	const movies = getWatchedMovies();
	return movies.includes(`${id}`);
}

const Storage = {
	addFavoriteMovie,
	addWatchedMovie,
	getFavoriteMovies,
	getWatchedMovies,
	isFavorite,
	isWatched,
	removeFavoriteMovie,
	removeWatchedMovie,
	setFavoriteMovies,
	setWatchedMovies
};
export default Storage;
