import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full bg-blue-300 h-20 flex justify-between items-center">
      <div className="w-1/3">
        <NavLink to="/" className="text-3xl font-bold px-10">
          CRUD
        </NavLink>
      </div>
      <div className="flex flex-row justify-evenly items-center w-1/3">
        <NavLink to="/" className="px-5 text-xl font-normal">
          Home
        </NavLink>
        <NavLink to="/posts" className="px-5 text-xl font-normal">
          Posts
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
