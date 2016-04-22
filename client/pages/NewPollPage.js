import React, {Component} from 'react';
import NewPoll from '../containers/NewPollContainer';

export default class NewPollPage extends Component {
  render(){
    return (
      <div className="jumbotron">
        <h1 className="text-center">Make a new Poll</h1>
        <NewPoll />
      </div>
    );
  }
}
