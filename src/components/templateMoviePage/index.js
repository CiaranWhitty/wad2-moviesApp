import React from "react";
import MovieHeader from '../headerMovie'
import "./moviePage.css";
import { Grid, Segment, Image } from 'semantic-ui-react'

const TemplateMoviePage = ({ movie, children }) => {
  return (
    <>

      <MovieHeader movie={movie} />

      <Grid columns='equal' padded >
        <Grid.Row >
          <Grid.Column width={7}>
            <Image 
            src={ 
              movie.poster_path 
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`  
              : "./film-poster-placeholder.png"  
            }
            className="movie"
            alt={movie.title}
            href={movie.homepage || "/"} 
                />
          </Grid.Column>
          <Grid.Column>
            <Segment inverted padded color={"blue"}>
              {children}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  );
};

export default TemplateMoviePage;