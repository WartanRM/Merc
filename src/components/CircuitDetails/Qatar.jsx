import React from 'react';
import './CircuitDetails.css'; 
import QatarCircuitImage from '../../assets/Qatar_Circuit.avif'; 

const Qatar = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={QatarCircuitImage} alt="Qatar Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Qatar Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Losail, Qatar</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:23.196 (Lewis Hamilton, 2021)</p>
                    <p><strong>Circuit Length:</strong> 5.380 km</p>
                    <p>
                        The Losail International Circuit is known for its unique night race format. The circuit features a mix of high-speed straights and technical corners, providing an exciting racing experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Qatar;
