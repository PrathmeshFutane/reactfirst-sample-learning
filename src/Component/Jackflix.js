import React from 'react'
import './Jackflix.css'

const Jackflix = () =>{
    return(
        [
            <div className="jackflix">
                <h2 class="heading"><span class="head"> Best Youtube Series  </span></h2>
        
                <div class="main">
                    <div class="card">
                        <img src="./gehe.jpeg" alt="Image not found"/>
                        <div class="category">
                            <h4 class="info">A Youtube Series</h4>
                            <h3 class="title">Unmarried</h3>
                            <a href="">
                                <button class="button">Watch Now</button>
                            </a>
                        </div>
                    </div> 
                </div>
            </div>
        ]    
        
    );
}

export default Jackflix