import React, { Component } from 'react'
import Input from '../../../ui/input'
import Error from '../../../ui/Error'
import Spinner from '../../../ui/spinner'
import '../Auth.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/index'
class Signup extends Component {

    state = {
        SignUp: {
            input: [
                { placeholder: 'UserName', type: 'text', className: 'loginInputUsername', label: 'loginname', value: '' },
                { placeholder: 'Password', type: 'Password', className: 'loginInputPassword', label: 'loginpassword', value: '' },
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
            {customToken ? <Redirect to='/' /> : !this.props.error ?
                <div className="middleDiv">
                    {this.props.loading ? <Spinner /> :
                        <div>
                            {this.state.SignUp.input.map((items, i) => {
                                return (<div key={items.placeholder}>
                                    <label className={items.label}>
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
                        Already have a account  <br /> <button className='Authhandler' onClick={this.props.renderHandler} >
                            Login
            </button>
                    </span>
                </div> : <Error errorMessage={this.props.error} />
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