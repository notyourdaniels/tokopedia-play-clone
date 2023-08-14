import { 
    useColorModeValue,
    Card,
    CardBody, 
    CardFooter,
    Text,
    Heading
} from '@chakra-ui/react'

function VideoPlayerCard({ytCode, videoTitle, videoAuthor}) {
    const embedUrl = `https://www.youtube.com/embed/${ytCode}?autoplay=1`
    return (
        <Card 
            aspectRatio={['1','1','16/9','16/9','16/9','16/9']} 
            flex='1' 
            p={1}
            order={['-1', '-1', '-1', '-1', '0', '0']}
        >
            <CardBody>
                    <iframe
                        width="100%"
                        height="100%"
                        src={embedUrl}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
            </CardBody>
            <CardFooter flexDirection='column' gap={2}>
                <Heading>{videoTitle}</Heading>
                <Text fontSize='lg' color={useColorModeValue('blackAlpha.600', 'whiteAlpha.600')}>
                    {videoAuthor}
                </Text>
            </CardFooter>
        </Card>
    )
}

export default VideoPlayerCard;