import React from "react";
import image from "./pawsClawstails.PNG";
import image2 from "./sbc2.jpg";

function Portfolio() {
  return (
    <div className="Portfolio">
      
      <h2>Professional Portfolio</h2>
      <div class="wk2Challenge">
      
      <br /><br />
      <p>Animal Adoption</p>
        <a href="https://pawsclawstails.herokuapp.com/home/"><img src={image} alt="Paws, Claws, and Tails" class="thumbnail" height="200" width="200" /></a>
        <br />
        <br />
        <p>World Weather and Facts</p>
        <a href="https://cameronoberlies.github.io/Realtime-Weather-and-Country-Facts"><img src={image2} alt="Paws, Claws, and Tails" class="thumbnail" height="200" width="200" /></a>

    </div>

    </div>
    
  );
}

export default Portfolio;
