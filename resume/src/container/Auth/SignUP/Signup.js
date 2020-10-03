import React, { Component } from 'react'
import Input from '../../../ui/input'
//import Error from '../../../ui/Error'
import Spinner from '../../../ui/spinner'
import '../Auth.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/index'
class Signup extends Component {

    state = {
        SignUp: {
            input: [
                { placeholder: 'UserName', type: 'text', className: 'inputType', value: '' },
                { placeholder: 'Password', type: 'Password', className: 'inputType', value: '' },
            ]
        },

    }
    authanticationHandler = () => {

        this.props.authSignUp(this.state.SignUp.input[0].value, this.state.SignUp.input[1].value)
    }
    ChangeHandler = (e, i) => {

        let PseudoInput = [...this.state.SignUp.input];
        PseudoInput[i].value = e.target.value
        this.setState({
            PseudoInput
        })

    }
    render() {
        const customToken = localStorage.getItem('token')
        return (<>
            {customToken ? <Redirect to='/' /> : 
                <div className="middleDiv">
                    <h6>
                        {this.props.error}
                    </h6>
                    {this.props.loading ? <Spinner /> :
                        <div>
                            {this.state.SignUp.input.map((items, i) => {
                                return (<div key={items.placeholder} className='signUpdiv'>
                                    <label >
                                        {items.placeholder}
                                    </label>
                                    <Input type={items.type} required placeholder={items.placeholder} className={items.className} onChange={(e) => this.ChangeHandler(e, i)} />
                                </div>
                                )
                            })}

                            <button className='ButtonLogin ' onClick={this.authanticationHandler}>
                                Sign Up
        </button>
                        </div>}
                    <span className='AccountLogin'>
                        Already have a account 
                    </span>
                          <button className='Authhandler' onClick={this.props.renderHandler} >
                            Login
            </button>
                </div> 
            }
        </>




        )
    }
}
const mapsDispatchToProps = dispatch => {
    return {
        authSignUp: (e, p) => dispatch(actionTypes.Signup(e, p))
    }

}
const mapsStateToProps = state => {
    return {
        token: state.signup.token,
        loading: state.signup.loading,
        error: state.signup.error,
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Signup)