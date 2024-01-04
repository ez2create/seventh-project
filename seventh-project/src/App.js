
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionComp from './functionComp/functionComp';
function App() {

  const [company,setCompany]= useState("Wem tech")

  const name ="Sohail"
  const age ="21"
  return (
    <div className="App">
      <FunctionComp company={company} name={name} age={age} setCompany={setCompany}/> 
    </div>
  );
}

export default App;
