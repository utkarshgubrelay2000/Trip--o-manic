import React from 'react'
import './summary.css'
function   sumBox(props){
    console.log(props);
    
    return(
        <div className='box'>
            <div className='innerDiv' style={{padding:'0'}}>

<span  >
  Booked On-   <h6>{props.BookingDate}</h6>
</span>
            </div>
            <div className='innerDiv'>

<span className='Place'>
    Place - {props.Place}
</span>
            </div>
            <div className='innerDiv'>
<span className='Persons'>
    Persons - {props.Persons}
</span>
            </div>
            <div className='innerDiv'>

<span className='Days'>
    Days - {props.Days}
</span>
            </div>
            <div className='innerDiv'>
<span className='Date'>
    Date- {props.Date} 
</span>
            </div>
<span className='more'>
    <a href='/Contact'>
   Contact us for more info
    </a>
</span>

        </div>
    ) 
}
export default sumBox