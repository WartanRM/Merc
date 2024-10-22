// src/CircuitDetails/Azerbaijan.js
import React from 'react';
import './CircuitDetails.css'; 
import AzerbaijanCircuitImage from '../../assets/Azerbaijan_Circuit.png'; 

const Azerbaijan = () => {
    return (
        <div className="circuit-details">
            <h3>Baku City Circuit</h3>
            <img src={AzerbaijanCircuitImage} alt="Baku Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Baku, Azerbaijan</p>
            <p><strong>Lap Record:</strong> 1:43.009 (Sergio Perez, 2021)</p>
            <p><strong>Circuit Length:</strong> 6.003 km</p>
            <p>
                The Baku City Circuit is known for its beautiful skyline and challenging layout. It features long straights and tight corners, often leading to dramatic races and exciting overtaking opportunities.
            </p>
        </div>
    );
};

export default Azerbaijan;
