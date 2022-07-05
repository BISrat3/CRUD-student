import React from "react";
import {Link} from "react-router-dom"


function Header(){
  return(
    <nav>
        <h1>hello world
        </h1>
         <Link to="/" className="link">
            <span className="navbar"> Student Record</span>
        </Link> 
    </nav>
  )
}

export default Header