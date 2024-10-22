
import React from 'react';
import './CircuitDetails.css'; 
import BahrainCircuitImage from '../../assets/Bahrain_Circuit.avif'; 

const Bahrain = () => {
    return (
        <div className="circuit-details">
            <h3>Bahrain International Circuit</h3>
            <img 
                src={BahrainCircuitImage} 
                alt="Bahrain International Circuit" 
                className="circuit-image" 
            />
            <p><strong>Location:</strong> Sakhir, Bahrain</p>
            <p><strong>Lap Record:</strong> 1:31.447 (Charles Leclerc, 2019)</p>
            <p><strong>Circuit Length:</strong> 5.412 km</p>
            <p>
                The Bahrain International Circuit is known for its modern facilities and stunning desert backdrop. Opened in 2004, it has hosted the Bahrain Grand Prix annually and is recognized for its exciting night races, providing a unique spectacle under floodlights.
            </p>
        </div>
    );
};

export default Bahrain;
