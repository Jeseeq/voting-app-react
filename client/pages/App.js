import React, { Component, PropTypes } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../components/layout/Footer';
import './app.css';

export default class App extends Component {
  render(){
    return (
      <div>
        <HeaderContainer />
        <div className='container'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};
