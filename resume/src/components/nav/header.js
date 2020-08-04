import React  from 'react'
import "./ui.css"
import navItems from './navigationitems/navigationitms'
function   Header (props){
    
   
   return( <div className="header">
      logo
    <navItems className="navItems"> Contact us </navItems>
    <navItems className="navItems"> About us </navItems>
    <navItems className="navItems">  Order Summary</navItems>
    </div>
   ) 
}
export default  Header