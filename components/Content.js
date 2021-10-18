import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import SbEditable from 'storyblok-react'

const Content = ({ blok }) => {
    return (
        <SbEditable content={blok}>
            <Flex bgColor='black' color="white" textAlign="center" width="100% " maxW='360px' direction="column">
                <Heading size="lg"> {blok.title} </Heading>
                <Text mt="30px" fontSize="18px">{blok.description}</Text>
                <Image w="100%" h='150px' mt="54px" src={blok.src} alt={blok.alt} />
            </Flex>
        </SbEditable>
    )
}

export default Content