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
  
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value) 
      setIsAuthenticated(true)
      history.push("u/dashboard")
    } catch {
      setMessage("Failed to log in")
      setIsAuthenticated(false)
    }
    
    setLoading(false)
  }

  return (
    <>
    
      <div id="signinContainer">
        <h2>SignIn</h2>

        {message && <Message warning={true}>{message}</Message>}
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

          