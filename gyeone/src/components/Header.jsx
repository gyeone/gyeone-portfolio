import "../styles/Header.css";
import { PiMoonLight } from "react-icons/pi";
import { PiSunLight } from "react-icons/pi";

function Header({ activeIndex, setActiveIndex }) {
    const menus = ["home", "about me", "skills", "project", "contact"];

    return (
        <header className="header">
            <div className="header-logo" onClick={() => setActiveIndex(0)}>
                <p>gyeone portfolio</p>
            </div>

            <nav className="nav">
                {menus.map((menu, i) => (
                    <button
                        key={i}
                        className={`nav-glass ${activeIndex === i ? "nav-active" : ""}`}
                        onClick={() => setActiveIndex(i)}
                    >
                        <span className="nav-menu">{menu}</span>
                    </button>
                ))}
            </nav>
            <button>
                <PiMoonLight className="moon" />
            </button>
        </header>
    );
}
export default Header;
