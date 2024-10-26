import React from 'react';
import './CircuitDetails.css'; 
import AustriaCircuitImage from '../../assets/Austria_Circuit.avif'; 

const Austria = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={AustriaCircuitImage} alt="Red Bull Ring" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Austrian Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Spielberg, Austria</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:05.619 (Max Verstappen, 2021)</p>
                    <p><strong>Circuit Length:</strong> 4.318 km</p>
                    <p>
                        The Red Bull Ring is known for its picturesque setting and short lap length. It features several elevation changes and provides exciting overtaking opportunities, making for thrilling races.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Austria;
