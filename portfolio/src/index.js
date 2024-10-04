// Kiana Kooshesh
// Last Updated: FRI,OCT 4,2O24
/* I forgot to add name and date to this file since it was alredy in ur
template,however I noticed it in the instructions and added date and name today(oct 4)*/


//Responsible for managing the rendering of the React application into the DOM:
import ReactDOM from "react-dom/client"; 

/* Responsible for providing routing functionality for the app, 
enabling navigation between different pages:*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

//For importing other components:
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import MyProjects from "./pages/MyProjects";
import About from "./pages/AboutMe";
import NotFound from "./components/NotFound";

// For Importing CSS styles:
import "bootstrap/dist/css/bootstrap.min.css";  // Bootstrap CSS for styling
import "@fortawesome/fontawesome-free/css/all.min.css" // Font Awesome CSS for icons
import "./index.css";

// For Importing JavaScript libraries:
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/js/all.min.js"
import Contact from "./pages/ContactMe";
import Services from "./pages/Services";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<MyProjects />} />
          <Route path="contact-me" element={<Contact />} />
          <Route path="about-me" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}


//Responsible for Rendering the App component in the root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
