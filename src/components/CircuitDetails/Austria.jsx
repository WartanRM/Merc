// src/CircuitDetails/Austria.js
import React from 'react';
import './CircuitDetails.css'; 
import AustriaCircuitImage from '../../assets/Austria_Circuit.avif'; 

const Austria = () => {
    return (
        <div className="circuit-details">
            <h3>Red Bull Ring</h3>
            <img src={AustriaCircuitImage} alt="Red Bull Ring" className="circuit-image" />
            <p><strong>Location:</strong> Spielberg, Austria</p>
            <p><strong>Lap Record:</strong> 1:05.619 (Max Verstappen, 2021)</p>
            <p><strong>Circuit Length:</strong> 4.318 km</p>
            <p>
                The Red Bull Ring is known for its picturesque setting and short lap length. It features several elevation changes and provides exciting overtaking opportunities, making for thrilling races.
            </p>
        </div>
    );
};

export default Austria;
