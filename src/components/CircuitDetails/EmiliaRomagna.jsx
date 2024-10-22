// src/CircuitDetails/EmiliaRomagna.js
import React from 'react';
import './CircuitDetails.css'; 
import EmiliaRomagnaCircuitImage from '../../assets/EmiliaRomagna_Circuit.avif'; 

const EmiliaRomagna = () => {
    return (
        <div className="circuit-details">
            <h3>Autodromo Enzo e Dino Ferrari</h3>
            <img src={EmiliaRomagnaCircuitImage} alt="Imola Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Imola, Italy</p>
            <p><strong>Lap Record:</strong> 1:15.484 (Lando Norris, 2021)</p>
            <p><strong>Circuit Length:</strong> 4.909 km</p>
            <p>
                The Imola Circuit, known for its history in Formula 1, is a challenging track with elevation changes and technical corners. Its passionate fans and scenic surroundings make it a favorite among drivers.
            </p>
        </div>
    );
};

export default EmiliaRomagna;
