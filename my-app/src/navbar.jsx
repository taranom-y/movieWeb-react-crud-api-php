
import {Link} from "react-router-dom";

export default function  Navbar(){

  
        return (   
         <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
             <img className="rounded-circle" src="logo.png"  style={{width:'100px'}} alt="logo"></img>
            <ul className="navbar-nav"> 
            <li className="nav-item ">
            <Link to="/"  className="btn btn-outline-dark text-white" ><i className="material-icons p-2"  style={{fontSize:'25px'}}>home</i></Link>
            </li>
            <li className="nav-item">
             <Link to="/searchMovie" className="btn btn-outline-dark text-white" role="button"><i className="material-icons p-2" style={{fontSize:'25px'}}>find_in_page</i></Link>
             </li>
             <li className="nav-item">
             <Link to="/addMovie"  className="btn btn-outline-dark text-white" role="button"><i className="material-icons p-2"  style={{fontSize:'25px'}}>playlist_add</i></Link>
             </li>
             <li className="nav-item">
             <Link to="/showList"  className="btn btn-outline-dark text-white" role="button"><i className="material-icons p-2" style={{fontSize:'25px'}}>dehaze</i></Link>
             </li>
             <li className="nav-item">
             <Link to="/showGrid" className="btn btn-outline-dark  text-white" role="button" ><i className="material-icons p-2" style={{fontSize:'25px'}}>grid_on</i></Link>
             </li>
             </ul>
         </nav>

        );
    
}
 