
import axios from 'axios'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Movies() {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovie();
    }, []);

    function getMovie() {
        axios.get('http://localhost:8080/workSpace/taranom.yousefi-finalProject/my-app/api/movies/').then(function(response) {
            console.log(response.data);
            setMovies(response.data);
        });
    }

    return (
            <div className="row mt-5"> {movies.map((movie,key)=>
                    <div key={key} className='col-4 text-center p-5  mt-5'>
                    <img src={movie.image} style={{width:'200px'}} alt=""/>
                       <Link to={`movies/${movie.id}`}>
                           <h4>{movie.name} {movie.year}</h4>
                        </Link> 
                    </div>
                )
             
          }
           </div>
            
    )
}
      
