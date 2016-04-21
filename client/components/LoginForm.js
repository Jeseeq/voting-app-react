import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import s from './form.css';


export default class LoginForm extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.status === 'authenticated' && !nextProps.user.error
                                                  && !nextProps.user.loading){
      this.context.router.push('/');
    }
  }

  render(){
    const {fields: { username, password }, handleSubmit} = this.props;

    return(
      <div className="container form-container">
        <h1 className="text-center">Sign into account</h1>
        <form onSubmit={handleSubmit(this.props.signIn.bind(this))}>

          <div className={`form-group ${username.touched && username.error  ? 'has-error' : ''}`}>
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
          <button type="submit" className="btn btn-primary"><i className="fa fa-paper-plane"/> Submit</button>
          <Link to="/" className="btn btn-error">Cancel</Link>
        </form>
        <p>Dont have an account yet?</p>
        <p><Link to={'/signup'}>Signup </Link>now</p>
      </div>
    );
  }
}
