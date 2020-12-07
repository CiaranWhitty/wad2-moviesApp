import React, { useRef, useState } from "react";
import { Button, Form, Message } from 'semantic-ui-react'

import { useAuth } from "../../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom"

export default function UpdateProfile() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const {currentUser, updatePassword} = useAuth()
  
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if(passwordRef.current.value){
      promises.push(updatePassword(passwordRef.current.value))

    }
    Promise.all(promises)
      .then(() => {
        history.push("/dashboard")
        
      })
      .catch(() => {
        setError("Failed to update account")
        

      })
      .finally(() => {

        setLoading(false)
      })

  }

  return (
    <>
          
      <div id="signupContainer">
        <h2>UpdateProfile Page</h2>
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
            defaultValue={currentUser.email}
            ref={emailRef}
            required
            />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input
            name="passwordOne"
            type="password"
            placeholder="Leave blank to keep the same"
            ref={passwordRef}
            />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password:</label>
            <input
            name="passwordTwo"
            type="password"
            placeholder="Leave blank to keep the same"
            ref={passwordConfirmRef}
            />
          </Form.Field>
          <Form.Field>
            <Link to="/dashboard">Cancel</Link>     
          </Form.Field>
          <Button disabled={loading} class="btnSignUp" type='submit'>Update</Button>
        </Form>

      </div>
    </>
  )
}