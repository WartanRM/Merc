// src/CircuitDetails/UnitedKingdom.js
import React from 'react';
import './CircuitDetails.css'; 
import UKCircuitImage from '../../assets/UK_Circuit.avif'; 

const UnitedKingdom = () => {
    return (
        <div className="circuit-details">
            <h3>Silverstone Circuit</h3>
            <img src={UKCircuitImage} alt="Silverstone Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Northamptonshire, England</p>
            <p><strong>Lap Record:</strong> 1:27.097 (Lewis Hamilton, 2020)</p>
            <p><strong>Circuit Length:</strong> 5.891 km</p>
            <p>
                Silverstone is one of the oldest circuits on the F1 calendar and is known for its fast corners and rich history. It offers a great challenge for drivers and is a favorite among fans.
            </p>
        </div>
    );
};

export default UnitedKingdom;
