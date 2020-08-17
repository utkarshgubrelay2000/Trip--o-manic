import React, { useEffect, useState } from 'react'
import './summaryBox/summary.css'
import SumBox from './summaryBox/summarybox'
import image from '../../pexels-francesco-ungaro-281260.jpg'
import Spinner from '../../ui/spinner'
import Errorr from '../../ui/Error'
import axios from 'axios'
function  Summary(){
    const [tripsum,setTripSum]=useState([]);
    const [loading,setLoading]=useState(false);
    const [Error,setError]=useState(null);

    useEffect(()=>{
        console.log('jj');
        
        const tripSumaary=[];
        setLoading(true)
        axios.get('https://trip-o-manic.firebaseio.com/Trip.json').then(r=>{
         //   console.log(r.data);
         setLoading(false)
            for(let key in r.data){

                tripSumaary.push({
                    ...r.data[key],
                    id:key
                })
            }
            setTripSum(tripSumaary)
           
        
        }).catch(err=>{
            console.log(err);
            setError(err.message)
        })
    },[])
   console.log(tripsum,'kk');
   let divSummary;
   if(!loading){
       divSummary= <div >
       <h1  className='H1'> This is your Trip History</h1>
    { tripsum? tripsum.map(i=>{
      return (
          <SumBox BookingDate={i.Bookingdate} Place={i.Place} Persons={i.Person} Days={i.days} Date={i.Date} key={i.id}/>
      )
    })
    :null}
    </div>
   }
   else {
     divSummary=<Spinner/>  
   }
   if(Error){
       divSummary=<div style={{
           textAlign:"center",
           
       }}>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
        
           <p>
               
               <Errorr errorMessage={Error}/>
           </p>
       </div>
   }
    
   return(
       <div  >
       <div>
<img  src={image} alt='j' className='body'/>
       </div>
      {divSummary}
       </div>
   ) 
}
export default Summary