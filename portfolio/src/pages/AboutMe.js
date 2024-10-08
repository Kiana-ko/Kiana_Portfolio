// Kiana Kooshesh
// Code Last Updated On: SAT, OCT 5,2O24
/* I forgot to add name and date to this file since it was already in ur
template,however I noticed it in the instructions and added date and name today(oct 4)*/

// For importing neccasry modules and assets:
import profilePic from "../../src/assets/profile-pic.jpeg"
import resume from "../assets/resume.pdf"


const AboutMe = () => {
    return(
        <div className="about">
            <h1>About Me</h1>
            <img alt="profile-pic" src={profilePic} />
            <p>
                I'm Kiana Kooshesh; a Junior Backend Developer 👩🏻‍💻 who is currently studying in the Software Engineering program.
                I am planning on pursuing a career in Data Science 📊 while enjoying Game-Dev 👾 as a side hobby.
            </p> {/* a short bio of me */}


            {/* For my resume download section */}
            <a
                // For opening the link in a new tab
                target="_blank" 

                // For specifiying the file to be downloaded when clicked
                href={resume}

                // For renaming the file when it's downloaded and  also
                // Responsible for preventation ofsharing referrer information for security:
                download="KianaKooshesh_Resume.pdf" rel="noreferrer"
            >
                Download my Resume (PDF)
            </a>


            {/* my tech stack respresend in icons: */}
            {/* These icons below are the icons I've used for my GitHub Readme:
            which was originally generated by the following website:
            https://rahuldkjain.github.io/gh-profile-readme-generator/ */}


            <div className="stacks">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" alt="oracle" width="40" height="40"/> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" alt="pandas" width="40" height="40"/> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
                <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> 
                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/> 
                <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40"/> 
            </div> 
        </div>
    ); 
};


// ===== == References for icons used in the tech stack: == =====
// Icons sourced from:
// - Devicons: https://devicons.github.io/devicon/
// - Vector Logo Zone: https://www.vectorlogo.zone/
// - Figma: https://www.figma.com/
// - Other icons were generated using the GitHub Readme generator:
// https://rahuldkjain.github.io/gh-profile-readme-generator/
// ===== ==== === === === === === === === === === === === == =====


// For exporting the about me component for use in other parts of the portfolio:
export default AboutMe;