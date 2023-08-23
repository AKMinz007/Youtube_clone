import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import {FetchfromAPI} from '../utils/FetchfromAPI';
import {Loader} from './';


const Feed = () => {
  
const [selectedCategory,setSelectedCategory] = useState("New");
const [videos,setVideos] = useState([]);
useEffect(()=>{
    FetchfromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{setVideos(data.items)})
    .catch(error=>{
      console.log(error.message);
    })
},[selectedCategory]);

if(!videos?.length) return <Loader/>

  return (
    <Stack sx={{
      flexDirection: {
        sx:"column", md: "row"
      }
    }}>
      <Box sx={{
        height: { sx: "auto", md: "92vh" },
        borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 }
      }}>
        <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{mt:1.5 , color: "#fff" }}>
          Copyright 2023 React JS Media
        </Typography>
      </Box>

      <Box ml={3}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
        {selectedCategory}<span style={{color:"#ff7043",marginLeft:"8px"}}>Videos</span> 
        </Typography>
        <Videos videos={videos}/>
      </Box>
     
    </Stack>
  )
}

export default Feed
