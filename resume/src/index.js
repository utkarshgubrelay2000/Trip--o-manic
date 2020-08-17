import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import  reducer from './store/reducers'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';  
import thunk from 'redux-thunk';
const store=createStore(reducer,applyMiddleware(thunk))


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
