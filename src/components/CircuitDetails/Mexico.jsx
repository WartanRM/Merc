// src/CircuitDetails/Mexico.js
import React from 'react';
import './CircuitDetails.css'; 
import MexicoCircuitImage from '../../assets/Mexico_Circuit.avif'; 

const Mexico = () => {
    return (
        <div className="circuit-details">
            <h3>Autódromo Hermanos Rodríguez</h3>
            <img src={MexicoCircuitImage} alt="Mexico Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Mexico City, Mexico</p>
            <p><strong>Lap Record:</strong> 1:14.758 (Valtteri Bottas, 2019)</p>
            <p><strong>Circuit Length:</strong> 4.304 km</p>
            <p>
                The Autódromo Hermanos Rodríguez is known for its passionate fans and vibrant atmosphere. The circuit features a mix of fast and technical sections, providing exciting racing action.
            </p>
        </div>
    );
};

export default Mexico;
