<<<<<<< Updated upstream
// import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
// import MyComponent from './components/sendPrompt'
=======
import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Box from "./components/box";
// import MyComponent from "./components/sendPrompt";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
     <Sidebar/>
     <Main/>  
      
        {/* <MyComponent/>  */}
=======
      <Sidebar />
      <Main />
      <Box store={info} />
      {/* <MyComponent /> */}
>>>>>>> Stashed changes
    </>
  );
};

export default App;
