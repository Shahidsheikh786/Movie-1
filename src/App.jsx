import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Header from "./Components/Header"



// pages
import Home from "./Pages/Home"
import MovieList from "./Components/MovieList"
import MovieDisplay from "./Components/MovieDisplay"



function App() {
  

  return (
    <>
      <div className="app">
      <Router>
      <Header />
      <Routes>
    <Route path="/" element={<Home />}/>
 
  
    <Route path="/movie/:id" element={<MovieDisplay/>}/>
    <Route path="/movies/:type" element={<MovieList/>}/>
    
       
       </Routes>
       </Router>
      </div>
    </>
  )
}

export default App
