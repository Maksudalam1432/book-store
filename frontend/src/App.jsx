import React from 'react'
import Home from './components/Home'
import {Route ,Routes} from "react-router-dom"
import Course from './components/Course'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import  { Toaster } from 'react-hot-toast';


function App() {
   
  return (
    <div>
      
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={<Course/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>

     </Routes>
           <Toaster />

    </div>
  )
}

export default App