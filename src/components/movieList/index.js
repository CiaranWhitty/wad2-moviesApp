import React from "react";
import Movie from "../movieCard/";
import "./movieList.css";

import { Card } from 'semantic-ui-react'

const MovieList = ({movies, action}) => {
  const movieCards = movies.map(m => (
    <Movie key={m.id} movie={m} action={action} />
  ));
  return <Card.Group centered stackable doubling itemsPerRow={4}>{movieCards}</Card.Group>;

};

export default MovieList;

