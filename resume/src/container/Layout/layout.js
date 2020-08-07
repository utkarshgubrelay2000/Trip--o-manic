import React,{Component} from 'react'
import Header from '../../components/nav/header'
import Bus from '../../components/bus/bus'
import Car from '../../components/car/car'
class    Layout  extends Component{
  state={
      people:0
  }
  changeHandler=(e)=>{
     this.setState(
         {
             people:e.target.value
         }
     )
        
    }
render(){
    let traveller;
    if(this.state.people===0){
traveller=<p> book your drive </p>
    }
 else   if(this.state.people>5){
traveller=<Bus/>
    }
    else{
        traveller=<Car/>
    }
return(
<div >
 <Header />
 <div style={{
     
     width:"98vw",
     height:"70vh",
     textAlign:"center",
     fontSize:"6vh",
     zIndex:'-1',
    
 }}
 className="animate"
 >
{traveller}
  
 </div>
 <input placeholder="number of people" onChange={(e)=>this.changeHandler(e)}  /> </div>
)}
}
export default Layout