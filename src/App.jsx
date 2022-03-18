import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Flex } from '@chakra-ui/react'

import Container from './components/Container/Container'

function App() {
    return (
        <>
            <Navbar />
            <Flex
                bg="bgWhite"
                className="debug"
                h="100vh"
                minW="320px"
                color="textDark.900"
                direction="column"
                align={'center'}
                pt="6rem"
                fontFamily="roboto"
            >
                <Flex direction="column" align="center" rounded="lg">
                    <Container />
                </Flex>
            </Flex>
        </>
    )
}

export default App
