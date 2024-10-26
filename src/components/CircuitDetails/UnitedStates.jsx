import React from 'react';
import './CircuitDetails.css'; 
import USACircuitImage from '../../assets/USA_Circuit.avif'; 

const UnitedStates = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={USACircuitImage} alt="COTA Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="US Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Austin, Texas, USA</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:36.169 (Charles Leclerc, 2022)</p>
                    <p><strong>Circuit Length:</strong> 5.513 km</p>
                    <p>
                        The Circuit of the Americas is known for its diverse layout that challenges drivers with elevation changes and a mix of high-speed corners and tight turns. It has quickly become a favorite on the F1 calendar.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UnitedStates;
