import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Box from "./components/box";
// import MyComponent from "./components/sendPrompt";

const App = () => {
  const info = [
    {
      id: 1,
      name: "Apple",
      desc: "lorem20",
      rating: "2.3",
    },
    {
      id: 2,
      name: "banana",
      desc: "lorem20",
      rating: "2.3",
    },
    {
      id: 3,
      name: "guava",
      desc: "lorem20",
      rating: "2.3",
    },
  ];
  return (
    <>
      <Sidebar />
      <Main />
      <Box store={info} />
      {/* <MyComponent /> */}
    </>
  );
};

export default App;
