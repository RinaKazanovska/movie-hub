import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler } from 'reactstrap';
import '.././Components/Header.css';
import Search from './Search';

function Header({setIsSearched, movies, setMovies}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (

    <header>
      <Container fluid className="p-0" style={{justifyItems: 'stretch'}}>
        <Navbar color="dark" dark expand="md" fixed="top" className="py-3 px-0">
              <NavLink className="logo" to="/">
                <h1>Movie Hub</h1>  
              </NavLink>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar style={{justifyContent: "space-between", justifyItems: "center"}}>
                <Search setIsSearched={setIsSearched} movies={movies} setMovies={setMovies}></Search>
                <nav style={{display: "flex", flexGrow: "1", flexWrap: "wrap",justifyContent: "center", padding: "10px 0"}}>
                  <NavLink exact to="/">Home</NavLink>&nbsp;&nbsp;
                  {/* <NavLink to="/categories">Categories</NavLink>&nbsp;&nbsp; */}
                  <NavLink to="/favorites">Favorites</NavLink>&nbsp;&nbsp;
                  <NavLink to="/watched">Watched</NavLink>&nbsp;&nbsp;
                  <NavLink to="/about">About</NavLink>
                </nav>
              </Collapse>    
          </Navbar>
        </Container>
        
    </header>
  );
}

export default Header;
