import {
  signUpUser,
  signUpUserSuccess,
  signUpUserFailure
} from '../actions/users';

import {
  validataUserFieldsFailure,
  validataUserFieldsSuccess,
  validateUserFields,
  restValidateUserFields
} from '../actions/validateUserFields';

import {reduxForm} from 'redux-form';
import SignupForm from '../components/forms/SignupForm';


const validate = (values) =>{
  const errors = {};
  if (!values.username || values.username.trim() === ''){
    errors.username = 'Please enter username';
  }
  if (!values.email || values.email.trim() === ''){
    errors.email = 'Please enter email';
  }
  if (!values.password || values.password.trim() === ''){
    errors.password = 'Please enter password';
  }
  if (!values.confirmPassword || values.confirmPassword.trim() === ''){
    errors.confirmPassword = 'Please confirm password';
  }
  if (values.password && values.password.trim() !== '' &&
      values.confirmPassword && values.confirmPassword.trim() !== '' &&
      values.password !== values.confirmPassword){
    errors.confirmPassword = 'Password and confirm don\'t match';
  }
  return errors;
};

const asyncValidate = (values, dispatch) => {
  return new Promise(function(resolve, reject) {
    dispatch(validateUserFields(values))
    .then((response) =>{
      let data = response.payload.data;
      if (response.payload.status !== 200){
        dispatch(validataUserFieldsFailure(response.payload));
        reject(data);
      } else {
        dispatch(validataUserFieldsSuccess(response.payload));
        resolve();
      }
    });
  });
};

const validateAndSignup = (values, dispatch) =>{
  return new Promise((resolve, reject) =>{
    dispatch(signUpUser(values))
    .then((response) => {
      let data = response.payload.data;
      if (response.payload.status !== 200){
        dispatch(signUpUserFailure(response.payload));
        reject(data);
      } else {
        dispatch(signUpUserSuccess(response.payload));
        resolve();
      }
    });
  });

};

const mapStateToProps = (state) =>{
  return{
    user: state.user
  };
};


const mapDispatchToProps = (dispatch) =>{
  return{
    signUp: validateAndSignup,
    resetMe: () => dispatch(restValidateUserFields())
  };
};


export default reduxForm({
  form: 'SignupForm',
  fields: ['username', 'email', 'password', 'confirmPassword'],
  asyncValidate,
  asyncBlurFields: ['username', 'email'],
  validate
},
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
