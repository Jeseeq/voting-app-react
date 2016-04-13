import React, {Component} from 'react';
import Header from '../components/Header';

export default class DetailPage extends Component {
  render(){
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}
