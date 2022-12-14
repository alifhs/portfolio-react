import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import Logos from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logos} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo_sub" />
      </Link>
      <nav>
        <NavLink exact="true" activeClassName="active" to="/">
            <FontAwesomeIcon  icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
            <FontAwesomeIcon  icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
            <FontAwesomeIcon  icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
