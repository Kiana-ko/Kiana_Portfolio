// Kiana Kooshesh
// Code Last Updated: THU,OCT 5,2O24
/* I forgot to add name and date to this file since it was alredy in ur
template,however I noticed it in the instructions and added date and name (oct 4)*/

import { Outlet, NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" style={{ width: 40 }} />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="fas fa-home"></i> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-me">
                  <i className="fa-solid fa-address-book"></i> About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  <i className="fas fa-project-diagram"></i> Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  <i className="fa-solid fa-clipboard-list"></i> Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-me">
                  <i className="fa-solid fa-envelope"></i> Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Header;

