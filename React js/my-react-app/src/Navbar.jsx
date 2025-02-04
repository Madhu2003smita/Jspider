import React from 'react'

export default function Navbar({stateNum,setStateNum}) {
    console.log(stateNum,setStateNum);
    function handleNum(){
        setStateNum(--stateNum)
    }
    
  return (
    <div>
      <h1>Navbar</h1>
      <button onClick={handleNum}>Decrease</button>
      <h1>THe value on count of Navbar is : {stateNum}</h1>
    </div>
  )
}
