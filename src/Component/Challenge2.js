import React from 'react'

let name = prompt("enter your name");
var date = new Date();
let cdate = date.getDate();
let cmonth = date.getMonth();
let cyear = date.getFullYear();
let thour = date.getHours();
let tminutes = date.getMinutes();
let tseconds = date.getSeconds();

const Challenge2 = () =>{
    return(
        [
            
            //<h1>Your name is {name}</h1>,
            <h2>direct date is {date.toLocaleDateString()}</h2>,
            <p>{`Todays date is ${cdate}/${cmonth}/${cyear}`}</p>,
            <h2>direct time is {date.toLocaleTimeString()}</h2>,
            <p>{`current time is ${thour}:${tminutes}:${tseconds}`}</p>,
        ]
    )
}

export default Challenge2