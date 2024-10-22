// src/CircuitDetails/Spain.js
import React from 'react';
import './CircuitDetails.css'; 
import SpainCircuitImage from '../../assets/Spain_Circuit.avif'; 

const Spain = () => {
    return (
        <div className="circuit-details">
            <h3>Circuit de Barcelona-Catalunya</h3>
            <img src={SpainCircuitImage} alt="Spain Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Montmelo, Spain</p>
            <p><strong>Lap Record:</strong> 1:18.441 (Lewis Hamilton, 2020)</p>
            <p><strong>Circuit Length:</strong> 4.675 km</p>
            <p>
                The Circuit de Barcelona-Catalunya is known for its versatility and is often used for pre-season testing. Its mix of high-speed corners and technical sections makes it a favorite among teams and drivers.
            </p>
        </div>
    );
};

export default Spain;
