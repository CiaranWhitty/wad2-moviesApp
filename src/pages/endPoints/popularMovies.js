import React, {useContext} from "react";
import MovieListPageTemplate from "../../components/templateMovieListPage";
import AddReviewButton from '../../components/buttons/addReview'
import {MoviesContext} from '../../contexts/moviesContext'

const Popular = props => {
  const context = useContext(MoviesContext);
  
  const popular = context.popular.filter((m) => {
    return !("load-popular" in m);
  });

  return (

    <MovieListPageTemplate
    title={"Popular Movies"}
    movies={popular}
    action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default Popular;