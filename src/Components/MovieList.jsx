
import {useParams, Link} from "react-router-dom"
import { useState, useEffect } from "react";
import Card from "./Card"



const MovieList = () => {
  
  const [movielist, setMovielist] = useState([]);
  
  const {type} = useParams();
  
  useEffect(() => {
    getData()
  }, []);
  
  useEffect(() => {
    getData()
  }, [type]);
  
  const getData = () =>{
    const api = async() =>{
   const res = await
   fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
   
   const data = await res.json();
   setMovielist(data.results);
  
  }
  api()
  }
  
  return (
    <>
    
    <div className="text-[40px] mx-5 font-bold">{type ? type : "popular"}</div>
 <div className="flex items-center flex-wrap justify-center"> 
{ movielist.map((movie)=>{
   return (<Link to={`/movie/${movie.id}`}><Card movie={movie} key={movie.id}/></Link> )
 })}
 
 </div>
 </>
  )
}

export default MovieList;