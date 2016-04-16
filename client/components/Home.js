import React, {Component} from 'react';
import PollsListContainer from '../containers/PollsListContainer';
import s from './home.css';


export default class Home extends Component {

  render(){
    return(
      <div className="jumbotron text-center">
        <h1 className={s.root}>Voting app</h1>
        <h3>Below are polls hosted by this app</h3>
        <h3>Select one to see results or vote</h3>
        <PollsListContainer />
      </div>
    );
  }
}
