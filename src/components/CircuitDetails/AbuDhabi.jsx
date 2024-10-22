// src/CircuitDetails/AbuDhabi.js
import React from 'react';
import './CircuitDetails.css'; 
import AbuDhabiCircuitImage from '../../assets/AbuDhabi_Circuit.avif'; 

const AbuDhabi = () => {
    return (
        <div className="circuit-details">
            <h3>Yas Marina Circuit</h3>
            <img src={AbuDhabiCircuitImage} alt="Yas Marina Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Abu Dhabi, UAE</p>
            <p><strong>Lap Record:</strong> 1:26.103 (Charles Leclerc, 2019)</p>
            <p><strong>Circuit Length:</strong> 5.554 km</p>
            <p>
                Yas Marina Circuit is known for its stunning setting and has hosted the season finale for several years. Its combination of long straights and tight corners offers exciting racing under the lights.
            </p>
        </div>
    );
};

export default AbuDhabi;
