import React, {Component} from 'react';

import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class PollsList extends Component {
  componentWillMount() {
    this.props.fetchPolls();
  }
  render(){
    const { polls, error, loading } = this.props.pollsList;

    return(
    <ListGroup>
      {polls.map(function(item) {
        return(
          <LinkContainer key={item.id} to={{pathname: '/details/' + item.id} }>
            <ListGroupItem >{item.title}</ListGroupItem>
          </LinkContainer>
      );
      })}
    </ListGroup>
    );
  }
}
