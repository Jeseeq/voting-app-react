
import { reduxForm } from 'redux-form';
import NewPoll from '../components/forms/NewPollForm';
import {
   createPoll,
   createPollFailure,
   createPollSuccess
} from '../actions/polls';

const filterChoices = (choices) => {
  return choices.filter((choice) => choice);
};

const validate = (values) => {
  const errors = {};
  if (!values.question || values.question.trim() === ''){
    errors.question = 'Please enter question';
  }
  if (filterChoices(values.choices).length < 2){
    errors.choices = ['Please provide minimum 2 options'];
  }
  return errors;
};

const mapStateToProps = (state) => {
  return{
  };
};

const validateAndMakePoll = (values, dispatch) =>{
  values.choices = filterChoices(values.choices);
  return new Promise(function(resolve, reject) {
    dispatch(createPoll(values))
    .then((response) =>{
      console.log(response);
    });
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    makePoll: validateAndMakePoll
  };
};


export default reduxForm({
  form: 'NewPoll',
  fields: ['question','choices[]'],
  validate
},
  mapStateToProps,
  mapDispatchToProps
)(NewPoll);
