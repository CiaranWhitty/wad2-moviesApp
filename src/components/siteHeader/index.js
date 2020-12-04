import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

import 'semantic-ui-css/semantic.min.css'
import { Label, Dropdown, Menu } from 'semantic-ui-react'
export default class MenuExampleSizeHuge extends Component {
  
  state = { activeItem: 'TMDB Client' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

  const { activeItem } = this.state

  return (
      // pointing secondary or borderless
      <Menu borderless size='huge' > 
        <Menu.Item position='left'
          name='TMDB Client'
          active={activeItem === 'TMDB Client'}
          as={Link} to='/'
          onClick={this.handleItemClick}
          
        />

        {/* <Menu.Item style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <FontAwesomeIcon
            className="navbar-text text-dark"
            icon={["fas", "video"]}
            size="3x"
          />
          <span className="navbar-text text-dark"> 
            For the movie enthusiast !!
          </span>
          <FontAwesomeIcon
            className="navbar-text text-dark"
            icon={["fas", "film"]}
            size="3x"
          />
        </Menu.Item> */}

        <Menu.Menu position='right'>
          
          {/* <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item> */}

          <Dropdown item text='Movies'>
            <Dropdown.Menu>
              <Dropdown.Item 
              name='TMDB Client'
              active={activeItem === 'TMDB Client'}
              as={Link} to='/'
              onClick={this.handleItemClick}
              >
              <Label color='red'>0</Label>
                Discover
              </Dropdown.Item>
              <Dropdown.Item 
              name='Upcoming'
              active={activeItem === 'Upcoming'}
              as={Link} to='/movies/upcoming' 
              onClick={this.handleItemClick}
              >
              <Label color='blue'>0</Label>
                Upcoming
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <Dropdown item text='User Created'>
            <Dropdown.Menu>
            <Dropdown.Item 
              name='Favorites'
              active={activeItem === 'Favorites'}
              as={Link} to='/movies/favorites'
              onClick={this.handleItemClick}
              >
              <Label color='red'>0</Label>
                Favorites
              </Dropdown.Item>
              <Dropdown.Item 
              name='WatchList'
              active={activeItem === 'WatchList'}
              as={Link} to='/movies/watchlist'
              onClick={this.handleItemClick}
              >
              <Label  color='blue'>0</Label>
                WatchList
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Menu.Menu>
      </Menu>

     );
  }
};