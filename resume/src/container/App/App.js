import React from 'react';
import './App.css';
import Layout from  '../Layout/layout';
import Contact from '../../components/ContactUs/ContactUs'
import Summary from '../../components/Summary/summary'
import Auth from '../Auth/Auth'

import {Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div >
<Route path='/' component={Layout} exact />
      <Switch>
<Route path='/about' component={Auth}  exact />
<Route path='/Tripsummary' component={Summary}  exact />
<Route path='/Contact'  component={Contact} exact />
  
      </Switch>
    </div>
  );
}

export default App;
