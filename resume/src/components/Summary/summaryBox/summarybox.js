import React from 'react'
import './summary.css'
function   sumBox(props){
    console.log(props);
    
    return(
        <div className='box'>
<span className='Place'>
    Place - {props.Place}
</span>
<span className='Persons'>
    Persons - {props.Persons}
</span>
<span className='Days'>
    Days - {props.Days}
</span>
<span className='Date'>
    Date- {props.Date} 
</span>
<span className='booking'>
    {props.BookingDate}
</span>
<span className='more'>
    <a href='/Contact'>

   Contact us for more info
    </a>
</span>

        </div>
    ) 
}
export default sumBox