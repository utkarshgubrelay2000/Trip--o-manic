import React from 'react'
import './Error.css'
function  Error (props){
  return(<div style={{
      margin:'40vh'
  }}>
      <div className='Error'>

 <h2>Something went wrong</h2>
<h3> {props.errorMessage}</h3>
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
        <div class="progress">
            <div class="outer">
                <div class="inner"></div>
            </div>
        </div>


</div>
</div>
    ) 
}

     
export default Error