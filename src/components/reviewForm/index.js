import React, {useContext } from "react";
import "./reviewForm.css";
import useForm from "react-hook-form";
import {MoviesContext} from '../../contexts/moviesContext'
import { withRouter } from "react-router-dom";
import { Button, Form, Input, TextArea, } from 'semantic-ui-react'
const ReviewForm = ({ movie, history }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(MoviesContext);

  const onSubmit = data => {
    context.addReview(movie, data)
    history.push("/movies/favorites");
  };

  return (
    <>        
    
    <h3>Add your review</h3>
    
    {errors.author && <p className=" text-white">{errors.author.message} </p>}

    {errors.content && (
          <p className="text-white">{errors.content.message} </p>
        )}

    <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Group widths='equal'>

      <Form.Field
        control={Input}
        type="text"
        placeholder="Author"
        name="author"
        defaultValue={movie.review ? movie.review.author : ""}
        ref={register({ required: "Author name required" })}

        />

    </Form.Group>
    
    <Form.Field
      control={TextArea}
      rows="10"
      type="text"
      placeholder="Write your review"
      defaultValue={movie.review ? movie.review.content : ""}
      name="content"
      ref={register({
        required: "No review text",
        minLength: { value: 10, message: "Review is too short" }
      })}

    />
    <Form.Group >
      <Form.Field control={Button}>Submit</Form.Field>
      <Form.Field 
        control={Button}
        type="reset"
        onClick={() => {
          reset({
            author: "",
            content: ""
          });
        }}
        >
        Reset
        </Form.Field>
    </Form.Group>
  </Form>

    </>
  );
};

export default withRouter(ReviewForm);