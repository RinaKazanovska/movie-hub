import React from 'react';
import {CardFooter} from 'reactstrap';
import '../App.css';
// import '../Components/Card.css';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return (
        <>
        <h5 id ="copyright">  Copyright &#169;  2021 </h5>
        <CardFooter id = "footer" className = "d-flex flex-row justify-content-center alig-items-center">
            <NavLink to="/" activeClassName="active"><larger>Home</larger></NavLink>&nbsp;|&nbsp;
            <NavLink to="/impressum" activeClassName="active">Impressum</NavLink>&nbsp;|&nbsp;
            <NavLink to="/privacy" activeClassName="active">Privacy Statement</NavLink>&nbsp;|&nbsp;
            <NavLink to="/notices" activeClassName="active">Legal Notices</NavLink>&nbsp;&nbsp;
            <hr/>
         </CardFooter>
        </>
    )
}

export default Footer