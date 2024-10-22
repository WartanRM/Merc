// src/CircuitDetails/Canada.js
import React from 'react';
import './CircuitDetails.css'; 
import CanadaCircuitImage from '../../assets/Canada_Circuit.avif'; 

const Canada = () => {
    return (
        <div className="circuit-details">
            <h3>Circuit Gilles Villeneuve</h3>
            <img src={CanadaCircuitImage} alt="Canada Circuit" className="circuit-image" />
            <p><strong>Location:</strong> Montreal, Canada</p>
            <p><strong>Lap Record:</strong> 1:13.078 (Valtteri Bottas, 2019)</p>
            <p><strong>Circuit Length:</strong> 4.361 km</p>
            <p>
                The Circuit Gilles Villeneuve is known for its long straights and challenging corners. Located on an island, it offers a festive atmosphere and is a favorite among fans and drivers alike.
            </p>
        </div>
    );
};

export default Canada;
