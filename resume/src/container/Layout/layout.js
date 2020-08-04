import React,{Component} from 'react'
import Header from '../../components/nav/header'
import Bus from '../../components/bus/bus'
class    Layout      extends Component{
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
        traveller=<h1>Car</h1>
    }
return(
<div >
 <Header />
 <div style={{
     
     width:"100%",
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