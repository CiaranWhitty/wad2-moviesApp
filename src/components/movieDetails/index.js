import React from "react";
import "./movieDetails.css";
import { List, Header, Icon } from 'semantic-ui-react'

export default ({ movie }) => {
  return (
    <>
    
      
      <Header as='h4'>Overview</Header>

      <p>{movie.overview}</p>
      
        <List divided size={"medium"}>
          <List.Item>
            <List.Icon name='dot circle' />
            <List.Content>
              Runtime (min.):
              {movie.runtime}
              </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name='dot circle' />
            <List.Content>
              Release Date (min.): 
              {movie.release_date}
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name='dot circle' />
            <List.Content>
              Genres:
              <List.List>
                {movie.genres.map(g => (
                <List.Item key={g.name} bulleted>
                <List.Icon name='dot circle outline' />
                  {g.name}
                </List.Item>
                ))}
              </List.List>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name='dot circle' />
            <List.Content>
              Spoken Languages:
              <List.List>
                {movie.spoken_languages.map(lang => (
                <List.Item key={lang.name}>
                <List.Icon name='dot circle outline' />
                  {lang.name}
                </List.Item>
                ))}
              </List.List>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name='dot circle' />
            <List.Content>
              Production Companies:
              <List.List>
                {movie.production_companies.map(pc => (
                <List.Item key={pc.name}>
                <List.Icon name='dot circle outline' />
                  {pc.name} 
                </List.Item>
                ))}
              </List.List>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name='dot circle' />
            <List.Content>
              Production Countries:
              <List.List>

                {movie.production_countries.map(pcountries => (
                <List.Item key={pcountries.name}>
                <List.Icon name='dot circle outline' />
                  {pcountries.name} 
                </List.Item>
                ))}
              </List.List>
            </List.Content>
          </List.Item>

        </List>

    </>
  );
};