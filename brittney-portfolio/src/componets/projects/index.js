import React from "react";
import cryptoWatch from '../../assets/projects/cryptowatch.png';


function Projects() {
    return (
        <div class="uk-card-hover uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid id="card">
        <div class="uk-card-media-left uk-cover-container">
           <a href="https://brichardson117.github.io/Crypto-Watch/" target="_blank"> 
           <img src={cryptoWatch} alt='crypto-watch' uk-cover/>
           </a> 
            <canvas width="400" height="500"></canvas>
        </div>
        <div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Crypto-Watch</h3>
                <p class="uk-text-large">Crypto Watch! A new app where you can monitior your favorite Crypto currencies! We created a list of the 20 most popular currencies that you can be added to your personal watch list. A link to the deployed webiste is in the README.</p>
                <h4> <a href="https://github.com/Brichardson117/Crypto-Watch" target="_blank" uk-icon="icon: github; ratio: 2"></a></h4> 
            </div>
        </div>
    </div>
 
      
       
    )
}

export default Projects