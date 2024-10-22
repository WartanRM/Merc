// src/CircuitDetails/Dutch.js
import React from 'react';
import './CircuitDetails.css'; 
import DutchCircuitImage from '../../assets/Dutch_Circuit.avif'; 

const Dutch = () => {
    return (
        <div className="circuit-details">
            <h3>Circuit Park Zandvoort</h3>
            <img src={DutchCircuitImage} alt="Zandvoort Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Zandvoort, Netherlands</p>
            <p><strong>Lap Record:</strong> 1:11.097 (Max Verstappen, 2021)</p>
            <p><strong>Circuit Length:</strong> 4.259 km</p>
            <p>
                The Zandvoort Circuit is characterized by its undulating layout and sandy surroundings. It is known for its passionate fans and offers a unique challenge with its combination of fast corners and tight sections.
            </p>
        </div>
    );
};

export default Dutch;
