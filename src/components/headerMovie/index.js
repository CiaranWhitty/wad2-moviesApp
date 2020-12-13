import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
import { Grid, Button, Icon, Header } from 'semantic-ui-react'

const MovieHeader = ({ movie, history }) => {
  return (
    <>
        
    <Grid columns={2} padded centered>
        
      <Grid.Row >

        <Grid.Column >
        
        <Button animated size={"huge"} onClick={() => history.goBack()}>
          <Button.Content hidden>Back</Button.Content>
          <Button.Content visible>
          <Icon name='arrow left' />
          </Button.Content>
        </Button>

        </Grid.Column >
        
        

        <Grid.Column>
        
        <Header as='h1'>
          {movie.title}
          {"  "}
          <a href={movie.homepage}>
          <Icon  name='home' />
          </a>
        </Header>

        </Grid.Column>

      </Grid.Row>

    </Grid>

    </>
  );
};

export default withRouter( MovieHeader );