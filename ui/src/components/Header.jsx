import { 
    Flex,
    Box,
    Button,
    useColorMode,
    Image,
    Link
} from '@chakra-ui/react'

import { 
    MdWbSunny
} from 'react-icons/md'

import { 
    IoMoon
} from 'react-icons/io5'

import tokopedia_play_clone from "../assets/tokopedia_play_logo.png"

function Header() {
    const { colorMode, toggleColorMode } = useColorMode()
    return(
        <Box pl={8} pr={8} h='80px' w='100%'>
            <Flex justifyContent='space-between' alignItems='center' h='inherit'>
                <Link href="/">
                    <Image src={tokopedia_play_clone} alt="Tokopedia Play Clone" h='35px'/>
                </Link>
                <Button onClick={toggleColorMode} leftIcon={colorMode === 'light' ? <MdWbSunny/> : <IoMoon/>}>
                    {/* {colorMode === 'light' ? 'Light' : 'Dark'} Mode */}
                </Button>
            </Flex>
        </Box>
    )
}

export default Header;