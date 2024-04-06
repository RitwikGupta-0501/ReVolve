import React from "react";

function Footer() {
  return (
    <nav className="fixed bottom-0 left-0 w-full border bg-gray-900 text-white p-4">
      <ul className="flex justify-end ml-4">
        <li>
          <a href="#" className="hover:text-gray-400">
            Pro
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Career
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            PlayGround
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            English
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
