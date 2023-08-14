import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import VideoService from '../services/VideoService'

import { 
    Flex
} from '@chakra-ui/react'

import Header from '../components/Header';
import ProductsCard from '../components/Product/ProductsCard';
import CommentsCard from '../components/Comment/CommentsCard';
import VideoPlayerCard from '../components/Video/VideoPlayerCard';

function Video() {
  const { videoId } = useParams();

  const [video, setVideo] = useState([]);
  const [ytCodeTrim, setYtCodeTrim] = useState([]);
  
    useEffect(() => {
        VideoService.getVideoById(videoId)
            .then(data => {
              setVideo(data)
              setYtCodeTrim(data.videoUrl.replace(/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+).*$/, '$1'));
            })
            .catch(error => console.error('Error fetching video:', error));
    }, []);

  return (
    <Flex 
      w="100%" 
      direction='column' 
      alignItems={['none', 'none', 'none', 'none', 'none', 'center', 'center']}
      minH='100vh'
    >
        <Header />
        <Flex 
          gap={4} pl={8} pr={8} 
          direction={['column', 'column', 'column', 'column', 'row', 'row']}
          maxW={1700}
          w='100%'
          flex='1'
          pt={4}
          pb={10}
          maxH={['100%', '100%', '100%', '100%', '100%', '1080px', '1080px']}
        >
          <ProductsCard videoId={videoId}/>
          <VideoPlayerCard ytCode={ytCodeTrim} videoTitle={video.title} videoAuthor={video.uploader}/>    
          <CommentsCard videoId={videoId} orderBy="asc"/>
        </Flex>    
    </Flex>
    
  );
}

export default Video;