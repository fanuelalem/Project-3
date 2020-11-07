
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Segment,Input, Menu } from 'semantic-ui-react'
import './../../index.css'

export default class Nav extends Component {
  state = { activeItem: 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  
  render(props) {
    console.log(this.props)

    const { activeItem } = this.state

    return (
       <div className="app"> 
      <Segment   >
      <Menu secondary >
        {this.props.authenticated?<Menu.Item
          as ={Link}
          to="/home"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />:null}
        {this.props.authenticated?<Menu.Item
          as ={Link}
          to="/winners"
          name='winners'
          active={activeItem === 'winners'}
          onClick={this.handleItemClick}
        />: null}
        {this.props.authenticated?<Menu.Item
          as ={Link}
          to="/losers"
          name='losers'
          active={activeItem === 'losers'}
          onClick={this.handleItemClick}
        />: null}
        
         {this.props.authenticated ? <Menu.Item
          as ={Link}
          to="/watchlist"
          name='watchlist'
          active={activeItem === 'watchlist'}
          onClick={this.handleItemClick}
        /> :null }

         {this.props.authenticated ? <Menu.Item
          as ={Link}
          to="/community"
          name='community'
          icon='users'
          active={activeItem === 'community'}
          onClick={this.handleItemClick}
        /> :null }

        

        <Menu.Menu position='right'>
          {this.props.authenticated?<Menu.Item>
        <Input icon='search' placeholder='Search...' />
          </Menu.Item>:null}

         {this.props.authenticated ? <Menu.Item
            as={Link}
            to="/signout"
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
           /> : <Menu.Item
            as={Link}
             to="/signin"
            name='signin'
            active={activeItem === 'signin' }
             onClick={this.handleItemClick}
         /> }

         {this.props.authenticated ? null : 
          <Menu.Item
          as ={Link}
 
          to="/signup"
          name='signup'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}
         />}


          
        </Menu.Menu>
      </Menu>
      </Segment>
      </div>
    )
  }
}
