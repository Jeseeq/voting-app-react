import {signInUser, signInUserSuccess,
  signInUserFailure} from '../actions/users';

import {reduxForm} from 'redux-form';
import LoginForm from '../components/LoginForm';

// Client-side validation
const validate = values =>{
  const errors = {};

  if (!values.username || values.username.trim() === ''){
    errors.username = 'Enter a username';
  }
  if (!values.password || values.password.trim() === ''){
    errors.password = 'Enter a password';
  }
  return errors;
};

const validateAndSignInUser = (values, dispatch) =>{
  return new Promise((resolve, reject) => {
    dispatch(signInUser(values))
    .then((response) => {
      let data = response.payload.data;
      if (response.payload.status !== 200) {
        dispatch(signInUserFailure(response.payload));
        // for redux-form
        reject(data);
      } else {
        dispatch(signInUserSuccess(response.payload));
        // for redux-form
        resolve();
      }
    });
  });
};

const mapStateToProps = (state) => {
  return{
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: validateAndSignInUser,
  };
};

export default reduxForm({
  form: 'LoginForm',
  fields: ['username', 'password'],
  null,
  null,
  validate
},
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
