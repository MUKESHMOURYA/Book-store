import React from 'react'
import Navbar from './component/Header/Navbar'
import Home from './component/Home/Home'
import {Routes , Route, BrowserRouter} from "react-router-dom"
import Course from './component/Course/Course'
import Signup from './component/Signup'



const App = () => {
  // const path=useLocation()
  // const mukesh=path.pathname.split("/")[1]

  return (

    <>
    <BrowserRouter>
   {/* {!mukesh && } */}

   <Routes>
     <Route path="/" element={ <Home/>}/>
     <Route path="/course" element={ <Course />}/>
     <Route path="/signup" element={ <Signup/>}/>
   </Routes>
   {/* {!mukesh &&} */}
  
  
   </BrowserRouter>
   

   </>
  )
}

export default App
