import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

class Nav extends Component {
  state = { activeItem: 'dashboard' }

  handleItemClick = (e, { name }) => {
      e.preventDefault();
      this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted size='large' color='green' fluid widths={4}>
          {/* {the icon looks a little -wonky- will update during polish} */}
        <NavLink to='/'>
        <Menu.Item fitted
          name='dashboard'
          active={activeItem === 'dashboard'}
          onClick={this.handleItemClick} >
              <img src="https://files.slack.com/files-pri/T4JUEB3ME-FMSHN0F9V/reciepttrackerlogo.png" alt="logo" className="logoBoi"/>
        </Menu.Item>
        </NavLink>

        <NavLink to="/add-receipt">
        <Menu.Item
          name='Add Receipt'
          active={activeItem === 'Add Receipt'}
          onClick={this.handleItemClick}
        > Add Receipt +
        </Menu.Item>
        </NavLink>

        <NavLink to="/sign-up">
        <Menu.Item
          name='Sign Up'
          active={activeItem === 'Sign Up'}
          onClick={this.handleItemClick}
        > Sign Up
        </Menu.Item>
        </NavLink>
        
        <Menu.Item
          name='Log In'
          active={activeItem === 'Log In'}
          onClick={this.handleItemClick}
        >
           <NavLink to="/login"><Button primary>Log In</Button></NavLink>
        </Menu.Item>
        
      </Menu>
    )
  }
}


export default Nav