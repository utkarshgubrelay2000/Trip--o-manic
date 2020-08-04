import React from 'react'
import "./nav.css"
function   NavigationItems (props){
   return(

    <div className="navItems">
    
        <h1 >
            {props.children}
        </h1>
    </div>
   ) 
}
export default NavigationItems