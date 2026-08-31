import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        MessageApp
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;