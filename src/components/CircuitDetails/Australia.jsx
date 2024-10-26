import React from 'react';
import './CircuitDetails.css'; 
import AustraliaCircuitImage from '../../assets/Australia_Circuit.avif'; 

const Australia = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={AustraliaCircuitImage} alt="Albert Park Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Australian Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Melbourne, Australia</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:20.260 (Charles Leclerc, 2022)</p>
                    <p><strong>Circuit Length:</strong> 5.278 km</p>
                    <p>
                        Albert Park Circuit is a temporary street circuit in Melbourne that hosts the Australian Grand Prix. Known for its scenic lakes and parklands, it offers a unique challenge for drivers with its combination of fast straights and tight corners.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Australia;
