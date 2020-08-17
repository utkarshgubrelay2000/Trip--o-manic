import React, { Component } from 'react'
import './sidedrawer.css'
import { NavLink } from 'react-router-dom';

class SideDrawer extends Component {

    render() {
        let token = localStorage.getItem('token')


        return (
            <div className={this.props.css}>
                <div className='span'>
                    {token ? <NavLink to='/logout' style={{
                        textDecoration: 'none',
                        color: "lavender"
                    }}>  <span >

                            Logout<br />
                        </span>
                    </NavLink>
                        : <NavLink to='/Auth' style={{
                            textDecoration: 'none',
                            color: "lavender"
                        }}>  <span >

                                SignUp <br />
                            </span>
                        </NavLink>
                    }
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