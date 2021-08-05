import React, {useState} from 'react';
import TMDB from '../API/TMDB';

function Search({setIsSearched, movies, setMovies}) {
    let [ searchTextInput, setSearchTextInput ] = useState("");

    function handleInputChange(e)
    {
        setSearchTextInput(e.target.value);
    }

    function handleSearch(e)
    {
        e.preventDefault();
        setIsSearched(true);

        TMDB.getSearch(searchTextInput)
            .then(movieList => {
                console.log("MovieList:", movieList);
                setMovies(movieList);
            });

    console.log(movies);
    }

    function handleClear()
    {
        setIsSearched(false);
        setSearchTextInput("");
    }


    return (
        <div style={{display: "flex", flexGrow: "1", justifyContent: "center", alignItems: "center", padding: "10px 0", marginLeft: "10px", marginRight: "10px"}}>
            <form onSubmit={handleSearch} className="searchbar-container" style={{display: "flex", flexGrow: "1", justifyContent: "center", padding: "10px 0"}}>
                  <input onChange={handleInputChange}
                    value={searchTextInput}
                    type="text"
                    name="searchbar"
                    id="searchbar"
                    className="searchbar"
                    placeholder="Search by title"
                    autoComplete="off"
                    style={{display: "flex", flexGrow: "1", padding: "5px 10px", marginRight: "5px", borderRadius: "20px"}}
                  />
                  <button type="submit" className="searchbutton" style={{padding: "5px", marginRight: "3px", borderRadius: "10px", background: "rgb(188, 116, 255", color: "white"}}>Search</button>
                 
            </form>
            <button className="searchbutton" onClick={handleClear} style={{padding: "5px", borderRadius: "10px", background: "rgb(188, 116, 255", color: "white"}}>Clear</button>
            {/* <div style={{color: 'white'}}>{searchText}</div> */}
        </div>
    )
}

export default Search