import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './body.css'
import Input from '../../../ui/input'
const Body=()=>{

    const [InputItems,setInputItems]=useState([
        {placeholder:'Name',type:'text',className:'input',rules:{
            required:true,
            submitable:false,
            length:8
        },
        value:'',
        error:null
    },
    {placeholder:'Phone no.',type:'number',className:'input2',rules:{
        required:true,
        submitable:false,
        length:8
    },
    value:'',
    error:null
},
{placeholder:'Email',type:'text',className:'input3',rules:{
    required:true,
    submitable:false,
    length:8
},value:'',
error:null
    },
    ])
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
    
  PseudoInput[i].error=null
    PseudoInput[i].rules.submitable=true
    setInputItems(PseudoInput)
}
else{
    
    PseudoInput[i].error='length is short'
    PseudoInput[i].rules.submitable=false
    setInputItems(PseudoInput)
    
}

    if(InputItems[0].rules.submitable&&InputItems[1].rules.submitable&& InputItems[2].rules.submitable){
        setbuttonSubmission(false)
    }

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
console.log(data);
console.log('entered');

axios.post('https://trip-o-manic.firebaseio.com/contact-us.json',data).then(r=>{
    console.log(r);
    
}).catch(err=>{
    console.log(err);
    
})

}

    return(   <div>

<div className="inputDiv">
 <h1 style={{
     fontSize:'4vw'
 }}> We Will Contact  you Shortly</h1> 
<h3 className='kindly'>
    Kindly Fill ups the details </h3>
    <div className="labelDiv">
       <label>
           Name:
           </label> 
       <label>
           Phone no.:
           </label> 
       <label>
           Email:
           </label> 
    </div>
 <div className="inputSection">
     <form >
    {InputItems.map((items,index)=>{
        return <div key={items.placeholder+items.type}> <span>
{items.error}
        </span>
        <Input  placeholder={items.placeholder} 
        className={items.className} required= {items.rules.required}
          onChange={(e)=> ChangeHandler(e,index)   } />
 </div>   })}
    <button type="submit" className='button'onClick={SubmitDetails} disabled={buttonsubmission} > Submit </button>
    </form>
 </div>
</div>
        </div>
    ) 
}
export default Body
    
