import React, {Component} from 'react';

export default class NewPoll extends Component {
  render(){
    return (
      <div>
        <div className="jumbotron">
          <h1>Make a new Poll</h1>
          <div className="form-group">
            <label>Title:</label>
            <input className="form-control" type="text"></input>
          </div>
          <div className="form-group">
            <label>Options:</label>
            <textarea className="form-control" row="4" type="text"></textarea>
          </div>
          <input type="submit" className="btn btn-primary" />
        </div>
      </div>
    );
  }
}
