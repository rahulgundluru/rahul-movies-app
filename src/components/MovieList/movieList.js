import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './movieList.css'

import MovieDetails from '../MovieDetails/moviedetails.js'

const API_KEY = "7afea29101af8fc97bda79dfdd019167"; 

const MovieList = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [sortBy, setSortBy] = useState('release_date');
    const [sortOrder, setSortOrder] = useState('desc');

    const handleSearch = useCallback(async () => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
              api_key: API_KEY,
              query: query,
              page: currentPage,
              sort_by: sortBy,
              order: sortOrder,
            },
          });
          console.log(response.data)
          setMovies(response.data.results);
          setTotalPages(response.data.total_pages);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }, [query, currentPage, sortBy, sortOrder]);
      

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        handleSearch();
    };

    useEffect(() => {
        handleSearch()
    }, [currentPage, sortBy, sortOrder, handleSearch]);
    return(
        <div className='main-cont'>
            <p className='para-input'>Explore Movie Details</p>
            
            <div className="search-container">
                <input
                type="text"
                placeholder="Enter movie name here"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='input-change'
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="sort-container">
                <label className='label-sort'>Sort By:</label>
                <select className="select-input" value={sortBy} onChange={handleSortChange}>
                <option value="release_date">Release Date</option>
                <option value="vote_average">Rating</option>
                </select>
                <select className='select-input' value={sortOrder} onChange={handleOrderChange}>
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
                </select>
            </div>
            <div className="movie-list">
                {movies.map((movie) => (
                    <MovieDetails key={movie.id} details={movie} />
                
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                </button>
                ))}
            </div>
        </div>
    )
}

export default MovieList