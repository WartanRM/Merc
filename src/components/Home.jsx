import React, { useState } from 'react';
import bgImage from '../assets/bg0.png';
import NewsSlider from './NewsSlider.jsx';
import Banner from './banner.jsx';
import './Contact.css';

function Home() {
    const [name, SetName] = useState("User");
    const [email, SetEmail] = useState("example@gmail.com");
    const [message, SetMessage] = useState("write your comment here...");

    function handleEmailChange(event) {
        SetEmail(event.target.value);
    }

    function handleNameChange(event) {
        SetName(event.target.value);
    }

    function handleCommentChange(event) {
        SetMessage(event.target.value);
    }

    const style = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
    };

    const contentStyle = {
        flexGrow: 1,
        overflowY: 'auto',
        padding: '20px 5%',
    };


    return (
        <div style={style}>
            <Banner />
            <div style={contentStyle}>
                <div className="Heading">
                    <h1>STILL WE RISE</h1>
                    <h3>Formula One Racing</h3>
                </div>
                <div className='second'>
                    <div id='about' className='aboutt'>
                        <h3>About</h3>
                        <p>Welcome to the thrilling world of Formula One! Here, we celebrate the speed, the strategy,
                             and the stunning performances that define the sport. From fierce rivalries to incredible teamwork,
                              we delve into the heart of racing, showcasing the passion and precision that make F1 unforgettable.
                               Join us as we explore the adrenaline-fueled action and the remarkable stories behind the drivers and teams.
                                Buckle up for an exhilarating journey through the world of motorsport!</p>
                    </div>
                    <div className='news'>
                        <NewsSlider />
                    </div>
                </div>
                <div className="Contact">
                    <h1>Contact:</h1>
                    <div>
                        <p>Name: {name}</p>
                        <input value={name} onChange={handleNameChange} />

                        <p>Email: {email}</p>
                        <input value={email} onChange={handleEmailChange} />

                        <div className="comment-wrapper">
                            <p>Comment:</p>
                            <textarea value={message} onChange={handleCommentChange} className="comment"></textarea>
                            <button className="commentButton">Submit</button>
                        </div>
                    </div>
                    <div className="info">
                        <p>Note: Please share your thoughts and complaints, as we are continuously working towards bettering user experience and services for the community.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
