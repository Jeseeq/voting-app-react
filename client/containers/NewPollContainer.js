
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
    newPoll: state.polls.newPoll
  };
};

const validateAndMakePoll = (values, dispatch) =>{
  values.choices = filterChoices(values.choices);

  return new Promise(function(resolve, reject) {
    dispatch(createPoll(values))
    .then((response) =>{
      let data = response.payload.data;
      if (response.payload.status !== 200){
        dispatch(createPollFailure(response.payload));
        reject(data);
      } else {
        dispatch(createPollSuccess(response.payload));
        resolve();
      }
    });
  });
};

const mapDispatchToProps = () => {
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
