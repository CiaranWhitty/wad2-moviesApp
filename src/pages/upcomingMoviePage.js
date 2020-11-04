import React, { useState, useEffect } from "react";

import PageTemplate from '../components/templateMovieListPage'

import { getMovieUpcoming } from "../api/tmdb-api";

const MovieUpcomingListPage = () => {
  console.log("Hello World")

  const [upcomingMovies, setUpcomingMovies] = useState([]);
  useEffect(() => {
    getMovieUpcoming().then(upcomingMovies => {
      console.log(upcomingMovies)
      setUpcomingMovies(upcomingMovies);
    });
  }, []);

  return (
    
    <PageTemplate

    title={"Upcoming Movies"}
    movies={upcomingMovies}

    />

  );
};

export default MovieUpcomingListPage;