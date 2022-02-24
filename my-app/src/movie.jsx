import {useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

 export default function Movie () {
    
  const [movie, setMovies] = useState([]);

  const {id} =useParams();
  
  useEffect(() => {
      getMovie();
  }, []);

    

    function getMovie() {
        axios.get(`http://localhost:8080/workSpace/taranom.yousefi-finalProject/my-app/api/movie/${id}`).then(function(response) {
            console.log(response.data);
            setMovies(response.data);
        });
    }


   return (
    <div>
         <div className="row mt-5"> 
                    <div className='col text-center p-5 mt-5'>
                            <p>{movie.name} </p>
                            <span>{movie.year}</span>
                            <span>{movie.description}</span>
                            <img src={movie.image} style={{width:'200px'}} alt="movie"/>     
                    </div>      
           </div>
           </div>
        )
            }
      
 