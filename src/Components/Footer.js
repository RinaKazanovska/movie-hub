import React from 'react';
import { Container, Row, CardFooter} from 'reactstrap';
import '../App.css';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return (
        <Container fluid style={{justifyItems: 'stretch', textAlign: 'center', padding: '0'}}>
            <Row id="footer" xs="1" sm="1" md="3" xl="5" style={{justifyContent: 'center', padding: '10px 0', margin: '0'}}> 
                <NavLink to="/impressum" activeClassName="active" style={{color: "white"}}><CardFooter  className = "d-flex flex-row justify-content-center align-items-center">Impressum</CardFooter></NavLink>
                <NavLink to="/privacy" activeClassName="active" style={{color: "white"}}><CardFooter  className = "d-flex flex-row justify-content-center align-items-center">Privacy Statement</CardFooter></NavLink>
                <NavLink to="/notices" activeClassName="active" style={{color: "white"}}><CardFooter  className = "d-flex flex-row justify-content-center align-items-center">Legal Notices</CardFooter></NavLink>
                <NavLink to="/contact" activeClassName="active" style={{color: "white"}}><CardFooter  className = "d-flex flex-row justify-content-center align-items-center">Contact</CardFooter></NavLink>
            </Row>
            <p style={{color: "lightgrey", marginTop: "20px"}}>We use <a href="https://www.themoviedb.org/documentation/api" target="_blank" style={{color: "lightgrey"}}>TMDB API</a></p>
            <h5 id="copyright">  Copyright &#169;  2021 </h5>
        </Container>
    )
}

export default Footer;
