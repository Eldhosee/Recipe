import React from "react";
import './footer.css'
import image from './food.png'
const Footer=()=>{
    return(
        
        <div className="footer">
            
            <div className="footer-l">
            <h4>About</h4>
            <p>
            This site provides a mix of recipe ideas and food-related articles. The ‘What We’re Cooking This Week’ pages offer a great selection of themed treats, from soups and meat dishes to sweet treats and party nibbles.
            </p>
            </div>
            <div className="footer-r">
                <img src={image} alt="image" className="img"/>
            </div>
        </div>
    )
}
export default Footer