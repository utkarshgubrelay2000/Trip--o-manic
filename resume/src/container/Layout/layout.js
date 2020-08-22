import React,{Component} from 'react'
import  './l.css'
const  InputDiv=React.lazy(()=>import ('../../components/layout/inputDiv/inputDiv'))
const  Body=React.lazy(()=>import ('../../components/layout/body/body'))
const Header=React.lazy(()=>import ('../../components/layout/navbarr/nav'))


class    Layout  extends Component{

    state={
        bookTrip:false
    }

 render(){
    // let token =localStorage.getItem('token')
  //   let user =localStorage.getItem('user')
    
     return(
         <div>

<div  style={{position:'relative'}}>
 <Header />
     <Body />
 </div>
 <button onClick={()=>this.setState({bookTrip:!this.state.bookTrip})}  className='buttonBook'>
      {!this.state.bookTrip?"Book your Trip Now":"Close Booking"}
 </button>
 {this.state.bookTrip?
 <InputDiv/>:null
}
    </div>
 
)}
}

export default (Layout)