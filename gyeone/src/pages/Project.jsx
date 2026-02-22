import "../styles/Project.css";
import { FiGithub } from "react-icons/fi";

function Project() {
    return (
        <div className="project">
            <div className="project-title">
                <div className="project-title-left-division" />
                <p>Project</p>
                <div className="project-title-right-division" />
            </div>
            <div className="project-contents">
                <div className="project-contents-first">
                    <div className="project-contents-first-left">
                        <div className="project-title">
                            <p id="project-title-p">펫스토리</p>
                            <p id="project-particular">상세내용</p>
                        </div>
                        <div className="project-content">
                            <p id="project-content-p">
                                반려동물 커뮤니티 웹 홈페이지
                            </p>
                            <p id="project-date">2024.7.11 ~</p>
                        </div>
                        <div className="project-github">
                            <p id="github-icon">
                                <FiGithub id="icon" />
                            </p>
                            <p id="project-skill">react, js, sql</p>
                        </div>
                        <div className="project-pc"></div>
                    </div>
                    <div className="project-contents-first-right">
                        <div className="pc-screen1"></div>
                        <div className="pc-screen2"></div>
                    </div>
                </div>
                <div className="project-contents-second">
                    <div className="project-contents-second-left">
                        <div className="project-title">
                            <p id="project-title-p">WE-DA</p>
                            <p id="project-particular">상세내용</p>
                        </div>
                        <div className="project-content">
                            <p id="project-content-p">
                                커플 교환일기 모바일형 웹 홈페이지
                            </p>
                            <p id="project-date">2025.1.4 ~</p>
                        </div>
                        <div className="project-github">
                            <p id="github-icon">
                                <FiGithub id="icon" />
                            </p>
                            <p id="project-skill">react, js</p>
                        </div>
                        <div className="mobile-screen">
                            <div className="mobile-screen1"></div>
                            <div className="mobile-screen2"></div>
                            <div className="mobile-screen3"></div>
                        </div>
                    </div>
                    <div className="project-contents-second-right">
                        <div className="project-mobile"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Project;
