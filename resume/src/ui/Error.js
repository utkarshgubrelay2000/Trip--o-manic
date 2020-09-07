import React from 'react'
import './Error.css'
function  Error (props){
  return(<div style={{
      margin:'40vh'
  }}>
      <div className='Error'>

 <h6>Something went wrong</h6>
<h5> {props.errorMessage}</h5>
      </div>
<div className="main">
        <div className="shadow-wrapper">
            <div className="shadow"></div>
        </div>
        <div className="dragon">
            <div className="body"></div>
            <div className="horn-left"></div>
            <div className="horn-right"></div>
            <div className="eye left"></div>
            <div className="eye right"></div>
            <div className="blush left"></div>
            <div className="blush right"></div>
            <div className="mouth"></div>
            <div className="tail-sting"></div>
        </div>
        <div className="fire-wrapper">
            <div className="fire"></div>
        </div>
        <div className="progress">
            <div className="outer">
                <div className="inner"></div>
            </div>
        </div>


</div>
</div>
    ) 
}

     
export default Error