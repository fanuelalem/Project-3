import React from 'react';
import DeleteTodoModal from '../../../components/DeleteModal';
import { Table, Segment } from 'semantic-ui-react';
import moment from 'moment';

export default props => {
  return (
    <div>
      <Table selectable inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell style={{ color: 'white' }}>
              Stock Name
            </Table.HeaderCell>
            <Table.HeaderCell style={{ color: 'white' }}>Date</Table.HeaderCell>
            <Table.HeaderCell> </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.stocks.map(({ _id, completed, text, dateCreated }) => (
            <Table.Row key={_id}>
              <Table.Cell>
                {' '}
                <h5 style={{ color: 'white' }}>{text}</h5>
              </Table.Cell>
              <Table.Cell style={{ color: 'white' }}>
                {moment(dateCreated).fromNow()}{' '}
              </Table.Cell>
              <Table.Cell>
                {' '}
                <DeleteTodoModal
                  handleDelete={props.handleDelete}
                  id={_id}
                  text={text}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

 
 
