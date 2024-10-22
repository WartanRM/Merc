// src/CircuitDetails/Brazil.js
import React from 'react';
import './CircuitDetails.css'; 
import BrazilCircuitImage from '../../assets/Brazil_Circuit.avif'; 

const Brazil = () => {
    return (
        <div className="circuit-details">
            <h3>Autódromo José Carlos Pace</h3>
            <img src={BrazilCircuitImage} alt="Brazil Circuit" className="circuit-image" />
            <p><strong>Location:</strong> São Paulo, Brazil</p>
            <p><strong>Lap Record:</strong> 1:10.540 (Lewis Hamilton, 2020)</p>
            <p><strong>Circuit Length:</strong> 4.309 km</p>
            <p>
                The Autódromo José Carlos Pace, commonly known as Interlagos, is famous for its enthusiastic fans and unpredictable weather. The circuit features elevation changes and a thrilling layout that often leads to exciting races.
            </p>
        </div>
    );
};

export default Brazil;
