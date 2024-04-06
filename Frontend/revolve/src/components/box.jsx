import React from "react";

function Box({ store }) {
  console.log(store);
  const myStyle = {
    display: "flex",
    flexDirection: "column",
    // border: "2px solid red",
    listStyle: "none",
    width: "300px",
  };
  const mystyle2 = {
    background: "#f0f4f9",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: "1.3rem",
    height: "150px",
    margin: "10px 5px",
    borderRadius: "20px",
    fontWeight: "400",
    padding: "0px 40px",
  };
  return (
    <div className="contianer" style={myStyle}>
      {store.map((one) => (
        <div key={one.id} style={mystyle2}>
          <li>Name: {one.name}</li>
          <li>Description : {one.desc}</li>
          <li>Rating: {one.rating}</li>
        </div>
      ))}
    </div>
  );
}

export default Box;
