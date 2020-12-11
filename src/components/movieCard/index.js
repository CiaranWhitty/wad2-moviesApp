import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card, Image } from 'semantic-ui-react'

const MovieCard = ({movie, action}) => {

  return (

      <Card>
        <Card.Content >
          <Link to={`/movies/${movie.id}`}>
            <Image fluid
              className="card-img-tag center "
              alt={movie.title}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "./film-poster-placeholder.png"
              }
            />
          </Link>

          <Card.Description textAlign={"center"}>
            
            <Card.Header centered="true" >{movie.title}</Card.Header>
            {/* <h4 className="card-title ">{movie.title}</h4> */}
            
            <Card.Meta>
              <FontAwesomeIcon icon={["fas", "calendar"]} />
              <span> {movie.release_date}</span>
              <FontAwesomeIcon icon={["fas", "star"]} />
              <span> {movie.vote_average}</span>
            </Card.Meta>

          </Card.Description>

          <div className="card-footer">
            {action(movie)}
          </div>

        </Card.Content>
      </Card>

  );
};

export default MovieCard;