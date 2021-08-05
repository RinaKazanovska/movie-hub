import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, CardImg, CardTitle, Badge } from "reactstrap";
import { AiFillStar } from 'react-icons/ai'
import { movieDetailsApi } from "../API/MovieDetailsApi";

function MovieDetails() {
  const { movieID } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [date, setDate] = useState(0);
  
  useEffect(() => {
    movieDetailsApi(movieID).then((data) => {
      setMovieDetails(data);
      genreFunc(data.genres);
      timeFunc(data.runtime);
      dateFunc(data.date);
    });
    }, [movieID]);
    
    const genreFunc = (genresArr) => {
      genresArr.map(genre => {
        return setGenres(genres => [...genres, genre.name]);
      })
    }
    const timeFunc = (time) => {
      setHour(Math.floor(time/60));
      setMinute(time%60);
    }
    const dateFunc = (date) => {
      setDate(date.slice(0,4))
    }
  return (
    <Container style={{ color: "white" }} fluid={true}>
      <Row xs="1" sm="1" md="2" className="d-flex align-items-center m-3">
        <Col sm="5" md="5" lg="4" className="d-flex justify-content-center my-1">
          <Card>
            <CardImg
              top
              width="80%"
              height="100%"
              src={`https://image.tmdb.org/t/p/original/${movieDetails.image}`}
              alt={movieDetails.title}
              style={{background:"white"}}
            />
          </Card>
        </Col>

        <Col sm="7" md="7" lg="6">
          <CardTitle tag="h2">{movieDetails.title} ({date}) </CardTitle>
          <CardTitle tag="i">{movieDetails.tagline === "" ? "" : `"${movieDetails.tagline}"`} </CardTitle>
          <br /><br />
          <CardTitle tag="p"><AiFillStar style={{ color:"yellow"}} /> {movieDetails.vote_average}/10 | {hour}h {minute}min | {genres.join(", ")}</CardTitle>
          <CardTitle tag="p">{movieDetails.overview}</CardTitle>
          <Badge href="#" color="primary">Add to Favorites</Badge>
          <Badge href="#" color="secondary">Add to Watched</Badge>
          <Badge href={`https://www.imdb.com/title/${movieDetails.imdbID}`} color="light" target="_blank">Visit IMDb</Badge>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetails;
