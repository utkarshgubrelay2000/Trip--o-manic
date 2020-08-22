import React, { Component } from 'react'

const Head=React.lazy(()=>import ('./head/head'))
const Body=React.lazy(()=>import ('./body/body'))
class Contact extends Component{
    render(){
        return (
            <React.Fragment>
<Head/>
<Body/>
            </React.Fragment>
            
        )

        
    }
}
export default Contact