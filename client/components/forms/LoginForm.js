import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import './form.css';


export default class LoginForm extends Component {

  static contextTypes = {
    router: PropTypes.object,
    store: PropTypes.object,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.status === 'authenticated' && !nextProps.user.error
        && !nextProps.user.loading){

     // lets show redirect if exist
      try {
        const redirect = this.props.location.query.redirect;
        this.context.router.replace(redirect);
      } catch (err){
        this.context.router.replace('/');
      }
    }
  }

  render(){
    const {
      fields: { username, password },
      handleSubmit,
      submitting
    } = this.props;

    return(
      <div className="container form-container">
        <h1 className="text-center">Sign into account</h1>
        <form onSubmit={handleSubmit(this.props.signIn.bind(this))}>

          <div className={`form-group ${username.touched && username.error ? 'has-error' : ''}`}>
            <label htmlFor="username" className="control-label">Username</label>
            <input
              id="username"
              placeholder="@username"
              type="text"
              className="form-control"
              {...username} />
            <div className="text-help text-danger">
              {username.touched ? username.error : ''}
            </div>
          </div>
          <div className={`form-group ${password.touched && password.error ? 'has-error' : ''}`}>
            <label htmlFor="password" className="control-label">Password*</label>
            <input
              id="password"
              type="password"
              className="form-control"
              {...password} />
            <div className="text-help text-danger">
              {password.touched ? password.error : ''}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            <i className={submitting ? "fa fa-spinner fa-spin" : "fa fa-paper-plane"}/>
              Submit
          </button>
          <Link to="/" className="btn btn-error">Cancel</Link>
        </form>
        <p>Dont have an account yet?</p>
        <p><Link to={'/signup'}>Signup </Link>now</p>
      </div>
    );
  }
}
LoginForm.propTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func,
  location: PropTypes.object,
  submitting: PropTypes.bool
};
