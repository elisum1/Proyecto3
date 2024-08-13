import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Best<span className="logoHighlight">Day</span></span>
        </Link>
        {user ? (
          <div className="navItems">
            <FontAwesomeIcon icon={faUser} className="navIcon" />
            <span className="navUsername">{user.username}</span>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="navButton">Login</button>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <button className="navButton">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
