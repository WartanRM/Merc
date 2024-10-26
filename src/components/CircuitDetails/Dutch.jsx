import React from 'react';
import './CircuitDetails.css'; 
import DutchCircuitImage from '../../assets/Dutch_Circuit.avif'; 

const Dutch = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={DutchCircuitImage} alt="Zandvoort Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Dutch Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Zandvoort, Netherlands</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:11.097 (Max Verstappen, 2021)</p>
                    <p><strong>Circuit Length:</strong> 4.259 km</p>
                    <p>
                        The Zandvoort Circuit is characterized by its undulating layout and sandy surroundings. It is known for its passionate fans and offers a unique challenge with its combination of fast corners and tight sections.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dutch;
