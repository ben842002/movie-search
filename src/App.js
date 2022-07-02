import React, { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const searchMovies = async (title) => {
        // call API
        const response = await fetch(`${process.env.REACT_APP_API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Star Wars');
    }, []);

    return (
        <div className="app">
            <h1>Movie Search</h1>

            {/* Search bar */}
            <div className="search">
                <input 
                    placeholder="Enter Movie Name" 
                    value={search}
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                />
                
                <img src={SearchIcon} alt="search" onClick={() => {
                        searchMovies(search);
                    }}
                />
            </div>

            {movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie, index) => {
                            return <MovieCard movie={movie} key={index} />
                        })}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;