// this is the basic example of the greet welcome helloo greetprops how it works and basic component 
// if we want to run this then copy this content and paste inside the app.js file and run this 
//there is nothing basically things and i know you know all this 


import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./Component/Greet"
import Welcome from "./Component/Welcome"
import Hello from "./Component/Hello"
import Greetprops from "./Component/Greetprops";
import Testing from "./Component/Testing";


function App() {
  return (
    <div className="App">
      <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hello world
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Greet name="hag na be bam"/>
            <Welcome />
            <Hello />
            <Greetprops  />
            <Testing />

              {/* <p>this is the children tag of greetprops</p>
            </greetprops> */}
        </header>
    </div>



  );
}

export default App;
