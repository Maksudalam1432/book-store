import React, { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 w-full z-50 px-4">

      {/* LEFT */}
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Book Store</a>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          <li><a>Home</a></li>
          <li><a>Course</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

      {/* RIGHT */}
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

        <button className="btn btn-primary">Login</button>
      </div>

    </div>
  );
}

export default Navbar;
