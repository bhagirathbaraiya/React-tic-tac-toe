import React, { useState } from 'react'
import Box from './Box'

import X from '../Assets/Xred.png'
import O from '../Assets/Ogreen.png'


function Tictactoe() {

    const[boxes,setBoxes]=useState(Array(9).fill(null))
    console.log(boxes);


    const clickHandler = (id)=>{
        console.log(id,"i am clicked");
    }
    
  return (
    <div>
        <div className="container">
            <Box  id={0} click={clickHandler}/>
            <Box  id={1} click={clickHandler}/>
            <Box  id={2} click={clickHandler}/>
            <Box  id={3} click={clickHandler}/>
            <Box  id={4} click={clickHandler}/>
            <Box  id={5} click={clickHandler}/>
            <Box  id={6} click={clickHandler}/>
            <Box  id={7} click={clickHandler}/>
            <Box  id={8} click={clickHandler}/>

        </div>
    </div>
  )
}

export default Tictactoe