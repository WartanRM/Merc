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
                        <p>At Mercedes-AMG PETRONAS Formula One Team, we take immense pride in our role as a leading
                        force in motorsport. Since our reformation in 2010, we have clinched multiple Constructors
                        and Drivers Championships, driven by our commitment to innovation and top-tier performance.
                        Our cutting-edge technology and talented drivers ensure that we remain at the forefront of
                        Formula One, embodying the excellence and precision of the Mercedes-Benz brand.</p>
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
