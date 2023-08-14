import { useState, useEffect } from 'react'
import VideoService from '../services/VideoService'


import {
    Flex
} from '@chakra-ui/react'

import VideoCard from '../components/Video/VideoCard.jsx'
import Header from '../components/Header.jsx';

function Home() {
  const [videos, setVideos] = useState([]);

    useEffect(() => {
        VideoService.getAllVideos()
            .then(data => setVideos(data))
            .catch(error => console.error('Error fetching video:', error));
    });

  return (
    <Flex
      w="100%" 
      direction='column' 
      alignItems='center'
      justifyContent='center'
      gap={4}
    >
      <Header />
      <Flex gap={4} flexWrap="wrap" maxW='1700px' mr={8} ml={8}>
        {videos.map((video) => (
          <VideoCard 
            key={video._id} 
            imgUrl={video.imgUrl}  
            title={video.title} 
            author={video.uploader}
            productCount={video.productsCount}
            commentCount={video.commentsCount}
            videoId={video._id}  
          />
        ))}
      </Flex>
    </Flex>
  )
}
  
export default Home;