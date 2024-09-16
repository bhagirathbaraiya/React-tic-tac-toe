import React from 'react'

function Messege(props) {
    console.log(props);
    
  return (
    <div className='container'>
        <p id='messege'>
        {
            props.winner ? "X winned " : "O winned"
        }
        </p>
        
        <button onClick={()=>{props.gamereset()}} id='reset-btn'>Reset Game</button>
    </div>
  )
}

export default Messege