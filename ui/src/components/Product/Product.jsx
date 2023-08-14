import {
    useColorModeValue,
    Box,
    Flex,
    Avatar,
    Text,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Link,
    Button
} from '@chakra-ui/react'


function Product({ number, productLink, title, price }) {
    return(
        <Card variant='outline' direction={{ base: 'column', sm: 'row' }} minW={300}>
                <CardBody>
                    <Flex gap={5} alignItems='center'>
                        <Heading p={2}>{number}</Heading>
                        <Flex>
                            <Flex direction='column' gap={3}>
                                <Flex direction='column' gap={1}>
                                <Link>
                                    <Heading size='md'>{title}</Heading>
                                </Link>
                                <Text>{price}</Text>
                                </Flex>
                                <Link href={productLink} isExternal>
                                    <Button>
                                        View Product
                                    </Button>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                </CardBody>
        </Card>
    )
}

export default Product;