// src/CircuitDetails/Belgium.js
import React from 'react';
import './CircuitDetails.css'; 
import BelgiumCircuitImage from '../../assets/Belgium_Circuit.avif'; 

const Belgium = () => {
    return (
        <div className="circuit-details">
            <h3>Circuit de Spa-Francorchamps</h3>
            <img src={BelgiumCircuitImage} alt="Spa-Francorchamps" className="circuit-image" />
            <p><strong>Location:</strong> Stavelot, Belgium</p>
            <p><strong>Lap Record:</strong> 1:46.286 (Lewis Hamilton, 2020)</p>
            <p><strong>Circuit Length:</strong> 7.004 km</p>
            <p>
                Spa-Francorchamps is known for its unpredictable weather and iconic corners like Eau Rouge and Raidillon. Its long straights and elevation changes provide thrilling racing.
            </p>
        </div>
    );
};

export default Belgium;
