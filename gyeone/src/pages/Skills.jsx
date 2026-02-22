import "../styles/Skills.css";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { TbBrandFigma } from "react-icons/tb";
import { RiPhpFill } from "react-icons/ri";

function Skills() {
    return (
        <div className="skills">
            <div className="skills-title">
                <div className="skills-title-left-division" />
                <p>Skills</p>
                <div className="skills-title-right-division" />
            </div>
            <div className="skills-contents">
                <div className="skill html">
                    <p id="icon-p">
                        <TiHtml5 id="html-icon" />
                    </p>
                    <p>HTML</p>
                </div>
                <div className="skill css">
                    <p id="icon-p">
                        <FaCss3Alt id="css-icon" />
                    </p>
                    <p>CSS</p>
                </div>
                <div className="skill js">
                    <p id="icon-p">
                        <FaJs id="js-icon" />
                    </p>
                    <p>JS</p>
                </div>
                <div className="skill react">
                    <p id="icon-p">
                        <FaReact id="react-icon" />
                    </p>
                    <p>React</p>
                </div>
                <div className="skill figma">
                    <p id="icon-p">
                        <TbBrandFigma id="figma-icon" />
                    </p>
                    <p>Figma</p>
                </div>
                <div className="skill php">
                    <p id="icon-p">
                        <RiPhpFill id="php-icon" />
                    </p>
                    <p>PHP</p>
                </div>
            </div>
        </div>
    );
}
export default Skills;
