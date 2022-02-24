import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function AddMovie () {

    const navigate = useNavigate();
     const [inputs,setMovie] =useState([]);

     const handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
           setMovie(values =>({...values,[name]: value}));

     }
     const handleSubmit=(event)=>{
         event.preventDefault();
         axios.post('http://localhost:8080/workSpace/taranom.yousefi-finalProject/my-app/api/movie/submit',inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
         
     }
 return ( 
<div className="row mt-5">
  <form className="mt-5" >
  <div className="mb-3 mt-5">
    <label className="form-label">Name:</label>
    <input className="form-control" type="text"  placeholder="Enter name" name="name" onChange={handleChange}/>
 </div>
 <div className="mb-3 ">
    <label  className="form-label">Image:</label>
    <input  className="form-control" type="text" name="image" onChange={handleChange}/>
</div>
 <div className="mb-3">
    <label className="form-label">Year:</label>
    <input className="form-control" type="text"  placeholder="Enter Year"  name="year" onChange={handleChange}/>
</div>  
<div className="mb-3">
    <label className="form-label">Description:</label>
    <input className="form-control" type="text"  placeholder="Enter Description" name="description" onChange={handleChange}/>
</div>  

     <button className="btn btn-primary mb-2 " onClick={handleSubmit}>Submit</button>  
  </form>
  </div>
 )
    
}
 
 