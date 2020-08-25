import React, { Component } from 'react'
import './Auth.css'


const Login=React.lazy(()=>import ('./SignUP/Signup'))
const SignUp=React.lazy(()=>import ('./Login/Login'))
class Auth extends Component {
    state = {
        toggle: true,

    }
    renderHandler = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render() {

        return (<div className="authDiv">
            <h2 className='signUp'>
                {this.state.toggle ? "SignUp" : "Login"}
            </h2>
            {!this.state.toggle ?
                <SignUp renderHandler={this.renderHandler} /> :
                <Login renderHandler={this.renderHandler} />
            }
        </div>
        )
    }
}
export default Auth