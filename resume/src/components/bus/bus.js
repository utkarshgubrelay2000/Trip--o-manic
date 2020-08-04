import React from 'react'
import style from "./bus.module.css"
function Bus (){

    return(
       <div className={style.cover}>

        <div className={style.bus}>
<div className={style.window1}></div>
<div className={style.window2}></div>
<div className={style.window3}></div>
<div className={style.window4}></div>
<div className={style.door}></div>
<div className={style.wheel1}></div>
<div className={style.wheel2}></div>
        </div>
       </div>
    ) 
}
export default Bus