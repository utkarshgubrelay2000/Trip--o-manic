import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import  reducer from './store/reducers/Loginreducers'
import  signupReducer from './store/reducers/signUpReducer'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,combineReducers,compose} from 'redux';  
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combi=combineReducers({
  Login:reducer,
  signup:signupReducer
})
const store=createStore(combi,composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
 <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
