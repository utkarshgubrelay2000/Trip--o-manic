import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './body.css'
import Input from '../../../ui/input'
import { NavLink } from 'react-router-dom'
const Body=()=>{

    const [InputItems,setInputItems]=useState([
        {placeholder:'Name',type:'text',className:'input',rules:{
            required:true,
            submitable:false,
            length:8
        },
        value:'',
        
    },
    {placeholder:'Phone no.',type:'number',className:'input',rules:{
        required:true,
        submitable:false,
        length:8
    },
    value:'',
    
},
{placeholder:'Email',type:'text',className:'input',rules:{
    required:true,
    submitable:false,
    length:0,
    valid:""
},value:'',

    },
    ])
    const [error,seterror]=useState(null)
    const [responseError,setresponeseError]=useState(null)
    const [query,setquery]=useState(false)
    const ChangeHandler=(e,i)=>{
//console.log(i);
const PseudoInput=[...InputItems];
validation(e,i)

    PseudoInput[i].value=e.target.value
  //  console.log(PseudoInput);
    setInputItems(
        PseudoInput
        )
    
   
}
const [buttonsubmission,setbuttonSubmission]=useState(true)
const validation=(e,i)=>{
  //  console.log('validation',e.target.value);   
  const PseudoInput=[...InputItems]
  if(e.target.value.length>InputItems[i].rules.length){
      //  console.log('k'); 
      if(InputItems[2]===PseudoInput[i]){
        emailValidator(e,i)      
  }
  else{

      seterror(null)
      PseudoInput[i].rules.submitable=true
      setInputItems(PseudoInput)
    }
}

else{
        
    seterror('Length is Short')  
    PseudoInput[i].rules.submitable=false
    setInputItems(PseudoInput)
    
    
}


if(InputItems[0].rules.submitable&&InputItems[1].rules.submitable&& InputItems[2].rules.submitable){
        setbuttonSubmission(false)
    }
    
}
const emailValidator=(e,i)=>{
    const regEx=/@gmail.com$/
    let s= e.target.value
    let  PseudoInput=[...InputItems]
   // console.log(regEx.exec(s));
 
       if(!regEx.exec(s)){
       // console.log(regEx.exec(s),'inside');
        seterror(" Email is invalid ")
        PseudoInput[2].rules.submitable=false;
    } 
    else{
        PseudoInput[2].rules.submitable=true;
            seterror(null)
    }
    setInputItems(PseudoInput)
    
      
}
    useEffect(()=>{
        for(let value of InputItems)
        if(value.error){
            setbuttonSubmission(true)
        }
    },[InputItems])
const SubmitDetails=(e)=>{
e.preventDefault()
const data=[
    {Name:InputItems[0].value,
    Phone:InputItems[1].value,
    Email:InputItems[2].value},
]


axios.post('https://trip-o-manic.firebaseio.com/contact-us.json',data).then(r=>{
    console.log(r);
    setquery(true)
}).catch(err=>{
    console.log(err);
    setresponeseError(err.message)
    
})

}
let resultDiv=<div style={{textAlign:"center"}}>   
<h5 className='h5'>
    Load again if UI is not loaded properly.. <p>
        there been a bug we will de-bug it as soon as possible.. sorry for inconvenience
    </p>
    <a href='/contact'>
        Load again<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-clockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
</svg>
    </a>
</h5>
   </div>
if(query){
resultDiv=<div style={{textAlign:"center"}}>   
    <h5 className='h5'>
        Your request has been sent ..we will Contact you as soon as possible
        <NavLink to='/'>
            Back<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>
        </NavLink>
    </h5>
       </div>
}
if(responseError){
resultDiv=<div style={{textAlign:"center"}}>   
    <h5 className='h5'>
       Something went wrong..
       <h2>
           {responseError}
           <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-emoji-frown" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683z"/>
  <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
       </h2>
    </h5>
       </div>

}

    return(   <div className='bodydiv'>
{resultDiv}
<div className="inputDiv">
 <h1 style={{
     fontSize:'4vw'
 }}> We Will Contact  you Shortly</h1> 
<h3 className='kindly'>
    Kindly Fill ups the details </h3>
    
 <div className="inputSection">
     <form >
    {InputItems.map((items,index)=>{
        return <div key={items.placeholder+items.type} className='divisioncontact'> 
        <label>
        {items.placeholder}
           </label> 
        <Input  placeholder={items.placeholder} 
        className={items.className} required= {items.rules.required}
          onChange={(e)=> ChangeHandler(e,index)   } />
 </div>   })}
 <span>

    <span>
    {error}
            </span>
        </span>
    </form>
    <button type="submit" className='button'onClick={SubmitDetails} disabled={buttonsubmission} > Submit </button>
 </div>
</div>

        </div>
    ) 
}
export default Body
    
