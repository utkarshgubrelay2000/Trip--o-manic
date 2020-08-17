import React, { Component } from 'react'
import Input from '../../../ui/input'
import Spinner from '../../../ui/spinner'
import Error from '../../../ui/Error'
import '../Auth.css'
import {connect} from 'react-redux'
import * as actionTypes from '../../../store/reducers'
import { Redirect } from 'react-router-dom'
class Login extends Component {

    state = {
        Login: [
            { placeholder: 'UserName', type: 'text', className: 'loginInputUsername', label: 'loginname', value: '' },
            { placeholder: 'Password', type: 'Password', className: 'loginInputPassword', label: 'loginpassword', value: '' },

        ],
        error:null,
        loading:false

    }
    authanticationLoginHandler=()=>{
       this.props.Login(this.state.Login[0].value,this.state.Login[1].value)
    }
    ChangeHandler = (e, i) => {
        
        let IInput = [...this.state.Login]
        IInput[i].value = e.target.value
        this.setState({
            IInput
        })

    }
    render() {
        
        return (<>
        {this.props.token?<Redirect to='/' />:this.state.error?<Error/>:
        <div className="middleDiv">
                {this.state.loading?<Spinner/>:
            <div>
                {this.state.Login.map((items, i) => {
                    return (
                        <div key={items.placeholder} > <label className={items.label}>
                        {items.placeholder}
                    </label>
                            <Input onChange={(e) => this.ChangeHandler(e, i)} className={items.className} required type={items.type} placeholder={items.placeholder} />
                    </div>
                    )
                })}
                <button className='ButtonLogin' onClick={this.authanticationLoginHandler} >
                    Login
    </button>
            </div>}
            <span className='AccountLogin'>
                Don't have a account Create <br /> <button className='Authhandler' onClick={this.props.renderHandler}>
                    SignUp
       </button>
            </span>
        </div>}
</>
        )
    }
}
const mapsDispatchToProps=dispatch=>{
    return {
        Login:(e,p)=> dispatch(actionTypes.user(e,p))
    }

}
const mapsStateToProps=state=>{
    return {
        token:state.token
    }
}
export default connect(mapsStateToProps,mapsDispatchToProps)(Login);