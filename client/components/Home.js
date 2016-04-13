import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class Home extends Component {

  render(){
    var data = [
      {
        id: 1,
        title: 'Best phone'
      },
      {
        id: 2,
        title: 'favorite food'
      },
      {
        id: 3,
        title: 'favorite book'
      },
      {
        id: 4,
        title: 'favorite film'
      },
      {
        id: 5,
        title: 'favorite yo'
      },
    ];
    return(
      <div className="jumbotron text-center">
        <h1>Voting app</h1>
        <h3>Below are polls hosted by this app</h3>
        <h3>Select one to see results or vote</h3>
        <ListGroup>
          {data.map(function(item) {
            return(
              <LinkContainer key={item.id} to={{pathname: '/details/' + item.id} }>
                <ListGroupItem >{item.title}</ListGroupItem>
              </LinkContainer>
          );
          })}
          {/*<LinkContainer to={{pathname: '/details'}}>
            <ListGroupItem >Link 1</ListGroupItem>
          </LinkContainer>
          <ListGroupItem href="#link2">Link 2</ListGroupItem>
          <ListGroupItem href="#link2">Link 2</ListGroupItem>
          <ListGroupItem href="#link2">Link 2</ListGroupItem>*/}
        </ListGroup>
      </div>
    );
  }
}
