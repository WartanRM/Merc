import React, { useEffect, useState, useRef } from 'react';
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
    const [currentRaceIndex, setCurrentRaceIndex] = useState(0);
    const year = new Date().getFullYear();
    const scheduleRef = useRef(null);
    
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
                    fetch('https://ergast.com/api/f1/current'),
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
                        flagUrl: `https://flagcdn.com/108x81/${countryCode}.png`,
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

    const showPreviousRace = () => {
        setCurrentRaceIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : raceSchedule.length - 1));
    };

    const showNextRace = () => {
        setCurrentRaceIndex((prevIndex) => (prevIndex < raceSchedule.length - 1 ? prevIndex + 1 : 0));
    };

    const handleScroll = (event) => {
        event.preventDefault(); // Prevent default scrolling behavior
        if (event.deltaY < 0) {
            showPreviousRace();
        } else {
            showNextRace();
        }
    };

    useEffect(() => {
        const currentScheduleRef = scheduleRef.current;
        if (currentScheduleRef) {
            currentScheduleRef.addEventListener('wheel', handleScroll, { passive: false });
        }

        return () => {
            if (currentScheduleRef) {
                currentScheduleRef.removeEventListener('wheel', handleScroll);
            }
        };
    }, [raceSchedule]);
    const renderCircuitDetails = () => {
        const selectedRace = raceSchedule[currentRaceIndex];
    
        const previousRace = currentRaceIndex === 0 ? null : raceSchedule[(currentRaceIndex - 1 + raceSchedule.length) % raceSchedule.length];
        
        const nextRace = raceSchedule[(currentRaceIndex + 1) % raceSchedule.length];
    
        const CircuitComponent = getCircuitComponent(
            selectedRace?.circuitName,
            selectedRace?.raceName,
            selectedRace?.date,
            selectedRace?.flagUrl
        );
    
        const PreviousCircuitComponent = previousRace ? getCircuitComponent(
            previousRace.circuitName,
            previousRace.raceName,
            previousRace.date,
            previousRace.flagUrl
        ) : null;
    
        const NextCircuitComponent = getCircuitComponent(
            nextRace?.circuitName,
            nextRace?.raceName,
            nextRace?.date,
            nextRace?.flagUrl
        );
    
        return (
            <div className="carousel-container">
                {/* Left panel should be empty when Bahrain is the first race */}
                <div className="left-panel" onClick={showPreviousRace}>
                    {PreviousCircuitComponent}
                </div>
                <div className="race-detail-panel">
                    {CircuitComponent}
                </div>
                <div className="right-panel" onClick={showNextRace}>
                    {NextCircuitComponent}
                </div>
            </div>
        );
    };

    const getCircuitComponent = (circuitName, raceName, date, flagUrl) => {
        switch (circuitName) {
            case "Bahrain International Circuit":
                return <Bahrain raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Jeddah Corniche Circuit':
                return <SaudiArabia raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Albert Park Grand Prix Circuit':
                return <Australia raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Suzuka Circuit':
                return <Japan raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Shanghai International Circuit':
                return <China raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Miami International Autodrome':
                return <Miami raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Autodromo Enzo e Dino Ferrari':
                return <EmiliaRomagna raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Circuit de Monaco':
                return <Monaco raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Circuit Gilles Villeneuve':
                return <Canada raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Circuit de Barcelona-Catalunya':
                return <Spain raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Red Bull Ring':
                return <Austria raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Silverstone Circuit':
                return <UnitedKingdom raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Hungaroring':
                return <Hungary raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Circuit de Spa-Francorchamps':
                return <Belgium raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Circuit Park Zandvoort':
                return <Dutch raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Autodromo Nazionale di Monza':
                return <Italy raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Baku City Circuit':
                return <Azerbaijan raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Marina Bay Street Circuit':
                return <Singapore raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Circuit of the Americas':
                return <UnitedStates raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Autódromo Hermanos Rodríguez':
                return <Mexico raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Autódromo José Carlos Pace':
                return <Brazil raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Las Vegas Strip Street Circuit':
                return <LasVegas raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Lusail International Circuit':
                return <Qatar raceName={raceName} date={date} flagUrl={flagUrl} />;
            case 'Yas Marina Circuit':
                return <AbuDhabi raceName={raceName} date={date} flagUrl={flagUrl} />;
            default: return <div></div>;
        }
    };

    if (loading) {
        return <div>Loading race schedule...</div>;
    }

    return (
        <div className="schedule-container" ref={scheduleRef}>
            <h2>{year} F1 Schedule</h2>
            {renderCircuitDetails()}
        </div>
    );
};

export default Schedule;
