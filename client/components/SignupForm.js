import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';



export default class SignupForm extends Component {

  static contextTypes = {
    router: PropTypes.object
  }
  componentWillUnmount(){
    this.props.resetMe();
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.user && nextProps.user.status === 'authenticated'
                       && !nextProps.user.error && !nextProps.user.loading){
      this.context.router.push('/');
    }
  }
  render(){
    const {fields: { username, email, password, confirmPassword },
                    handleSubmit, submitting } = this.props;
    return(
      <div className="container form-container">
        <h1 className="text-center">Sign up into awesomness</h1>
        <form onSubmit={handleSubmit(this.props.signUp.bind(this))}>

          <div className={`form-group ${username.touched && username.error
                                                        ? 'has-error' : ''}`}>
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
          <div className={`form-group ${email.touched && email.error
                                                      ? 'has-error' : ''}`}>
            <label htmlFor="username" className="control-label">Email</label>
            <input
              id="email"
              placeholder="@email"
              type="text"
              className="form-control"
              {...email} />
            <div className="text-help text-danger">
              {email.touched ? email.error : ''}
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
          <div className={`form-group ${confirmPassword.touched && confirmPassword.error ? 'has-error' : ''}`}>
            <label htmlFor="password" className="control-label">Confirm Password*</label>
            <input
              id="password"
              type="password"
              className="form-control"
              {...confirmPassword} />
            <div className="text-help text-danger">
              {confirmPassword.touched ? confirmPassword.error : ''}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            <i className={submitting ? "fa fa-spinner fa-spin" :
                                        "fa fa-paper-plane"}/>   Submit
          </button>
          <Link to="/" className="btn btn-error">Cancel</Link>
        </form>
        <p>Already registred?</p>
        <p><Link to={'/login'}>Login </Link>now</p>
      </div>
    );
  }
};
