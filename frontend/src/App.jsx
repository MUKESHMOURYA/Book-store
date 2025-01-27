import React from "react";
// import Navbar from "./component/Header/Navbar";
import Home from "./component/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Course from "./component/Course/Course";
import Signup from "./component/Signup";
import Contact from "./component/Contact/Contact";
import Teat from "./component/Teat"
import About from "./component/about/About";



const App = () => {
  console.log("Git Hub")

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/course" element={<Course/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/teat" element={<Teat/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
