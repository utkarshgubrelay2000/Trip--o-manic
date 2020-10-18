import React, { Component } from 'react'
import './sidedrawer.css'
import { NavLink } from 'react-router-dom';
import logo from '../Images/trip_o-Manic-01.png'

class SideDrawer extends Component {

    render() {
        


        return (
            <div className={this.props.css}>
                <div className='imageDivison'>
              <img src={logo} alt=''/>
                </div>
                <div className='span'>

                    <NavLink to='/contact' style={{
                        textDecoration: 'none',
                        color: 'lavender'
                    }}>
                   <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
</svg>         Contact Us
         </NavLink>
                </div>
                <div className='span'>
                    <NavLink to='/Tripsummary' style={{
                        textDecoration: 'none',
                        color: 'lavender'
                    }}>
           <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-list-ul" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>                 Trip Summary
         </NavLink>
                </div>



            </div>

        )
    }
}
export default SideDrawer