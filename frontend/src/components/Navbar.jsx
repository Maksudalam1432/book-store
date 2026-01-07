import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authprovider";
import Logout from "./Logout";

function Navbar() {
  const [theme, setTheme] = useState("light");
  const [authUser] = useAuth();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 w-full z-50 px-4">

      {/* LEFT */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/course">Course</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl">
          Book Store
        </Link>
      </div>

      {/* CENTER (Desktop only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/course">Course</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-3">

        {/* Theme toggle */}
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
          />
          <svg className="swap-off h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 6a6 6 0 100 12 6 6 0 000-12z" />
          </svg>
          <svg className="swap-on h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
          </svg>
        </label>

        {/* Auth buttons */}
        {authUser ? (
          <Logout />
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
