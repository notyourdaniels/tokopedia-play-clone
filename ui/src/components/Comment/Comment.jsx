import moment from 'moment';

import {
    useColorModeValue,
    Flex,
    Avatar,
    Text,
    Box
} from '@chakra-ui/react'

function Comment({ postedBy, timestamp, text }) {
    const timeAgo = moment(timestamp).fromNow();
    return(
        <Flex gap={3}>
            <Avatar name={postedBy}/>
            <Flex direction='column' gap={2}>
                <Box>
                    <Text 
                        as='span' 
                        fontWeight='bold' 
                        mr={2}
                    >{postedBy}</Text>
                    <Text 
                        as ='span'
                        color={useColorModeValue(
                            'blackAlpha.600', 
                            'whiteAlpha.600')
                        }
                    >{timeAgo}</Text>
                </Box>
                <Text>{text}</Text>
            </Flex>
        </Flex>
    )
}

export default Comment;