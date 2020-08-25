import React from 'react'
import "./nav.css"
function   NavigationItems (props){
   return(

    <div className={props.className} >      
     {props.children}
    </div>
   ) 
}
export default NavigationItems