import React, {Component, PropTypes} from 'react';
import PureInput from '../PureInput';
export default class NewPoll extends Component {
  render(){
    const { fields:{ choices, question }, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.makePoll.bind(this))}>
        <div className={`form-group ${question.touched && question.error ? 'has-error' : ''}`}>
          <label>Question</label>
          <input {...question} className="form-control" type="text"></input>
          <div className="text-help text-danger">
            {question.touched ? question.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Options:</label>
          {choices.map((choice, index) =>
            <div key={index}>
            <div className="input-group choice-row">
              <PureInput
                  className="form-control"
                  key={index} type="text"
                  placeholder="choice"
                  field={choice}/>
                <span className="input-group-btn">
                  <button className="btn btn-danger"
                     type="button"
                     onClick={() => {
                       choices.removeField(index);  // remove from index
                     }}
                  >{String.fromCharCode(160)}<i className="fa fa-trash-o"/>
                  </button>
                </span>
            </div>
            <div className="text-help text-danger">
              {choice.touched ? choice.error : ''}
            </div>
          </div>
          )}
          <button
           onClick={(e) => {
             e.preventDefault();
             choices.addField(); // pushes empty element to the end of array
           }}
           className="btn btn-success btn-add-choice">
           <i className="plus-sign">+</i>
          </button>

        </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
    );
  }
}


NewPoll.propTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func,
  makePoll: PropTypes.func
};
