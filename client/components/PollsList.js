import React, {Component} from 'react';

import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Spinner from 'react-spinner';

export default class PollsList extends Component {
  componentWillMount() {
    this.props.fetchPolls();
  }
  render(){
    const { polls, error, loading } = this.props.pollsList;

    if (loading){
      return (
        // <Spinner />
        <div className="alert alert-success">Loading.....</div>
       );
    }
    else if (error) {
      return (
        <div className="alert alert-danger">There were problems loading polls</div>
      );
    }
    return(
    <ListGroup>
      {polls.map(function(item) {
        return(
          <LinkContainer key={item._id} to={{pathname: '/details/' + item._id}}>
            <ListGroupItem >{item.question}</ListGroupItem>
          </LinkContainer>
      );
      })}
    </ListGroup>
    );
  }
}
