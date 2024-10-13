import bgImage from '../bg1.webp';
import NewsSlider from './NewsSlider.jsx';
import Banner from './banner.jsx';

function Home(){
    const style={
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        height: '100vh',
        width: '100vw',
        margin: 0, 
        padding: 0,
        overflow: 'hidden',
        display: 'flex' 
    }
    return(<>
        <Banner />
            <div style={style}>
                <div className="Heading">
                    <h1>STILL WE RISE</h1>
                    <h3>Mercedes AMG Petronas F1 Team</h3>
                </div>
                
            </div>
            <div className='second'>
                <div id='about' className='aboutt'>
                    <h3>About</h3>
                    <p>       At Mercedes-AMG PETRONAS Formula One Team, we take immense pride in our role as a leading
                        force in motorsport. Since our reformation in 2010, we have clinched multiple Constructors
                        and Drivers Championships, driven by our commitment to innovation and top-tier performance.
                        Our cutting-edge technology and talented drivers ensure that we remain at the forefront of
                        Formula One, embodying the excellence and precision of the Mercedes-Benz brand.</p>
                </div>
                <div className='news'>
                    <NewsSlider/>
                </div>
            </div>
        </>
        
    );
}

export default Home