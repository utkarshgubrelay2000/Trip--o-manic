import React, { useEffect, useState } from 'react'
import './summaryBox/summary.css'

import Spinner from '../../ui/spinner'
import Errorr from '../../ui/Error'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const SumBox=React.lazy(()=>import ('./summaryBox/summarybox'))

function  Summary(){
    
    const [tripsum,setTripSum]=useState([]);
    const [loading,setLoading]=useState(false);
    const [Error,setError]=useState(null);
   
const currentUser=localStorage.getItem('user');

    useEffect(()=>{
      //  console.log('jj');
        
        const tripSumaary=[];
        setLoading(true)
        axios.get('https://trip-o-manic.firebaseio.com/Trip.json').then(r=>{
         //   console.log(r.data);
            setLoading(false)
            for(let key in r.data){
            //    console.log(key,r.data[key].User,currentUser)      
if(r.data[key].User===currentUser){

    tripSumaary.push({
        ...r.data[key],
        id:key
    })
}
            }
            setTripSum(tripSumaary)
           console.log(tripSumaary);
           
        
        }).catch(err=>{
          //  console.log(err);
            setError(err.message)
        })
    },[currentUser])
   
   let divSummary;
   if(!loading){
       divSummary= 
<div className='outerDiv'>
       <div >
       <div className='upperDiv'  >
<h3  className='H1'> History</h3>
       </div>
</div> 
    { tripsum[0]? tripsum.map(i=>{
        return (
            <SumBox BookingDate={i.Bookingdate} Place={i.Place} Persons={i.Person} Days={i.days} Date={i.Date} key={i.id}/>
            )
        })
    : <h1 className='bookingNotFound'> Booking Not found its seem like you didn't have booked any trip</h1>}
      <div className='bottomDiv'>
<div className='back'>
   <NavLink to='/' style={{
       color:'white',
       textDecoration:'none'
   }}>
        Back
       </NavLink>
       
</div>
<div className='logged'>
   <h4>
       Logged in As {currentUser}
   </h4>

</div>
</div>
    </div>
   }
   else {
       divSummary=<Spinner/>  
   }
   if(Error){
       divSummary=<div style={{
           textAlign:"center",
           
        }}>
          
        
           <p>
               
               <Errorr errorMessage={Error}/>
           </p>
       </div>
   }
   return(<div>
      {divSummary}
       </div>
     
   ) 
}
export default Summary