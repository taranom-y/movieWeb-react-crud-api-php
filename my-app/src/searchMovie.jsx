import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchMovie (){
  
        return (
          <div>
            <form className="mt-5" >
            <div className="row mt-5">
               <div className="col mt-5 ">
               <input className="form-control mt-5" placeholder="Enter Id" name="Id"/>
               <button className="btn btn-primary mt-2 " >Search</button>
               </div>
              <div className="col mt-5">
            <input className="form-control mt-5 " placeholder="Enter Name" name="name"/>
            <button className="btn btn-primary mt-2 " >Search</button>
           </div>
         </div>
       </form>
       </div>  
        )
      
}
 
