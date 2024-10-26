import React from 'react';
import './CircuitDetails.css'; 
import EmiliaRomagnaCircuitImage from '../../assets/EmiliaRomagna_Circuit.avif'; 

const EmiliaRomagna = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={EmiliaRomagnaCircuitImage} alt="Imola Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Italian Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Imola, Italy</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:15.484 (Lando Norris, 2021)</p>
                    <p><strong>Circuit Length:</strong> 4.909 km</p>
                    <p>
                        The Imola Circuit, known for its history in Formula 1, is a challenging track with elevation changes and technical corners. Its passionate fans and scenic surroundings make it a favorite among drivers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EmiliaRomagna;
