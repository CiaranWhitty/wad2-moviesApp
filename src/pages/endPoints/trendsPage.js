import React, {useContext} from "react";
import MovieListPageTemplate from "../../components/templateMovieListPage";
import AddReviewButton from '../../components/buttons/addReview'
import {MoviesContext} from '../../contexts/moviesContext'

const TrendsPage = () => {
  const context = useContext(MoviesContext);
  
  const trends = context.trendingMovies.filter((m) => {
    return !("load-trending" in m);
  });

  return (
    <MovieListPageTemplate
    title={"Trending Movies (This Week)"}
    movies={trends}
    action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default TrendsPage;