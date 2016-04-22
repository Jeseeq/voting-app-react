import React, {Component, PropTypes} from 'react';

import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import FailureAlert from './layout/FailureAlert';
import LoadingAlert from './layout/LoadingAlert';


export default class PollsList extends Component {
  componentWillMount() {
    this.props.fetchPolls();
  }
  render(){
    const { polls, error, loading } = this.props.pollsList;

    if (loading){
      return (
        <LoadingAlert />
       );
    }
    else if (error) {
      return (
        <FailureAlert />
      );
    }
    return(
    <ListGroup>
      {polls.map((item) => {
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

PollsList.propTypes = {
  pollsList: PropTypes.object,
  fetchPolls: PropTypes.func,
};
