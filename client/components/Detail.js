import React, {Component} from 'react';

export default class Detail extends Component {
  render(){
    return (
      <div>
        <h1>Detail of voting for </h1>
        <h2>id of poll is {this.props.id}</h2>
      </div>
    );
  }
}
