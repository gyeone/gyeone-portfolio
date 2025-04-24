import '../styles/Navbar.css';
import { PiMoonLight } from "react-icons/pi";
import { PiSunLight } from "react-icons/pi";

function Navbar() {
    return(     
        <div className="navbar">
            <div className="navbar-logo">
                <p>gyeone portfolio</p>
            </div>
            <div className="navbar-menu">
                <p>home</p>
                <p>about me</p>
                <p>skills</p>
                <p>project</p>
                <p>contact</p>
            </div>
            <div className='navbar-mode'>
                <div className='navbar-mode-icon'>
                    <p><PiMoonLight className='moon'/></p>
                </div>
            </div>

        </div>
   
    )
} export default Navbar;