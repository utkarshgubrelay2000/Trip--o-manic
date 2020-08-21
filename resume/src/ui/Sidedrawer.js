import React, { Component } from 'react'
import './sidedrawer.css'
import { NavLink } from 'react-router-dom';
import logo from '../pexels-francesco-ungaro-281260.jpg'

class SideDrawer extends Component {

    render() {
        


        return (
            <div className={this.props.css}>
                <div className='imageDiv'>


              <img src={logo} alt=''/>
                </div>
                <div className='span'>

                    <NavLink to='/contact' style={{
                        textDecoration: 'none',
                        color: 'lavender'
                    }}>
                        Contact Us
         </NavLink>
                </div>
                <div className='span'>
                    <NavLink to='/Tripsummary' style={{
                        textDecoration: 'none',
                        color: 'lavender'
                    }}>
                        Trip Summary
         </NavLink>
                </div>



            </div>

        )
    }
}
export default SideDrawer