// src/CircuitDetails/Qatar.js
import React from 'react';
import './CircuitDetails.css'; 
import QatarCircuitImage from '../../assets/Qatar_Circuit.avif'; 

const Qatar = () => {
    return (
        <div className="circuit-details">
            <h3>Losail International Circuit</h3>
            <img src={QatarCircuitImage} alt="Qatar Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Losail, Qatar</p>
            <p><strong>Lap Record:</strong> 1:23.196 (Lewis Hamilton, 2021)</p>
            <p><strong>Circuit Length:</strong> 5.380 km</p>
            <p>
                The Losail International Circuit is known for its unique night race format. The circuit features a mix of high-speed straights and technical corners, providing an exciting racing experience.
            </p>
        </div>
    );
};

export default Qatar;
