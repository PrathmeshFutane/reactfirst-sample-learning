import React from 'react'

let obj = new Date();
let hour =obj.getHours();
let greeting = '';

let styling = {
    color:'black',

}

if(hour>=1 && hour<12){

    greeting = 'good morning sir';
    styling.color = 'green';
}
else if(hour>=12 && hour<19){
    greeting = 'good afternoon sir';
    styling.color = 'red';
}
else{
    greeting = 'good night sir';
    styling.color = 'blue';
}


const Challenge3 = () =>{
    return(
        [
            <h1>this is html Challenge3 page</h1>,
            <h2>Hi sir ! <span style={styling}>{greeting}</span></h2>
        ]
    )
}
export default Challenge3