// src/CircuitDetails/UnitedStates.js
import React from 'react';
import './CircuitDetails.css'; 
import USACircuitImage from '../../assets/USA_Circuit.avif'; 

const UnitedStates = () => {
    return (
        <div className="circuit-details">
            <h3>Circuit of the Americas</h3>
            <img src={USACircuitImage} alt="COTA Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Austin, Texas, USA</p>
            <p><strong>Lap Record:</strong> 1:36.169 (Charles Leclerc, 2022)</p>
            <p><strong>Circuit Length:</strong> 5.513 km</p>
            <p>
                The Circuit of the Americas is known for its diverse layout that challenges drivers with elevation changes and a mix of high-speed corners and tight turns. It has quickly become a favorite on the F1 calendar.
            </p>
        </div>
    );
};

export default UnitedStates;
