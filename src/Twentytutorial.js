// this is the first file in which i write the 20 tutorials of the thapa technical the basic information
// is stored in this file if we want to run this file the we have to copy the whole file and paste in the 
// index.js file and save and run. it works 

// basic programs and the information regarding the basic concepts

import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Hello from "./Component/Hello"
import Challenge1 from "./Component/Challenge1"
import App from "./App"
import Challenge2 from './Component/Challenge2'
import Challenge3 from './Component/Challenge3'
import Jackflix from './Component/Jackflix'
import {add, sub ,mul, div} from "./Component/Math";


// ReactDOM.render('kay dikhana hai // what to show','kaha dikkhana hai // where to show','callback function')

// if we are using above the version 16.13 then we are able to use the [] instead of 
// div in the html i.e eg:-
// <div>
//   <h1> JAI SHRI RAM </h1>,
//     <p>this is my important learning</p>,
//     <p>Warning something is goint to happen at the 15th august in 2020</p>,
//     <h2> JAI SHRI RAM </h2>
// </div>
// instead of this we use this:-

//real-example:1
ReactDOM.render(
  [
    <div className='maindiv'>
      <h1> JAI SHRI RAM </h1>,
      <p>this is my important learning</p>,
      <p>Warning something is goint to happen at the 15th august in 2020</p>,
      <h2> JAI SHRI RAM </h2>,
      <Challenge1 />,
      <Hello/>,
      <App />
    </div>
  ],
  document.getElementById('root1'));

  // we use React.Fragment beacause when we use the div in //what to show the we get another div
  // when we inspecting the elements so we use the Fragment which doesnot make the extra another div

  //real example:-2
  ReactDOM.render(
    <React.Fragment>
      <div className='maindiv'>
        <h1> JAI SHRI RAM </h1>
        <p>this is my important learning</p>
        <p>Warning something is goint to happen at the 15th august in 2020</p>
        <h2> JAI SHRI RAM </h2>
      </div>
      </React.Fragment>,
    document.getElementById('root2'));

    // instead of the React.Fragment we can use nothing in side angular bracket
    // real example :-3
    ReactDOM.render(
      <>
        <div className='maindiv'>
          <h1> JAI SHRI RAM </h1>
          <p>this is my important learning</p>
          <p>Warning something is goint to happen at the 15th august in 2020</p>
          <h2> JAI SHRI RAM </h2>
        </div>
        </>,
      document.getElementById('root3'));


    // tutorial 10 :- javascript expression in jsx in react
    // eg:-
    //we can only use only expression not statements(if condition , for loop)
    // real example :-4
    const fname = "prathmesh"
    const lname = "futane"

    ReactDOM.render(
      [
        <div className='maindiv'>
          <h1>my full name is {fname +" "+ lname}</h1>,
          <p>my lucky number is {Math.random()*100}</p>
        </div>
      ],
      document.getElementById('root4')
    );


    //tutorial 11 :-
    // templete literal in jsx in React
    // if we want use templetes then we have to use backticks ``

    // real example:- 5
    

    ReactDOM.render(
      [
        <div className='maindiv'>
          <div className='maindiv'>
          <h1>{`my full name is ${fname} and ${lname}`}</h1>,
          <h3>{`this is for ${5+2}`}</h3>,
          <p>my lucky number is {Math.random()*100}</p>
          </div>
        </div>
      ],
      document.getElementById('root5')
    );

    // challenge 2
    // real example :-6
    
    ReactDOM.render(
      [
        <div className='maindiv'>
        <Challenge2 />
        </div>
      ],
      document.getElementById('root6')
    );

    // tutorial 13:-
    // jsx attributess in reactjs
    // in the html attribute the attribute is written in the simple case i.e contentediteable
    // and in jsx we have to use the  CAMEL CASE  for the attributes of the jsx i.e contentEditeable
    // if there is no children of any tag then we write as <img />

    // we can store the images in the variable
    // let image1 = "E:\reactfirst\awesomeapp\images\log.png"

    //real example:-7
    // image1 = "E:\reactfirst\awesomeapp\images\log.png"
    // ReactDOM.render(
    //     <>
    //     <h1 contentEditable='true'>my name is jack</h1>
    //     <img src={image1} alt='nothing'></img>
    //     </>,
    //     document.getElementById('root7')

    // );


// tutorial 14:-
// css styling and importing css files 
//real example:-8
ReactDOM.render(
       [
       <div className='maindiv'>
          <h1 contentEditable='true' className="heading">my name is jack</h1>,
          <div className='maindiv1'>
            <div className='one'></div>
            <div className='two'></div>
            <div className='three'></div>
          </div>
        </div>
       ],
       document.getElementById('root8')

   );

   //if we want to google font then we have to link at the index.html  page
   // and actual font is added in index.css file in font-family

    // tutorial 16
   //css inline styling
   //<h1 style='height:300px; weight:300px;'></h1>,
  //  this is not going to work in the react so for this we use

  //  real example:-9
       //we have to create the object and pass the object to style attribute
   const heading = {
      color:'red',
      textTransform:'capitalize',
      fontFamily:'capitalize',
      textAlign:'center',
      textShadow:' 0px 2px 4px black'
   }

   ReactDOM.render(
    [
      <div className='maindiv'>
        <h1  style={heading}>my name is jack</h1>
      </div>

    ],
    
    document.getElementById('root9')

);


  //OROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROROR
  // real example:10
      const heading1 = {
        color:'red',
        textTransform:'capitalize',
        fontFamily:'capitalize',
        textAlign:'center',
        textShadow:' 0px 2px 4px black'
     }
  
     ReactDOM.render(
                      
       <h1  style={{
        color:'red',
        textTransform:'capitalize',
        fontFamily:'capitalize',
        textAlign:'center',
        textShadow:' 0px 2px 4px black'
     }}>my name is jack</h1>,
      
      document.getElementById('root10')
  
  );


// CHALLENGE 3:-
// real example:-11
let challenge3stylling = {
  
}
let mainstyling = {
  display:'flex',
  flexDirection: 'column',

  textAlign: 'center',
  height: 'auto',
  width: 'auto',
  backgroundColor: 'yellow',
  padding: '20px',
  marginLeft: '200px',
  marginRight: '200px'
}
ReactDOM.render(
  [
    <div style={mainstyling}>
      <h2 style={challenge3stylling}>This is Challenge3 </h2>,
      <Challenge3 />
    </div>
   
  ],
  document.getElementById('root11')
);

// tutorial 18 :-
// the component is the best part of react i.e we can create the component and use what ever
// time we want use for eg:-
// create the file called example.js and write down or create the function in it which will return the
// jsx elements and then export the file as shown in the component folder
// after import the file in the app.js file all the files and import that app.js in the index.js 
// this is the proedure of creating components.Challenge3
// the component is the basic the smallest part that we can import by creating in the form of tags.


// tutorial 20:-
// import export default 


// NETFLIX APP:-
//real example:-12
ReactDOM.render(
[<Jackflix />,<Jackflix />],document.getElementById('root12')
);

// real example:-13

 let first = prompt("enter the first number");
 let second = prompt("enter the second number");
 first = Int8Array(first);
 second = Int8Array(second);
 
ReactDOM.render(
  [
  <h1>{add(first,second)}</h1>,
  <h1>{sub(first,second)}</h1>,
  <h1>{mul(first,second)}</h1>,
  <h1>{div(first,second)}</h1>
  ],
  document.getElementById('root13')
);


  



  





























// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root2')
// );


// serviceWorker.unregister();
