import React from 'react';
import './CircuitDetails.css'; 
import CanadaCircuitImage from '../../assets/Canada_Circuit.avif'; 

const Canada = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={CanadaCircuitImage} alt="Canada Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Canadian Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Montreal, Canada</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:13.078 (Valtteri Bottas, 2019)</p>
                    <p><strong>Circuit Length:</strong> 4.361 km</p>
                    <p>
                        The Circuit Gilles Villeneuve is known for its long straights and challenging corners. Located on an island, it offers a festive atmosphere and is a favorite among fans and drivers alike.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Canada;
