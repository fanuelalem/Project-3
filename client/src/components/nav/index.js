
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Segment,Input, Menu,Container,Icon,Image } from 'semantic-ui-react'
import './../../index.css'
import logo from './../Images/Logo.png'

export default class Nav extends Component {
  state = { activeItem: 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  
  render(props) {
    console.log(this.props)

    const { activeItem } = this.state

    return (
       <div className="app"> 
       <div className='navy'   style={{backgroundColor:'#222222'}}>
<Container>

         <Menu secondary size='huge' >
        {this.props.authenticated?null:<Menu.Item
          as ={Link}
          to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >     <Image style={{backgroundColor:'white'}}className='im'className='logo'src={logo} avatar />
        <span  className='logo'style={{color:'#9d9d9d'}}> 10/10 Stock Tracker</span> </Menu.Item>}
        {this.props.authenticated?<Menu.Item
          as ={Link}
          to="/winners"
          name='winners'
          active={activeItem === 'winners'}
          onClick={this.handleItemClick}
        > <Icon style={{color:'#9d9d9d'}} name='sort amount up'></Icon><span style={{color:'#9d9d9d'}}> Winners</span>  </Menu.Item>: null}
        {this.props.authenticated?<Menu.Item
          as ={Link}
          to="/losers"
          name='losers'
          active={activeItem === 'losers'}
          onClick={this.handleItemClick}
        > <Icon style={{color:'#9d9d9d'}} name='sort amount down'></Icon><span style={{color:'#9d9d9d'}}> Losers</span></Menu.Item>: null}
        
         {this.props.authenticated ? <Menu.Item
          as ={Link}
          to="/watchlist"
          name='watchlist'
          active={activeItem === 'watchlist'}
          onClick={this.handleItemClick}
        > <Icon style={{color:'#9d9d9d'}} name='list'></Icon><span style={{color:'#9d9d9d'}}>Watchlist</span></Menu.Item>:null }

         {this.props.authenticated ? <Menu.Item
          as ={Link}
          to="/popular"
          name='popular'
          icon='users'
          active={activeItem === 'popular'}
          onClick={this.handleItemClick}
        > <Icon style={{color:'#9d9d9d'}} name='user outline'></Icon><span style={{color:'#9d9d9d'}}>Community</span></Menu.Item> :null }

        

        <Menu.Menu position='right'>
          {/* {this.props.authenticated?<Menu.Item>
        <Input icon='search' placeholder='Search...' />
          </Menu.Item>:null} */}

<Menu.Item
          as ={Link}
 
          to="/searchstock"
          name='searchstock'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}
         ><Icon style={{color:'#9d9d9d'}} name='search'></Icon> <span style={{color:'#9d9d9d'}}> Search Stock</span> </Menu.Item>


         {this.props.authenticated ? <Menu.Item
            as={Link}
            to="/signout"
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
           > <Icon style={{color:'#9d9d9d'}} name='log out'></Icon><span style={{color:'#9d9d9d'}}> LogOut</span>  </Menu.Item> : <Menu.Item
            as={Link}
             to="/signin"
            name='signin'
            active={activeItem === 'signin' }
             onClick={this.handleItemClick}
         > <Icon style={{color:'#9d9d9d'}} name='sign-in'></Icon><span className='signin-nav'style={{color:'#9d9d9d'}}>Sign-in</span></Menu.Item> }
 

         
         {this.props.authenticated ? null : 
          <Menu.Item
          as ={Link}
 
          to="/signup"
          name='signup'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}
         ><Icon style={{color:'#9d9d9d'}} name='signup'></Icon> <span className='signup-nav' style={{color:'#9d9d9d'}}> Sign-Up</span> </Menu.Item>}
 

          
        </Menu.Menu>
      </Menu>
      </Container>

      </div>

       </div>
    )
  }
}
