import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  Grid,
  Input,
  Menu,
  Container,
  Icon,
  Image
} from 'semantic-ui-react';
import './../../index.css';
import logo from './../Images/Logo.png';
import axios from 'axios';
import imageplaceholder from './../Images/images.png';

export default class Nav extends Component {
  state = {
    activeItem: 'home',
    myImages: [],
    visible: true,
  };
  componentDidMount = () => {
    this.getMyImage();
  };
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  getMyImage = () => {
    axios
      .get('/api/user/myimages', {
        headers: { authorization: localStorage.getItem('token') },
      })
      .then(response => {
        this.setState({ myImages: response.data.reverse() });
        console.log(response, 'nav object');
      });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div className="app">
        <div className="navy" style={{ backgroundColor: '#222222' }}>
          <Container fluid style={{ padding: '5px 90px 5px 90px' }}>
            <Menu secondary>
              {this.props.authenticated ? null : (
                <span>
                  {' '}
                  <Menu.Item
                    as={Link}
                    to="/"
                    name="home"
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    onClick={this.props.noDisplay}
                  >
                    <Image
                      style={{ backgroundColor: 'white' }}
                      className="im"
                      className="logo"
                      src={logo}
                      avatar
                    />
                    <span className="winnermenu" style={{ fontSize: '18px' }}>
                      {' '}
                      10/10 Stock Tracker
                    </span>
                  </Menu.Item>
                </span>
              )}

              {/* <Menu.Item
                as={Link}
                to="/myuploads"
                name='myuploads'
                active={activeItem === 'myuploads'}
                 onClick={this.handleItemClick}
                onClick={this.props.noDisplay}
              >
 
                 <Image style={{ backgroundColor: 'white' }} className='im' className='logo' src={logo} avatar />
                <span className='winnermenu' style={{ color: '#9d9d9d',fontSize:'18px' }}> uploads</span>
                
  </Menu.Item> */}

              {this.props.authenticated ? (
                <Menu.Item
                  as={Link}
                  to="/winners"
                  name="winners"
                  active={activeItem === 'winners'}
                  onClick={this.handleItemClick}
                  onClick={this.props.noDisplay}
                >
                  <Icon
                    className="winnermenu"
                    style={{ color: '#9d9d9d' }}
                    name="plus square"
                  ></Icon>
                  <span
                    className="winnermenu"
                    style={{ color: '#9d9d9d', fontSize: '18px' }}
                  >
                    {' '}
                    Winners
                  </span>
                </Menu.Item>
              ) : null}

              {this.props.authenticated ? (
                <Menu.Item
                  as={Link}
                  to="/losers"
                  name="losers"
                  active={activeItem === 'losers'}
                  onClick={this.handleItemClick}
                >
                  {' '}
                  <Icon style={{ color: '#9d9d9d' }} name="minus square"></Icon>
                  <span
                    className="winnermenu"
                    style={{ color: '#9d9d9d', fontSize: '18px' }}
                  >
                    {' '}
                    Losers
                  </span>
                </Menu.Item>
              ) : null}

              {this.props.authenticated ? (
                <Menu.Item
                  as={Link}
                  to="/watchlist"
                  name="watchlist"
                  active={activeItem === 'watchlist'}
                  onClick={this.handleItemClick}
                >
                  {' '}
                  <Icon style={{ color: '#9d9d9d' }} name="edit"></Icon>
                  <span
                    className="winnermenu"
                    style={{ color: '#9d9d9d', fontSize: '18px' }}
                  >
                    watchlist
                  </span>
                </Menu.Item>
              ) : null}

              {this.props.authenticated ? (
                <Menu.Item
                  as={Link}
                  to="/trending"
                  name="trending"
                  active={activeItem === 'trending'}
                  onClick={this.handleItemClick}
                  onClick={this.props.noDisplay}
                >
                  {' '}
                  <Icon style={{ color: '#9d9d9d' }} name="hashtag"></Icon>
                  <span
                    className="winnermenu"
                    style={{ color: '#9d9d9d', fontSize: '18px' }}
                  >
                    trending
                  </span>
                </Menu.Item>
              ) : null}

              <Menu.Menu position="right">
                <Menu.Item>
                  {this.props.authenticated ? (
                    <Input
                      style={{ width: '255px' }}
                      icon={
                        <Icon
                          style={{
                            backgroundColor: 'black',
                            color: 'white',
                            margin: '4px 0 0 0',
                          }}
                          circular
                          size="small"
                          className="searchlink"
                          name="search"
                          link
                          onClick={this.props.buttonClick}
                        />
                      }
                      className="search-tool"
                      onChange={this.props.onsearch}
                      name="search"
                      value={this.props.search}
                      placeholder="search a stock..."
                    ></Input>
                  ) : null}
                </Menu.Item>

                {this.props.authenticated ? (
                  <Menu.Item onClick={this.handleItemClick}>
                    <Dropdown
                      secondary
                      icon="none"
                      style={{ color: '#9d9d9d' }}
                      text={
                        <div>
                          {/* <span className='winnermenu' style={{ color: '#9d9d9d',fontSize:'18px' }}>
               my profile                
                 </span> */}{' '}
                          <Icon size="large" name="bars"></Icon>
                          <Image
                            style={{
                              backgroundColor: 'white',
                              margin: '0 0px 0 10px',
                            }}
                            size="mini"
                            //  src={this.state.myImages.length? this.state.myImages[0].filePath : twitter}
                            src={imageplaceholder}
                            avatar
                          />
                        </div>
                      }
                    >
                      <Dropdown.Menu style={{ backgroundColor: '#222323' }}>
                        <Dropdown.Item>
                          <Link
                            to="/updateprofile"
                            name="updateprofile"
                            active={activeItem === 'watchlist'}
                          >
                            <span
                              className="winnermenu"
                              style={{ color: '#9d9d9d', fontSize: '16px' }}
                            >
                              <Grid>
                                <Grid.Row>
                                  <Grid.Column width={5}>
                                    <Icon
                                      style={{ color: '#9d9d9d' }}
                                      name="setting"
                                    ></Icon>
                                  </Grid.Column>
                                  <Grid.Column width={11}>
                                    <p> Settings </p>
                                  </Grid.Column>
                                </Grid.Row>
                              </Grid>
                            </span>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link
                            as={Link}
                            to="/signout"
                            name="logout"
                            active={activeItem === 'logout'}
                          >
                            <span
                              className="winnermenu"
                              style={{ color: '#9d9d9d', fontSize: '16px' }}
                            >
                              <Grid>
                                <Grid.Row>
                                  <Grid.Column width={5}>
                                    <Icon
                                      style={{ color: '#9d9d9d' }}
                                      name="log out"
                                    ></Icon>
                                  </Grid.Column>
                                  <Grid.Column width={11}>
                                    <p>LogOut </p>
                                  </Grid.Column>
                                </Grid.Row>
                              </Grid>
                            </span>
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Item>
                ) : (
                  <Menu.Item
                    as={Link}
                    to="/signin"
                    name="signin"
                    active={activeItem === 'signin'}
                    onClick={this.handleItemClick}
                    onClick={this.props.noDisplay}
                  >
                    {' '}
                    <Icon style={{ color: '#9d9d9d' }} name="sign-in"></Icon>
                    <span
                      className="winnermenu"
                      style={{ color: '#9d9d9d', fontSize: '18px' }}
                    >
                      Sign-in
                    </span>
                  </Menu.Item>
                )}

                {this.props.authenticated ? null : (
                  <Menu.Item
                    as={Link}
                    to="/signup"
                    name="signup"
                    active={activeItem === 'signup'}
                    onClick={this.handleItemClick}
                    onClick={this.props.noDisplay}
                  >
                    <Icon style={{ color: '#9d9d9d' }} name="signup"></Icon>{' '}
                    <span
                      className="winnermenu"
                      style={{ color: '#9d9d9d', fontSize: '18px' }}
                    >
                      {' '}
                      Sign-Up
                    </span>{' '}
                  </Menu.Item>
                )}
              </Menu.Menu>
            </Menu>
          </Container>
        </div>
      </div>
    );
  }
}
