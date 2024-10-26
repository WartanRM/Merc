import React from 'react';
import './CircuitDetails.css'; 
import UKCircuitImage from '../../assets/UK_Circuit.avif'; 

const UnitedKingdom = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={UKCircuitImage} alt="Silverstone Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="UK Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Northamptonshire, England</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:27.097 (Lewis Hamilton, 2020)</p>
                    <p><strong>Circuit Length:</strong> 5.891 km</p>
                    <p>
                        Silverstone is one of the oldest circuits on the F1 calendar and is known for its fast corners and rich history. It offers a great challenge for drivers and is a favorite among fans.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UnitedKingdom;
