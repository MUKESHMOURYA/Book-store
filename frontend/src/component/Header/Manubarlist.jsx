import React from "react";
import Navitem from "./Navitem";
import Search from "./Search";
import { IoClose } from "react-icons/io5";
const Manubarlist = ({handleShowList}) => {
    
  return (
    <>
      <div className={`bg-slate-600 h-[100vh] block justify-center items-center relative`}>
       <div className="absolute right-0 p-4 text-3xl" onClick={handleShowList}>
       <IoClose/>
       </div>
        <div className=" flex md:hidden w-[100%] h-[100px] justify-center  items-center p-8">
          <Search />
        </div>
        <div className="flex lg:hidden w-[100%] h-[400px] justify-center  items-center text-black size-64">
          <ul className=" flex flex-col gap-16 text-4xl ">
            <Navitem />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Manubarlist;
