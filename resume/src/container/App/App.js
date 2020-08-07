import React from 'react';
import './App.css';
import Layout from  '../Layout/layout';
import {Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div >
      <Switch>
<Route path='/' component={Layout} exact />
<Route path='/Contact'  render={()=><p>uih</p>} exact />
<Route path='/about' render={()=><p>uih</p>}  exact />
<Route path='/Tripsummary' render={()=><p>uih</p>}  exact />
  
      </Switch>
    </div>
  );
}

export default App;
