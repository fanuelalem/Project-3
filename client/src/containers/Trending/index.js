import React, { Component } from 'react';
import axios from 'axios';
import { Table, Image, Grid, Card, Icon } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import placeholderImage from './../../components/Images/avatar-placeholder.png';
import userprofileimage from './../../components/Images/images.png';

export default class Trending extends Component {
  state = {
    activePage: 1,
    start: 0,
    end: 10,
    userData: '',
    filteredUsers: [],
  };

  componentDidMount() {
    this.getOtherUsers();
    this.getUserData();
  }

  toggle = userData => {
    console.log(userData, 'user data open?');

    userData.open = !userData.open;
    this.setState({ userData });

    return userData;
  };

  getUserData = () => {
    axios
      .get('/api/user/profile', {
        headers: { authorization: localStorage.getItem('token') },
      })
      .then(response => {
        // console.log(response.data.myStocks[0].text,'user response')
        this.setState({ userData: response.data }, () => {
          console.log(response.data, 'sdcs');
        });
      });
  };

  getOtherUsers = () => {
    axios
      .get('/api/user/profiles', {
        headers: { authorization: localStorage.getItem('token') },
      })
      .then(response => {
        this.setState({ filteredUsers: response.data.reverse() }, () => {
          console.log(response.data, 'other users');
        });
      });
  };
  render() {
    return (
      <div style={{ margin: '80px 20px 0px 20px' }}>
        <Helmet>
          <style>{'body { background-color: #532f8c'}</style>
        </Helmet>
        <Grid>
          <Grid.Row>
            <Grid.Column
              width={4}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ margin: '20px 0 0 0' }}>
                <Card style={{ padding: '15px' }}>
                  {console.log(this.state.userData, 'current profile')}
                  <Image src={userprofileimage} size="tiny"></Image>
                  <h3
                    style={{
                      margin: '15px 0 10px 0',
                      fontWeight: '300',
                      color: 'grey',
                    }}
                  >
                    {' '}
                    welcome,{' '}
                    <span style={{ fontWeight: '800', color: 'black' }}>
                      @{this.state.userData.username}
                    </span>
                  </h3>
                  <h3 style={{ margin: '0 0 10px 0' }}>
                    <Icon color="grey" name="mail" />
                    <span style={{ color: 'black' }}>
                      {this.state.userData.email}{' '}
                    </span>
                  </h3>
                  <h3 style={{ margin: '0 0 0 0' }}>
                    {this.state.userData.myStocks
                      ? this.state.userData.myStocks.length
                      : 'this user has no stocks'}
                    <span style={{ fontWeight: '300', color: 'gray' }}>
                      {' '}
                      Stocks{' '}
                    </span>
                  </h3>
                </Card>
                <Card style={{ padding: '15px' }}>
                  {console.log(this.state.userData, 'current profile')}
                  <h2>
                    {' '}
                    My Stocks{' '}
                    <span style={{ float: 'right' }}>
                      <a
                        onClick={() => {
                          this.toggle(this.state.userData);
                        }}
                        style={{
                          cursor: 'pointer',
                          color: 'black',
                        }}
                      >
                        {this.state.userData.open ? (
                          <Icon name="minus"></Icon>
                        ) : (
                          <Icon name="plus"></Icon>
                        )}
                      </a>
                    </span>
                  </h2>

