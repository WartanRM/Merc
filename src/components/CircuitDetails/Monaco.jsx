import React from 'react';
import './CircuitDetails.css'; 
import MonacoCircuitImage from '../../assets/Monaco_Circuit.avif'; 

const Monaco = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={MonacoCircuitImage} alt="Monaco Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Monaco Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Monte Carlo, Monaco</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:14.260 (Lewis Hamilton, 2021)</p>
                    <p><strong>Circuit Length:</strong> 3.337 km</p>
                    <p>
                        The Monaco Grand Prix is one of the most prestigious races in the world. The street circuit is narrow and winding, presenting a unique challenge for drivers. Its glamorous setting and rich history make it a highlight of the F1 calendar.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Monaco;
