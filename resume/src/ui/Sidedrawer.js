import React, { Component } from 'react'
import './sidedrawer.css'
import { NavLink } from 'react-router-dom';
import logo from '../Images/trip_o-Manic-01.png'

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