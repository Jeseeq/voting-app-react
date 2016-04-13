/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import {Route, Router, hashHistory, IndexRoute} from 'react-router';


import App from './pages/App';
import HomePage from './pages/HomePage';
import Detail from './pages/DetailPage';
import MyPolls from './pages/MyPollsPage';
import NewPoll from './pages/NewPollPage';





var store = require('./store')(window.initialStoreData);

window.dev = { store };

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component ={App}>
        <IndexRoute  component={HomePage}/>
        <Route path='/details' component={Detail}/>
        <Route path='/polls' component={MyPolls}/>
        <Route path='/newpoll' component={NewPoll}/>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
