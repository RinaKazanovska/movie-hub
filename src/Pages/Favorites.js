import React from 'react';
import { Container, Row } from 'reactstrap';
import TMDB from '../API/TMDB';
import Card from '../Components/Card';

// import { Container, Row } from 'reactstrap';

function Favorites({ favorites, dispatchFavorites }) {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        TMDB.getMoviesByIDs(favorites)
            .then(movies => setMovies(movies));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const moviesArray = [];
    for (let movie in movies) {
        moviesArray.push(movies[movie]);
    }

    return (
        <Container fluid className="mt-4 mb-4 p-4" style={{ justifyItems: 'stretch' }}>
            {/* {watched.map(isWatched => <div>{isWatched ? "Watched" : "Not watched"}</div>)} */}
            <h1>Favorites</h1>
            <Row xs="1" sm="2" md="3" xl="5">
                {
                    moviesArray.map((movie, i) => {
                        return <Card movie={movie} dispatchFavorites={dispatchFavorites} key={i} />
                    })
                }
            </Row>
        </Container>
    );
    // .then(movie => {
    //     return movie;
    // })

}

export default Favorites;
