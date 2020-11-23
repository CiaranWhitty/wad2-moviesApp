import React, {useContext} from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddToWatchListButton from '../components/buttons/addToWatchList'
import {MoviesContext} from '../contexts/moviesContext'

const MovieUpcomingListPage = () => {
  const context = useContext(MoviesContext);

  const upcomingMovies = context.upcoming.filter((m) => {  // New
    return !("watchlist" in m); // watchlist
  });
  
  return (
    <PageTemplate
    title={"Upcoming Movies"}
    movies={upcomingMovies}
    action={movie => <AddToWatchListButton movie={movie} />}
    />
  );
};

export default MovieUpcomingListPage;