import { useState} from "react";
import axios from "axios";

export default function SearchMovie (){

  const [input, setMovie] = useState([]);

  const handleChange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
       setMovie(values =>({...values,[name]: value}));

    }
 const handleSearch=(event)=>{
     event.preventDefault();
     axios.get(`http://localhost:8080/workSpace/taranom.yousefi-finalProject/my-app/api/movie/search`,input).then(function(response){
        console.log(response.data);
        setMovie(response.data);
      
    });
  }
        return (
          <div>
            <form className="mt-5" >
            <div className="row mt-5">
               <div className="col mt-5 ">
               <input className="form-control mt-5" placeholder="Enter Id" name="Id" onChange={handleChange}/>
               <button className="btn btn-primary mt-2 " onClick={handleSearch}>Search</button>
               </div>
              <div className="col mt-5">
            <input className="form-control mt-5 " placeholder="Enter Name" name="name" onChange={handleChange}/>
            <button className="btn btn-primary mt-2 " onClick={handleSearch} >Search</button>
           </div>
         </div>
       </form>
      < div className="row mt-5"> {input.map((movie,key)=>
                    <div className='col text-center p-5 mt-5' key={key}>
                            <p value={input.name}> </p>
                            <span value= {input.year} ></span>
                            <span value={input.description}></span>
                            <img src={input.image} style={{width:'200px'}} alt="movie"/>   
                    </div>
                     )}
           </div>
       </div>  
        )
      
}

