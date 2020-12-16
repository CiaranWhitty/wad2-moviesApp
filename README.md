# Assignment 1 - (Web Dev 2) ReactJS app. 
# Assignment 1 - (Agile) ReactJS app Testing.

Name: Ciaran Whitty 20085909

## Features.
 
 + Feature 1 - The ability to create an account.
 + Feature 2 - Cloud Login With firebase. 
 + Feature 3 - Allows only users logged in to add to favouites and watchlists.
 + Feature 4 - Allows users to change password and reset password if forgotten.

## Setup requirements (If required).

### WebSite.

+ 1 - Need to create a TMDB account and get the TMDB API KEY and put it in a .env file.
+ 2 - Need to create a Firebase account and get Firebase API keys and put it in a .env file. 

### Testing.

+ 1 - Need a TMDB API KEY and put it in git lab variables.
+ 2 - Need to get Firebase API keys and put it git lab variables. 
+ 3 - Need to change poject id in cypress.json and create a git lab variable.

### Variables Need for setup:

+ CYPRESS_RECORD_KEY
+ CYPRESS_TMDB_KEY

+ REACT_APP_FIREBASE_API_KEY
+ REACT_APP_FIREBASE_APP_ID
+ REACT_APP_FIREBASE_AUTH_DOMAIN
+ REACT_APP_FIREBASE_DATABASE_URL
+ REACT_APP_FIREBASE_MESSAGING_SENDER_ID
+ REACT_APP_FIREBASE_PROJECT_ID
+ REACT_APP_FIREBASE_STORAGE_BUCKET
+ REACT_APP_TMDB_KEY


## API Data Model.

+ https://api.themoviedb.org/3/discover/movie - Discover movies by different types of data like search, genres.
+ https://api.themoviedb.org/3/movie/upcoming - Get a list of upcoming movies in theatres

+ https://api.themoviedb.org/3/trending/movies/week - Get the  weekly trending movies. 
+ https://api.themoviedb.org/3/movie/top_rated - Get the top rated movies on TMDb.
+ https://api.themoviedb.org/3/movie/popular - Get a list of the current popular movies on TMDb.
+ https://api.themoviedb.org/3/movie/now_playing - Get a list of movies in theatres in Ireland. 

## App Design.

### UI Design.

![][homepage]
>Shows an updated homepage

![][movieDetail]
>Shows updated movie details page.

![][login]
>Shows where user can login.

![][signup]
>Shows where user can signup..

![][forgotpassword]
>Shows where user can reset their password.

![][dashboard]
>Shows where user will be sent if login is successful.

![][updatepassword]
>Shows where user can change their password.

![][trending]
>Shows the trending page.

## Routing.

+ /u/dashboard 			(protected) - Displays when user signs in.
+ /u/update-profile 	(protected) - Displays when user wants to update password.
+ /u/movies/favorites 	(protected) - Displays the user's favorite movies selection.
+ /u/movies/watchlists 	(protected) - Displays the user's watchlist movies selection.
+ /u/movies/upcoming 	(protected) - Displays upcoming movies.
+ /u/movies/toprated 	(protected) - Displays top rated movies.
+ /u/movies/popular 	(protected) - Displays popular movies.
+ /u/movies/nowplaying 	(protected) - Displays the now playing movies.
+ /u/movies/trending 	(protected) - Displays trending movies that week.
+ /u/movies/:id 		(protected) - Displays a specifc movies details.
+ /u/ 					(protected) - Displays discover movies

+ /forgotpassword		(public) - Displays page for user to request to change password.
+ /login 				(public) - Displays Login page.
+ /signup 				(public) - Displays Signup page.
+ /movies/trending 		(public) - Displays trending movies that week.
+ /movies/toprated 		(public) - Displays top rated movies.
+ /movies/popular 		(public) - Displays popular movies.
+ /movies/nowplaying 	(public) - Displays the now playing movies.

### Data hyperlinking.

![][movieDetailsImage]
> Clicking on the image in a movies details page, to will bring you the a exteral movie page or if not available sends you back to the homepage.

![][movieDetailsHomeIcon]
> Clicking on the home icon in a movies details page, to will bring you the a exteral movie page or if not available sends you back to the homepage.

## Independent learning (If relevant).

+ Background animation - https://codepen.io/chris22smith/pen/RZogMa
+ Search Bar - https://codepen.io/takaneichinose/pen/gKVXXL
+ Genres (Select) - https://www.filamentgroup.com/lab/select-css.html
+ Firebase: https://www.youtube.com/watch?v=PKwu15ldZ7k

---------------------------------

[homepage]: ./public/S1_homepage.png

[login]: ./public/S2_login.png
[signup]: ./public/S3_signup.png
[forgotpassword]: ./public/S4_forgotpassword.png

[dashboard]: ./public/S5_dashboard.png
[updatepassword]: ./public/S6_updatepassword.png
[trending]: ./public/S7_trending.png
[movieDetail]: ./public/S8_movieDetail.png

[movieDetailsImage]: ./public/S9_movieDetailsImage.png
[movieDetailsHomeIcon]: ./public/S10_movieDetailsHomeIcon.png