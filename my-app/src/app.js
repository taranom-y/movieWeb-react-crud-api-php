
import React,{Component} from "react";
import Navbar from "./navbar";
import AddMovie from "./addMovie";
import SearchMovie from "./searchMovie";
import Movies from "./movies";
import ShowList from "./showList";
import ShowGrid from "./showGrid";
import Movie from "./movie";
import { Routes ,Route } from 'react-router-dom';




class App extends Component {
  render() {
    return(
         <>
      <div className="bg-secondary bg-gradient">
       <Navbar />
        <Routes>
           <Route path="/" element ={<Movies/>} />  
            <Route path="/addMovie" element ={<AddMovie/>} />
            <Route path="/searchMovie" element ={<SearchMovie/>} />
            <Route path="/showGrid" element ={<ShowGrid/>} />
            <Route path="/showList" element ={<ShowList/>} />
            <Route path="/movies/:id" element ={<Movie/>} />
        </Routes>
        </div>
      </>
      
      );

  }
 }
  
 export default App;
 