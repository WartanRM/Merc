// src/CircuitDetails/Australia.js
import React from 'react';
import './CircuitDetails.css'; 
import AustraliaCircuitImage from '../../assets/Australia_Circuit.avif'; 

const Australia = () => {
    return (
        <div className="circuit-details">
            <h3>Albert Park Circuit</h3>
            <img src={AustraliaCircuitImage} alt="Albert Park Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Melbourne, Australia</p>
            <p><strong>Lap Record:</strong> 1:20.260 (Charles Leclerc, 2022)</p>
            <p><strong>Circuit Length:</strong> 5.278 km</p>
            <p>
                Albert Park Circuit is a temporary street circuit in Melbourne that hosts the Australian Grand Prix. Known for its scenic lakes and parklands, it offers a unique challenge for drivers with its combination of fast straights and tight corners.
            </p>
        </div>
    );
};

export default Australia;
