import React, {useContext} from "react";
import MovieListPageTemplate from "../../components/templateMovieListPage";
import AddReviewButton from '../../components/buttons/addReview'
import {MoviesContext} from '../../contexts/moviesContext'

const Toprated = props => {
  const context = useContext(MoviesContext);
  
  const toprated = context.toprated.filter((m) => {
    return !("load-toprated" in m);
  });

  return (

    <MovieListPageTemplate
    title={"Top Rated Movies"}
    movies={toprated}
    action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default Toprated;