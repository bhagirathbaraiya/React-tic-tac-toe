import React, { useEffect, useState } from 'react'
import Box from './Box'


function Tictactoe() {

    const[boxes,setBoxes]=useState(Array(9).fill(null))
    const[isXturn,setisXturn]=useState(true)

    const clickHandler = (id)=>{
        if(boxes[id]!=null){

        }else{
            const copyBoxes = [...boxes]
        copyBoxes[id]= isXturn ? X : O;
        setBoxes(copyBoxes);
        setisXturn(!isXturn) 
        console.log(boxes);
        }
    }

    useEffect(()=>{
        console.log("from effect", boxes);
    },[boxes])
    
  return (
    <div>
        <div className="container">
            <Box  id={0} click={clickHandler} value={boxes[0]}/>
            <Box  id={1} click={clickHandler} value={boxes[1]}/>
            <Box  id={2} click={clickHandler} value={boxes[2]}/>
            <Box  id={3} click={clickHandler} value={boxes[3]}/>
            <Box  id={4} click={clickHandler} value={boxes[4]}/>
            <Box  id={5} click={clickHandler} value={boxes[5]}/>
            <Box  id={6} click={clickHandler} value={boxes[6]}/>
            <Box  id={7} click={clickHandler} value={boxes[7]}/>
            <Box  id={8} click={clickHandler} value={boxes[8]}/>
        </div>
    </div>
  )
}

export default Tictactoe