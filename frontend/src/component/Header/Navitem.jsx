import React from 'react'

const Navitem = () => {
  return (
    <>
              <li className=' h-8   flex justify-center items-center hover:border-2 rounded-lg'>
              <a href='/'>Home</a>
              </li>
              <li className=' h-8   flex justify-center items-center hover:border-2 rounded-lg'>
                <a href='/course'>Course</a>
              </li>
              <li className=' h-8   flex justify-center items-center hover:border-2 rounded-lg'>
                <a href='/contact'>Contact</a>
              </li>
              <li className=' h-8   flex justify-center items-center hover:border-2 rounded-lg'>
                <a href='/about'>About</a>
              </li>
           
          
    </>
  )
}

export default Navitem
