
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";



const MovieDisplay = () => {
  const [currentMovie, setCurrentMovie] = useState("");
  
  const {id} = useParams();
  
  useEffect(() => {
    getData()
    scrollTo(0,0)
  }, []);
  
  useEffect(() => {
    getData()
  }, [id]);
  
  const getData = () =>{
    const api = async() =>{
   const res = await
   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
   
   const data = await res.json();
   setCurrentMovie(data)
   console.log(data) 
  }
  api()
  
  }
  
  
  return (
  <div >
  <div className="relative ">
 <img className="h-full w-full object-cover"   src={`https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}`}
  /> 
  
  <div className="bg-black opacity-40 absolute top-0 left-0 h-full w-full"></div>
  
   </div>
    
  <div className="flex movie-content mx-10 -translate-y-60  ">
  <div>
  <img className="movie-poster   w-[300px] min-w-[300px] border-grey border-[1px] " src={`https://image.tmdb.org/t/p/original/${currentMovie.poster_path}`} 
  /></div>
  
  <div className="content mx-3  ">
  <h1 className="movie-heading  text-[60px]  font-bold ">{currentMovie.title}</h1>
  <p >{currentMovie.tagline}</p>
  <div >{currentMovie.vote_average} <i className="fa
  fa-star"></i> 
  <span className="mx-7 ">({currentMovie.vote_count}) votes</span></div>
  <div>{currentMovie.runtime} mins</div>
  <div> Release Date : {currentMovie.release_date} </div>
  

  
    <div className="my-5">
 <h1 className="text-[30px]  font-bold">Synopsis</h1>
 <p className="text-[20px] ">{currentMovie.overview}</p>
  </div>
 

 <div className="flex items-center my-10 ">
 <h4>Usefull Links</h4>
 <a className=" mx-4 border-[1px] border-white bg-red-500 text-white p-2
 rounded-full   " href={`${currentMovie.homepage}`}>Home page </a>
 
 </div>
</div>
  
  </div>

 
   </div>
  )
 
}

export default MovieDisplay;