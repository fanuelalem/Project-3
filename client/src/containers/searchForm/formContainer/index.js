import React, { Component } from 'react';
import API from './../utils';
import Detail from './../details';
import SearchBar from './../search';
import {
  Grid,
  Message,
  List,
  Image,
  Icon,
  Container,
  Loader,
  Segment,
} from 'semantic-ui-react';
import Card from './../Card';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';

import otherUtil from './../otherutil';
import axios from 'axios';

export default class FormContainer extends Component {
  state = {
    result: {},
    search: '',
    xvalues: [],
    yvalues: [],
  };
  componentDidMount() {
    this.searchMovies('aapl');
  }

  searchMovies = async query => {
    let xfunction = [];
    let yfunction = [];

    otherUtil.search(query).then(response => {
      console.log(response, 'data');
      this.setState({ result: response.data }, () => {
        console.log(response.data);
      });
    });

    //  API.search(query)
    // .then((response)=>{
    //   for(var key in response.data['Time Series (Daily)']){
    //     xfunction.push(key);
    //     yfunction.push(response.data['Time Series (Daily)'][key]['1. open'])
    //   }
    //   this.setState({xvalues:xfunction,yvalues:yfunction})

    //  })
    // .catch((e)=>{
    //     console.log(e)
    // })
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    // const data={x:this.props.graphx,y:this.props.graphy}

    // console.log(this.props,'this props')

    return (
      <div style={{ margin: '15px 0 0 0' }}>
        <Container>
          <div style={{ margin: '0 0 0 70px' }}>
            {/* <h1 > {this.props.qoute? `$${this.props.qoute.c}`   : 
  <Segment>
  <Loader disabled />

  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
</Segment>
  }</h1> */}
          </div>
        </Container>

        <Plot
          data={[
            {
              x: this.props.graphx,
              y: this.props.graphy,
              type: 'scatter',
              mode: ' ',
              marker: { color: 'red' },
            },
          ]}
          style={{ width: '100%', height: '100%' }}
          useResizeHandler={true}
          responsive={true}
          layout={{
            titlefont: {
              family: 'Arial, sans-serif',
              size: 25,
              color: 'white',
            },
            xaxis: { color: 'white' },
            yaxis: { color: 'white' },
            paper_bgcolor: '#222323',
            plot_bgcolor: '#222323',
            title: `${
              this.props.info.name ? this.props.info.name : `no stock ...`
            }`,

            autosize: true,
          }}
          // newshape:{line:{color:'white'}}, colorway:{colorlist:'white'},
          // xaxis:{color:'white'},yaxis:{color:'white'},paper_bgcolor:'#222323',plot_bgcolor:'#222323' }}
        />

        <div
          style={{
            backgroundColor: '#333333',
            margin: '15px 0 20px 0px',
            borderRadius: '9px',
          }}
        >
          <Grid>
            <Grid.Row columns={5} style={{ textAlign: 'center' }}>
              <Grid.Column>
                <h3 style={{ color: 'white', fontWeight: '500' }}>Current</h3>
                <h4 style={{ color: 'white' }}>{this.props.qoute.c}</h4>
              </Grid.Column>
              <Grid.Column>
                <h3 style={{ color: 'white', fontWeight: '500' }}> High</h3>
                <h4 style={{ color: 'white', fontWeight: '500' }}>
                  {this.props.qoute.h}
                </h4>
              </Grid.Column>
              <Grid.Column>
                <h3 style={{ color: 'white', fontWeight: '500' }}> Low</h3>
                <h4 style={{ color: 'white', fontWeight: '500' }}>
                  {this.props.qoute.l}
                </h4>
              </Grid.Column>

              <Grid.Column>
                <h3 style={{ color: 'white', fontWeight: '500' }}> Open</h3>
                <h4 style={{ color: 'white', fontWeight: '500' }}>
                  {this.props.qoute.o}
                </h4>
              </Grid.Column>
              <Grid.Column>
                <h3 style={{ color: 'white', fontWeight: '500' }}> PC</h3>
                <h4 style={{ color: 'white', fontWeight: '500' }}>
                  {this.props.qoute.pc}
                </h4>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

