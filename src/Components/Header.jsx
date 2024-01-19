

import { useState } from "react";
import {Link} from 'react-router-dom'


const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState("fa fa-bars");
  
  

  const toggleMenu = () =>{
   if(isOpen == false){
    document.querySelector('.header-links').style.display = "flex";
  
  setIcon("fa fa-xmark")
  
     setIsOpen(true)
     
     
   }
   if(isOpen == true){
     document.querySelector('.header-links').style.display = "none";
     
     setIcon("fa fa-bars")
     
     setIsOpen(false)
     
   }
    
    
  }
  
  
  
  
  return (
  <div className="header">
  
  <ul className=" text-white p-8 gap-10 text-2xl flex  ">
  <div className="flex justify-between gap-7 ">
 <Link to="/"> <li className="font-bold">TheMovie.</li> </Link>
 
  <button className=" menu-btn  hidden" onClick={toggleMenu}><i
  className={`${icon}`} ></i></button>
</div>
 
 <div className="header-links flex gap-4"> 
 <Link to="/movies/popular">  <li>Popular</li> </Link>
  <Link to="/movies/top_rated"> <li>Top Rated</li> </Link>
   <Link to="/movies/upcoming"> <li>Upcoming</li>
  </Link>
  
  </div>
 
 
  
  </ul>
  </div>
  )
}

export default Header;