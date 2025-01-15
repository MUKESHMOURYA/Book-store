import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div>
                  <div>
                    <div className=" w-[100%] h-[30px] flex justify-center  items-center ">
                      <input className=" w-[90%] h-[100%] rounded-s-xl pl-2 	border-style: none rounded-none focus:ring-0 focus:outline-none text-sm "></input>
                      <button className=" w-[10%] h-[100%] bg-[white] rounded-e-xl flex justify-center  items-center rounded-none ">
                        <CiSearch />
                      </button>
                    </div>
                </div>
    </div>
  )
}

export default Search
