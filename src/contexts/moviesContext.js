import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getTopRatedMovies, getPopularMovies, getNow_PlayingMovies, getTrends } from "../api/tmdb-api";

/* Firebase: https://www.youtube.com/watch?v=PKwu15ldZ7k */

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {

    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        toprated: [...state.toprated],
        popular: [...state.popular],
        now_playing: [...state.now_playing],
        trendingMovies: [...state.trendingMovies],
      };
   
    case "add-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        movies: [...state.movies],
        toprated: [...state.toprated],
        popular: [...state.popular],
        now_playing: [...state.now_playing],
        trendingMovies: [...state.trendingMovies],
      };

    case "load":
      return { 
        movies: action.payload.movies, 
        upcoming: [...state.upcoming],
        toprated: [...state.toprated],
        popular: [...state.popular],
        now_playing: [...state.now_playing],
        trendingMovies: [...state.trendingMovies],
      
      };
    case "load-upcoming":
      return { 
        upcoming: action.payload.movies, 
        movies: [...state.movies],
        toprated: [...state.toprated],
        popular: [...state.popular],
        now_playing: [...state.now_playing],
        trendingMovies: [...state.trendingMovies],
      };
      
    case "load-toprated":
      return { 
        toprated: action.payload.movies, 
        movies: [...state.movies], 
        upcoming: [...state.upcoming],
        popular: [...state.popular],
        now_playing: [...state.now_playing],
        trendingMovies: [...state.trendingMovies],
      };

    case "load-popular":
      return { 
        popular: action.payload.movies, 
        movies: [...state.movies], 
        upcoming: [...state.upcoming],
        toprated: [...state.toprated],
        now_playing: [...state.now_playing],
        trendingMovies: [...state.trendingMovies],
      };

    case "load-now_playing":
      return { 
        now_playing: action.payload.movies,  
        movies: [...state.movies], 
        upcoming: [...state.upcoming],
        toprated: [...state.toprated],
        popular: [...state.popular],
        trendingMovies: [...state.trendingMovies],
      };

      case "load-trending":
      return { 
        trendingMovies: action.payload.movies,  
        movies: [...state.movies], 
        upcoming: [...state.upcoming],
        toprated: [...state.toprated],
        popular: [...state.popular],
        now_playing: [...state.now_playing],
      };
/////////////////////////////////////////////////////////////////////////////////////

    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
      };
    default:
      return state;
  }
};
      
const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], toprated: [], popular: [], now_playing: [], trendingMovies: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };
  
  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopRatedMovies().then((movies) => {
      dispatch({ type: "load-toprated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPopularMovies().then((movies) => {
      dispatch({ type: "load-popular", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getNow_PlayingMovies().then((movies) => {
      dispatch({ type: "load-now_playing", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    getTrends().then((movies) => {
      dispatch({ type: "load-trending", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  
  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        toprated: state.toprated,
        popular: state.popular,
        now_playing: state.now_playing,
        trendingMovies: state.trendingMovies,

        addToWatchList: addToWatchList,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;