import React from "react";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a href="/about" className="link link-hover">About us</a>
        <a href="/contact" className="link link-hover">Contact</a>
        <a href="/course" className="link link-hover">Course</a>
        
             </nav>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://x.com/MaksudAlam15478"
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>

          <a
            href="https://github.com/Maksudalam1432"
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/maksud-alam-1088a425a/"
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M4.98 3.5C4.98 5.43 3.43 7 1.5 7S-1 5.43-1 3.5 0.57 0 2.5 0 4.98 1.57 4.98 3.5zM.5 24h4V7h-4v17zM8.5 7h3.8v2.3h.05c.53-1 1.84-2.3 3.78-2.3 4.04 0 4.79 2.66 4.79 6.12V24h-4v-8.58c0-2.05-.04-4.69-2.86-4.69-2.86 0-3.3 2.24-3.3 4.54V24h-4V7z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/__md_alam_0786/"
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" />
            </svg>
          </a>
        </div>
      </nav>

      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Maksud Alam</p>
      </aside>
    </footer>
  );
}

export default Footer;
