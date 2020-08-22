import React,{Component} from 'react'
import './inputDIV.css'
import Bus from '../../bus/bus'
import Car from '../../car/car'
import Input from '../../../ui/input'
import axios from 'axios'
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
          const data= {
      Person:this.state.inputdetails[0].value,
      Date:this.state.inputdetails[1].value,
      days:this.state.inputdetails[2].value,
      Place:this.state.inputdetails[3].value,
      Bookingdate:new Date(),
          }
          
          console.log(data);
          
          axios.post('https://trip-o-manic.firebaseio.com/Trip.json',data).then(r=>{
              console.log(r);
              
          }).catch(err=>{
              console.log(err);
          })
          
     }
  render(){
     
      let traveller;
      if(this.state.inputdetails[0].value>0&&this.state.inputdetails[0].value<5){
          traveller=<Car/>
      }
      else   if(this.state.inputdetails[0].value>4){
          traveller=<Bus/>
      }
      else{
          traveller=<p>  </p>
      }
return(

    <div className='Div'>
{traveller}
<p className='para'> Get on a road Trip </p>
<span>
   Now in just few seconds
</span>
<br/>
<br/>
<br/>
<div style={{textAlign:"center"}}>

 { this.state.inputdetails.map((items,index)=>{
     return <div key={items.placeholder} > 
     <label className={items.classNameLabel} >{items.placeholder}</label> <br/>
     <Input  placeholder={items.placeholder}  className={items.className}
     type={items.type} required= {items.required}
     onChange={(e)=> this.changeHandler(e,index)   } /> <br/> </div>
    })}
 <button onClick={this.addTrip} className='AddTrip'>  Add trip</button>
 
    </div>
    </div>
)}
}
export default inputDiv