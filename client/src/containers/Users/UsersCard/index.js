import React from 'react'
import { Button, Card, Image, Icon, Header, Menu } from 'semantic-ui-react';

import moment from 'moment';

import './../scrollableContainer.css';

export default (props) => {

  
 
   if (props.users.length === 0) {
    return <Header content='No users yet, please wait for new Users' />
  } else {
    return props.users.map(({ _id, badge, myStocks, firstName, lastName, strength, weakness, bio, email, dateCreated }) => {
      return (

          <Card key={_id} color={props.color} className='customCard' >
          <Card.Content>
          
                  <Card.Header><span style={{textAlign:'center'}}> {email} </span></Card.Header>

             <Card.Meta>CodeFriender since:   <span>{dateCreated}</span></Card.Meta>
          </Card.Content>
          <Card.Content className='customText' description={bio} />
          <Card.Content extra>
            <Button
              fluid
              color='black'
              attached='right'>
              <Icon name='certificate' iconposition='left' />
              <span>Stocks: {myStocks.length} </span>
            </Button>
            <Button
              fluid
              color='grey'
              attached='right'
            >
              <Icon name='cog' iconposition='left' />
              <span>Weakness: {weakness} </span>
            </Button>
          </Card.Content>
          <Menu.Item as='a'>
            <Icon name='mail square' iconposition='left' />
            {email}
          </Menu.Item>
        </Card>
 
      )
    })
  }
};



 