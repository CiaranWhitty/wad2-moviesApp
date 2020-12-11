import React, { } from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";

import { Button, Icon } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

export default function ButnSignIn() {
  
  return (
            
        <Button 
        as={Link} to='/login'
        animated 
        size="big"
        color="blue"
        >
        <Button.Content visible className="signInButton"  
        
        >
        Sign In
        </Button.Content>
        <Button.Content hidden>
            <Icon name='arrow right' />
        </Button.Content>
        </Button>

     );
  }