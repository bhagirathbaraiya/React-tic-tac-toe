import React, { useEffect, useState } from 'react'
import Box from './Box'

import X from '../Assets/Xred.png'
import O from '../Assets/Ogreen.png'
import Messege from './Messege'


function Tictactoe() {

    const[boxes,setBoxes]=useState(Array(9).fill(null))
    const[isXturn,setisXturn]=useState(true)
    const[isXwinned,setisXwinned]=useState(false);

    const checkWinner = ()=>{
        const winnerLogic =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [0,4,6],
        ]
        for(let win of winnerLogic){
           const [a,b,c] = win;
           if(boxes[a] !== null && boxes[a] === boxes[b] && boxes[b] === boxes[c]){
            // isXturn ? alert("O winned") : alert("X winned")
            setisXwinned(true);
           }
        }
    }
    
    const resetGame = ()=>{
        setBoxes(Array(9).fill(null))
        setisXturn(true)
        setisXwinned(false)
    }
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
        checkWinner();
    },[boxes])
    
  return (
    <div>
        {
            isXwinned ? <Messege winner={isXwinned} gamereset={resetGame}/>
        : <div className="container">
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
        }
    </div>
  )
}

export default Tictactoe