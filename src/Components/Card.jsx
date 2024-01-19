

const Card = ({movie}) => {
  return (
  <div className=" cardContent  w-[200px] h-[270px] min-w-[200px] min-h-[270px]
  m-8 object-cover relative flex-wrap border-grey border-[1px]
   ">
  
  
         <img
         src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
         className="object-cover h-full w-full "
         />
   
   <div className=" opacity-0 absolute bottom-0 left-0 z-10 p-2
   
  ">
   <div className="text-[25px] font-bold">{movie.title}</div>
   <div className="text-[20px]"> {movie.release_date} <span
   className="mx-1">{Math.floor(movie.vote_average)} <i className="fa
   fa-star"></i></span></div>
  
  </div>
  
  <div className="h-0 w-full bg-black  opacity-0   absolute bottom-0
  left-0  card-overly" ></div>
  </div>
  )
}

export default Card;