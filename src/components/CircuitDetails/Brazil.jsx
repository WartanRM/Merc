import React from 'react';
import './CircuitDetails.css'; 
import BrazilCircuitImage from '../../assets/Brazil_Circuit.avif'; 

const Brazil = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={BrazilCircuitImage} alt="Brazil Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Brazilian Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> São Paulo, Brazil</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:10.540 (Lewis Hamilton, 2020)</p>
                    <p><strong>Circuit Length:</strong> 4.309 km</p>
                    <p>
                        The Autódromo José Carlos Pace, commonly known as Interlagos, is famous for its enthusiastic fans and unpredictable weather. The circuit features elevation changes and a thrilling layout that often leads to exciting races.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Brazil;
