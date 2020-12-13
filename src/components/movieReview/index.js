import React from "react";
import { Header } from 'semantic-ui-react'

export default ({ review }) => {
  return (
    <>
      
      <Header as='h1'>Review By: {review.author} </Header>
      <p>{review.content} </p>
      
    </>
  );
};