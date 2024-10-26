import React from 'react';
import './CircuitDetails.css'; 
import ChinaCircuitImage from '../../assets/China_Circuit.avif'; 

const China = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={ChinaCircuitImage} alt="Shanghai Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Chinese Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Shanghai, China</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:31.350 (Michael Schumacher, 2004)</p>
                    <p><strong>Circuit Length:</strong> 5.451 km</p>
                    <p>
                        The Shanghai International Circuit features a distinctive layout with a long back straight and several challenging corners. Opened in 2004, it has hosted numerous thrilling races in Formula 1 history.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default China;
