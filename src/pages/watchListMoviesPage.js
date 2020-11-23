import React, {useContext} from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WatchListMoviesPage = () => {
  const context = useContext(MoviesContext);
  const WatchList = context.upcoming.filter( m => m.watchlist )
  
  return (
    <PageTemplate
    title={"WatchList Movies"}
    movies={WatchList}
    action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchListMoviesPage;