import React, { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import {  useHistory } from "react-router-dom"
import { Button, Icon, Message } from 'semantic-ui-react'

export default function ButnLogOut() {
  const [error, setError] = useState("")

  const {logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
        
        {/* {currentUser.email} */}

            <Button 
                variant="link"
                onClick={handleLogout}
                animated 
                size="big"
                color="red"
                >
              <Button.Content visible className="signInButton" >
              Log out
              </Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
            {error && <Message variant="danger">{error}</Message>}

        
    </>
  )
}
