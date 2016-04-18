import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/layout/Footer';
import './app.css';
export default class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <div className='container'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
