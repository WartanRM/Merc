import React from 'react';
import './CircuitDetails.css'; 
import AbuDhabiCircuitImage from '../../assets/AbuDhabi_Circuit.avif'; 

const AbuDhabi = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={AbuDhabiCircuitImage} alt="Yas Marina Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Abu Dhabi Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Abu Dhabi, UAE</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:26.103 (Charles Leclerc, 2019)</p>
                    <p><strong>Circuit Length:</strong> 5.554 km</p>
                    <p>
                        Yas Marina Circuit is known for its stunning setting and has hosted the season finale for several years. Its combination of long straights and tight corners offers exciting racing under the lights.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AbuDhabi;
