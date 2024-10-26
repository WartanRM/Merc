import React from 'react';
import './CircuitDetails.css'; 
import BahrainCircuitImage from '../../assets/Bahrain_Circuit.avif'; 

const Bahrain = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={BahrainCircuitImage} alt="Bahrain International Circuit" className="circuit-image" style={{ minWidth: '100%', marginLeft:'1%'  }} />
                </div>
                <div className="circuit-info" style={{ marginLeft: '10%'}}>
                    <img src={flagUrl} alt="Bahraini Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Sakhir, Bahrain</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:31.447 (Charles Leclerc, 2019)</p>
                    <p><strong>Circuit Length:</strong> 5.412 km</p>
                    <p>
                        The Bahrain International Circuit is known for its modern facilities and stunning desert backdrop. Opened in 2004, it has hosted the Bahrain Grand Prix annually and is recognized for its exciting night races, providing a unique spectacle under floodlights.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Bahrain;
