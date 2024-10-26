import React from 'react';
import './CircuitDetails.css'; 
import LasVegasCircuitImage from '../../assets/LasVegas_Circuit.avif'; 

const LasVegas = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={LasVegasCircuitImage} alt="Las Vegas Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="American Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Las Vegas, Nevada, USA</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> N/A (first race in 2023)</p>
                    <p><strong>Circuit Length:</strong> 6.12 km</p>
                    <p>
                        The Las Vegas Strip Street Circuit is a new addition to the F1 calendar. It features a stunning backdrop of the Las Vegas skyline and offers a unique combination of speed and technical challenges.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LasVegas;
