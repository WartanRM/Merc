import React from 'react';
import './CircuitDetails.css'; 
import SpainCircuitImage from '../../assets/Spain_Circuit.avif'; 

const Spain = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={SpainCircuitImage} alt="Spain Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Spanish Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Montmelo, Spain</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:18.441 (Lewis Hamilton, 2020)</p>
                    <p><strong>Circuit Length:</strong> 4.675 km</p>
                    <p>
                        The Circuit de Barcelona-Catalunya is known for its versatility and is often used for pre-season testing. Its mix of high-speed corners and technical sections makes it a favorite among teams and drivers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Spain;
