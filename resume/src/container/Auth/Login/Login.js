import React, { Component } from 'react'
import Input from '../../../ui/input'
import Spinner from '../../../ui/spinner'
import Error from '../../../ui/Error'
import '../Auth.css'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/index'
import { Redirect } from 'react-router-dom'
class Login extends Component {

    state = {
        Login: [
            { placeholder: 'UserName', type: 'text', className: 'inputType', value: '' },
            { placeholder: 'Password', type: 'Password', className: 'inputType',  value: '' },

        ],
        error: null,
        loading: false

    }
    authanticationLoginHandler = () => {

        this.props.Login(this.state.Login[0].value, this.state.Login[1].value)
        console.log(this.props.loading);
    }
    ChangeHandler = (e, i) => {

        let IInput = [...this.state.Login]
        IInput[i].value = e.target.value
        this.setState({
            IInput
        })

    }

    render() {
        const customToken = localStorage.getItem('token')
        return (<>
            {customToken ? <Redirect to='/' /> : this.props.error ? <Error errorMessage={this.props.error} /> :
                <div className="middleDiv">
                    {this.props.loading ? <Spinner /> :
                        <div>
                            {this.state.Login.map((items, i) => {
                                return (
                                    <div key={items.placeholder} className='signUpdiv' > <label >
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
                        Don't have a account Create 
                    </span>
                        <button className='Authhandler' onClick={this.props.renderHandler}>
                            SignUp
       </button>
                </div>}
        </>
        )
    }
}
const mapsDispatchToProps = dispatch => {
    return {
        Login: (e, p) => dispatch(actionTypes.user(e, p))
    }

}
const mapsStateToProps = state => {
    return {
        token: state.Login.token,
        error: state.Login.error,
        loading: state.Login.loading,
    }
}
export default connect(mapsStateToProps, mapsDispatchToProps)(Login);