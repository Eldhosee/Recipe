import React from "react";
import image from './foodgif.mp4'
import './header.css'
import { useState } from "react";
const Header=(props)=>{
    const [searchTerm, setSearchTerm] = useState("");
    const search=(props1)=>{
        props.changeQuery(props1);

    };
    return(
        <div className="mainheader">
            
            <video autoPlay muted loop src={image} className="logo"/>
            <div className="header-r">
                <h2>Recipe World ...</h2>
            </div>  
            
            <div className="header-l">
                <input type='text'  className="search" placeholder="Search" value={searchTerm}
                onChange={(e)=>
                    setSearchTerm(e.target.value)
                    
                }
                /> 
                <input type='button' className="submit" value="Search" 
                onClick={()=>{
               
                search(searchTerm)
                setSearchTerm('')
                          }}/>
                
            </div>
            
            <div className="text">
                <p>Find thousands of recipes at a single place...</p>

            </div>
        </div>
    )
}
export default Header;