                  <div className={this.state.userData.open ? 'isopen' : ''}>
                    <div className="datainfo">
                      {this.state.userData.myStocks
                        ? this.state.userData.myStocks.map((a, index) => (
                            <div
                              style={{ marginBottom: '5px', fontSize: '17px' }}
                            >
                              <span style={{ marginRight: '5px' }}>
                                {index + 1}:{' '}
                              </span>{' '}
                              {a.text}
                              <hr></hr>
                            </div>
                          ))
                        : null}
                    </div>
                  </div>
                </Card>
              </div>
            </Grid.Column>
            <Grid.Column width={12} className="customScroll">
              {this.state.filteredUsers.map((item, id) => (
                <div key={item.id} style={{ margin: '10px 0 20px 0' }}>
                  <div>
                    <Card fluid style={{ border: 'none' }}>
                      <Grid celled="internally">
                        <Grid.Row>
                          <Grid.Column width={7}>
                            <Card.Content>
                              <Image
                                floated="left"
                                size="small"
                                style={{
                                  borderRadius: '10px',
                                  height: '145px',
                                }}
                                src={placeholderImage}
                                //  src={item.myImages.length? item.myImages[0].filePath : twitter}
                              />

                              <a
                                style={{ color: 'black' }}
                                href={`mailto:${item.email}`}
                              >
                                <h3
                                  style={{
                                    textAlign: 'left',
                                    margin: '15px 0 0 0',
                                  }}
                                >
                                  {' '}
                                  <Icon name="mail"></Icon>
                                  {item.email}
                                </h3>
                              </a>
                              <Card.Header></Card.Header>
                              {item.myStocks.length ? (
                                <Card.Content>
                                  <h3
                                    style={{
                                      color: 'green',
                                      margin: '12px 0 0 0',
                                    }}
                                  >
                                    {' '}
                                    <Icon name="pie chart"> </Icon>
                                    {item.myStocks.length} stock(s){' '}
                                  </h3>
                                </Card.Content>
                              ) : (
                                <h3
                                  style={{
                                    margin: '15px 0 0 0',
                                    color: 'gray',
                                  }}
                                >
                                  {' '}
                                  This user does not have any stocks yet
                                </h3>
                              )}
                            </Card.Content>
                          </Grid.Column>
                          <Grid.Column width={9}>
                            <Card.Content
                              extra
                              style={{ padding: '15px 0 0 0' }}
                            >
                              {item.myStocks.length ? (
                                <div>
                                  <Table selectable>
                                    <Table.Header>
                                      <Table.Row>
                                        <Table.HeaderCell
                                          style={{ color: 'black' }}
                                        >
                                          {' '}
                                          <h2> Recent stocks</h2>{' '}
                                        </Table.HeaderCell>

                                        <Table.HeaderCell
                                          style={{ color: 'black' }}
                                        >
                                          {' '}
                                          <h2> Date</h2>{' '}
                                        </Table.HeaderCell>
                                      </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                      <Table.Row>
                                        <Table.Cell style={{ width: '400px' }}>
                                          <h4 style={{ color: 'black' }}>
                                            {item.myStocks[0].text}
                                          </h4>
                                        </Table.Cell>

                                        <Table.Cell>
                                          <h4 style={{ color: 'black' }}>
                                            {moment(
                                              item.myStocks[0].dateCreated
                                            ).format('ll')}
                                          </h4>
                                        </Table.Cell>
                                      </Table.Row>
                                      <Table.Row>
                                        <Table.Cell>
                                          <h4 style={{ color: 'black' }}>
                                            {item.myStocks[1]
                                              ? item.myStocks[1].text
                                              : 'None'}
                                          </h4>
                                        </Table.Cell>

                                        <Table.Cell>
                                          <h4 style={{ color: 'black' }}>
                                            {item.myStocks[1]
                                              ? moment(
                                                  item.myStocks[1].dateCreated
                                                ).format('ll')
                                              : 'N/A'}
                                          </h4>

                                          {/* <p>{item.myStocks.length? item.myStocks[1].dateCreated : 'none'} </p>  */}
                                        </Table.Cell>
                                      </Table.Row>
                                    </Table.Body>
                                  </Table>
                                </div>
                              ) : (
                                <div>
                                  <Table selectable>
                                    <Table.Header>
                                      <Table.Row>
                                        <Table.HeaderCell
                                          style={{ color: 'black' }}
                                        >
                                          <h2> Recent stocks</h2>
                                        </Table.HeaderCell>
                                        <Table.HeaderCell
                                          style={{ color: 'black' }}
                                        ></Table.HeaderCell>

                                        <Table.HeaderCell
                                          style={{ color: 'black' }}
                                        >
                                          <h2> Date</h2>
                                        </Table.HeaderCell>
                                      </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                      <Table.Row>
                                        <Table.Cell>
                                          <h4 style={{ color: 'black' }}>
                                            None
                                          </h4>
                                        </Table.Cell>
                                        <Table.Cell>
                                          {' '}
                                          <p> </p>{' '}
                                        </Table.Cell>
                                      </Table.Row>
                                    </Table.Body>
                                  </Table>
                                </div>
                              )}
                            </Card.Content>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Card>
                  </div>
                </div>
              ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>{' '}
      </div>
    );
  }
}
