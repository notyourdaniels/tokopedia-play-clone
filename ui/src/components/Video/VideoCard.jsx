import React, { useState } from 'react'

import { 
    useColorModeValue,
    Flex, 
    Heading,
    Text, 
    Image, 
    Card, 
    CardHeader, 
    CardBody,
    Link
} from '@chakra-ui/react'

import { Icon } from '@chakra-ui/react'
import { 
    MdOutlineModeComment,
    MdOutlineShoppingCart
} from 'react-icons/md'


import noThumbnail from '../../assets/no_thumbnail.png'

function ImageWithFallback({ src, fallbackSrc, alt, height }) {
    const [imgSrc, setImgSrc] = useState(src);
  
    const handleImgError = () => {
      setImgSrc(fallbackSrc);
    };
  
    return <Image src={imgSrc} alt={alt} height={height} onError={handleImgError} aspectRatio='16/9'/>;
  }

function VideoCard({ videoId, imgUrl, title, author, productCount, commentCount }) {
    return (
        <Link href={`/video/${videoId}`} style={{ textDecoration: 'none' }}>
            <Card
                w={['100%', '100%', '260px', '260px', '260px', '260px']} 
                _hover={{ 
                    boxShadow: "outline", 
                    transitionDuration: '0.2s', 
                    transitionTimingFunction: "ease-in-out" 
                }}>
                <CardHeader padding={0} aspectRatio='16/9'>
                    <ImageWithFallback src={imgUrl} fallbackSrc={noThumbnail} alt={title} height="100%" />
                </CardHeader>
                <CardBody padding={0}>
                    <Flex direction='column' gap={1} padding={5}>
                        <Heading size='sm'>{title}</Heading>
                        <Text fontSize='md' color={useColorModeValue('blackAlpha.600', 'whiteAlpha.600')}>{author}</Text>
                        <Flex alignItems='center' color={useColorModeValue('blackAlpha.600', 'whiteAlpha.600')} gap={1.5}>
                            <Flex alignItems='center' gap={1}>
                                <Icon as={MdOutlineModeComment} />
                                <Text fontSize='md'>{commentCount}</Text>
                            </Flex>
                            <Text>•</Text>
                            <Flex alignItems='center' gap={1}>
                                <Icon as={MdOutlineShoppingCart} />
                                <Text fontSize='md'>{productCount}</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </CardBody>
            </Card>
        </Link>
    )
}

export default VideoCard;