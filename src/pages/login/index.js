import React, { useRef, useState} from "react";
import { Button, Form, Message } from 'semantic-ui-react'

import { useAuth } from "../../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom"

import "./login.css";

export default function LoginPage() {

  const emailRef = useRef()
  const passwordRef = useRef()

  const {login} = useAuth()
  const { setIsAuthenticated } = useAuth()
  
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value) 
      setIsAuthenticated(true)
      history.push("u/dashboard")
    } catch {
      setError("Failed to log in")
      setIsAuthenticated(false)
    }
    
    setLoading(false)
  }

  return (
    <>
    
      <div id="signinContainer">
        <h2>SignIn Page</h2>

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
            <Link to="/forgotPassword">Forgot Password?</Link>   
          </Form.Field>
          <Form.Field>
            <label>Need an account? <Link to="/signup">Sign Up</Link></label>      
          </Form.Field>
          <Button disabled={loading} class="btnSignUp" type='submit'>Log In</Button>
        </Form>

      </div>
    </>
  )
}

          