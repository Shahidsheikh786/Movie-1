
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom"
import Card from "../Components/Card"
import  MovieList from "../Components/MovieList"


const Home = () => {
  
  const [moviesData, setMoviesData] = useState([]);
  
 const [poputerMovies, setPoputerMovies] = useState([]);
  
  useEffect(() => {
    const api = async() =>{
   const res = await
   fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US");
   
   const data = await res.json();
   setPoputerMovies(data.results);
   
 
  }
  api()
  
  }, []);
  
  
  
  return (
  <div>

     <Carousel
     autoPlay={true}
     infiniteLoop={true}
     showThumbs={false}
     transitionTime={3}
     showStatus={false}
     >
     { poputerMovies.map((movie)=>{
       return (
 <Link to={`/movie/${movie.id}`}>
     <div className="relative flex-start" text-left>
         <img
         src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
         
         />
         <div className="absolute bottom-[50px] left-[20px] flex  flex-col  bg-transparent
         items-start mx-6 z-10 carousel-content
         ">
         <h1 className="text-[40px] font-bold heading">{movie.title}</h1>
         <div className="text-[20px] flex " >{movie.release_date}
         <span className="mx-5 flex items-center">{Math.floor(movie.vote_average)}  <i
         className="fa fa-star mx-1 text-[13px] "></i> </span> </div>
          
         <p  className="Carousel-discription  w-[50%] text-left">{movie.overview}</p>
         
         </div>
           <div className="h-full w-full bg-black opacity-30 absolute top-0
           "></div>
                   
         </div>
           </Link>
         )
     })
 
     }
      </Carousel>
    
<MovieList/>

  </div>

  )
  
}

export default Home;