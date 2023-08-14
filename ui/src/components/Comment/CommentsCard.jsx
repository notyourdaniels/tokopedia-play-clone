import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import CommentService from '../../services/CommentService';

import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Flex,
    Heading,
    Textarea,
    Button,
    Input
} from '@chakra-ui/react'

import { 
    MdSend
} from 'react-icons/md'

import Comment from './Comment'

const socket = io.connect('http://localhost:3000');

function CommentsCard ({videoId, orderBy}) {
    const [comments, setComments] = useState([]); 
    const [commentName, setName] = useState('');
    const [commentText, setCommentText] = useState('');


    useEffect(() => {
        socket.emit('join_commentRoom', videoId)

        CommentService.getAllComments(videoId, orderBy)
            .then(data => setComments(data))
            .catch(error => console.error('Error fetching comments:', error));
        
    }, []);

    // socket io
    useEffect(() => {
        socket.on("newComment", (data) => {

            setComments((prevComments) => [...prevComments, data]);
        })
      }, [socket]);

    const handleAddComment = async () => {
        try {
          if (!commentName || !commentText) {
            return;
          }
    
          const newComment = await CommentService.addComment(videoId, commentName, commentText);
          setComments((prevComments) => [...prevComments, newComment]);
          setName('');
          setCommentText('');
          
          socket.emit('newComment', newComment);
        } catch (error) {
          console.error('Error adding comment:', error);
        }
      };

    return (
        <Card  
            w={['100%', '100%', '100%', '100%', '350px', '350px']} 
            aspectRatio={['0','0','0','0','16/9','16/9']}
            maxH={['750px', '750px', '750px', '750px', '100%', '100%' ]} 
        >
                <CardHeader>
                    <Heading size='lg'>Comments</Heading>
                </CardHeader>

                <CardBody 
                    overflowY='scroll' 
                    maxH='100%' 
                    ref={(el) => { el && (el.scrollTop = el.scrollHeight); }}
                >
                    <Flex direction='column' gap={5}>
                        {comments.map((comment) => (
                            <Comment
                                key={comment._id}
                                postedBy={comment.postedBy}
                                timestamp={comment.timestamp}
                                text={comment.text}
                            />
                        ))}
                    </Flex>
                </CardBody>

                <CardFooter>
                <Flex direction='column' w='100%' gap={2}>
                    <Input
                    placeholder='Your Name'
                    value={commentName}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <Textarea
                    resize='none'
                    placeholder='Type Comment Here'
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    />
                    <Button
                    leftIcon={<MdSend />}
                    colorScheme='green'
                    variant='outline'
                    onClick={handleAddComment}
                    >
                    Submit
                    </Button>
                </Flex>
                </CardFooter>

            </Card>
    )
}

export default CommentsCard;