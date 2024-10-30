import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <span>My Website</span>
        <br />
        <Link to="/">Home</Link>
        <NavLink to="/users">Users</NavLink>
        <NavLink to={`/posts`}>Posts</NavLink>
        <NavLink to="/about">About</NavLink>
        <Link to="/contact">Contact Us</Link>
        <Link to={`/comments`}>Comments</Link>
      </nav>
    </div>
  );
};

export default Header;
