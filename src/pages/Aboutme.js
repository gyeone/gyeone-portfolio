import '../styles/Aboutme.css';
import memo from '../aseets/images/memo.png';
import { MdPersonOutline } from "react-icons/md";
import { HiOutlineCake } from "react-icons/hi";
import { MdOutlinePlace } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

function Aboutme() {
    return(     
        <div className="aboutme">
            <div className="aboutme-title">
                <p>About Me</p>
                <div className="aboutme-title-division"/>
            </div>

            <div className="aboutme-contents">
                <img src={memo} width="400" height="400" id='memo'/>
                <div className='aboutme-contents-information'>
                    <div className='aboutme-contents-information-name'>
                        <p id='aboutme-p-icon'><MdPersonOutline id='aboutme-icon'/></p>
                        <p id='aboutme-p'>백기연 / Baek Giyeon</p>
                    </div>
                    <div className='aboutme-contents-information-birth'>
                        <p id='aboutme-p-icon'><HiOutlineCake id='aboutme-icon'/></p>
                        <p id='aboutme-p'>2001.11.30</p>
                    </div>
                    <div className='aboutme-contents-information-address'>
                        <p id='aboutme-p-icon'><MdOutlinePlace id='aboutme-icon'/></p>
                        <p id='aboutme-p'>경남 양산시 / YangSan-Si</p>
                    </div>  
                    <div className='aboutme-contents-information-github'>  
                        <p id='aboutme-p-icon'><FiGithub id='aboutme-icon'/></p>
                        <p id='aboutme-p'>gyeone</p>
                    </div>
                    <div className='aboutme-contents-information-email'>
                        <p id='aboutme-p-icon'><FiMail id='aboutme-icon'/></p>
                        <p id='aboutme-p'>gyeone@fecsen.com</p>
                    </div>
                </div>
            </div>
            
        </div>
   
    )
} export default Aboutme;