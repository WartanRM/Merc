import { Link } from "react-router-dom";
import account from '../assets/iconuser.png';

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
                        <li><a href="/#about">About</a></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login"><img className="userIcon" src={account}></img></Link></li>
                    </ul>
                </div>       
            </nav>
        </header>
        
    );
}

export default Header