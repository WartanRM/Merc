import React from 'react';
import './CircuitDetails.css'; 
import AzerbaijanCircuitImage from '../../assets/Azerbaijan_Circuit.png'; 

const Azerbaijan = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={AzerbaijanCircuitImage} alt="Baku Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Azerbaijan Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Baku, Azerbaijan</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:43.009 (Sergio Perez, 2021)</p>
                    <p><strong>Circuit Length:</strong> 6.003 km</p>
                    <p>
                        The Baku City Circuit is known for its beautiful skyline and challenging layout. It features long straights and tight corners, often leading to dramatic races and exciting overtaking opportunities.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Azerbaijan;
