import React from 'react';
import { Row } from 'reactstrap';
import Card from '../Components/Card';

function SearchResults({movies, dispatchFavorites, dispatchWatched}) {
    const moviesArray = [];
    for (let movie in movies) {
        moviesArray.push(movies[movie]);
    }

    return (
        <>
            <h1>Search Results:</h1>
            <Row xs="1" sm="2" md="3" xl="5">
                    {
                        (moviesArray.length === 0) ? <h5 style={{color: "white", margin: "20px 0"}}>Movies not found</h5> :
                        moviesArray.map((movie, i) =>
                            <Card movie={movie} dispatchFavorites={dispatchFavorites} dispatchWatched= {dispatchWatched} key={i} />
                                    
                        )
                    }
            </Row>
        </>
    )
}

export default SearchResults