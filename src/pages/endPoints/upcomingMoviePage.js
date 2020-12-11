import React, {useContext} from "react";
import PageTemplate from '../../components/templateMovieListPage'
import AddToWatchListButton from '../../components/buttons/addToWatchList'
import { MoviesContext } from '../../contexts/moviesContext'
import { AuthContext } from "../../contexts/AuthContext";

export default function MovieUpcomingListPage() {

  const contextM = useContext(MoviesContext);
  const context = useContext(AuthContext);

  const upcomingMovies = contextM.upcoming.filter((m) => {  // New
    return !("watchlist" in m); // watchlist
  });
  
  return context.isAuthenticated ? (
    
    <PageTemplate
    title={"Upcoming Movies"}
    movies={upcomingMovies}
    action={movie => <AddToWatchListButton movie={movie} />}
    />
    ) : (

    <PageTemplate
      title={"Upcoming Movies"}
      movies={upcomingMovies}
      action={movie => <AddToWatchListButton movie={movie} />}
    />
   
 
 );
};