import React, { useContext } from "react";
import PageTemplate from '../../components/templateMovieListPage'
import {MoviesContext} from '../../contexts/moviesContext'
import AddToFavoritesButton from '../../components/buttons/addToFavorites'

const DiscoverMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default DiscoverMoviesPage;