/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import { getCurrentUser, signInUserSuccess } from './actions/users';


// Pages
import App from './pages/App';
import HomePage from './pages/HomePage';
import Detail from './pages/DetailPage';
import MyPolls from './pages/MyPollsPage';
import NewPoll from './pages/NewPollPage';
import Login from './containers/LoginContainer';
import Signup from './pages/Signup';
import RestrictedPage from './containers/misc/RestrictedPage';
import NotFound from './containers/misc/NotFound';
import storeConfig from './store';



const store = storeConfig();

window.dev = { store };

const checkUser = () =>{
  store.dispatch(getCurrentUser())
  .then((response) => {
    if (!response.payload.data.message){
      store.dispatch(signInUserSuccess(response.payload));
    }
  });
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' onEnter={checkUser} component ={App}>
        <IndexRoute  component={HomePage} />
        <Route path='/details/:id' component={Detail} />
        <Route path='/polls' component={MyPolls} />

        <Route component={RestrictedPage}>
          <Route path='/newpoll' component={NewPoll} />
        </Route>

        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
