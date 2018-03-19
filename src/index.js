import 'materialize-css/dist/css/materialize.min.css';
import 'jquery/dist/jquery.min';
import 'materialize-css/dist/js/materialize.min';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import SentenceReducer from './reducers/SentenceReducers';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(SentenceReducer,composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <App />
    </div>
  </Provider>
, document.getElementById('root'));
