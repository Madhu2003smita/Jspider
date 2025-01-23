import { useState } from "react";
function Resturant() {
 let[counter,setCounter]=useState(0);
 function add(){
    setCounter(counter+1);
 }
 console.log(counter);
 function rem(){
    setCounter(counter-1);
 }
 return(
    <>
    <h1>Resturant</h1>
    <p>The Number of Dish: <b>{counter}</b></p>
    <button onClick={add}>Add Dish</button>
    <button onClick={rem}>Remove Dish</button>
    </>
 )
}
export default Resturant;