/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import {Route, Router, browserHistory, IndexRoute} from 'react-router';
import {getCurrentUser, signInUserSuccess} from './actions/users';


// Pages
import App from './pages/App';
import HomePage from './pages/HomePage';
import Detail from './pages/DetailPage';
import MyPolls from './pages/MyPollsPage';
import NewPoll from './pages/NewPollPage';
import Login from './pages/Login';

import storeConfig from './store';



const store = storeConfig();

window.dev = { store };
const userCheck = () =>{
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
      <Route path='/' onEnter={userCheck} component ={App}>
        <IndexRoute  component={HomePage}/>
        <Route path='/details/:id' component={Detail}/>
        <Route path='/polls' component={MyPolls}/>
        <Route path='/newpoll' component={NewPoll}/>
        <Route path='/login' component={Login}/>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
