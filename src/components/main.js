import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { CardActionArea, CardContent, Typography} from '@mui/material';
import './main.css'
import Loader from './loader';

function Recipe(props) {
    const [items, setItems] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://yummly2.p.rapidapi.com/feeds/list',
        params: {limit: '24', start: '0'},
        headers: {
          'X-RapidAPI-Key':process.env.REACT_APP__KEY,
          'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
        }
      };
      
      useEffect(()=>{
                axios.request(options)
                .then(function (response) {
                    setItems(response.data.feed)
                    props.changeLoading(1)
                })
               
                .catch(function (error) {
                    console.error(error);
                });
    },[]);
    
  return (
    <>
    {props.loading==0?
     <Loader/>
    :
    <div>

        {
          props.query?
          <div>
            {props.query.map(item=>(
              <ol>
                <li>{item}</li>
              </ol>
            ))}
          </div>
          :
          <div>
         
         
      <div className='main'>
      <div className='h2'>
        <h2>Recipe</h2>
      </div>
      
          <Grid container spacing={1} olumns={{ xs: 4, sm: 8, md: 12 }}>
              { items.map((item)=>
                (
                    item.display.source && item.display.source.sourceRecipeUrl)&&
                  (
                    <Grid item xs={12} sm={6} md={4}>
                      <CardActionArea href={item.display.source.sourceRecipeUrl} >
                        <Card className='card' >
                          <CardMedia
                          className='card'
                            component="img"
                            alt="images"
                            height="240"
                            width="500"
                            image={item.display.images}
                          />
                            <CardContent className='content'>
                              <Typography variant="h5" color="black">
                                {item.display.displayName}
                              </Typography>
                            </CardContent>
                        </Card>
                      </CardActionArea>
                    </Grid>
                  
              )
             
                )}
                </Grid>
                </div>
                
                </div>
        } 
       
    </div>
     } 
    </>
  )
}

export default Recipe