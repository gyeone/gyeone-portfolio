import "./App.css";
import "./styles/base/Reset.css";
import "./styles/base/fonts.css";
import "./styles/base/common.css";
import { useState } from "react";
import {
    FullpageContainer,
    FullpageSection,
} from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <Header activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <FullpageContainer
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <FullpageSection name="home">
                    <div>
                        <Home />
                    </div>
                </FullpageSection>
                <FullpageSection name="aboutme">
                    <div>
                        <Aboutme />
                    </div>
                </FullpageSection>
                <FullpageSection name="skills">
                    <div>
                        <Skills />
                    </div>
                </FullpageSection>
                <FullpageSection name="project">
                    <div>
                        <Project />
                    </div>
                </FullpageSection>
                <FullpageSection name="contact" isAutoHeight>
                    <div>
                        <Contact />
                    </div>
                </FullpageSection>
            </FullpageContainer>
        </>
    );
}

export default App;
