import { Link } from "react-router-dom";
//import logo from './assets/logo.jpeg';

function Header(){
    return(
        <header>
            <nav>
                <div className="logoContainer">
                    <h5 className="logo">F1</h5>
                </div>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/#about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>       
            </nav>
        </header>
        
    );
}

export default Header