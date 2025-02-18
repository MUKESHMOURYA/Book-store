import React from "react";
import list from "../../Data/list.json";
import Cards from "../Cards";
import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
const Course = () => {
 
  return (
    <>
    <Navbar/>
      <div  className="max-w-screen-2xl container max-auto md:px-20 px-4">
      <div className=" mt-28  flex justify-center items-center">
        <div className="w-[80%]  text-center space-y-9">
          <h1 className="text-4xl mt-8">
            We're delighted to have you
            <span className="text-pink-400"> Here!:)</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed
            magnam consequatur!
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 p-4 text-white py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>
        </div>
       
      </div>
      <div className="mt-12 mb-6 grid grid-cols-1 md:grid-cols-4 gap-8"> 
          {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
        </div></div>
        <div>

        </div>
        <Footer/>
    </>
  );
};

export default Course;
