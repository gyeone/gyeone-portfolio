import '../styles/Home.css';
import { SlArrowDown } from "react-icons/sl";

function Home() {
    return(     
        <div className="home">
            <div className="home-footer">
                <p>Hello world!</p>
                <h1><SlArrowDown className='arrow'/></h1>
            </div>
        </div>
    )
} export default Home;