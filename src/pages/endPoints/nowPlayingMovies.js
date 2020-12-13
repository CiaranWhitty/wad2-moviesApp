import React, {useContext} from "react";
import MovieListPageTemplate from "../../components/templateMovieListPage";
import AddReviewButton from '../../components/buttons/addReview'
import {MoviesContext} from '../../contexts/moviesContext'

const NowPlaying = props => {
  const context = useContext(MoviesContext);
  
  const now_playing = context.now_playing.filter((m) => {
    return !("load-now_playing" in m);
  });

  return (

    <MovieListPageTemplate
    title={"Now Playing Movies"}
    movies={now_playing}
    action={movie => <AddReviewButton movie={movie} />}

    />
  );
};

export default NowPlaying;