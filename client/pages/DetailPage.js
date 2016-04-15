import React, {Component, PropTypes} from 'react';
import Detail from '../containers/PollDetailContainer';

export default class DetailPage extends Component {
  static contexTypes = {
    router: PropTypes.object
  };
  render(){
    return (
      <div >
        <Detail id={this.props.params.id}/>
      </div>
    );
  }
}
