import React, {Component, PropTypes} from 'react';

export default class Detail extends Component {
  static contexTypes = {
    router: PropTypes.object
  };
  componentDidMount(){
    this.props.fetchPoll(this.props.pollId);
  }
  render(){

    const {poll, loading, error} = this.props.activePoll;

    if (loading){
      return (
        <div className="alert alert-success">Loading.....</div>
       );
    }
    else if (error) {
      return (
        <div className="alert alert-danger">There were problems loading polls</div>
      );
    }
    return (
      <div>
        <h1>Detail of voting for </h1>
        <h2>Amazing content</h2>
        <pre>{poll.content}</pre>
      </div>
    );
  }
}
