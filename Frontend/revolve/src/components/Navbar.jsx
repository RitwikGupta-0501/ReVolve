import React from "react";
// import Style from "./../CSS/navbar.module.css";
function Navbar() {
  const myStyle = {
    height: "100vh",
    width: "300px",
    margin: 0,
  };
  return (
    // <div className="border border-red" style={myStyle}>
    //   <h3 className="title">ReVolve</h3>
    //   <input
    //     className="input-text"
    //     type="text"
    //     name=""
    //     id=""
    //     placeholder="New Thread"
    //   />
    //   <div className="link-container">
    //     <li>
    //       <a href="/">Home</a>
    //     </li>
    //     <li>
    //       <a href="/">Library</a>
    //     </li>
    //     <li>
    //       <a href="/">Discover</a>
    //     </li>
    //   </div>
    // </div>
    <nav className="flex flex-col w-64 bg-gray-800 h-screen" style={myStyle}>
      <div className="flex items-center justify-center h-16 bg-gray-800 text-white text-xl">
        <span>ProVoke</span>
      </div>
      <ul className="py-4">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
          >
            Library
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
          >
            Discover
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
