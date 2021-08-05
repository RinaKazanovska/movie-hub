import React from 'react';
import { Container, Row } from 'reactstrap';
import Card from '../Components/Card';
import SearchResults from '../Components/SearchResults';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home({movies, dispatchWatched, dispatchFavorites, isSearched}) {
    const moviesArray = [];
    for (let movie in movies) {
        moviesArray.push(movies[movie]);
    }


    return (
        <Container fluid className="mt-4 mb-4 p-4" style={{ justifyItems: 'stretch', background: 'black' }}>
            {
            isSearched ?
                <SearchResults movies={movies} dispatchFavorites={dispatchFavorites} dispatchWatched= {dispatchWatched}/>
                :
            <>
                <h1>Most Popular</h1>
                <Row xs="1" sm="2" md="3" xl="5">
                    {
                        moviesArray.map((movie, i) =>
                            <Card movie={movie} dispatchFavorites={dispatchFavorites} dispatchWatched= {dispatchWatched} key={i} />
                        )
                    }
                </Row>
            </>
            }
    </Container>
    );
/*     return (
        <Container fluid className="mt-4 mb-4 p-4" style={{ justifyItems: 'stretch', background: 'black' }}>
            {
                isSearched ?
                    <SearchResults movies={movies}/>
                :
                <>
                    <h1>Most Popular</h1>
                    <Row xs="1" sm="2" md="3" xl="5">
                        {
                            movies.map((movie, i) =>
                                <Card movie={movie} key={i} />
                            )
                        }
                    </Row>
                </>
            }

        </Container>
    ); */
}

export default Home;
