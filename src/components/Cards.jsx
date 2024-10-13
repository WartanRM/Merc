// Import your images
import w01 from "../assets/w01.jpg";
import w02 from "../assets/w02.jpg";
import w03 from "../assets/w03.jpg";
import w04 from "../assets/w04.webp";
import w05 from "../assets/w05.jpg";
import w06 from "../assets/w06.webp";
import w07 from "../assets/w07.jpg";
import w08 from "../assets/w08.jpg";
import w09 from "../assets/w09.jpg";
import w10 from "../assets/w10.jpeg";
import w11 from "../assets/w11.webp";
import w12 from "../assets/w12.webp";
import "./Cards.css";

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

function Cards(){
    const handleClick= (ModelName) => console.log(`${ModelName} Selected`);

    return(
        <div className="cards">
            <div className="card" onClick={() => handleClick("Mercedes MGP W01")}>
                <img src={w01} alt="Mercedes MGP W01"></img>
                <h3>Mercedes MGP W01</h3>
                <p>3 Podium Finishes<br></br>Mercedes-Benz FO 108X V8</p>
            </div>
            <div className="card" onClick={() => handleClick("Mercedes GP W02")}>
                <img src={w02} alt="Mercedes GP W02"></img>
                <h3>Mercedes GP W02</h3>
                <p>No Podiums<br></br>Mercedes-Benz FO 108Y V8</p>
            </div>
            <div className="card" onClick={() => handleClick("Mercedes AMG F1 W03")}>
                <img src={w03} alt="Mercedes AMG F1 W03"></img>
                <h3>Mercedes AMG F1 W03</h3>
                <p>1 Win and 1 Podium<br></br>Mercedes FO 108Z V8</p>
            </div>
            <div className="card" onClick={() => handleClick("Mercedes AMG F1 W04")}>
                <img src={w04} alt="Mercedes AMG F1 W04"></img>
                <h3>Mercedes AMG F1 W04</h3>
                <p>3 Wins and 6 Podiums<br></br>Mercedes FO 108Z</p>
            </div>
            <div className="card" onClick={() => handleClick("Mercedes AMG F1 W05 Hybrid")}>
                <img src={w05} alt="Mercedes AMG F1 W05 Hybrid"></img>
                <h3>Mercedes AMG F1 W05 Hybrid</h3>
                <p>16 Wins and 18 Pole Positions<br/>Mercedes PU106A Hybrid V6 Turbo</p>
            </div>
            <div className="card" onClick={() => handleClick("Mercedes AMG F1 W06 Hybrid")}>
                <img src={w06} alt="Mercedes AMG F1 W06 Hybrid"></img>
                <h3>Mercedes AMG F1 W06 Hybrid</h3>
                <p>16 Wins of 19 Races<br/>Mercedes PU106B Hybrid V6 Turbo</p>
            </div>
            <div className="card" onClick={() => handleClick("Mercedes AMG F1 W07 Hybrid")}>
                <img src={w07} alt="Mercedes AMG F1 W07 Hybrid"></img>
                <h3>Mercedes AMG F1 W07 Hybrid</h3>
                <p>19 Wins of 21 Races<br/>Mercedes PU106C Hybrid 1.6L V6 Turbo</p>
            </div>
            <div className="card" onClick={() => handleClick("Mercedes AMG F1 W08 EQ Power+")}>
                <img src={w08} alt="Mercedes AMG F1 W08 EQ Power+"></img>
                <h3>Mercedes AMG F1 W08</h3>
                <p>12 Wins of 20 Races<br/>Mercedes M08 EQ Power+ V6 Turbo</p>
            </div>
            <div className="card" onClick={() => handleClick("Mercedes AMG F1 W09 EQ Power+")}>
                <img src={w09} alt="Mercedes AMG F1 W09 EQ Power+"></img>
                <h3>Mercedes AMG F1 W09 EQ Power+</h3>
                <p>11 Wins 25 Podiums 13 Poles<br/>Mercedes M09 EQ Power+ V6t</p>
            </div>
            <div className="card" onClick={() => handleClick("Mercedes AMG F1 W10")}>
                <img src={w10} alt="Mercedes AMG F1 W10"></img>
                <h3>Mercedes AMG F1 W10</h3>
                <p>15 Wins and 10 Pole Positions<br/>Mercedes M10 1.6L V6t</p>
            </div>
            <div className="card" onClick={() => handleClick("Mercedes AMG F1 W11 EQ Performance")}>
                <img src={w11} alt="Mercedes AMG F1 W11 EQ Performance"></img>
                <h3>Mercedes AMG F1 W11 EQ Performance</h3>
                <p>14 Wins 15 Poles 25 Podiums of 17 Races<br/>Mercedes M11 1.6L V6 Turbo</p>
            </div>
            <div className="card" onClick={() => handleClick("Mercedes AMG F1 W12 E Performance")}>
                <img src={w12} alt="Mercedes AMG F1 W12 E Performance"></img>
                <h3>Mercedes AMG F1 W12 E Performance</h3>
                <p>9 Wins of 22 Races<br/>Mercedes-AMG F1 M12</p>
            </div>
        </div>
        
    );
}

export default Cards;
