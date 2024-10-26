import React from 'react';
import './CircuitDetails.css'; 
import HungaryCircuitImage from '../../assets/Hungary_Circuit.avif'; 

const Hungary = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={HungaryCircuitImage} alt="Hungaroring" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Hungarian Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Budapest, Hungary</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:16.627 (Lewis Hamilton, 2020)</p>
                    <p><strong>Circuit Length:</strong> 4.381 km</p>
                    <p>
                        The Hungaroring is known for its tight and twisty layout, often compared to a go-kart track. Its challenging corners and limited overtaking opportunities make it a unique race.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hungary;
