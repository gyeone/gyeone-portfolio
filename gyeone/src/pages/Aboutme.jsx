import "../styles/Aboutme.css";
import memo from "../assets/images/memo.png";

function Aboutme() {
    return (
        <div className="aboutme">
            <div className="aboutme-title">
                <p>About Me</p>
                <div className="aboutme-title-division" />
            </div>

            <div className="aboutme-contents">
                <img src={memo} width="400" height="400" id="memo" />
                <div className="aboutme-contents-information"></div>
            </div>
        </div>
    );
}
export default Aboutme;
