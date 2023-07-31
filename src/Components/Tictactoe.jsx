
import Square from './Square';
import {  useState  } from 'react';
import wins from './win';
export default function Tictactoe(){
 const initialData =()=>{
  return new Array(9).fill("");
}
 
  const [tData , setTData] = useState(()=>initialData());
  const [currentPlayer,setCurrentPlayer] = useState('X');
  
  const reset = ()=>{
    setCurrentPlayer('X');
    setTData(initialData())
  }
  const t =(e)=>{ 
  let i = Number(e.target.id);
  setTData(pre=>{
    return pre.map((item,index)=>{
      if(index === i && item ==='' ) return currentPlayer;
      return item; 
    })
  })
  
   if(currentPlayer ==='X'){
    setCurrentPlayer("0");
   }
   else if(currentPlayer ==='0'){
    setCurrentPlayer("X");
   }
  }

  const calc = ()=>{
    let isWinner = false;
    if(tData.includes('X') || tData.includes('0')){
    wins.forEach(win=>{
        let f  = tData[win[0]]; 
        let s  = tData[win[1]]; 
        let t  = tData[win[2]];
        if(f === s && s === t && (f!==''&& s!='' && t!='')){
         alert(tData[win[0]]+' wins')
         isWinner = true;
         reset();
         
        } 
     }) 
  }
  if(!tData.includes('') && !isWinner){
    alert("no one win");
    setCurrentPlayer('X');
    setTData(initialData());
    reset();
  }
  
}
  calc();
 
  return (
   <>
  <div className="app">
    <div className="tictactoe">
      <div className='r'>
        <div className="c" id = '0' onClick={t}><Square val={tData[0]}></Square></div>
        <div className="c" id = '1' onClick={t}><Square val={tData[1]}></Square></div>
        <div className="c" id = '2' onClick={t}><Square val={tData[2]}></Square></div>
      
      </div>
      <div className='r'>
        <div className="c" id = '3' onClick={t}><Square val={tData[3]}></Square></div>
        <div className="c" id = '4' onClick={t}><Square val={tData[4]}></Square></div>
        <div className="c" id = '5' onClick={t}><Square val={tData[5]}></Square></div>
      
      </div>
      <div className='r'>
        <div className="c" id = '6' onClick={t}><Square val={tData[6]}></Square></div>
        <div className="c" id = '7' onClick={t}><Square val={tData[7]}></Square></div>
        <div className="c" id = '8' onClick={t}><Square val={tData[8]}></Square></div>
    
      </div>
      </div>
  </div>

   
   </>
    
  );
}

