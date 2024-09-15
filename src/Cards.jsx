import { useEffect, useState } from 'react';
import axios from 'axios';

// Import your images
import w01 from "./assets/w01.jpg";
import w02 from "./assets/w02.jpg";
import w03 from "./assets/w03.jpg";
import w04 from "./assets/w04.webp";
import w05 from "./assets/w05.jpg";
import w06 from "./assets/w06.webp";
import w07 from "./assets/w07.jpg";
import w08 from "./assets/w08.jpg";
import w09 from "./assets/w09.jpg";
import w10 from "./assets/w10.jpeg";
import w11 from "./assets/w11.webp";
import w12 from "./assets/w12.webp";
const imageMapping = {
    'Mercedes MGP W01': w01,
    'Mercedes GP W02': w02,
    'Mercedes AMG F1 W03': w03,
    'Mercedes AMG F1 W04': w04,
    'Mercedes AMG F1 W05 Hybrid': w05,
    'Mercedes AMG F1 W06 Hybrid': w06,
    'Mercedes AMG F1 W07 Hybrid': w07,
    'Mercedes AMG F1 W08 EQ Power+': w08,
    'Mercedes AMG F1 W09 EQ Power+': w09,
    'Mercedes AMG F1 W10': w10,
    'Mercedes AMG F1 W11 EQ Performance': w11,
    'Mercedes AMG F1 W12 E Performance': w12,
};


function Cards() {
    const [cardData, setCardData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://f1backend.netlify.app/api/Gallery')
            .then(response => {
                setCardData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to load data');
            });
    }, []);

    const handleClick = (modelName) => {
        console.log(`${modelName} Selected`);
    };

    if (error) return <div>{error}</div>;

    return (
        <div className="cards">
            {cardData.map((card, index) => {
                const imageSrc = imageMapping[card.modelName]; 

                return (
                    <div className="card" key={index} onClick={() => handleClick(card.modelName)}>
                        <img src={imageSrc} alt={card.title} />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Cards;
