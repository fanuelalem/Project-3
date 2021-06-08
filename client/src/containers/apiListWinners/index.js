import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import {
  Popup,
  Table,
  Form,
  Message,
  Button,
  Icon,
} from 'semantic-ui-react';
import { compose } from 'redux';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import {
  getUserStocks,
  updateStocksCompletedById,
  deleteStockById,
} from '../../actions/stocks';
 import { ADD_STOCKS_ERROR, ADD_STOCK } from '../../actions/types';
 
class WinnerListItems extends Component {
  state = {
    title: '',
    visible: false,
    isOpen: false,
    rank: 1,
    ticker: '',
  };

  handleClose = () => {
    this.setState({ isOpen: false });
    clearTimeout(this.timeout);
  };
  handleOpen = () => {
    this.setState({ isOpen: true });

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false });
    }, 3000);
  };

  onSubmit = async (formValues, dispatch) => {
    const { title } = formValues;
    try {
      await axios.post(
        '/api/user/stock',
        { text: `${this.state.title} (${this.state.ticker})` },
        { headers: { authorization: localStorage.getItem('token') } }
      );
      dispatch({ type: ADD_STOCK });
      this.props.getUserStocks();
    } catch (e) {
      dispatch({ type: ADD_STOCKS_ERROR, payload: e });
    }
  };

  componentDidMount() {
    this.props.getUserStocks();
  }

  render() {
    const { handleSubmit } = this.props;
    const style = {
      borderRadius: '3px',
      padding: '1em',
    };

    return (
      <div>
        <div>
          <Helmet>
            <style>{'body { background-color:#532f8c    ; }'}</style>
          </Helmet>
          <div style={{ margin: '80px 20px 0px 20px' }}>
            <Table
              inverted
              selectable
              widths={4}
              style={{ border: '1px solid white', color: 'white' }}
            >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell
                    style={{ color: 'white', backgroundcolor: '#2b2b2b' }}
                  >
                    <h2>Company [ticker]</h2>
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    style={{ color: 'white', backgroundcolor: '#2b2b2b' }}
                  >
                    percent change
                  </Table.HeaderCell>

                  <Table.HeaderCell
                    style={{ color: 'white', backgroundcolor: '#2b2b2b' }}
                  >
                    Last price
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    style={{ color: 'white', backgroundcolor: '#2b2b2b' }}
                  >
                    price change
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.props.gainers.map(
                  ({
                    performanceId,
                    standardName,
                    ticker,
                    percentChange,
                    lastPrice,
                    priceChange
                  }) => (
                    <Table.Row key={performanceId}>
                      <Table.Cell>
                        <Form
                          onSubmit={handleSubmit(this.onSubmit)}
                          // onSubmit={()=>{alert('hello')}}
                        >
                          <Popup
                            // open={this.state.isOpen}
                            style={style}
                            on="click"
                            basic
                            trigger={
                              <Button
                                color="green"
                                onClick={() => {
                                  // const a = this.handleClose()
                                  // const b = this.handleOpen()
                                  this.setState(
                                    { title: standardName, ticker: ticker },
                                    () => {
                                      console.log(standardName);
                                    }
                                  );
                                }}
                                style={{ margin: '0 10px 0 0' }}
                                icon="eye"
                              >
                                <Icon name="plus"></Icon> save to watchlist
                              </Button>
                            }
                          >
                            <Message vertical compact>
                              {`${standardName} has been added to your watchlist`}
                            </Message>
                          </Popup>

         

                          <span style={{ fontWeight: '500', fontSize: '20px' }}>
                            {standardName} [{ticker}]
                          </span>
                        </Form>
                      </Table.Cell>
                      <Table.Cell style={{ color: '#22b945' }}>
                        +{Math.ceil(percentChange * 100) / 100} %{' '}
                      </Table.Cell>

                      <Table.Cell>${lastPrice} </Table.Cell>
                      <Table.Cell>$ {priceChange} </Table.Cell>

                      {/* <DeleteTodoModal handleDelete={props.handleDelete} id={_id} text={text}/> */}
                    </Table.Row>
                  )
                )}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({
  stocks: {
    userStocks,
    getUserStocksServerError,
    getUserStockClientError,
    deleteStockByIdError,
  },
}) {
  return {
    stocks: userStocks,
    clientError: getUserStockClientError,
    serverError: getUserStocksServerError,
    deleteStockByIdError,
  };
}
export default compose(
  reduxForm({ form: 'addTodo' }),
  connect(mapStateToProps, {
    getUserStocks,
    updateStocksCompletedById,
    deleteStockById,
  })
)(WinnerListItems);

