import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';

import './index.css';
import 'bulma/css/bulma.css';

render(
  <Provider store={store}>
    <App/>
  </Provider>
    , document.getElementById('root'));
