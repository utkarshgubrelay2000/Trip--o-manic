import React from 'react'
import { Redirect } from 'react-router-dom'
function   Logout  (){
localStorage.removeItem('token')
localStorage.removeItem('user')
    return(
        <>
        <Redirect to='/'/>
         </>
    ) 
}

    export default Logout