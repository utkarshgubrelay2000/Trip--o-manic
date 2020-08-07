import React, { Component }  from 'react'
import './sidedrawer.css'
import {NavLink} from 'react-router-dom';

class SideDrawer extends Component {
    
    render(){
     
       
   
        return(
            <div className={this.props.css}>
{this.props.navlist?
this.props.navlist.map(items=>{
    return ( <div className='span' key={items.title}>

        <NavLink to={items.link}   style={{
           textDecoration:'none',
           color:"lavender"
        }}>  <span >

{items.title} <br/>
        </span>
     </NavLink>
     </div>

)
}):null}

</div>

) 
}
}
export default SideDrawer