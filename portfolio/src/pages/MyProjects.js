// Kiana Kooshesh
// Last Updated On: SAT,OCT 5,2O24
/* I forgot to add name and date to this file since it was already in ur
template,however I noticed it in the instructions and added date and name today(oct 4)*/

// For importing the necessary assets and components:
import movieApp from '../assets/movie-app.png';
import api from '../assets/api.png';
import pythonGames from '../assets/pythonGames.png'
import Card from '../components/Card';

/* Card component, responsible for displaying project details such as:
- image
- title
- description
- and URL
in a styled format for the portfolio projects section */

const Projects = () => {
    return (
        <div className="my-projects">
            <h1>💻 My Projects</h1>
            <div className="projects">   

                <Card  
                    picture={movieApp} 
                    title={"Movie App"} 
                    description={"This is a front-end movie app where user can search a movie from an API."} 
                    url={"https://github.com/Kiana-ko/TMDB-Movie-Web-App/tree/main"}
                />     



                 <Card  
                    picture={api} 
                    title={"Article Server"} 
                    description={"This is a back-end server that allows users to create, read, update, and delete articles."} 
                    url={"https://github.com/Kiana-ko/Article-Server-Assignment"}
                />

                
                {/* Photo for my python games, i generated the picture myself using "Adobe Express": */}
                <Card  
                    picture={pythonGames}
                    title={"Python Console Games"} 
                    description={"A collection of two mini Python console games: Hangman and Word Sleuth console games."} 
                    url={"https://github.com/Kiana-ko/Python_Game_Bytes"}
                />
                
            </div> 
        </div>
    );
};

// For exporting the Projects component for use in other parts of the portfolio:
export default Projects;