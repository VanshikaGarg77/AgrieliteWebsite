import React from "react";
import "./index.css";
const Cards = () => {
  return (                                                                    
    <div id="benefits">
      <br></br>
      <br></br>
      <h1 className="benefits">BENEFITS</h1>
        <div class="card-group">
  <div class="card">
    <img src="tech.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Technology Feasibility</h5>
      <p class="card-text">
      Our electric tractors are built using cutting-edge technology
                  and engineering principles.
                  <br/> They utilize high- performance
                  batteries with Smart B.M.S .
                  <br />
                  They improve performance.
                   Electric motor efficiency are continually improving their
                  performance and affordability.
      </p>
     
    </div>
  </div>
  <div class="card">
    <img src="economic.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Economic Feasibility</h5>
      <p class="card-text">Fever Moving parts leads to Low Running Cost.
                  <br />
                  Eco-Friendly.
                  <br />
                  Increase Farm productivity.
                  <br />
                  Reduces Downtime leads to Higher yields. 
                  <br/> High profits.</p>
    </div>
  </div>
  <div class="card">
    <img src="sustainable.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Sustainable Farming</h5>
      <p class="card-text">
      Our electric tractors  run on renewable  energy. <br/>They emit zero  pollutants.<br/>
They require less
maintenance. <br/>They have  longer lifespans than  conventional tractors.<br/>
They are more efficient.
</p>
    </div>
  </div>
</div>
 <h1 className="h-draw">Drawbacks Of Traditional Tractors</h1>
            <div className="drawbacks">
        
            <div id="img">
              <img src="air.png" class="card-img-top" alt="..." />
              <div class="card-body">
              <br/>
                <h5 class="card-title">Air Pollution</h5>
                <p class="card-text">
                  
                </p>
              </div>
              </div>
              <div  id="img">
              <img src="costly.png" class="card-img-top" alt="..." />
              <div class="card-body">
              <br/><br/>
                <h5 class="card-title">Expensive</h5>
                <p class="card-text">
                  
                </p>
                </div>
              </div>
           
              <div  id="img">
              <img src="noise.png" class="card-img-top" alt="..." />
              <div class="card-body"><br/>
                <h5 class="card-title">Noise Pollution</h5>
                <p class="card-text">
                  
                </p>
              </div>
              </div>
             
              <div id="img" >
              <img src="maintenance.png" class="card-img-top" alt="..." />
              <div class="card-body"><br/>
                <h5 class="card-title">High Maintenance Cost</h5>
                <p class="card-text">
                  
                </p>
              </div>
              </div>
            
        </div>
    </div>
  );
};

export default Cards;
