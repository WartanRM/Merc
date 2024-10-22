// src/CircuitDetails/LasVegas.js
import React from 'react';
import './CircuitDetails.css'; 
import LasVegasCircuitImage from '../../assets/LasVegas_Circuit.avif'; 

const LasVegas = () => {
    return (
        <div className="circuit-details">
            <h3>Las Vegas Strip Street Circuit</h3>
            <img src={LasVegasCircuitImage} alt="Las Vegas Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Las Vegas, Nevada, USA</p>
            <p><strong>Lap Record:</strong> N/A (first race in 2023)</p>
            <p><strong>Circuit Length:</strong> 6.12 km</p>
            <p>
                The Las Vegas Strip Street Circuit is a new addition to the F1 calendar. It features a stunning backdrop of the Las Vegas skyline and offers a unique combination of speed and technical challenges.
            </p>
        </div>
    );
};

export default LasVegas;
