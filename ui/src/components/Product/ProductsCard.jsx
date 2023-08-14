import React, { useState, useEffect } from 'react';
import ProductService from '../../services/ProductService';

import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Text,
    Flex,
    Heading,
    Textarea,
    Button,
    Input
} from '@chakra-ui/react'

import { Icon } from '@chakra-ui/react'
import { 
    MdOutlineModeComment,
    MdSend
} from 'react-icons/md'

import Product from './Product'

function ProductsCard ({ videoId }) {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        ProductService.getAllProductLists(videoId)
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <Card 
        w={['100%', '100%', '100%', '100%', '350px', '350px']} 
        aspectRatio={['0','0','0','0','16/9','16/9']}
        >
                <CardHeader>
                    <Heading size='lg'>Products</Heading>
                </CardHeader>
                <CardBody 
                overflowY= {['hidden', 'hidden', 'hidden', 'hidden', 'scroll', 'scroll']}
                overflowX= {['scroll', 'scroll', 'scroll', 'scroll', 'hidden', 'hidden']}
                maxH='100%'>
                    <Flex 
                    direction={['row', 'row', 'row', 'row', 'column', 'column',]} gap={5}
                    
                    >
                        {products.map((product, index) => (
                            <Product
                                key={product._id}
                                number={index + 1} 
                                productLink={product.productLink} 
                                title={product.title}
                                price={product.price} 
                            />
                        ))}
                    </Flex>
                </CardBody>
            </Card>
    )
}

export default ProductsCard;