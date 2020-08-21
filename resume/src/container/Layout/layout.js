import React,{Component} from 'react'
import Header from '../../components/layout/navbarr/nav'
import Body from '../../components/layout/body/body'
import InputDiv from '../../components/layout/inputDiv/inputDiv'


class    Layout  extends Component{
 render(){
     return(
         <div>

<div  style={{position:'relative'}}>
 <Header />
     <Body />

 </div>
 <InputDiv/>
    </div>
 
)}
}

export default (Layout)