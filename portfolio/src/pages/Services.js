// Kiana Kooshesh
// Code Last Updated On: FRI,OCT 4,2O24

// For importing neccasry modules and assets:
import Card from "../components/Card";
import Data from "../assets/data.png";
import BackEnd from "../assets/back-end.png";

// A functional component Responsilble for displaying the services I offer:
function Services() {
    return (
        <div className="my-services">
            <h1>My services</h1>
            <div className="services">
                <Card 
                    picture={Data} 
                    title={"Data Science"} 
                    description={"I can help you with data analysis, data visualization, and machine learning."} 
                />
                <Card 
                    picture={BackEnd} 
                    title={"Back-end Development"} 
                    description={"I can help you with creating a server, database, and API."} 
                />
            </div>
        </div>
    );
};

// For exporting the services component for use in other parts of the portfolio:
export default Services;