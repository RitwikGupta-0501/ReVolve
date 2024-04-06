import React from "react";

function Central() {
  const myStyle = {
    // border: "2px solid red",
    width: "83vw",
    position: "absolute",
    right: "0",
    top: "100px",
    height: "400px",
    backgroundColor: "#1f2937",
    color: "#fff",
  };
  const myStyle2 = {
    position: "relative",
    top: "100px",
    width: "600px",
    height: "70px",
    borderRadius: "20px",
    fontSize: "20px",
    padding: "20px",
  };
  const myStyle3 = {
    position: "relative",
    top: "100px",
    left: "50px",
    backgroundColor: "#0dcaf0",
    color: "#222",
  };
  return (
    <div style={myStyle}>
      <h1>Where Search Begins</h1>
      <input
        type="text"
        name=""
        id=""
        className="border border-black"
        placeholder="Search anything... "
        style={myStyle2}
      />
      <button type="button" style={myStyle3}>
        Search
      </button>
    </div>
  );
}

export default Central;
