import React, { useReducer, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Storage from './API/Storage';
import TMDB from './API/TMDB';
import Header from "./Components/Header";
import Home from './Pages/Home';
import MovieDetails from './Components/MovieDetails'
import Favorites from './Pages/Favorites';
import Watched from './Pages/Watched';
import About from './Pages/About';
import Footer from "./Components/Footer";
import "./App.css";
import './layout.css';

function App() {
  //const [watched, setWatched] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [movies, setMovies] = useState({});

  React.useEffect(() => {
      TMDB.topRatedMovies(1)
        .then(movie => {
          setMovies(movie);
        });
  }, [isSearched]);

  function reduceFavorites(state, action) {
    // action = {type: TYPE, id: ID}; // TYPE:= {add, remove}, ID:= a movie's ID
    switch (action.type) {
      case 'add':
        Storage.addFavoriteMovie(action.id);
        break;
      case 'remove':
        Storage.removeFavoriteMovie(action.id);
        window.location.reload();
        break;
      default:
        throw new Error("action not implemented");
    }

    const favorites = Storage.getFavoriteMovies();
    return favorites;
  };

  function reduceWatched(state, action) {
    // action = {type: TYPE, id: ID}; // TYPE:= {add, remove}, ID:= a movie's ID
    switch (action.type) {
      case 'add':
        Storage.addWatchedMovie(action.id);
        break;
      case 'remove':
        Storage.removeWatchedMovie(action.id);
        window.location.reload();
        break;
      default:
        throw new Error("action not implemented");
    }

    const watched = Storage.getWatchedMovies();
    return watched;
  };

  const INITIAL_FAVORITES = Storage.getFavoriteMovies();
  const [favorites, dispatchFavorites] = useReducer(reduceFavorites, INITIAL_FAVORITES);

  const INITIAL_WATCHED = Storage.getWatchedMovies();
  const [watched, dispatchWatched] = useReducer(reduceWatched, INITIAL_WATCHED);
  return (
    <div>
      <BrowserRouter>
        <main>
          <Header isSearched={isSearched} setIsSearched={setIsSearched} movies={movies} setMovies={setMovies} />
          <Switch>
            <Route exact path="/" render={() => <Home movies={movies} dispatchFavorites={dispatchFavorites} dispatchWatched= {dispatchWatched} isSearched={isSearched}/>} />
            <Route path="/favorites" render={() => <Favorites favorites={favorites} dispatchFavorites={dispatchFavorites} />} />
            <Route path="/watched" render={() => <Watched watched={watched} dispatchWatched= {dispatchWatched} />} />
            <Route path="/about" component={About} />
            <Route path="/movie/:movieID" children={<MovieDetails />} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;