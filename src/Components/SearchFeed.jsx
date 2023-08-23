import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Videos from './Videos';
import {FetchfromAPI} from '../utils/FetchfromAPI';


const SearchFeed = () => {
  
const [videos,setVideos] = useState([]);
const {searchTerm} = useParams();
useEffect(()=>{
    FetchfromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>{setVideos(data.items)})
    .catch(error=>{
      console.log(error.message);
    })
},[searchTerm]);

  return (
   
    <Box ml='100px'>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
    Search Results for:<span style={{color:"#ff7043",marginLeft:"8px"}}>{searchTerm}</span> 
    </Typography>
    <Videos videos={videos}/>
  </Box>
    
  )
}

export default SearchFeed

