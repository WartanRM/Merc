// src/CircuitDetails/Japan.js
import React from 'react';
import './CircuitDetails.css'; 
import JapanCircuitImage from '../../assets/Japan_Circuit.avif'; 

const Japan = () => {
    return (
        <div className="circuit-details">
            <h3>Suzuka International Racing Course</h3>
            <img src={JapanCircuitImage} alt="Suzuka Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Suzuka, Japan</p>
            <p><strong>Lap Record:</strong> 1:30.983 (Lewis Hamilton, 2019)</p>
            <p><strong>Circuit Length:</strong> 5.807 km</p>
            <p>
                The Suzuka Circuit is known for its unique figure-eight layout and challenging corners. It has a rich history in motorsport and is loved by drivers for its technical challenges and passionate fans.
            </p>
        </div>
    );
};

export default Japan;
