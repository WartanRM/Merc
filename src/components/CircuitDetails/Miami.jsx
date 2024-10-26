import React from 'react';
import './CircuitDetails.css'; 
import MiamiCircuitImage from '../../assets/Miami_Circuit.avif'; 

const Miami = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={MiamiCircuitImage} alt="Miami Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="American Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Miami, Florida, USA</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:28.796 (Max Verstappen, 2022)</p>
                    <p><strong>Circuit Length:</strong> 5.412 km</p>
                    <p>
                        The Miami International Autodrome is a modern street circuit featuring a mix of high-speed straights and technical sections. Its vibrant atmosphere and backdrop of Miami's skyline create a unique racing experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Miami;
