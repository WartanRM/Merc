import React from 'react';
import './CircuitDetails.css'; 
import ItalyCircuitImage from '../../assets/Italy_Circuit.avif'; 

const Italy = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={ItalyCircuitImage} alt="Monza Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Italian Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Monza, Italy</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:21.046 (Charles Leclerc, 2019)</p>
                    <p><strong>Circuit Length:</strong> 5.793 km</p>
                    <p>
                        Monza is known as the "Temple of Speed" and features long straights and high-speed corners. It has a rich history in motorsport and is a favorite among fans for its passionate atmosphere.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Italy;
