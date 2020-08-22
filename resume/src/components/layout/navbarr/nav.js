import React, { useState } from 'react'
import "./ui.css"

import SideDrawer from '../../../ui/Sidedrawer'
import NavigationItems from './navigationitems/navigationitms'
import { NavLink } from 'react-router-dom'
import logo from '../../../Images/trip_o-Manic-01.png'
function Header(props) {

   const [showSideDrawer, setSidedrawer] = useState(false)
   let token = localStorage.getItem('token')


   return (

      <div >
         {showSideDrawer ?
            <SideDrawer css='sidedrawer sidein' /> : <SideDrawer css='sidedrawer sideout' />
         }
         <div className="header">
            <img src={logo} alt="logo" style={{
                  width: '20vw',
                  height: '11vh',
               float: 'left',
               marginLeft: "5vw",

            }} />

            <button className='menu' onClick={() => setSidedrawer(!showSideDrawer)} >
               Menu
      </button>




            <NavigationItems className="navItems" >
               <NavLink to='/contact' style={{
                  textDecoration: 'none',
                  color: 'white'
               }}>
                  Contact Us
         </NavLink>
            </NavigationItems>
            <NavigationItems className="navItems" >
               <NavLink to='/Tripsummary' style={{
                  textDecoration: 'none',
                  color: 'white'
               }}>
                  Trip Summary
         </NavLink>
            </NavigationItems>
            {token ?
               <NavigationItems className="Signup" >
                  <NavLink to='/logout' style={{
                     textDecoration: 'none',
                     color: 'black'
                  }}>
                     Logout
         </NavLink>
               </NavigationItems>
               :
               <NavigationItems className="Signup" >
                  <NavLink to='/Auth' style={{
                     textDecoration: 'none',
                     color: 'black'
                  }}>
                     SignUp
         </NavLink>
               </NavigationItems>
            }


         </div>
      </div>
   )
}
export default Header