import React from 'react'
import image from '../../../Images/contactus.jpg'
import './head.css'

const Head=()=>{

   
    return(   <div>
<img src={image} alt="Contactimage" style={{
    width:'100%',
    height:'45vh',
    position:'absolute',zIndex:'-1'
    
}}/>
<div className="trans">

<span className="lets">
    Lets Connect
</span>
</div>
 </div>
    ) 
}
export default Head
    
