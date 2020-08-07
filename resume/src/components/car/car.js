import React from 'react'
import style from './car.module.css'
function  Car  (){

    return(
<div>
    <div className={style.carCover}>
<div className={style.carFront}></div>
<div className={style.carWin1}></div>
<div className={style.carWin2}></div>
<div className={style.carDoor}></div>
<div className={style.carLock}></div>
<div className={style.carDoor1}></div>
<div className={style.carLock1}></div>
<div className={style.carWheel1}></div>
<div className={style.carWheel2}></div>


    </div>
</div>
    ) 
}
export default  Car