// src/CircuitDetails/Hungary.js
import React from 'react';
import './CircuitDetails.css'; 
import HungaryCircuitImage from '../../assets/Hungary_Circuit.avif'; 

const Hungary = () => {
    return (
        <div className="circuit-details">
            <h3>Hungaroring</h3>
            <img src={HungaryCircuitImage} alt="Hungaroring" className="circuit-image" />
            <p><strong>Location:</strong> Budapest, Hungary</p>
            <p><strong>Lap Record:</strong> 1:16.627 (Lewis Hamilton, 2020)</p>
            <p><strong>Circuit Length:</strong> 4.381 km</p>
            <p>
                The Hungaroring is known for its tight and twisty layout, often compared to a go-kart track. Its challenging corners and limited overtaking opportunities make it a unique race.
            </p>
        </div>
    );
};

export default Hungary;
