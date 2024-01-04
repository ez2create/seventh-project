import React from "react";
import {useState} from "react";

function FunctionComp(props){
    const [count, setCount]= useState(0);
    // function 
    const countUp=()=>{
        setCount(count+1);
    }
    const countDown=()=>{
        setCount(count-1)
    }
    const [changeCom,setChangeCom]= useState("");
    // const changeComfun=()=>{

    // }
    return (
        <div>
            <p>This is function component</p>
            <p>My name is {props.name} and my age is {props.age}, I worked with {props.company} company.</p>
            <button onClick={countUp}>count Up</button>
            <button onClick={countDown}>count down</button>
            <h1>{count}</h1>
            <input type="text" onChange={(e)=>setChangeCom(e.target.value)} />
            <button onClick={()=>props.setCompany(changeCom)}>Change</button>
        </div>
    ) 
} 

export default FunctionComp;