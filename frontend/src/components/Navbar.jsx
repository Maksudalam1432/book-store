import React, { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 shadow-md px-4">

      {/* START */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Home</a></li>
            <li><a>Course</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        <a className="btn btn-ghost text-xl">Book Store</a>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 items-center">
          <li><a>Home</a></li>
          <li><a>Course</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
          <li>
            <input
              type="text"
              className="input input-bordered input-sm w-48"
              placeholder="Search books"
            />
          </li>
        </ul>
      </div>

      {/* END */}
      <div className="navbar-end gap-3">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
          />

          <svg className="swap-off h-7 w-7 fill-current" viewBox="0 0 24 24">
            <path d="M12 6a6 6 0 100 12 6 6 0 000-12z" />
          </svg>

          <svg className="swap-on h-7 w-7 fill-current" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
          </svg>
        </label>

        <a className="btn bg-black text-white hover:bg-gray-700 cursor-pointer rounded-md px-5">
          Login
        </a>
      </div>

    </div>
  );
}

export default Navbar;
