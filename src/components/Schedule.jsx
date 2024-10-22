
import React, { useEffect, useState } from 'react';
import './Schedule.css';
import Bahrain from './CircuitDetails/Bahrain';
import SaudiArabia from './CircuitDetails/SaudiArabia';
import Australia from './CircuitDetails/Australia';
import Japan from './CircuitDetails/Japan';
import China from './CircuitDetails/China';
import Miami from './CircuitDetails/Miami';
import EmiliaRomagna from './CircuitDetails/EmiliaRomagna';
import Monaco from './CircuitDetails/Monaco';
import Canada from './CircuitDetails/Canada';
import Spain from './CircuitDetails/Spain';
import Austria from './CircuitDetails/Austria';
import UnitedKingdom from './CircuitDetails/UnitedKingdom';
import Hungary from './CircuitDetails/Hungary';
import Belgium from './CircuitDetails/Belgium';
import Dutch from './CircuitDetails/Dutch';
import Italy from './CircuitDetails/Italy';
import Azerbaijan from './CircuitDetails/Azerbaijan';
import Singapore from './CircuitDetails/Singapore';
import UnitedStates from './CircuitDetails/UnitedStates';
import Mexico from './CircuitDetails/Mexico';
import Brazil from './CircuitDetails/Brazil';
import LasVegas from './CircuitDetails/LasVegas';
import Qatar from './CircuitDetails/Qatar';
import AbuDhabi from './CircuitDetails/AbuDhabi';


const Schedule = () => {
    const [raceSchedule, setRaceSchedule] = useState([]);
    const [loading, setLoading] = useState(true);
    const year = new Date().getFullYear();
    const [selectedRace, setSelectedRace] = useState(null);

    const getCountryCode = (countryName, raceName, countryCodes) => {
        switch (raceName) {
            case "Miami Grand Prix":
            case "United States Grand Prix":
                return "us"; // US flag
            case "Abu Dhabi Grand Prix":
                return "ae"; // UAE flag
            case "British Grand Prix":
                return "gb"; // UK flag
            default:
                const entry = Object.entries(countryCodes).find(([code, name]) => name === countryName);
                return entry ? entry[0] : 'xx'; // Fallback 'xx' if no match found
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cachedRaceSchedule = localStorage.getItem('raceSchedule');
                if (cachedRaceSchedule) {
                    setRaceSchedule(JSON.parse(cachedRaceSchedule));
                    setLoading(false);
                    return;
                }

                const [countryCodesResponse, raceDataResponse] = await Promise.all([
                    fetch('https://flagcdn.com/en/codes.json'),
                    fetch('https://ergast.com/api/f1/current')
                ]);

                const countryCodes = await countryCodesResponse.json();
                const text = await raceDataResponse.text();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, 'application/xml');

                const races = Array.from(xmlDoc.getElementsByTagName('Race')).map(race => {
                    const country = race.getElementsByTagName('Country')[0].textContent;
                    const raceName = race.getElementsByTagName('RaceName')[0].textContent;
                    const countryCode = getCountryCode(country, raceName, countryCodes);

                    return {
                        round: race.getAttribute('round'),
                        raceName,
                        circuitName: race.getElementsByTagName('CircuitName')[0].textContent,
                        locality: race.getElementsByTagName('Locality')[0].textContent,
                        country,
                        date: race.getElementsByTagName('Date')[0].textContent,
                        flagUrl: `https://flagcdn.com/108x81/${countryCode}.png`
                    };
                });

                setRaceSchedule(races);
                localStorage.setItem('raceSchedule', JSON.stringify(races));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleRaceClick = (race) => {
        setSelectedRace(race);
    };

    const renderCircuitDetails = () => {
        switch (selectedRace.circuitName) {
            case "Bahrain International Circuit":
                return <Bahrain />;
            case 'Jeddah Corniche Circuit':
                return <SaudiArabia />;
            case 'Albert Park Grand Prix Circuit':
                return <Australia />;
            case 'Suzuka Circuit':
                return <Japan />;
            case 'Shanghai International Circuit':
                return <China />;
            case 'Miami International Autodrome':
                return <Miami/>;
            case 'Autodromo Enzo e Dino Ferrari':
                return <EmiliaRomagna />;
            case 'Circuit de Monaco':
                return <Monaco />;
            case 'Circuit Gilles Villeneuve':
                return <Canada />;
            case 'Circuit de Barcelona-Catalunya':
                return <Spain />;
            case 'Red Bull Ring':
                return <Austria />;
            case 'Silverstone Circuit':
                return <UnitedKingdom />;
            case 'Hungaroring':
                return <Hungary />;
            case 'Circuit de Spa-Francorchamps':
                return <Belgium/>;
            case 'Circuit Park Zandvoort':
                return <Dutch/>;
            case 'Autodromo Nazionale di Monza':
                return <Italy/>;
            case 'Baku City Circuit':
                return <Azerbaijan/>;
            case 'Marina Bay Street Circuit':
                return <Singapore/>;
            case 'Circuit of the Americas':
                return <UnitedStates/>;
            case 'Autódromo Hermanos Rodríguez':
                return <Mexico/>;
            case 'Autódromo José Carlos Pace':
                return <Brazil/>;
            case 'Las Vegas Strip Street Circuit':
                return <LasVegas/>;
            case 'Losail International Circuit':
                return <Qatar/>;
            case 'Yas Marina Circuit':
                return <AbuDhabi/>;
            // Add more cases for other circuits
            default:
                return <div>No details available for this circuit.</div>;
        }
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="calendar">
            <h1 className={`race-calendar-header ${selectedRace ? 'shifted' : ''}`}>{year} F1 Race Calendar</h1>
            <div className="race-calendar-layout">
                <div className={`race-calendar-container ${selectedRace ? 'minimized' : ''}`}>
                    {raceSchedule.map((race, index) => (
                        <div 
                            key={index} 
                            className="race-card" 
                            onClick={() => handleRaceClick(race)}
                        >
                            <img src={race.flagUrl} alt={`${race.country} flag`} className="race-card-flag" />
                            <div className="race-card-content">
                                <h2 className="race-card-title">{race.raceName}</h2>
                                <p><strong>Round:</strong> {race.round}</p>
                                <p><strong>Circuit:</strong> {race.circuitName}</p>
                                <p><strong>Location:</strong> {race.locality}, {race.country}</p>
                                <p><strong>Date:</strong> {race.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedRace && (
                    <div className="race-detail-popup">
                        <button className="close-popup" onClick={() => setSelectedRace(null)}>X</button>
                        <h2>{selectedRace.raceName} Details</h2>
                        {renderCircuitDetails()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Schedule;
