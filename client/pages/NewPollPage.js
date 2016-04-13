import React, {Component} from 'react';
import Header from '../components/Header';
import NewPoll from '../components/NewPoll';

export default class NewPollPage extends Component {
  render(){
    return (
      <div>
        <Header />
        <NewPoll />
      </div>
    );
  }
}
