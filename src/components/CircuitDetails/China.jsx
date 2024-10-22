// src/CircuitDetails/China.js
import React from 'react';
import './CircuitDetails.css'; 
import ChinaCircuitImage from '../../assets/China_Circuit.avif'; 

const China = () => {
    return (
        <div className="circuit-details">
            <h3>Shanghai International Circuit</h3>
            <img src={ChinaCircuitImage} alt="Shanghai Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Shanghai, China</p>
            <p><strong>Lap Record:</strong> 1:31.350 (Michael Schumacher, 2004)</p>
            <p><strong>Circuit Length:</strong> 5.451 km</p>
            <p>
                The Shanghai International Circuit features a distinctive layout with a long back straight and several challenging corners. Opened in 2004, it has hosted numerous thrilling races in Formula 1 history.
            </p>
        </div>
    );
};

export default China;
