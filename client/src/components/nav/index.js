
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Segment,Form, Input, Menu, Container, Icon, Image, Button } from 'semantic-ui-react'
import './../../index.css'
import logo from './../Images/Logo.png'
import SearchProp from './Prop/index'


export default class Nav extends Component {
  state = {
    activeItem: 'home'

  }

  handleItemClick = (e, { name }) => { this.setState({ activeItem: name }) }


  render() {
    
 

    const { activeItem } = this.state

    return (
      <div className="app">
        <div className='navy' style={{ backgroundColor: '#222222' }}>
          <Container fluid style={{ padding: '0 40px 0 40px' }}>

            <Menu secondary size='huge'  >
              {this.props.authenticated ? null : <Menu.Item
                as={Link}
                to="/"
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                // onClick={this.props.noDisplay}
              >

                <Image style={{ backgroundColor: 'white' }} className='im' className='logo' src={logo} avatar />
                <span className='logo' style={{ color: '#9d9d9d' }}> 10/10 Stock Tracker</span> </Menu.Item>}

              {this.props.authenticated ? <Menu.Item
                as={Link}
                to="/winners"
                name='winners'
                active={activeItem === 'winners'}
                onClick={this.handleItemClick}
              >
                <Icon style={{ color: '#9d9d9d' }} name='trophy'></Icon><span style={{ color: '#9d9d9d' }}> Winners</span>  </Menu.Item> : null}
              {this.props.authenticated ? <Menu.Item
                as={Link}
                to="/losers"
                name='losers'
                active={activeItem === 'losers'}
                onClick={this.handleItemClick}
              > <Icon style={{ color: '#9d9d9d' }} name='sort amount down'></Icon><span style={{ color: '#9d9d9d' }}> Losers</span></Menu.Item> : null}

              {this.props.authenticated ? <Menu.Item
                as={Link}
                to="/watchlist"
                name='watchlist'
                active={activeItem === 'watchlist'}
                onClick={this.handleItemClick}
              > <Icon style={{ color: '#9d9d9d' }} name='list'></Icon><span style={{ color: '#9d9d9d' }}>Watchlist</span></Menu.Item> : null}

              {this.props.authenticated ? <Menu.Item
                as={Link}
                to="/popular"
                name='popular'
                 active={activeItem === 'popular'}
                onClick={this.handleItemClick}
              > <Icon style={{ color: '#9d9d9d' }} name='fire'></Icon><span style={{ color: '#9d9d9d' }}>Trending</span></Menu.Item> : null}

            <Menu.Menu position='right'>
                

                {this.props.authenticated ? <Menu.Item
                  as={Link}
                  to="/signout"
                  name='logout'
                  active={activeItem === 'logout'}
                  onClick={this.handleItemClick}
                > <Icon style={{ color: '#9d9d9d' }} name='log out'></Icon><span style={{ color: '#9d9d9d' }}> LogOut</span>  </Menu.Item> : <Menu.Item
                  as={Link}
                  to="/signin"
                  name='signin'
                  active={activeItem === 'signin'}
                  onClick={this.handleItemClick}
                  // onClick={this.props.display}

                > <Icon style={{ color: '#9d9d9d' }} name='sign-in'></Icon><span className='signin-nav' style={{ color: '#9d9d9d' }}>Sign-in</span></Menu.Item>}



                {this.props.authenticated ? null :
                  <Menu.Item
                    as={Link}

                    to="/signup"
                    name='signup'
                    active={activeItem === 'signup'}
                    onClick={this.handleItemClick}
                    // onClick={this.props.display}

                  ><Icon style={{ color: '#9d9d9d' }} name='signup'></Icon> <span className='signup-nav' style={{ color: '#9d9d9d' }}> Sign-Up</span> </Menu.Item>}

              <Menu.Item>

 <Input
  className='search-tool'
  onChange={this.props.onsearch}
  name='search'
  value={this.props.search}
  placeholder='search a stock...'>
 </Input>
 <Button
 onClick={this.props.buttonClick}
  className='searchlink'
  name='search'>
    button
    </Button>


    {/* {this.props.visible == true ?  */}
    
  
     
               
            </Menu.Item>

              </Menu.Menu>
            </Menu>
          </Container>

        </div>

      </div>
    )
  }
}














{/*  

{this.props.visible == true ? <Input 
 focus
    icon={
      
 
        <Icon 
    style={{backgroundColor:'black', color:'white'}} 
    circular size='small' 
    className='searchlink' 
    name='search' 
    link onClick={this.props.buttonClick} 
    

    />}
  className='search-tool'
  onChange={this.props.onsearch}
  name='search'
  value={this.value}
  placeholder='search a stock...'

  /> : this.props.visible == false}
 */}

{/* 
  <Input 
    onChange={this.props.onsearch}
    className="search-tool"
    onClick={this.props.onClick}
    icon={{ name: 'search', link: true, link onClick={this.props.onClick}}}
    placeholder='Search...'
    name="search"
    value={this.value}
    onClick={this.props.onClick}


  /> */}

{/* <input
 style={{border:"none",padding:'8px 6px 7px 14px',margin:'0 0 0 0',borderBottomLeftRadius:'6px',borderTopLeftRadius:'6px',width:'200px' }}
onChange={this.props.onsearch}
value={this.value}
placeholder='Search...'
name="search"
type="text"
className="search-tool"
id="search"
>

</input>

<button 
className='searchticker'
style={{padding:'5px 5px 6px 5px',border:'none',width:'50px',borderTopRightRadius:'6px',borderBottomRightRadius:'6px'}}
onClick={this.props.buttonClick}
>  <Icon name='search'> </Icon></button>     */}






// more code 



{/* {this.props.authenticated?<Menu.Item>
        <Input icon='search' placeholder='Search...' />
          </Menu.Item>:null} */}

{/* <Menu.Item
          as ={Link}
 
          to="/searchstock"
          name='searchstock'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}
         ><Icon style={{color:'#9d9d9d'}} name='search'></Icon> <span style={{color:'#9d9d9d'}}> Search Stock</span> </Menu.Item> */}


         //more 






//   componentDidMount() {
//     this.searchMovies('aapl');

//   }

//   searchMovies = async (query) => {
//     let xfunction=[];
//     let yfunction=[];




//     otherUtil.search(query)
//     .then((response)=>{
//       console.log(response,'data')
//       this.setState({result:response.data},()=>{
//         console.log(response.data)
//       })
//     })




//      API.search(query)
//     .then((response)=>{
//       for(var key in response.data['Time Series (Daily)']){
//         xfunction.push(key);
//         yfunction.push(response.data['Time Series (Daily)'][key]['1. open'])
//       }
//       this.setState({xvalues:xfunction,yvalues:yfunction})

//      })
//     .catch((e)=>{
//         console.log(e)
//     })
// }

// handleInputChange = event => {
//     const value = event.target.value;
//     const name = event.target.name;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchMovies(this.state.search);

//   };



//more


// import SearchBar from './../../containers/SearchStock/searchForm/search' 
// import otherUtil from './APICall/otherutil'
// import API from './APICall/utils'
// import SearchNav from './SearchNav/index'