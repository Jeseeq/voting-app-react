import React from 'react';
import { Component } from 'react';
import s from './app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
