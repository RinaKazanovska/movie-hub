async function movieDetailsApi(movieID) {
  const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=393b7ef10061d30182b6ed6d24273ca9`;
  let movieDetail = {};

  movieDetail = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        movieDetail.title = data.title;
        movieDetail.id = data.id;
        movieDetail.imdbID = data.imdb_id;
        movieDetail.image = data.poster_path;
        movieDetail.overview = data.overview;
        movieDetail.tagline = data.tagline;
        movieDetail.vote_average = data.vote_average;
        movieDetail.date = data.release_date;
        movieDetail.runtime = data.runtime;
        movieDetail.language = data.original_language;
        movieDetail.genres = data.genres;
        return movieDetail
    });

  return movieDetail;
}

export { movieDetailsApi }
