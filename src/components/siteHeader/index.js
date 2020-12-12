import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import "./siteHeader.css";
import 'semantic-ui-css/semantic.min.css'
import { Label, Dropdown, Menu, Sticky } from 'semantic-ui-react'
import { useAuth } from "../../contexts/AuthContext";
import ButnLogOut from '../buttons/butnLogOut'
import ButnSignIn from '../buttons/butnSignIn'

export default function SiteHeader() {

  const context = useAuth();
  
  return context.isAuthenticated ? (
    
    <Sticky>
      {/* pointing secondary or borderless */}
      <Menu borderless size='huge' > 
        <Menu.Item position='left'
          name='TMDB Client'
          as={Link} to='/u/'
          
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

          <Dropdown item text='Movies'>
            <Dropdown.Menu>
              <Dropdown.Item 
              name='TMDB Client'
              as={Link} to='/u/'
              >
              <Label color='red'>1</Label>
                Discover
              </Dropdown.Item>
              <Dropdown.Item 
              name='Upcoming'
              as={Link} to='/u/movies/upcoming' 
              >
              <Label color='blue'>2
              </Label>
                Upcoming
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <Dropdown item text='User Created'>
            <Dropdown.Menu>
            <Dropdown.Item 
              name='Favorites'
              as={Link} to='/u/movies/favorites'
              >
              <Label color='red'>3</Label>
                Favorites
              </Dropdown.Item>
              <Dropdown.Item 
              name='WatchList'
              as={Link} to='/u/movies/watchlist'
              >
              <Label  color='blue'>4</Label>
                WatchList
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>           
          
          <Menu.Item
            name='Profile'
            as={Link} to='/u/dashboard' 
          />

          <ButnLogOut />

        </Menu.Menu>
      
      </Menu>
      
    </Sticky>

  ) : (

    <Sticky>
      {/* pointing secondary or borderless */}
      <Menu borderless size='huge' > 
        <Menu.Item position='left'
          name='TMDB Client'
          //active={activeItem === 'TMDB Client'}
          as={Link} to='/'
          //onClick={this.handleItemClick}
          
        />

        <Menu.Menu position='right'>

          <Menu.Item
            name='Discover'
            //active={activeItem === 'TMDB Client' && 'Discover'}
            as={Link} to='/'
            //onClick={this.handleItemClick}
          />

          <Menu.Item
            name='Upcoming'
            //active={activeItem === 'Upcoming'}
            as={Link} to='/movies/upcoming' 
            //onClick={this.handleItemClick}
          />

          <ButnSignIn />

        </Menu.Menu>
      
      </Menu>
      
    </Sticky>

  );
};