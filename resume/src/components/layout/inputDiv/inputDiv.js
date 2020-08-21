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
              required:true} ,
          {placeholder:'Date',type:'calendar',value:'',
              required:true} ,
          {placeholder:'Days',type:'Number',value:'',
              required:true} ,
          {placeholder:'Place',type:'text',value:'',
              required:true} ,
        ]
    }
    changeHandler=(e,i)=>{
      const PseudoInput=[...this.state.inputdetails];
  
      
          PseudoInput[i].value=e.target.value
        //  console.log(PseudoInput);
         this.setState({
  
             PseudoInput
          }
              )
          
      }
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
          traveller=<p> book your drive </p>
      }
return(

    <div className='Div'>
{traveller}
 { this.state.inputdetails.map((items,index)=>{
     return <div key={items.placeholder}> <Input  placeholder={items.placeholder} 
     type={items.type} required= {items.required}
     onChange={(e)=> this.changeHandler(e,index)   } /> <br/> </div>
    })}
 <button onClick={this.addTrip}>  Add trip</button>
 
    </div>
)}
}
export default inputDiv