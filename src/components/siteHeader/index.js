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
  
  // state = { activeItem: 'TMDB Client' }
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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

              <Dropdown.Item 
              name='Trending'
              as={Link} to='/u/movies/trending/'>
                Trending
              </Dropdown.Item>

              <Dropdown.Item 
              name='Test'
              as={Link} to='/u/movies/toprated'>
                Top Rated
              </Dropdown.Item>

              <Dropdown.Item 
              name='Test'
              as={Link} to='/u/movies/popular'>
                Popular
              </Dropdown.Item>

              <Dropdown.Item 
              name='Test'
              as={Link} to='/u/movies/nowplaying'>
                Now Playing
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
          

        <Dropdown item text='Movies'>
            <Dropdown.Menu>
              <Dropdown.Item 
              name='TMDB Client'
              as={Link} to='/'>
                Discover
              </Dropdown.Item>

              <Dropdown.Item 
              name='Upcoming'
              as={Link} to='/movies/upcoming'>
                Upcoming
              </Dropdown.Item>

              <Dropdown.Item 
              name='Trending'
              as={Link} to='/movies/trending/'>
                Trending
              </Dropdown.Item>
              
              <Dropdown.Item 
              name='Test'
              as={Link} to='/movies/toprated'>
                Top Rated
              </Dropdown.Item>

              <Dropdown.Item 
              name='Test'
              as={Link} to='/movies/popular'>
                Popular
              </Dropdown.Item>

              <Dropdown.Item 
              name='Test'
              as={Link} to='/movies/nowplaying'>
                Now Playing
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>

          <ButnSignIn />

        </Menu.Menu>
      
      </Menu>
      
    </Sticky>

  );
};