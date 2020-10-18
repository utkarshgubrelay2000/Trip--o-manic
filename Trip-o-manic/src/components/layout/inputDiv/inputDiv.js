import React,{Component} from 'react'
import './inputDIV.css'
import Input from '../../../ui/input'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


class   inputDiv       extends Component{
    state={
        inputdetails:[
          {placeholder:'No of Person',type:'Number',value:0,
              required:true,classNameLabel:'Person',className:'Input1'} ,
          {placeholder:'Date',type:'calendar',value:'',
              required:true,classNameLabel:'Date',className:'Input2'} ,
          {placeholder:'Days',type:'Number',value:'',
              required:true,classNameLabel:'Days',className:'Input3'} ,
          {placeholder:'Place',type:'text',value:'',
              required:true,classNameLabel:'Place',className:'Input4'} ,
        ]
    }
   
    changeHandler=(e,i)=>{
        const PseudoInput=[...this.state.inputdetails];
        PseudoInput[i].value=e.target.value
        
        this.setState({PseudoInput}) }
        addTrip=()=>{
            let  currentuser=localStorage.getItem('user')
          const data= {
              User:currentuser,
      Person:this.state.inputdetails[0].value,
      Date:this.state.inputdetails[1].value,
      days:this.state.inputdetails[2].value,
      Place:this.state.inputdetails[3].value,
      Bookingdate:new Date(),
          }
          
    
          
          axios.post('https://trip-o-manic.firebaseio.com/Trip.json',data).then(r=>{
           //   console.log(r);
              
          }).catch(err=>{
             // console.log(err);
          })
          
     }
  render(){
     
   let token=localStorage.getItem('token');
   let InputDivision;
   if(!token){
InputDivision=<Redirect to="/Auth"/>
   }
   else{
       InputDivision=''
   }
return(
    <div className='outerDiv'>
   

    <div className='Div'>
    {InputDivision}
<p className='para'> Get on a road Trip </p>
<span className='Now'>
   Now in just few seconds
</span>

<div style={{textAlign:"center"}}>

 { this.state.inputdetails.map((items,index)=>{
     return <div key={items.placeholder} className='division' > 
     <label className={items.classNameLabel} >{items.placeholder}</label> <br/>
     <Input  placeholder={items.placeholder}  className={items.className}
     type={items.type} required= {items.required}
     onChange={(e)=> this.changeHandler(e,index)   } /> <br/> </div>
    })}
 <button onClick={this.addTrip} className='AddTrip'>  Add trip</button>
 
    </div>
    </div>
    </div>
)}
}
export default inputDiv