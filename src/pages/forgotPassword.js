import React, { useRef, useState } from "react";
import { Button, Form, Message } from 'semantic-ui-react'

import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom"

export default function ForgotPassword() {

  const emailRef = useRef()
  const {resetPassword} = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
    
      <div id="signinContainer">
        <h2>Reset Password</h2>

        {error && <Message warning={true}>{error}</Message>}
        {message && <Message warning={false}>{message}</Message>}
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
            <label>Already have an account? <Link to="/login">Log In</Link></label>      
          </Form.Field>
          <Button disabled={loading} class="btnSignUp" type='submit'>Reset</Button>
        </Form>

      </div>
    </>
  )
}

          