import React from "react";
import Navbar from "./component/navbar/Navbar";
import Leadership from "./component/leadership/Leadership";
import Solution from "./component/solution/Solution";
import About from "./component/about/About";
import Touch from "./component/touch/Touch";

const App = () => {
  return (
    <>
     
        <Navbar />
        <Solution />
        <About />
        {/* <Leadership /> */}
        <Touch />
      
    </>
  );
};

export default App;
