import React from 'react';
import './CircuitDetails.css'; 
import JapanCircuitImage from '../../assets/Japan_Circuit.avif'; 

const Japan = ({ raceName, date, flagUrl }) => {
    return (
        <div className="circuit-details">
            <div className='race-heading'>
                <h3>{raceName}</h3>
            </div>
            <div className="circuit-layout">
                <div className="circuit-image">
                    <img src={JapanCircuitImage} alt="Suzuka Circuit" className="circuit-image" />
                </div>
                <div className="circuit-info">
                    <img src={flagUrl} alt="Japanese Flag" className="race-card-flag" />
                    <p><strong>Location:</strong> Suzuka, Japan</p>
                    <p><strong>Race Date:</strong> {date}</p>
                    <p><strong>Lap Record:</strong> 1:30.983 (Lewis Hamilton, 2019)</p>
                    <p><strong>Circuit Length:</strong> 5.807 km</p>
                    <p>
                        Suzuka Circuit is one of the most popular tracks in the F1 calendar, known for its figure-eight layout and challenging corners. It often produces thrilling races and is a favorite among drivers and fans alike.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Japan;
