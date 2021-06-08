import React from 'react';

import { Helmet } from 'react-helmet';

// import "../App.css"
import { Table } from 'semantic-ui-react';

const LoserListItems = props => (
  <div>
    <Helmet>
      <style>{'body { background-color:#532f8c; }'}</style>
    </Helmet>
    <div style={{ margin: '80px 20px 0px 20px' }}>
      <Table
        inverted
        selectable
        style={{ border: '1px solid white', color: 'white' }}
        widths={4}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              style={{ color: 'white', backgroundcolor: '#2b2b2b' }}
            >
              <h2> Company [ticker]</h2>
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

            <Table.HeaderCell
              style={{ color: 'white', backgroundcolor: '#2b2b2b' }}
            >
              percent change
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.losers.map(
            ({
              performanceId,
              standardName,
              lastPrice,
              priceChange,
              percentChange,
              ticker,
            }) => (
              <Table.Row key={performanceId}>
                <Table.Cell>
                  {' '}
                  <h3>
                    {standardName} [{ticker}]
                  </h3>
                </Table.Cell>
                <Table.Cell>${lastPrice} </Table.Cell>
                <Table.Cell>${priceChange} </Table.Cell>

                <Table.Cell style={{ color: 'red' }}>
                  {percentChange}%{' '}
                </Table.Cell>

                {/* <DeleteTodoModal handleDelete={props.handleDelete} id={_id} text={text}/> */}
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    </div>
  </div>
);

export default LoserListItems;
