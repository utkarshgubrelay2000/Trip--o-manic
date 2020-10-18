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
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755S12 12 8 12s-5 1.755-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
</svg>    {this.state.toggle ? "SignUp" : "Login"} 
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