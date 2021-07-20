import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../actions/auth";

const Header = () => {
  return (
    <header>
      <h1>Blog App</h1>

      <NavLink exact to="/blogs" activeClassName="active">
        Blogs
      </NavLink>
      <NavLink to="/create" activeClassName="active">
        Blog Create
      </NavLink>

      <button onClick={logout}>Logout</button>
    </header>
  );
};

export default Header;
