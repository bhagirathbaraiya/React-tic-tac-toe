import React from 'react'

function Box(props) {
    console.log(props);
    
  return (
    <div className='box' onClick={()=>{props.click(props.id)}}>
        {/* <img src={O} alt=""  className='font-img'/> */}

    </div>
  )
}

export default Box