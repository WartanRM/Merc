import React from 'react';
import './CircuitDetails.css'; 
import BelgiumCircuitImage from '../../assets/Belgium_Circuit.avif'; 

const Belgium = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={BelgiumCircuitImage} alt="Spa-Francorchamps" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Belgian Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Stavelot, Belgium</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:46.286 (Lewis Hamilton, 2020)</p>
                    <p><strong>Circuit Length:</strong> 7.004 km</p>
                    <p>
                        Spa-Francorchamps is known for its unpredictable weather and iconic corners like Eau Rouge and Raidillon. Its long straights and elevation changes provide thrilling racing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Belgium;
