// src/CircuitDetails/Italy.js
import React from 'react';
import './CircuitDetails.css'; 
import ItalyCircuitImage from '../../assets/Italy_Circuit.avif'; 

const Italy = () => {
    return (
        <div className="circuit-details">
            <h3>Autodromo Nazionale di Monza</h3>
            <img src={ItalyCircuitImage} alt="Monza Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Monza, Italy</p>
            <p><strong>Lap Record:</strong> 1:21.046 (Charles Leclerc, 2019)</p>
            <p><strong>Circuit Length:</strong> 5.793 km</p>
            <p>
                Monza is known as the "Temple of Speed" and features long straights and high-speed corners. It has a rich history in motorsport and is a favorite among fans for its passionate atmosphere.
            </p>
        </div>
    );
};

export default Italy;
