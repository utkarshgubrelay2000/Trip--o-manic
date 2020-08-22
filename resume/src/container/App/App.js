import React,{Suspense} from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';

const Layout = React.lazy(() => import('../Layout/layout'));
const  Contact=React.lazy(()=>import ('../../components/ContactUs/ContactUs')) 
const  Summary=React.lazy(()=>import  ('../../components/Summary/summary')) 
const  Logout=React.lazy(()=>import  ('../../components/logout/logout')) 
const Auth = React.lazy(()=> import ('../Auth/Auth'))
function App() {

  return (
    <div >
     
<Suspense fallback='Loading ...... please wait'>

<Route path='/' component={Layout} exact />
      <Switch>

<Route path='/Tripsummary' component={Summary}  exact />
<Route path='/Contact'  component={Contact} exact />
    <Route path='/Auth' component={Auth}  exact />
    <Route path='/logout' component={Logout}  exact />
  
      </Switch>
</Suspense>
      
    </div>
  );
}

export default (App);
