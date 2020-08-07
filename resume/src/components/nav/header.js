import React,{useState}  from 'react'
import "./ui.css"
import logo from '../../logo.png'
import SideDrawer from '../../ui/Sidedrawer'
import NavigationItems from './navigationitems/navigationitms'
import {NavLink} from 'react-router-dom'
function   Header (props){
    const NavItems=useState([
       {title:'Contact Us' , link:'/Contact'},
       {title:'About Us' , link:'/about'},
       {title:'Trip Summary' , link:'/Tripsummary'},
    ])[0]
   const [showSideDrawer,setSidedrawer]=useState(false)
  
   return( 
   
   <div >
       { showSideDrawer?
      <SideDrawer css='sidedrawer sidein'  navlist={NavItems} />:<SideDrawer css='sidedrawer sideout' />
   }
   <div className="header">
      <img src={logo} alt="logo" style={{
         width:"10vw",
         height:'8vh',
         float:'left',
         marginLeft:"5vw",

      }}/>
      
      <button className='menu'onClick={()=>setSidedrawer(!showSideDrawer)} > 
         Menu
      </button>
     
    
      {NavItems.map(items=>{
         return ( 
            <NavigationItems className="navItems" key={items.title}> 
            <NavLink to={items.link} style={{
               textDecoration:'none',
               color:'black'
            }}> 
    {items.title}
         </NavLink>
             </NavigationItems>
            )
      })}

    </div>
            </div>
   ) 
}
export default  Header