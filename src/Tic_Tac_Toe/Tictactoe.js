import React, { useState } from 'react'
import "./tictactoe.css"
const Tictactoe = () => {
    const [turn,setTurn]=useState('x');
    const [box,setBox]=useState(Array(9).fill(''));
    const[winner,setWinner]=useState();
    const checkWinner=(cells)=>{
     let combos={
         across:[
             [0,1,2],
             [3,4,5],
             [6,7,8],
         ],
         down:[
             [0,3,6],
             [1,4,7],
             [2,5,8],
         ],
         diagonal:[
             [0,4,8],
             [2,4,6],
         ]
     };

     for(let combo in combos)
     {
         combos[combo].forEach((pattern) => {
            if(
                cells[pattern[0]]===""||
                cells[pattern[1]]===""||
                cells[pattern[2]]===""
            )
            {
            //  do nothing
            }else if(
                cells[pattern[0]]===cells[pattern[1]]&&
                cells[pattern[1]]===cells[pattern[2]]
            )
            {
                setWinner( cells[pattern[0]]);
            }
         });
     }
    };
    

    const handleClick=(num)=>{
        if(box[num]!==''){
            alert("clicked")
            return;
        }
        // alert(num);
        let cells=[...box];

        if(turn==='x')
        {
            cells[num]='x';
            setTurn('o');
        }
        else{
            cells[num]='o';
            setTurn('x');
        }
        checkWinner(cells);
        setBox(cells);


    };
    const handleRestart=()=>{
        setWinner(null);
        setBox(Array(9).fill(''))
    }
    const Box=({num})=>{
        return <td onClick={()=>handleClick(num)}>{box[num]}</td>
    };
  return (
    <div className='container'>
      <table>
          Turn: {turn}
          <tbody>
              <tr>
                  <Box num={0}/>
                  <Box num={1}/>
                  <Box num={2}/>
              </tr>
              <tr>
              <Box num={3}/>
              <Box num={4}/>
              <Box num={5}/>
              </tr>
              <tr>
              <Box num={6}/>
              <Box num={7}/>
              <Box num={8}/>
              </tr>
          </tbody>
      </table>
      {winner && (
          <>
          <p>{winner} is winner</p>
          <button onClick={()=>{handleRestart()}}>Play again</button>
          </>
      )}
    </div>
  )
}

export default Tictactoe
