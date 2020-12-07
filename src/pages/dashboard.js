import React, {  } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

import { Header, Button, Card, Grid } from 'semantic-ui-react'
//  Icon, Image Container,
import ButnLogOut from '../components/buttons/butnLogOut'

export default function Dashboard() {
  // const [error, setError] = useState("")
  const { currentUser } = useAuth()

  return (
    <>

    <Grid columns='equal' padded='vertically'>

    <Grid.Row  columns='equal' textAlign='center'>
      <Grid.Column></Grid.Column>
      <Grid.Column>
        <Header as='h2' >
        Profile
        </Header>
      </Grid.Column>
      <Grid.Column></Grid.Column>
    </Grid.Row>
      
      <Grid.Row  columns='equal' textAlign='center'>

      <Grid.Column></Grid.Column>
        
        <Grid.Column>
          
            <Card centered>

              {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}

              <Card.Content>
                
                <Card.Header><strong>Email:</strong> {currentUser.email}</Card.Header>
                
                {/* <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
                
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description> */}

              </Card.Content>

              <Card.Content>

                <Button 
                as={Link} to="/update-profile"  
                size="big"
                color="blue"
                >
                Update Profile
                </Button>

                
              
              </Card.Content>

              <Card.Content>
                <ButnLogOut /> 
              </Card.Content>
                
            </Card>
        </Grid.Column>

        <Grid.Column></Grid.Column>
      
      </Grid.Row>
    </Grid>

    </>
  )
}