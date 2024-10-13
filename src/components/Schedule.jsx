import React, { useEffect, useState } from 'react';
import './Schedule.css';

const RaceCalendar = () => {
    const [raceSchedule, setRaceSchedule] = useState([]);
    const [countryCodes, setCountryCodes] = useState({});
    const year = new Date().getFullYear();

    useEffect(() => {
        const fetchCountryCodes = async () => {
            try {
                const response = await fetch('https://flagcdn.com/en/codes.json'); // Fetch country codes JSON
                const data = await response.json();
                setCountryCodes(data);
            } catch (error) {
                console.error('Error fetching country codes:', error);
            }
        };

        const fetchRaceData = async () => {
            try {
                const response = await fetch('http://ergast.com/api/f1/current');
                const text = await response.text();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, 'application/xml');
                
                const races = Array.from(xmlDoc.getElementsByTagName('Race')).map(race => {
                    const country = race.getElementsByTagName('Country')[0].textContent;
                    const raceName = race.getElementsByTagName('RaceName')[0].textContent;
                    const countryCode = getCountryCode(country, raceName); // Dynamically map country to code

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
            } catch (error) {
                console.error('Error fetching race data:', error);
            }
        };

        // Function to get country code based on country name or race name
        const getCountryCode = (countryName, raceName) => {
            // Special cases for certain Grand Prix events
            switch (raceName) {
                case "Miami Grand Prix":
                    return "us"; // Florida state flag
                case "Abu Dhabi Grand Prix":
                    return "ae"; // UAE flag
                case "United States Grand Prix":
                    return "us"; // US flag
                case "British Grand Prix":
                    return "gb"; // UK flag
                default:
                    // Default behavior: look up the country code from the countryCodes object
                    const entry = Object.entries(countryCodes).find(([code, name]) => name === countryName);
                    return entry ? entry[0] : 'xx'; // Fallback 'xx' if no match found
            }
        };

        // Fetch both country codes and race data
        fetchCountryCodes();
        fetchRaceData();
    }, [countryCodes]); // Depend on countryCodes so it updates when fetched

    return (
        <div className='calendar'>
            <h1 className="race-calendar-header">{year} F1 Race Calendar</h1>
            <div className="race-calendar-container">
                {raceSchedule.map((race, index) => (
                    <div key={index} className="race-card">
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
        </div>
    );
};

export default RaceCalendar;
