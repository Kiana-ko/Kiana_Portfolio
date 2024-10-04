// Kiana Kooshesh
// Card File Added On: FRI,OCT 4,2O24

/* A Functional component, that, creates a card layout that displays content, including:
- A title, 
- An image,
- A description, 
- And an optional URL that could link to an external resource(e.g., a repository): 
*/

// The title, image, and description are requried but the url is optional:

const Card = ({title, picture, description, url}) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <img src={picture} alt="project-or-service-picture"/>
            <p>{description}</p>

          {url ? (
              <a href={url} target="_blank" rel="noreferrer"> Link to Repository </a>
            ) : null}
        </div> // This would render a link to the repository if 'url' is provided!
    );
};

// Responsible for exporting the Card component for use in other files:
export default Card;