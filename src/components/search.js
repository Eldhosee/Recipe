import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const Search=(props)=>{
    console.log(props.query+"entered")
const [searchItem ,setSearchItem]=useState([]);
const options = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/feeds/auto-complete',
  params:{q: props.query},
  headers: {
    'X-RapidAPI-Key': '0fb3574a43msh1599ef89a74c382p135cbfjsn5c4e0195b16d',
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};
useEffect(() => {
   
    axios.request(options).then(function (response) {
        setSearchItem(response.data.ingredients)
    }).catch(function (error) {
        console.error(error);
    });
}, [props.query])


    return (
        <div>
           {
            searchItem.map(item=>(
                <ul>
                    <li>{item}</li>
                </ul>
            ))
           }
        </div>
    )

}
export default Search