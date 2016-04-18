import React, {Component} from 'react';
import PollsListContainer from '../containers/PollsListContainer';
import InfoRow from '../components/layout/InfoRow';
import InfoHeader from '../components/layout/InfoHeader';
import s from './home.css';


export default class Home extends Component {

  render(){
    return(
      <div>
        <InfoHeader />
        <InfoRow />
        <h4 className="text-center">Below are polls hosted by this app.
           Select one to see results or vote</h4>
        <div className="text-center">
          <PollsListContainer />
        </div>
    </div>
    );
  }
}
