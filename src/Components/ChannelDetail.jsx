import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { FetchfromAPI } from '../utils/FetchfromAPI';

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  // console.log(channelDetail, videos);
  useEffect(() => {
    FetchfromAPI(`channels?part=snippet&id=${id}`)
      .then(data => { setChannelDetail(data?.items[0]) });

    FetchfromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => { setVideos(data?.items) });

  }, [id])

  return (
    <Box minHeight='93vh'>
       <Box>
       <div style={{
        background:"linear-gradient(284deg, rgba(253,45,187,1) 0%, rgba(34,67,197,1) 96%)",
        zIndex:10,
        height:'300px'
       }}/>
         
       <ChannelCard  channelDetail={channelDetail} margintop={'-93px'} />
    </Box>
    <Box display="flex" p='2'>
      <Box sx={{mr:{sm:'100px'}}}/>
        <Videos videos={videos}/>
    </Box>
    </Box>
   
  )
}

export default ChannelDetail

