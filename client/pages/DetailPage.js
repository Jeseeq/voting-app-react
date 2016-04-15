import React, {Component, PropTypes} from 'react';
import Detail from '../containers/PollDetailContainer';
import Header from '../components/Header';

export default class DetailPage extends Component {
  static contexTypes = {
    router: PropTypes.object
  };
  render(){
    return (
      <div>
        <Header />
        <Detail id={this.props.params.id}/>
      </div>
    );
  }
}
