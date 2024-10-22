// src/CircuitDetails/Singapore.js
import React from 'react';
import './CircuitDetails.css'; 
import SingaporeCircuitImage from '../../assets/Singapore_Circuit.avif'; 

const Singapore = () => {
    return (
        <div className="circuit-details">
            <h3>Marina Bay Street Circuit</h3>
            <img src={SingaporeCircuitImage} alt="Singapore Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Singapore</p>
            <p><strong>Lap Record:</strong> 1:36.906 (Sebastian Vettel, 2019)</p>
            <p><strong>Circuit Length:</strong> 5.063 km</p>
            <p>
                The Marina Bay Street Circuit is famous for being the first-ever night race in Formula 1. Its illuminated streets and tight corners create a spectacular backdrop and challenging racing conditions.
            </p>
        </div>
    );
};

export default Singapore;
