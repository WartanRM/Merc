import React from 'react';
import './CircuitDetails.css'; 
import MexicoCircuitImage from '../../assets/Mexico_Circuit.avif'; 

const Mexico = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={MexicoCircuitImage} alt="Mexico Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Mexican Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Mexico City, Mexico</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:14.758 (Valtteri Bottas, 2019)</p>
                    <p><strong>Circuit Length:</strong> 4.304 km</p>
                    <p>
                        The Autódromo Hermanos Rodríguez is known for its passionate fans and vibrant atmosphere. The circuit features a mix of fast and technical sections, providing exciting racing action.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mexico;
