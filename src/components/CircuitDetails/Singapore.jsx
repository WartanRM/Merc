import React from 'react';
import './CircuitDetails.css'; 
import SingaporeCircuitImage from '../../assets/Singapore_Circuit.avif'; 

const Singapore = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={SingaporeCircuitImage} alt="Singapore Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Singapore Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Singapore</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:36.906 (Sebastian Vettel, 2019)</p>
                    <p><strong>Circuit Length:</strong> 5.063 km</p>
                    <p>
                        The Marina Bay Street Circuit is famous for being the first-ever night race in Formula 1. Its illuminated streets and tight corners create a spectacular backdrop and challenging racing conditions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Singapore;
