import React, { useRef, useState } from "react";
import { Button, Form, Message } from 'semantic-ui-react'

import { useAuth } from "../../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom"

import "./signup.css";

export default function Signup() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const {signup} = useAuth()
  
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
          
      <div id="signupContainer">
        <h2>SignUp</h2>
        {/* testing user */}
        {/* {currentUser.email} */}
        {error && <Message warning={true}>{error}</Message>}
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Email Address:</label>
            <input
            name="email"
            type="text"
            placeholder="Email Address"
            ref={emailRef}
            required
            />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input
            name="passwordOne"
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
            />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password:</label>
            <input
            name="passwordTwo"
            type="password"
            placeholder="Confirm Password"
            ref={passwordConfirmRef}
            required
            />
          </Form.Field>
          <Form.Field>
            <label>Already have an account? <Link to="/login">Log In</Link></label>      
          </Form.Field>
          <Button disabled={loading} class="btnSignUp" type='submit'>Sign Up</Button>
        </Form>

      </div>
    </>
  )
}