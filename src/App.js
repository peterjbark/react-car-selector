import React from "react";
import Filter from "./components/Filter";
import {useSelector, useDispatch} from 'react-redux';
import { toggleDarkMode } from "./features/darkModeSlice";

function App() {
  const {mode} = useSelector((state)=>state.darkMode)
  const dispatch = useDispatch();

  return (
    <div className="app" style ={{background:mode? '#454545' : '#D6D6D6' , color:mode? '#E2E2E2' : '#000000 '}}>
      <header className = "header">
        <h1 className = "title"  style ={{background:mode? '#666666 ' : '#CDCDCD ' , color:mode? '#FFFFFF' : '#000000 '}}>Find-A-Car</h1>
        <button style ={{background:mode? '#454545' : '#D6D6D6' , color:mode? '#E2E2E2' : '#000000 '}} 
        onClick = {() => dispatch(toggleDarkMode())}>&#127769;</button>
      </header>
      <main className = "main">
        <Filter/>
      </main>
    </div>
  );
}

export default App;
