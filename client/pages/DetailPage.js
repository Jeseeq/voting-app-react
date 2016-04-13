import React, {Component} from 'react';
import Detail from '../components/Detail';
import Header from '../components/Header';

export default class DetailPage extends Component {
  render(){
    return (
      <div>
        <Header />    
        <Detail />
      </div>
    );
  }
}
