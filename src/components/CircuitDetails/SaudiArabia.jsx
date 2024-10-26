import React from 'react';
import './CircuitDetails.css'; 
import SaudiCircuitImage from '../../assets/Saudi_Arabia_Circuit.avif'; 

const SaudiArabia = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image" style={{ minWidth: '45%'}}>
                    <img 
                        src={SaudiCircuitImage} 
                        alt="Jeddah Corniche Circuit" 
                        className="circuit-image" 
                    />
                </div>
                <div className="circuit-info" style={{ marginLeft: '10%'}}>
                    <img src={flagUrl} alt="Saudi Arabian Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Jeddah, Saudi Arabia</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:27.511 (Lewis Hamilton, 2021)</p>
                    <p><strong>Circuit Length:</strong> 6.174 km</p>
                    <p>
                        The Jeddah Corniche Circuit is known for its stunning waterfront views and is one of the fastest street circuits in Formula 1. 
                        Opened in 2021, it features a challenging layout with high-speed corners, providing thrilling racing under the floodlights of Saudi Arabia.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SaudiArabia;
