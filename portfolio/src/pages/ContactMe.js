// Kiana Kooshesh
// Code file Last Updated On: SAT,OCT 5,2O24

// For importing neccasry React hooks and external resources
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faKaggle } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

// Defining the ContactMe component, which renders a contact form and links for social media:
const ContactMe = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    //For initializing the `navigate` to allow redirection after form submission:
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // For preventing the default browser action (reloading the page on form submit)
        e.preventDefault(); 

        //Responsible for redirecting to the homepage ("/") after submiton of the form:
        navigate("/");
    };

    return (
        <div className="contact-me">
            <h1>📫 Conect with Me</h1>
            <div className="connect">
                <a href="https://www.linkedin.com/in/kiana-kooshesh/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/Kiana-ko" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="mailto:kianakooshesh16@gamil.com">
                    <i className="fa-solid fa-envelope email" aria-hidden="true"></i>
                </a>

                <a href="https://twitter.com/kianaa_Ko" target="_blank" rel="noreferrer"> {/* Square-X Twitter Icon */}
                    <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
                </a>

                <a href="https://www.instagram.com/withkianaa/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>

                <a href="https://www.kaggle.com/kianako" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faKaggle} size="2x" />
                </a>  

                <a href="https://leetcode.com/u/AwesomeKiana/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faCode} size="2x" /> {/* LeetCode Icon */}
                </a>
            </div>


            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">First Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="First Name"
                            required
                            autoComplete="given-name"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                            required
                            autoComplete="family-name"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone Number"
                            autoComplete="tel"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            autoComplete="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Message"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <button type="submit" className="button">
                        Submit
                    </button>
                </form>
            </div>
            
        </div>
    );
}

// For exporting the contact me component for use in other parts of the portfolio:
export default ContactMe;