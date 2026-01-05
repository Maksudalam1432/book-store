import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authprovider";
import Logout from "./Logout";


function Navbar() {
  const [theme, setTheme] = useState("light");
const  [authUser,setAuthUser]=useAuth()
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 w-full z-50 px-4">

      
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Book Store</a>
      </div>

     
      <div className="navbar-center hidden lg:flex items-center gap-4">
        <ul className="menu menu-horizontal gap-4 items-center">
          
          <li><Link to="/">Home</Link></li>
          <li><Link to="/course">Course</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      

          
          <li>
            <label className="input input-bordered flex items-center gap-2 h-9">
              <svg
                className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </g>
              </svg>
              <input
                type="search"
                placeholder="Search"
                className="grow text-sm"
              />
            </label>
          </li>
        </ul>
      </div>

     
      <div className="navbar-end gap-3">
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

        {
   authUser ?(<Logout/>) :(
        <button className="btn btn-primary"><Link to="/login">Login</Link></button> 
      )
        }
      </div>

    </div>
  );
}

export default Navbar;
