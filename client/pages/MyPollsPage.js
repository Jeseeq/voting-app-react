import React, {Component} from 'react';
import Header from '../components/Header';
import MyPolls from '../components/MyPolls';

export default class MyPollsPage extends Component {
  render(){
    return (
      <div>
        <Header />
        <MyPolls />
      </div>
    );
  }
}
