import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
    Button, CardBody, CardFooter, CardImg, CardText, Col
} from 'reactstrap';
import Storage from '../API/Storage';
import '../Components/Card.css';
import { NavLink } from "react-router-dom";

function CardElement({ movie, dispatchFavorites, dispatchWatched }) {
    // const [isMovieWatched, setIsMovieWatched] = useState(Storage.isWatched(movie.id));
    

    const handleWatchedButtonClick = (event) => {
        const movieID = event.target.value;

        if (Storage.isWatched(movie.id)) {
            dispatchWatched({ type: 'remove', id: movieID });
        } else {
            dispatchWatched({ type: 'add', id: movieID });
        }
        // if (isMovieWatched) {
        //     Storage.removeWatchedMovie(movieID);
        //     setIsMovieWatched(false);
        // } else {
        //     Storage.addWatchedMovie(movieID);
        //     setIsMovieWatched(true);
        // }
    };

    const handleFavoriteButtonClick = (event) => {
        const movieID = event.target.value;

        if (Storage.isFavorite(movie.id)) {
            dispatchFavorites({ type: 'remove', id: movieID });
        } else {
            dispatchFavorites({ type: 'add', id: movieID });
        }
    };

    return (
        <>
            <Col className="movieCard">
                    <CardBody className="cardBody">
                        <NavLink to={`/movie/${movie.id}`}>
                            <CardImg top src={`https://image.tmdb.org/t/p/w200${movie.image}`} 
                            alt="Card image cap" className="mb-3"/>
                            <h4>{movie.title}</h4>
                            <CardText>{movie.year}</CardText>
                            <CardText>IMdb {movie.vote}</CardText>
                        </NavLink>
                    </CardBody>

                <CardFooter className="p-2" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "white" }}>
                    {
                        Storage.isWatched(movie.id) === false ?
                            <Button value={movie.id} outline color="info" size="sm" onClick={handleWatchedButtonClick}>not watched</Button>
                            :
                            <Button value={movie.id} outline color="success" size="sm" onClick={handleWatchedButtonClick}>watched</Button>
                    }
                    <Button value={movie.id} style={{ color: Storage.isFavorite(movie.id) === false ? "lightgrey" : "red", fontSize: "1.5em", cursor: "pointer" }} onClick={handleFavoriteButtonClick}> &hearts; </Button>
                </CardFooter>
            </Col>
        </>
    )
}

export default CardElement

