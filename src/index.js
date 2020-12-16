import React, { lazy, Suspense  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css"
import 'semantic-ui-css/semantic.min.css'
import "./index.css";

import PrivateRoute from "./routes/PrivateRoute";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AuthProvider from "./contexts/AuthContext";

import SiteHeader from "./components/siteHeader";

import HomePage from "./pages/homePage";

import MoviePage from './pages/movieDetailsPage'
//import MovieReviewPage from "./pages/movieReviewPage";
import signupPage from './pages/signUp'
import loginPage from './pages/login'

//import AddMovieReviewPage from './pages/addMovieReviewPage'
//import WatchListMoviesPage from './pages/endPoints/watchListMoviesPage'
//import DiscoverMoviesPage from "./pages/endPoints/discoverMovies";
//import Toprated from "./pages/endPoints/topratedMovies";
//import Popular from "./pages/endPoints/popularMovies";
//import NowPlaying from "./pages/endPoints/nowPlayingMovies";
//import TrendsPage from "./pages/endPoints/trendsPage";

//import FavoriteMoviesPage from './pages/endPoints/favoritesMoviesPage'  
//import upcomingMoviePage from './pages/endPoints/upcomingMoviePage'
//import Dashboard from "./pages/dashboard";
import ForgotPassword from "./pages/forgotPassword";
import UpdateProfile from "./components/userFunction/UpdateProfile";

const WatchListMoviesPage = lazy(() => import("./pages/endPoints/watchListMoviesPage"));
const DiscoverMoviesPage = lazy(() => import("./pages/endPoints/discoverMovies"));
const Toprated = lazy(() => import("./pages/endPoints/topratedMovies"));
const Popular = lazy(() => import("./pages/endPoints/popularMovies"));
const NowPlaying = lazy(() => import("./pages/endPoints/nowPlayingMovies"));
const TrendsPage = lazy(() => import("./pages/endPoints/trendsPage"));

const FavoriteMoviesPage = lazy(() => import("./pages/endPoints/favoritesMoviesPage"));
const upcomingMoviePage = lazy(() => import("./pages/endPoints/upcomingMoviePage"));
const Dashboard = lazy(() => import("./pages/dashboard"));
// const ForgotPassword = lazy(() => import("./pages/forgotPassword"));
// const UpdateProfile = lazy(() => import("./components/userFunction/UpdateProfile"));

// const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
// const signupPage = lazy(() => import("./pages/signUp"));
// const loginPage = lazy(() => import("./pages/login"));

const App = () => {

  return (
  <>
  
    <div className="content">
      <BrowserRouter>
      <AuthProvider>
          <div className="jumbotron">
            
            <SiteHeader />

            <div className="container-fluid">
              <MoviesContextProvider>
                <GenresContextProvider> 
                  <Suspense fallback={<h1>Loading page....</h1>}>
                    <Switch>    
                      
                      {/* When logged in */}
                      <PrivateRoute exact path="/u/dashboard" component={Dashboard} />
                      <PrivateRoute exact path="/u/update-profile" component={UpdateProfile} />
                      <PrivateRoute exact path="/u/movies/favorites" component={FavoriteMoviesPage} />
                      <PrivateRoute exact path="/u/movies/watchlist" component={WatchListMoviesPage} />
                      <PrivateRoute exact path="/u/movies/upcoming" component={upcomingMoviePage} />
                      <PrivateRoute path="/u/movies/toprated" component={Toprated} />
                      <PrivateRoute path="/u/movies/popular" component={Popular} />
                      <PrivateRoute path="/u/movies/nowplaying" component={NowPlaying} />
                      <PrivateRoute path="/u/movies/trending" component={TrendsPage} />
                      <PrivateRoute exact path="/u/movies/:id" component={MoviePage} />
                      <PrivateRoute exact path="/u/" component={DiscoverMoviesPage} />
                      
                      {/* Copied: DiscoverMoviesPage, MoviePage, upcomingMoviePage, Toprated, Popular, NowPlaying */}

                      <Route path="/reviews/form" component={AddMovieReviewPage} />
                      <Route path="/reviews/:id" component={MovieReviewPage} />
                      
                      {/* Normal view */}
                      <Route path="/forgotpassword" component={ForgotPassword} />
                      <Route path="/login" component={loginPage} />
                      <Route path="/signup" component={signupPage} />
                      
                      <Route path="/movies/trending" component={TrendsPage} />
                      <Route path="/movies/upcoming" component={upcomingMoviePage} />
                      <Route path="/movies/toprated" component={Toprated} />
                      <Route path="/movies/popular" component={Popular} />
                      <Route path="/movies/nowplaying" component={NowPlaying} />

                      <Route path="/HomePage" component={HomePage} /> 
                      <Route path="/movies/:id" component={MoviePage} />
                      <Route path="/" component={DiscoverMoviesPage} />

                      <Redirect from="*" to="/" />

                    </Switch>
                  </Suspense>
                </GenresContextProvider>
              </MoviesContextProvider>
            </div>
          </div>
          </AuthProvider>
        </BrowserRouter>
      </div>
    {/* Background animation - https://codepen.io/chris22smith/pen/RZogMa */}
    <div className="bg"></div>
    <div className="bg bg2"></div>
    <div className="bg bg3"></div>

  </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));