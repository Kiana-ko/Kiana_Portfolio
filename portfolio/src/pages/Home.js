// Kiana Kooshesh
// Code Last Updated On: SAT,OCT 5,2O24
/* I forgot to add name and date to this file since it was already in ur
template,however I noticed it in the instructions and added date and name today(oct 4)*/

/* For Importing the Link component from react-router-dom 
to enable navigation between different routes: */
import { Link } from "react-router-dom";


/*  Home component responsible for displaying the main introductory section 
of the portfolio: */
const Home = () => {
    return (
        <section className="home">
            <h1> 🚀  Hello, Welcome to My Portfolio </h1>
            <div className="home-center">
                <div className="home-left">
                    <h2>My Mission</h2>
                        <p>
                            I am committed to delivering top-notch user experiences by blending simplicity, performance,
                            and modern design principles. Whether working on APIs or database architecture, my goal is 
                            to create seamless interactions behind the scenes.
                        </p>
                </div>
                <div className="home-right">    
                    <h2>What I Offer</h2>
                        <p>
                            I specialize in backend development, with a strong understanding of databases, API design,
                            and server-side logic. I take pride in clean code and efficient problem-solving to help 
                            businesses scale their digital solutions.
                        </p>
                </div>
            </div>

            <div className="button-home">
                <Link to="/about-me">
                    <button className="button">Learn More About Me</button>
                </Link>
                <Link to="/projects">
                    <button className="button">View My Work</button>
                </Link>
                <Link to="/contact-me">
                    <button className="button">Get In Touch</button>
                </Link>
            </div>
        </section>
    );
};

// For exporting the Home component for use in routing
export default Home;
