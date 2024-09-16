import React from 'react'

function Box(props) {    
  return (
    <div className='box' onClick={()=>{props.click(props.id)}}>
        <img src={props.value} alt=""  className='font-img'/>
    </div>
  )
}

export default Box