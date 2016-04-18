import React, {Component} from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../components/layout/Footer';
import './app.css';
import '../../node_modules/react-spinner/react-spinner.css';
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
