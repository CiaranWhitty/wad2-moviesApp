import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import "./index.css";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED

import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW

import MovieReviewPage from "./pages/movieReviewPage";

import upcomingMoviePage from './pages/upcomingMoviePage'

import MoviesContextProvider from "./contexts/moviesContext";

import GenresContextProvider from "./contexts/genresContext";

import AddMovieReviewPage from './pages/addMovieReviewPage'

import WatchListMoviesPage from './pages/watchListMoviesPage'

import Dashboard from "./pages/dashboard";

import ForgotPassword from "./pages/forgotPassword";

import UpdateProfile from "./components/userFunction/UpdateProfile";

import SiteHeader from "./components/siteHeader";


// import app from "../../fireBase/firebase";
import signupPage from './pages/signUp'
import loginPage from './pages/login'
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
  <>
  <AuthProvider>
    <div class="content">
      <BrowserRouter>
          <div className="jumbotron">
            
            <SiteHeader /> 

            <div className="container-fluid">
              <MoviesContextProvider>
                <GenresContextProvider> 
                  <Switch>    
  
                    <Route path="/forgotpassword" component={ForgotPassword} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/update-profile" component={UpdateProfile} />
                    
                    <Route path="/login" component={loginPage} />
                    <Route path="/signup" component={signupPage} />
                    
                    
                    <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                    <PrivateRoute exact path="/movies/watchlist" component={WatchListMoviesPage} />

                    <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                    <Route path="/reviews/:id" component={MovieReviewPage} />
                    
                    
                    <Route path="/movies/upcoming" component={upcomingMoviePage} />
                    <Route path="/movies/:id" component={MoviePage} />
                    <Route path="/" component={HomePage} />
                    
                    <Redirect from="*" to="/" />

                  </Switch>
                </GenresContextProvider>
              </MoviesContextProvider>
            </div>
          </div>
        </BrowserRouter>
      </div>
    {/* Background animation - https://codepen.io/chris22smith/pen/RZogMa */}
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    </AuthProvider>

  </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));