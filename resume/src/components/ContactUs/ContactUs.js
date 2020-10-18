import React, { Component } from 'react'

import Head from './head/head'
import Body from './body/body'

class Contact extends Component{
   
    render(){
        return (
            <React.Fragment>
                <section>
                  <Head/>
                  <Body/>
                </section>

            </React.Fragment> 
            
        )

        
    }
}
export default Contact