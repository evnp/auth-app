import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import firebase from 'firebase';

import {reducer} from './reducers';
import * as actions from './actions';

import Root from './components/root';
import './firebase';

import '../style/index.styl';

const logger = createLogger();
const store = Redux.applyMiddleware(thunkMiddleware, logger)(Redux.createStore)(reducer);

const connectState = state => ({state});
const connectDispatch = dispatch => ({
  dispatch: {
    changeUser: user => dispatch(actions.changeUser(user)),
  },
});

const Provider = ReactRedux.Provider;
const ConnectedRoot = ReactRedux.connect(connectState, connectDispatch)(Root);
const provider = <Provider store={store}><ConnectedRoot/></Provider>;

const container = document.createElement('div');
container.className = 'react-container';
document.body.appendChild(container);

ReactDOM.render(provider, container);
