import React,{Component} from 'react'
import image from '../../../pexels-gaetan-thurin-3163927.jpg'
import  './body.css'
class    Body      extends Component{
render(){
return(
<>
<div className='bodyDiv'>
    <img src={image} alt='' className='img'/>
</div>


</>

)}
}
export default Body