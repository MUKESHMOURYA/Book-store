import React, { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import Navitem from "./Navitem";
import Search from "./Search";
import Manubarlist from "./Manubarlist";
import { IoMdSunny } from "react-icons/io";
import Login from "../Login"

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "white" : "black";
    document.body.style.color = isDarkMode ? "black" : "white";
  };
  const [isListVisible, setIsListVisible] = useState(false);

  const handleShowList = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <>
      <div className="navbar w-[100%] h-[60px] bg-[#EFF0F6C2] flex justify-between fixed top-0 z-50">
        <button className="w-[200px] h-[100%]  flex justify-center  items-center">
          <div
            className=" flex lg:hidden  justify-center  items-center   w-[80px] h-[100%]  relative "
            onClick={() => handleShowList(false)}
          >
            {!isListVisible && <FaBars />}
          </div>
          <a>Bookstore</a>
        </button>
        <div className=" flex">
          {" "}
          <div className=" hidden lg:flex w-[350px] h-[100%]   justify-center  items-center text-black ">
            <ul className="w-[400px]  flex justify-center gap-10">
              <Navitem />
            </ul>
          </div>
          <div className="w-[auto] h-[100%]  flex ">
            <div className=" hidden md:flex w-[250px] h-[100%] justify-center  items-center ">
              <Search />
            </div>
            <div className="w-[180px] h-[100%] flex justify-center gap-5 items-center">
              <div
                className={`w-10 h-[30px]  flex justify-center  items-center text-xl cursor-pointer  `}
                onClick={toggleTheme}
              >
                {isDarkMode ? (
                  <IoMdSunny className="text-yellow-300" />
                ) : (
                  <IoMoonOutline />
                )}
              </div>
              <button
                className="w-[80px] h-[35px] bg-black text-white flex justify-center  items-center rounded-xl "
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              <Login/>
             
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-[100%] h-[100vh]  ${
          !isListVisible ? "hidden" : "block"
        } `}
      >
        <Manubarlist handleShowList={handleShowList} />
      </div>
    </>
  );
};

export default Navbar;
