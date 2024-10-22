// src/CircuitDetails/Miami.js
import React from 'react';
import './CircuitDetails.css'; 
import MiamiCircuitImage from '../../assets/Miami_Circuit.avif'; 

const Miami = () => {
    return (
        <div className="circuit-details">
            <h3>Miami International Autodrome</h3>
            <img src={MiamiCircuitImage} alt="Miami Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Miami, Florida, USA</p>
            <p><strong>Lap Record:</strong> 1:28.796 (Max Verstappen, 2022)</p>
            <p><strong>Circuit Length:</strong> 5.412 km</p>
            <p>
                The Miami International Autodrome is a modern street circuit featuring a mix of high-speed straights and technical sections. Its vibrant atmosphere and backdrop of Miami's skyline create a unique racing experience.
            </p>
        </div>
    );
};

export default Miami;
