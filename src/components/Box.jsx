import React from 'react'
import X from '../Assets/Xred.png'
import O from '../Assets/Ogreen.png'

function Box(props) {    
  return (
    <div className='box' onClick={()=>{props.click(props.id)}}>
        <img src={props.value} alt=""  className='font-img'/>
    </div>
  )
}

export default Box